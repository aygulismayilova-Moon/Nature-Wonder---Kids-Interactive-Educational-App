import React, { useEffect } from 'react';
import { useBadges } from '../context/BadgeContext';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Sparkles, X, ChevronRight } from 'lucide-react';
import { sound } from '../utils/soundEngine';

export function BadgeUnlockedToast() {
  const { newlyUnlockedBadge, dismissNewBadge, setIsProfileOpen } = useBadges();
  const { language } = useLanguage();

  useEffect(() => {
    if (newlyUnlockedBadge) {
      const timer = setTimeout(() => {
        dismissNewBadge();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [newlyUnlockedBadge, dismissNewBadge]);

  if (!newlyUnlockedBadge) return null;

  const title = newlyUnlockedBadge.title[language] || newlyUnlockedBadge.title.en;
  const desc = newlyUnlockedBadge.description[language] || newlyUnlockedBadge.description.en;

  return (
    <AnimatePresence>
      <div className="fixed top-20 right-4 sm:right-6 z-50 max-w-sm w-full pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 p-0.5 rounded-3xl shadow-2xl"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-[22px] p-3.5 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-200 border border-amber-300 flex items-center justify-center text-2xl shadow-inner shrink-0 animate-bounce">
              {newlyUnlockedBadge.icon}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 text-[11px] font-black uppercase text-amber-600 tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>
                  {language === 'az'
                    ? 'Yeni Nişan Açıldı!'
                    : language === 'tr'
                    ? 'Yeni Rozet Açıldı!'
                    : language === 'ru'
                    ? 'Новый значок!'
                    : 'New Badge Unlocked!'}
                </span>
              </div>
              <h5 className="font-black text-sm text-slate-900 truncate">{title}</h5>
              <p className="text-[11px] text-slate-600 line-clamp-1">{desc}</p>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                setIsProfileOpen(true);
                dismissNewBadge();
              }}
              className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 transition-colors shrink-0"
              title="View in Profile"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={dismissNewBadge}
              className="p-1 text-slate-400 hover:text-slate-600 transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
