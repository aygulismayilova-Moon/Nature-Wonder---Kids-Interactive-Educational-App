import React, { useState, useMemo } from 'react';
import { Animal, AnimalHabitat, AnimalGroup, CatalogAnimal } from '../types';
import { FEATURED_ANIMALS, FULL_ANIMAL_CATALOG, getAnimalAsset } from '../data/animalsData';
import { HABITAT_TRANSLATIONS, GROUP_TRANSLATIONS } from '../i18n/animalCatalogTranslations';
import { sound } from '../utils/soundEngine';
import { useLanguage } from '../context/LanguageContext';
import { useFirebase } from '../context/FirebaseContext';
import { Search, Volume2, Sparkles, Filter, Award, BookOpen, Music, Compass, Radio, Camera, Mic, Heart, Puzzle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { VoiceoverStudioModal } from './VoiceoverStudioModal';
import { voiceoverService } from '../services/voiceoverService';

const HABITATS: AnimalHabitat[] = [
  'All',
  'Savannah & Grassland',
  'Rainforest & Jungle',
  'Ocean & Marine',
  'Polar & Arctic',
  'Forest & Woodland',
  'Mountains',
  'Desert',
  'Freshwater & River',
  'Farm & Backyard'
];

const GROUPS: AnimalGroup[] = [
  'All',
  'Mammal',
  'Bird',
  'Reptile',
  'Amphibian',
  'Fish & Ocean Life',
  'Invertebrate & Insect'
];

interface AnimalExplorerProps {
  onPlayPuzzle?: (animalId: string) => void;
}

export const AnimalExplorer: React.FC<AnimalExplorerProps> = ({ onPlayPuzzle }) => {
  const { t, getLocalizedAnimal, language } = useLanguage();
  const { isFavorite, toggleFavorite, updateGameScore } = useFirebase();
  const [selectedHabitat, setSelectedHabitat] = useState<AnimalHabitat>('All');
  const [selectedGroup, setSelectedGroup] = useState<AnimalGroup>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'featured' | 'catalog' | 'game'>('featured');
  const [selectedAnimalModal, setSelectedAnimalModal] = useState<Animal | CatalogAnimal | null>(null);
  const [modalSelectedAngle, setModalSelectedAngle] = useState<'all' | 'front' | 'side' | 'back'>('all');
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(null);
  const [studioTargetAnimal, setStudioTargetAnimal] = useState<{ id: string; title: string } | null>(null);

  // --- Picture Mystery Game State (Picture shown, Child finds animal name - No sound) ---
  const [gameAnimal, setGameAnimal] = useState<Animal>(FEATURED_ANIMALS[0]);
  const [gameOptions, setGameOptions] = useState<Animal[]>([]);
  const [gameAnswered, setGameAnswered] = useState<boolean>(false);
  const [selectedGuessId, setSelectedGuessId] = useState<string | null>(null);
  const [gameIsCorrect, setGameIsCorrect] = useState<boolean | null>(null);
  const [gameScore, setGameScore] = useState<number>(0);

  // Initialize or reset game round
  const startNewGameRound = () => {
    const randomTarget = FEATURED_ANIMALS[Math.floor(Math.random() * FEATURED_ANIMALS.length)];
    const others = FEATURED_ANIMALS.filter(a => a.id !== randomTarget.id);
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [randomTarget, ...shuffledOthers].sort(() => 0.5 - Math.random());

    setGameAnimal(randomTarget);
    setGameOptions(options);
    setGameAnswered(false);
    setSelectedGuessId(null);
    setGameIsCorrect(null);
  };

  // Filtered Spotlight Animals
  const filteredFeatured = useMemo(() => {
    return FEATURED_ANIMALS.filter(animal => {
      const loc = getLocalizedAnimal(animal);
      const matchesHabitat = selectedHabitat === 'All' || animal.habitat === selectedHabitat;
      const matchesGroup = selectedGroup === 'All' || animal.group === selectedGroup;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
                            animal.name.toLowerCase().includes(q) ||
                            loc.name.toLowerCase().includes(q) ||
                            animal.childDescription.toLowerCase().includes(q) ||
                            loc.childDescription.toLowerCase().includes(q);
      return matchesHabitat && matchesGroup && matchesSearch;
    });
  }, [selectedHabitat, selectedGroup, searchQuery, getLocalizedAnimal, language]);

  // Filtered 1,000 Catalog Animals
  const filteredCatalog = useMemo(() => {
    return FULL_ANIMAL_CATALOG.filter(item => {
      const loc = getLocalizedAnimal(item as any);
      const matchesHabitat = selectedHabitat === 'All' || item.habitat === selectedHabitat;
      const matchesGroup = selectedGroup === 'All' || item.group === selectedGroup;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
                            item.name.toLowerCase().includes(q) ||
                            loc.name.toLowerCase().includes(q);
      return matchesHabitat && matchesGroup && matchesSearch;
    });
  }, [selectedHabitat, selectedGroup, searchQuery, getLocalizedAnimal, language]);

  const handlePlaySound = (animal: Animal) => {
    setCurrentlyPlayingId(animal.id);
    if (animal.audioUrl) {
      sound.playAudioUrl(animal.audioUrl, animal.soundType, () => {
        setCurrentlyPlayingId(null);
      });
    } else {
      sound.playAnimalSound(animal.soundType);
      setTimeout(() => setCurrentlyPlayingId(null), 1200);
    }
  };

  const handlePronounce = (name: string, text: string, animalId?: string) => {
    sound.speak(`${name}. ${text}`, language, animalId || name);
  };

  const handleGameGuess = (chosen: Animal) => {
    if (gameAnswered) return;
    setSelectedGuessId(chosen.id);
    setGameAnswered(true);
    if (chosen.id === gameAnimal.id) {
      setGameIsCorrect(true);
      const newScore = gameScore + 1;
      setGameScore(newScore);
      updateGameScore(newScore);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {}
    } else {
      setGameIsCorrect(false);
    }
  };

  return (
    <div className="space-y-6" id="animal-explorer-container">
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-3xl p-6 shadow-lg shadow-emerald-700/10 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-emerald-100 text-xs font-bold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{t('sectionAnimalsBadge')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-2">
            {t('animalExplorerTitle')}
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            {t('animalExplorerSubtitle')}
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="mt-5 flex flex-wrap items-center gap-2 relative z-10">
          <button
            id="tab-featured-animals"
            onClick={() => {
              setActiveTab('featured');
              sound.playClick();
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'featured'
                ? 'bg-white text-emerald-800 shadow-md scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{t('tabSpotlight')} ({FEATURED_ANIMALS.length})</span>
          </button>

          <button
            id="tab-catalog-animals"
            onClick={() => {
              setActiveTab('catalog');
              sound.playClick();
              sound.speak(t('tabCatalog'), language);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'catalog'
                ? 'bg-white text-emerald-800 shadow-md scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-300" />
            <span>{t('tabCatalog')} ({FULL_ANIMAL_CATALOG.length})</span>
          </button>

          <button
            id="tab-game-animals"
            onClick={() => {
              setActiveTab('game');
              sound.playClick();
              startNewGameRound();
              sound.speak(`${t('mysteryGameTitle')}! ${t('mysteryGameSubtitle')}`, language);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'game'
                ? 'bg-amber-400 text-slate-900 shadow-md scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Camera className="w-4 h-4 text-slate-900" />
            <span>{t('tabPictureGame')} 🎮</span>
          </button>

          {onPlayPuzzle && (
            <button
              id="tab-open-puzzle"
              onClick={() => {
                onPlayPuzzle('lion');
              }}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 shadow-md transition-all hover:scale-105"
            >
              <Puzzle className="w-4 h-4 text-purple-200" />
              <span>{t('sectionPuzzle')} 🧩</span>
            </button>
          )}
        </div>

        {/* Decorative background paw prints */}
        <div className="absolute right-4 -bottom-6 text-white/10 text-9xl font-black select-none pointer-events-none">
          🐾
        </div>
      </div>

      {/* Filter and Search Controls (for featured and catalog) */}
      {activeTab !== 'game' && (
        <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                id="animal-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchAnimalsPlaceholder')}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick reset button */}
            {(selectedHabitat !== 'All' || selectedGroup !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedHabitat('All');
                  setSelectedGroup('All');
                  setSearchQuery('');
                  sound.playClick();
                }}
                className="text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-xl border border-emerald-200 whitespace-nowrap transition-colors"
              >
                {t('clearFilters')}
              </button>
            )}
          </div>

          {/* Quick Shortcuts for Newly Added & Popular Animals */}
          <div className="space-y-2 pt-0.5">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md flex items-center gap-1">
                <span>✨ {language === 'az' ? 'Yeni Heyvanlar:' : language === 'tr' ? 'Yeni Hayvanlar:' : language === 'ru' ? 'Новые животные:' : 'New Animals:'}</span>
              </span>
              {[
                { id: 'gazelle', label: 'Gazelle', emoji: '🦌' },
                { id: 'roe-deer', label: 'Roe Deer', emoji: '🦌' },
                { id: 'red-deer', label: 'Red Deer', emoji: '🦌' },
                { id: 'peacock', label: 'Peacock', emoji: '🦚' },
                { id: 'duck', label: 'Duck', emoji: '🦆' },
                { id: 'zebra', label: 'Zebra', emoji: '🦓' },
                { id: 'kangaroo', label: 'Kangaroo', emoji: '🦘' },
                { id: 'rhinoceros', label: 'Rhinoceros', emoji: '🦏' },
                { id: 'crocodile', label: 'Crocodile', emoji: '🐊' },
                { id: 'pig', label: 'Pig', emoji: '🐷' },
                { id: 'fox', label: 'Fox', emoji: '🦊' },
                { id: 'swallow', label: 'Swallow', emoji: '🐦' },
                { id: 'crane', label: 'Crane', emoji: '🦤' },
                { id: 'crow', label: 'Crow', emoji: '🐦‍⬛' },
                { id: 'chick', label: 'Chick', emoji: '🐥' },
                { id: 'snake', label: 'Snake', emoji: '🐍' },
                { id: 'turtle', label: 'Turtle', emoji: '🐢' },
                { id: 'lama', label: 'Llama', emoji: '🦙' },
                { id: 'goat', label: 'Goat', emoji: '🐐' },
                { id: 'calf', label: 'Calf', emoji: '🐮' },
                { id: 'lamb', label: 'Lamb', emoji: '🐑' },
                { id: 'buffalo', label: 'Buffalo', emoji: '🦬' },
                { id: 'donkey', label: 'Donkey', emoji: '🫏' },
                { id: 'horse', label: 'Horse', emoji: '🐴' }
              ].map(tag => {
                const locName = getLocalizedAnimal({ id: tag.id, name: tag.label }).name;
                const isSelected = searchQuery.toLowerCase() === locName.toLowerCase() || searchQuery.toLowerCase() === tag.label.toLowerCase();
                return (
                  <button
                    key={tag.id}
                    onClick={() => {
                      if (isSelected) {
                        setSearchQuery('');
                      } else {
                        setSearchQuery(locName);
                      }
                      sound.playClick();
                    }}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-xs ring-2 ring-amber-300'
                        : 'bg-amber-50/60 hover:bg-amber-100 hover:border-amber-300 text-amber-900 border-amber-200'
                    }`}
                  >
                    {tag.emoji} {locName}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-slate-400 font-semibold">
                {language === 'az' ? 'Məşhur:' : language === 'tr' ? 'Popüler:' : language === 'ru' ? 'Популярные:' : 'Popular:'}
              </span>
              {[
                { id: 'cat', label: 'Cat', emoji: '🐱' },
                { id: 'dog', label: 'Dog', emoji: '🐶' },
                { id: 'wolf', label: 'Wolf', emoji: '🐺' },
                { id: 'eagle', label: 'Eagle', emoji: '🦅' },
                { id: 'great-horned-owl', label: 'Owl', emoji: '🦉' }
              ].map(tag => {
                const locName = getLocalizedAnimal({ id: tag.id, name: tag.label }).name;
                const isSelected = searchQuery.toLowerCase() === locName.toLowerCase() || searchQuery.toLowerCase() === tag.label.toLowerCase();
                return (
                  <button
                    key={tag.id}
                    onClick={() => {
                      if (isSelected) {
                        setSearchQuery('');
                      } else {
                        setSearchQuery(locName);
                      }
                      sound.playClick();
                    }}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-xs'
                        : 'bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 text-slate-700 border-slate-200'
                    }`}
                  >
                    {tag.emoji} {locName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Habitat Filter Pills */}
          <div>
            <div className="flex items-center gap-1.5 mb-1.5 text-xs font-bold text-slate-500">
              <Filter className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('filterHabitat')}:</span>
            </div>
            <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1">
              {HABITATS.map((habitat) => {
                const translatedHabitat = HABITAT_TRANSLATIONS[habitat]?.[language] || (habitat === 'All' ? t('allHabitats') : habitat);
                return (
                  <button
                    key={habitat}
                    id={`filter-habitat-${String(habitat || '').toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => {
                      setSelectedHabitat(habitat);
                      sound.playClick();
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                      selectedHabitat === habitat
                        ? 'bg-emerald-600 text-white shadow-xs font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {translatedHabitat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Group Filter Pills */}
          <div>
            <div className="flex items-center gap-1.5 mb-1.5 text-xs font-bold text-slate-500">
              <span>{t('filterGroup')}:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {GROUPS.map((group) => {
                const translatedGroup = GROUP_TRANSLATIONS[group]?.[language] || (group === 'All' ? t('allGroups') : group);
                return (
                  <button
                    key={group}
                    id={`filter-group-${String(group || '').toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => {
                      setSelectedGroup(group);
                      sound.playClick();
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      selectedGroup === group
                        ? 'bg-teal-600 text-white shadow-xs font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {translatedGroup}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 1: SPOTLIGHT ANIMALS --- */}
      {activeTab === 'featured' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-800 font-display flex items-center gap-2">
              <span>{t('tabSpotlight')}</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                {filteredFeatured.length}
              </span>
            </h3>
            <span className="text-xs text-slate-500">{t('listenSound')}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredFeatured.map((animal) => {
              const loc = getLocalizedAnimal(animal);
              const isPlayingThis = currentlyPlayingId === animal.id;
              const isNewlyAdded = [
                'gazelle', 'roe-deer', 'red-deer', 'peacock', 'duck', 'zebra', 'kangaroo', 'rhinoceros', 'crocodile', 'pig',
                'fox', 'swallow', 'crane', 'crow', 'chick', 'snake', 'turtle', 'lama', 'goat', 'calf', 'lamb', 'buffalo', 'donkey', 'horse'
              ].includes(animal.id);

              return (
                <div
                  key={animal.id}
                  id={`animal-card-${animal.id}`}
                  className={`bg-white rounded-2xl border transition-all overflow-hidden flex flex-col group ${
                    isPlayingThis
                      ? 'border-emerald-500 ring-2 ring-emerald-400/40 shadow-lg shadow-emerald-500/10'
                      : isNewlyAdded
                        ? 'border-amber-300/90 shadow-sm hover:shadow-md'
                        : 'border-slate-200/80 shadow-xs hover:shadow-md'
                  }`}
                >
                  {/* Animal Image */}
                  <div 
                    onClick={() => {
                      setModalSelectedAngle('all');
                      setSelectedAnimalModal(animal);
                    }}
                    className="relative h-48 w-full bg-slate-100 overflow-hidden cursor-pointer"
                    title={`Click to view ${loc.name} details & multi-angle views`}
                  >
                    <img
                      src={animal.image}
                      alt={loc.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                      <span>{animal.emoji}</span>
                      <span>{loc.group}</span>
                    </div>
                    <div className="absolute top-2 right-2 flex items-center gap-1.5">
                      {isNewlyAdded && (
                        <span className="bg-amber-400 text-amber-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
                          ✨ {t('badgeNew')}
                        </span>
                      )}
                      <span className="bg-emerald-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                        {loc.habitat.split('&')[0]}
                      </span>
                    </div>
                    {animal.multiViews && (
                      <div className="absolute bottom-2 right-2 bg-indigo-950/85 backdrop-blur-sm text-indigo-100 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-indigo-400/40 shadow-md">
                        <span>🔄 {t('angleAll')}</span>
                      </div>
                    )}
                    {animal.audioUrl && (
                      <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Radio className="w-3 h-3 text-amber-400" />
                        <span>{t('listenSound')}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <h4 className="text-base font-bold text-slate-900 font-display flex items-center gap-1.5">
                            <span>{loc.name}</span>
                            <span className="text-sm">{animal.emoji}</span>
                          </h4>
                          <p className="text-[11px] text-slate-400 italic">
                            {animal.scientificName}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite({
                                itemId: animal.id,
                                itemType: 'animal',
                                title: loc.name,
                                emoji: animal.emoji,
                              });
                              sound.playClick();
                            }}
                            className={`p-1.5 rounded-lg transition-colors ${
                              isFavorite(animal.id)
                                ? 'text-rose-600 bg-rose-50 hover:bg-rose-100'
                                : 'text-slate-400 bg-slate-100 hover:text-rose-500 hover:bg-rose-50'
                            }`}
                            title={isFavorite(animal.id) ? 'Favoritlərdən çıxar' : 'Favoritlərə əlavə et'}
                          >
                            <Heart className={`w-4 h-4 ${isFavorite(animal.id) ? 'fill-rose-500' : ''}`} />
                          </button>
                          <button
                            onClick={() => handlePronounce(loc.name, loc.childDescription, animal.id)}
                            className="p-1.5 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                            title={t('pronounce')}
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setStudioTargetAnimal({ id: animal.id, title: loc.name });
                              sound.playClick();
                            }}
                            className={`p-1.5 rounded-lg transition-colors ${
                              voiceoverService.hasVoiceover(animal.id, language)
                                ? 'text-emerald-800 bg-emerald-100 hover:bg-emerald-200'
                                : 'text-slate-400 bg-slate-100 hover:text-rose-600 hover:bg-rose-50'
                            }`}
                            title={voiceoverService.hasVoiceover(animal.id, language) ? 'Sizin Səsiniz (Dinlə/Redaktə et)' : 'Öz Səsini Yaz'}
                          >
                            <Mic className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {loc.childDescription}
                      </p>

                      <div className="mt-2.5 p-2 rounded-xl bg-amber-50/70 border border-amber-200/60 text-[11px] text-amber-900">
                        <span className="font-bold">✨ {t('funFact')}: </span>
                        {loc.funFact}
                      </div>

                      {animal.multiViews && (
                        <div className="mt-2 flex items-center gap-1.5 text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2.5 py-1 rounded-lg">
                          <span>📐 {t('viewAngles')}: {t('angleFront')} • {t('angleSide')} • {t('angleBack')}</span>
                        </div>
                      )}
                    </div>

                    {/* Sound Trigger Button */}
                    <div className="pt-2 border-t border-slate-100">
                      <button
                        id={`animal-sound-btn-${animal.id}`}
                        onClick={() => handlePlaySound(animal)}
                        className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95 ${
                          isPlayingThis
                            ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-300 shadow-md animate-pulse'
                            : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white'
                        }`}
                      >
                        <Volume2 className={`w-4 h-4 ${isPlayingThis ? 'animate-bounce' : ''}`} />
                        <span>
                          {isPlayingThis ? `${t('listenSound')} ${loc.soundLabel}...` : loc.soundLabel}
                        </span>
                      </button>

                      {(animal.youtubeId || getAnimalAsset(animal.name).youtubeId) && (
                        <button
                          onClick={() => {
                            setModalSelectedAngle('all');
                            setSelectedAnimalModal(animal);
                          }}
                          className="mt-2 w-full py-2 px-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center gap-2 border border-red-200 transition-colors cursor-pointer"
                        >
                          <Radio className="w-4 h-4 text-red-600 animate-pulse" />
                          <span>{t('watchVideo')}</span>
                        </button>
                      )}

                      {onPlayPuzzle && (
                        <button
                          id={`animal-puzzle-btn-${animal.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onPlayPuzzle(animal.id);
                          }}
                          className="mt-2 w-full py-2 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center gap-2 border border-purple-200 transition-colors cursor-pointer"
                        >
                          <Puzzle className="w-4 h-4 text-purple-600" />
                          <span>{t('playPuzzle')}</span>
                        </button>
                      )}

                      <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                        <span>🍽️ {loc.diet}</span>
                        {animal.speed && <span>⚡ {animal.speed}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredFeatured.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
              <span className="text-4xl">🔍</span>
              <h4 className="mt-2 font-bold text-slate-700 font-display">{t('noAnimalsFound')}</h4>
              <p className="text-xs text-slate-500 mt-1">
                {t('clearFilters')}
              </p>
            </div>
          )}
        </div>
      )}

      {/* --- TAB 2: 1,000 ANIMAL CATALOG --- */}
      {activeTab === 'catalog' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-slate-800 font-display flex items-center gap-2">
                <span>{t('tabCatalog')}</span>
                <span className="text-xs bg-teal-100 text-teal-800 px-2.5 py-0.5 rounded-full font-bold">
                  {filteredCatalog.length}
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                {t('details')} • {t('pronounce')}
              </p>
            </div>
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredCatalog.slice(0, 120).map((item, idx) => {
              const asset = getAnimalAsset(item.name);
              const loc = getLocalizedAnimal(item as any);

              return (
                <div
                  key={`${item.name}-${idx}`}
                  id={`catalog-item-${idx}`}
                  onClick={() => {
                    setModalSelectedAngle('all');
                    setSelectedAnimalModal(item);
                    sound.playClick();
                    const itemId = ('id' in item ? (item as any).id : item.name.toLowerCase().replace(/\s+/g, '_'));
                    sound.speak(`${loc.name}. ${loc.childDescription || item.fact}`, language, itemId);
                  }}
                  className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      {asset.image ? (
                        <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-200 group-hover:scale-110 transition-transform">
                          <img
                            src={asset.image}
                            alt={loc.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <span className="text-2xl group-hover:scale-110 transition-transform">{item.emoji}</span>
                      )}
                      <div className="flex items-center gap-1">
                        {asset.youtubeId && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-red-50 text-red-600 border border-red-200/60 flex items-center gap-1">
                            <Radio className="w-2.5 h-2.5 animate-pulse" /> {t('watchVideo')}
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const catalogItemId = ('id' in item ? (item as any).id : item.name.toLowerCase().replace(/\s+/g, '_'));
                            toggleFavorite({
                              itemId: catalogItemId,
                              itemType: 'animal',
                              title: loc.name,
                              emoji: item.emoji,
                            });
                            sound.playClick();
                          }}
                          className={`p-1 rounded-md transition-colors ${
                            isFavorite(('id' in item ? (item as any).id : item.name.toLowerCase().replace(/\s+/g, '_')))
                              ? 'text-rose-600 bg-rose-50'
                              : 'text-slate-300 hover:text-rose-500'
                          }`}
                          title="Favorite"
                        >
                          <Heart className={`w-3 h-3 ${isFavorite(('id' in item ? (item as any).id : item.name.toLowerCase().replace(/\s+/g, '_'))) ? 'fill-rose-500' : ''}`} />
                        </button>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          {loc.group.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                    <h4 className="mt-2 text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-emerald-700">
                      {loc.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 line-clamp-2 mt-1">
                      {loc.childDescription || item.fact}
                    </p>
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-emerald-600 font-bold">
                    <span>{loc.habitat.split('&')[0]}</span>
                    <Volume2 className="w-3 h-3 text-slate-400 group-hover:text-emerald-600" />
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCatalog.length > 120 && (
            <div className="text-center py-4 bg-emerald-50/50 rounded-xl border border-emerald-100 text-xs text-emerald-800 font-semibold">
              Showing top 120 of {filteredCatalog.length} matching animals. Use the search bar above to look up any specific animal in the 1,000 catalog!
            </div>
          )}
        </div>
      )}

      {/* --- TAB 3: PICTURE MYSTERY GAME (Picture Shown, Child Finds Animal Name - No Sound) --- */}
      {activeTab === 'game' && (() => {
        const locGameAnimal = getLocalizedAnimal(gameAnimal);

        return (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 border-2 border-amber-300 shadow-md space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold">
                <Award className="w-4 h-4 text-amber-600" />
                <span>{t('score')}: {gameScore}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 font-display">
                {t('mysteryGameTitle')} 🖼️🐾
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {t('mysteryGameSubtitle')}
              </p>
            </div>

            {/* Animal Photo Frame */}
            <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden border-4 border-amber-400 shadow-lg bg-slate-900 aspect-4/3 flex items-center justify-center">
              <img
                src={gameAnimal.image}
                alt="Mystery Animal"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />

              {/* Habitat and Group Badges on Photo */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-sm text-white text-[11px] font-bold border border-white/20 shadow-xs">
                  🌍 {locGameAnimal.habitat}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-700/85 backdrop-blur-sm text-emerald-100 text-[11px] font-bold border border-white/20 shadow-xs">
                  {locGameAnimal.group}
                </span>
              </div>

              {/* Answer Reveal Banner */}
              {gameAnswered && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-3 text-center text-white">
                  <span className="text-3xl block">{gameAnimal.emoji}</span>
                  <p className="font-extrabold text-lg sm:text-xl text-emerald-300 font-display">
                    {locGameAnimal.name}
                  </p>
                </div>
              )}
            </div>

            {/* Animal Name Options: Child finds the animal name */}
            <div className="space-y-3">
              <p className="text-center text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                {gameAnswered ? (language === 'az' ? 'Nəticə:' : language === 'tr' ? 'Sonuç:' : language === 'ru' ? 'Результат:' : 'Result:') : t('mysteryQuestion')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {gameOptions.map((opt) => {
                  const locOpt = getLocalizedAnimal(opt);
                  const isSelected = selectedGuessId === opt.id;
                  const isTarget = opt.id === gameAnimal.id;

                  let buttonStyle = 'border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 hover:shadow-sm active:scale-98 bg-white text-slate-800';
                  if (gameAnswered) {
                    if (isTarget) {
                      buttonStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-400 shadow-sm';
                    } else if (isSelected) {
                      buttonStyle = 'border-rose-400 bg-rose-50 text-rose-900 opacity-80';
                    } else {
                      buttonStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-50';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      id={`guess-animal-${opt.id}`}
                      onClick={() => handleGameGuess(opt)}
                      disabled={gameAnswered}
                      className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-center gap-1 text-left cursor-pointer ${buttonStyle}`}
                    >
                      <span className="font-extrabold text-sm sm:text-base block">
                        {locOpt.name}
                      </span>
                      <span className="text-[11px] text-slate-500 block">
                        {locOpt.group} • {locOpt.diet}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feedback & Next Round Button */}
            {gameAnswered && (
              <div className="text-center pt-3 border-t border-slate-100 space-y-3">
                <div className={`p-4 rounded-2xl ${gameIsCorrect ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-amber-50 border border-amber-200 text-amber-950'}`}>
                  <p className="text-base sm:text-lg font-extrabold">
                    {gameIsCorrect 
                      ? `🎉 ${t('correctAwesome')} ${locGameAnimal.name}!`
                      : `${locGameAnimal.name}!`}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-lg mx-auto">
                    {locGameAnimal.childDescription}
                  </p>
                  <p className="text-xs text-emerald-800 font-bold mt-2">
                    💡 {t('funFact')}: {locGameAnimal.funFact}
                  </p>
                </div>

                <button
                  id="next-animal-round-btn"
                  onClick={startNewGameRound}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-transform active:scale-95 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>{t('nextCreature')}</span>
                  <span>➔</span>
                </button>
              </div>
            )}
          </div>
        );
      })()}

      {/* Detail Modal for Selected Animal */}
      {selectedAnimalModal && (() => {
        const modalAsset = getAnimalAsset(selectedAnimalModal.name);
        const modalImage = ('image' in selectedAnimalModal && selectedAnimalModal.image) 
          ? selectedAnimalModal.image 
          : modalAsset.image;
        const modalAudioUrl = ('audioUrl' in selectedAnimalModal && selectedAnimalModal.audioUrl)
          ? selectedAnimalModal.audioUrl
          : modalAsset.audioUrl;
        const modalSoundType = ('soundType' in selectedAnimalModal && selectedAnimalModal.soundType)
          ? selectedAnimalModal.soundType
          : modalAsset.soundType;
        const modalSoundLabel = ('soundLabel' in selectedAnimalModal && selectedAnimalModal.soundLabel)
          ? selectedAnimalModal.soundLabel
          : modalAsset.soundLabel;
        const modalYoutubeId = ('youtubeId' in selectedAnimalModal && selectedAnimalModal.youtubeId)
          ? selectedAnimalModal.youtubeId
          : modalAsset.youtubeId;
        const modalYoutubeUrl = ('youtubeUrl' in selectedAnimalModal && selectedAnimalModal.youtubeUrl)
          ? selectedAnimalModal.youtubeUrl
          : modalAsset.youtubeUrl;

        const modalMultiViews = ('multiViews' in selectedAnimalModal && selectedAnimalModal.multiViews)
          ? selectedAnimalModal.multiViews
          : modalAsset.multiViews;

        let displayImage = modalImage;
        let viewTitle = t('angleTurnaround');
        let viewDetail = 'Showing all sides of the animal side-by-side: front view, side profile, and back view.';

        if (modalMultiViews) {
          if (modalSelectedAngle === 'front' && modalMultiViews.front) {
            displayImage = modalMultiViews.front;
            viewTitle = t('angleFrontView');
            viewDetail = selectedAnimalModal.name.includes('Owl')
              ? 'Direct face view showing piercing golden-yellow eyes, facial disc feathers that guide nighttime sound, and upright ear tufts.'
              : 'Front-facing portrait showcasing large gentle dark eyes, furry ossicones horns, and long spotted neck.';
          } else if (modalSelectedAngle === 'side' && modalMultiViews.side) {
            displayImage = modalMultiViews.side;
            viewTitle = t('angleSideView');
            viewDetail = selectedAnimalModal.name.includes('Owl')
              ? 'Perched on a tree branch showing curved sharp beak, strong talons, and layered wing plumage.'
              : 'Full side profile highlighting the iconic 2-meter long neck, tall slender legs, and unique geometric coat spots.';
          } else if (modalSelectedAngle === 'back' && modalMultiViews.back) {
            displayImage = modalMultiViews.back;
            viewTitle = t('angleBackView');
            viewDetail = selectedAnimalModal.name.includes('Owl')
              ? 'Rear plumage view showing mottled camouflage feathers and head swiveled around to demonstrate 270° neck swivel.'
              : 'Dorsal rear view showing the neck mane, back spinal spot patterns, and long black-tufted swishing tail.';
          } else {
            displayImage = modalMultiViews.allSides || modalImage;
            viewTitle = t('angleTurnaround');
            viewDetail = 'Complete side-by-side study showing the animal from every angle: front, side profile, and back view.';
          }
        }

        const locModal = getLocalizedAnimal(selectedAnimalModal as any);
        const modalText = locModal.childDescription || ('childDescription' in selectedAnimalModal 
          ? selectedAnimalModal.childDescription 
          : selectedAnimalModal.fact);

        return (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-emerald-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedAnimalModal(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
              >
                ✕
              </button>

              <div className="text-center space-y-3">
                {modalImage ? (
                  <div className="space-y-2">
                    <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-inner bg-slate-900 flex items-center justify-center">
                      <img
                        src={displayImage}
                        alt={`${locModal.name} - ${viewTitle}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <span>{selectedAnimalModal.emoji}</span>
                        <span>{modalMultiViews ? `360° ${t('angleAll')}` : t('verifiedPhoto')}</span>
                      </div>
                      {modalMultiViews && (
                        <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg text-center truncate">
                          {viewTitle}
                        </div>
                      )}
                    </div>

                    {modalMultiViews && (
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-center gap-1.5 p-1 bg-indigo-50/90 rounded-xl border border-indigo-100">
                          <button
                            type="button"
                            onClick={() => setModalSelectedAngle('all')}
                            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                              modalSelectedAngle === 'all'
                                ? 'bg-indigo-600 text-white shadow-xs'
                                : 'text-indigo-900 hover:bg-white/80'
                            }`}
                          >
                            🔄 {t('angleAll')}
                          </button>
                          {modalMultiViews.front && (
                            <button
                              type="button"
                              onClick={() => setModalSelectedAngle('front')}
                              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                                modalSelectedAngle === 'front'
                                  ? 'bg-indigo-600 text-white shadow-xs'
                                  : 'text-indigo-900 hover:bg-white/80'
                              }`}
                            >
                              👀 {t('angleFront')}
                            </button>
                          )}
                          {modalMultiViews.side && (
                            <button
                              type="button"
                              onClick={() => setModalSelectedAngle('side')}
                              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                                modalSelectedAngle === 'side'
                                  ? 'bg-indigo-600 text-white shadow-xs'
                                  : 'text-indigo-900 hover:bg-white/80'
                              }`}
                            >
                              ⭐ {t('angleSide')}
                            </button>
                          )}
                          {modalMultiViews.back && (
                            <button
                              type="button"
                              onClick={() => setModalSelectedAngle('back')}
                              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                                modalSelectedAngle === 'back'
                                  ? 'bg-indigo-600 text-white shadow-xs'
                                  : 'text-indigo-900 hover:bg-white/80'
                              }`}
                            >
                              🪶 {t('angleBack')}
                            </button>
                          )}
                        </div>

                        {modalSelectedAngle === 'all' ? (
                          <div className="grid grid-cols-3 text-center text-[10px] font-bold text-indigo-700 bg-indigo-50/60 py-1.5 px-2 rounded-lg border border-indigo-100">
                            <div className="border-r border-indigo-200/60">⬅️ {t('angleFront')}</div>
                            <div className="border-r border-indigo-200/60">⭐ {t('angleSide')}</div>
                            <div>{t('angleBack')} ➡️</div>
                          </div>
                        ) : (
                          <p className="text-[11px] text-indigo-800 bg-indigo-50/60 p-2 rounded-lg border border-indigo-100 text-left leading-relaxed">
                            💡 <span className="font-bold">{viewTitle}:</span> {viewDetail}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="text-6xl">{selectedAnimalModal.emoji}</span>
                )}

                <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                  {locModal.name}
                </h3>
                <div className="flex justify-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    {locModal.group}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-100 text-teal-800">
                    {locModal.habitat}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  {modalText}
                </p>

                {/* Sound & Pronunciation Actions */}
                <div className="space-y-2 pt-2">
                  {(modalAudioUrl || modalSoundType) && (
                    <button
                      id="modal-play-sound-btn"
                      onClick={() => {
                        if (modalAudioUrl && modalAudioUrl.startsWith('/')) {
                          sound.playAudioUrl(modalAudioUrl, modalSoundType);
                        } else if (modalSoundType) {
                          sound.playAnimalSound(modalSoundType);
                        } else if (modalAudioUrl) {
                          sound.playAudioUrl(modalAudioUrl);
                        }
                      }}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95 cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>{modalSoundLabel || t('listenSound')}</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      sound.playClick();
                      const modalItemId = ('id' in selectedAnimalModal ? selectedAnimalModal.id : selectedAnimalModal.name.toLowerCase().replace(/\s+/g, '_'));
                      sound.speak(`${locModal.name}. ${modalText}`, language, modalItemId);
                    }}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>{t('pronounce')}</span>
                  </button>

                  {onPlayPuzzle && (
                    <button
                      id="modal-play-puzzle-btn"
                      onClick={() => {
                        const modalItemId = ('id' in selectedAnimalModal ? selectedAnimalModal.id : selectedAnimalModal.name.toLowerCase().replace(/\s+/g, '_'));
                        setSelectedAnimalModal(null);
                        onPlayPuzzle(modalItemId);
                      }}
                      className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                    >
                      <Puzzle className="w-4 h-4" />
                      <span>{t('playPuzzle')}</span>
                    </button>
                  )}

                  {(() => {
                    const modalItemId = ('id' in selectedAnimalModal ? selectedAnimalModal.id : selectedAnimalModal.name.toLowerCase().replace(/\s+/g, '_'));
                    const isFav = isFavorite(modalItemId);
                    return (
                      <button
                        onClick={() => {
                          toggleFavorite({
                            itemId: modalItemId,
                            itemType: 'animal',
                            title: locModal.name,
                            emoji: selectedAnimalModal.emoji,
                          });
                          sound.playClick();
                        }}
                        className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border transition-all ${
                          isFav
                            ? 'bg-rose-50 text-rose-800 border-rose-300 hover:bg-rose-100'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-rose-50 hover:text-rose-600'
                        }`}
                      >
                        <Heart className={`w-4 h-4 text-rose-500 ${isFav ? 'fill-rose-500' : ''}`} />
                        <span>{isFav ? t('removeFromFavorites') : t('addToFavorites')}</span>
                      </button>
                    );
                  })()}

                  {(() => {
                    const modalItemId = ('id' in selectedAnimalModal ? selectedAnimalModal.id : selectedAnimalModal.name.toLowerCase().replace(/\s+/g, '_'));
                    const hasUserVoice = voiceoverService.hasVoiceover(modalItemId, language);
                    return (
                      <button
                        onClick={() => {
                          setStudioTargetAnimal({ id: modalItemId, title: locModal.name });
                          sound.playClick();
                        }}
                        className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border transition-all ${
                          hasUserVoice
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                            : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
                        }`}
                      >
                        <Mic className="w-4 h-4 text-rose-500" />
                        <span>{hasUserVoice ? t('listenYourVoice') : t('recordVoiceForItem')}</span>
                      </button>
                    );
                  })()}

                  {modalYoutubeId && (
                    <div className="pt-3 border-t border-slate-100 text-left space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                          <Radio className="w-4 h-4 text-red-600 animate-pulse" />
                          <span>{t('watchVideo')}</span>
                        </span>
                        <a
                          href={modalYoutubeUrl || `https://youtube.com/watch?v=${modalYoutubeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-bold text-red-600 hover:underline flex items-center gap-0.5"
                        >
                          {t('openInYoutube')}
                        </a>
                      </div>
                      <div className="rounded-2xl overflow-hidden aspect-video w-full bg-slate-950 shadow-md border border-slate-200">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${modalYoutubeId}?rel=0`}
                          title={`${locModal.name} Wild Sound & Video`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full border-0"
                        />
                      </div>
                      <p className="text-[11px] text-slate-500 italic text-center">
                        {locModal.name}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Voiceover Studio Modal for direct animal recording */}
      {studioTargetAnimal && (
        <VoiceoverStudioModal
          isOpen={true}
          onClose={() => setStudioTargetAnimal(null)}
          preselectedItemId={studioTargetAnimal.id}
          preselectedItemTitle={studioTargetAnimal.title}
          preselectedCategory="animals"
        />
      )}
    </div>
  );
};
