import { AnimalNovel, Language, NovelGenre, NovelReadingLevel } from '../types';
import { PRESET_NOVELS } from '../data/novelPresets';

const STORAGE_KEY_SAVED_NOVELS = 'nature_wonder_saved_novels';
const STORAGE_KEY_ACTIVE_NOVEL = 'nature_wonder_active_novel';

export interface GenerateNovelParams {
  protagonistSpecies: string;
  protagonistName: string;
  companionSpecies?: string;
  genre: NovelGenre | string;
  setting: string;
  language: Language;
  readingLevel: NovelReadingLevel;
  specialWish?: string;
  continueFrom?: {
    title: string;
    choice: string;
    previousChaptersCount: number;
  };
}

export async function generateAnimalNovel(params: GenerateNovelParams): Promise<AnimalNovel> {
  try {
    const response = await fetch('/api/generate-novel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Server responded with status ${response.status}`);
    }

    const data = await response.json();
    if (data && data.novel) {
      const novel: AnimalNovel = {
        ...data.novel,
        id: `novel-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        language: params.language,
        genre: params.genre,
        readingLevel: params.readingLevel,
        createdAt: Date.now(),
        isAiGenerated: true,
      };
      saveActiveNovel(novel);
      return novel;
    }

    throw new Error('Invalid novel structure returned from AI');
  } catch (error) {
    console.warn('AI Generation fallback activated:', error);
    // Find closest preset or generate a dynamic client fallback
    return createClientFallbackNovel(params);
  }
}

export function createClientFallbackNovel(params: GenerateNovelParams): AnimalNovel {
  // Check if matching preset exists for language
  const presetForLang = PRESET_NOVELS.find((p) => p.language === params.language) || PRESET_NOVELS[0];

  const heroName = params.protagonistName || (params.language === 'az' ? 'Cəsur Qəhrəman' : params.language === 'tr' ? 'Cesur Kahraman' : params.language === 'ru' ? 'Храбрый Герой' : 'Brave Hero');
  const species = params.protagonistSpecies || 'Lion';

  // Customize preset with chosen parameters
  const customizedNovel: AnimalNovel = {
    ...presetForLang,
    id: `novel-preset-${Date.now()}`,
    title: `${heroName} the ${species}: ${presetForLang.subtitle}`,
    protagonist: {
      ...presetForLang.protagonist,
      name: heroName,
      species: species,
    },
    companion: params.companionSpecies ? {
      name: params.companionSpecies,
      species: params.companionSpecies,
      emoji: '🐾',
      trait: 'Loyal companion'
    } : presetForLang.companion,
    setting: params.setting || presetForLang.setting,
    genre: params.genre || presetForLang.genre,
    language: params.language,
    readingLevel: params.readingLevel,
    createdAt: Date.now(),
    isAiGenerated: false
  };

  saveActiveNovel(customizedNovel);
  return customizedNovel;
}

export function getSavedNovels(): AnimalNovel[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SAVED_NOVELS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveNovelToLibrary(novel: AnimalNovel): void {
  try {
    const existing = getSavedNovels();
    const updated = [novel, ...existing.filter((n) => n.id !== novel.id)];
    localStorage.setItem(STORAGE_KEY_SAVED_NOVELS, JSON.stringify(updated.slice(0, 30)));
  } catch (e) {
    console.error('Failed to save novel to localStorage', e);
  }
}

export function deleteNovelFromLibrary(novelId: string): void {
  try {
    const existing = getSavedNovels();
    const updated = existing.filter((n) => n.id !== novelId);
    localStorage.setItem(STORAGE_KEY_SAVED_NOVELS, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to delete novel from localStorage', e);
  }
}

export function getActiveNovel(): AnimalNovel | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ACTIVE_NOVEL);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveActiveNovel(novel: AnimalNovel): void {
  try {
    localStorage.setItem(STORAGE_KEY_ACTIVE_NOVEL, JSON.stringify(novel));
  } catch (e) {
    console.error('Failed to save active novel', e);
  }
}
