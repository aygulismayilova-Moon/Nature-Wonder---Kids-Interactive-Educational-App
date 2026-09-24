import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Snowflake, Sparkles, Wind, Volume2 } from 'lucide-react';
import { sound } from '../utils/soundEngine';
import { useLanguage } from '../context/LanguageContext';

export interface MascotProps {
  expression: 'neutral' | 'happy' | 'spicy_fire' | 'sour_pucker' | 'hot_steam' | 'cold_shiver';
  speechBubble?: string;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

export const MascotCharacter: React.FC<MascotProps> = ({
  expression = 'neutral',
  speechBubble,
  size = 'md',
  interactive = true
}) => {
  const { language } = useLanguage();
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-36 h-36',
    lg: 'w-48 h-48'
  }[size];

  const handleMascotTap = () => {
    if (!interactive) return;
    sound.playClick();

    const phrases = {
      spicy: {
        az: "Vaaaay! Çox acıdır! Ağzım əjdaha kimi alov saçır!",
        tr: "Vay canına! Çok acı! Ağzım ejderha gibi alev saçıyor!",
        ru: "Ого-го! Как остро! Во рту пылает, словно у дракона!",
        en: "Whoosh! So spicy! My mouth feels like a dragon!"
      },
      sour: {
        az: "Ooooy! Yanaqlarım büzüşdü! Çox turş və dadlıdır!",
        tr: "Oooof! Yanaklarım büzüştü! Ekşi ve kıpır kıpır!",
        ru: "Ой-ёй-ёй! Губки бантиком, щечки свело! Кисло и бодро!",
        en: "Pucker up! So sour and tart!"
      },
      hot: {
        az: "Qaynar buxar! Üstünə yavaşca üfür: ffff, ffff!",
        tr: "Sıcak buhar! Yavaşça üfle: püüüff, püüüff!",
        ru: "Горячий пар! Осторожно подуй: фууу, фууу!",
        en: "Hot steam! Blow gently on it: fffff, fffff!"
      },
      cold: {
        az: "Bırrr! Dondurucu soyuqdur! Dişlərim tıqqıldayır!",
        tr: "Brrr! Dondurucu soğuk! Dişlerim birbirine vuruyor!",
        ru: "Бррр! Морозно и холодно! Зуб на зуб не попадает!",
        en: "Brrr! Freezing cold! My teeth are chattering!"
      },
      sweet: {
        az: "Mmm! Çox şirin və dadlıdır! Ləzzətli təamları sevirəm!",
        tr: "Mmm! Çok tatlı ve lezzetli! Tatlı ikramlara bayılırım!",
        ru: "Ммм! Как сладко и вкусно! Обожаю лакомства!",
        en: "Mmm! So sweet and delicious! I love tasty treats!"
      },
      default: {
        az: "Salam, balaca kəşfiyyatçı! Mən Munchy-yəm! Gəl birlikdə öyrənək!",
        tr: "Merhaba minik kaşif! Ben Munchy! Birlikte öğrenelim!",
        ru: "Привет, юный исследователь! Я Манчи! Давай учиться вместе!",
        en: "Hi there explorer! I'm Munchy! Let's learn together!"
      }
    };

    if (expression === 'spicy_fire') {
      sound.playSensationSound('spicy');
      sound.speak(phrases.spicy[language] || phrases.spicy.az);
    } else if (expression === 'sour_pucker') {
      sound.playSensationSound('sour');
      sound.speak(phrases.sour[language] || phrases.sour.az);
    } else if (expression === 'hot_steam') {
      sound.playSensationSound('hot');
      sound.speak(phrases.hot[language] || phrases.hot.az);
    } else if (expression === 'cold_shiver') {
      sound.playSensationSound('cold');
      sound.speak(phrases.cold[language] || phrases.cold.az);
    } else if (expression === 'happy') {
      sound.playSensationSound('sweet');
      sound.speak(phrases.sweet[language] || phrases.sweet.az);
    } else {
      sound.speak(phrases.default[language] || phrases.default.az);
    }
  };

  return (
    <div className="flex flex-col items-center select-none" id="mascot-container">
      {/* Dynamic Speech Bubble */}
      {speechBubble && (
        <AnimatePresence mode="wait">
          <motion.div
            key={speechBubble}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            className="mb-3 max-w-xs sm:max-w-md bg-white px-4 py-2.5 rounded-2xl border-2 border-amber-300 shadow-md shadow-amber-100/50 relative text-center"
          >
            <p className="text-sm font-bold text-slate-800 leading-snug">
              {speechBubble}
            </p>
            <button
              onClick={() => sound.speak(speechBubble, language)}
              className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 px-2 py-0.5 rounded-full transition-colors"
            >
              <Volume2 className="w-3 h-3" />
              <span>
                {language === 'az'
                  ? 'Munchy-ni Dinlə'
                  : language === 'tr'
                  ? "Munchy'yi Dinle"
                  : language === 'ru'
                  ? 'Послушать Манчи'
                  : 'Hear Munchy'}
              </span>
            </button>
            {/* Bubble Tail */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-amber-300 rotate-45" />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Mascot Animated Character Avatar */}
      <motion.div
        onClick={handleMascotTap}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        animate={
          expression === 'cold_shiver'
            ? { x: [-3, 3, -3, 3, 0], transition: { repeat: Infinity, duration: 0.25 } }
            : expression === 'spicy_fire'
            ? { y: [-4, 2, -4], transition: { repeat: Infinity, duration: 0.3 } }
            : expression === 'sour_pucker'
            ? { rotate: [-4, 4, -4], transition: { repeat: Infinity, duration: 0.6 } }
            : { y: [0, -4, 0], transition: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' } }
        }
        className={`relative ${sizeClasses} cursor-pointer`}
      >
        {/* Expression Aura & Particle Effects */}
        {expression === 'spicy_fire' && (
          <div className="absolute -top-4 -left-2 -right-2 flex justify-between pointer-events-none">
            <Flame className="w-6 h-6 text-red-500 animate-bounce" />
            <Flame className="w-7 h-7 text-amber-500 animate-pulse" />
            <Flame className="w-6 h-6 text-orange-500 animate-bounce" />
          </div>
        )}

        {expression === 'cold_shiver' && (
          <div className="absolute -top-4 -left-2 -right-2 flex justify-between pointer-events-none">
            <Snowflake className="w-6 h-6 text-sky-400 animate-spin" />
            <Snowflake className="w-7 h-7 text-cyan-300 animate-pulse" />
            <Snowflake className="w-6 h-6 text-blue-400 animate-spin" />
          </div>
        )}

        {expression === 'hot_steam' && (
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none">
            <Wind className="w-6 h-6 text-orange-300 animate-pulse" />
            <Wind className="w-5 h-5 text-amber-300 animate-pulse" />
          </div>
        )}

        {expression === 'happy' && (
          <div className="absolute -top-3 -right-2 pointer-events-none">
            <Sparkles className="w-7 h-7 text-amber-400 animate-spin" />
          </div>
        )}

        {/* Mascot Body SVG */}
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full drop-shadow-lg"
        >
          {/* Ears / Head Crest */}
          <circle cx="32" cy="30" r="16" fill={expression === 'spicy_fire' ? '#ef4444' : expression === 'cold_shiver' ? '#7dd3fc' : '#fbbf24'} />
          <circle cx="32" cy="30" r="9" fill={expression === 'spicy_fire' ? '#f87171' : expression === 'cold_shiver' ? '#bae6fd' : '#fde68a'} />
          <circle cx="88" cy="30" r="16" fill={expression === 'spicy_fire' ? '#ef4444' : expression === 'cold_shiver' ? '#7dd3fc' : '#fbbf24'} />
          <circle cx="88" cy="30" r="9" fill={expression === 'spicy_fire' ? '#f87171' : expression === 'cold_shiver' ? '#bae6fd' : '#fde68a'} />

          {/* Main Round Head */}
          <circle
            cx="60"
            cy="65"
            r="44"
            fill={
              expression === 'spicy_fire'
                ? '#f87171'
                : expression === 'cold_shiver'
                ? '#bae6fd'
                : expression === 'sour_pucker'
                ? '#facc15'
                : '#f59e0b'
            }
          />
          <circle
            cx="60"
            cy="65"
            r="40"
            fill={
              expression === 'spicy_fire'
                ? '#fca5a5'
                : expression === 'cold_shiver'
                ? '#e0f2fe'
                : expression === 'sour_pucker'
                ? '#fef08a'
                : '#fef3c7'
            }
          />

          {/* Cheeks */}
          <ellipse
            cx="32"
            cy="72"
            rx="8"
            ry="5"
            fill={
              expression === 'spicy_fire'
                ? '#dc2626'
                : expression === 'cold_shiver'
                ? '#38bdf8'
                : '#f43f5e'
            }
            opacity="0.6"
          />
          <ellipse
            cx="88"
            cy="72"
            rx="8"
            ry="5"
            fill={
              expression === 'spicy_fire'
                ? '#dc2626'
                : expression === 'cold_shiver'
                ? '#38bdf8'
                : '#f43f5e'
            }
            opacity="0.6"
          />

          {/* EYES */}
          {expression === 'sour_pucker' ? (
            // One eye closed tight, other squinting
            <g stroke="#1e293b" strokeWidth="4" strokeLinecap="round" fill="none">
              <path d="M 36 58 Q 44 50 52 58" />
              <path d="M 68 56 L 82 56" />
              <path d="M 75 50 L 75 62" />
            </g>
          ) : expression === 'spicy_fire' ? (
            // Big startled wide eyes with fiery pupils
            <g>
              <circle cx="44" cy="56" r="9" fill="#ffffff" stroke="#991b1b" strokeWidth="2" />
              <circle cx="44" cy="56" r="4" fill="#dc2626" />
              <circle cx="76" cy="56" r="9" fill="#ffffff" stroke="#991b1b" strokeWidth="2" />
              <circle cx="76" cy="56" r="4" fill="#dc2626" />
            </g>
          ) : expression === 'cold_shiver' ? (
            // Watery chilly eyes
            <g>
              <circle cx="44" cy="56" r="8" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
              <circle cx="44" cy="56" r="4" fill="#0369a1" />
              <circle cx="76" cy="56" r="8" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
              <circle cx="76" cy="56" r="4" fill="#0369a1" />
            </g>
          ) : (
            // Big friendly glossy happy eyes
            <g>
              <circle cx="44" cy="56" r="8" fill="#1e293b" />
              <circle cx="46" cy="53" r="3" fill="#ffffff" />
              <circle cx="76" cy="56" r="8" fill="#1e293b" />
              <circle cx="78" cy="53" r="3" fill="#ffffff" />
            </g>
          )}

          {/* MOUTH */}
          {expression === 'happy' && (
            // Wide happy smile with tongue
            <g>
              <path d="M 44 72 Q 60 88 76 72 Z" fill="#b91c1c" />
              <path d="M 50 78 Q 60 86 70 78" fill="#f43f5e" />
            </g>
          )}

          {expression === 'spicy_fire' && (
            // Open mouth panting with tongue out
            <g>
              <ellipse cx="60" cy="74" rx="10" ry="12" fill="#7f1d1d" />
              <path d="M 55 76 C 55 86, 65 86, 65 76 Z" fill="#ef4444" />
            </g>
          )}

          {expression === 'sour_pucker' && (
            // Tiny puckered ring mouth
            <g>
              <circle cx="60" cy="74" r="5" fill="#e11d48" stroke="#881337" strokeWidth="2" />
            </g>
          )}

          {expression === 'hot_steam' && (
            // Rounded lips blowing gentle air
            <g>
              <ellipse cx="60" cy="73" rx="6" ry="4" fill="#9a3412" stroke="#ea580c" strokeWidth="1.5" />
            </g>
          )}

          {expression === 'cold_shiver' && (
            // Chattering zigzag teeth
            <g stroke="#0369a1" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 46 74 L 52 70 L 58 74 L 64 70 L 70 74 L 76 70" />
            </g>
          )}

          {expression === 'neutral' && (
            // Sweet gentle smile
            <path d="M 50 72 Q 60 79 70 72" stroke="#1e293b" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          )}

          {/* Cute Nose */}
          <circle cx="60" cy="65" r="3.5" fill="#334155" />
        </svg>
      </motion.div>

      <span className="mt-1 text-xs font-bold text-slate-500 flex items-center gap-1">
        <span>🐾 Munchy the Explorer</span>
      </span>
    </div>
  );
};
