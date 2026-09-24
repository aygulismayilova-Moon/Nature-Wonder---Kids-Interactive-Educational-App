import React, { useState } from 'react';
import { PLANE_SHAPES, SOLID_SHAPES } from '../data/shapesData';
import { PlaneShape, SolidShape } from '../types';
import { sound } from '../utils/soundEngine';
import { useLanguage } from '../context/LanguageContext';
import { Shapes, Volume2, Sparkles, Award, RotateCw, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ShapesExplorerProps {
  currentSub: 'plane' | 'solid' | 'quiz';
  onSelectSub: (sub: 'plane' | 'solid' | 'quiz') => void;
}

export const ShapesExplorer: React.FC<ShapesExplorerProps> = ({ currentSub, onSelectSub }) => {
  const { t, getLocalizedPlane, getLocalizedSolid, language } = useLanguage();

  // Plane shape state
  const [selectedPlane, setSelectedPlane] = useState<PlaneShape>(PLANE_SHAPES[0]);
  const [highlightSides, setHighlightSides] = useState<boolean>(false);
  const [highlightCorners, setHighlightCorners] = useState<boolean>(false);

  // Solid shape state
  const [selectedSolid, setSelectedSolid] = useState<SolidShape>(SOLID_SHAPES[0]);
  const [cubeRotationX] = useState<number>(-20);
  const [cubeRotationY, setCubeRotationY] = useState<number>(35);

  // Game state
  const [gameQuestionIndex, setGameQuestionIndex] = useState<number>(0);
  const [gameScore, setGameScore] = useState<number>(0);
  const [gameAnswered, setGameAnswered] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const localizedPlane = getLocalizedPlane(selectedPlane);
  const localizedSolid = getLocalizedSolid(selectedSolid);

  const localizedShapeRiddles = {
    az: [
      {
        object: 'Ləziz Pepperoni Pizza Dilimi 🍕',
        clue: 'Onun 3 düz tərəfi və 3 iti küncü var!',
        correctShape: 'Üçbucaq',
        options: ['Kvadrat', 'Üçbucaq', 'Dairə', 'Düzbucaqlı']
      },
      {
        object: 'Hündür Ev Qapısı 🚪',
        clue: 'İki uzun və iki qısa tərəfi olan 4 tərəfli dördbucaqlı fiqur.',
        correctShape: 'Düzbucaqlı',
        options: ['Düzbucaqlı', 'Konus', 'Üçbucaq', 'Kub']
      },
      {
        object: 'Dondurma Külahı 🍦',
        clue: 'Dairəvi əsası olan və yuxarıya doğru sivrilən 3D fəza fiquru!',
        correctShape: 'Konus',
        options: ['Kürə', 'Silindr', 'Konus', 'Kub']
      },
      {
        object: 'Oyun Zəri 🎲',
        clue: '6 kvadrat düz üzü və 8 təpə nöqtəsi olan 3D fəza fiquru!',
        correctShape: 'Kub',
        options: ['Konus', 'Kub', 'Piramida', 'Kürə']
      },
      {
        object: 'Səmada Uçan Çərpələng 🪁',
        clue: 'Almaz kimi mailli duran 4 bərabər tərəfli dördbucaqlı!',
        correctShape: 'Romb',
        options: ['Romb', 'Üçbucaq', 'Konus', 'Dairə']
      },
      {
        object: 'Şorba Konserv Qutusu 🥫',
        clue: 'İki dairəvi alt və üst qapağı olan hamar yumru 3D fəza fiquru.',
        correctShape: 'Silindr',
        options: ['Kub', 'Silindr', 'Piramida', 'Konus']
      }
    ],
    tr: [
      {
        object: 'Nefis Pizza Dilimi 🍕',
        clue: '3 düz kenarı ve 3 sivri köşesi var!',
        correctShape: 'Üçgen',
        options: ['Kare', 'Üçgen', 'Daire', 'Dikdörtgen']
      },
      {
        object: 'Giriş Kapısı 🚪',
        clue: 'İki uzun ve iki kısa kenarlı 4 kenarlı bir dörtgen.',
        correctShape: 'Dikdörtgen',
        options: ['Dikdörtgen', 'Koni', 'Üçgen', 'Küp']
      },
      {
        object: 'Dondurma Külahı 🍦',
        clue: 'Yuvarlak tabanlı ve tepesi sivri 3 boyutlu cisim!',
        correctShape: 'Koni',
        options: ['Küre', 'Silindir', 'Koni', 'Küp']
      },
      {
        object: 'Oyun Zarı 🎲',
        clue: '6 eşit kare yüzeyi ve 8 köşesi olan 3 boyutlu cisim!',
        correctShape: 'Küp',
        options: ['Koni', 'Küp', 'Piramit', 'Küre']
      },
      {
        object: 'Uçan Uçurtma 🪁',
        clue: 'Baklava dilimi gibi eğik duran 4 eşit kenarlı dörtgen!',
        correctShape: 'Eşkenar Dörtgen',
        options: ['Eşkenar Dörtgen', 'Üçgen', 'Koni', 'Daire']
      },
      {
        object: 'Konserve Kutusu 🥫',
        clue: 'İki dairesel tabanı ve yuvarlak gövdesi olan 3 boyutlu cisim.',
        correctShape: 'Silindir',
        options: ['Küp', 'Silindir', 'Piramit', 'Koni']
      }
    ],
    ru: [
      {
        object: 'Аппетитный кусочек пиццы 🍕',
        clue: 'У него 3 прямые стороны и 3 острых уголка!',
        correctShape: 'Треугольник',
        options: ['Квадрат', 'Треугольник', 'Круг', 'Прямоугольник']
      },
      {
        object: 'Высокая входная дверь 🚪',
        clue: 'Четырехугольник с двумя длинными и двумя короткими сторонами.',
        correctShape: 'Прямоугольник',
        options: ['Прямоугольник', 'Конус', 'Треугольник', 'Куб']
      },
      {
        object: 'Вафельный рожок мороженого 🍦',
        clue: 'Объемная фигура с круглым основанием и острой вершинкой!',
        correctShape: 'Конус',
        options: ['Шар', 'Цилиндр', 'Конус', 'Куб']
      },
      {
        object: 'Игральный кубик 🎲',
        clue: 'Объемная фигура с 6 квадратными гранями и 8 вершинками!',
        correctShape: 'Куб',
        options: ['Конус', 'Куб', 'Пирамида', 'Шар']
      },
      {
        object: 'Воздушный змей в небе 🪁',
        clue: 'Четырехугольник с 4 равными сторонами в форме ромбика!',
        correctShape: 'Ромб',
        options: ['Ромб', 'Треугольник', 'Конус', 'Круг']
      },
      {
        object: 'Консервная банка с супом 🥫',
        clue: 'Объемное тело с двумя круглыми донышками и гладкой поверхностью.',
        correctShape: 'Цилиндр',
        options: ['Куб', 'Цилиндр', 'Пирамида', 'Конус']
      }
    ],
    en: [
      {
        object: 'A yummy slice of Pepperoni Pizza 🍕',
        clue: 'It has 3 straight crusty sides and 3 pointy corners!',
        correctShape: 'Triangle',
        options: ['Square', 'Triangle', 'Circle', 'Rectangle']
      },
      {
        object: 'A Tall Front Door 🚪',
        clue: 'It is a 4-sided quadrilateral with two longer sides and two shorter sides.',
        correctShape: 'Rectangle',
        options: ['Rectangle', 'Cone', 'Triangle', 'Cube']
      },
      {
        object: 'An Ice Cream Waffle Cone 🍦',
        clue: 'A 3D solid with a round circular base that tapers up to one sharp tip!',
        correctShape: 'Cone',
        options: ['Sphere', 'Cylinder', 'Cone', 'Cube']
      },
      {
        object: 'A Playing Dice for Games 🎲',
        clue: 'A 3D solid with 6 square flat faces and 8 sharp corner vertices!',
        correctShape: 'Cube',
        options: ['Cone', 'Cube', 'Pyramid', 'Sphere']
      },
      {
        object: 'A Flying Diamond Kite in the Park 🪁',
        clue: 'A 4-sided quadrilateral with 4 equal sides tilted like a diamond!',
        correctShape: 'Rhombus',
        options: ['Rhombus', 'Triangle', 'Cone', 'Circle']
      },
      {
        object: 'A Soup Can in the Pantry 🥫',
        clue: 'A 3D solid with two round circular ends and a smooth curved body.',
        correctShape: 'Cylinder',
        options: ['Cube', 'Cylinder', 'Pyramid', 'Cone']
      }
    ]
  };

  const shapeGameRiddles = localizedShapeRiddles[language] || localizedShapeRiddles.az;

  const handleSelectPlane = (shape: PlaneShape) => {
    setSelectedPlane(shape);
    setHighlightSides(false);
    setHighlightCorners(false);
    sound.playClick();
    const loc = getLocalizedPlane(shape);
    sound.speak(`${loc.name}! ${loc.description}`, language, shape.id);
  };

  const handleSelectSolid = (shape: SolidShape) => {
    setSelectedSolid(shape);
    sound.playClick();
    const loc = getLocalizedSolid(shape);
    sound.speak(`${loc.name}! ${loc.description}`, language, shape.id);
  };

  const countSidesAnimation = () => {
    setHighlightSides(true);
    sound.playClick();
    sound.speak(`${t('countSides')}: ${selectedPlane.sides}!`, language);
    setTimeout(() => setHighlightSides(false), 3000);
  };

  const countCornersAnimation = () => {
    setHighlightCorners(true);
    sound.playSuccess();
    sound.speak(`${t('countCorners')}: ${selectedPlane.vertices}!`, language);
    setTimeout(() => setHighlightCorners(false), 3000);
  };

  const handleAnswerGame = (chosen: string) => {
    if (gameAnswered) return;
    setGameAnswered(true);
    setSelectedAnswer(chosen);

    const isCorrect = chosen === shapeGameRiddles[gameQuestionIndex].correctShape;
    if (isCorrect) {
      setGameScore(prev => prev + 1);
      sound.playSuccess();
      sound.speak(`${t('correctAwesome')} ${chosen}!`, language);
      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.7 }
        });
      } catch {}
    } else {
      sound.playClick();
      sound.speak(`${t('tryAgain')} ${shapeGameRiddles[gameQuestionIndex].correctShape}!`, language);
    }
  };

  const handleNextGameRiddle = () => {
    setGameQuestionIndex(prev => (prev + 1) % shapeGameRiddles.length);
    setGameAnswered(false);
    setSelectedAnswer(null);
    sound.playClick();
  };

  return (
    <div className="space-y-6" id="shapes-explorer-container">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white rounded-3xl p-6 shadow-lg shadow-amber-500/15 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-amber-100 text-xs font-bold mb-3">
            <Shapes className="w-3.5 h-3.5" />
            <span>{t('sectionShapes')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-2">
            {t('shapesTitle')} 📐🔺🧊
          </h2>
          <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
            {t('shapesSubtitle')}
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="mt-5 flex flex-wrap items-center gap-2 relative z-10">
          <button
            id="tab-plane-shapes"
            onClick={() => {
              onSelectSub('plane');
              sound.playClick();
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              currentSub === 'plane'
                ? 'bg-white text-amber-900 shadow-md scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <span>📐</span>
            <span>{t('subnavPlane')}</span>
          </button>

          <button
            id="tab-solid-shapes"
            onClick={() => {
              onSelectSub('solid');
              sound.playClick();
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              currentSub === 'solid'
                ? 'bg-white text-amber-900 shadow-md scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <span>🧊</span>
            <span>{t('subnavSolid')}</span>
          </button>

          <button
            id="tab-quiz-shapes"
            onClick={() => {
              onSelectSub('quiz');
              sound.playClick();
              sound.speak(t('shapeQuizTitle'), language);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              currentSub === 'quiz'
                ? 'bg-purple-600 text-white shadow-md scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <span>🎮</span>
            <span>{t('subnavShapesQuiz')}</span>
          </button>
        </div>

        <div className="absolute right-6 -bottom-6 text-white/10 text-9xl font-black select-none pointer-events-none">
          △
        </div>
      </div>

      {/* --- SUBSECTION 2.1: PLANE SHAPES (Triangles & Quadrilaterals) --- */}
      {currentSub === 'plane' && (
        <div className="space-y-6">
          {/* Plane Shape Selector Buttons */}
          <div className="bg-white rounded-2xl p-3 border border-amber-100 shadow-xs flex flex-wrap items-center gap-2 overflow-x-auto">
            {PLANE_SHAPES.map((shape) => {
              const isSelected = selectedPlane.id === shape.id;
              const loc = getLocalizedPlane(shape);
              return (
                <button
                  key={shape.id}
                  id={`shape-plane-btn-${shape.id}`}
                  onClick={() => handleSelectPlane(shape)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-amber-600 text-white shadow-md scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span>{loc.name}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Interactive Shape Canvas / SVG Visualizer */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                    {selectedPlane.subcategory === 'quadrilateral'
                      ? (language === 'az' ? '🔷 4 Tərəfli Dördbucaqlı' : language === 'tr' ? '🔷 4 Kenarlı Dörtgen' : language === 'ru' ? '🔷 Четырехугольник' : '🔷 4-Sided')
                      : selectedPlane.id === 'circle'
                      ? (language === 'az' ? '⚪ Əyri Xətli Dairə' : language === 'tr' ? '⚪ Yuvarlak Daire' : language === 'ru' ? '⚪ Окружность' : '⚪ Curved Circle')
                      : selectedPlane.id === 'pentagon'
                      ? (language === 'az' ? '⬟ 5 Tərəfli Beşbucaqlı' : language === 'tr' ? '⬟ 5 Kenarlı Beşgen' : language === 'ru' ? '⬟ Пятиугольник' : '⬟ 5-Sided')
                      : selectedPlane.id === 'hexagon'
                      ? (language === 'az' ? '⬡ 6 Tərəfli Altıbucaqlı' : language === 'tr' ? '⬡ 6 Kenarlı Altıgen' : language === 'ru' ? '⬡ Шестиугольник' : '⬡ 6-Sided')
                      : (language === 'az' ? '🔺 3 Tərəfli Üçbucaq' : language === 'tr' ? '🔺 3 Kenarlı Üçgen' : language === 'ru' ? '🔺 Треугольник' : '🔺 3-Sided')}
                  </span>
                  <button
                    onClick={() => {
                      sound.playClick();
                      sound.speak(`${localizedPlane.name}. ${localizedPlane.description}. ${localizedPlane.funFact}`, language);
                    }}
                    className="p-1.5 rounded-lg text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors"
                    title={t('listenSound')}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-900 font-display">
                  {localizedPlane.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  {localizedPlane.description}
                </p>
              </div>

              {/* Dynamic SVG Shape Renderer with Interactive Counters */}
              <div className="h-64 flex items-center justify-center bg-amber-50/40 rounded-2xl border border-amber-100 relative p-4">
                <svg viewBox="0 0 200 200" className="w-48 h-48 drop-shadow-md">
                  {selectedPlane.id === 'triangle' && (
                    <polygon
                      points="100,25 175,165 25,165"
                      fill="#10b981"
                      stroke={highlightSides ? '#f59e0b' : '#059669'}
                      strokeWidth={highlightSides ? '8' : '4'}
                      strokeLinejoin="round"
                      className="transition-all duration-300"
                    />
                  )}

                  {selectedPlane.id === 'square' && (
                    <rect
                      x="35"
                      y="35"
                      width="130"
                      height="130"
                      rx="4"
                      fill="#f59e0b"
                      stroke={highlightSides ? '#ef4444' : '#d97706'}
                      strokeWidth={highlightSides ? '8' : '4'}
                      className="transition-all duration-300"
                    />
                  )}

                  {selectedPlane.id === 'rectangle' && (
                    <rect
                      x="25"
                      y="50"
                      width="150"
                      height="100"
                      rx="4"
                      fill="#3b82f6"
                      stroke={highlightSides ? '#ef4444' : '#2563eb'}
                      strokeWidth={highlightSides ? '8' : '4'}
                      className="transition-all duration-300"
                    />
                  )}

                  {selectedPlane.id === 'rhombus' && (
                    <polygon
                      points="100,25 170,100 100,175 30,100"
                      fill="#a855f7"
                      stroke={highlightSides ? '#ef4444' : '#9333ea'}
                      strokeWidth={highlightSides ? '8' : '4'}
                      className="transition-all duration-300"
                    />
                  )}

                  {selectedPlane.id === 'trapezoid' && (
                    <polygon
                      points="60,40 140,40 180,160 20,160"
                      fill="#f43f5e"
                      stroke={highlightSides ? '#ef4444' : '#e11d48'}
                      strokeWidth={highlightSides ? '8' : '4'}
                      className="transition-all duration-300"
                    />
                  )}

                  {selectedPlane.id === 'circle' && (
                    <circle
                      cx="100"
                      cy="100"
                      r="70"
                      fill="#14b8a6"
                      stroke={highlightSides ? '#ef4444' : '#0d9488'}
                      strokeWidth={highlightSides ? '8' : '4'}
                      className="transition-all duration-300"
                    />
                  )}

                  {selectedPlane.id === 'pentagon' && (
                    <polygon
                      points="100,25 175,80 145,170 55,170 25,80"
                      fill="#6366f1"
                      stroke={highlightSides ? '#ef4444' : '#4f46e5'}
                      strokeWidth={highlightSides ? '8' : '4'}
                      className="transition-all duration-300"
                    />
                  )}

                  {selectedPlane.id === 'hexagon' && (
                    <polygon
                      points="100,25 165,65 165,135 100,175 35,135 35,65"
                      fill="#f97316"
                      stroke={highlightSides ? '#ef4444' : '#ea580c'}
                      strokeWidth={highlightSides ? '8' : '4'}
                      className="transition-all duration-300"
                    />
                  )}

                  {/* Highlight Corners / Vertices Effect */}
                  {highlightCorners && (
                    <g fill="#fbbf24" stroke="#ffffff" strokeWidth="2">
                      {selectedPlane.id === 'triangle' && (
                        <>
                          <circle cx="100" cy="25" r="8" />
                          <circle cx="175" cy="165" r="8" />
                          <circle cx="25" cy="165" r="8" />
                        </>
                      )}
                      {selectedPlane.id === 'square' && (
                        <>
                          <circle cx="35" cy="35" r="8" />
                          <circle cx="165" cy="35" r="8" />
                          <circle cx="165" cy="165" r="8" />
                          <circle cx="35" cy="165" r="8" />
                        </>
                      )}
                      {selectedPlane.id === 'rectangle' && (
                        <>
                          <circle cx="25" cy="50" r="8" />
                          <circle cx="175" cy="50" r="8" />
                          <circle cx="175" cy="150" r="8" />
                          <circle cx="25" cy="150" r="8" />
                        </>
                      )}
                      {selectedPlane.id === 'rhombus' && (
                        <>
                          <circle cx="100" cy="25" r="8" />
                          <circle cx="170" cy="100" r="8" />
                          <circle cx="100" cy="175" r="8" />
                          <circle cx="30" cy="100" r="8" />
                        </>
                      )}
                    </g>
                  )}
                </svg>
              </div>

              {/* Side & Vertex Counter Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  id="count-sides-btn"
                  onClick={countSidesAnimation}
                  className="py-2.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-bold text-xs flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <span>📏</span>
                  <span>{t('countSides')} ({selectedPlane.sides})</span>
                </button>

                <button
                  id="count-vertices-btn"
                  onClick={countCornersAnimation}
                  className="py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 font-bold text-xs flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>{t('countCorners')} ({selectedPlane.vertices})</span>
                </button>
              </div>
            </div>

            {/* Right Column: Real-World Examples & Geometric Secrets */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <Eye className="w-4 h-4 text-amber-500" />
                  <span>{t('whereToSpot')}:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {localizedPlane.realWorldExamples.map((ex, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        sound.playClick();
                        sound.speak(`${ex.label}. ${ex.hint}`, language);
                      }}
                      className="p-3.5 rounded-2xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200/80 hover:border-amber-200 cursor-pointer transition-all flex items-start gap-3 group"
                    >
                      <span className="text-3xl group-hover:scale-110 transition-transform">{ex.emoji}</span>
                      <div>
                        <h5 className="font-bold text-xs sm:text-sm text-slate-800">
                          {ex.label}
                        </h5>
                        <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                          {ex.hint}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fun Geometric Fact */}
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-900">
                  <span className="font-bold">✨ {t('shapeSecret')}: </span>
                  {localizedPlane.funFact}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SUBSECTION 2.2: SOLID SHAPES (Cube, Cone & 3D) --- */}
      {currentSub === 'solid' && (
        <div className="space-y-6">
          {/* Solid Shape Selector Buttons */}
          <div className="bg-white rounded-2xl p-3 border border-orange-100 shadow-xs flex flex-wrap items-center gap-2 overflow-x-auto">
            {SOLID_SHAPES.map((shape) => {
              const isSelected = selectedSolid.id === shape.id;
              const loc = getLocalizedSolid(shape);
              return (
                <button
                  key={shape.id}
                  id={`shape-solid-btn-${shape.id}`}
                  onClick={() => handleSelectSolid(shape)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-orange-600 text-white shadow-md scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                  <span>{loc.name}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: 3D Isometric / Perspective Viewer */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-800">
                    {language === 'az' ? '🧊 3D Fəza Fiquru' : language === 'tr' ? '🧊 3D Uzay Figürü' : language === 'ru' ? '🧊 3D Объемная фигура' : '🧊 3D Solid Figure'}
                  </span>
                  <button
                    onClick={() => {
                      sound.playClick();
                      sound.speak(`${localizedSolid.name}. ${localizedSolid.description}`, language);
                    }}
                    className="p-1.5 rounded-lg text-orange-700 bg-orange-50 hover:bg-orange-100 transition-colors"
                    title={t('listenSound')}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-900 font-display">
                  {localizedSolid.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  {localizedSolid.description}
                </p>
              </div>

              {/* 3D Model Stage with Interactive Rotation */}
              <div 
                className="h-64 flex items-center justify-center bg-gradient-to-b from-orange-50/50 to-amber-50/50 rounded-2xl border border-orange-100 relative overflow-hidden"
                style={{ perspective: 600 }}
              >
                {/* 3D Interactive CSS Rotator for Cube */}
                {selectedSolid.id === 'cube' && (
                  <div
                    className="relative w-28 h-28 transition-transform duration-200"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: `rotateX(${cubeRotationX}deg) rotateY(${cubeRotationY}deg)`
                    }}
                  >
                    {/* 6 Faces of the Cube */}
                    <div className="absolute w-28 h-28 bg-amber-500/90 border-2 border-amber-600 flex items-center justify-center text-white font-extrabold text-xs shadow-inner" style={{ transform: 'translateZ(56px)' }}>
                      {language === 'az' ? 'Ön Üz' : language === 'tr' ? 'Ön Yüz' : language === 'ru' ? 'Передняя грань' : 'Front Face'}
                    </div>
                    <div className="absolute w-28 h-28 bg-amber-600/90 border-2 border-amber-700 flex items-center justify-center text-white font-extrabold text-xs" style={{ transform: 'rotateY(180deg) translateZ(56px)' }}>
                      {language === 'az' ? 'Arxa Üz' : language === 'tr' ? 'Arka Yüz' : language === 'ru' ? 'Задняя грань' : 'Back Face'}
                    </div>
                    <div className="absolute w-28 h-28 bg-amber-400/90 border-2 border-amber-500 flex items-center justify-center text-white font-extrabold text-xs" style={{ transform: 'rotateY(90deg) translateZ(56px)' }}>
                      {language === 'az' ? 'Sağ Üz' : language === 'tr' ? 'Sağ Yüz' : language === 'ru' ? 'Правая грань' : 'Right Face'}
                    </div>
                    <div className="absolute w-28 h-28 bg-amber-500/90 border-2 border-amber-600 flex items-center justify-center text-white font-extrabold text-xs" style={{ transform: 'rotateY(-90deg) translateZ(56px)' }}>
                      {language === 'az' ? 'Sol Üz' : language === 'tr' ? 'Sol Yüz' : language === 'ru' ? 'Левая грань' : 'Left Face'}
                    </div>
                    <div className="absolute w-28 h-28 bg-amber-300/90 border-2 border-amber-400 flex items-center justify-center text-slate-800 font-extrabold text-xs" style={{ transform: 'rotateX(90deg) translateZ(56px)' }}>
                      {language === 'az' ? 'Üst Üz' : language === 'tr' ? 'Üst Yüz' : language === 'ru' ? 'Верхняя грань' : 'Top Face'}
                    </div>
                    <div className="absolute w-28 h-28 bg-amber-700/90 border-2 border-amber-800 flex items-center justify-center text-white font-extrabold text-xs" style={{ transform: 'rotateX(-90deg) translateZ(56px)' }}>
                      {language === 'az' ? 'Alt Üz' : language === 'tr' ? 'Alt Yüz' : language === 'ru' ? 'Нижняя грань' : 'Bottom Face'}
                    </div>
                  </div>
                )}

                {/* 3D Cone Representation */}
                {selectedSolid.id === 'cone' && (
                  <svg viewBox="0 0 160 160" className="w-36 h-36 drop-shadow-lg">
                    <ellipse cx="80" cy="125" rx="55" ry="18" fill="#fda4af" stroke="#e11d48" strokeWidth="3" />
                    <path d="M 80 25 L 25 125 A 55 18 0 0 0 135 125 Z" fill="#f43f5e" stroke="#e11d48" strokeWidth="3" />
                    <circle cx="80" cy="25" r="5" fill="#facc15" stroke="#ffffff" strokeWidth="2" />
                  </svg>
                )}

                {/* 3D Cylinder Representation */}
                {selectedSolid.id === 'cylinder' && (
                  <svg viewBox="0 0 160 160" className="w-36 h-36 drop-shadow-lg">
                    <rect x="35" y="45" width="90" height="75" fill="#0ea5e9" />
                    <ellipse cx="80" cy="120" rx="45" ry="16" fill="#0284c7" stroke="#0369a1" strokeWidth="3" />
                    <ellipse cx="80" cy="45" rx="45" ry="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" />
                    <line x1="35" y1="45" x2="35" y2="120" stroke="#0369a1" strokeWidth="3" />
                    <line x1="125" y1="45" x2="125" y2="120" stroke="#0369a1" strokeWidth="3" />
                  </svg>
                )}

                {/* 3D Sphere Representation */}
                {selectedSolid.id === 'sphere' && (
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-700 via-emerald-500 to-teal-300 shadow-xl flex items-center justify-center text-white font-extrabold text-xs">
                    {language === 'az' ? 'Yumru 3D Kürə' : language === 'tr' ? 'Yuvarlak 3D Küre' : language === 'ru' ? 'Объемный 3D Шар' : 'Round 3D Ball'}
                  </div>
                )}

                {/* 3D Square Pyramid Representation */}
                {selectedSolid.id === 'pyramid' && (
                  <svg viewBox="0 0 160 160" className="w-36 h-36 drop-shadow-lg">
                    <polygon points="80,25 25,120 105,135" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2" />
                    <polygon points="80,25 105,135 140,110" fill="#6d28d9" stroke="#5b21b6" strokeWidth="2" />
                    <circle cx="80" cy="25" r="5" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
                  </svg>
                )}

                {/* 3D Rectangular Prism */}
                {selectedSolid.id === 'rectangular-prism' && (
                  <svg viewBox="0 0 160 160" className="w-36 h-36 drop-shadow-lg">
                    <polygon points="30,60 100,60 130,40 60,40" fill="#fb923c" stroke="#ea580c" strokeWidth="2" />
                    <polygon points="100,60 130,40 130,105 100,125" fill="#c2410c" stroke="#9a3412" strokeWidth="2" />
                    <rect x="30" y="60" width="70" height="65" fill="#f97316" stroke="#ea580c" strokeWidth="2" />
                  </svg>
                )}
              </div>

              {/* Rotation and 3D Controls */}
              {selectedSolid.id === 'cube' && (
                <div className="flex items-center justify-center gap-2 pt-1">
                  <button
                    onClick={() => {
                      setCubeRotationY(prev => prev - 45);
                      sound.playClick();
                    }}
                    className="px-3 py-1.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-900 text-xs font-bold flex items-center gap-1"
                  >
                    <RotateCw className="w-3.5 h-3.5 -scale-x-100" />
                    <span>{t('spinLeft')}</span>
                  </button>
                  <button
                    onClick={() => {
                      setCubeRotationY(prev => prev + 45);
                      sound.playClick();
                    }}
                    className="px-3 py-1.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-900 text-xs font-bold flex items-center gap-1"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>{t('spinRight')}</span>
                  </button>
                </div>
              )}

              {/* 3D Anatomy Counters (Faces, Edges, Vertices) */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-lg font-black text-slate-800">{selectedSolid.faces}</span>
                  <span className="text-[11px] font-bold text-slate-500">{t('faces')}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-lg font-black text-slate-800">{selectedSolid.edges}</span>
                  <span className="text-[11px] font-bold text-slate-500">{t('edges')}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-lg font-black text-slate-800">{selectedSolid.vertices}</span>
                  <span className="text-[11px] font-bold text-slate-500">{t('vertices')}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Real-World Solid Objects */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <Eye className="w-4 h-4 text-orange-500" />
                  <span>{t('whereToSpot')}:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {localizedSolid.realWorldExamples.map((ex, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        sound.playClick();
                        sound.speak(`${ex.label}. ${ex.hint}`, language);
                      }}
                      className="p-3.5 rounded-2xl bg-slate-50 hover:bg-orange-50/50 border border-slate-200/80 hover:border-orange-200 cursor-pointer transition-all flex items-start gap-3 group"
                    >
                      <span className="text-3xl group-hover:scale-110 transition-transform">{ex.emoji}</span>
                      <div>
                        <h5 className="font-bold text-xs sm:text-sm text-slate-800">
                          {ex.label}
                        </h5>
                        <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                          {ex.hint}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200 text-xs sm:text-sm text-orange-950">
                  <span className="font-bold">✨ {t('shapeSecret')}: </span>
                  {localizedSolid.funFact}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SUBSECTION 2.3: SHAPE DETECTIVE GAME --- */}
      {currentSub === 'quiz' && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 border-2 border-purple-300 shadow-md space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-extrabold">
              <Award className="w-4 h-4 text-purple-600" />
              <span>{t('score')}: {gameScore}</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-800 font-display">
              {t('shapeQuizTitle')} 🔍📐
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {t('shapesSubtitle')}
            </p>
          </div>

          {/* Riddle Card */}
          <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200 text-center space-y-2">
            <span className="text-4xl block">
              {shapeGameRiddles[gameQuestionIndex].object.match(/\p{Extended_Pictographic}/u)?.[0] || '🔍'}
            </span>
            <h4 className="text-lg font-bold text-purple-950">
              {shapeGameRiddles[gameQuestionIndex].object}
            </h4>
            <p className="text-sm text-purple-800 font-medium italic">
              "{shapeGameRiddles[gameQuestionIndex].clue}"
            </p>
          </div>

          {/* 4 Shape Options */}
          <div className="grid grid-cols-2 gap-3">
            {shapeGameRiddles[gameQuestionIndex].options.map((opt) => {
              const isSelected = selectedAnswer === opt;
              const isCorrect = opt === shapeGameRiddles[gameQuestionIndex].correctShape;

              let style = 'bg-slate-50 hover:bg-purple-50 border-slate-200 text-slate-800';
              if (gameAnswered) {
                if (isCorrect) {
                  style = 'bg-emerald-500 text-white border-emerald-500 font-bold';
                } else if (isSelected) {
                  style = 'bg-rose-500 text-white border-rose-500';
                } else {
                  style = 'bg-slate-100 opacity-50 border-transparent';
                }
              }

              return (
                <button
                  key={opt}
                  id={`shape-riddle-${opt.toLowerCase()}`}
                  onClick={() => handleAnswerGame(opt)}
                  disabled={gameAnswered}
                  className={`p-4 rounded-xl border-2 text-sm font-bold transition-all text-center flex items-center justify-center ${style}`}
                >
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Feedback & Next Button */}
          {gameAnswered && (
            <div className="text-center pt-3 border-t border-slate-100 space-y-3">
              <p className="text-sm font-bold text-slate-800">
                {selectedAnswer === shapeGameRiddles[gameQuestionIndex].correctShape
                  ? `🎉 ${t('correctAwesome')}`
                  : `${t('tryAgain')} ${shapeGameRiddles[gameQuestionIndex].correctShape}!`}
              </p>
              <button
                id="next-shape-riddle-btn"
                onClick={handleNextGameRiddle}
                className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md transition-transform active:scale-95"
              >
                {t('nextQuestion')} ➔
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
