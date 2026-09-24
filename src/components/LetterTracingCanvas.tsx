import React, { useRef, useState, useEffect } from 'react';
import { Eraser, Sparkles } from 'lucide-react';
import { sound } from '../utils/soundEngine';
import { useLanguage } from '../context/LanguageContext';

interface LetterTracingCanvasProps {
  charToTrace: string;
}

const PEN_COLORS = [
  { name: 'Ruby', color: '#ef4444' },
  { name: 'Amber', color: '#f59e0b' },
  { name: 'Emerald', color: '#10b981' },
  { name: 'Sky', color: '#0ea5e9' },
  { name: 'Indigo', color: '#6366f1' },
  { name: 'Fuchsia', color: '#d946ef' },
];

export const LetterTracingCanvas: React.FC<LetterTracingCanvasProps> = ({ charToTrace }) => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('#10b981');
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [hasDrawn, setHasDrawn] = useState<boolean>(false);

  // Clear canvas when character changes
  useEffect(() => {
    clearCanvas();
  }, [charToTrace]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  const getCanvasCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in e && e.touches.length > 0) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    } else if ('clientX' in e) {
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    }
    return { x: 0, y: 0 };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if ('touches' in e) {
      // Prevent scrolling while drawing on mobile
      e.stopPropagation();
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCanvasCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = selectedColor;
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    if ('touches' in e) {
      e.stopPropagation();
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCanvasCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      sound.playClick();
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-xs border-2 border-emerald-200/80 rounded-3xl p-4 sm:p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 font-display">
            {t('practiceWriting')}
          </h4>
        </div>

        <button
          onClick={() => {
            sound.playClick();
            clearCanvas();
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 text-xs font-bold transition-colors"
        >
          <Eraser className="w-3.5 h-3.5" />
          <span>{t('clearCanvas')}</span>
        </button>
      </div>

      {/* Canvas Drawing Stage with Light Tracing Guide */}
      <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] mx-auto rounded-2xl bg-amber-50/40 border-2 border-dashed border-amber-200 overflow-hidden flex items-center justify-center select-none touch-none">
        {/* Faint Background Guide Letter */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-8xl sm:text-9xl font-black text-slate-200/90 font-display tracking-wider">
            {charToTrace}
          </span>
        </div>

        {/* User Drawing Canvas */}
        <canvas
          ref={canvasRef}
          width={320}
          height={320}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="absolute inset-0 w-full h-full cursor-crosshair z-10"
        />

        {!hasDrawn && (
          <div className="absolute bottom-3 text-center pointer-events-none z-0">
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/90 text-slate-500 shadow-2xs">
              ✍️ {t('practiceWriting')}
            </span>
          </div>
        )}
      </div>

      {/* Color Palette Selector */}
      <div className="flex items-center justify-center gap-2 pt-1">
        <span className="text-[11px] font-bold text-slate-500 mr-1">{t('strokeColor')}:</span>
        {PEN_COLORS.map((pen) => (
          <button
            key={pen.name}
            onClick={() => {
              setSelectedColor(pen.color);
              sound.playClick();
            }}
            className={`w-7 h-7 rounded-full transition-transform ${
              selectedColor === pen.color ? 'scale-125 ring-2 ring-slate-800 ring-offset-2' : 'hover:scale-110 opacity-80 hover:opacity-100'
            }`}
            style={{ backgroundColor: pen.color }}
            title={pen.name}
          />
        ))}
      </div>
    </div>
  );
};
