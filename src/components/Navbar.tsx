import React, { useState, useEffect } from 'react';
import { SectionId, WorldSubsectionId, ShapesSubsectionId, SensationsSubsectionId, NumbersAlphabetSubsectionId, LANGUAGES, Language } from '../types';
import { Globe, Shapes, Utensils, Volume2, VolumeX, Languages, Check, Mic, BookOpen, Puzzle, BookA, Sparkles, Award, Trophy } from 'lucide-react';
import { sound } from '../utils/soundEngine';
import { useLanguage } from '../context/LanguageContext';
import { useFirebase } from '../context/FirebaseContext';
import programLogo from '../assets/images/program_logo_1788450747426.jpg';
import { VoiceoverStudioModal } from './VoiceoverStudioModal';
import { ExplorerJournalModal } from './ExplorerJournalModal';
import { voiceoverService } from '../services/voiceoverService';
import { useBadges } from '../context/BadgeContext';

interface NavbarProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  worldSub: WorldSubsectionId;
  onSelectWorldSub: (sub: WorldSubsectionId) => void;
  shapesSub: ShapesSubsectionId;
  onSelectShapesSub: (sub: ShapesSubsectionId) => void;
  sensationsSub: SensationsSubsectionId;
  onSelectSensationsSub: (sub: SensationsSubsectionId) => void;
  numbersSub?: NumbersAlphabetSubsectionId;
  onSelectNumbersSub?: (sub: NumbersAlphabetSubsectionId) => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenDailyFact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onSelectSection,
  worldSub,
  onSelectWorldSub,
  shapesSub,
  onSelectShapesSub,
  sensationsSub,
  onSelectSensationsSub,
  numbersSub = 'alphabet',
  onSelectNumbersSub,
  isMuted,
  onToggleMute,
  onOpenDailyFact
}) => {
  const { language, setLanguage, t } = useLanguage();
  const { user, favorites } = useFirebase();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isVoiceoverStudioOpen, setIsVoiceoverStudioOpen] = useState(false);
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [voiceoverCount, setVoiceoverCount] = useState(voiceoverService.getCount(language));
  const { explorerName, explorerAvatar, unlockedBadgesCount, setIsProfileOpen } = useBadges();

  useEffect(() => {
    // Keep AI voice engine configured and active in the background
    sound.setVoice('Kore');
    const updateCount = () => {
      setVoiceoverCount(voiceoverService.getCount(language));
    };
    updateCount();
    const unsub = voiceoverService.subscribe(updateCount);
    return unsub;
  }, [language]);

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
    setLangDropdownOpen(false);
    sound.playClick();
    
    // Friendly speech greeting in chosen language
    if (code === 'az') {
      sound.speak("Azərbaycan dili seçildi. Xoş gəlmisiniz!", 'az');
    } else if (code === 'tr') {
      sound.speak("Türkçe seçildi. Hoş geldiniz!", 'tr');
    } else if (code === 'ru') {
      sound.speak("Выбран русский язык. Добро пожаловать!", 'ru');
    } else {
      sound.speak("English selected. Welcome!", 'en');
    }
  };

  const currentLangObj = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
          
          {/* Brand & Mascot Greeting */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <div 
              onClick={() => {
                sound.playClick();
                sound.speak(t('welcomeGreeting'), language);
              }}
              className="flex items-center gap-3 cursor-pointer group"
              id="brand-logo"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/80 shadow-md shadow-emerald-500/20 group-hover:scale-105 group-hover:border-emerald-600 transition-all bg-emerald-50 shrink-0">
                <img
                  src={programLogo}
                  alt="Nature & Wonder Kids Explorer Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-extrabold tracking-tight text-slate-800 font-display">
                    {t('appName')}
                  </h1>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {t('appBadge')}
                  </span>
                </div>
                <p className="text-xs text-slate-500 hidden sm:block max-w-md truncate">
                  {t('appSubtitle')}
                </p>
              </div>
            </div>

            {/* Mobile Controls: Language & Sound */}
            <div className="flex items-center gap-1.5 lg:hidden">
              {/* Language Selector Mobile */}
              <div className="relative">
                <button
                  id="language-picker-mobile"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="p-2 rounded-xl border border-amber-200 bg-amber-50 text-slate-800 flex items-center gap-1 text-xs font-bold shadow-xs hover:bg-amber-100 transition-all"
                  title="Select Language"
                >
                  <span className="text-base leading-none">{currentLangObj.flag}</span>
                  <span className="uppercase text-[11px] font-extrabold">{currentLangObj.code}</span>
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95">
                    {LANGUAGES.map((langItem) => (
                      <button
                        key={langItem.code}
                        onClick={() => handleLanguageChange(langItem.code)}
                        className={`w-full px-3.5 py-2 text-left text-xs font-bold flex items-center justify-between transition-colors ${
                          language === langItem.code 
                            ? 'bg-emerald-50 text-emerald-800' 
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-base">{langItem.flag}</span>
                          <span>{langItem.nativeName}</span>
                        </span>
                        {language === langItem.code && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Voiceover Studio Button (Mobile) */}
              <button
                id="voiceover-studio-toggle-mobile"
                onClick={() => {
                  setIsVoiceoverStudioOpen(true);
                  sound.playClick();
                }}
                className="p-2 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 flex items-center gap-1 text-xs font-bold shadow-xs hover:bg-amber-100 transition-all relative"
                title={t('voiceoverStudio')}
              >
                <Mic className="w-3.5 h-3.5 text-rose-500" />
                {voiceoverCount > 0 && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-1 right-1" />
                )}
              </button>

              {/* Explorer Field Journal Button (Mobile) */}
              <button
                id="explorer-journal-toggle-mobile"
                onClick={() => {
                  setIsJournalOpen(true);
                  sound.playClick();
                }}
                className="p-2 rounded-xl border border-teal-300 bg-teal-50 text-teal-900 flex items-center gap-1 text-xs font-bold shadow-xs hover:bg-teal-100 transition-all relative"
                title={t('explorerJournal')}
              >
                <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                {user && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-1 right-1" />
                )}
                {favorites.length > 0 && !user && (
                  <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-1 right-1" />
                )}
              </button>

              {/* Explorer Badges Button (Mobile) */}
              <button
                id="badges-profile-toggle-mobile"
                onClick={() => {
                  setIsProfileOpen(true);
                  sound.playClick();
                }}
                className="p-2 rounded-xl border border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-950 flex items-center gap-1 text-xs font-bold shadow-xs hover:bg-amber-100 transition-all relative"
                title={language === 'az' ? 'Profil və Nişanlar' : language === 'tr' ? 'Profil ve Rozetler' : language === 'ru' ? 'Профиль и значки' : 'Profile & Badges'}
              >
                <span className="text-xs select-none">{explorerAvatar}</span>
                <Award className="w-3.5 h-3.5 text-amber-600" />
                {unlockedBadgesCount > 0 && (
                  <span className="px-1 py-0.2 rounded-full bg-amber-500 text-white text-[9px] font-black">
                    {unlockedBadgesCount}
                  </span>
                )}
              </button>

              {/* Daily Wonder Button (Mobile) */}
              {onOpenDailyFact && (
                <button
                  id="daily-fact-toggle-mobile"
                  onClick={onOpenDailyFact}
                  className="p-2 rounded-xl border border-amber-300 bg-gradient-to-r from-amber-50 to-emerald-50 text-amber-900 flex items-center gap-1 text-xs font-bold shadow-xs hover:from-amber-100 hover:to-emerald-100 transition-all relative"
                  title={t('dailyWonderButton')}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                </button>
              )}

              {/* Sound Toggle Button (Mobile view) */}
              <button
                id="sound-toggle-mobile"
                onClick={() => {
                  onToggleMute();
                  sound.playClick();
                }}
                className={`p-2.5 rounded-xl border flex items-center gap-1.5 text-xs font-semibold transition-all ${
                  isMuted 
                    ? 'bg-slate-100 border-slate-200 text-slate-500' 
                    : 'bg-amber-50 border-amber-200 text-amber-800 shadow-sm'
                }`}
                title={isMuted ? 'Unmute sounds' : 'Mute sounds'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
              </button>
            </div>
          </div>

          {/* Primary Section Tabs and Language Picker (Desktop) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 w-full lg:w-auto">
            <nav className="flex items-center gap-1.5 p-1 bg-amber-50/80 rounded-2xl border border-amber-200/60 overflow-x-auto justify-center">
              <button
                id="nav-section-world"
                onClick={() => {
                  onSelectSection('world');
                  sound.playClick();
                  sound.speak(t('sectionWorld'), language);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                  activeSection === 'world'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20 scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                }`}
              >
                <Globe className="w-4 h-4 shrink-0" />
                <span>{t('sectionWorld')}</span>
              </button>

              <button
                id="nav-section-shapes"
                onClick={() => {
                  onSelectSection('shapes');
                  sound.playClick();
                  sound.speak(t('sectionShapes'), language);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                  activeSection === 'shapes'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/20 scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                }`}
              >
                <Shapes className="w-4 h-4 shrink-0" />
                <span>{t('sectionShapes')}</span>
              </button>

              <button
                id="nav-section-sensations"
                onClick={() => {
                  onSelectSection('sensations');
                  sound.playClick();
                  sound.speak(t('sectionSensations'), language);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                  activeSection === 'sensations'
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/20 scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                }`}
              >
                <Utensils className="w-4 h-4 shrink-0" />
                <span>{t('sectionSensations')}</span>
              </button>

              <button
                id="nav-section-puzzle"
                onClick={() => {
                  onSelectSection('puzzle');
                  sound.playClick();
                  sound.speak(t('sectionPuzzle'), language);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                  activeSection === 'puzzle'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20 scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                }`}
              >
                <Puzzle className="w-4 h-4 shrink-0" />
                <span>{t('sectionPuzzle')}</span>
              </button>

              <button
                id="nav-section-numbers-alphabet"
                onClick={() => {
                  onSelectSection('numbers-alphabet');
                  sound.playClick();
                  sound.speak(t('sectionNumbersAlphabet'), language);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                  activeSection === 'numbers-alphabet'
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md shadow-emerald-500/20 scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                }`}
              >
                <BookA className="w-4 h-4 shrink-0" />
                <span>{t('sectionNumbersAlphabet')}</span>
              </button>

              <button
                id="nav-section-quiz"
                onClick={() => {
                  onSelectSection('quiz');
                  sound.playClick();
                  sound.speak(t('sectionQuiz'), language);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                  activeSection === 'quiz'
                    ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white shadow-md shadow-orange-500/20 scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                }`}
              >
                <Trophy className="w-4 h-4 shrink-0 text-amber-300" />
                <span>{t('sectionQuiz')}</span>
              </button>
            </nav>

            {/* Desktop Language Selector Pills */}
            <div className="hidden lg:flex items-center bg-white p-1 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-1 px-1.5 text-slate-400">
                <Languages className="w-3.5 h-3.5" />
              </div>
              {LANGUAGES.map((langItem) => {
                const isActive = language === langItem.code;
                return (
                  <button
                    key={langItem.code}
                    id={`lang-btn-${langItem.code}`}
                    onClick={() => handleLanguageChange(langItem.code)}
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-sm scale-105'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                    title={`${langItem.name} (${langItem.nativeName})`}
                  >
                    <span className="text-sm">{langItem.flag}</span>
                    <span className="uppercase tracking-wider font-extrabold text-[11px]">{langItem.code}</span>
                  </button>
                );
              })}
            </div>

            {/* Desktop Audio Studio & Journal Controls */}
            <div className="hidden lg:flex items-center gap-1.5 pl-1 border-l border-amber-200">
              {/* Daily Wonder Button (Desktop) */}
              {onOpenDailyFact && (
                <button
                  id="open-daily-fact-desktop"
                  onClick={onOpenDailyFact}
                  className="px-2.5 py-1.5 rounded-xl border border-amber-300 bg-gradient-to-r from-amber-50 via-emerald-50 to-teal-50 text-slate-800 flex items-center gap-1.5 text-xs font-bold shadow-xs hover:from-amber-100 hover:to-teal-100 transition-all group"
                  title={t('dailyFactSubtitle')}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                  <span className="font-extrabold">{t('dailyWonderButton')}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                </button>
              )}

              {/* Voiceover Studio Button (Desktop) */}
              <button
                id="open-voiceover-studio-desktop"
                onClick={() => {
                  setIsVoiceoverStudioOpen(true);
                  sound.playClick();
                }}
                className="px-2.5 py-1.5 rounded-xl border border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 flex items-center gap-1.5 text-xs font-bold shadow-xs hover:from-amber-100 hover:to-orange-100 transition-all group"
                title={t('voiceoverStudio')}
              >
                <Mic className="w-3.5 h-3.5 text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="font-extrabold">{t('myVoiceovers')}</span>
                {voiceoverCount > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-emerald-600 text-white text-[10px] font-black shadow-2xs">
                    {voiceoverCount}
                  </span>
                )}
              </button>

              {/* Explorer Field Journal Button (Desktop) */}
              <button
                id="open-explorer-journal-desktop"
                onClick={() => {
                  setIsJournalOpen(true);
                  sound.playClick();
                }}
                className="px-2.5 py-1.5 rounded-xl border border-teal-300 bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-900 flex items-center gap-1.5 text-xs font-bold shadow-xs hover:from-teal-100 hover:to-emerald-100 transition-all group"
                title={t('explorerJournal')}
              >
                <BookOpen className="w-3.5 h-3.5 text-teal-600 group-hover:scale-110 transition-transform" />
                <span className="font-extrabold">{t('explorerJournal')}</span>
                {favorites.length > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-teal-600 text-white text-[10px] font-black shadow-2xs">
                    {favorites.length}
                  </span>
                )}
                {user && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-2xs" />
                )}
              </button>

              {/* Explorer Profile & Digital Badges Button (Desktop) */}
              <button
                id="open-profile-badges-desktop"
                onClick={() => {
                  setIsProfileOpen(true);
                  sound.playClick();
                }}
                className="px-2.5 py-1.5 rounded-xl border border-amber-300 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 text-amber-950 flex items-center gap-1.5 text-xs font-bold shadow-xs hover:from-amber-100 hover:to-orange-100 transition-all group"
                title={language === 'az' ? 'Profil və Rəqəmsal Nişanlar' : language === 'tr' ? 'Profil ve Başarı Rozetleri' : language === 'ru' ? 'Профиль и значки' : 'Profile & Digital Badges'}
              >
                <span className="text-sm select-none">{explorerAvatar}</span>
                <span className="font-extrabold max-w-[85px] truncate">
                  {explorerName || (language === 'az' ? 'Kəşfiyyatçı' : language === 'tr' ? 'Kaşif' : language === 'ru' ? 'Исследователь' : 'Explorer')}
                </span>
                <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-white text-[10px] font-black shadow-2xs flex items-center gap-0.5">
                  <Award className="w-3 h-3 inline" />
                  {unlockedBadgesCount}
                </span>
              </button>

              <button
                id="sound-toggle-desktop"
                onClick={() => {
                  onToggleMute();
                  sound.playClick();
                }}
                className={`p-2 rounded-xl transition-all ${
                  isMuted 
                    ? 'text-slate-400 hover:bg-slate-100' 
                    : 'text-emerald-700 bg-emerald-100/70 hover:bg-emerald-200/80 shadow-xs'
                }`}
                title={isMuted ? t('soundMuted') : t('soundActive')}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Sub-section Navigation Bar */}
        <div className="mt-3 pt-2 border-t border-amber-100/80 flex items-center justify-center gap-2 overflow-x-auto">
          {activeSection === 'world' && (
            <>
              <button
                id="subnav-animals"
                onClick={() => {
                  onSelectWorldSub('animals');
                  sound.playClick();
                  sound.speak(t('subnavAnimals'), language);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  worldSub === 'animals'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>🦁</span>
                <span>{t('subnavAnimals')}</span>
              </button>

              <button
                id="subnav-nature"
                onClick={() => {
                  onSelectWorldSub('nature');
                  sound.playClick();
                  sound.speak(t('subnavNature'), language);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  worldSub === 'nature'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>🌲</span>
                <span>{t('subnavNature')}</span>
              </button>

              <button
                id="subnav-universe"
                onClick={() => {
                  onSelectWorldSub('universe');
                  sound.playClick();
                  sound.speak(t('subnavUniverse'), language);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  worldSub === 'universe'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>✨</span>
                <span>{t('subnavUniverse')}</span>
              </button>
            </>
          )}

          {activeSection === 'shapes' && (
            <>
              <button
                id="subnav-shapes-plane"
                onClick={() => {
                  onSelectShapesSub('plane');
                  sound.playClick();
                  sound.speak(t('subnavPlane'), language);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  shapesSub === 'plane'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>📐</span>
                <span>{t('subnavPlane')}</span>
              </button>

              <button
                id="subnav-shapes-solid"
                onClick={() => {
                  onSelectShapesSub('solid');
                  sound.playClick();
                  sound.speak(t('subnavSolid'), language);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  shapesSub === 'solid'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>🧊</span>
                <span>{t('subnavSolid')}</span>
              </button>

              <button
                id="subnav-shapes-quiz"
                onClick={() => {
                  onSelectShapesSub('quiz');
                  sound.playClick();
                  sound.speak(t('subnavShapesQuiz'), language);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  shapesSub === 'quiz'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>🎮</span>
                <span>{t('subnavShapesQuiz')}</span>
              </button>
            </>
          )}

          {activeSection === 'sensations' && (
            <>
              <button
                id="subnav-sensations-explorer"
                onClick={() => {
                  onSelectSensationsSub('explorer');
                  sound.playClick();
                  sound.speak(t('subnavTasteExplorer'), language);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  sensationsSub === 'explorer'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>👅</span>
                <span>{t('subnavTasteExplorer')}</span>
              </button>

              <button
                id="subnav-sensations-sorter"
                onClick={() => {
                  onSelectSensationsSub('sorter');
                  sound.playClick();
                  sound.speak(t('subnavSensationsSorter'), language);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  sensationsSub === 'sorter'
                    ? 'bg-pink-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>🥣</span>
                <span>{t('subnavSensationsSorter')}</span>
              </button>
            </>
          )}

          {activeSection === 'numbers-alphabet' && onSelectNumbersSub && (
            <>
              <button
                id="subnav-numbers-alphabet"
                onClick={() => {
                  onSelectNumbersSub('alphabet');
                  sound.playClick();
                  sound.speak(t('subnavAlphabet'), language);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  numbersSub === 'alphabet'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>🔤</span>
                <span>{t('subnavAlphabet')}</span>
              </button>

              <button
                id="subnav-numbers-numbers"
                onClick={() => {
                  onSelectNumbersSub('numbers');
                  sound.playClick();
                  sound.speak(t('subnavNumbers'), language);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  numbersSub === 'numbers'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>🔢</span>
                <span>{t('subnavNumbers')}</span>
              </button>

              <button
                id="subnav-numbers-quiz"
                onClick={() => {
                  onSelectNumbersSub('quiz');
                  sound.playClick();
                  sound.speak(t('subnavNumbersAlphabetQuiz'), language);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  numbersSub === 'quiz'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>🏆</span>
                <span>{t('subnavNumbersAlphabetQuiz')}</span>
              </button>
            </>
          )}

          {activeSection === 'quiz' && (
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 bg-amber-50 px-3.5 py-1 rounded-xl border border-amber-200/70 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>
                {language === 'az'
                  ? 'Bütün bölmələrdən interaktiv suallar və bilik sınağı'
                  : language === 'tr'
                  ? 'Tüm bölümlerden interaktif sorular ve eğlenceli yarışma'
                  : language === 'ru'
                  ? 'Интерактивные вопросы и проверка знаний по всем темам'
                  : 'Interactive knowledge challenges & questions across all sections'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Voiceover Studio Modal */}
      {isVoiceoverStudioOpen && (
        <VoiceoverStudioModal
          isOpen={isVoiceoverStudioOpen}
          onClose={() => setIsVoiceoverStudioOpen(false)}
        />
      )}

      {/* Explorer Field Journal & Cloud Sync Modal */}
      {isJournalOpen && (
        <ExplorerJournalModal
          isOpen={isJournalOpen}
          onClose={() => setIsJournalOpen(false)}
        />
      )}
    </header>
  );
};
