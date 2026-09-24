import React, { useState, useEffect, useCallback, useRef } from 'react';
import { PUZZLE_ITEMS, PuzzleItem } from '../data/puzzleData';
import { sound } from '../utils/soundEngine';
import { useLanguage } from '../context/LanguageContext';
import confetti from 'canvas-confetti';
import {
  Volume2,
  Sparkles,
  RotateCw,
  Trophy,
  Clock,
  Eye,
  Hash,
  ArrowRight,
  CheckCircle2,
  Award,
  Puzzle,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PuzzleExplorerProps {
  initialItemId?: string | null;
}

export function PuzzleExplorer({ initialItemId }: PuzzleExplorerProps) {
  const { t, language, getLocalizedAnimal, getLocalizedNature, getLocalizedUniverse } = useLanguage();

  const getLocalizedPuzzleItem = useCallback(
    (item: PuzzleItem) => {
      if (item.category === 'animals') {
        const loc = getLocalizedAnimal({ id: item.id, name: item.name, funFact: item.funFact, childDescription: item.description });
        return {
          name: loc.name || item.name,
          funFact: loc.funFact || item.funFact,
          description: loc.childDescription || item.description
        };
      } else if (item.category === 'nature') {
        const loc = getLocalizedNature({ id: item.id, name: item.name, description: item.description, funFacts: [item.funFact] } as any);
        return {
          name: loc.name || item.name,
          funFact: (loc.funFacts && loc.funFacts[0]) || loc.description || item.funFact,
          description: loc.description || item.description
        };
      } else {
        const loc = getLocalizedUniverse({ id: item.id, name: item.name, description: item.description, funFacts: [item.funFact] } as any);
        return {
          name: loc.name || item.name,
          funFact: (loc.funFacts && loc.funFacts[0]) || loc.kidWonder || loc.description || item.funFact,
          description: loc.description || item.description
        };
      }
    },
    [getLocalizedAnimal, getLocalizedNature, getLocalizedUniverse]
  );

  const getCategoryLabel = useCallback(
    (cat: 'all' | 'animals' | 'nature' | 'universe') => {
      switch (cat) {
        case 'all': return t('allPictures');
        case 'animals':
          return language === 'az' ? '🦁 Heyvanlar' : language === 'tr' ? '🦁 Hayvanlar' : language === 'ru' ? '🦁 Животные' : '🦁 Animals';
        case 'nature':
          return language === 'az' ? '🌲 Təbiət' : language === 'tr' ? '🌲 Doğa' : language === 'ru' ? '🌲 Природа' : '🌲 Nature';
        case 'universe':
          return language === 'az' ? '✨ Kosmos' : language === 'tr' ? '✨ Uzay' : language === 'ru' ? '✨ Космос' : '✨ Universe';
      }
    },
    [language, t]
  );

  // Category filter: 'all' | 'animals' | 'nature' | 'universe'
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'animals' | 'nature' | 'universe'>('all');
  
  // Selected Puzzle Item
  const [activeItem, setActiveItem] = useState<PuzzleItem>(() => {
    if (initialItemId) {
      const found = PUZZLE_ITEMS.find((p) => p.id === initialItemId);
      if (found) return found;
    }
    return PUZZLE_ITEMS[0];
  });

  // Difficulty: 2 (2x2), 3 (3x3), 4 (4x4)
  const [gridSize, setGridSize] = useState<2 | 3 | 4>(3);

  // Game Mode: 'swap' (Tap two pieces to swap) | 'slide' (Classic sliding tile)
  const [gameMode, setGameMode] = useState<'swap' | 'slide'>('swap');

  // Board State: array of tile IDs (0 to gridSize*gridSize - 1)
  // For sliding mode, empty tile is (total - 1)
  const [tiles, setTiles] = useState<number[]>([]);
  const [selectedPos, setSelectedPos] = useState<number | null>(null);
  const [moves, setMoves] = useState<number>(0);
  const [isSolved, setIsSolved] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showNumbers, setShowNumbers] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalTiles = gridSize * gridSize;
  const emptyTileId = totalTiles - 1;

  // Filtered items list
  const filteredItems = PUZZLE_ITEMS.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  // Helper to check if a board is solved
  const checkIsSolved = useCallback((currentTiles: number[]): boolean => {
    if (currentTiles.length === 0) return false;
    for (let i = 0; i < currentTiles.length; i++) {
      if (currentTiles[i] !== i) return false;
    }
    return true;
  }, []);

  // Shuffle board generator
  const shuffleBoard = useCallback(() => {
    const total = gridSize * gridSize;
    let newTiles: number[] = [];

    if (gameMode === 'swap') {
      // Create random permutation with at least half pieces misplaced
      let attempts = 0;
      do {
        newTiles = Array.from({ length: total }, (_, i) => i);
        for (let i = total - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newTiles[i], newTiles[j]] = [newTiles[j], newTiles[i]];
        }
        attempts++;
      } while (attempts < 10 && checkIsSolved(newTiles));
    } else {
      // Sliding mode: start solved and perform 80 valid random moves to guarantee solvability
      newTiles = Array.from({ length: total }, (_, i) => i);
      let emptyPos = total - 1;
      let lastPos = -1;

      for (let step = 0; step < 80; step++) {
        const row = Math.floor(emptyPos / gridSize);
        const col = emptyPos % gridSize;
        const neighbors: number[] = [];

        if (row > 0) neighbors.push(emptyPos - gridSize); // Up
        if (row < gridSize - 1) neighbors.push(emptyPos + gridSize); // Down
        if (col > 0) neighbors.push(emptyPos - 1); // Left
        if (col < gridSize - 1) neighbors.push(emptyPos + 1); // Right

        // Avoid immediately undoing last move
        const validMoves = neighbors.filter((n) => n !== lastPos);
        const nextPos = validMoves.length > 0 
          ? validMoves[Math.floor(Math.random() * validMoves.length)]
          : neighbors[Math.floor(Math.random() * neighbors.length)];

        // Swap empty with chosen neighbor
        [newTiles[emptyPos], newTiles[nextPos]] = [newTiles[nextPos], newTiles[emptyPos]];
        lastPos = emptyPos;
        emptyPos = nextPos;
      }
    }

    setTiles(newTiles);
    setSelectedPos(null);
    setMoves(0);
    setIsSolved(false);
    setTimerSeconds(0);
    setIsTimerRunning(true);
  }, [gridSize, gameMode, checkIsSolved]);

  // Initial setup & when active item, gridSize, or gameMode changes
  useEffect(() => {
    shuffleBoard();
  }, [shuffleBoard, activeItem.id]);

  // Timer effect
  useEffect(() => {
    if (isTimerRunning && !isSolved) {
      timerRef.current = setInterval(() => {
        setTimerSeconds((s) => s + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning, isSolved]);

  // Trigger audio on item completion
  const triggerItemSound = useCallback((item: PuzzleItem) => {
    if (item.category === 'animals') {
      if (item.audioUrl) {
        sound.playAudioUrl(item.audioUrl, item.soundType);
      } else if (item.soundType) {
        sound.playAnimalSound(item.soundType);
      }
    } else if (item.category === 'nature' && item.soundType) {
      sound.playNatureSound(item.soundType);
    } else if (item.category === 'universe' && item.soundType) {
      sound.playCosmicSound(item.soundType);
    }
  }, []);

  // Trigger multi-stage celebratory confetti explosion animation for positive reinforcement
  const triggerConfettiExplosion = useCallback(() => {
    try {
      // Stage 1: Central powerful celebratory blast
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { x: 0.5, y: 0.6 },
        colors: ['#f59e0b', '#10b981', '#6366f1', '#ec4899', '#3b82f6', '#eab308'],
        startVelocity: 45,
        ticks: 250,
      });

      // Stage 2: Left celebratory cannon firing up and across
      setTimeout(() => {
        confetti({
          particleCount: 65,
          angle: 60,
          spread: 60,
          origin: { x: 0.1, y: 0.75 },
          colors: ['#fbbf24', '#34d399', '#a78bfa', '#f43f5e', '#38bdf8'],
          startVelocity: 55,
          ticks: 250,
        });
      }, 180);

      // Stage 3: Right celebratory cannon firing up and across
      setTimeout(() => {
        confetti({
          particleCount: 65,
          angle: 120,
          spread: 60,
          origin: { x: 0.9, y: 0.75 },
          colors: ['#fbbf24', '#34d399', '#a78bfa', '#f43f5e', '#38bdf8'],
          startVelocity: 55,
          ticks: 250,
        });
      }, 360);

      // Stage 4: Cascading star & circle shower from top
      setTimeout(() => {
        confetti({
          particleCount: 75,
          spread: 100,
          origin: { x: 0.5, y: 0.35 },
          colors: ['#ffd700', '#ff69b4', '#00e5ff', '#76ff03', '#ff9100'],
          startVelocity: 35,
          shapes: ['star', 'circle'],
          ticks: 300,
          scalar: 1.2,
        });
      }, 650);

      // Stage 5: Grand finale dual fireworks
      setTimeout(() => {
        confetti({
          particleCount: 55,
          angle: 75,
          spread: 80,
          origin: { x: 0.25, y: 0.6 },
          colors: ['#f59e0b', '#10b981', '#ec4899'],
          startVelocity: 45,
        });
        confetti({
          particleCount: 55,
          angle: 105,
          spread: 80,
          origin: { x: 0.75, y: 0.6 },
          colors: ['#3b82f6', '#8b5cf6', '#eab308'],
          startVelocity: 45,
        });
      }, 950);
    } catch {
      // Fallback silently if canvas or environment prevents execution
    }
  }, []);

  // Handle victory celebration
  const handleVictory = useCallback(() => {
    setIsSolved(true);
    setIsTimerRunning(false);
    sound.playSuccess();

    // Trigger celebratory confetti explosion
    triggerConfettiExplosion();

    // Mark as completed
    setCompletedItems((prev) => ({ ...prev, [activeItem.id]: true }));

    // Voice congratulations & play creature sound
    setTimeout(() => {
      sound.speak(t('puzzleSolved'), language);
    }, 600);

    setTimeout(() => {
      triggerItemSound(activeItem);
    }, 1800);
  }, [activeItem, language, t, triggerConfettiExplosion, triggerItemSound]);

  // Tile click handler
  const handleTileClick = (pos: number) => {
    if (isSolved) return;

    if (gameMode === 'swap') {
      if (selectedPos === null) {
        // Select first piece
        setSelectedPos(pos);
        sound.playPop();
      } else if (selectedPos === pos) {
        // Deselect
        setSelectedPos(null);
        sound.playClick();
      } else {
        // Swap pieces
        const newTiles = [...tiles];
        const pieceA = newTiles[selectedPos];
        const pieceB = newTiles[pos];
        newTiles[selectedPos] = pieceB;
        newTiles[pos] = pieceA;

        setTiles(newTiles);
        setSelectedPos(null);
        setMoves((m) => m + 1);

        // Check if one or both reached their correct destination
        const aCorrect = newTiles[pos] === pos;
        const bCorrect = newTiles[selectedPos] === selectedPos;
        if (aCorrect || bCorrect) {
          sound.playSnap();
        } else {
          sound.playPop();
        }

        // Check solved
        if (checkIsSolved(newTiles)) {
          handleVictory();
        }
      }
    } else {
      // Sliding mode: Check adjacency to empty slot
      const emptyPos = tiles.indexOf(emptyTileId);
      const row = Math.floor(pos / gridSize);
      const col = pos % gridSize;
      const emptyRow = Math.floor(emptyPos / gridSize);
      const emptyCol = emptyPos % gridSize;

      const isAdjacent =
        (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
        (col === emptyCol && Math.abs(row - emptyRow) === 1);

      if (isAdjacent) {
        const newTiles = [...tiles];
        [newTiles[pos], newTiles[emptyPos]] = [newTiles[emptyPos], newTiles[pos]];
        setTiles(newTiles);
        setMoves((m) => m + 1);

        if (newTiles[emptyPos] === emptyPos) {
          sound.playSnap();
        } else {
          sound.playPop();
        }

        // Check solved
        if (checkIsSolved(newTiles)) {
          handleVictory();
        }
      } else {
        sound.playClick();
      }
    }
  };

  // Next puzzle selector
  const handleNextPuzzle = () => {
    const currentIndex = filteredItems.findIndex((p) => p.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    const nextItem = filteredItems[nextIndex];
    setActiveItem(nextItem);
    sound.playClick();
  };

  // Switch to specific puzzle item
  const handleSelectItem = (item: PuzzleItem) => {
    if (item.id === activeItem.id) return;
    setActiveItem(item);
    sound.playClick();
  };

  // Format timer
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const locActiveItem = getLocalizedPuzzleItem(activeItem);

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white shadow-xl shadow-purple-600/15 relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-white mb-2">
              <Puzzle className="w-3.5 h-3.5" />
              <span>{t('sectionPuzzle')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight">
              {t('puzzleTitle')}
            </h2>
            <p className="text-purple-100 text-sm mt-1 max-w-xl">
              {t('puzzleSubtitle')}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Pronounce Name */}
            <button
              id="puzzle-hear-sound"
              onClick={() => {
                sound.speak(locActiveItem.name, language);
                setTimeout(() => triggerItemSound(activeItem), 800);
              }}
              className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs flex items-center gap-2 backdrop-blur-sm transition-all shadow-xs active:scale-95"
            >
              <Volume2 className="w-4 h-4" />
              <span>{locActiveItem.name}</span>
            </button>

            {/* Shuffle / Restart */}
            <button
              id="puzzle-shuffle-btn"
              onClick={() => {
                shuffleBoard();
                sound.playClick();
              }}
              className="px-4 py-2 rounded-xl bg-white text-purple-900 font-extrabold text-xs flex items-center gap-2 shadow-md hover:bg-purple-50 transition-all active:scale-95"
            >
              <RotateCw className="w-4 h-4" />
              <span>{t('puzzleShuffle')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls: Category Filters & Difficulty & Mode */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0">
          {(
            [
              { id: 'all', label: getCategoryLabel('all'), icon: '🌟' },
              { id: 'animals', label: getCategoryLabel('animals'), icon: '🦁' },
              { id: 'nature', label: getCategoryLabel('nature'), icon: '🌲' },
              { id: 'universe', label: getCategoryLabel('universe'), icon: '✨' }
            ] as const
          ).map((cat) => (
            <button
              key={cat.id}
              id={`puzzle-cat-${cat.id}`}
              onClick={() => {
                setSelectedCategory(cat.id);
                sound.playClick();
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Difficulty & Mode Selectors */}
        <div className="flex items-center gap-3 flex-wrap w-full lg:w-auto justify-end">
          {/* Game Mode Selector */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl">
            <button
              id="puzzle-mode-swap"
              onClick={() => {
                setGameMode('swap');
                sound.playClick();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                gameMode === 'swap'
                  ? 'bg-white text-purple-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('puzzleModeSwap')}
            </button>
            <button
              id="puzzle-mode-slide"
              onClick={() => {
                setGameMode('slide');
                sound.playClick();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                gameMode === 'slide'
                  ? 'bg-white text-purple-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('puzzleModeSlide')}
            </button>
          </div>

          {/* Grid Size / Difficulty Selector */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl">
            {(
              [
                { size: 2, label: '2×2' },
                { size: 3, label: '3×3' },
                { size: 4, label: '4×4' }
              ] as const
            ).map((d) => (
              <button
                key={d.size}
                id={`puzzle-diff-${d.size}`}
                onClick={() => {
                  setGridSize(d.size);
                  sound.playClick();
                }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                  gridSize === d.size
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title={`Grid: ${d.size}x${d.size}`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Puzzle Board & Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Game Board (7 cols) */}
        <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center">
          {/* Game Stats & Helper Toggles */}
          <div className="w-full max-w-md flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-3">
              {/* Moves Counter */}
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl">
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <span>
                  {t('puzzleMoves')}: <strong className="text-purple-700">{moves}</strong>
                </span>
              </div>

              {/* Timer */}
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl">
                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                <span>{formatTime(timerSeconds)}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Hint Ghost Toggle */}
              <button
                id="puzzle-toggle-hint"
                onClick={() => {
                  setShowHint(!showHint);
                  sound.playClick();
                }}
                className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
                  showHint
                    ? 'bg-amber-100 border-amber-300 text-amber-900'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
                title={t('puzzleHint')}
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t('puzzleHint')}</span>
              </button>

              {/* Show Numbers Toggle */}
              <button
                id="puzzle-toggle-numbers"
                onClick={() => {
                  setShowNumbers(!showNumbers);
                  sound.playClick();
                }}
                className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
                  showNumbers
                    ? 'bg-purple-100 border-purple-300 text-purple-900'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
                title={t('puzzleShowNumbers')}
              >
                <Hash className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Puzzle Board Canvas */}
          <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border-4 border-purple-200/90 shadow-lg bg-slate-900">
            {/* Ghost Hint Overlay (if enabled) */}
            {showHint && (
              <img
                src={activeItem.image}
                alt={activeItem.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none z-0"
              />
            )}

            {/* Grid Container */}
            <div
              className="absolute inset-0 grid gap-1 p-1 z-10 select-none"
              style={{
                gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`
              }}
            >
              {tiles.map((tileId, pos) => {
                // In sliding mode, empty tile is invisible unless solved
                const isEmptyTile = gameMode === 'slide' && tileId === emptyTileId && !isSolved;
                if (isEmptyTile) {
                  return (
                    <div
                      key={`empty-${pos}`}
                      className="w-full h-full rounded-xl bg-slate-800/60 border border-dashed border-purple-400/30 flex items-center justify-center text-purple-300/40 text-xs font-bold"
                    >
                      <span>•</span>
                    </div>
                  );
                }

                const origCol = tileId % gridSize;
                const origRow = Math.floor(tileId / gridSize);
                const isCorrect = tileId === pos;
                const isSelected = selectedPos === pos;

                // Mathematical percentage calculation for sprite tile
                const bgX = (origCol / (gridSize - 1)) * 100;
                const bgY = (origRow / (gridSize - 1)) * 100;

                return (
                  <motion.button
                    layout
                    key={tileId}
                    id={`puzzle-tile-${pos}`}
                    onClick={() => handleTileClick(pos)}
                    className={`relative w-full h-full rounded-xl overflow-hidden cursor-pointer transition-all active:scale-95 focus:outline-hidden ${
                      isSelected
                        ? 'ring-4 ring-amber-400 ring-offset-2 z-20 shadow-xl scale-[0.98]'
                        : isCorrect && !isSolved
                        ? 'ring-2 ring-emerald-400/70 border border-white/60'
                        : 'border border-white/50 hover:brightness-105'
                    }`}
                    style={{
                      backgroundImage: `url("${activeItem.image}")`,
                      backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
                      backgroundPosition: `${bgX}% ${bgY}%`
                    }}
                  >
                    {/* Visual indicators for kid assistance */}
                    {showNumbers && (
                      <span className="absolute top-1 left-1 w-5 h-5 rounded-full bg-black/65 text-white font-black text-[10px] flex items-center justify-center shadow-xs">
                        {tileId + 1}
                      </span>
                    )}

                    {isCorrect && !isSolved && (
                      <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                        <CheckCircle2 className="w-3 h-3" />
                      </span>
                    )}

                    {isSelected && (
                      <div className="absolute inset-0 bg-amber-400/25 animate-pulse" />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Victory Overlay Modal */}
            <AnimatePresence>
              {isSolved && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-30 bg-slate-900/85 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center text-white"
                >
                  <motion.button
                    initial={{ y: 20, scale: 0.8 }}
                    animate={{ 
                      y: 0, 
                      scale: [1, 1.08, 1],
                      rotate: [0, -4, 4, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatDelay: 3, 
                      duration: 1 
                    }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      triggerConfettiExplosion();
                      sound.playReward();
                    }}
                    id="puzzle-victory-trophy"
                    title="Click for celebratory confetti explosion!"
                    className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-950 flex items-center justify-center mb-3 shadow-lg shadow-amber-400/40 cursor-pointer focus:outline-hidden"
                  >
                    <Trophy className="w-8 h-8 fill-amber-950" />
                  </motion.button>

                  <h3 className="text-xl sm:text-2xl font-black font-display mb-1 text-yellow-300">
                    {t('puzzleSolved')}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 mb-3 max-w-xs">
                    {locActiveItem.name} — {moves} {t('puzzleMoves')} ({formatTime(timerSeconds)})
                  </p>

                  <div className="flex items-center gap-1 text-amber-300 mb-4 text-base">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      id="puzzle-victory-confetti-btn"
                      onClick={() => {
                        triggerConfettiExplosion();
                        sound.playReward();
                      }}
                      className="px-3 py-2 rounded-xl bg-amber-500/25 hover:bg-amber-500/40 text-amber-200 border border-amber-400/30 text-xs font-bold flex items-center gap-1 transition-all active:scale-95"
                      title="Explode Confetti"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>🎉</span>
                    </button>

                    <button
                      id="puzzle-play-sound-again"
                      onClick={() => triggerItemSound(activeItem)}
                      className="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{t('listenSound')}</span>
                    </button>

                    <button
                      id="puzzle-victory-next-btn"
                      onClick={handleNextPuzzle}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-black flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all active:scale-95"
                    >
                      <span>{t('puzzleNext')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Active Puzzle Card & Educational Facts (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Active Item Card */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-xl">
                  {activeItem.emoji}
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base font-display">
                    {locActiveItem.name}
                  </h3>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">
                    {getCategoryLabel(activeItem.category).replace(/^[^\s]+\s*/, '')}
                  </span>
                </div>
              </div>

              {completedItems[activeItem.id] && (
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t('correctAwesome')}</span>
                </div>
              )}
            </div>

            {/* Preview Reference Thumbnail */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-video group">
              <img
                src={activeItem.image}
                alt={locActiveItem.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-bold">
                  {locActiveItem.name}
                </span>
              </div>
            </div>

            {/* Fun Educational Fact */}
            <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs space-y-1">
              <div className="font-extrabold text-amber-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{t('didYouKnow')}</span>
              </div>
              <p className="text-amber-950 font-medium leading-relaxed">
                {locActiveItem.funFact}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 pt-1">
              <button
                id="puzzle-shuffle-current"
                onClick={() => {
                  shuffleBoard();
                  sound.playClick();
                }}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>{t('puzzleShuffle')}</span>
              </button>

              <button
                id="puzzle-next-btn-side"
                onClick={handleNextPuzzle}
                className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95"
              >
                <span>{t('puzzleNext')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Picture Selection Gallery Drawer / Carousel */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-extrabold text-slate-800 text-sm font-display flex items-center gap-2">
            <Puzzle className="w-4 h-4 text-purple-600" />
            <span>{t('puzzleChoosePicture')}</span>
            <span className="text-xs font-medium text-slate-400">
              ({filteredItems.length})
            </span>
          </h4>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {filteredItems.map((item) => {
            const isCurrent = item.id === activeItem.id;
            const isDone = completedItems[item.id];
            const locItem = getLocalizedPuzzleItem(item);
            return (
              <button
                key={item.id}
                id={`puzzle-pick-${item.id}`}
                onClick={() => handleSelectItem(item)}
                className={`relative rounded-2xl overflow-hidden border-2 text-left transition-all group active:scale-95 aspect-square ${
                  isCurrent
                    ? 'border-purple-600 ring-2 ring-purple-500/40 scale-105 shadow-md'
                    : 'border-slate-200 hover:border-purple-300'
                }`}
              >
                <img
                  src={item.image}
                  alt={locItem.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-1.5">
                  <span className="text-white text-[11px] font-bold truncate leading-tight">
                    {locItem.name}
                  </span>
                </div>

                {isDone && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                  </span>
                )}

                {isCurrent && (
                  <span className="absolute top-1 left-1 px-1 py-0.5 rounded-sm bg-purple-600 text-white text-[9px] font-black uppercase shadow-xs">
                    <Play className="w-2 h-2 fill-white inline" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
