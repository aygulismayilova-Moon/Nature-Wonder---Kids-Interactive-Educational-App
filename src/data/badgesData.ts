import { DigitalBadge } from '../types';

export const INITIAL_DIGITAL_BADGES: DigitalBadge[] = [
  {
    id: 'first_quiz',
    category: 'quiz',
    icon: '🌟',
    isUnlocked: false,
    rewardPoints: 50,
    title: {
      az: 'İlk Kəşf',
      tr: 'İlk Keşif',
      ru: 'Первое открытие',
      en: 'First Discovery'
    },
    description: {
      az: 'İlk sınaq oyununu uğurla tamamladın!',
      tr: 'İlk bilgi yarışmasını başarıyla tamamladın!',
      ru: 'Ты успешно завершил свою первую викторину!',
      en: 'Successfully completed your first quiz adventure!'
    },
    requirementText: {
      az: '1 sınaq oyunu tamamla',
      tr: '1 bilgi yarışması tamamla',
      ru: 'Заверши 1 викторину',
      en: 'Complete 1 quiz'
    }
  },
  {
    id: 'cheetah_streak',
    category: 'streak',
    icon: '🐆',
    isUnlocked: false,
    rewardPoints: 100,
    title: {
      az: 'Cəld Gepard',
      tr: 'Hızlı Çita',
      ru: 'Быстрый Гепард',
      en: 'Speedy Cheetah'
    },
    description: {
      az: 'Ardıcıl 3 və ya daha çox suala düzgün cavab verdin!',
      tr: 'Üst üste 3 veya daha fazla soruya doğru cevap verdin!',
      ru: 'Дал 3 или более правильных ответов подряд без ошибок!',
      en: 'Answered 3 or more questions correctly in a row!'
    },
    requirementText: {
      az: '3 suala dalbadal düzgün cavab ver',
      tr: 'Art arda 3 doğru cevap ver',
      ru: 'Ответь на 3 вопроса подряд правильно',
      en: 'Get a 3-question correct streak'
    }
  },
  {
    id: 'high_scorer',
    category: 'mastery',
    icon: '🎯',
    isUnlocked: false,
    rewardPoints: 120,
    title: {
      az: 'Bilik Çempionu',
      tr: 'Bilgi Şampiyonu',
      ru: 'Знаток природы',
      en: 'Quiz Sharpshooter'
    },
    description: {
      az: 'Sınaqda 80% və ya daha yüksək xal topladın!',
      tr: 'Yarışmada %80 veya daha yüksek puan kazandın!',
      ru: 'Набрал 80% или более правильных ответов в викторине!',
      en: 'Scored 80% or higher in a quiz session!'
    },
    requirementText: {
      az: 'Sınaqda 80%+ nəticə göstər',
      tr: 'Yarışmada %80+ skor yap',
      ru: 'Получи 80%+ в викторине',
      en: 'Score 80%+ in any quiz'
    }
  },
  {
    id: 'perfect_ten',
    category: 'mastery',
    icon: '👑',
    isUnlocked: false,
    rewardPoints: 200,
    title: {
      az: 'Möcüzə Dahisi',
      tr: 'Doğa Dahisi',
      ru: 'Гений природы',
      en: 'Nature Genius'
    },
    description: {
      az: 'Bütün 10 sualın hamısına qüsursuz düzgün cavab verdin (10/10)!',
      tr: '10 sorunun tamamına eksiksiz doğru cevap verdin (10/10)!',
      ru: 'Ответил абсолютно правильно на все 10 вопросов (10/10)!',
      en: 'Scored a flawless 10/10 in a quiz session!'
    },
    requirementText: {
      az: '10/10 tam düzgün nəticə qazan',
      tr: '10/10 tam puan al',
      ru: 'Получи 10 из 10 баллов',
      en: 'Get a perfect 10/10 score'
    }
  },
  {
    id: 'animals_expert',
    category: 'quiz',
    icon: '🦁',
    isUnlocked: false,
    rewardPoints: 80,
    title: {
      az: 'Vəhşi Təbiət Mühafizi',
      tr: 'Yaban Hayatı Koruyucusu',
      ru: 'Защитник животных',
      en: 'Wildlife Ranger'
    },
    description: {
      az: 'Heyvanlar Aləmi sınağını tamamladın!',
      tr: 'Hayvanlar Alemi yarışmasını tamamladın!',
      ru: 'Завершил викторину о диких животных!',
      en: 'Completed the Wildlife & Animals quiz!'
    },
    requirementText: {
      az: 'Heyvanlar sınağını bitir',
      tr: 'Hayvanlar yarışmasını bitir',
      ru: 'Пройди викторину о животных',
      en: 'Finish the Animals quiz'
    }
  },
  {
    id: 'nature_guardian',
    category: 'quiz',
    icon: '🌈',
    isUnlocked: false,
    rewardPoints: 80,
    title: {
      az: 'Təbiət Tədqiqatçısı',
      tr: 'Doğa Kaşifi',
      ru: 'Исследователь природы',
      en: 'Nature Wonder Seeker'
    },
    description: {
      az: 'Təbiət Möcüzələri sınağını tamamladın!',
      tr: 'Doğa Harikaları yarışmasını tamamladın!',
      ru: 'Завершил викторину о силах природы!',
      en: 'Completed the Nature Wonders quiz!'
    },
    requirementText: {
      az: 'Təbiət sınağını bitir',
      tr: 'Doğa yarışmasını bitir',
      ru: 'Пройди викторину о природе',
      en: 'Finish the Nature quiz'
    }
  },
  {
    id: 'cosmic_voyager',
    category: 'quiz',
    icon: '🪐',
    isUnlocked: false,
    rewardPoints: 80,
    title: {
      az: 'Kosmos Səyyahı',
      tr: 'Uzay Gezgini',
      ru: 'Космический странник',
      en: 'Cosmic Voyager'
    },
    description: {
      az: 'Kainat və Kosmos sınağını tamamladın!',
      tr: 'Evren ve Uzay yarışmasını tamamladın!',
      ru: 'Завершил космическую викторину!',
      en: 'Completed the Universe & Space quiz!'
    },
    requirementText: {
      az: 'Kainat sınağını bitir',
      tr: 'Uzay yarışmasını bitir',
      ru: 'Пройди викторину о космосе',
      en: 'Finish the Universe quiz'
    }
  },
  {
    id: 'geometry_whiz',
    category: 'quiz',
    icon: '📐',
    isUnlocked: false,
    rewardPoints: 80,
    title: {
      az: 'Həndəsə Ustası',
      tr: 'Geometri Ustası',
      ru: 'Мастер геометрии',
      en: 'Geometry Whiz'
    },
    description: {
      az: 'Həndəsi Fiqurlar sınağını tamamladın!',
      tr: 'Geometrik Şekiller yarışmasını tamamladın!',
      ru: 'Завершил викторину о фигурах!',
      en: 'Completed the Shapes & Geometry quiz!'
    },
    requirementText: {
      az: 'Fiqurlar sınağını bitir',
      tr: 'Şekiller yarışmasını bitir',
      ru: 'Пройди викторину о фигурах',
      en: 'Finish the Shapes quiz'
    }
  },
  {
    id: 'taste_detective',
    category: 'quiz',
    icon: '🍋',
    isUnlocked: false,
    rewardPoints: 80,
    title: {
      az: 'Dad Detektivi',
      tr: 'Tat Dedektifi',
      ru: 'Детектив вкусов',
      en: 'Flavor Detective'
    },
    description: {
      az: 'Qidalar və Hisslər sınağını tamamladın!',
      tr: 'Yiyecekler ve Duyular yarışmasını tamamladın!',
      ru: 'Завершил викторину о еде и вкусах!',
      en: 'Completed the Foods & Sensations quiz!'
    },
    requirementText: {
      az: 'Qidalar sınağını bitir',
      tr: 'Duyular yarışmasını bitir',
      ru: 'Пройди викторину о еде',
      en: 'Finish the Foods quiz'
    }
  },
  {
    id: 'numbers_hero',
    category: 'quiz',
    icon: '🔢',
    isUnlocked: false,
    rewardPoints: 80,
    title: {
      az: 'Əlifba və Rəqəm Qəhrəmanı',
      tr: 'Alfabe ve Sayı Kahramanı',
      ru: 'Герой букв и чисел',
      en: 'Numbers & Letters Hero'
    },
    description: {
      az: 'Rəqəmlər və Əlifba sınağını tamamladın!',
      tr: 'Sayılar ve Alfabe yarışmasını tamamladın!',
      ru: 'Завершил викторину о числах и буквах!',
      en: 'Completed the Numbers & Alphabet quiz!'
    },
    requirementText: {
      az: 'Rəqəm və əlifba sınağını bitir',
      tr: 'Sayılar yarışmasını bitir',
      ru: 'Пройди викторину о буквах',
      en: 'Finish the Numbers & Alphabet quiz'
    }
  },
  {
    id: 'multi_category_master',
    category: 'exploration',
    icon: '🗺️',
    isUnlocked: false,
    rewardPoints: 150,
    title: {
      az: 'Böyük Səyyah',
      tr: 'Büyük Gezgin',
      ru: 'Великий картограф',
      en: 'Grand Explorer'
    },
    description: {
      az: 'Ən azı 3 fərqli bölmənin sınaqlarını kəşf etdin!',
      tr: 'En az 3 farklı kategoride yarışma denedin!',
      ru: 'Исследовал минимум 3 различные категории викторин!',
      en: 'Explored quizzes in at least 3 distinct categories!'
    },
    requirementText: {
      az: '3 müxtəlif bölməni sına',
      tr: '3 farklı kategoriyi dene',
      ru: 'Попробуй 3 разные категории',
      en: 'Play 3 different quiz categories'
    }
  },
  {
    id: 'quiz_veteran',
    category: 'mastery',
    icon: '🏆',
    isUnlocked: false,
    rewardPoints: 250,
    title: {
      az: 'Sınaq Ustası',
      tr: 'Yarışma Ustası',
      ru: 'Ветеран викторин',
      en: 'Master Naturalist'
    },
    description: {
      az: 'Cəmi 5 və ya daha çox sınaq oyunu tamamladın!',
      tr: 'Toplam 5 veya daha fazla bilgi yarışması tamamladın!',
      ru: 'Завершил 5 или более полных викторин!',
      en: 'Completed 5 or more total quiz adventures!'
    },
    requirementText: {
      az: '5 sınaq oyunu tamamla',
      tr: 'Toplam 5 yarışma tamamla',
      ru: 'Заверши 5 викторин',
      en: 'Complete 5 total quizzes'
    }
  }
];

export const EXPLORER_AVATARS = [
  '🦁', '🐬', '🦊', '🦉', '🚀', '🌟', '🐼', '🦋', '🦖', '🐨', '🦄', '🦅'
];

export const SUGGESTED_EXPLORER_NAMES = [
  'Ayla', 'Emir', 'Leo', 'Maya', 'Sam', 'Zara', 'Deniz', 'Murad', 'Leyla', 'Oliver'
];
