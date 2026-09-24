export type SectionId = 'world' | 'shapes' | 'sensations' | 'puzzle' | 'numbers-alphabet' | 'quiz' | 'animal-novel';

export type QuizCategory = 'all' | 'animals' | 'nature' | 'universe' | 'shapes' | 'sensations' | 'numbers-alphabet';

export interface QuizOption {
  id: string;
  label: Record<Language, string>;
  emoji?: string;
  image?: string;
}

export interface QuizQuestion {
  id: string;
  category: 'animals' | 'nature' | 'universe' | 'shapes' | 'sensations' | 'numbers-alphabet';
  emoji: string;
  image?: string;
  question: Record<Language, string>;
  options: QuizOption[];
  correctOptionId: string;
  explanation: Record<Language, string>;
  hint?: Record<Language, string>;
}

export interface DigitalBadge {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: 'quiz' | 'exploration' | 'streak' | 'mastery';
  icon: string;
  isUnlocked: boolean;
  unlockedAt?: string;
  rewardPoints: number;
  requirementText: Record<Language, string>;
}

export interface ExplorerProfileStats {
  explorerName: string;
  avatar: string;
  totalQuizzesCompleted: number;
  totalScore: number;
  highestStreak: number;
  exploredCategories: string[];
}

export type WorldSubsectionId = 'animals' | 'nature' | 'universe';
export type ShapesSubsectionId = 'plane' | 'solid' | 'quiz';
export type SensationsSubsectionId = 'explorer' | 'sorter';
export type NumbersAlphabetSubsectionId = 'alphabet' | 'numbers' | 'quiz';
export type NovelSubsectionId = 'reader' | 'creator' | 'library';

export type NovelGenre = 
  | 'magical_adventure' 
  | 'friendship_courage' 
  | 'nature_mystery' 
  | 'bedtime_wonder' 
  | 'habitat_protector' 
  | 'cosmic_journey';

export type NovelReadingLevel = 'early' | 'explorer' | 'master';

export interface NovelChapter {
  chapterNumber: number;
  title: string;
  content: string;
  animalFact?: string;
  discussionQuestion?: string;
}

export interface AnimalNovel {
  id: string;
  title: string;
  subtitle: string;
  moral: string;
  protagonist: {
    name: string;
    species: string;
    emoji: string;
    trait: string;
    superSkill?: string;
    image?: string;
  };
  companion?: {
    name: string;
    species: string;
    emoji: string;
    trait: string;
  };
  setting: string;
  genre: NovelGenre | string;
  language: Language;
  readingLevel: NovelReadingLevel;
  chapters: NovelChapter[];
  nextAdventureOptions?: string[];
  createdAt: number;
  isAiGenerated?: boolean;
  coverColor?: string;
}

export interface AlphabetLetter {
  id: string;
  letter: string;
  upper: string;
  lower: string;
  soundHint: string;
  word: string;
  wordTranslation?: string;
  emoji: string;
  image: string;
  sentence: string;
  color: string;
}

export interface NumberItem {
  id: string;
  value: number;
  word: string;
  itemWord: string;
  emoji: string;
  mathTip: string;
  color: string;
}

export type AnimalHabitat = 
  | 'All'
  | 'Savannah & Grassland'
  | 'Rainforest & Jungle'
  | 'Ocean & Marine'
  | 'Polar & Arctic'
  | 'Forest & Woodland'
  | 'Mountains'
  | 'Desert'
  | 'Freshwater & River'
  | 'Farm & Backyard';

export type AnimalGroup = 
  | 'All'
  | 'Mammal'
  | 'Bird'
  | 'Reptile'
  | 'Amphibian'
  | 'Fish & Ocean Life'
  | 'Invertebrate & Insect';

export interface AnimalMultiViews {
  allSides: string;
  front?: string;
  side?: string;
  back?: string;
}

export interface Animal {
  id: string;
  name: string;
  scientificName: string;
  group: Exclude<AnimalGroup, 'All'>;
  habitat: Exclude<AnimalHabitat, 'All'>;
  diet: 'Herbivore (Plants)' | 'Carnivore (Meat)' | 'Omnivore (Both)' | 'Insectivore';
  image: string;
  multiViews?: AnimalMultiViews;
  emoji: string;
  soundType: 'roar' | 'chirp' | 'trumpet' | 'hiss' | 'bark' | 'howl' | 'squeak' | 'quack' | 'moo' | 'croak' | 'splash' | 'buzz' | 'purr' | 'hoot' | 'growl' | 'baa' | 'cluck' | 'crow' | 'honk' | 'bleat' | 'neigh' | 'bray' | 'oink' | 'snort' | 'dolphin' | 'whale' | 'monkey' | 'screech' | 'seal' | 'peacock' | 'tiger_growl' | 'panda_grunt' | 'penguin' | 'giraffe';
  soundLabel: string;
  audioUrl?: string;
  youtubeId?: string;
  youtubeUrl?: string;
  funFact: string;
  childDescription: string;
  size: string;
  lifespan: string;
  speed?: string;
}

export interface CatalogAnimal {
  name: string;
  group: Exclude<AnimalGroup, 'All'>;
  habitat: Exclude<AnimalHabitat, 'All'>;
  fact: string;
  emoji: string;
  image?: string;
  multiViews?: AnimalMultiViews;
  audioUrl?: string;
  youtubeId?: string;
  youtubeUrl?: string;
}

export interface NatureElement {
  id: string;
  name: string;
  shortName?: string;
  category: string;
  image: string;
  ambientSound: 'rain' | 'ocean' | 'river' | 'waterfall' | 'wind' | 'snow' | 'thunder';
  soundLabel: string;
  description: string;
  funFacts: string[];
  kidActivity: string;
  whyItMatters: string;
  emoji: string;
}

export interface UniverseElement {
  id: string;
  name: string;
  category: 'Celestial Body' | 'Cosmic Phenomenon' | 'Natural Phenomenon';
  image: string;
  soundType: 'celestial_hum' | 'solar_wind' | 'aurora_shimmer' | 'meteor_whoosh' | 'thunder_crack' | 'volcano_rumble' | 'tide_swell';
  soundLabel: string;
  description: string;
  kidWonder: string;
  funFacts: string[];
  emoji: string;
}

export interface RealWorldExample {
  label: string;
  emoji: string;
  hint: string;
}

export interface PlaneShape {
  id: string;
  name: string;
  category: 'plane';
  subcategory: 'triangle' | 'quadrilateral' | 'curved' | 'polygon';
  sides: number;
  vertices: number;
  description: string;
  funFact: string;
  color: string;
  borderColor: string;
  realWorldExamples: RealWorldExample[];
}

export interface SolidShape {
  id: string;
  name: string;
  category: 'solid';
  faces: number;
  edges: number;
  vertices: number;
  description: string;
  funFact: string;
  color: string;
  realWorldExamples: RealWorldExample[];
}

export type ShapeItem = PlaneShape | SolidShape;

export type SensationType = 'sweet' | 'spicy' | 'sour' | 'hot' | 'cold';

export type Language = 'az' | 'tr' | 'ru' | 'en';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  voiceLang: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'az', name: 'Azerbaijan', nativeName: 'Azərbaycan', flag: '🇦🇿', voiceLang: 'az-AZ' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', voiceLang: 'tr-TR' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', voiceLang: 'ru-RU' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', voiceLang: 'en-US' }
];

export interface FoodItem {
  id: string;
  name: string;
  sensation: SensationType;
  emoji: string;
  iconUrl?: string;
  image: string;
  tasteCategory: string;
  description: string;
  mascotReaction: {
    expression: 'happy' | 'spicy_fire' | 'sour_pucker' | 'hot_steam' | 'cold_shiver';
    spokenQuote: string;
    soundEffect: 'sweet_sparkle' | 'spicy_sizzle' | 'sour_boing' | 'hot_blow' | 'cold_teeth';
  };
  funTip: string;
}
