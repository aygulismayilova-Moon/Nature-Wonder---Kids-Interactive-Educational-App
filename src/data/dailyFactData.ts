import { FEATURED_ANIMALS } from './animalsData';
import { NATURE_ELEMENTS } from './natureData';
import { UNIVERSE_ELEMENTS } from './universeData';

export type DailyFactCategory = 'animals' | 'nature' | 'universe';

export interface DailyFactItem {
  id: string;
  name: string;
  category: DailyFactCategory;
  emoji: string;
  image: string;
  soundType?: string;
  audioUrl?: string;
  funFact: string;
  description: string;
  tag: string;
}

export const DAILY_FACT_ITEMS: DailyFactItem[] = [
  // --- Animals Pool (Featured Animals) ---
  ...FEATURED_ANIMALS.map((a) => ({
    id: a.id,
    name: a.name,
    category: 'animals' as const,
    emoji: a.emoji,
    image: a.image,
    soundType: a.soundType,
    audioUrl: a.audioUrl,
    funFact: a.funFact,
    description: a.childDescription,
    tag: `${a.group} • ${a.habitat}`
  })),

  // --- Nature Wonders Pool ---
  ...NATURE_ELEMENTS.map((n) => ({
    id: n.id,
    name: n.name,
    category: 'nature' as const,
    emoji: n.emoji,
    image: n.image,
    soundType: n.ambientSound,
    funFact: n.funFacts[0] || n.description,
    description: n.description,
    tag: n.category
  })),

  // --- Cosmic / Universe Wonders Pool ---
  ...UNIVERSE_ELEMENTS.map((u) => ({
    id: u.id,
    name: u.name,
    category: 'universe' as const,
    emoji: u.emoji,
    image: u.image,
    soundType: u.soundType,
    funFact: u.funFacts[0] || u.kidWonder,
    description: u.kidWonder || u.description,
    tag: u.category
  }))
];

/**
 * Returns a stable, deterministic index based on the calendar day (YYYY-MM-DD),
 * ensuring every visitor sees the same daily wonder on that day.
 */
export function getDailyFactSeed(totalItems: number = DAILY_FACT_ITEMS.length, date: Date = new Date()): number {
  if (totalItems <= 0) return 0;
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate(); // 1-31
  // Prime multiplier hash for even, deterministic distribution
  const dayHash = Math.abs((year * 367) + (month * 71) + (day * 19));
  return dayHash % totalItems;
}

/**
 * Pick a different random fact from the pool when the user clicks 'Next Fact'
 */
export function getRandomFactIndex(currentIndex: number, totalItems: number = DAILY_FACT_ITEMS.length): number {
  if (totalItems <= 1) return 0;
  let next = Math.floor(Math.random() * totalItems);
  while (next === currentIndex) {
    next = Math.floor(Math.random() * totalItems);
  }
  return next;
}
