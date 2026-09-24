import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Animal, NatureElement, UniverseElement, PlaneShape, SolidShape, ShapeItem, FoodItem } from '../types';
import { UI_TRANSLATIONS, TranslationDictionary } from '../i18n/translations';
import { 
  ANIMAL_DATA_TRANSLATIONS, 
  NATURE_DATA_TRANSLATIONS, 
  UNIVERSE_DATA_TRANSLATIONS, 
  SHAPES_DATA_TRANSLATIONS, 
  FOOD_DATA_TRANSLATIONS 
} from '../i18n/dataTranslations';
import {
  FEATURED_ANIMAL_TRANSLATIONS,
  HABITAT_TRANSLATIONS,
  GROUP_TRANSLATIONS,
  DIET_TRANSLATIONS,
  translateSpeciesNameToAz
} from '../i18n/animalCatalogTranslations';
import { sound } from '../utils/soundEngine';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationDictionary, fallback?: string) => string;
  getLocalizedAnimal: (animal: any) => {
    name: string;
    childDescription: string;
    funFact: string;
    soundLabel: string;
    diet: string;
    habitat: string;
    group: string;
  };
  getLocalizedNature: (element: NatureElement) => {
    name: string;
    category: string;
    soundLabel: string;
    description: string;
    funFacts: string[];
    kidActivity: string;
    whyItMatters: string;
  };
  getLocalizedUniverse: (element: UniverseElement) => {
    name: string;
    category: string;
    soundLabel: string;
    description: string;
    kidWonder: string;
    funFacts: string[];
  };
  getLocalizedShape: (shape: ShapeItem) => {
    name: string;
    description: string;
    funFact: string;
    realWorldExamples: Array<{ label: string; hint: string; emoji: string }>;
  };
  getLocalizedPlane: (shape: PlaneShape) => {
    name: string;
    description: string;
    funFact: string;
    realWorldExamples: Array<{ label: string; hint: string; emoji: string }>;
  };
  getLocalizedSolid: (shape: SolidShape) => {
    name: string;
    description: string;
    funFact: string;
    realWorldExamples: Array<{ label: string; hint: string; emoji: string }>;
  };
  getLocalizedFood: (food: FoodItem) => {
    name: string;
    tasteCategory: string;
    description: string;
    funTip: string;
    spokenQuote: string;
  };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'nature_kids_language';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language;
    if (saved && ['az', 'tr', 'ru', 'en'].includes(saved)) {
      return saved;
    }
    // Default to 'az' (Azerbaijan) or browser detection
    const navLang = navigator.language?.toLowerCase() || '';
    if (navLang.startsWith('az')) return 'az';
    if (navLang.startsWith('tr')) return 'tr';
    if (navLang.startsWith('ru')) return 'ru';
    return 'az'; // Default requested as primary language in prompt
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
    sound.setLanguage(lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    sound.setLanguage(language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: keyof TranslationDictionary, fallback = ''): string => {
    const dict = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
    return dict[key] || fallback || UI_TRANSLATIONS.en[key] || (key as string);
  };

  // Localized Animal Helper
  const getLocalizedAnimal = (animal: any) => {
    if (!animal) {
      return {
        name: '',
        childDescription: '',
        funFact: '',
        soundLabel: '',
        diet: '',
        habitat: '',
        group: ''
      };
    }
    const rawId = typeof animal.id === 'string' ? animal.id : (animal.name ? animal.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : '');
    const altId1 = rawId ? rawId.replace(/-/g, '_') : '';
    const altId2 = rawId ? rawId.replace(/_/g, '-') : '';
    const nameKey = animal.name ? animal.name.toLowerCase().trim() : '';

    // Check FEATURED_ANIMAL_TRANSLATIONS first, then ANIMAL_DATA_TRANSLATIONS
    const featOverride = (rawId && (FEATURED_ANIMAL_TRANSLATIONS[rawId]?.[language] || (altId1 && FEATURED_ANIMAL_TRANSLATIONS[altId1]?.[language]) || (altId2 && FEATURED_ANIMAL_TRANSLATIONS[altId2]?.[language]))) ||
                         (nameKey && (FEATURED_ANIMAL_TRANSLATIONS[nameKey]?.[language] || FEATURED_ANIMAL_TRANSLATIONS[nameKey.replace(/\s+/g, '_')]?.[language] || FEATURED_ANIMAL_TRANSLATIONS[nameKey.replace(/\s+/g, '-')]?.[language]));

    const override = featOverride ||
                     (rawId && (ANIMAL_DATA_TRANSLATIONS[rawId]?.[language] || (altId1 && ANIMAL_DATA_TRANSLATIONS[altId1]?.[language]) || (altId2 && ANIMAL_DATA_TRANSLATIONS[altId2]?.[language]))) ||
                     (nameKey && (ANIMAL_DATA_TRANSLATIONS[nameKey]?.[language] || ANIMAL_DATA_TRANSLATIONS[nameKey.replace(/\s+/g, '_')]?.[language] || ANIMAL_DATA_TRANSLATIONS[nameKey.replace(/\s+/g, '-')]?.[language]));

    let name = override?.name || '';
    if (!name) {
      if (language === 'az' && animal.name) {
        name = translateSpeciesNameToAz(animal.name);
      } else {
        name = animal.name || '';
      }
    }

    // Localize habitat, group, diet systematically
    const habitat = override?.habitat ||
                    (animal.habitat && HABITAT_TRANSLATIONS[animal.habitat]?.[language]) ||
                    animal.habitat || '';

    const group = override?.group ||
                  (animal.group && GROUP_TRANSLATIONS[animal.group]?.[language]) ||
                  animal.group || '';

    const diet = override?.diet ||
                 (animal.diet && DIET_TRANSLATIONS[animal.diet]?.[language]) ||
                 animal.diet || '';

    return {
      name,
      childDescription: override?.childDescription || animal.childDescription || animal.fact || '',
      funFact: override?.funFact || animal.funFact || animal.fact || '',
      soundLabel: override?.soundLabel || animal.soundLabel || '',
      diet,
      habitat,
      group
    };
  };

  // Localized Nature Helper
  const getLocalizedNature = (element: NatureElement) => {
    if (!element) return { name: '', category: '', soundLabel: '', description: '', funFacts: [], kidActivity: '', whyItMatters: '' };
    const rawId = typeof element.id === 'string' ? element.id : '';
    const override = rawId ? NATURE_DATA_TRANSLATIONS[rawId]?.[language] : undefined;
    return {
      name: override?.name || element.name || '',
      category: override?.category || element.category || '',
      soundLabel: override?.soundLabel || element.soundLabel || '',
      description: override?.description || element.description || '',
      funFacts: override?.funFacts || element.funFacts || [],
      kidActivity: override?.kidActivity || element.kidActivity || '',
      whyItMatters: override?.whyItMatters || element.whyItMatters || ''
    };
  };

  // Localized Universe Helper
  const getLocalizedUniverse = (element: UniverseElement) => {
    if (!element) return { name: '', category: '', soundLabel: '', description: '', kidWonder: '', funFacts: [] };
    const rawId = typeof element.id === 'string' ? element.id : '';
    const override = rawId ? UNIVERSE_DATA_TRANSLATIONS[rawId]?.[language] : undefined;
    return {
      name: override?.name || element.name || '',
      category: override?.category || element.category || '',
      soundLabel: override?.soundLabel || element.soundLabel || '',
      description: override?.description || element.description || '',
      kidWonder: override?.kidWonder || element.kidWonder || '',
      funFacts: override?.funFacts || element.funFacts || []
    };
  };

  // Localized Shape Helper
  const getLocalizedShape = (shape: ShapeItem) => {
    if (!shape) return { name: '', description: '', funFact: '', realWorldExamples: [] };
    const rawId = typeof shape.id === 'string' ? shape.id : '';
    const override = rawId ? SHAPES_DATA_TRANSLATIONS[rawId]?.[language] : undefined;
    return {
      name: override?.name || shape.name || '',
      description: override?.description || shape.description || '',
      funFact: override?.funFact || shape.funFact || '',
      realWorldExamples: (shape.realWorldExamples || []).map((ex, idx) => ({
        label: override?.realWorldExamples?.[idx]?.label || ex.label,
        hint: override?.realWorldExamples?.[idx]?.hint || ex.hint,
        emoji: ex.emoji
      }))
    };
  };

  const getLocalizedPlane = (shape: PlaneShape) => getLocalizedShape(shape);
  const getLocalizedSolid = (shape: SolidShape) => getLocalizedShape(shape);

  // Localized Food Helper
  const getLocalizedFood = (food: FoodItem) => {
    if (!food) return { name: '', tasteCategory: '', description: '', funTip: '', spokenQuote: '' };
    const rawId = typeof food.id === 'string' ? food.id : (food.name ? food.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-') : '');
    const altId1 = rawId ? rawId.replace(/-/g, '_') : '';
    const altId2 = rawId ? rawId.replace(/_/g, '-') : '';

    const override = rawId ? (
      FOOD_DATA_TRANSLATIONS[rawId]?.[language] ||
      (altId1 && FOOD_DATA_TRANSLATIONS[altId1]?.[language]) ||
      (altId2 && FOOD_DATA_TRANSLATIONS[altId2]?.[language])
    ) : undefined;

    return {
      name: override?.name || food.name || '',
      tasteCategory: override?.tasteCategory || food.tasteCategory || '',
      description: override?.description || food.description || '',
      funTip: override?.funTip || food.funTip || '',
      spokenQuote: override?.spokenQuote || food.mascotReaction?.spokenQuote || ''
    };
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        getLocalizedAnimal,
        getLocalizedNature,
        getLocalizedUniverse,
        getLocalizedShape,
        getLocalizedPlane,
        getLocalizedSolid,
        getLocalizedFood
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
