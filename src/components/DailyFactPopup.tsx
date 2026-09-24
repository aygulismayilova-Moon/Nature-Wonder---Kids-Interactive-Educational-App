import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Volume2, 
  Compass, 
  Puzzle, 
  Shuffle, 
  Heart, 
  Check, 
  RotateCcw,
  TreePine,
  Cat,
  Orbit,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/soundEngine';
import { useLanguage } from '../context/LanguageContext';
import { useFirebase } from '../context/FirebaseContext';
import { 
  DAILY_FACT_ITEMS, 
  DailyFactItem, 
  getDailyFactSeed, 
  getRandomFactIndex 
} from '../data/dailyFactData';
import { FEATURED_ANIMALS } from '../data/animalsData';
import { NATURE_ELEMENTS } from '../data/natureData';
import { UNIVERSE_ELEMENTS } from '../data/universeData';
import { SectionId, WorldSubsectionId } from '../types';

export const DAILY_FACT_LAST_SEEN_KEY = 'nature_wonder_daily_fact_last_seen';
export const DAILY_FACT_AUTO_OPEN_KEY = 'nature_wonder_daily_fact_auto_open';

interface DailyFactPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToWorld: (sub: WorldSubsectionId, itemId?: string) => void;
  onPlayPuzzle?: (itemId: string) => void;
}

export const DailyFactPopup: React.FC<DailyFactPopupProps> = ({
  isOpen,
  onClose,
  onNavigateToWorld,
  onPlayPuzzle
}) => {
  const { t, language, getLocalizedAnimal, getLocalizedNature, getLocalizedUniverse } = useLanguage();
  const { isFavorite, toggleFavorite } = useFirebase();

  // Stable seed index for today
  const todaySeedIndex = useMemo(() => getDailyFactSeed(DAILY_FACT_ITEMS.length), []);
  const [currentIndex, setCurrentIndex] = useState<number>(todaySeedIndex);
  const [isSpeakingFact, setIsSpeakingFact] = useState<boolean>(false);
  const [hasCelebrated, setHasCelebrated] = useState<boolean>(false);
  const [autoOpenOnStartup, setAutoOpenOnStartup] = useState<boolean>(() => {
    try {
      return localStorage.getItem(DAILY_FACT_AUTO_OPEN_KEY) !== 'false';
    } catch {
      return true;
    }
  });
  const [imageError, setImageError] = useState<boolean>(false);

  // Sync to today's seed when opened
  useEffect(() => {
    if (isOpen) {
      setImageError(false);
      setIsSpeakingFact(false);
      setHasCelebrated(false);
      // Play a cheerful sparkle sound when daily fact opens
      sound.playStarShimmer();
    }
  }, [isOpen]);

  const currentItem: DailyFactItem = DAILY_FACT_ITEMS[currentIndex] || DAILY_FACT_ITEMS[0];
  const isTodaySeed = currentIndex === todaySeedIndex;

  // Localized details based on item category
  const localizedData = useMemo(() => {
    if (currentItem.category === 'animals') {
      const animal = FEATURED_ANIMALS.find(a => a.id === currentItem.id);
      const loc = animal ? getLocalizedAnimal(animal) : null;
      return {
        name: loc?.name || currentItem.name,
        funFact: loc?.funFact || currentItem.funFact,
        description: loc?.childDescription || currentItem.description,
        categoryLabel: t('categoryAnimal'),
        tag: loc ? `${loc.group} · ${loc.habitat}` : currentItem.tag,
        soundType: animal?.soundType || currentItem.soundType,
        audioUrl: animal?.audioUrl || currentItem.audioUrl
      };
    } else if (currentItem.category === 'nature') {
      const nature = NATURE_ELEMENTS.find(n => n.id === currentItem.id);
      const loc = nature ? getLocalizedNature(nature) : null;
      return {
        name: loc?.name || currentItem.name,
        funFact: (loc?.funFacts && loc.funFacts[0]) || loc?.description || currentItem.funFact,
        description: loc?.description || currentItem.description,
        categoryLabel: t('categoryNature'),
        tag: loc?.category || currentItem.tag,
        soundType: nature?.ambientSound || currentItem.soundType,
        audioUrl: undefined
      };
    } else {
      const uni = UNIVERSE_ELEMENTS.find(u => u.id === currentItem.id);
      const loc = uni ? getLocalizedUniverse(uni) : null;
      return {
        name: loc?.name || currentItem.name,
        funFact: (loc?.funFacts && loc.funFacts[0]) || loc?.kidWonder || currentItem.funFact,
        description: loc?.kidWonder || loc?.description || currentItem.description,
        categoryLabel: t('categoryUniverse'),
        tag: loc?.category || currentItem.tag,
        soundType: uni?.soundType || currentItem.soundType,
        audioUrl: undefined
      };
    }
  }, [currentItem, language, getLocalizedAnimal, getLocalizedNature, getLocalizedUniverse, t]);

  // Handle closing modal
  const handleClose = () => {
    sound.stopSpeaking();
    sound.stopAudio();
    sound.playClick();
    // Record that the user has seen today's fact
    try {
      const todayDate = new Date().toISOString().slice(0, 10);
      localStorage.setItem(DAILY_FACT_LAST_SEEN_KEY, todayDate);
    } catch {}
    onClose();
  };

  // Toggle startup checkbox
  const handleToggleAutoOpen = (checked: boolean) => {
    setAutoOpenOnStartup(checked);
    sound.playClick();
    try {
      localStorage.setItem(DAILY_FACT_AUTO_OPEN_KEY, checked ? 'true' : 'false');
    } catch {}
  };

  // Shuffle to another fact
  const handleNextFact = () => {
    sound.stopSpeaking();
    sound.stopAudio();
    sound.playClick();
    setImageError(false);
    setIsSpeakingFact(false);
    setHasCelebrated(false);
    const nextIdx = getRandomFactIndex(currentIndex, DAILY_FACT_ITEMS.length);
    setCurrentIndex(nextIdx);
  };

  // Reset to today's designated fact
  const handleResetToToday = () => {
    sound.stopSpeaking();
    sound.stopAudio();
    sound.playClick();
    setImageError(false);
    setIsSpeakingFact(false);
    setHasCelebrated(false);
    setCurrentIndex(todaySeedIndex);
  };

  // Play pronunciation / read fact out loud
  const handleSpeakFact = () => {
    sound.playClick();
    if (isSpeakingFact) {
      sound.stopSpeaking();
      setIsSpeakingFact(false);
      return;
    }

    setIsSpeakingFact(true);
    const textToSpeak = `${localizedData.name}. ${localizedData.funFact}`;
    sound.speak(textToSpeak, language, currentItem.id);

    // Approximate speech duration based on text length
    const words = textToSpeak.split(' ').length;
    const estimatedDurationMs = Math.max(2500, words * 450);
    setTimeout(() => {
      setIsSpeakingFact(false);
    }, estimatedDurationMs);
  };

  // Play animal/nature/cosmic sound
  const handlePlaySound = () => {
    sound.playClick();
    if (currentItem.category === 'animals') {
      if (localizedData.audioUrl) {
        sound.playAudioUrl(localizedData.audioUrl, localizedData.soundType);
      } else if (localizedData.soundType) {
        sound.playAnimalSound(localizedData.soundType);
      }
    } else if (currentItem.category === 'nature') {
      if (localizedData.soundType) {
        sound.playNatureSound(localizedData.soundType);
      }
    } else if (currentItem.category === 'universe') {
      if (localizedData.soundType) {
        sound.playCosmicSound(localizedData.soundType);
      }
    }
  };

  // Celebrate learning this fact
  const handleCelebrateFact = () => {
    sound.playSuccess();
    setHasCelebrated(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.65 }
    });
    toggleFavorite({
      itemId: currentItem.id,
      itemType: currentItem.category === 'animals' ? 'animal' : currentItem.category === 'nature' ? 'nature' : 'universe',
      title: localizedData.name,
      emoji: currentItem.emoji
    });
  };

  // Navigate to World section
  const handleExploreInWorld = () => {
    handleClose();
    if (currentItem.category === 'animals') {
      onNavigateToWorld('animals', currentItem.id);
    } else if (currentItem.category === 'nature') {
      onNavigateToWorld('nature', currentItem.id);
    } else {
      onNavigateToWorld('universe', currentItem.id);
    }
  };

  // Navigate to Puzzle
  const handleSolvePuzzle = () => {
    handleClose();
    if (onPlayPuzzle) {
      onPlayPuzzle(currentItem.id);
    }
  };

  // Keydown escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const itemIsFavorited = isFavorite(currentItem.id);

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="daily-fact-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-3xl shadow-2xl border border-amber-200/80 max-w-lg w-full overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-amber-100 bg-gradient-to-r from-amber-50/80 via-emerald-50/60 to-amber-50/80">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-xl bg-amber-500/10 text-amber-700 shadow-2xs">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <h2 id="daily-fact-title" className="text-sm sm:text-base font-extrabold text-slate-800 tracking-tight font-display flex items-center gap-1.5">
                  <span>{t('dailyFactTitle')}</span>
                  {isTodaySeed ? (
                    <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {t('dailyFactBadge')}
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      #{currentIndex + 1}
                    </span>
                  )}
                </h2>
                <p className="text-xs text-slate-500">
                  {t('dailyFactSubtitle')}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              id="close-daily-fact-modal"
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-amber-500"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-5 overflow-y-auto space-y-4">
            {/* Visual Media Card with Zero-Broken-Image Fallback */}
            <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 shadow-inner group">
              {!imageError && currentItem.image ? (
                <img
                  src={currentItem.image}
                  alt={localizedData.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                /* Fallback stylized container */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-tr from-emerald-100 via-teal-50 to-amber-100 text-center">
                  <span className="text-6xl mb-2 filter drop-shadow-md animate-bounce">
                    {currentItem.emoji}
                  </span>
                  <span className="font-extrabold text-slate-800 text-lg">
                    {localizedData.name}
                  </span>
                  <span className="text-xs text-slate-600 mt-1">
                    {localizedData.tag}
                  </span>
                </div>
              )}

              {/* Gradient Scrim for readable badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Top Corner: Category Pill */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                {currentItem.category === 'animals' && <Cat className="w-3.5 h-3.5 text-amber-300" />}
                {currentItem.category === 'nature' && <TreePine className="w-3.5 h-3.5 text-emerald-300" />}
                {currentItem.category === 'universe' && <Orbit className="w-3.5 h-3.5 text-sky-300" />}
                <span>{localizedData.categoryLabel}</span>
              </div>

              {/* Top Corner: Sound Quick Play Button */}
              {localizedData.soundType && (
                <button
                  onClick={handlePlaySound}
                  id="play-sound-quick-btn"
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-slate-800 text-xs font-extrabold flex items-center gap-1.5 shadow-md backdrop-blur-xs transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-emerald-500"
                  title={t('playSound')}
                >
                  <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t('playSound')}</span>
                </button>
              )}

              {/* Bottom Scrim Content */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-3xl filter drop-shadow-sm">{currentItem.emoji}</span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white drop-shadow-md">
                      {localizedData.name}
                    </h3>
                    <p className="text-xs text-white/90 drop-shadow-xs font-medium">
                      {localizedData.tag}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Fact Feature Callout Box */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50/70 border border-amber-200/90 rounded-2xl p-4 shadow-xs relative">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-500 text-white shadow-xs shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
                      {t('funFact')}
                    </span>
                    {/* Read Aloud Button */}
                    <button
                      onClick={handleSpeakFact}
                      id="listen-daily-fact-btn"
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                        isSpeakingFact 
                          ? 'bg-amber-500 text-white ring-2 ring-amber-300 animate-pulse' 
                          : 'bg-white text-amber-900 hover:bg-amber-100 border border-amber-300'
                      }`}
                      title={t('listenFact')}
                    >
                      <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                      <span>{t('listenFact')}</span>
                    </button>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed font-sans">
                    "{localizedData.funFact}"
                  </p>
                </div>
              </div>
            </div>

            {/* Description & Kid Wonder Detail */}
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
              <p>{localizedData.description}</p>
            </div>

            {/* Action Bar: I Learned This & Shuffling */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <div className="flex items-center gap-2">
                {/* Celebrate / Mark Learned */}
                <button
                  onClick={handleCelebrateFact}
                  id="celebrate-daily-fact-btn"
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-xs ${
                    hasCelebrated || itemIsFavorited
                      ? 'bg-rose-100 text-rose-800 border border-rose-200'
                      : 'bg-white hover:bg-rose-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${hasCelebrated || itemIsFavorited ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`} />
                  <span>{hasCelebrated || itemIsFavorited ? t('iLearnedThis') : t('iLearnedThis')}</span>
                </button>

                {/* Back to Today's Seed if shuffled */}
                {!isTodaySeed && (
                  <button
                    onClick={handleResetToToday}
                    className="px-3 py-2 rounded-xl text-xs font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 flex items-center gap-1 transition-colors"
                    title={t('todaysFact')}
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t('todaysFact')}</span>
                  </button>
                )}
              </div>

              {/* Shuffle to Next Fact */}
              <button
                onClick={handleNextFact}
                id="next-daily-fact-btn"
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-amber-900 bg-amber-100/80 hover:bg-amber-200/90 transition-colors flex items-center gap-1.5 ml-auto"
                title={t('nextFact')}
              >
                <Shuffle className="w-3.5 h-3.5 text-amber-700" />
                <span>{t('nextFact')}</span>
              </button>
            </div>
          </div>

          {/* Footer Controls & Deep Navigation CTAs */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Navigate to Section CTA */}
              <button
                onClick={handleExploreInWorld}
                id="explore-in-world-btn"
                className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs sm:text-sm font-extrabold hover:from-emerald-700 hover:to-teal-700 flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all active:scale-[0.98]"
              >
                <Compass className="w-4 h-4 shrink-0" />
                <span>{t('exploreInWorld')}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-80" />
              </button>

              {/* Play Puzzle with this Item */}
              {onPlayPuzzle && (
                <button
                  onClick={handleSolvePuzzle}
                  id="solve-puzzle-from-daily-btn"
                  className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs sm:text-sm font-extrabold hover:from-purple-700 hover:to-indigo-700 flex items-center justify-center gap-2 shadow-md shadow-purple-500/20 transition-all active:scale-[0.98]"
                >
                  <Puzzle className="w-4 h-4 shrink-0" />
                  <span>{t('solvePuzzle')}</span>
                </button>
              )}
            </div>

            {/* Checkbox: Show on app load */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={autoOpenOnStartup}
                  onChange={(e) => handleToggleAutoOpen(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-600 border-slate-300 focus:ring-emerald-500 transition-colors"
                />
                <span className="text-slate-600 text-[11px] sm:text-xs">
                  {t('showOnStartup')}
                </span>
              </label>

              <button
                onClick={handleClose}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
              >
                {t('close')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
