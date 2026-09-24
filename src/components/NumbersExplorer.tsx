import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NUMBERS_DATA } from '../data/numbersData';
import { NumberItem } from '../types';
import { sound } from '../utils/soundEngine';
import { Volume2, ChevronLeft, ChevronRight, Plus, Minus, RotateCcw, Sparkles, CheckCircle2, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const NumbersExplorer: React.FC = () => {
  const { language, t } = useLanguage();
  const numbers = useMemo(() => NUMBERS_DATA[language] || NUMBERS_DATA.en, [language]);
  const [selectedIndex, setSelectedIndex] = useState<number>(4); // Default to 5
  const [countedSet, setCountedSet] = useState<Set<number>>(new Set());

  const activeNumber: NumberItem = numbers[selectedIndex] || numbers[0];

  // Effective items count to render on the interactive board (capped at 20 for comfortable interaction)
  const itemsToRender = Math.min(activeNumber.value, 20);

  const handleSelectNumber = (idx: number) => {
    setSelectedIndex(idx);
    setCountedSet(new Set());
    sound.playClick();
    const item = numbers[idx];
    if (item) {
      sound.speak(`${item.value}. ${item.word}`, language);
    }
  };

  const handleTapItem = (itemIndex: number) => {
    const nextSet = new Set(countedSet);
    if (!nextSet.has(itemIndex)) {
      nextSet.add(itemIndex);
      setCountedSet(nextSet);
      sound.playReward();

      // Read current counted count aloud
      const currentCount = nextSet.size;
      const matchingNumberObj = numbers.find(n => n.value === currentCount);
      const countWord = matchingNumberObj ? matchingNumberObj.word : String(currentCount);
      sound.speak(countWord, language);
    }
  };

  const handleResetCounting = () => {
    sound.playClick();
    setCountedSet(new Set());
  };

  const handlePrev = () => {
    const nextIdx = selectedIndex > 0 ? selectedIndex - 1 : numbers.length - 1;
    handleSelectNumber(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = selectedIndex < numbers.length - 1 ? selectedIndex + 1 : 0;
    handleSelectNumber(nextIdx);
  };

  const isCompleted = countedSet.size === itemsToRender;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-6 sm:p-8 text-white shadow-lg">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('subnavNumbers')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight">
            {t('numbersTitle')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-amber-50 font-medium">
            {t('numbersSubtitle')}
          </p>
        </div>

        {/* Decorative background numbers */}
        <div className="absolute right-4 -bottom-6 text-8xl sm:text-9xl opacity-20 pointer-events-none select-none font-black font-display">
          123
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Number Spotlight & Details */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${language}-${activeNumber.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Big Digit Badge */}
              <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50/70 border border-amber-200/80 text-center space-y-3">
                <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br ${activeNumber.color} flex items-center justify-center text-white shadow-xl shadow-orange-500/20`}>
                  <span className="text-6xl sm:text-7xl font-black font-display tracking-tight">
                    {activeNumber.value}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-slate-800 font-display">
                    {activeNumber.word}
                  </h3>
                  <p className="text-sm font-bold text-amber-700 mt-0.5">
                    {activeNumber.itemWord}
                  </p>
                </div>

                {/* Speak Number Audio Button */}
                <button
                  id={`speak-number-${activeNumber.id}`}
                  onClick={() => {
                    sound.playClick();
                    sound.speak(`${activeNumber.value}. ${activeNumber.word}. ${activeNumber.itemWord}`, language);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm shadow-md transition-all active:scale-95"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{activeNumber.word}</span>
                </button>
              </div>

              {/* Math Tip & Educational Fact */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-900 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t('numberFunFact')}</span>
                </div>
                <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                  {activeNumber.mathTip}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{numbers[(selectedIndex - 1 + numbers.length) % numbers.length]?.value}</span>
                </button>

                <span className="text-xs font-extrabold text-slate-500">
                  {selectedIndex + 1} / {numbers.length}
                </span>

                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  <span>{numbers[(selectedIndex + 1) % numbers.length]?.value}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Interactive Tap-To-Count Playground */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div>
              <h3 className="text-base font-extrabold text-slate-800 font-display flex items-center gap-2">
                <span>{t('tapToCount')}</span>
                <span className="text-xl">{activeNumber.emoji}</span>
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {t('countedCount')}: <strong className="text-emerald-600 font-extrabold text-sm">{countedSet.size}</strong> / {itemsToRender}
              </p>
            </div>

            <button
              onClick={handleResetCounting}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('resetCounting')}</span>
            </button>
          </div>

          {/* Interactive Tap-To-Count Objects Grid */}
          <div className="p-6 rounded-3xl bg-amber-50/40 border-2 border-dashed border-amber-200/80 min-h-[260px] flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {Array.from({ length: itemsToRender }, (_, i) => {
              const isTapped = countedSet.has(i);
              return (
                <button
                  key={i}
                  id={`count-item-${i}`}
                  onClick={() => handleTapItem(i)}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex flex-col items-center justify-center transition-all ${
                    isTapped
                      ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30 scale-105 ring-2 ring-emerald-300 ring-offset-2'
                      : 'bg-white hover:bg-amber-100 border-2 border-amber-200 hover:scale-110 shadow-xs cursor-pointer'
                  }`}
                >
                  <span className="text-2xl sm:text-3xl leading-none select-none">
                    {activeNumber.emoji}
                  </span>
                  <span className={`text-[10px] font-black mt-1 leading-none ${isTapped ? 'text-white' : 'text-slate-500'}`}>
                    {i + 1}
                  </span>
                  {isTapped && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-white text-emerald-600 flex items-center justify-center text-[10px] shadow-xs">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Completion Celebration Message */}
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-emerald-900 font-display">
                    {t('quizCorrect')}
                  </h4>
                  <p className="text-xs text-emerald-700 font-medium">
                    {activeNumber.value} {activeNumber.itemWord}!
                  </p>
                </div>
              </div>

              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors shrink-0"
              >
                {t('nextQuestion')} →
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Numbers Grid Selector */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-slate-700 uppercase tracking-wider">
            {t('subnavNumbers')} (1-100)
          </h3>
          <span className="text-xs text-slate-400 font-medium">
            {numbers.length} {t('itemsSaved')}
          </span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2">
          {numbers.map((item, idx) => {
            const isCurrent = idx === selectedIndex;
            return (
              <button
                key={item.id}
                id={`num-picker-${item.id}`}
                onClick={() => handleSelectNumber(idx)}
                className={`p-2.5 rounded-2xl flex flex-col items-center justify-center transition-all ${
                  isCurrent
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/30 scale-105 ring-2 ring-amber-400 ring-offset-2'
                    : 'bg-slate-50 hover:bg-amber-50 text-slate-700 border border-slate-200 hover:border-amber-300'
                }`}
              >
                <span className="text-xl font-black font-display leading-tight">
                  {item.value}
                </span>
                <span className="text-[10px] font-bold opacity-90 truncate max-w-full">
                  {item.word}
                </span>
                <span className="text-xs mt-0.5">{item.emoji}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
