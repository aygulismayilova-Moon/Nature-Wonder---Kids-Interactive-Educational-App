import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ALPHABET_DATA } from '../data/alphabetData';
import { NUMBERS_DATA } from '../data/numbersData';
import { sound } from '../utils/soundEngine';
import { Volume2, Trophy, Star, Sparkles, RotateCcw, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

type QuizMode = 'letter' | 'count';

export const NumbersAlphabetQuiz: React.FC = () => {
  const { language, t } = useLanguage();
  const letters = useMemo(() => ALPHABET_DATA[language] || ALPHABET_DATA.en, [language]);
  const numbers = useMemo(() => NUMBERS_DATA[language] || NUMBERS_DATA.en, [language]);

  const [mode, setMode] = useState<QuizMode>('letter');
  const [score, setScore] = useState<number>(0);
  const [questionIdx, setQuestionIdx] = useState<number>(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | number | null>(null);

  // Current Letter Question Setup
  const currentLetterTarget = letters[questionIdx % letters.length];
  const letterOptions = useMemo(() => {
    if (!currentLetterTarget) return [];
    const others = letters.filter(l => l.id !== currentLetterTarget.id);
    // Pick 3 random distractors
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
    const combined = [currentLetterTarget, ...shuffledOthers].sort(() => 0.5 - Math.random());
    return combined;
  }, [currentLetterTarget, letters]);

  // Current Count Question Setup
  const countTargetNumber = useMemo(() => {
    // Pick between 2 and 9 for best visual counting
    const validNums = numbers.filter(n => n.value >= 2 && n.value <= 9);
    return validNums[questionIdx % validNums.length] || validNums[0];
  }, [questionIdx, numbers]);

  const countOptions = useMemo(() => {
    if (!countTargetNumber) return [];
    const val = countTargetNumber.value;
    const candidates = [val, val + 1, Math.max(1, val - 1), val + 2];
    const unique = Array.from(new Set(candidates)).slice(0, 4);
    return unique.sort(() => 0.5 - Math.random());
  }, [countTargetNumber]);

  useEffect(() => {
    setFeedback(null);
    setSelectedOption(null);
  }, [questionIdx, mode]);

  const handleSelectLetterAnswer = (chosenLetter: string) => {
    if (feedback === 'correct') return;
    setSelectedOption(chosenLetter);

    if (chosenLetter === currentLetterTarget.upper) {
      sound.playReward();
      setFeedback('correct');
      setScore(prev => prev + 10);
      sound.speak(`${t('quizCorrect')} ${currentLetterTarget.upper} - ${currentLetterTarget.word}`, language);
    } else {
      sound.playClick();
      setFeedback('incorrect');
      sound.speak(t('quizIncorrect'), language);
    }
  };

  const handleSelectCountAnswer = (chosenCount: number) => {
    if (feedback === 'correct') return;
    setSelectedOption(chosenCount);

    if (chosenCount === countTargetNumber.value) {
      sound.playReward();
      setFeedback('correct');
      setScore(prev => prev + 10);
      sound.speak(`${t('quizCorrect')} ${countTargetNumber.value} - ${countTargetNumber.word}`, language);
    } else {
      sound.playClick();
      setFeedback('incorrect');
      sound.speak(t('quizIncorrect'), language);
    }
  };

  const handleNextQuestion = () => {
    sound.playClick();
    setQuestionIdx(prev => prev + 1);
  };

  const handleReset = () => {
    sound.playClick();
    setScore(0);
    setQuestionIdx(0);
    setFeedback(null);
    setSelectedOption(null);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 p-6 sm:p-8 text-white shadow-lg">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('subnavNumbersAlphabetQuiz')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight">
              {t('numberQuizTitle')}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-purple-100 font-medium">
              {t('numberQuizSubtitle')}
            </p>
          </div>

          {/* Star Score Counter */}
          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-xs px-5 py-3 rounded-2xl shrink-0 self-start sm:self-auto border border-white/30">
            <Trophy className="w-6 h-6 text-amber-300" />
            <div>
              <span className="text-xs font-bold text-purple-100 block leading-none">{t('score')}</span>
              <span className="text-2xl font-black text-amber-300 font-display leading-tight">{score}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl w-fit">
        <button
          onClick={() => {
            sound.playClick();
            setMode('letter');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
            mode === 'letter'
              ? 'bg-white text-purple-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          🔤 {t('subnavAlphabet')}
        </button>
        <button
          onClick={() => {
            sound.playClick();
            setMode('count');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
            mode === 'count'
              ? 'bg-white text-purple-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          🔢 {t('subnavNumbers')}
        </button>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 max-w-3xl mx-auto">
        
        {/* Progress & Question Info */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 border-b border-slate-100 pb-3">
          <span>
            {t('questionNumber')} #{questionIdx + 1}
          </span>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1 hover:text-rose-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t('resetCounting')}</span>
          </button>
        </div>

        {/* MODE: LETTER CHALLENGE */}
        {mode === 'letter' && currentLetterTarget && (
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 font-display">
                {t('quizFindLetter')}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {currentLetterTarget.sentence}
              </p>
            </div>

            {/* Clue Visual (Image + Word) */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-3xl overflow-hidden border-2 border-purple-200 shadow-md">
              <img
                src={currentLetterTarget.image}
                alt={currentLetterTarget.word}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 right-2 text-3xl p-1 bg-white/90 rounded-xl shadow-xs">
                {currentLetterTarget.emoji}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl sm:text-3xl font-black text-slate-800 font-display">
                {currentLetterTarget.word}
              </span>
              <button
                onClick={() => {
                  sound.playClick();
                  sound.speak(currentLetterTarget.word, language);
                }}
                className="p-2 rounded-xl bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {letterOptions.map((opt) => {
                const isSelected = selectedOption === opt.upper;
                const isCorrect = opt.upper === currentLetterTarget.upper;

                let btnStyle = 'bg-slate-50 hover:bg-purple-50 text-slate-800 border-2 border-slate-200 hover:border-purple-300';
                if (isSelected) {
                  if (feedback === 'correct') {
                    btnStyle = 'bg-emerald-500 text-white border-2 border-emerald-600 shadow-md';
                  } else if (feedback === 'incorrect') {
                    btnStyle = 'bg-rose-500 text-white border-2 border-rose-600';
                  }
                } else if (feedback === 'correct' && isCorrect) {
                  btnStyle = 'bg-emerald-500 text-white border-2 border-emerald-600';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectLetterAnswer(opt.upper)}
                    className={`p-5 rounded-2xl text-3xl font-black font-display transition-all ${btnStyle}`}
                  >
                    {opt.upper}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* MODE: COUNT CHALLENGE */}
        {mode === 'count' && countTargetNumber && (
          <div className="space-y-6 text-center">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 font-display">
                {t('quizCountItems')}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {countTargetNumber.itemWord}
              </p>
            </div>

            {/* Visual Cluster of Items to Count */}
            <div className="p-6 rounded-3xl bg-amber-50/50 border-2 border-dashed border-amber-200 min-h-[180px] flex flex-wrap items-center justify-center gap-4">
              {Array.from({ length: countTargetNumber.value }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-4xl sm:text-5xl select-none"
                >
                  {countTargetNumber.emoji}
                </motion.div>
              ))}
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {countOptions.map((optVal) => {
                const isSelected = selectedOption === optVal;
                const isCorrect = optVal === countTargetNumber.value;

                let btnStyle = 'bg-slate-50 hover:bg-amber-50 text-slate-800 border-2 border-slate-200 hover:border-amber-300';
                if (isSelected) {
                  if (feedback === 'correct') {
                    btnStyle = 'bg-emerald-500 text-white border-2 border-emerald-600 shadow-md';
                  } else if (feedback === 'incorrect') {
                    btnStyle = 'bg-rose-500 text-white border-2 border-rose-600';
                  }
                } else if (feedback === 'correct' && isCorrect) {
                  btnStyle = 'bg-emerald-500 text-white border-2 border-emerald-600';
                }

                return (
                  <button
                    key={optVal}
                    onClick={() => handleSelectCountAnswer(optVal)}
                    className={`p-5 rounded-2xl text-3xl font-black font-display transition-all ${btnStyle}`}
                  >
                    {optVal}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Feedback and Next Action Bar */}
        {feedback && (
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {feedback === 'correct' ? (
                <>
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-sm font-bold text-emerald-700">{t('quizCorrect')}</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span className="text-sm font-bold text-rose-700">{t('quizIncorrect')}</span>
                </>
              )}
            </div>

            {feedback === 'correct' && (
              <button
                onClick={handleNextQuestion}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-md transition-all active:scale-95"
              >
                {t('nextQuestion')} →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
