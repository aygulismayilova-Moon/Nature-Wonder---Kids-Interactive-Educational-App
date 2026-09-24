import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NumbersAlphabetSubsectionId } from '../types';
import { AlphabetExplorer } from './AlphabetExplorer';
import { NumbersExplorer } from './NumbersExplorer';
import { NumbersAlphabetQuiz } from './NumbersAlphabetQuiz';
import { BookA, Binary, Trophy } from 'lucide-react';
import { sound } from '../utils/soundEngine';

interface NumbersAlphabetExplorerProps {
  currentSub: NumbersAlphabetSubsectionId;
  onSelectSub: (sub: NumbersAlphabetSubsectionId) => void;
}

export const NumbersAlphabetExplorer: React.FC<NumbersAlphabetExplorerProps> = ({
  currentSub,
  onSelectSub,
}) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Sub-navigation Controls */}
      <div className="flex flex-wrap items-center gap-2.5 p-2 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xs">
        <button
          id="subnav-btn-alphabet"
          onClick={() => {
            sound.playClick();
            onSelectSub('alphabet');
          }}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all ${
            currentSub === 'alphabet'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <BookA className="w-4 h-4" />
          <span>{t('subnavAlphabet')}</span>
        </button>

        <button
          id="subnav-btn-numbers"
          onClick={() => {
            sound.playClick();
            onSelectSub('numbers');
          }}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all ${
            currentSub === 'numbers'
              ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <Binary className="w-4 h-4" />
          <span>{t('subnavNumbers')}</span>
        </button>

        <button
          id="subnav-btn-numbers-quiz"
          onClick={() => {
            sound.playClick();
            onSelectSub('quiz');
          }}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all ${
            currentSub === 'quiz'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>{t('subnavNumbersAlphabetQuiz')}</span>
        </button>
      </div>

      {/* Content Rendering based on currentSub */}
      {currentSub === 'alphabet' && <AlphabetExplorer />}
      {currentSub === 'numbers' && <NumbersExplorer />}
      {currentSub === 'quiz' && <NumbersAlphabetQuiz />}
    </div>
  );
};
