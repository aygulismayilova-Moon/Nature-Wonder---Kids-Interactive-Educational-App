import { FEATURED_ANIMALS } from './animalsData';
import { NATURE_ELEMENTS } from './natureData';
import { UNIVERSE_ELEMENTS } from './universeData';

export interface PuzzleItem {
  id: string;
  name: string;
  category: 'animals' | 'nature' | 'universe';
  emoji: string;
  image: string;
  soundType?: string;
  audioUrl?: string;
  funFact: string;
  description: string;
}

export const PUZZLE_ITEMS: PuzzleItem[] = [
  // --- Animals ---
  ...FEATURED_ANIMALS.slice(0, 12).map((a) => ({
    id: a.id,
    name: a.name,
    category: 'animals' as const,
    emoji: a.emoji,
    image: a.image,
    soundType: a.soundType,
    audioUrl: a.audioUrl,
    funFact: a.funFact,
    description: a.childDescription
  })),

  // --- Nature Wonders ---
  ...NATURE_ELEMENTS.slice(0, 8).map((n) => ({
    id: n.id,
    name: n.name,
    category: 'nature' as const,
    emoji: n.emoji,
    image: n.image,
    soundType: n.ambientSound,
    funFact: n.funFacts[0] || n.description,
    description: n.description
  })),

  // --- Universe Wonders ---
  ...UNIVERSE_ELEMENTS.slice(0, 8).map((u) => ({
    id: u.id,
    name: u.name,
    category: 'universe' as const,
    emoji: u.emoji,
    image: u.image,
    soundType: u.soundType,
    funFact: u.funFacts[0] || u.kidWonder,
    description: u.description
  }))
];
