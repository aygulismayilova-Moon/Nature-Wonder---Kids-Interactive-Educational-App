import React, { useState } from 'react';
import { NATURE_ELEMENTS } from '../data/natureData';
import { NatureElement } from '../types';
import { sound } from '../utils/soundEngine';
import { useLanguage } from '../context/LanguageContext';
import { Volume2, VolumeX, Sparkles, Compass, CheckCircle2, Trees, Droplets, Mountain, Waves, Snowflake, CloudRain } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const NatureExplorer: React.FC = () => {
  const { t, getLocalizedNature, language } = useLanguage();
  const [selectedElement, setSelectedElement] = useState<NatureElement>(NATURE_ELEMENTS[0]);
  const [isPlayingAmbient, setIsPlayingAmbient] = useState<boolean>(false);
  const [completedActivities, setCompletedActivities] = useState<string[]>([]);

  const localizedCurrent = getLocalizedNature(selectedElement);

  const handleSelect = (el: NatureElement) => {
    setSelectedElement(el);
    sound.playClick();
    const loc = getLocalizedNature(el);
    sound.speak(`${loc.name}. ${loc.description}`, language, el.id);
    if (isPlayingAmbient) {
      sound.playNatureSound(el.ambientSound);
    }
  };

  const toggleAmbientSound = () => {
    if (isPlayingAmbient) {
      sound.stopAmbient();
      setIsPlayingAmbient(false);
    } else {
      sound.playNatureSound(selectedElement.ambientSound);
      setIsPlayingAmbient(true);
    }
  };

  const handleToggleActivity = (id: string) => {
    sound.playClick();
    if (completedActivities.includes(id)) {
      setCompletedActivities(prev => prev.filter(x => x !== id));
    } else {
      setCompletedActivities(prev => [...prev, id]);
      sound.playSuccess();
      sound.speak(language === 'az' ? 'Əla iş! Təcrübəni uğurla tamamladın!' : t('correctAwesome'), language);
    }
  };

  const getElementIcon = (id: string) => {
    switch (id) {
      case 'trees': return <Trees className="w-5 h-5 text-emerald-600" />;
      case 'forests': return <Trees className="w-5 h-5 text-emerald-600" />;
      case 'mountain':
      case 'mountains': return <Mountain className="w-5 h-5 text-amber-700" />;
      case 'rivers': return <Droplets className="w-5 h-5 text-blue-500" />;
      case 'waterfalls': return <Waves className="w-5 h-5 text-cyan-600" />;
      case 'snow': return <Snowflake className="w-5 h-5 text-sky-400" />;
      case 'rain': return <CloudRain className="w-5 h-5 text-indigo-500" />;
      default: return <Waves className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <div className="space-y-6" id="nature-explorer-container">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800 text-white rounded-3xl p-6 shadow-lg shadow-teal-900/10 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-teal-100 text-xs font-bold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{t('subnavNature')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-2">
            {t('natureTitle')} 🏔️🌳🌊
          </h2>
          <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
            {t('natureSubtitle')}
          </p>
        </div>

        <div className="absolute right-4 -bottom-6 text-white/10 text-9xl font-black select-none pointer-events-none">
          🌿
        </div>
      </div>

      {/* Nature Elements Quick-Selector Pills */}
      <div className="bg-white rounded-2xl p-3 border border-teal-100 shadow-xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {NATURE_ELEMENTS.map((el) => {
            const isSelected = selectedElement.id === el.id;
            const locEl = getLocalizedNature(el);
            return (
              <button
                key={el.id}
                id={`nature-btn-${el.id}`}
                onClick={() => handleSelect(el)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md scale-105'
                    : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{el.emoji}</span>
                <span>{locEl.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Element Feature Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Image & Ambient Audio */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <img
                src={selectedElement.image}
                alt={localizedCurrent.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                {getElementIcon(selectedElement.id)}
                <span>{localizedCurrent.category}</span>
              </div>
            </div>

            {/* Ambient Sound Controller */}
            <div className="p-4 bg-teal-50/70 border-t border-teal-100 flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-teal-900">
                  {localizedCurrent.soundLabel}
                </div>
                <div className="text-[11px] text-teal-700">
                  {isPlayingAmbient
                    ? '🔊 ' + (language === 'az' ? 'Təbii fon səsi çalınır' : language === 'tr' ? 'Doğal ortam sesi çalıyor' : language === 'ru' ? 'Звучит фон природы' : t('soundActive'))
                    : t('listenToNature')}
                </div>
              </div>

              <button
                id="nature-ambient-toggle"
                onClick={toggleAmbientSound}
                className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-xs ${
                  isPlayingAmbient
                    ? 'bg-red-500 text-white hover:bg-red-600 animate-pulse'
                    : 'bg-teal-600 text-white hover:bg-teal-700'
                }`}
              >
                {isPlayingAmbient ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>
                  {isPlayingAmbient
                    ? (language === 'az' ? 'Səsi Dayandır' : language === 'tr' ? 'Sesi Durdur' : language === 'ru' ? 'Остановить звук' : 'Stop Sound')
                    : t('listenToNature')}
                </span>
              </button>
            </div>
          </div>

          {/* Read Aloud Button */}
          <button
            onClick={() => {
              sound.playClick();
              sound.speak(
                `${localizedCurrent.name}. ${localizedCurrent.description}. ${t('funFact')}: ${localizedCurrent.funFacts[0]}. ${t('whyItMatters')}: ${localizedCurrent.whyItMatters}`,
                language,
                selectedElement.id
              );
            }}
            className="w-full py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <Volume2 className="w-4 h-4 text-teal-600" />
            <span>
              {language === 'az' ? 'Məlumatı Səsləndir' : language === 'tr' ? 'Bilgileri Seslendir' : language === 'ru' ? 'Озвучить рассказ' : t('pronounce')}
            </span>
          </button>
        </div>

        {/* Right Column: Detailed Learning & Activities */}
        <div className="lg:col-span-7 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedElement.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-5"
            >
              {/* Title & Tag */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{selectedElement.emoji}</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                    {localizedCurrent.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {localizedCurrent.description}
                </p>
              </div>

              {/* 3 Fascinating Fun Facts */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t('didYouKnow')}</span>
                </h4>
                <div className="grid gap-2 sm:grid-cols-1">
                  {localizedCurrent.funFacts.map((fact, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/70 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5"
                    >
                      <span className="font-extrabold text-amber-600 shrink-0">#{idx + 1}</span>
                      <span className="leading-snug">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kid Activity & Why It Matters */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                {/* Observation Mission Activity */}
                <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/70 space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 className="text-xs font-extrabold text-teal-900 flex items-center gap-1.5">
                      <span>🧪</span>
                      <span>{t('kidActivity')}</span>
                    </h5>
                    <p className="text-xs text-teal-800 leading-relaxed mt-1">
                      {localizedCurrent.kidActivity}
                    </p>
                  </div>

                  <button
                    onClick={() => handleToggleActivity(selectedElement.id)}
                    className={`mt-2 py-1.5 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all w-fit ${
                      completedActivities.includes(selectedElement.id)
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white text-teal-800 border border-teal-300 hover:bg-teal-100'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>
                      {completedActivities.includes(selectedElement.id)
                        ? (language === 'az' ? 'Təcrübə Tamamlandı! ✓' : language === 'tr' ? 'Etkinlik Tamamlandı! ✓' : language === 'ru' ? 'Задание выполнено! ✓' : 'Completed! ✓')
                        : (language === 'az' ? 'Təcrübəni Tamamla' : language === 'tr' ? 'Etkinliği Tamamla' : language === 'ru' ? 'Завершить задание' : t('kidActivity'))}
                    </span>
                  </button>
                </div>

                {/* Why It Matters */}
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/70 space-y-1.5">
                  <h5 className="text-xs font-extrabold text-blue-900 flex items-center gap-1.5">
                    <span>🌍</span>
                    <span>{t('whyItMatters')}</span>
                  </h5>
                  <p className="text-xs text-blue-800 leading-relaxed">
                    {localizedCurrent.whyItMatters}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
