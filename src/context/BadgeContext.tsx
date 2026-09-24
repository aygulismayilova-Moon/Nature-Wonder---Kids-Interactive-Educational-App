import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { DigitalBadge, ExplorerProfileStats, Language } from '../types';
import { INITIAL_DIGITAL_BADGES } from '../data/badgesData';
import { sound } from '../utils/soundEngine';
import confetti from 'canvas-confetti';
import { useFirebase } from './FirebaseContext';

interface ExplorerRank {
  title: Record<Language, string>;
  level: number;
  icon: string;
}

interface BadgeContextType {
  explorerName: string;
  setExplorerName: (name: string) => void;
  explorerAvatar: string;
  setExplorerAvatar: (avatar: string) => void;
  badges: DigitalBadge[];
  stats: ExplorerProfileStats;
  unlockBadge: (badgeId: string) => boolean;
  checkAndAwardQuizBadges: (quizResult: {
    category: string;
    score: number;
    maxStreak: number;
    totalQuestions: number;
  }) => DigitalBadge[];
  recordCategoryExplored: (category: string) => void;
  newlyUnlockedBadge: DigitalBadge | null;
  dismissNewBadge: () => void;
  isProfileOpen: boolean;
  setIsProfileOpen: (open: boolean) => void;
  unlockedBadgesCount: number;
  totalBadgesCount: number;
  explorerRank: ExplorerRank;
  totalPoints: number;
}

const STORAGE_KEY_PROFILE = 'nature_wonder_explorer_profile';
const STORAGE_KEY_BADGES = 'nature_wonder_explorer_badges';

const BadgeContext = createContext<BadgeContextType | undefined>(undefined);

export const BadgeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useFirebase();

  // 1. Explorer Name & Avatar
  const [explorerName, setExplorerNameState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.explorerName) return parsed.explorerName;
      }
    } catch {
      // fallback
    }
    return '';
  });

  const [explorerAvatar, setExplorerAvatarState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.avatar) return parsed.avatar;
      }
    } catch {
      // fallback
    }
    return '🦁';
  });

  // 2. Stats
  const [stats, setStats] = useState<ExplorerProfileStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          explorerName: parsed.explorerName || '',
          avatar: parsed.avatar || '🦁',
          totalQuizzesCompleted: parsed.totalQuizzesCompleted || 0,
          totalScore: parsed.totalScore || 0,
          highestStreak: parsed.highestStreak || 0,
          exploredCategories: parsed.exploredCategories || []
        };
      }
    } catch {
      // fallback
    }
    return {
      explorerName: '',
      avatar: '🦁',
      totalQuizzesCompleted: 0,
      totalScore: 0,
      highestStreak: 0,
      exploredCategories: []
    };
  });

  // 3. Badges State
  const [badges, setBadges] = useState<DigitalBadge[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BADGES);
      if (saved) {
        const parsed: Record<string, { isUnlocked: boolean; unlockedAt: string }> = JSON.parse(saved);
        return INITIAL_DIGITAL_BADGES.map((b) => {
          if (parsed[b.id] && parsed[b.id].isUnlocked) {
            return {
              ...b,
              isUnlocked: true,
              unlockedAt: parsed[b.id].unlockedAt
            };
          }
          return b;
        });
      }
    } catch {
      // fallback
    }
    return INITIAL_DIGITAL_BADGES;
  });

  // 4. Modal Overlay state
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  // 5. Celebration Toast for newly unlocked badge
  const [newlyUnlockedBadge, setNewlyUnlockedBadge] = useState<DigitalBadge | null>(null);

  // Sync with Firebase user displayName if available and not yet set
  useEffect(() => {
    if (user?.displayName && !explorerName) {
      setExplorerNameState(user.displayName);
    }
  }, [user, explorerName]);

  // Persist Profile to LocalStorage
  const persistProfile = useCallback(
    (name: string, avatar: string, newStats: ExplorerProfileStats) => {
      try {
        localStorage.setItem(
          STORAGE_KEY_PROFILE,
          JSON.stringify({
            explorerName: name,
            avatar,
            ...newStats
          })
        );
      } catch {
        // ignore
      }
    },
    []
  );

  // Persist Badges to LocalStorage
  const persistBadges = useCallback((updatedBadges: DigitalBadge[]) => {
    try {
      const map: Record<string, { isUnlocked: boolean; unlockedAt?: string }> = {};
      updatedBadges.forEach((b) => {
        if (b.isUnlocked) {
          map[b.id] = { isUnlocked: true, unlockedAt: b.unlockedAt };
        }
      });
      localStorage.setItem(STORAGE_KEY_BADGES, JSON.stringify(map));
    } catch {
      // ignore
    }
  }, []);

  const setExplorerName = useCallback(
    (name: string) => {
      const trimmed = name.trim().slice(0, 50);
      setExplorerNameState(trimmed);
      setStats((prev) => {
        const next = { ...prev, explorerName: trimmed };
        persistProfile(trimmed, explorerAvatar, next);
        return next;
      });
    },
    [explorerAvatar, persistProfile]
  );

  const setExplorerAvatar = useCallback(
    (avatar: string) => {
      setExplorerAvatarState(avatar);
      setStats((prev) => {
        const next = { ...prev, avatar };
        persistProfile(explorerName, avatar, next);
        return next;
      });
    },
    [explorerName, persistProfile]
  );

  // Unlock single badge helper
  const unlockBadge = useCallback(
    (badgeId: string): boolean => {
      let newlyAwarded: DigitalBadge | null = null;

      setBadges((prev) => {
        const existing = prev.find((b) => b.id === badgeId);
        if (!existing || existing.isUnlocked) return prev; // already unlocked

        const unlockedBadge: DigitalBadge = {
          ...existing,
          isUnlocked: true,
          unlockedAt: new Date().toISOString()
        };
        newlyAwarded = unlockedBadge;

        const nextBadges = prev.map((b) => (b.id === badgeId ? unlockedBadge : b));
        persistBadges(nextBadges);
        return nextBadges;
      });

      if (newlyAwarded) {
        sound.playReward();
        setNewlyUnlockedBadge(newlyAwarded);
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
        } catch {
          // ignore
        }
        return true;
      }
      return false;
    },
    [persistBadges]
  );

  // Record exploration of a category
  const recordCategoryExplored = useCallback(
    (category: string) => {
      if (!category || category === 'all') return;
      setStats((prev) => {
        if (prev.exploredCategories.includes(category)) return prev;
        const nextCategories = [...prev.exploredCategories, category];
        const nextStats = { ...prev, exploredCategories: nextCategories };
        persistProfile(explorerName, explorerAvatar, nextStats);

        // Check 3+ categories badge
        if (nextCategories.length >= 3) {
          setTimeout(() => unlockBadge('multi_category_master'), 400);
        }
        return nextStats;
      });
    },
    [explorerName, explorerAvatar, persistProfile, unlockBadge]
  );

  // Check and award all eligible badges when a quiz finishes
  const checkAndAwardQuizBadges = useCallback(
    (quizResult: {
      category: string;
      score: number;
      maxStreak: number;
      totalQuestions: number;
    }) => {
      const awarded: DigitalBadge[] = [];

      // Update quiz stats
      const nextQuizzesCompleted = stats.totalQuizzesCompleted + 1;
      const nextTotalScore = stats.totalScore + quizResult.score;
      const nextHighestStreak = Math.max(stats.highestStreak, quizResult.maxStreak);
      const nextCategories = stats.exploredCategories.includes(quizResult.category)
        ? stats.exploredCategories
        : quizResult.category !== 'all'
        ? [...stats.exploredCategories, quizResult.category]
        : stats.exploredCategories;

      const updatedStats: ExplorerProfileStats = {
        ...stats,
        totalQuizzesCompleted: nextQuizzesCompleted,
        totalScore: nextTotalScore,
        highestStreak: nextHighestStreak,
        exploredCategories: nextCategories
      };

      setStats(updatedStats);
      persistProfile(explorerName, explorerAvatar, updatedStats);

      // Check Badges:
      // 1. First Quiz
      if (nextQuizzesCompleted >= 1) {
        const u = unlockBadge('first_quiz');
        if (u) {
          const b = badges.find((x) => x.id === 'first_quiz');
          if (b) awarded.push(b);
        }
      }

      // 2. Cheetah Streak (3 in a row)
      if (quizResult.maxStreak >= 3) {
        const u = unlockBadge('cheetah_streak');
        if (u) {
          const b = badges.find((x) => x.id === 'cheetah_streak');
          if (b) awarded.push(b);
        }
      }

      // 3. High Scorer (80%+)
      const percentage = (quizResult.score / Math.max(quizResult.totalQuestions, 1)) * 100;
      if (percentage >= 80) {
        const u = unlockBadge('high_scorer');
        if (u) {
          const b = badges.find((x) => x.id === 'high_scorer');
          if (b) awarded.push(b);
        }
      }

      // 4. Perfect 10
      if (quizResult.score === quizResult.totalQuestions && quizResult.totalQuestions >= 10) {
        const u = unlockBadge('perfect_ten');
        if (u) {
          const b = badges.find((x) => x.id === 'perfect_ten');
          if (b) awarded.push(b);
        }
      }

      // 5. Category specific completions
      if (quizResult.category === 'animals') {
        unlockBadge('animals_expert');
      } else if (quizResult.category === 'nature') {
        unlockBadge('nature_guardian');
      } else if (quizResult.category === 'universe') {
        unlockBadge('cosmic_voyager');
      } else if (quizResult.category === 'shapes') {
        unlockBadge('geometry_whiz');
      } else if (quizResult.category === 'sensations') {
        unlockBadge('taste_detective');
      } else if (quizResult.category === 'numbers-alphabet') {
        unlockBadge('numbers_hero');
      }

      // 6. Multi category (3+)
      if (nextCategories.length >= 3) {
        unlockBadge('multi_category_master');
      }

      // 7. Quiz veteran (5+ quizzes)
      if (nextQuizzesCompleted >= 5) {
        unlockBadge('quiz_veteran');
      }

      return awarded;
    },
    [stats, persistProfile, explorerName, explorerAvatar, unlockBadge, badges]
  );

  const dismissNewBadge = useCallback(() => {
    setNewlyUnlockedBadge(null);
  }, []);

  const unlockedBadgesCount = useMemo(() => {
    return badges.filter((b) => b.isUnlocked).length;
  }, [badges]);

  const totalBadgesCount = badges.length;

  const totalPoints = useMemo(() => {
    return badges
      .filter((b) => b.isUnlocked)
      .reduce((sum, b) => sum + b.rewardPoints, 0);
  }, [badges]);

  // Explorer Rank based on unlocked badges
  const explorerRank: ExplorerRank = useMemo(() => {
    if (unlockedBadgesCount >= 10) {
      return {
        level: 5,
        icon: '👑',
        title: {
          az: 'Böyük Təbiət Əfsanəsi',
          tr: 'Büyük Doğa Efsanesi',
          ru: 'Великая легенда природы',
          en: 'Grand Nature Legend'
        }
      };
    }
    if (unlockedBadgesCount >= 7) {
      return {
        level: 4,
        icon: '🌟',
        title: {
          az: 'Usta Kəşfiyyatçı',
          tr: 'Usta Kaşif',
          ru: 'Мастер-исследователь',
          en: 'Master Naturalist'
        }
      };
    }
    if (unlockedBadgesCount >= 4) {
      return {
        level: 3,
        icon: '🧭',
        title: {
          az: 'Cəsur Səyyah',
          tr: 'Cesur Gezgin',
          ru: 'Смелый путешественник',
          en: 'Brave Pathfinder'
        }
      };
    }
    if (unlockedBadgesCount >= 2) {
      return {
        level: 2,
        icon: '🎒',
        title: {
          az: 'Gənc Tədqiqatçı',
          tr: 'Genç Kaşif',
          ru: 'Юный натуралист',
          en: 'Junior Explorer'
        }
      };
    }
    return {
      level: 1,
      icon: '🌱',
      title: {
        az: 'Kəşfə Başlayan',
        tr: 'Çırak Kaşif',
        ru: 'Начинающий следопыт',
        en: 'Curious Scout'
      }
    };
  }, [unlockedBadgesCount]);

  return (
    <BadgeContext.Provider
      value={{
        explorerName,
        setExplorerName,
        explorerAvatar,
        setExplorerAvatar,
        badges,
        stats,
        unlockBadge,
        checkAndAwardQuizBadges,
        recordCategoryExplored,
        newlyUnlockedBadge,
        dismissNewBadge,
        isProfileOpen,
        setIsProfileOpen,
        unlockedBadgesCount,
        totalBadgesCount,
        explorerRank,
        totalPoints
      }}
    >
      {children}
    </BadgeContext.Provider>
  );
};

export const useBadges = () => {
  const context = useContext(BadgeContext);
  if (!context) {
    throw new Error('useBadges must be used within a BadgeProvider');
  }
  return context;
};
