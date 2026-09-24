export interface CustomVoiceover {
  id: string; // e.g. "lion", "animal_lion", "shape_circle", "sun", "taste_sweet"
  title: string; // Display title, e.g. "Şir"
  category: 'animals' | 'nature' | 'universe' | 'shapes' | 'sensations' | 'phrases';
  language: 'az' | 'tr' | 'ru' | 'en';
  audioDataUrl: string; // Data URL (e.g. data:audio/webm;base64,... or data:audio/mp3;base64,...)
  duration: number; // in seconds
  createdAt: number;
  source: 'mic' | 'file';
  transcript?: string; // Target speech text
}

const DB_NAME = 'NatureWonderKids_Voiceovers_v1';
const STORE_NAME = 'custom_voiceovers';

class VoiceoverService {
  private cache = new Map<string, CustomVoiceover>();
  private dbPromise: Promise<IDBDatabase | null> | null = null;
  private currentAudio: HTMLAudioElement | null = null;
  private isEnabled = true;
  private listeners: Set<() => void> = new Set();
  private isInitialized = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const savedPref = localStorage.getItem('nw_custom_voiceover_enabled');
      this.isEnabled = savedPref === null ? true : savedPref === 'true';
      this.init();
    }
  }

  private getDB(): Promise<IDBDatabase | null> {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return Promise.resolve(null);
    }
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve) => {
      try {
        const req = window.indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = (ev: IDBVersionChangeEvent) => {
          const db = (ev.target as IDBOpenDBRequest).result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: 'storageKey' });
          }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
      } catch {
        resolve(null);
      }
    });

    return this.dbPromise;
  }

  public async init(): Promise<void> {
    if (this.isInitialized) return;
    try {
      const db = await this.getDB();
      if (db) {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.getAll();

        req.onsuccess = () => {
          const records = req.result as Array<CustomVoiceover & { storageKey: string }>;
          this.cache.clear();
          for (const item of records) {
            this.cache.set(item.storageKey, item);
          }
          this.isInitialized = true;
          this.notify();
        };
      } else {
        // Fallback to localStorage if IndexedDB is blocked
        const raw = localStorage.getItem('nw_voiceovers_backup');
        if (raw) {
          const items: CustomVoiceover[] = JSON.parse(raw);
          for (const item of items) {
            this.cache.set(this.buildKey(item.id, item.language), item);
          }
        }
        this.isInitialized = true;
        this.notify();
      }
    } catch {
      this.isInitialized = true;
    }
  }

  public buildKey(id: string, language: string): string {
    return `${language.toLowerCase()}:${id.toLowerCase().trim()}`;
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify(): void {
    this.listeners.forEach((fn) => {
      try {
        fn();
      } catch {
        // ignore listener errors
      }
    });
  }

  public isVoiceoverActive(): boolean {
    return this.isEnabled;
  }

  public setVoiceoverActive(active: boolean): void {
    this.isEnabled = active;
    if (typeof window !== 'undefined') {
      localStorage.setItem('nw_custom_voiceover_enabled', String(active));
    }
    this.notify();
  }

  public hasVoiceover(idOrText: string, language = 'az'): boolean {
    if (!this.isEnabled) return false;
    return !!this.getVoiceover(idOrText, language);
  }

  public getVoiceover(idOrText: string, language = 'az'): CustomVoiceover | undefined {
    if (!idOrText) return undefined;
    const clean = idOrText.toLowerCase().trim();

    // 1. Direct key match (e.g. "lion", "animal_lion", "qartal")
    const directKey = this.buildKey(clean, language);
    if (this.cache.has(directKey)) {
      return this.cache.get(directKey);
    }

    // 2. Prefix / normalized title match (e.g., if clean text begins with "şir." or "aslan.")
    const firstWord = clean.split(/[\s\.\,\:\!\?]+/)[0];
    if (firstWord && firstWord.length >= 2) {
      const firstWordKey = this.buildKey(firstWord, language);
      if (this.cache.has(firstWordKey)) {
        return this.cache.get(firstWordKey);
      }
    }

    // 3. Search through cache values for matched title or ID
    for (const vo of this.cache.values()) {
      if (vo.language === language) {
        if (vo.id.toLowerCase() === clean || vo.title.toLowerCase() === clean) {
          return vo;
        }
        if (firstWord && vo.title.toLowerCase() === firstWord) {
          return vo;
        }
      }
    }

    return undefined;
  }

  public getAllVoiceovers(language?: string): CustomVoiceover[] {
    const list: CustomVoiceover[] = [];
    for (const item of this.cache.values()) {
      if (!language || item.language === language) {
        list.push(item);
      }
    }
    return list.sort((a, b) => b.createdAt - a.createdAt);
  }

  public getCount(language = 'az'): number {
    let count = 0;
    for (const item of this.cache.values()) {
      if (item.language === language) count++;
    }
    return count;
  }

  public async saveVoiceover(item: Omit<CustomVoiceover, 'createdAt'> & { createdAt?: number }): Promise<void> {
    const fullItem: CustomVoiceover = {
      ...item,
      createdAt: item.createdAt || Date.now()
    };
    const storageKey = this.buildKey(fullItem.id, fullItem.language);

    this.cache.set(storageKey, fullItem);

    try {
      const db = await this.getDB();
      if (db) {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).put({ ...fullItem, storageKey });
      } else {
        this.persistLocalStorageBackup();
      }
    } catch {
      this.persistLocalStorageBackup();
    }

    this.notify();
  }

  public async deleteVoiceover(id: string, language = 'az'): Promise<void> {
    const storageKey = this.buildKey(id, language);
    this.cache.delete(storageKey);

    try {
      const db = await this.getDB();
      if (db) {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).delete(storageKey);
      }
    } catch {
      // ignore
    }

    this.persistLocalStorageBackup();
    this.notify();
  }

  public stopPlayback(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }
  }

  public async playVoiceover(idOrText: string, language = 'az'): Promise<boolean> {
    const vo = this.getVoiceover(idOrText, language);
    if (!vo || !vo.audioDataUrl) return false;

    this.stopPlayback();

    return new Promise<boolean>((resolve) => {
      try {
        const audio = new Audio(vo.audioDataUrl);
        audio.volume = 1.0;
        this.currentAudio = audio;

        audio.onended = () => {
          this.currentAudio = null;
          resolve(true);
        };

        audio.onerror = () => {
          this.currentAudio = null;
          resolve(false);
        };

        const p = audio.play();
        if (p !== undefined) {
          p.catch(() => {
            this.currentAudio = null;
            resolve(false);
          });
        }
      } catch {
        this.currentAudio = null;
        resolve(false);
      }
    });
  }

  private persistLocalStorageBackup(): void {
    try {
      if (typeof window === 'undefined') return;
      // Store compact representation to stay within storage limits
      const items = Array.from(this.cache.values()).slice(0, 100);
      localStorage.setItem('nw_voiceovers_backup', JSON.stringify(items));
    } catch {
      // quota limit
    }
  }

  public exportBackup(): string {
    const items = Array.from(this.cache.values());
    return JSON.stringify({ version: 1, exportedAt: Date.now(), items }, null, 2);
  }

  public async importBackup(jsonString: string): Promise<number> {
    try {
      const data = JSON.parse(jsonString);
      const items: CustomVoiceover[] = Array.isArray(data) ? data : data.items || [];
      let imported = 0;

      for (const it of items) {
        if (it.id && it.audioDataUrl && it.language) {
          await this.saveVoiceover(it);
          imported++;
        }
      }
      return imported;
    } catch {
      return 0;
    }
  }
}

export const voiceoverService = new VoiceoverService();
