import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { QuizCategory, QuizQuestion } from '../types';
import { ALL_SECTIONS_QUIZ_QUESTIONS, QUIZ_CATEGORIES } from '../data/quizData';
import { sound } from '../utils/soundEngine';
import { useLanguage } from '../context/LanguageContext';
import { useFirebase } from '../context/FirebaseContext';
import confetti from 'canvas-confetti';
import {
  Volume2,
  Sparkles,
  RotateCw,
  Trophy,
  CheckCircle2,
  XCircle,
  ArrowRight,
  HelpCircle,
  Star,
  Award,
  Flame,
  Lightbulb,
  BookOpen,
  Edit2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useBadges } from '../context/BadgeContext';
import { QuizNameGate } from './QuizNameGate';

interface QuizExplorerProps {
  initialCategory?: QuizCategory;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export function QuizExplorer({ initialCategory = 'all' }: QuizExplorerProps) {
  const { language, t } = useLanguage();
  const { updateGameScore, incrementExploration } = useFirebase();
  const {
    explorerName,
    explorerAvatar,
    checkAndAwardQuizBadges,
    recordCategoryExplored,
    setIsProfileOpen,
    unlockedBadgesCount
  } = useBadges();

  // Name confirmation before playing quiz: "When begin quiz user can be write name first. Then plays game."
  const [isNameConfirmed, setIsNameConfirmed] = useState<boolean>(false);

  // Active Category filter
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory>(initialCategory);

  // Active question deck and current index
  const [deck, setDeck] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Per-question state
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  // Quiz session score & stats
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [answersHistory, setAnswersHistory] = useState<
    {
      question: QuizQuestion;
      chosenId: string;
      isCorrect: boolean;
    }[]
  >([]);

  // Completion state
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);

  // Shuffle & initialize questions
  const initializeQuiz = useCallback((cat: QuizCategory) => {
    let pool = ALL_SECTIONS_QUIZ_QUESTIONS;
    if (cat !== 'all') {
      pool = ALL_SECTIONS_QUIZ_QUESTIONS.filter((q) => q.category === cat);
    }

    // Shuffle pool with Fisher-Yates
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Select up to 10 questions per quiz session and shuffle the options for EACH question
    const selectedDeck = shuffled.slice(0, Math.min(10, shuffled.length)).map((q) => {
      const shuffledOptions = [...q.options];
      for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
      }
      return {
        ...q,
        options: shuffledOptions
      };
    });

    setDeck(selectedDeck);
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setShowHint(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setAnswersHistory([]);
    setIsFinished(false);
    setShowReview(false);
    recordCategoryExplored(cat);
  }, [recordCategoryExplored]);

  // Initialize on mount or category change
  useEffect(() => {
    initializeQuiz(selectedCategory);
  }, [selectedCategory, initializeQuiz]);

  const currentQuestion: QuizQuestion | undefined = deck[currentIndex];

  // Multi-stage confetti celebration explosion
  const triggerConfettiExplosion = useCallback(() => {
    try {
      // Stage 1: Central powerful celebratory blast
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { x: 0.5, y: 0.6 },
        colors: ['#f59e0b', '#10b981', '#6366f1', '#ec4899', '#3b82f6', '#eab308'],
        startVelocity: 45,
        ticks: 250
      });

      // Stage 2: Left celebratory cannon
      setTimeout(() => {
        confetti({
          particleCount: 65,
          angle: 60,
          spread: 60,
          origin: { x: 0.1, y: 0.75 },
          colors: ['#fbbf24', '#34d399', '#a78bfa', '#f43f5e', '#38bdf8'],
          startVelocity: 55,
          ticks: 250
        });
      }, 180);

      // Stage 3: Right celebratory cannon
      setTimeout(() => {
        confetti({
          particleCount: 65,
          angle: 120,
          spread: 60,
          origin: { x: 0.9, y: 0.75 },
          colors: ['#fbbf24', '#34d399', '#a78bfa', '#f43f5e', '#38bdf8'],
          startVelocity: 55,
          ticks: 250
        });
      }, 360);

      // Stage 4: Cascading star & circle shower from top
      setTimeout(() => {
        confetti({
          particleCount: 75,
          spread: 100,
          origin: { x: 0.5, y: 0.35 },
          colors: ['#ffd700', '#ff69b4', '#00e5ff', '#76ff03', '#ff9100'],
          startVelocity: 35,
          shapes: ['star', 'circle'],
          ticks: 300,
          scalar: 1.2
        });
      }, 650);

      // Stage 5: Grand finale dual fireworks
      setTimeout(() => {
        confetti({
          particleCount: 55,
          angle: 75,
          spread: 80,
          origin: { x: 0.25, y: 0.6 },
          colors: ['#f59e0b', '#10b981', '#ec4899'],
          startVelocity: 45
        });
        confetti({
          particleCount: 55,
          angle: 105,
          spread: 80,
          origin: { x: 0.75, y: 0.6 },
          colors: ['#3b82f6', '#8b5cf6', '#eab308'],
          startVelocity: 45
        });
      }, 950);
    } catch {
      // Fallback silently if canvas unavailable
    }
  }, []);

  // Read current question out loud using speech engine
  const handleSpeakQuestion = useCallback(() => {
    if (!currentQuestion) return;
    const textToSpeak = currentQuestion.question[language] || currentQuestion.question.en;
    sound.speak(textToSpeak, language);
  }, [currentQuestion, language]);

  // Handle option selection
  const handleSelectOption = (optionId: string) => {
    if (isAnswerSubmitted || !currentQuestion) return;

    setSelectedOptionId(optionId);
    setIsAnswerSubmitted(true);

    const isCorrect = optionId === currentQuestion.correctOptionId;

    if (isCorrect) {
      sound.playSuccess();
      const pointsGained = 20 + streak * 5;
      setScore((s) => s + pointsGained);
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      if (nextStreak > maxStreak) {
        setMaxStreak(nextStreak);
      }
    } else {
      sound.playError();
      setStreak(0);
    }

    setAnswersHistory((prev) => [
      ...prev,
      {
        question: currentQuestion,
        chosenId: optionId,
        isCorrect
      }
    ]);
  };

  // Next Question or Complete Quiz
  const handleNext = () => {
    if (currentIndex + 1 < deck.length) {
      setCurrentIndex((i) => i + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
      setShowHint(false);
      sound.playClick();
    } else {
      // Quiz completed!
      setIsFinished(true);
      triggerConfettiExplosion();
      sound.playReward();

      // Check and award digital achievement badges
      checkAndAwardQuizBadges({
        category: selectedCategory,
        score,
        maxStreak,
        totalQuestions: deck.length
      });

      // Record in cloud profile if available
      try {
        updateGameScore(score);
        incrementExploration();
      } catch {
        // Fallback silently
      }

      // Friendly congratulatory voice
      setTimeout(() => {
        const congratsText =
          language === 'az'
            ? 'Afərin! Bütün suallara cavab verdin!'
            : language === 'tr'
            ? 'Harika! Bütün soruları tamamladın!'
            : language === 'ru'
            ? 'Молодец! Ты завершил викторину!'
            : 'Fantastic job! You completed the quiz!';
        sound.speak(congratsText, language);
      }, 700);
    }
  };

  // Category breakdown calculation for completion screen
  const breakdownStats = useMemo(() => {
    const stats: Record<string, { total: number; correct: number; emoji: string }> = {};
    for (const item of answersHistory) {
      const cat = item.question.category;
      if (!stats[cat]) {
        const catObj = QUIZ_CATEGORIES.find((c) => c.id === cat);
        stats[cat] = {
          total: 0,
          correct: 0,
          emoji: catObj ? catObj.emoji : '🌟'
        };
      }
      stats[cat].total++;
      if (item.isCorrect) stats[cat].correct++;
    }
    return stats;
  }, [answersHistory]);

  const correctCount = answersHistory.filter((a) => a.isCorrect).length;
  const totalQuestions = deck.length;
  const accuracyPercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Localized Category Name helper
  const getCategoryName = (catId: QuizCategory) => {
    const cat = QUIZ_CATEGORIES.find((c) => c.id === catId);
    if (!cat) return '';
    return cat.label[language] || cat.label.en;
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight">
                {language === 'az'
                  ? 'Ümumi Viktorina Kəşfiyyatı'
                  : language === 'tr'
                  ? 'Büyük Bilgi Yarışması'
                  : language === 'ru'
                  ? 'Большая Интерактивная Викторина'
                  : 'Interactive Grand Quiz'}
              </h2>
            </div>
            <p className="text-amber-100 text-xs sm:text-sm font-medium">
              {language === 'az'
                ? 'Bütün bölmələrdən — heyvanlar, təbiət, kosmos, fiqurlar, dadlar və hərflərdən suallar!'
                : language === 'tr'
                ? 'Tüm bölümlerden — hayvanlar, doğa, uzay, şekiller, tatlar ve sayılardan sorular!'
                : language === 'ru'
                ? 'Вопросы из всех разделов: животные, природа, космос, фигуры, вкусы и числа!'
                : 'Questions spanning all sections: animals, nature, space, shapes, sensations & numbers!'}
            </p>
          </div>

          {/* Quick Score & Streak Display + Explorer Name & Badges Trigger */}
          <div className="flex flex-wrap items-center gap-2.5 self-stretch sm:self-auto justify-end">
            <button
              onClick={() => {
                setIsProfileOpen(true);
                sound.playClick();
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-xs font-black text-white shadow-xs transition-colors cursor-pointer"
              title="Explorer Badges & Profile"
            >
              <span className="text-base select-none">{explorerAvatar}</span>
              <span className="max-w-[100px] truncate">{explorerName || (language === 'az' ? 'Kəşfiyyatçı' : language === 'tr' ? 'Kaşif' : language === 'ru' ? 'Исследователь' : 'Explorer')}</span>
              <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-amber-950 text-[10px] font-black flex items-center gap-0.5">
                <Award className="w-3 h-3" />
                {unlockedBadgesCount}
              </span>
            </button>

            <button
              onClick={() => {
                setIsNameConfirmed(false);
                sound.playClick();
              }}
              className="p-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
              title="Change Explorer Name"
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold bg-black/20 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/20">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span>{score}</span>
              </div>
              <span className="text-white/40" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Flame className={`w-4 h-4 ${streak > 1 ? 'text-amber-300 fill-amber-300 animate-bounce' : 'text-slate-300'}`} />
                <span>{streak}🔥</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs (Interactive buttons) */}
      <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-x-auto">
        {QUIZ_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`quiz-cat-${cat.id}`}
              onClick={() => {
                if (selectedCategory !== cat.id) {
                  setSelectedCategory(cat.id as QuizCategory);
                  sound.playClick();
                }
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/20 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label[language] || cat.label.en}</span>
            </button>
          );
        })}
      </div>

      {/* Active Quiz Area or Completion View or Name Gate */}
      {!isNameConfirmed ? (
        <QuizNameGate
          categoryTitle={getCategoryName(selectedCategory)}
          categoryEmoji={currentQuestion?.emoji || '🌟'}
          onStartQuiz={() => {
            setIsNameConfirmed(true);
            recordCategoryExplored(selectedCategory);
          }}
        />
      ) : !isFinished ? (
        currentQuestion ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            {/* Top Question Meta Row (Zero-pill clean metadata with typographic separators) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <button
                  onClick={() => {
                    setIsProfileOpen(true);
                    sound.playClick();
                  }}
                  className="px-2 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1 text-[11px] font-black transition-colors cursor-pointer"
                  title="Open Badges Dashboard"
                >
                  <span className="select-none">{explorerAvatar}</span>
                  <span className="max-w-[85px] truncate">{explorerName || 'Explorer'}</span>
                </button>
                <span aria-hidden="true">·</span>
                <span className="text-amber-700 font-extrabold flex items-center gap-1">
                  <span>{currentQuestion.emoji}</span>
                  <span>{getCategoryName(currentQuestion.category)}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {language === 'az'
                    ? `Sual ${currentIndex + 1} / ${deck.length}`
                    : language === 'tr'
                    ? `Soru ${currentIndex + 1} / ${deck.length}`
                    : language === 'ru'
                    ? `Вопрос ${currentIndex + 1} из ${deck.length}`
                    : `Question ${currentIndex + 1} of ${deck.length}`}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-600">
                  +{20 + streak * 5} {language === 'az' ? 'xal' : language === 'tr' ? 'puan' : language === 'ru' ? 'баллов' : 'pts'}
                </span>
              </div>

              {/* Action Buttons: Read aloud & Hint */}
              <div className="flex items-center gap-2">
                <button
                  id="quiz-speak-question-btn"
                  onClick={handleSpeakQuestion}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Read question out loud"
                >
                  <Volume2 className="w-4 h-4 text-emerald-600" />
                  <span className="hidden sm:inline">
                    {language === 'az' ? 'Oxu' : language === 'tr' ? 'Seslendir' : language === 'ru' ? 'Озвучить' : 'Listen'}
                  </span>
                </button>

                {currentQuestion.hint && (
                  <button
                    id="quiz-hint-toggle-btn"
                    onClick={() => {
                      setShowHint(!showHint);
                      sound.playClick();
                    }}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      showHint
                        ? 'border-amber-300 bg-amber-50 text-amber-900 shadow-xs'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span className="hidden sm:inline">
                      {language === 'az' ? 'İpucu' : language === 'tr' ? 'İpucu' : language === 'ru' ? 'Подсказка' : 'Hint'}
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Hint Box (if toggled) */}
            <AnimatePresence>
              {showHint && currentQuestion.hint && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-amber-900">
                    <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold block mb-0.5">
                        {language === 'az' ? 'Möcüzəli İpucu:' : language === 'tr' ? 'İpucu:' : language === 'ru' ? 'Подсказка:' : 'Helpful Clue:'}
                      </span>
                      <span>{currentQuestion.hint[language] || currentQuestion.hint.en}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Question Text & Media Presentation */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {currentQuestion.image && (
                <div className="md:col-span-4 aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100">
                  <img
                    src={currentQuestion.image}
                    alt={currentQuestion.question[language] || currentQuestion.question.en}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className={`${currentQuestion.image ? 'md:col-span-8' : 'md:col-span-12'} space-y-3`}>
                <h3 className="text-lg sm:text-2xl font-black font-display text-slate-800 leading-snug">
                  {currentQuestion.question[language] || currentQuestion.question.en}
                </h3>
              </div>
            </div>

            {/* 4 Interactive Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedOptionId === opt.id;
                const isCorrect = opt.id === currentQuestion.correctOptionId;

                let cardStyle = 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 text-slate-800';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    cardStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-400 shadow-md';
                  } else if (isSelected && !isCorrect) {
                    cardStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-300';
                  } else {
                    cardStyle = 'border-slate-200 bg-slate-50 opacity-60 text-slate-500';
                  }
                }

                return (
                  <motion.button
                    whileHover={!isAnswerSubmitted ? { scale: 1.015 } : {}}
                    whileTap={!isAnswerSubmitted ? { scale: 0.98 } : {}}
                    key={opt.id}
                    id={`quiz-opt-${opt.id}`}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`p-4 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all min-h-[56px] cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-hidden ${cardStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 transition-colors ${
                          isAnswerSubmitted && isCorrect
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : isAnswerSubmitted && isSelected && !isCorrect
                            ? 'bg-rose-500 text-white shadow-xs'
                            : 'bg-white border border-slate-200/90 text-slate-700 shadow-2xs'
                        }`}
                      >
                        {OPTION_LETTERS[idx] || (idx + 1)}
                      </span>
                      <span className="font-bold text-sm sm:text-base leading-snug">
                        {opt.label[language] || opt.label.en}
                      </span>
                    </div>

                    {isAnswerSubmitted && (
                      <div className="shrink-0">
                        {isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />}
                        {isSelected && !isCorrect && <XCircle className="w-6 h-6 text-rose-600 fill-rose-100" />}
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Answer Feedback & Educational Explanation Card */}
            <AnimatePresence>
              {isAnswerSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 pt-2"
                >
                  <div
                    className={`p-4 rounded-2xl border flex items-start gap-3.5 text-xs sm:text-sm ${
                      selectedOptionId === currentQuestion.correctOptionId
                        ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                        : 'bg-amber-50/80 border-amber-200 text-amber-950'
                    }`}
                  >
                    <div className="shrink-0 mt-0.5">
                      {selectedOptionId === currentQuestion.correctOptionId ? (
                        <Sparkles className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <BookOpen className="w-5 h-5 text-amber-600" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="font-extrabold text-sm">
                        {selectedOptionId === currentQuestion.correctOptionId
                          ? language === 'az'
                            ? 'Möhtəşəm! Düzgün cavab! 🎉'
                            : language === 'tr'
                            ? 'Harika! Doğru cevap! 🎉'
                            : language === 'ru'
                            ? 'Отлично! Правильный ответ! 🎉'
                            : 'Awesome! That is correct! 🎉'
                          : language === 'az'
                          ? 'Yaxşı cəhd idi! Gəl öyrənək:'
                          : language === 'tr'
                          ? 'İyi deneme! Şimdi öğrenelim:'
                          : language === 'ru'
                          ? 'Хорошая попытка! Давай узнаем:'
                          : 'Good try! Here is what you should know:'}
                      </p>
                      <p className="leading-relaxed">
                        {currentQuestion.explanation[language] || currentQuestion.explanation.en}
                      </p>
                    </div>
                  </div>

                  {/* Next / Finish Button */}
                  <div className="flex justify-end pt-1">
                    <button
                      id="quiz-next-question-btn"
                      onClick={handleNext}
                      className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-sm flex items-center gap-2 shadow-md shadow-orange-500/25 transition-all cursor-pointer active:scale-95"
                    >
                      <span>
                        {currentIndex + 1 < deck.length
                          ? language === 'az'
                            ? 'Növbəti Sual'
                            : language === 'tr'
                            ? 'Sonraki Soru'
                            : language === 'ru'
                            ? 'Следующий вопрос'
                            : 'Next Question'
                          : language === 'az'
                          ? 'Nəticəni Gör'
                          : language === 'tr'
                          ? 'Sonuçları Gör'
                          : language === 'ru'
                          ? 'Узнать результат'
                          : 'See Results'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center text-slate-500 space-y-4">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
            <p>{language === 'az' ? 'Suallar yüklənir...' : 'Loading questions...'}</p>
          </div>
        )
      ) : (
        /* Results View */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-10 text-center space-y-8"
        >
          {/* Trophy Header */}
          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                triggerConfettiExplosion();
                sound.playReward();
              }}
              title="Click to celebrate again!"
              className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-950 flex items-center justify-center shadow-xl shadow-amber-400/40 cursor-pointer focus:outline-hidden"
            >
              <Trophy className="w-10 h-10 fill-amber-950" />
            </motion.button>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-800">
              {accuracyPercent >= 80
                ? language === 'az'
                  ? 'Möhtəşəm Qələbə! 🌟'
                  : language === 'tr'
                  ? 'Muhteşem Başarı! 🌟'
                  : language === 'ru'
                  ? 'Блестящая победа! 🌟'
                  : 'Sensational Triumph! 🌟'
                : language === 'az'
                ? 'Əla Zəhmət! 👏'
                : language === 'tr'
                ? 'Tebrikler! 👏'
                : language === 'ru'
                ? 'Отличный результат! 👏'
                : 'Great Exploration! 👏'}
            </h3>

            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              {language === 'az'
                ? `${totalQuestions} sualdan ${correctCount} suala düzgün cavab verdin!`
                : language === 'tr'
                ? `${totalQuestions} sorudan ${correctCount} tanesini doğru bildin!`
                : language === 'ru'
                ? `Правильно: ${correctCount} из ${totalQuestions} вопросов!`
                : `You answered ${correctCount} out of ${totalQuestions} questions correctly!`}
            </p>

            {/* Star Rating */}
            <div className="flex items-center justify-center gap-2 text-2xl text-amber-400">
              <span className={accuracyPercent >= 40 ? 'opacity-100 scale-110' : 'opacity-30'}>⭐</span>
              <span className={accuracyPercent >= 70 ? 'opacity-100 scale-125' : 'opacity-30'}>⭐</span>
              <span className={accuracyPercent >= 90 ? 'opacity-100 scale-110' : 'opacity-30'}>⭐</span>
            </div>

            {/* Explorer Profile & Digital Badges Certificate Card */}
            <div className="bg-gradient-to-r from-amber-50 to-emerald-50 border-2 border-amber-300/80 rounded-3xl p-4 sm:p-5 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-left">
              <div className="flex items-center gap-3.5 w-full sm:w-auto">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-amber-300 flex items-center justify-center text-3xl shadow-xs shrink-0 select-none">
                  {explorerAvatar}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-black uppercase text-amber-700 tracking-wider">
                      {language === 'az' ? 'Kəşfiyyatçı Sertifikatı' : language === 'tr' ? 'Kaşif Sertifikası' : language === 'ru' ? 'Сертификат исследователя' : 'Explorer Certificate'}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <h4 className="font-black text-lg text-slate-900 truncate">
                    {explorerName || (language === 'az' ? 'Gənc Kəşfiyyatçı' : language === 'tr' ? 'Genç Kaşif' : language === 'ru' ? 'Юный Исследователь' : 'Young Explorer')}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 mt-0.5">
                    <span className="flex items-center gap-1 text-amber-800 font-bold">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      {unlockedBadgesCount} {language === 'az' ? 'nişan qazanılıb' : language === 'tr' ? 'rozet kazanıldı' : language === 'ru' ? 'значков получено' : 'badges unlocked'}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsProfileOpen(true);
                  sound.playClick();
                }}
                className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 transition-all cursor-pointer shrink-0"
              >
                <Award className="w-4 h-4" />
                <span>
                  {language === 'az'
                    ? 'Nişanları Aç'
                    : language === 'tr'
                    ? 'Rozetleri Gör'
                    : language === 'ru'
                    ? 'Открыть значки'
                    : 'View Badges'}
                </span>
              </button>
            </div>
          </div>

          {/* Stats Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5">
              <span className="text-xs text-slate-500 block mb-1">
                {language === 'az' ? 'Ümumi Xal' : language === 'tr' ? 'Toplam Puan' : language === 'ru' ? 'Всего очков' : 'Total Score'}
              </span>
              <span className="text-xl sm:text-2xl font-black text-amber-600 font-display">
                {score}
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5">
              <span className="text-xs text-slate-500 block mb-1">
                {language === 'az' ? 'Dəqiqlik' : language === 'tr' ? 'Doğruluk' : language === 'ru' ? 'Точность' : 'Accuracy'}
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-600 font-display">
                {accuracyPercent}%
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5">
              <span className="text-xs text-slate-500 block mb-1">
                {language === 'az' ? 'Ən Yaxşı Seriya' : language === 'tr' ? 'En İyi Seri' : language === 'ru' ? 'Лучшая серия' : 'Max Streak'}
              </span>
              <span className="text-xl sm:text-2xl font-black text-orange-500 font-display">
                {maxStreak} 🔥
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5">
              <span className="text-xs text-slate-500 block mb-1">
                {language === 'az' ? 'Mövzu' : language === 'tr' ? 'Bölüm' : language === 'ru' ? 'Раздел' : 'Category'}
              </span>
              <span className="text-xs font-black text-indigo-600 truncate block mt-1">
                {getCategoryName(selectedCategory)}
              </span>
            </div>
          </div>

          {/* Breakdown by Section (Consists of all sections) */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 max-w-xl mx-auto text-left space-y-3">
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-500 flex items-center justify-between">
              <span>
                {language === 'az'
                  ? 'Bölmələr Üzrə Nəticə'
                  : language === 'tr'
                  ? 'Bölüm Başarı Dağılımı'
                  : language === 'ru'
                  ? 'Результаты по разделам'
                  : 'Section Performance Breakdown'}
              </span>
              <span className="font-normal lowercase text-[11px] text-slate-400">
                {answersHistory.length} {language === 'az' ? 'sual' : language === 'tr' ? 'soru' : language === 'ru' ? 'вопросов' : 'questions'}
              </span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(breakdownStats).map(([catKey, data]) => {
                const catObj = QUIZ_CATEGORIES.find((c) => c.id === catKey);
                const name = catObj ? catObj.label[language] || catObj.label.en : catKey;
                return (
                  <div
                    key={catKey}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span>{data.emoji}</span>
                      <span className="font-bold text-slate-700 truncate max-w-[120px]">{name}</span>
                    </div>
                    <span className="font-extrabold text-emerald-600">
                      {data.correct} / {data.total}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              id="quiz-play-again-btn"
              onClick={() => {
                initializeQuiz(selectedCategory);
                sound.playClick();
              }}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-sm flex items-center gap-2 shadow-md shadow-orange-500/25 transition-all cursor-pointer active:scale-95"
            >
              <RotateCw className="w-4 h-4" />
              <span>
                {language === 'az'
                  ? 'Yenidən Oyna (Yeni Suallar)'
                  : language === 'tr'
                  ? 'Tekrar Oyna (Yeni Sorular)'
                  : language === 'ru'
                  ? 'Играть снова (Новые вопросы)'
                  : 'Play Again (Fresh Questions)'}
              </span>
            </button>

            <button
              id="quiz-celebrate-btn"
              onClick={() => {
                triggerConfettiExplosion();
                sound.playReward();
              }}
              className="px-4 py-3 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-extrabold text-sm flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>🎉</span>
            </button>

            <button
              id="quiz-toggle-review-btn"
              onClick={() => setShowReview(!showReview)}
              className="px-5 py-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-extrabold text-sm flex items-center gap-2 transition-all cursor-pointer active:scale-95"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>
                {showReview
                  ? language === 'az'
                    ? 'İcmalı Gizlət'
                    : language === 'tr'
                    ? 'İncelemeyi Gizle'
                    : language === 'ru'
                    ? 'Скрыть ответы'
                    : 'Hide Review'
                  : language === 'az'
                  ? 'Sualları İcmal Et'
                  : language === 'tr'
                  ? 'Cevapları İncele'
                  : language === 'ru'
                  ? 'Посмотреть ответы'
                  : 'Review Answers'}
              </span>
            </button>
          </div>

          {/* Expandable Answers Review */}
          <AnimatePresence>
            {showReview && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-left space-y-3 pt-4 border-t border-slate-200 max-w-2xl mx-auto overflow-hidden"
              >
                <h4 className="font-black text-sm text-slate-800">
                  {language === 'az' ? 'Sualların Ətraflı İcmalı:' : language === 'tr' ? 'Detaylı Cevap Listesi:' : language === 'ru' ? 'Обзор ответов:' : 'Detailed Question Review:'}
                </h4>

                <div className="space-y-3">
                  {answersHistory.map((item, idx) => {
                    const chosenOpt = item.question.options.find((o) => o.id === item.chosenId);
                    const correctOpt = item.question.options.find((o) => o.id === item.question.correctOptionId);

                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl border text-xs space-y-1.5 ${
                          item.isCorrect
                            ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                            : 'bg-rose-50/60 border-rose-200 text-rose-950'
                        }`}
                      >
                        <div className="flex items-center justify-between font-extrabold">
                          <span className="flex items-center gap-1.5">
                            <span>{item.question.emoji}</span>
                            <span>{idx + 1}. {item.question.question[language] || item.question.question.en}</span>
                          </span>
                          <span>
                            {item.isCorrect ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                            ) : (
                              <XCircle className="w-4 h-4 text-rose-600 inline" />
                            )}
                          </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-[11px] text-slate-600">
                          <div>
                            <span className="font-bold">{language === 'az' ? 'Sənin cavabın: ' : 'Your answer: '}</span>
                            <span>{chosenOpt ? chosenOpt.label[language] || chosenOpt.label.en : item.chosenId}</span>
                          </div>
                          {!item.isCorrect && correctOpt && (
                            <div>
                              <span className="font-bold text-emerald-700">{language === 'az' ? 'Doğru cavab: ' : 'Correct answer: '}</span>
                              <span className="text-emerald-800">{correctOpt.label[language] || correctOpt.label.en}</span>
                            </div>
                          )}
                        </div>

                        <p className="text-[11px] text-slate-600 pt-1 border-t border-black/5 italic">
                          {item.question.explanation[language] || item.question.explanation.en}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
