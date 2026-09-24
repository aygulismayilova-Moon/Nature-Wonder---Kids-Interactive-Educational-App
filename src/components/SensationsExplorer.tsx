import React, { useState } from 'react';
import { FOOD_ITEMS } from '../data/foodsData';
import { FoodItem, SensationType } from '../types';
import { MascotCharacter } from './MascotCharacter';
import { sound } from '../utils/soundEngine';
import { Utensils, Volume2, Sparkles, Flame, Snowflake, Award, CheckCircle2, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

interface SensationsExplorerProps {
  currentSub: 'explorer' | 'sorter';
  onSelectSub: (sub: 'explorer' | 'sorter') => void;
}

const FoodIcon: React.FC<{ food: FoodItem; className?: string; imgClassName?: string }> = ({
  food,
  className = "text-2xl",
  imgClassName = "w-6 h-6 inline-block object-contain"
}) => {
  if (food.iconUrl || food.id === 'cherry-plum') {
    return (
      <span className={`inline-flex items-center justify-center ${className}`}>
        <img
          src={food.iconUrl || '/images/green_sour_cherry_plum_icon.svg'}
          alt={food.name}
          referrerPolicy="no-referrer"
          className={imgClassName}
        />
      </span>
    );
  }
  return <span className={className}>{food.emoji}</span>;
};

export const SensationsExplorer: React.FC<SensationsExplorerProps> = ({ currentSub, onSelectSub }) => {
  const { language, t, getLocalizedFood } = useLanguage();
  const [selectedSensation, setSelectedSensation] = useState<SensationType | 'all'>('all');
  const [selectedFood, setSelectedFood] = useState<FoodItem>(FOOD_ITEMS[0]);
  const [mascotBubble, setMascotBubble] = useState<string | null>(null);

  // --- Sorter Game State ---
  const [sorterQueue, setSorterQueue] = useState<FoodItem[]>(() => [...FOOD_ITEMS].sort(() => 0.5 - Math.random()));
  const [currentSorterIndex, setCurrentSorterIndex] = useState<number>(0);
  const [sorterScore, setSorterScore] = useState<number>(0);
  const [sorterFeedback, setSorterFeedback] = useState<string | null>(null);
  const [sorterIsCorrect, setSorterIsCorrect] = useState<boolean | null>(null);

  const filteredFoods = FOOD_ITEMS.filter(f => {
    return selectedSensation === 'all' || f.sensation === selectedSensation;
  });

  const getSensationLabel = (sensation: SensationType) => {
    switch (sensation) {
      case 'sweet': return t('sensationSweet');
      case 'spicy': return t('sensationSpicy');
      case 'sour': return t('sensationSour');
      case 'hot': return t('sensationHot');
      case 'cold': return t('sensationCold');
    }
  };

  const handleFeedFood = (food: FoodItem) => {
    setSelectedFood(food);
    const loc = getLocalizedFood(food);
    setMascotBubble(loc.spokenQuote);

    // Play tactile sound effect and speech
    sound.playSensationSound(food.sensation);
    setTimeout(() => {
      sound.speak(`${loc.name}. ${loc.spokenQuote}`, language, food.id);
    }, 200);
  };

  const getSensationColor = (sensation: SensationType) => {
    switch (sensation) {
      case 'sweet': return 'bg-pink-100 text-pink-800 border-pink-300';
      case 'spicy': return 'bg-red-100 text-red-800 border-red-300';
      case 'sour': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'hot': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'cold': return 'bg-sky-100 text-sky-800 border-sky-300';
    }
  };

  const handleSortFood = (chosenSensation: SensationType) => {
    if (sorterFeedback) return; // Prevent spam
    const currentFood = sorterQueue[currentSorterIndex];
    const isCorrect = chosenSensation === currentFood.sensation;
    const locFood = getLocalizedFood(currentFood);
    const sensationName = getSensationLabel(currentFood.sensation);

    if (isCorrect) {
      setSorterIsCorrect(true);
      setSorterScore(prev => prev + 1);
      const feedbackMsg = language === 'az'
        ? `🎉 Düzdür! ${locFood.name} ${sensationName} hissidir!`
        : language === 'tr'
        ? `🎉 Doğru! ${locFood.name} ${sensationName} duyusudur!`
        : language === 'ru'
        ? `🎉 Правильно! ${locFood.name} — это ${sensationName}!`
        : `🎉 Correct! ${locFood.name} is ${sensationName.toUpperCase()}!`;
      setSorterFeedback(feedbackMsg);
      sound.playSuccess();
      sound.speak(`${t('correctAwesome')} ${locFood.name} - ${sensationName}!`, language);
      try {
        confetti({
          particleCount: 35,
          spread: 50,
          origin: { y: 0.7 }
        });
      } catch {}
    } else {
      setSorterIsCorrect(false);
      const feedbackMsg = language === 'az'
        ? `💡 Yaxın idi! ${locFood.name} əslində ${sensationName} hissidir!`
        : language === 'tr'
        ? `💡 Yaklaştın! ${locFood.name} aslında ${sensationName}!`
        : language === 'ru'
        ? `💡 Почти угадал! ${locFood.name} — это ${sensationName}!`
        : `💡 Close! ${locFood.name} is actually ${sensationName.toUpperCase()}!`;
      setSorterFeedback(feedbackMsg);
      sound.playClick();
      sound.speak(`${locFood.name} - ${sensationName}!`, language);
    }

    setTimeout(() => {
      setSorterFeedback(null);
      setSorterIsCorrect(null);
      setCurrentSorterIndex(prev => (prev + 1) % sorterQueue.length);
    }, 1800);
  };

  return (
    <div className="space-y-6" id="sensations-explorer-container">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white rounded-3xl p-6 shadow-lg shadow-rose-500/15 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-rose-100 text-xs font-bold mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>
              {language === 'az' ? 'Bölmə 3 • Hissi Qavrayış' : language === 'tr' ? 'Bölüm 3 • Duyusal İfade' : language === 'ru' ? 'Раздел 3 • Ощущения и вкусы' : 'Section 3 • Sensory Expression'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-2">
            {t('sensationsTitle')} 🍓🍯🌶️🍋🍲🍨
          </h2>
          <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
            {t('sensationsSubtitle')}
          </p>
        </div>

        {/* Sub-view Navigation Pills */}
        <div className="mt-5 flex flex-wrap items-center gap-2 relative z-10">
          <button
            id="tab-sensations-explorer"
            onClick={() => {
              onSelectSub('explorer');
              sound.playClick();
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              currentSub === 'explorer'
                ? 'bg-white text-rose-900 shadow-md scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <span>👅</span>
            <span>{t('subnavTasteExplorer')}</span>
          </button>

          <button
            id="tab-sensations-sorter"
            onClick={() => {
              onSelectSub('sorter');
              sound.playClick();
              sound.speak(
                language === 'az'
                  ? "Hissləri Qruplaşdırma Oyunu! Dadlı qidaları uyğun qaba yerləşdirin!"
                  : language === 'tr'
                  ? "Duyuları Eşleştirme Oyunu! Lezzetli yiyecekleri doğru kaseye yerleştirin!"
                  : language === 'ru'
                  ? "Игра в сортировку ощущений! Разложите вкусные продукты по нужным тарелочкам!"
                  : "Sensation Sorting Challenge! Sort each delicious food into the right bowl!"
              );
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              currentSub === 'sorter'
                ? 'bg-amber-400 text-slate-900 shadow-md scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <span>🥣</span>
            <span>{t('subnavSensationsSorter')}</span>
          </button>
        </div>

        <div className="absolute right-6 -bottom-6 text-white/10 text-9xl font-black select-none pointer-events-none">
          🍓
        </div>
      </div>

      {/* --- SUBSECTION 3.1: SENSATION EXPLORER --- */}
      {currentSub === 'explorer' && (
        <div className="space-y-6">
          {/* 5 Sensation Category Buttons */}
          <div className="bg-white rounded-2xl p-3 border border-rose-100 shadow-xs flex flex-wrap items-center gap-2 overflow-x-auto">
            <button
              onClick={() => {
                setSelectedSensation('all');
                sound.playClick();
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedSensation === 'all'
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {language === 'az' ? `Bütün Qidalar (${FOOD_ITEMS.length})` : language === 'tr' ? `Tüm Yiyecekler (${FOOD_ITEMS.length})` : language === 'ru' ? `Все продукты (${FOOD_ITEMS.length})` : `All Foods (${FOOD_ITEMS.length})`}
            </button>

            <button
              id="filter-sensation-sweet"
              onClick={() => {
                setSelectedSensation('sweet');
                sound.playClick();
                sound.speak(
                  language === 'az'
                    ? "Şirin! Bal, şokolad, mürəbbə və çiyələk!"
                    : language === 'tr'
                    ? "Tatlı! Bal, çikolata, reçel ve çilek!"
                    : language === 'ru'
                    ? "Сладкое! Мед, шоколад, джем и клубничка!"
                    : "Sweet! Honey, chocolate, jam, and strawberries!"
                );
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                selectedSensation === 'sweet'
                  ? 'bg-pink-600 text-white shadow-xs scale-105'
                  : 'bg-pink-50 text-pink-700 hover:bg-pink-100'
              }`}
            >
              <span>🍯</span>
              <span>3.1 {t('sensationSweet')}</span>
            </button>

            <button
              id="filter-sensation-spicy"
              onClick={() => {
                setSelectedSensation('spicy');
                sound.playClick();
                sound.speak(
                  language === 'az'
                    ? "Acı və kəskin dad! Qırmızı bibər və vasabi!"
                    : language === 'tr'
                    ? "Acı ve keskin tat! Kırmızı biber ve vazabi!"
                    : language === 'ru'
                    ? "Острый и пряный вкус! Красный перец и васаби!"
                    : "Spicy and hot taste! Red peppers and wasabi!"
                );
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                selectedSensation === 'spicy'
                  ? 'bg-red-600 text-white shadow-xs scale-105'
                  : 'bg-red-50 text-red-700 hover:bg-red-100'
              }`}
            >
              <Flame className="w-4 h-4 text-red-500" />
              <span>3.2 {t('sensationSpicy')}</span>
            </button>

            <button
              id="filter-sensation-sour"
              onClick={() => {
                setSelectedSensation('sour');
                sound.playClick();
                sound.speak(
                  language === 'az'
                    ? "Turş! Limon və xırçıltılı yaşıl alça!"
                    : language === 'tr'
                    ? "Ekşi! Limon ve kütür kütür yeşil erik!"
                    : language === 'ru'
                    ? "Кислое! Лимон и хрустящая зеленая алыча!"
                    : "Sour! Lemons and crisp green cherry plums!"
                );
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                selectedSensation === 'sour'
                  ? 'bg-amber-500 text-white shadow-xs scale-105'
                  : 'bg-yellow-50 text-yellow-800 hover:bg-yellow-100'
              }`}
            >
              <span className="flex items-center gap-1">
                <span>🍋</span>
                <img
                  src="/images/green_sour_cherry_plum_icon.svg"
                  alt="Green Cherry Plum"
                  className="w-3.5 h-3.5 object-contain inline-block"
                />
              </span>
              <span>3.3 {t('sensationSour')}</span>
            </button>

            <button
              id="filter-sensation-hot"
              onClick={() => {
                setSelectedSensation('hot');
                sound.playClick();
                sound.speak(
                  language === 'az'
                    ? "İsti hərarət! Buxarlanan şorba və isti çay!"
                    : language === 'tr'
                    ? "Sıcak sıcaklık! Dumanı tüten çorba ve sıcak çay!"
                    : language === 'ru'
                    ? "Горячее! Согревающий суп и горячий чай!"
                    : "Hot temperature! Steaming soup and tea!"
                );
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                selectedSensation === 'hot'
                  ? 'bg-orange-600 text-white shadow-xs scale-105'
                  : 'bg-orange-50 text-orange-800 hover:bg-orange-100'
              }`}
            >
              <span>🍲</span>
              <span>3.4 {t('sensationHot')}</span>
            </button>

            <button
              id="filter-sensation-cold"
              onClick={() => {
                setSelectedSensation('cold');
                sound.playClick();
                sound.speak(
                  language === 'az'
                    ? "Soyuq hərarət! Şaxtalı dondurma və buz parçası!"
                    : language === 'tr'
                    ? "Soğuk sıcaklık! Buz gibi dondurma ve buz küpleri!"
                    : language === 'ru'
                    ? "Холодное! Морозное мороженое и кубики льда!"
                    : "Cold temperature! Frosty ice cream and ice cubes!"
                );
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                selectedSensation === 'cold'
                  ? 'bg-sky-600 text-white shadow-xs scale-105'
                  : 'bg-sky-50 text-sky-800 hover:bg-sky-100'
              }`}
            >
              <Snowflake className="w-4 h-4 text-sky-500" />
              <span>3.5 {t('sensationCold')}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Food Flashcards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredFoods.map((food) => {
                const isSelected = selectedFood.id === food.id;
                const locFood = getLocalizedFood(food);
                return (
                  <div
                    key={food.id}
                    id={`food-card-${food.id}`}
                    onClick={() => handleFeedFood(food)}
                    className={`bg-white rounded-2xl border p-4 shadow-xs hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group ${
                      isSelected
                        ? 'border-rose-500 ring-2 ring-rose-200 bg-rose-50/20 scale-[1.02]'
                        : 'border-slate-200'
                    }`}
                  >
                    <div>
                      <div className="relative h-36 rounded-xl overflow-hidden mb-3">
                        <img
                          src={food.image}
                          alt={locFood.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                          <FoodIcon food={food} className="text-xs" imgClassName="w-3.5 h-3.5 object-contain inline-block" />
                          <span>{locFood.tasteCategory}</span>
                        </div>
                        <div className={`absolute top-2 right-2 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase border ${getSensationColor(food.sensation)}`}>
                          {getSensationLabel(food.sensation)}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-base text-slate-900 group-hover:text-rose-600">
                          {locFood.name}
                        </h4>
                        <FoodIcon food={food} className="text-2xl" imgClassName="w-7 h-7 object-contain inline-block" />
                      </div>

                      <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {locFood.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFeedFood(food);
                        }}
                        className="py-1.5 px-3 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
                      >
                        <span>🍽️ {t('feedMunchy')}</span>
                      </button>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {language === 'az' ? 'Dadına bax' : language === 'tr' ? 'Tadına bak' : language === 'ru' ? 'Попробовать' : 'Tap to taste'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Interactive Tasting Stage with Munchy Mascot */}
            <div className="lg:col-span-5 space-y-4">
              {/* Mascot Tasting Stage */}
              {(() => {
                const selectedLoc = getLocalizedFood(selectedFood);
                const currentBubble = mascotBubble || selectedLoc.spokenQuote;
                return (
                  <div className="bg-white rounded-3xl p-6 border border-rose-200 shadow-md text-center space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                      <span>
                        {language === 'az' ? 'Dad Eksperti: Mançi' : language === 'tr' ? 'Lezzet Testçisi: Munchy' : language === 'ru' ? 'Дегустатор: Манчи' : 'Taste Tester: Munchy'}
                      </span>
                    </div>

                    {/* Animated Mascot Character */}
                    <MascotCharacter
                      expression={selectedFood.mascotReaction.expression}
                      speechBubble={currentBubble}
                      size="md"
                    />

                    {/* Current Food Details */}
                    <div className="pt-3 border-t border-slate-100 text-left space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            {language === 'az' ? 'Cari Qida Hissi:' : language === 'tr' ? 'Şu Anki Yiyecek Hissi:' : language === 'ru' ? 'Текущее вкусовое ощущение:' : 'Current Food Sensation:'}
                          </span>
                          <h4 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                            <FoodIcon food={selectedFood} className="text-2xl" imgClassName="w-7 h-7 object-contain inline-block" />
                            <span>{selectedLoc.name}</span>
                          </h4>
                        </div>
                        <span className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase border ${getSensationColor(selectedFood.sensation)}`}>
                          {getSensationLabel(selectedFood.sensation)}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {selectedLoc.description}
                      </p>

                      {/* Speech Sentence Builder (How to express sensations) */}
                      <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 space-y-1">
                        <span className="font-extrabold text-amber-800 flex items-center gap-1">
                          {language === 'az' ? '🗣️ Necə hiss etdiyini de:' : language === 'tr' ? '🗣️ Nasıl hissettirdiğini söyle:' : language === 'ru' ? '🗣️ Как выразить это чувство:' : '🗣️ How to tell someone how it feels:'}
                        </span>
                        <p className="font-medium italic leading-relaxed">
                          "{selectedLoc.funTip}"
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          sound.playSensationSound(selectedFood.sensation);
                          sound.speak(`${selectedLoc.name}. ${getSensationLabel(selectedFood.sensation)}. ${selectedLoc.funTip}`, language);
                        }}
                        className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>
                          {language === 'az' ? 'Necə hiss olunduğunu tələffüz et' : language === 'tr' ? 'Nasıl hissettirdiğini telaffuz et' : language === 'ru' ? 'Потренируйся произносить ощущения' : 'Practice Saying How It Feels'}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* --- SUBSECTION 3.2: SENSATION SORTING GAME --- */}
      {currentSub === 'sorter' && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 border-2 border-pink-300 shadow-md space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-extrabold">
              <Award className="w-4 h-4 text-pink-600" />
              <span>
                {language === 'az' ? `Qruplaşdırma Xalı: ${sorterScore} Düzgün Tapıldı` : language === 'tr' ? `Eşleştirme Puanı: ${sorterScore} Doğru Bilindi` : language === 'ru' ? `Счет: ${sorterScore} правильно` : `Sorting Score: ${sorterScore} Foods Correctly Categorized`}
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-800 font-display">
              {t('sorterTitle')} 🥣👅
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {t('sorterSubtitle')}
            </p>
          </div>

          {/* Current Food to Sort */}
          {sorterQueue[currentSorterIndex] && (() => {
            const curFood = sorterQueue[currentSorterIndex];
            const curFoodLoc = getLocalizedFood(curFood);
            return (
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-center space-y-3">
                <div className="w-28 h-28 mx-auto rounded-2xl overflow-hidden border-2 border-white shadow-md">
                  <img
                    src={curFood.image}
                    alt={curFoodLoc.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <FoodIcon food={curFood} className="text-3xl" imgClassName="w-9 h-9 object-contain inline-block" />
                  <h4 className="text-lg font-extrabold text-slate-900 mt-1">
                    {curFoodLoc.name}
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mt-0.5">
                    {curFoodLoc.description}
                  </p>
                </div>

                {sorterFeedback && (
                  <div className={`p-2.5 rounded-xl font-bold text-xs sm:text-sm ${
                    sorterIsCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {sorterFeedback}
                  </div>
                )}
              </div>
            );
          })()}

          {/* 5 Sensation Bowls */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            <button
              id="sort-bowl-sweet"
              onClick={() => handleSortFood('sweet')}
              className="p-3.5 rounded-2xl bg-pink-50 hover:bg-pink-100 border-2 border-pink-200 text-pink-900 font-bold text-xs sm:text-sm flex flex-col items-center justify-center transition-transform active:scale-95 shadow-xs text-center"
            >
              <span>{t('sensationSweet')}</span>
            </button>

            <button
              id="sort-bowl-spicy"
              onClick={() => handleSortFood('spicy')}
              className="p-3.5 rounded-2xl bg-red-50 hover:bg-red-100 border-2 border-red-200 text-red-900 font-bold text-xs sm:text-sm flex flex-col items-center justify-center transition-transform active:scale-95 shadow-xs text-center"
            >
              <span>{t('sensationSpicy')}</span>
            </button>

            <button
              id="sort-bowl-sour"
              onClick={() => handleSortFood('sour')}
              className="p-3.5 rounded-2xl bg-yellow-50 hover:bg-yellow-100 border-2 border-yellow-300 text-yellow-900 font-bold text-xs sm:text-sm flex flex-col items-center justify-center transition-transform active:scale-95 shadow-xs text-center"
            >
              <span>{t('sensationSour')}</span>
            </button>

            <button
              id="sort-bowl-hot"
              onClick={() => handleSortFood('hot')}
              className="p-3.5 rounded-2xl bg-orange-50 hover:bg-orange-100 border-2 border-orange-200 text-orange-900 font-bold text-xs sm:text-sm flex flex-col items-center justify-center transition-transform active:scale-95 shadow-xs text-center"
            >
              <span>{t('sensationHot')}</span>
            </button>

            <button
              id="sort-bowl-cold"
              onClick={() => handleSortFood('cold')}
              className="p-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100 border-2 border-sky-200 text-sky-900 font-bold text-xs sm:text-sm flex flex-col items-center justify-center transition-transform active:scale-95 shadow-xs text-center"
            >
              <span>{t('sensationCold')}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
