import React, { useState } from 'react';
import { useBadges } from '../context/BadgeContext';
import { useLanguage } from '../context/LanguageContext';
import { EXPLORER_AVATARS, SUGGESTED_EXPLORER_NAMES } from '../data/badgesData';
import { sound } from '../utils/soundEngine';
import {
  X,
  Award,
  Sparkles,
  Trophy,
  Flame,
  CheckCircle,
  Lock,
  Edit2,
  Check,
  Star,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ProfileBadgesOverlay() {
  const {
    isProfileOpen,
    setIsProfileOpen,
    explorerName,
    setExplorerName,
    explorerAvatar,
    setExplorerAvatar,
    badges,
    stats,
    unlockedBadgesCount,
    totalBadgesCount,
    explorerRank,
    totalPoints
  } = useBadges();

  const { language } = useLanguage();

  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>(explorerName || '');
  const [activeTab, setActiveTab] = useState<'all' | 'unlocked' | 'locked'>('all');

  if (!isProfileOpen) return null;

  const handleSaveName = () => {
    if (nameInput.trim()) {
      setExplorerName(nameInput.trim());
      sound.playSuccess();
    }
    setIsEditingName(false);
  };

  const handleClose = () => {
    setIsProfileOpen(false);
    setIsEditingName(false);
    sound.playClick();
  };

  const filteredBadges = badges.filter((badge) => {
    if (activeTab === 'unlocked') return badge.isUnlocked;
    if (activeTab === 'locked') return !badge.isUnlocked;
    return true;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={handleClose} />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-amber-200/80 overflow-hidden flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Banner */}
          <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 p-5 text-white">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5">
              <div className="relative group">
                <span className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xs border-2 border-white/40 flex items-center justify-center text-3xl shadow-inner select-none">
                  {explorerAvatar}
                </span>
                <span className="absolute -bottom-1 -right-1 text-sm bg-white rounded-full p-0.5 shadow-xs">
                  {explorerRank.icon}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {isEditingName ? (
                    <div className="flex items-center gap-1.5 w-full">
                      <input
                        type="text"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        placeholder="Explorer name..."
                        maxLength={25}
                        autoFocus
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSaveName();
                        }}
                        className="px-2.5 py-1 bg-white text-slate-900 rounded-lg text-sm font-bold w-full max-w-[170px] outline-hidden focus:ring-2 focus:ring-amber-300"
                      />
                      <button
                        onClick={handleSaveName}
                        className="p-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500"
                        title="Save"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <h3 className="font-black text-xl text-white truncate drop-shadow-xs">
                        {explorerName || (language === 'az' ? 'Gənc Kəşfiyyatçı' : language === 'tr' ? 'Genç Kaşif' : language === 'ru' ? 'Юный Исследователь' : 'Young Explorer')}
                      </h3>
                      <button
                        onClick={() => {
                          setNameInput(explorerName || '');
                          setIsEditingName(true);
                        }}
                        className="p-1 rounded-md bg-white/20 hover:bg-white/30 text-white transition-colors"
                        title="Edit name"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-amber-100 mt-0.5">
                  <span>{explorerRank.title[language] || explorerRank.title.en}</span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5 font-bold text-amber-200">
                    <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                    {totalPoints} pts
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Avatar Selector if editing */}
            {isEditingName && (
              <div className="mt-3 pt-3 border-t border-white/20">
                <span className="text-[11px] font-bold text-amber-100 block mb-1.5">
                  {language === 'az' ? 'Avatar seçin:' : language === 'tr' ? 'Avatar seçin:' : language === 'ru' ? 'Выбери аватар:' : 'Pick an avatar:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {EXPLORER_AVATARS.map((av) => (
                    <button
                      key={av}
                      onClick={() => {
                        setExplorerAvatar(av);
                        sound.playClick();
                      }}
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-lg transition-transform ${
                        explorerAvatar === av
                          ? 'bg-white scale-110 shadow-md ring-2 ring-amber-300'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                    >
                      {av}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-2 p-3.5 bg-amber-50/60 border-b border-amber-100 text-center">
            <div className="bg-white p-2.5 rounded-2xl border border-amber-200/60 shadow-2xs">
              <div className="flex items-center justify-center gap-1 text-amber-600 mb-0.5">
                <Award className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  {language === 'az' ? 'Nişanlar' : language === 'tr' ? 'Rozetler' : language === 'ru' ? 'Значки' : 'Badges'}
                </span>
              </div>
              <span className="text-lg font-black text-slate-800">
                {unlockedBadgesCount} / {totalBadgesCount}
              </span>
            </div>

            <div className="bg-white p-2.5 rounded-2xl border border-amber-200/60 shadow-2xs">
              <div className="flex items-center justify-center gap-1 text-emerald-600 mb-0.5">
                <Trophy className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  {language === 'az' ? 'Sınaqlar' : language === 'tr' ? 'Yarışmalar' : language === 'ru' ? 'Викторины' : 'Quizzes'}
                </span>
              </div>
              <span className="text-lg font-black text-slate-800">
                {stats.totalQuizzesCompleted}
              </span>
            </div>

            <div className="bg-white p-2.5 rounded-2xl border border-amber-200/60 shadow-2xs">
              <div className="flex items-center justify-center gap-1 text-orange-600 mb-0.5">
                <Flame className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  {language === 'az' ? 'Ardıcıl' : language === 'tr' ? 'Seri' : language === 'ru' ? 'Серия' : 'Streak'}
                </span>
              </div>
              <span className="text-lg font-black text-slate-800">
                {stats.highestStreak}🔥
              </span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-between px-4 pt-3 pb-2">
            <h4 className="font-extrabold text-sm text-slate-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>
                {language === 'az' ? 'Kəşfiyyat Nişanları' : language === 'tr' ? 'Başarı Rozetleri' : language === 'ru' ? 'Значки достижений' : 'Digital Badges'}
              </span>
            </h4>

            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => {
                  setActiveTab('all');
                  sound.playClick();
                }}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  activeTab === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500'
                }`}
              >
                {language === 'az' ? 'Hamısı' : language === 'tr' ? 'Tümü' : language === 'ru' ? 'Все' : 'All'}
              </button>
              <button
                onClick={() => {
                  setActiveTab('unlocked');
                  sound.playClick();
                }}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  activeTab === 'unlocked' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-500'
                }`}
              >
                {language === 'az' ? 'Açılan' : language === 'tr' ? 'Açılan' : language === 'ru' ? 'Открытые' : 'Earned'}
              </button>
              <button
                onClick={() => {
                  setActiveTab('locked');
                  sound.playClick();
                }}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  activeTab === 'locked' ? 'bg-white text-amber-700 shadow-2xs' : 'text-slate-500'
                }`}
              >
                {language === 'az' ? 'Qapalı' : language === 'tr' ? 'Kilitli' : language === 'ru' ? 'Закрытые' : 'Locked'}
              </button>
            </div>
          </div>

          {/* Badges Grid (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
            {filteredBadges.map((badge) => {
              const title = badge.title[language] || badge.title.en;
              const desc = badge.description[language] || badge.description.en;
              const req = badge.requirementText[language] || badge.requirementText.en;

              return (
                <div
                  key={badge.id}
                  className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3.5 ${
                    badge.isUnlocked
                      ? 'bg-gradient-to-r from-amber-50/70 to-emerald-50/70 border-amber-300 shadow-xs'
                      : 'bg-slate-50/80 border-slate-200/80 opacity-70'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 border ${
                      badge.isUnlocked
                        ? 'bg-white border-amber-300 shadow-xs'
                        : 'bg-slate-100 border-slate-200 grayscale text-slate-400'
                    }`}
                  >
                    {badge.isUnlocked ? badge.icon : '🔒'}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="font-black text-sm text-slate-900 leading-snug">
                          {title}
                        </span>
                        {badge.isUnlocked && (
                          <CheckCircle className="w-4 h-4 text-emerald-600 fill-emerald-100 inline shrink-0" />
                        )}
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black shrink-0">
                        +{badge.rewardPoints} pts
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {badge.isUnlocked ? desc : req}
                    </p>

                    {badge.isUnlocked && badge.unlockedAt && (
                      <span className="text-[10px] text-emerald-700 font-semibold block mt-1">
                        ✓ {language === 'az' ? 'Qazanıldı' : language === 'tr' ? 'Kazanıldı' : language === 'ru' ? 'Получено' : 'Unlocked'}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500">
            {language === 'az'
              ? 'Daha çox nişan açmaq üçün sınaqlarda iştirak et və yeni bölmələri araşdır! 🚀'
              : language === 'tr'
              ? 'Daha çok rozet kazanmak için yarışmaları çöz ve yeni kategorileri keşfet! 🚀'
              : language === 'ru'
              ? 'Проходи викторины и исследуй новые темы, чтобы открыть все значки! 🚀'
              : 'Keep playing quizzes and exploring categories to unlock every badge! 🚀'}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
