import React, { useState } from 'react';
import { UNIVERSE_ELEMENTS } from '../data/universeData';
import { UniverseElement } from '../types';
import { sound } from '../utils/soundEngine';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Volume2, Compass, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export const UniverseExplorer: React.FC = () => {
  const { t, getLocalizedUniverse, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Celestial Body' | 'Cosmic Phenomenon' | 'Natural Phenomenon'>('All');
  const [selectedElement, setSelectedElement] = useState<UniverseElement>(UNIVERSE_ELEMENTS[0]);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizQuestionIndex, setQuizQuestionIndex] = useState<number>(0);
  const [quizAnswered, setQuizAnswered] = useState<boolean>(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);

  const localizedCurrent = getLocalizedUniverse(selectedElement);

  const filteredElements = UNIVERSE_ELEMENTS.filter(el => {
    return selectedCategory === 'All' || el.category === selectedCategory;
  });

  const handleSelectElement = (el: UniverseElement) => {
    setSelectedElement(el);
    sound.playClick();
    sound.playCosmicSound(el.soundType);
    const loc = getLocalizedUniverse(el);
    sound.speak(`${loc.name}. ${loc.description}`, language, el.id);
  };

  // Localized Cosmic Questions
  const localizedQuizData = {
    az: [
      {
        question: 'Günəş sistemimizin mərkəzində yerləşən nəhəng göy cismi hansıdır?',
        options: ['Qızılı Günəş', 'Mars Planeti', 'İşıqlı Ay'],
        correctIndex: 0,
        explanation: 'Günəş mərkəzdə parıldayan və bütün sistemimizi qızdıran nəhəng ulduzdur!'
      },
      {
        question: 'Qütb səmasında dalğalanan yaşıl və bənövşəyi rəngli sehirli işıqlar nədir?',
        options: ['Axan Ulduzlar', 'Şimal Parıltısı (Avrora)', 'Göyqurşağı'],
        correctIndex: 1,
        explanation: 'Şimal Parıltısı günəş hissəcikləri Yer atmosferi ilə toqquşanda yaranır!'
      },
      {
        question: 'Günəş şüalarını səmada yeddi rəngli qövsə parçalayan nədir?',
        options: ['Yağış Damcıları', 'Vulkan Külü', 'Ay Tozu'],
        correctIndex: 0,
        explanation: 'Yağış damcıları kiçik prizma kimi günəş işığını əlvan göyqurşağına çevirir!'
      },
      {
        question: 'Yer kürəsinin okeanlarında qabarma və çəkilmə yaradan göy cismi hansıdır?',
        options: ['Saturn Halqaları', 'İşıqlı Ay', 'Komet'],
        correctIndex: 1,
        explanation: 'Ayın cazibə qüvvəsi okean sularını özünə çəkərək qabarma və çəkilmə yaradır!'
      },
      {
        question: 'Kainatda maye suya, təmiz havaya və canlı aləmə malik yeganə məlum planet hansıdır?',
        options: ['Doğma Yer Kürəsi', 'Yupiter', 'Merkuri'],
        correctIndex: 0,
        explanation: 'Yer kürəsi bizim əziz evimizdir və canlıların yaşadığı yeganə məlum planetdir!'
      },
      {
        question: 'Milyardlarla parıldayan buz və qaya parçalarından ibarət nəhəng halqaları ilə məşhur planet hansıdır?',
        options: ['Venera', 'Halqalı Saturn', 'Neptun'],
        correctIndex: 1,
        explanation: 'Saturn füsunkar buz halqaları ilə Günəş sistemimizin ən gözəl incisidir!'
      }
    ],
    tr: [
      {
        question: 'Güneş sistemimizin tam merkezinde bulunan dev gök cismi hangisidir?',
        options: ['Altın Güneş', 'Mars Gezegeni', 'Parlayan Ay'],
        correctIndex: 0,
        explanation: 'Güneş, sistemimizin merkezinde tüm dünyamızı ısıtan devasa bir yıldızdır!'
      },
      {
        question: 'Kutup gecelerinde gökyüzünde dans eden yeşil ve mor ışıltılara ne denir?',
        options: ['Kayan Yıldızlar', 'Kutup Işıkları (Aurora)', 'Gökkuşağı'],
        correctIndex: 1,
        explanation: 'Kutup Işıkları, güneş parçacıkları Dünya atmosferiyle buluştuğunda gökyüzünü aydınlatır!'
      },
      {
        question: 'Beyaz güneş ışığını gökyüzünde yedi renkli kuşağa ayıran nedir?',
        options: ['Yağmur Damlaları', 'Volkan Külü', 'Ay Tozu'],
        correctIndex: 0,
        explanation: 'Yağmur damlaları minik cam prizmalar gibi güneş ışığını gökkuşağına çevirir!'
      },
      {
        question: 'Okyanuslarda gelgit (medcezir) olayına neden olan gök cismi hangisidir?',
        options: ['Satürn Halkaları', 'Parlayan Ay', 'Kuyrukluyıldız'],
        correctIndex: 1,
        explanation: 'Ay’ın yerçekimi okyanus sularını çekerek yükselip alçalmasına neden olur!'
      },
      {
        question: 'Evrende sıvı suya, temiz havaya ve canlı yaşama sahip olduğu bilinen tek gezegen hangisidir?',
        options: ['Gezegenimiz Dünya', 'Jüpiter', 'Merkür'],
        correctIndex: 0,
        explanation: 'Dünya, yaşam barındıran eşsiz ve değerli mavi yuvamızdır!'
      },
      {
        question: 'Milyarlarca parıldayan buz ve kaya parçasından oluşan dev halkalarıyla ünlü gezegen hangisidir?',
        options: ['Venüs', 'Halkalı Satürn', 'Neptün'],
        correctIndex: 1,
        explanation: 'Satürn, muhteşem buzdan halkalarıyla Güneş Sistemi’nin mücevheridir!'
      }
    ],
    ru: [
      {
        question: 'Какое гигантское небесное тело находится в самом центре Солнечной системы?',
        options: ['Золотое Солнце', 'Планета Марс', 'Сияющая Луна'],
        correctIndex: 0,
        explanation: 'Солнце — это пылающая звезда в центре, согревающая всю нашу планетную семью!'
      },
      {
        question: 'Какие изумрудные и фиолетовые переливы танцуют в ночном полярном небе?',
        options: ['Падающие звезды', 'Северное сияние (Аврора)', 'Радуга'],
        correctIndex: 1,
        explanation: 'Северное сияние возникает, когда солнечные частицы встречаются с атмосферой Земли!'
      },
      {
        question: 'Что разделяет солнечный луч на семь разноцветных полос радуги в небе?',
        options: ['Капли дождя', 'Вулканический пепел', 'Лунная пыль'],
        correctIndex: 0,
        explanation: 'Капельки дождя работают как хрустальные призмы, расщепляя солнечный луч на радугу!'
      },
      {
        question: 'Гравитация какого светила вызывает приливы и отливы в земных океанах?',
        options: ['Кольца Сатурна', 'Сияющая Луна', 'Комета'],
        correctIndex: 1,
        explanation: 'Притяжение Луны поднимает и опускает воды мирового океана!'
      },
      {
        question: 'Какая планета является единственным известным домом с жидкой водой и цветущей жизнью?',
        options: ['Планета Земля', 'Юпитер', 'Меркурий'],
        correctIndex: 0,
        explanation: 'Земля — наш драгоценный голубой дом, наполненный жизнью!'
      },
      {
        question: 'Какая планета славится великолепными широкими кольцами из миллиардов льдинок?',
        options: ['Венера', 'Окольцованный Сатурн', 'Нептун'],
        correctIndex: 1,
        explanation: 'Сатурн украшен потрясающими кольцами из миллиардов сияющих ледяных осколков!'
      }
    ],
    en: [
      {
        question: 'Which giant celestial body is at the center of our solar system?',
        options: ['The Golden Sun', 'Planet Mars', 'The Moon'],
        correctIndex: 0,
        explanation: 'The Sun is the giant glowing star at the center that warms our whole solar system!'
      },
      {
        question: 'What dancing emerald and violet lights swirl across polar night skies?',
        options: ['Shooting Stars', 'Aurora Borealis (Northern Lights)', 'Rainbows'],
        correctIndex: 1,
        explanation: 'The Aurora Borealis dances across cold polar skies when solar particles meet Earth’s atmosphere!'
      },
      {
        question: 'What makes white sunlight split into seven colorful arc bands in the sky?',
        options: ['Falling Raindrops', 'Volcano Ash', 'Moon Dust'],
        correctIndex: 0,
        explanation: 'Raindrops act like tiny glass prisms that bend and split sunlight into a rainbow!'
      },
      {
        question: 'What celestial object’s gravity pulls on Earth’s oceans to cause high and low tides?',
        options: ['Saturn’s Rings', 'The Glowing Moon', 'A Comet'],
        correctIndex: 1,
        explanation: 'The Moon plays cosmic tug-of-war with Earth’s water to create ocean tides!'
      },
      {
        question: 'Which planet is the only known celestial body blessed with liquid water and blooming life?',
        options: ['Planet Earth', 'Jupiter', 'Mercury'],
        correctIndex: 0,
        explanation: 'Planet Earth is our precious home and the only known haven for life in the cosmos!'
      },
      {
        question: 'Which planet is famous for magnificent wide rings made of billions of shimmering ice pieces?',
        options: ['Venus', 'Ringed Saturn', 'Neptune'],
        correctIndex: 1,
        explanation: 'Saturn is known as the jewel of the Solar System because of its breathtaking icy rings!'
      }
    ]
  };

  const quizItems = localizedQuizData[language] || localizedQuizData.az;

  const handleAnswerQuiz = (optionIdx: number) => {
    if (quizAnswered) return;
    setQuizAnswered(true);
    setSelectedQuizOption(optionIdx);

    const isCorrect = optionIdx === quizItems[quizQuestionIndex].correctIndex;
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
      sound.playSuccess();
      const praise = language === 'az' ? 'Afərin! Düzgün cavab tapdın!' : t('correctAwesome');
      sound.speak(praise, language);
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch {}
    } else {
      sound.playClick();
      const retryText = language === 'az' ? 'Yenidən cəhd et!' : t('tryAgain');
      sound.speak(`${retryText} ${quizItems[quizQuestionIndex].explanation}`, language);
    }
  };

  const nextQuizQuestion = () => {
    setQuizQuestionIndex(prev => (prev + 1) % quizItems.length);
    setQuizAnswered(false);
    setSelectedQuizOption(null);
    sound.playClick();
  };

  const categoryLabels: Record<string, Record<string, string>> = {
    All: { az: '🌟 Bütün Möcüzələr', tr: '🌟 Tüm Harikalar', ru: '🌟 Все чудеса', en: '🌟 All Wonders' },
    'Celestial Body': { az: 'Səma Cisimləri', tr: 'Gök Cisimleri', ru: 'Небесные тела', en: 'Celestial Bodies' },
    'Cosmic Phenomenon': { az: 'Kosmik Hadisələr', tr: 'Kozmik Olaylar', ru: 'Космические явления', en: 'Cosmic Phenomena' },
    'Natural Phenomenon': { az: 'Təbiət Hadisələri', tr: 'Doğa Olayları', ru: 'Природные явления', en: 'Natural Phenomena' }
  };

  return (
    <div className="space-y-6" id="universe-explorer-container">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white rounded-3xl p-6 shadow-xl shadow-indigo-950/20 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-indigo-200 text-xs font-bold mb-3 border border-indigo-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{t('subnavUniverse')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-2">
            {t('universeTitle')} ✨🪐🌌
          </h2>
          <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
            {t('universeSubtitle')}
          </p>
        </div>

        {/* Floating Stars Background */}
        <div className="absolute right-6 top-4 text-amber-200/20 text-8xl select-none pointer-events-none animate-pulse">
          ✨
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="bg-white rounded-2xl p-3 border border-indigo-100 shadow-xs flex flex-wrap items-center gap-2">
        {(['All', 'Celestial Body', 'Cosmic Phenomenon', 'Natural Phenomenon'] as const).map((cat) => {
          const label = categoryLabels[cat]?.[language] || categoryLabels[cat]?.az || cat;
          return (
            <button
              key={cat}
              id={`filter-universe-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => {
                setSelectedCategory(cat);
                sound.playClick();
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Main Grid: Visual Cards & Spotlight Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Explorer Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredElements.map((item) => {
            const isSelected = selectedElement.id === item.id;
            const locItem = getLocalizedUniverse(item);
            return (
              <div
                key={item.id}
                id={`universe-card-${item.id}`}
                onClick={() => handleSelectElement(item)}
                className={`bg-white rounded-2xl border p-4 shadow-xs hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group ${
                  isSelected ? 'border-indigo-500 ring-2 ring-indigo-200 bg-indigo-50/20' : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="relative h-36 rounded-xl overflow-hidden mb-3">
                    <img
                      src={item.image}
                      alt={locItem.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      {locItem.category}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.emoji}</span>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-indigo-600">
                      {locItem.name}
                    </h4>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                    {locItem.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-indigo-700 font-bold">
                  <span className="flex items-center gap-1">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{locItem.soundLabel}</span>
                  </span>
                  <span className="text-[11px] text-slate-400 group-hover:text-indigo-600">{t('details')} ➔</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep Spotlight Card & Interactive Cosmic Quiz */}
        <div className="lg:col-span-5 space-y-6">
          {/* Spotlight Detailed Element */}
          <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{selectedElement.emoji}</span>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-display">
                    {localizedCurrent.name}
                  </h3>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    {localizedCurrent.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  sound.playCosmicSound(selectedElement.soundType);
                  sound.speak(
                    `${localizedCurrent.name}. ${localizedCurrent.description}. ${localizedCurrent.kidWonder}`,
                    language,
                    selectedElement.id
                  );
                }}
                className="p-2 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
                title={t('listenSound')}
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {localizedCurrent.description}
            </p>

            {/* Kid Wonder Prompt */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-xs sm:text-sm text-indigo-950 space-y-1">
              <span className="font-extrabold text-indigo-700 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> {t('cosmicWonder')}:
              </span>
              <p className="leading-snug">{localizedCurrent.kidWonder}</p>
            </div>

            {/* Fun Facts */}
            <div className="space-y-1.5 pt-1">
              <h5 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                {t('didYouKnow')}
              </h5>
              {localizedCurrent.funFacts.map((fact, idx) => (
                <div key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span>{fact}</span>
                </div>
              ))}
            </div>

            {/* Audio Triggers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              <button
                id={`cosmic-audio-${selectedElement.id}`}
                onClick={() => sound.playCosmicSound(selectedElement.soundType)}
                className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95"
              >
                <Volume2 className="w-4 h-4 shrink-0" />
                <span className="truncate">{t('listenCosmicHum')}: {localizedCurrent.soundLabel}</span>
              </button>

              <button
                id={`speak-element-${selectedElement.id}`}
                onClick={() => {
                  sound.speak(
                    `${localizedCurrent.name}. ${localizedCurrent.description}. ${localizedCurrent.kidWonder}`,
                    language,
                    selectedElement.id
                  );
                }}
                className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95"
              >
                <Volume2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>
                  {language === 'az'
                    ? 'Məlumatı Səsləndir'
                    : language === 'tr'
                    ? 'Bilgileri Seslendir'
                    : language === 'ru'
                    ? 'Озвучить рассказ'
                    : 'Listen to Story'}
                </span>
              </button>
            </div>
          </div>

          {/* Interactive Cosmic Quiz Box */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-5 border border-indigo-800 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-300">
                <Award className="w-4 h-4 text-amber-400" />
                <span>
                  {language === 'az'
                    ? 'Kosmik Viktorina'
                    : language === 'tr'
                    ? 'Kozmik Test'
                    : language === 'ru'
                    ? 'Космическая викторина'
                    : 'Cosmic Quiz'} • {t('question')} {quizQuestionIndex + 1} / {quizItems.length}
                </span>
              </div>
              <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-amber-400 text-slate-950">
                {t('score')}: {quizScore}
              </span>
            </div>

            <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
              {quizItems[quizQuestionIndex].question}
            </h4>

            <div className="space-y-2">
              {quizItems[quizQuestionIndex].options.map((opt, optIdx) => {
                const isSelected = selectedQuizOption === optIdx;
                const isCorrect = optIdx === quizItems[quizQuestionIndex].correctIndex;
                let btnStyle = 'bg-white/10 hover:bg-white/20 border-indigo-700/50 text-white';

                if (quizAnswered) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-600 border-emerald-500 text-white font-bold';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-600 border-rose-500 text-white';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    disabled={quizAnswered}
                    onClick={() => handleAnswerQuiz(optIdx)}
                    className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-medium text-left transition-all ${btnStyle}`}
                  >
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {quizAnswered && (
              <div className="pt-2 flex items-center justify-between border-t border-indigo-800/60">
                <p className="text-xs text-indigo-200">
                  {quizItems[quizQuestionIndex].explanation}
                </p>
                <button
                  onClick={nextQuizQuestion}
                  className="px-4 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs whitespace-nowrap ml-3"
                >
                  {language === 'az'
                    ? 'Növbəti Sual ➔'
                    : language === 'tr'
                    ? 'Sonraki Soru ➔'
                    : language === 'ru'
                    ? 'Следующий вопрос ➔'
                    : 'Next Question ➔'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
