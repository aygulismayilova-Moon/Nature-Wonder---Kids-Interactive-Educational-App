import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useBadges } from '../context/BadgeContext';
import { EXPLORER_AVATARS, SUGGESTED_EXPLORER_NAMES } from '../data/badgesData';
import { sound } from '../utils/soundEngine';
import { Sparkles, Award, ArrowRight, Star, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface QuizNameGateProps {
  onStartQuiz: () => void;
  categoryTitle: string;
  categoryEmoji: string;
}

export function QuizNameGate({ onStartQuiz, categoryTitle, categoryEmoji }: QuizNameGateProps) {
  const { language } = useLanguage();
  const {
    explorerName,
    setExplorerName,
    explorerAvatar,
    setExplorerAvatar,
    setIsProfileOpen,
    unlockedBadgesCount
  } = useBadges();

  const [inputName, setInputName] = useState<string>(explorerName || '');
  const [selectedAvatar, setSelectedAvatar] = useState<string>(explorerAvatar || '🦁');
  const [error, setError] = useState<string | null>(null);

  const handleStart = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanName = inputName.trim();
    if (!cleanName) {
      setError(
        language === 'az'
          ? 'Zəhmət olmasa, əvvəlcə adınızı yazın!'
          : language === 'tr'
          ? 'Lütfen önce isminizi yazın!'
          : language === 'ru'
          ? 'Пожалуйста, напиши своё имя!'
          : 'Please enter your name first!'
      );
      sound.playError();
      return;
    }

    setExplorerName(cleanName);
    setExplorerAvatar(selectedAvatar);
    sound.playSuccess();
    onStartQuiz();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="bg-white rounded-3xl border border-amber-200/90 shadow-xl overflow-hidden max-w-xl mx-auto"
    >
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 p-6 sm:p-8 text-white text-center relative overflow-hidden">
        <div className="absolute top-2 right-2 flex items-center gap-1.5">
          <button
            onClick={() => {
              setIsProfileOpen(true);
              sound.playClick();
            }}
            className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-black backdrop-blur-xs flex items-center gap-1.5 transition-all shadow-xs"
            title="Digital Badges Dashboard"
          >
            <Award className="w-3.5 h-3.5 text-amber-200" />
            <span>
              {language === 'az' ? 'Nişanlar' : language === 'tr' ? 'Rozetler' : language === 'ru' ? 'Значки' : 'Badges'} ({unlockedBadgesCount})
            </span>
          </button>
        </div>

        <div className="w-20 h-20 mx-auto rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center text-4xl shadow-lg mb-3 select-none">
          {categoryEmoji || '🦁'}
        </div>

        <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white drop-shadow-sm">
          {language === 'az'
            ? 'Kəşfiyyatçı Sınağına Xoş Gəldin!'
            : language === 'tr'
            ? 'Bilgi Yarışmasına Hoş Geldin!'
            : language === 'ru'
            ? 'Добро пожаловать в викторину!'
            : 'Welcome to Nature Wonder Quiz!'}
        </h2>

        <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-md mx-auto font-medium">
          {categoryTitle} •{' '}
          {language === 'az'
            ? 'Sınağa başlamazdan əvvəl adını yaz və kəşfə başla!'
            : language === 'tr'
            ? 'Yarışmaya başlamadan önce adını yaz ve maceraya başla!'
            : language === 'ru'
            ? 'Напиши своё имя перед началом и выигрывай значки!'
            : 'Write your name first to begin the adventure and earn achievement badges!'}
        </p>
      </div>

      {/* Name Input & Avatar Picker Form */}
      <form onSubmit={handleStart} className="p-6 sm:p-8 space-y-6">
        {/* Choose Avatar */}
        <div className="space-y-2">
          <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
            {language === 'az'
              ? 'Kəşfiyyatçı Avatarını Seç:'
              : language === 'tr'
              ? 'Kaşif Avatarını Seç:'
              : language === 'ru'
              ? 'Выбери свой аватар:'
              : 'Choose Your Explorer Avatar:'}
          </label>
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-slate-50 rounded-2xl border border-slate-200/80">
            {EXPLORER_AVATARS.slice(0, 8).map((av) => (
              <button
                type="button"
                key={av}
                onClick={() => {
                  setSelectedAvatar(av);
                  sound.playClick();
                }}
                className={`w-11 h-11 rounded-2xl flex items-center justify-center text-2xl transition-all cursor-pointer ${
                  selectedAvatar === av
                    ? 'bg-amber-400 text-white shadow-md scale-110 ring-2 ring-amber-500'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                }`}
              >
                {av}
              </button>
            ))}
          </div>
        </div>

        {/* Enter Explorer Name */}
        <div className="space-y-2">
          <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
            {language === 'az'
              ? 'Sənin Adın (Kəşfiyyatçı):'
              : language === 'tr'
              ? 'Senin İsmin (Kaşif):'
              : language === 'ru'
              ? 'Твоё имя (Исследователь):'
              : 'Your Explorer Name:'}
          </label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl select-none">
              {selectedAvatar}
            </span>
            <input
              type="text"
              id="quiz-explorer-name-input"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
                if (error) setError(null);
              }}
              placeholder={
                language === 'az'
                  ? 'Məsələn: Ayla, Murad, Samir...'
                  : language === 'tr'
                  ? 'Örnek: Deniz, Emir, Leyla...'
                  : language === 'ru'
                  ? 'Например: Алина, Артём, Саша...'
                  : 'e.g. Leo, Ayla, Sam, Maya...'
              }
              maxLength={25}
              autoFocus
              className="w-full pl-14 pr-4 py-3.5 bg-slate-50 border-2 border-amber-300/80 rounded-2xl font-bold text-slate-800 text-base sm:text-lg focus:border-amber-500 focus:bg-white focus:outline-hidden transition-all shadow-inner"
            />
          </div>

          {error && (
            <p className="text-xs font-bold text-rose-600 animate-shake">
              ⚠️ {error}
            </p>
          )}

          {/* Quick Name Suggestions */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-500 mr-1">
              {language === 'az' ? 'Təkliflər:' : language === 'tr' ? 'Öneriler:' : language === 'ru' ? 'Примеры:' : 'Suggestions:'}
            </span>
            {SUGGESTED_EXPLORER_NAMES.slice(0, 6).map((suggested) => (
              <button
                type="button"
                key={suggested}
                onClick={() => {
                  setInputName(suggested);
                  if (error) setError(null);
                  sound.playClick();
                }}
                className="px-2.5 py-1 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold transition-colors cursor-pointer"
              >
                {suggested}
              </button>
            ))}
          </div>
        </div>

        {/* Action Button: Start Quiz */}
        <button
          type="submit"
          id="begin-quiz-adventure-btn"
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 hover:from-amber-600 hover:to-emerald-600 text-white font-black text-base sm:text-lg shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
        >
          <span>
            {language === 'az'
              ? 'Sınağa Başla'
              : language === 'tr'
              ? 'Yarışmaya Başla'
              : language === 'ru'
              ? 'Начать игру'
              : 'Begin Quiz Adventure'}
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </motion.div>
  );
}
