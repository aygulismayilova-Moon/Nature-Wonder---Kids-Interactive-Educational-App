import React, { useState } from 'react';
import { useFirebase } from '../context/FirebaseContext';
import { useLanguage } from '../context/LanguageContext';
import { sound } from '../utils/soundEngine';
import { 
  X, 
  Heart, 
  BookOpen, 
  Plus, 
  Trash2, 
  Sparkles, 
  Trophy, 
  Compass, 
  LogOut, 
  Smile,
  Search,
  CheckCircle2,
  Cloud
} from 'lucide-react';

interface ExplorerJournalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMOJI_OPTIONS = ['🦁', '🌿', '🌌', '🐬', '🌋', '⭐', '🌈', '🦅', '🦋', '🍄', '🦖', '🔭'];
const CATEGORY_OPTIONS = ['Animals & Wildlife', 'Nature & Weather', 'Cosmic & Space', 'Shapes in Nature', 'Tastes & Sensations'];

export const ExplorerJournalModal: React.FC<ExplorerJournalModalProps> = ({ isOpen, onClose }) => {
  const { 
    user, 
    userProfile, 
    signInWithGoogle, 
    signOutUser, 
    favorites, 
    toggleFavorite, 
    soundGameHighScore,
    discoveries, 
    addDiscovery, 
    deleteDiscovery 
  } = useFirebase();
  const { t, language } = useLanguage();

  const getCategoryName = (cat: string) => {
    switch (cat) {
      case 'Animals & Wildlife':
        return language === 'az' ? '🦁 Vəhşi Heyvanlar' : language === 'tr' ? '🦁 Vahşi Hayvanlar' : language === 'ru' ? '🦁 Животные' : '🦁 Animals & Wildlife';
      case 'Nature & Weather':
        return language === 'az' ? '🌿 Təbiət və Hava' : language === 'tr' ? '🌿 Doğa ve Hava' : language === 'ru' ? '🌿 Природа и Погода' : '🌿 Nature & Weather';
      case 'Cosmic & Space':
        return language === 'az' ? '🪐 Kosmos və Kainat' : language === 'tr' ? '🪐 Uzay ve Evren' : language === 'ru' ? '🪐 Космос и Вселенная' : '🪐 Cosmic & Space';
      case 'Shapes in Nature':
        return language === 'az' ? '🔷 Həndəsi Fiqurlar' : language === 'tr' ? '🔷 Geometrik Şekiller' : language === 'ru' ? '🔷 Геометрические фигуры' : '🔷 Shapes in Nature';
      case 'Tastes & Sensations':
        return language === 'az' ? '🍽️ Qidalar və Dadlar' : language === 'tr' ? '🍽️ Gıdalar ve Tatlar' : language === 'ru' ? '🍽️ Еда и Вкусы' : '🍽️ Tastes & Sensations';
      default:
        return cat;
    }
  };

  const [activeTab, setActiveTab] = useState<'favorites' | 'journal' | 'stats'>('favorites');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState(CATEGORY_OPTIONS[0]);
  const [newNotes, setNewNotes] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState(EMOJI_OPTIONS[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [journalFilter, setJournalFilter] = useState('');

  if (!isOpen) return null;

  const handleSaveDiscovery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setIsSubmitting(true);
    try {
      await addDiscovery({
        title: newTitle.trim(),
        category: newCategory,
        notes: newNotes.trim(),
        emoji: selectedEmoji,
      });
      sound.playSuccess();
      setNewTitle('');
      setNewNotes('');
    } catch (err) {
      console.error('Failed to add discovery:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredDiscoveries = discoveries.filter(d => 
    d.title.toLowerCase().includes(journalFilter.toLowerCase()) ||
    d.notes.toLowerCase().includes(journalFilter.toLowerCase()) ||
    d.category.toLowerCase().includes(journalFilter.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border-2 border-emerald-100 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl shadow-inner">
              📖
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold font-display flex items-center gap-2">
                <span>{t('explorerJournal')}</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-400/30 border border-emerald-300/40 text-emerald-100">
                  Firebase Cloud Sync
                </span>
              </h2>
              <p className="text-xs text-emerald-100 font-medium">
                {user 
                  ? `${user.displayName || 'Nature Explorer'}`
                  : 'Firebase Cloud Storage'}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
            title={t('close')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50/80 px-4 pt-2 gap-2 text-xs sm:text-sm font-bold">
          <button
            onClick={() => {
              setActiveTab('favorites');
              sound.playClick();
            }}
            className={`pb-2.5 px-3 border-b-2 flex items-center gap-1.5 transition-all ${
              activeTab === 'favorites'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>{t('myFavorites')} ({favorites.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('journal');
              sound.playClick();
            }}
            className={`pb-2.5 px-3 border-b-2 flex items-center gap-1.5 transition-all ${
              activeTab === 'journal'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4 text-teal-600" />
            <span>{t('myDiscoveries')} ({discoveries.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('stats');
              sound.playClick();
            }}
            className={`pb-2.5 px-3 border-b-2 flex items-center gap-1.5 transition-all ${
              activeTab === 'stats'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>{t('statsTitle')}</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {!user ? (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center space-y-3">
              <div className="text-3xl">☁️</div>
              <h3 className="text-base font-bold text-slate-800 font-display">
                {t('signInGoogleTitle')}
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                {t('signInGoogleDesc')}
              </p>
              <button
                onClick={() => {
                  sound.playClick();
                  signInWithGoogle();
                }}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                <span>{t('signInGoogle')}</span>
              </button>
            </div>
          ) : null}

          {/* TAB 1: FAVORITES */}
          {activeTab === 'favorites' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{t('clickToReadOrRemove')}</span>
                <span className="font-bold text-emerald-700">{favorites.length} {t('itemsSaved')}</span>
              </div>

              {favorites.length === 0 ? (
                <div className="text-center py-12 px-4 border-2 border-dashed border-slate-200 rounded-2xl">
                  <Heart className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <p className="font-bold text-slate-700 text-sm">{t('emptyFavorites')}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {t('noFavoritesDesc')}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {favorites.map((fav) => (
                    <div
                      key={fav.id}
                      className="p-3 bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 rounded-2xl flex items-center justify-between transition-all group"
                    >
                      <div 
                        onClick={() => {
                          sound.playClick();
                          sound.speak(fav.title, language);
                        }}
                        className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                      >
                        <span className="text-2xl p-2 bg-white rounded-xl shadow-xs border border-slate-100">
                          {fav.emoji}
                        </span>
                        <div className="truncate">
                          <h4 className="text-sm font-bold text-slate-800 truncate group-hover:text-emerald-800">
                            {fav.title}
                          </h4>
                          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                            {fav.itemType}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          sound.playClick();
                          toggleFavorite({
                            itemId: fav.itemId,
                            itemType: fav.itemType,
                            title: fav.title,
                            emoji: fav.emoji,
                          });
                        }}
                        className="p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors ml-2 shrink-0"
                        title={t('removeFromFavorites')}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: FIELD NOTES / DISCOVERIES */}
          {activeTab === 'journal' && (
            <div className="space-y-6">
              {/* Add New Discovery Form */}
              <form onSubmit={handleSaveDiscovery} className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-extrabold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Plus className="w-4 h-4 text-emerald-600" />
                    <span>{t('logNewDiscovery')}</span>
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">{t('whatDidYouFind')}</label>
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder={t('discoveryPlaceholder')}
                      maxLength={100}
                      required
                      className="w-full text-xs font-semibold px-3 py-2 rounded-xl bg-white border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">{t('topic')}</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full text-xs font-semibold px-2.5 py-2 rounded-xl bg-white border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      {CATEGORY_OPTIONS.map((cat) => (
                        <option key={cat} value={cat}>{getCategoryName(cat)}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">{t('chooseSticker')}</label>
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                    {EMOJI_OPTIONS.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => setSelectedEmoji(emoji)}
                        className={`text-lg p-1.5 rounded-xl border transition-all ${
                          selectedEmoji === emoji
                            ? 'bg-white border-emerald-500 shadow-sm scale-110'
                            : 'bg-white/60 border-slate-200 hover:bg-white'
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">{t('fieldNotesLabel')}</label>
                  <textarea
                    value={newNotes}
                    onChange={(e) => setNewNotes(e.target.value)}
                    placeholder={t('fieldNotesPlaceholder')}
                    maxLength={1000}
                    rows={2}
                    className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting || !newTitle.trim()}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs shadow-sm flex items-center gap-1.5 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t('saveToCloudJournal')}</span>
                  </button>
                </div>
              </form>

              {/* Discoveries List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                    {t('savedObservations')} ({discoveries.length})
                  </h4>
                  {discoveries.length > 0 && (
                    <input
                      type="text"
                      value={journalFilter}
                      onChange={(e) => setJournalFilter(e.target.value)}
                      placeholder={t('filterNotes')}
                      className="text-xs px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:bg-white"
                    />
                  )}
                </div>

                {discoveries.length === 0 ? (
                  <div className="text-center py-8 px-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs">
                    {t('noNotesYet')}
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {filteredDiscoveries.map((disc) => (
                      <div
                        key={disc.id}
                        className="p-3.5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-teal-300 transition-all space-y-1.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl p-1.5 bg-teal-50 border border-teal-100 rounded-xl">
                              {disc.emoji}
                            </span>
                            <div>
                              <h5 className="text-sm font-bold text-slate-800">{disc.title}</h5>
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                {getCategoryName(disc.category)}
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              sound.playClick();
                              deleteDiscovery(disc.id);
                            }}
                            className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg transition-colors"
                            title={t('delete')}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {disc.notes && (
                          <p className="text-xs text-slate-600 pl-10">
                            {disc.notes}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: STATS & ACCOUNT */}
          {activeTab === 'stats' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-center space-y-1">
                  <Trophy className="w-6 h-6 text-amber-600 mx-auto" />
                  <span className="text-xl font-extrabold text-amber-900">{soundGameHighScore}</span>
                  <p className="text-[11px] font-bold text-amber-700">{t('mysteryHighScore')}</p>
                </div>

                <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-center space-y-1">
                  <Heart className="w-6 h-6 text-rose-500 mx-auto fill-rose-500" />
                  <span className="text-xl font-extrabold text-rose-900">{favorites.length}</span>
                  <p className="text-[11px] font-bold text-rose-700">{t('favoritedWonders')}</p>
                </div>

                <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl text-center space-y-1 col-span-2 sm:col-span-1">
                  <BookOpen className="w-6 h-6 text-teal-600 mx-auto" />
                  <span className="text-xl font-extrabold text-teal-900">{discoveries.length}</span>
                  <p className="text-[11px] font-bold text-teal-700">{t('fieldDiscoveriesCount')}</p>
                </div>
              </div>

              {user && (
                <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {user.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt={user.displayName || 'Avatar'} 
                        className="w-10 h-10 rounded-full border border-emerald-300"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
                        {(user.displayName || 'U')[0]}
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-bold text-slate-800">{user.displayName || 'Explorer'}</div>
                      <div className="text-xs text-slate-400">{user.email}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      sound.playClick();
                      signOutUser();
                    }}
                    className="px-3.5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>{t('signOut')}</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400 px-5">
          <div className="flex items-center gap-1 text-emerald-700 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Firebase Firestore Enterprise Storage Active</span>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-4 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};
