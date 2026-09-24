import React, { useState, useEffect } from 'react';
import { SectionId, WorldSubsectionId, ShapesSubsectionId, SensationsSubsectionId, NumbersAlphabetSubsectionId } from './types';
import { Navbar } from './components/Navbar';
import { AnimalExplorer } from './components/AnimalExplorer';
import { NatureExplorer } from './components/NatureExplorer';
import { UniverseExplorer } from './components/UniverseExplorer';
import { ShapesExplorer } from './components/ShapesExplorer';
import { SensationsExplorer } from './components/SensationsExplorer';
import { PuzzleExplorer } from './components/PuzzleExplorer';
import { NumbersAlphabetExplorer } from './components/NumbersAlphabetExplorer';
import { QuizExplorer } from './components/QuizExplorer';
import { DailyFactPopup, DAILY_FACT_AUTO_OPEN_KEY, DAILY_FACT_LAST_SEEN_KEY } from './components/DailyFactPopup';
import { ProfileBadgesOverlay } from './components/ProfileBadgesOverlay';
import { BadgeUnlockedToast } from './components/BadgeUnlockedToast';
import { ErrorBoundary } from './components/ErrorBoundary';
import { sound } from './utils/soundEngine';
import { Volume2, VolumeX, Heart, Download, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './context/LanguageContext';
import programLogo from './assets/images/program_logo_1788450747426.jpg';

export default function App() {
  const { t, language } = useLanguage();
  const [activeSection, setActiveSection] = useState<SectionId>('world');
  const [worldSub, setWorldSub] = useState<WorldSubsectionId>('animals');
  const [shapesSub, setShapesSub] = useState<ShapesSubsectionId>('plane');
  const [sensationsSub, setSensationsSub] = useState<SensationsSubsectionId>('explorer');
  const [numbersSub, setNumbersSub] = useState<NumbersAlphabetSubsectionId>('alphabet');
  const [selectedPuzzleId, setSelectedPuzzleId] = useState<string | null>(null);
  const [soundMuted, setSoundMuted] = useState<boolean>(false);
  const [isDailyFactOpen, setIsDailyFactOpen] = useState<boolean>(false);

  // Auto-open Daily Wonder fact on initial app load if not yet seen today
  useEffect(() => {
    try {
      const autoOpen = localStorage.getItem(DAILY_FACT_AUTO_OPEN_KEY) !== 'false';
      const lastSeen = localStorage.getItem(DAILY_FACT_LAST_SEEN_KEY);
      const todayDate = new Date().toISOString().slice(0, 10);
      if (autoOpen && lastSeen !== todayDate) {
        const timer = setTimeout(() => {
          setIsDailyFactOpen(true);
        }, 750);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback: silent catch
    }
  }, []);

  const handleOpenPuzzle = (itemId?: string) => {
    if (itemId) setSelectedPuzzleId(itemId);
    setActiveSection('puzzle');
    sound.playClick();
  };

  const handleNavigateFromDailyFact = (sub: WorldSubsectionId, _itemId?: string) => {
    setActiveSection('world');
    setWorldSub(sub);
    setIsDailyFactOpen(false);
    sound.playClick();
  };

  const toggleSound = () => {
    const nextState = !soundMuted;
    setSoundMuted(nextState);
    sound.setMuted(nextState);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-200">
      {/* Top Main Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        worldSub={worldSub}
        onSelectWorldSub={setWorldSub}
        shapesSub={shapesSub}
        onSelectShapesSub={setShapesSub}
        sensationsSub={sensationsSub}
        onSelectSensationsSub={setSensationsSub}
        numbersSub={numbersSub}
        onSelectNumbersSub={setNumbersSub}
        isMuted={soundMuted}
        onToggleMute={toggleSound}
        onOpenDailyFact={() => {
          setIsDailyFactOpen(true);
          sound.playClick();
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ErrorBoundary>
          <AnimatePresence mode="wait">
            {activeSection === 'world' && (
              <motion.div
                key={`world-${worldSub}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {worldSub === 'animals' && <AnimalExplorer onPlayPuzzle={handleOpenPuzzle} />}
                {worldSub === 'nature' && <NatureExplorer />}
                {worldSub === 'universe' && <UniverseExplorer />}
              </motion.div>
            )}

            {activeSection === 'shapes' && (
              <motion.div
                key={`shapes-${shapesSub}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <ShapesExplorer currentSub={shapesSub} onSelectSub={setShapesSub} />
              </motion.div>
            )}

            {activeSection === 'sensations' && (
              <motion.div
                key={`sensations-${sensationsSub}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <SensationsExplorer currentSub={sensationsSub} onSelectSub={setSensationsSub} />
              </motion.div>
            )}

            {activeSection === 'puzzle' && (
              <motion.div
                key="puzzle-explorer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <PuzzleExplorer initialItemId={selectedPuzzleId} />
              </motion.div>
            )}

            {activeSection === 'numbers-alphabet' && (
              <motion.div
                key={`numbers-alphabet-${numbersSub}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <NumbersAlphabetExplorer currentSub={numbersSub} onSelectSub={setNumbersSub} />
              </motion.div>
            )}

            {activeSection === 'quiz' && (
              <motion.div
                key="quiz-explorer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <QuizExplorer />
              </motion.div>
            )}
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      {/* Daily Random Wonder Fact Pop-up Modal */}
      <DailyFactPopup
        isOpen={isDailyFactOpen}
        onClose={() => setIsDailyFactOpen(false)}
        onNavigateToWorld={handleNavigateFromDailyFact}
        onPlayPuzzle={handleOpenPuzzle}
      />

      {/* Explorer Digital Achievement Badges & Profile Overlay */}
      <ProfileBadgesOverlay />
      <BadgeUnlockedToast />

      {/* Footer & Accessibility Control Bar */}
      <footer className="mt-12 bg-white border-t border-slate-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <img
              src={programLogo}
              alt="Nature & Wonder Logo"
              referrerPolicy="no-referrer"
              className="w-7 h-7 rounded-full object-cover border border-emerald-300 shadow-xs"
            />
            <span className="font-extrabold text-slate-800 text-sm font-display">
              {t('appName')} {t('appBadge')}
            </span>
            <span>•</span>
            <span>{t('designedForKids')}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Download Speech Synthesis Script */}
            <div className="flex items-center gap-1.5 bg-slate-100/90 border border-slate-200 rounded-full px-3 py-1 text-slate-700 text-xs font-semibold shadow-2xs">
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              <span>
                {language === 'tr'
                  ? 'Türkçe Konuşma Sentezi:'
                  : language === 'az'
                  ? 'Azərbaycan Nitq Sintezi:'
                  : 'Speech Synthesis:'}
              </span>
              <a
                href={language === 'tr' ? '/turkce_konusma_sentezi_sozluk.txt' : '/azerbaycan_nitq_sintezi_sozluk.txt'}
                download={language === 'tr' ? 'turkce_konusma_sentezi_sozluk.txt' : 'azerbaycan_nitq_sintezi_sozluk.txt'}
                className="text-amber-700 hover:text-amber-900 font-bold underline px-1 flex items-center gap-0.5"
                title="Download .TXT"
              >
                <Download className="w-3 h-3" />
                <span>.TXT</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={language === 'tr' ? '/turkce_konusma_sentezi_sozluk.json' : '/azerbaycan_nitq_sintezi_sozluk.json'}
                download={language === 'tr' ? 'turkce_konusma_sentezi_sozluk.json' : 'azerbaycan_nitq_sintezi_sozluk.json'}
                className="text-amber-700 hover:text-amber-900 font-bold underline px-1 flex items-center gap-0.5"
                title="Download .JSON"
              >
                <Download className="w-3 h-3" />
                <span>.JSON</span>
              </a>
            </div>

            {/* Audio Toggle Button */}
            <button
              id="global-sound-toggle"
              onClick={toggleSound}
              className={`px-3 py-1.5 rounded-full font-bold text-xs flex items-center gap-1.5 transition-colors ${
                soundMuted
                  ? 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                  : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
              }`}
            >
              {soundMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{soundMuted ? t('soundMuted') : t('soundActive')}</span>
            </button>

            <span className="hidden sm:inline text-slate-400">|</span>

            <span className="flex items-center gap-1 text-slate-400">
              <span>{t('madeWithLove')}</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
