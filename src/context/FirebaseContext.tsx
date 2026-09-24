import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User as FirebaseUser,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  collection,
  onSnapshot,
  deleteDoc,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firebaseErrors';

export interface FavoriteItem {
  id: string;
  userId: string;
  itemId: string;
  itemType: 'animal' | 'nature' | 'universe' | 'shape' | 'sensation';
  title: string;
  emoji: string;
  createdAt?: unknown;
}

export interface DiscoveryItem {
  id: string;
  userId: string;
  title: string;
  category: string;
  notes: string;
  emoji: string;
  createdAt?: unknown;
}

export interface UserProfile {
  userId: string;
  displayName: string;
  photoURL: string;
  soundGameScore: number;
  totalExplorations: number;
  createdAt?: unknown;
  updatedAt?: unknown;
}

interface FirebaseContextType {
  user: FirebaseUser | null;
  authLoading: boolean;
  userProfile: UserProfile | null;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
  favorites: FavoriteItem[];
  isFavorite: (itemId: string) => boolean;
  toggleFavorite: (item: {
    itemId: string;
    itemType: 'animal' | 'nature' | 'universe' | 'shape' | 'sensation';
    title: string;
    emoji: string;
  }) => Promise<void>;
  soundGameHighScore: number;
  updateGameScore: (score: number) => Promise<void>;
  incrementExploration: () => Promise<void>;
  discoveries: DiscoveryItem[];
  addDiscovery: (discovery: {
    title: string;
    category: string;
    notes: string;
    emoji: string;
  }) => Promise<void>;
  deleteDiscovery: (id: string) => Promise<void>;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

// Input sanitizer helper to defend against payload limit violations
function sanitizeString(val: string, maxLen: number): string {
  return (val || '').trim().slice(0, maxLen);
}

function sanitizeId(val: string): string {
  return (val || '').replace(/[^a-zA-Z0-9_\-]/g, '_').slice(0, 128);
}

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [discoveries, setDiscoveries] = useState<DiscoveryItem[]>([]);

  // 1. Listen for Authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        setUserProfile(null);
        setFavorites([]);
        setDiscoveries([]);
        setAuthLoading(false);
        return;
      }

      const userPath = `users/${currentUser.uid}`;
      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userDocRef);

        if (!userSnap.exists()) {
          // Initialize user document with defensive defaults
          const initialProfile: UserProfile = {
            userId: currentUser.uid,
            displayName: sanitizeString(currentUser.displayName || 'Nature Explorer', 100),
            photoURL: sanitizeString(currentUser.photoURL || '', 500),
            soundGameScore: 0,
            totalExplorations: 1,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          };

          await setDoc(userDocRef, initialProfile);
          setUserProfile(initialProfile);
        } else {
          setUserProfile(userSnap.data() as UserProfile);
        }
      } catch (err) {
        // Provide safe fallback profile so UI remains responsive even if offline
        setUserProfile({
          userId: currentUser.uid,
          displayName: sanitizeString(currentUser.displayName || 'Nature Explorer', 100),
          photoURL: sanitizeString(currentUser.photoURL || '', 500),
          soundGameScore: 0,
          totalExplorations: 1,
        });
        handleFirestoreError(err, OperationType.GET, userPath);
      } finally {
        setAuthLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // 2. Real-time listener for user profile updates
  useEffect(() => {
    if (!user) return;
    const userPath = `users/${user.uid}`;
    const userDocRef = doc(db, 'users', user.uid);

    const unsubscribe = onSnapshot(
      userDocRef,
      (docSnap) => {
        if (docSnap.exists()) {
          setUserProfile(docSnap.data() as UserProfile);
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, userPath);
      }
    );

    return () => unsubscribe();
  }, [user]);

  // 3. Real-time listener for Favorites
  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }

    const favoritesPath = `users/${user.uid}/favorites`;
    const favsCollectionRef = collection(db, 'users', user.uid, 'favorites');

    const unsubscribe = onSnapshot(
      favsCollectionRef,
      (snapshot) => {
        const items: FavoriteItem[] = [];
        snapshot.forEach((d) => {
          items.push(d.data() as FavoriteItem);
        });
        setFavorites(items);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, favoritesPath);
      }
    );

    return () => unsubscribe();
  }, [user]);

  // 4. Real-time listener for Discoveries
  useEffect(() => {
    if (!user) {
      setDiscoveries([]);
      return;
    }

    const discoveriesPath = `users/${user.uid}/discoveries`;
    const discoveriesRef = collection(db, 'users', user.uid, 'discoveries');

    const unsubscribe = onSnapshot(
      discoveriesRef,
      (snapshot) => {
        const items: DiscoveryItem[] = [];
        snapshot.forEach((d) => {
          items.push(d.data() as DiscoveryItem);
        });
        setDiscoveries(items);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, discoveriesPath);
      }
    );

    return () => unsubscribe();
  }, [user]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Google Sign In failed:', error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign Out failed:', error);
    }
  };

  const isFavorite = (itemId: string): boolean => {
    return favorites.some((f) => f.itemId === itemId);
  };

  const toggleFavorite = async (item: {
    itemId: string;
    itemType: 'animal' | 'nature' | 'universe' | 'shape' | 'sensation';
    title: string;
    emoji: string;
  }) => {
    if (!user) {
      // Prompt user to sign in
      await signInWithGoogle();
      return;
    }

    const cleanItemId = sanitizeId(item.itemId);
    const favId = `fav_${cleanItemId}`;
    const favoriteDocPath = `users/${user.uid}/favorites/${favId}`;
    const favDocRef = doc(db, 'users', user.uid, 'favorites', favId);

    const existing = favorites.find((f) => f.itemId === item.itemId);
    if (existing) {
      try {
        await deleteDoc(favDocRef);
      } catch (error) {
        handleFirestoreError(error, OperationType.DELETE, favoriteDocPath);
      }
    } else {
      const payload: FavoriteItem = {
        id: favId,
        userId: user.uid,
        itemId: cleanItemId,
        itemType: item.itemType,
        title: sanitizeString(item.title, 100),
        emoji: sanitizeString(item.emoji, 20),
        createdAt: serverTimestamp(),
      };

      try {
        await setDoc(favDocRef, payload);
      } catch (error) {
        handleFirestoreError(error, OperationType.CREATE, favoriteDocPath);
      }
    }
  };

  const updateGameScore = async (score: number) => {
    if (!user) return;
    if (userProfile && score <= (userProfile.soundGameScore || 0)) return;

    const userPath = `users/${user.uid}`;
    const userDocRef = doc(db, 'users', user.uid);
    try {
      await updateDoc(userDocRef, {
        soundGameScore: Math.min(score, 1000000),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, userPath);
    }
  };

  const incrementExploration = async () => {
    if (!user || !userProfile) return;
    const userPath = `users/${user.uid}`;
    const userDocRef = doc(db, 'users', user.uid);
    try {
      await updateDoc(userDocRef, {
        totalExplorations: (userProfile.totalExplorations || 0) + 1,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, userPath);
    }
  };

  const addDiscovery = async (discovery: {
    title: string;
    category: string;
    notes: string;
    emoji: string;
  }) => {
    if (!user) {
      await signInWithGoogle();
      return;
    }

    const discoveryId = sanitizeId(`disc_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`);
    const discoveryPath = `users/${user.uid}/discoveries/${discoveryId}`;
    const docRef = doc(db, 'users', user.uid, 'discoveries', discoveryId);

    const payload: DiscoveryItem = {
      id: discoveryId,
      userId: user.uid,
      title: sanitizeString(discovery.title, 100),
      category: sanitizeString(discovery.category, 50),
      notes: sanitizeString(discovery.notes, 1000),
      emoji: sanitizeString(discovery.emoji || '🌿', 20),
      createdAt: serverTimestamp(),
    };

    try {
      await setDoc(docRef, payload);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, discoveryPath);
    }
  };

  const deleteDiscovery = async (id: string) => {
    if (!user) return;
    const discoveryId = sanitizeId(id);
    const discoveryPath = `users/${user.uid}/discoveries/${discoveryId}`;
    const docRef = doc(db, 'users', user.uid, 'discoveries', discoveryId);

    try {
      await deleteDoc(docRef);
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, discoveryPath);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        authLoading,
        userProfile,
        signInWithGoogle,
        signOutUser,
        favorites,
        isFavorite,
        toggleFavorite,
        soundGameHighScore: userProfile?.soundGameScore || 0,
        updateGameScore,
        incrementExploration,
        discoveries,
        addDiscovery,
        deleteDiscovery,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};
