import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ALPHABET_DATA } from '../data/alphabetData';
import { AlphabetLetter } from '../types';
import { LetterTracingCanvas } from './LetterTracingCanvas';
import { sound } from '../utils/soundEngine';
import { Volume2, ChevronLeft, ChevronRight, Sparkles, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AlphabetExplorer: React.FC = () => {
  const { language, t } = useLanguage();
  const letters = useMemo(() => ALPHABET_DATA[language] || ALPHABET_DATA.en, [language]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Safe bounds check
  const activeLetter: AlphabetLetter = letters[selectedIndex] || letters[0];

  const handleSelectLetter = (index: number) => {
    setSelectedIndex(index);
    sound.playClick();
    const target = letters[index];
    if (target) {
      const letterText =
        language === 'az'
          ? `${target.upper} hərfi. ${target.word}`
          : language === 'tr'
          ? `${target.upper} harfi. ${target.word}`
          : language === 'ru'
          ? `Буква ${target.upper}. ${target.word}`
          : `${target.upper}. ${target.word}`;
      sound.speak(letterText, language);
    }
  };

  const handlePrev = () => {
    const nextIdx = selectedIndex > 0 ? selectedIndex - 1 : letters.length - 1;
    handleSelectLetter(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = selectedIndex < letters.length - 1 ? selectedIndex + 1 : 0;
    handleSelectLetter(nextIdx);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-6 sm:p-8 text-white shadow-lg">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('subnavAlphabet')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight">
            {t('alphabetTitle')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-emerald-50 font-medium">
            {t('alphabetSubtitle')}
          </p>
        </div>

        {/* Decorative background icons */}
        <div className="absolute right-4 -bottom-6 text-8xl sm:text-9xl opacity-20 pointer-events-none select-none font-black font-display">
          Aa
        </div>
      </div>

      {/* Main Interactive Spotlight Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Big Letter Card & Word Presentation */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${language}-${activeLetter.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Big Letter Presentation */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/50 border border-slate-200">
                <div className="flex items-center gap-5">
                  <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br ${activeLetter.color} flex items-center justify-center text-white shadow-lg shadow-emerald-500/20`}>
                    <span className="text-5xl sm:text-6xl font-black font-display tracking-tight">
                      {activeLetter.upper}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-800 font-display">
                        {activeLetter.upper} {activeLetter.lower}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        {activeLetter.soundHint}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {t('uppercaseLowercase')}
                    </p>
                  </div>
                </div>

                {/* Pronounce Letter Button */}
                <button
                  id={`speak-letter-${activeLetter.id}`}
                  onClick={() => {
                    sound.playClick();
                    const letterAnnouncement =
                      language === 'az'
                        ? `${activeLetter.upper} hərfi`
                        : language === 'tr'
                        ? `${activeLetter.upper} harfi`
                        : language === 'ru'
                        ? `Буква ${activeLetter.upper}`
                        : `Letter ${activeLetter.upper}`;
                    sound.speak(letterAnnouncement, language);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all active:scale-95"
                >
                  <Volume2 className="w-5 h-5" />
                  <span>{t('listenLetter')}</span>
                </button>
              </div>

              {/* Example Word with Picture */}
              <div className="flex flex-col sm:flex-row items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-200 shadow-sm shrink-0">
                  <img
                    src={activeLetter.image}
                    alt={activeLetter.word}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1.5 right-1.5 text-2xl p-1 bg-white/90 backdrop-blur-xs rounded-xl shadow-xs">
                    {activeLetter.emoji}
                  </span>
                </div>

                <div className="space-y-2 flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-black text-slate-800 font-display">
                        {activeLetter.word}
                      </h3>
                      {activeLetter.wordTranslation && (
                        <p className="text-xs text-slate-500 font-medium">
                          {activeLetter.wordTranslation}
                        </p>
                      )}
                    </div>

                    <button
                      id={`speak-word-${activeLetter.id}`}
                      onClick={() => {
                        sound.playClick();
                        sound.speak(activeLetter.word, language);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-sm transition-all"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>{t('listenWord')}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      sound.playClick();
                      sound.speak(activeLetter.sentence, language);
                    }}
                    className="w-full p-3 bg-white hover:bg-emerald-50/70 rounded-xl border border-slate-200/80 flex items-start gap-2 text-xs text-slate-700 font-semibold transition-colors text-left group"
                    title={t('listenWord')}
                  >
                    <BookOpen className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="flex-1">{activeLetter.sentence}</span>
                    <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0 mt-0.5" />
                  </button>
                </div>
              </div>

              {/* Navigation Controls: Previous / Next */}
              <div className="flex items-center justify-between pt-2">
                <button
                  id="prev-letter-btn"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{letters[(selectedIndex - 1 + letters.length) % letters.length]?.upper}</span>
                </button>

                <span className="text-xs font-extrabold text-slate-500">
                  {selectedIndex + 1} / {letters.length}
                </span>

                <button
                  id="next-letter-btn"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  <span>{letters[(selectedIndex + 1) % letters.length]?.upper}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Interactive Letter Tracing Canvas */}
        <div className="lg:col-span-5 space-y-4">
          <LetterTracingCanvas charToTrace={activeLetter.upper} />
        </div>
      </div>

      {/* Full Alphabet Grid Picker */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-slate-700 uppercase tracking-wider">
            {t('allLetters')} ({letters.length})
          </h3>
          <span className="text-xs text-slate-400 font-medium">
            {language.toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-2 sm:gap-2.5">
          {letters.map((item, idx) => {
            const isCurrent = idx === selectedIndex;
            return (
              <button
                key={item.id}
                id={`letter-picker-${item.id}`}
                onClick={() => handleSelectLetter(idx)}
                className={`p-2.5 sm:p-3 rounded-2xl flex flex-col items-center justify-center transition-all ${
                  isCurrent
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105 ring-2 ring-emerald-400 ring-offset-2'
                    : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 border border-slate-200 hover:border-emerald-300'
                }`}
              >
                <span className="text-lg sm:text-xl font-black font-display leading-tight">
                  {item.upper}
                </span>
                <span className="text-[11px] opacity-80 leading-none">
                  {item.lower}
                </span>
                <span className="text-xs mt-1 leading-none">{item.emoji}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
