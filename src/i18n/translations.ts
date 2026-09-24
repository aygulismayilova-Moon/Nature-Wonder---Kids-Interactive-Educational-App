import { Language } from '../types';

export interface TranslationDictionary {
  // Brand
  appName: string;
  appBadge: string;
  appSubtitle: string;
  welcomeGreeting: string;

  // Nav Sections
  sectionWorld: string;
  sectionShapes: string;
  sectionSensations: string;
  sectionPuzzle: string;
  sectionQuiz: string;

  // World Subsections
  subnavAnimals: string;
  subnavNature: string;
  subnavUniverse: string;

  // Shapes Subsections
  subnavPlane: string;
  subnavSolid: string;
  subnavShapesQuiz: string;

  // Sensations Subsections
  subnavTasteExplorer: string;
  subnavSensationsSorter: string;

  // Animal Explorer UI
  sectionAnimalsBadge: string;
  animalExplorerTitle: string;
  animalExplorerSubtitle: string;
  badgeNew: string;
  tabSpotlight: string;
  tabCatalog: string;
  tabPictureGame: string;
  searchAnimalsPlaceholder: string;
  filterHabitat: string;
  filterGroup: string;
  allHabitats: string;
  allGroups: string;
  listenSound: string;
  pronounce: string;
  watchVideo: string;
  funFact: string;
  didYouKnow: string;
  size: string;
  lifespan: string;
  speed: string;
  diet: string;
  habitat: string;
  viewAngles: string;
  angleAll: string;
  angleFront: string;
  angleSide: string;
  angleBack: string;
  details: string;
  noAnimalsFound: string;
  clearFilters: string;

  // Animal Picture Mystery Game
  mysteryGameTitle: string;
  mysteryGameSubtitle: string;
  mysteryQuestion: string;
  score: string;
  correctAwesome: string;
  tryAgain: string;
  nextCreature: string;
  playAgain: string;

  // Nature Explorer UI
  natureTitle: string;
  natureSubtitle: string;
  listenToNature: string;
  kidActivity: string;
  whyItMatters: string;

  // Universe Explorer UI
  universeTitle: string;
  universeSubtitle: string;
  cosmicWonder: string;
  listenCosmicHum: string;

  // Shapes Explorer UI
  shapesTitle: string;
  shapesSubtitle: string;
  planeTitle: string;
  planeSubtitle: string;
  solidTitle: string;
  solidSubtitle: string;
  sides: string;
  vertices: string;
  faces: string;
  edges: string;
  countSides: string;
  countCorners: string;
  whereToSpot: string;
  shapeSecret: string;
  realWorldExamples: string;
  testYourKnowledge: string;
  shapeQuizTitle: string;
  shapeQuizSubtitle: string;
  question: string;
  scoreLabel: string;
  congratulations: string;
  perfectScore: string;
  greatEffort: string;
  restartQuiz: string;
  revealAnswer: string;
  selectedAnswer: string;

  // Sensations Explorer UI
  sensationsTitle: string;
  sensationsSubtitle: string;
  feedMunchy: string;
  munchyReaction: string;
  funTastingTip: string;
  sensationSweet: string;
  sensationSpicy: string;
  sensationSour: string;
  sensationHot: string;
  sensationCold: string;
  sorterTitle: string;
  sorterSubtitle: string;
  sorterInstruction: string;
  dragOrTap: string;
  dropFoodHere: string;
  allSortedCelebration: string;
  resetGame: string;

  // Journal & Auth
  explorerJournal: string;
  myFavorites: string;
  myDiscoveries: string;
  statsTitle: string;
  signInGoogle: string;
  signOut: string;
  addDiscovery: string;
  discoveryTitle: string;
  discoveryNotes: string;
  category: string;
  saveDiscovery: string;
  emptyFavorites: string;
  emptyDiscoveries: string;
  close: string;

  // Audio Controls & Footer
  soundMuted: string;
  soundActive: string;
  designedForKids: string;
  madeWithLove: string;
  languageSelect: string;
  aiVoiceBadge: string;
  aiVoiceSelectTitle: string;
  aiVoiceKore: string;
  aiVoiceZephyr: string;
  aiVoicePuck: string;
  aiVoiceFenrir: string;
  testVoice: string;
  testVoicePhrase: string;

  // Voiceover Studio
  voiceoverStudio: string;
  myVoiceovers: string;
  addVoiceover: string;
  recordVoice: string;
  recordingInProgress: string;
  stopRecording: string;
  saveVoiceover: string;
  deleteVoiceover: string;
  listenRecording: string;
  uploadAudio: string;
  customVoiceActive: string;
  customVoiceInactive: string;
  recordedCount: string;
  noRecordingsYet: string;
  searchItemsToRecord: string;
  micPermissionPrompt: string;
  recordingSuccess: string;
  recordCustomPhrase: string;
  enterPhrasePlaceholder: string;
  voiceoverStudioDesc: string;

  // Puzzle Game
  puzzleTitle: string;
  puzzleSubtitle: string;
  puzzleDifficulty: string;
  puzzleEasy: string;
  puzzleMedium: string;
  puzzleHard: string;
  puzzleModeSwap: string;
  puzzleModeSlide: string;
  puzzleMoves: string;
  puzzleTime: string;
  puzzleHint: string;
  puzzleShowNumbers: string;
  puzzleSolved: string;
  puzzleNext: string;
  puzzleShuffle: string;
  puzzleChoosePicture: string;
  playPuzzle: string;

  // Additional UI Localization Keys
  allPictures: string;
  verifiedPhoto: string;
  angleTurnaround: string;
  angleFrontView: string;
  angleSideView: string;
  angleBackView: string;
  removeFromFavorites: string;
  addToFavorites: string;
  listenYourVoice: string;
  recordVoiceForItem: string;
  openInYoutube: string;
  backupDownload: string;
  backupRestore: string;
  selectAnotherItem: string;
  recordAgain: string;
  selectItemToRecord: string;
  voiceoverInstruction: string;
  categoryPhrases: string;
  readyRecordings: string;
  delete: string;
  selectAction: string;
  signInGoogleTitle: string;
  signInGoogleDesc: string;
  itemsSaved: string;
  clickToReadOrRemove: string;
  noFavoritesDesc: string;
  logNewDiscovery: string;
  whatDidYouFind: string;
  discoveryPlaceholder: string;
  topic: string;
  chooseSticker: string;
  fieldNotesLabel: string;
  fieldNotesPlaceholder: string;
  saveToCloudJournal: string;
  savedObservations: string;
  filterNotes: string;
  noNotesYet: string;
  mysteryHighScore: string;
  favoritedWonders: string;
  fieldDiscoveriesCount: string;
  spinLeft: string;
  spinRight: string;
  nextQuestion: string;

  // Numbers & Alphabet Section
  sectionNumbersAlphabet: string;
  subnavAlphabet: string;
  subnavNumbers: string;
  subnavNumbersAlphabetQuiz: string;
  alphabetTitle: string;
  alphabetSubtitle: string;
  listenLetter: string;
  listenWord: string;
  practiceWriting: string;
  clearCanvas: string;
  strokeColor: string;
  allLetters: string;
  uppercaseLowercase: string;
  numbersTitle: string;
  numbersSubtitle: string;
  tapToCount: string;
  countedCount: string;
  addOne: string;
  subtractOne: string;
  resetCounting: string;
  numberFunFact: string;
  numberQuizTitle: string;
  numberQuizSubtitle: string;
  quizFindLetter: string;
  quizCountItems: string;
  questionNumber: string;
  quizCorrect: string;
  quizIncorrect: string;

  // Daily Random Fact UI
  dailyFactTitle: string;
  dailyFactBadge: string;
  dailyFactSubtitle: string;
  exploreInWorld: string;
  solvePuzzle: string;
  nextFact: string;
  previousFact: string;
  todaysFact: string;
  showOnStartup: string;
  iLearnedThis: string;
  learnedAwesome: string;
  listenFact: string;
  playSound: string;
  dailyWonderButton: string;
  categoryAnimal: string;
  categoryNature: string;
  categoryUniverse: string;
}

export const UI_TRANSLATIONS: Record<Language, TranslationDictionary> = {
  az: {
    // Brand
    appName: 'Təbiət və Möcüzələr',
    appBadge: 'Uşaq Kəşfiyyatçısı',
    appSubtitle: 'Heyvanları, Təbiəti, Kosmik Möcüzələri, Həndəsi Fiqurları və Qida Hisslərini Kəşf Et',
    welcomeGreeting: 'Təbiət və Möcüzələrə xoş gəldiniz! Gəlin birlikdə heyrətamiz dünyamızı kəşf edək!',

    // Nav Sections
    sectionWorld: '1. Ətrafımızdakı Dünya',
    sectionShapes: '2. Həndəsi Fiqurlar',
    sectionSensations: '3. Qidalar və Hisslər',
    sectionPuzzle: '4. Pazl Oyunu',
    sectionQuiz: '6. Ümumi Viktorina',

    // World Subsections
    subnavAnimals: '1.1 Heyvanlar (1,000 Kataloq)',
    subnavNature: '1.2 Təbiət Ünsürləri',
    subnavUniverse: '1.3 Kainat Ünsürləri',

    // Shapes Subsections
    subnavPlane: '2.1 Müstəvi Fiqurlar (Üçbucaq və Dördbucaqlılar)',
    subnavSolid: '2.2 Fəza Fiqurları (Kub, Konus və 3D)',
    subnavShapesQuiz: 'Həndəsə Detektivi Oyunu',

    // Sensations Subsections
    subnavTasteExplorer: 'Dad və Temperatur Kəşfiyyatı',
    subnavSensationsSorter: 'Hissləri Qruplaşdırma Oyunu',

    // Animal Explorer UI
    sectionAnimalsBadge: 'Bölmə 1.1 • Heyvanlar Aləmi',
    animalExplorerTitle: 'Dünyanın 1,000 Heyvanı ilə Tanış Olun! 🦁🐘🐬',
    animalExplorerSubtitle: 'Onların təbii səslərini dinləyin, 9 vəhşi təbiət məskənini kəşf edin və adları, qidalanmaları ilə maraqlı faktları öyrənin!',
    badgeNew: 'Yeni',
    tabSpotlight: 'Seçilmiş Heyvanlar',
    tabCatalog: '1,000 Heyvan Kataloqu',
    tabPictureGame: 'Şəkilli Tapmaca Oyunu',
    searchAnimalsPlaceholder: 'Heyvan axtarın (məs. Aslan, Qartal, Zürafə)...',
    filterHabitat: 'Məkan / Mühit',
    filterGroup: 'Heyvan Qrupu',
    allHabitats: 'Bütün Mühitlər',
    allGroups: 'Bütün Qruplar',
    listenSound: 'Səsi Dinlə',
    pronounce: 'Tələffüz Et',
    watchVideo: 'Videoya Bax',
    funFact: 'Maraqlı Fakt',
    didYouKnow: 'Bilirdinizmi?',
    size: 'Ölçü / Çəki',
    lifespan: 'Ömür',
    speed: 'Sürət',
    diet: 'Qidalanma',
    habitat: 'Yaşayış Mühiti',
    viewAngles: 'Fərqli Bucaqlar',
    angleAll: 'Bütün Bucaqlar',
    angleFront: 'Öndən Görünüş',
    angleSide: 'Yandan Görünüş',
    angleBack: 'Arxadan Görünüş',
    details: 'Ətraflı Məlumat',
    noAnimalsFound: 'Axtarışınıza uyğun heç bir heyvan tapılmadı.',
    clearFilters: 'Filtrləri Sıfırla',

    // Animal Picture Mystery Game
    mysteryGameTitle: 'Şəkilli Heyvan Tapmacası',
    mysteryGameSubtitle: 'Şəklə diqqətlə bax və bu heyrətamiz canlının adını tap!',
    mysteryQuestion: 'Bu şəkildə hansı heyvan göstərilib?',
    score: 'Xal',
    correctAwesome: 'Afərin! Düzgün tapdın!',
    tryAgain: 'Yaxın idi! Yenidən cəhd et!',
    nextCreature: 'Növbəti Canlı',
    playAgain: 'Yenidən Oyna',

    // Nature Explorer UI
    natureTitle: 'Təbiət Ünsürləri',
    natureSubtitle: 'Dağlar, meşələr, axar çaylar, uca şəlalələr və bərəkətli yağış!',
    listenToNature: 'Təbiətin Səsini Dinlə',
    kidActivity: 'Uşaqlar üçün Təcrübə',
    whyItMatters: 'Bu Niyə Vacibdir?',

    // Universe Explorer UI
    universeTitle: 'Kainatın və Kosmosun Möcüzələri',
    universeSubtitle: 'Qızılı Günəş, işıqlı Ay, sayrışan ulduzlar, göyqurşağı və kometlər!',
    cosmicWonder: 'Kosmik Möcüzə',
    listenCosmicHum: 'Kosmik Səsi Dinlə',

    // Shapes Explorer UI
    shapesTitle: 'Həndəsi Fiqurlar Dünyası',
    shapesSubtitle: '2D müstəvi və 3D fəza fiqurlarını kəşf et, tərəfləri və küncləri say!',
    planeTitle: 'Müstəvi (2D) Həndəsi Fiqurlar',
    planeSubtitle: 'Üçbucaqlar və dördbucaqlılar: kvadrat, düzbucaqlı, romb və trapeziya!',
    solidTitle: 'Fəza (3D) Həndəsi Fiqurlar',
    solidSubtitle: 'Kub, konus, silindr və kürə: gündəlik həyatımızda üçölçülü formalar!',
    sides: 'Tərəflər',
    vertices: 'Təpələr',
    faces: 'Üzlər',
    edges: 'Tillər',
    countSides: 'Tərəfləri Say',
    countCorners: 'Küncləri Say',
    whereToSpot: 'Harada Görmək Olar',
    shapeSecret: 'Fiqurun Sirri',
    realWorldExamples: 'Gündəlik Həyatdan Nümunələr',
    testYourKnowledge: 'Biliyini Yoxla',
    shapeQuizTitle: 'Həndəsə Detektivi Oyunu',
    shapeQuizSubtitle: 'İpuclarını oxu və gizli fiquru tap!',
    question: 'Sual',
    scoreLabel: 'Nəticə',
    congratulations: 'Təbriklər!',
    perfectScore: 'Mükəmməl nəticə! Sən əsl Həndəsə Detektivisən!',
    greatEffort: 'Əla cəhd! Təcrübə etməyə davam et!',
    restartQuiz: 'Oyuna Yenidən Başla',
    revealAnswer: 'Cavabı Göstər',
    selectedAnswer: 'Seçilmiş Cavab',

    // Sensations Explorer UI
    sensationsTitle: 'Qidalar və Dad Hissləri',
    sensationsSubtitle: 'Munchy-ni yedizdir və şirin, acı, turş, qaynar və soyuq hissləri öyrən!',
    feedMunchy: 'Munchy-ni Yedizdir!',
    munchyReaction: 'Munchy-nin Reaksiyası',
    funTastingTip: 'Faydalı Dad Məsləhəti',
    sensationSweet: 'Şirin',
    sensationSpicy: 'Acı / Yandırıcı',
    sensationSour: 'Turş',
    sensationHot: 'Qaynar / İsti',
    sensationCold: 'Soyuq / Buzlu',
    sorterTitle: 'Dad və Hissləri Qruplaşdırma Oyunu',
    sorterSubtitle: 'Yeməkləri şirin, acı, turş, qaynar və soyuq qablara payla!',
    sorterInstruction: 'Aşağıdakı qidanı uyğun hissin qabına toxunaraq yerləşdir:',
    dragOrTap: 'Seçmək üçün qaba toxun',
    dropFoodHere: 'Bu qaba yerləşdir',
    allSortedCelebration: 'Ura! Bütün qidaları düzgün qruplaşdırdın!',
    resetGame: 'Oyunu Yenidən Başla',

    // Journal & Auth
    explorerJournal: 'Kəşfiyyatçı Gündəliyi',
    myFavorites: 'Sevimlilərim',
    myDiscoveries: 'Kəşflərim',
    statsTitle: 'Uğurlar və Statistika',
    signInGoogle: 'Google ilə Daxil Ol',
    signOut: 'Çıxış Et',
    addDiscovery: 'Yeni Kəşf Əlavə Et',
    discoveryTitle: 'Kəşfin Adı',
    discoveryNotes: 'Qeydlərin və Təəssüratların',
    category: 'Kateqoriya',
    saveDiscovery: 'Kəşfi Saxla',
    emptyFavorites: 'Hələ heç bir sevimli heyvan və ya möcüzə əlavə edilməyib. Ürək işarəsinə toxun!',
    emptyDiscoveries: 'Gündəliyində hələ qeyd yoxdur. Gördüyün maraqlı şeyləri yaz!',
    close: 'Bağla',

    // Audio Controls & Footer
    soundMuted: 'Səs Söndürülüb',
    soundActive: 'Səs və Nitq Aktivdir',
    designedForKids: 'Maraqlı və Ağıllı Uşaqlar üçün Hazırlanıb',
    madeWithLove: 'Sevgi ilə yaradılıb',
    languageSelect: 'Dil',
    aiVoiceBadge: 'AI Səsi',
    aiVoiceSelectTitle: 'Azərbaycan AI Səsini Seçin',
    aiVoiceKore: 'Kore (Təbii və Mülayim - Tövsiyə olunur)',
    aiVoiceZephyr: 'Zephyr (Aydın və Şən)',
    aiVoicePuck: 'Puck (Uşaqlar üçün Enerjili)',
    aiVoiceFenrir: 'Fenrir (Sakit və Dərin)',
    testVoice: 'Səsi Sına',
    testVoicePhrase: 'Salam dostum! Mən səninlə təmiz və aydın Azərbaycan dilində danışıram.',

    // Voiceover Studio
    voiceoverStudio: 'Səs Yazma Studiyası',
    myVoiceovers: 'Öz Səsim',
    addVoiceover: 'Öz Səsini Yaz',
    recordVoice: 'Səs Yaz',
    recordingInProgress: 'Səs yazılır...',
    stopRecording: 'Dayandır',
    saveVoiceover: 'Səsi Saxla',
    deleteVoiceover: 'Səsi Sil',
    listenRecording: 'Dinlə',
    uploadAudio: 'Audio Fayl Yüklə',
    customVoiceActive: 'Öz Səslərim Aktivdir',
    customVoiceInactive: 'Sistem Səsi Aktivdir',
    recordedCount: 'Yazılan Səslər',
    noRecordingsYet: 'Hələ heç bir fərdi səs yazılmayıb',
    searchItemsToRecord: 'Səs yazmaq üçün heyvan və ya mövzu axtar...',
    micPermissionPrompt: 'Mikrofonla səs yazmaq üçün icazə tələb olunur.',
    recordingSuccess: 'Səs uğurla saxlanıldı!',
    recordCustomPhrase: 'İstənilən Söz və ya Cümləni Yaz',
    enterPhrasePlaceholder: 'Məsələn: "Salam uşaqlar!", "Pələng cəld qaçır"',
    voiceoverStudioDesc: 'Azərbaycan dilində öz səsinizlə heyvanları, təbiəti və fiqurları səsləndirin!',

    // Puzzle Game
    puzzleTitle: 'Uşaqlar üçün Əyləncəli Pazl',
    puzzleSubtitle: 'Heyvanlar, təbiət və kosmik möcüzələr şəkillərini parçalardan yığın!',
    puzzleDifficulty: 'Çətinlik Səviyyəsi',
    puzzleEasy: 'Asan (2×2 • 4 parça)',
    puzzleMedium: 'Orta (3×3 • 9 parça)',
    puzzleHard: 'Usta (4×4 • 16 parça)',
    puzzleModeSwap: 'Parçaları Dəyişdir',
    puzzleModeSlide: 'Sürüşdürmə Pazlı',
    puzzleMoves: 'Gedişlər',
    puzzleTime: 'Vaxt',
    puzzleHint: 'İpucu',
    puzzleShowNumbers: 'Nömrələri göstər',
    puzzleSolved: 'Əla! Pazl uğurla tamamlandı!',
    puzzleNext: 'Növbəti Şəkil',
    puzzleShuffle: 'Yenidən Qarışdır',
    puzzleChoosePicture: 'Şəkil Seçin',
    playPuzzle: 'Pazl Oyna',

    // Additional UI Localization Keys
    allPictures: '🌟 Bütün Şəkillər',
    verifiedPhoto: 'Təsdiqlənmiş Foto',
    angleTurnaround: 'Bütün Bucaqlar (Ön • Yan • Arxadan)',
    angleFrontView: 'Ön Baxış Bucaqı',
    angleSideView: 'Yan Profil Bucaqı',
    angleBackView: 'Arxa Baxış Bucaqı',
    removeFromFavorites: 'Favoritlərdən Çıxar',
    addToFavorites: 'Favoritlərə Əlavə Et (Cloud Sync)',
    listenYourVoice: 'Öz Səsinizi Dinləyin / Yeniləyin',
    recordVoiceForItem: 'Bu Kartı Öz Səsinlə Səsləndir',
    openInYoutube: 'YouTube-da Aç ↗',
    backupDownload: 'Səsləri Endir (Backup)',
    backupRestore: 'Səs Paketini Bərpa Et (Restore)',
    selectAnotherItem: 'Başqa bənd seç',
    recordAgain: 'Yenidən Səs Yaz',
    selectItemToRecord: 'Səs yazmaq istədiyiniz bəndi aşağıdan seçin',
    voiceoverInstruction: 'Heyvanların, təbiət obyektlərinin və ya fiqurların üzərinə klikləyərək dərhal öz səsinizlə qeyd apara bilərsiniz.',
    categoryPhrases: 'Fərdi Cümlə',
    readyRecordings: 'Hazır Yazılmış Səslər',
    delete: 'Sil',
    selectAction: 'Seç',
    signInGoogleTitle: 'Buluda Saxlamaq üçün Google ilə Daxil Olun',
    signInGoogleDesc: 'Sevimli heyvanlarınızı, ulduzlarınızı və qeydlərinizi sinxronlaşdırmaq üçün Google ilə daxil olun.',
    itemsSaved: 'saxlanılan bənd',
    clickToReadOrRemove: 'Səsləndirmək və ya kolleksiyadan çıxarmaq üçün klikləyin',
    noFavoritesDesc: 'Kolleksiyanıza saxlamaq üçün heyvan, təbiət və ya ulduz kartındakı qırmızı ürək ikonuna klikləyin!',
    logNewDiscovery: 'Yeni Sahə Kəşfi Qeyd Et',
    whatDidYouFind: 'Nə tapdınız?',
    discoveryPlaceholder: 'məs. Bağçada rəngarəng kəpənək gördüm',
    topic: 'Mövzu',
    chooseSticker: 'Nişan Stikeri Seçin',
    fieldNotesLabel: 'Sahə Müşahidə Qeydləri',
    fieldNotesPlaceholder: 'Necə göründüyünü, səsini və ya nə öyrəndiyinizi yazın...',
    saveToCloudJournal: 'Bulud Gündəliyinə Saxla',
    savedObservations: 'Saxlanılmış Müşahidələrim',
    filterNotes: 'Qeydləri süzgəcdən keçir...',
    noNotesYet: 'Hələ heç bir qeyd yazılmayıb. İlk kəşfinizi yuxarıda qeyd edin!',
    mysteryHighScore: 'Şəkil Tapmacası Rekordu',
    favoritedWonders: 'Bəyənilən Möcüzələr',
    fieldDiscoveriesCount: 'Sahə Kəşfləri',
    spinLeft: 'Sola Döndər',
    spinRight: 'Sağa Döndər',
    nextQuestion: 'Növbəti Tapmaca',

    // Numbers & Alphabet (AZ)
    sectionNumbersAlphabet: '5. Saylar və Əlifba',
    subnavAlphabet: '5.1 Əlifba (A-Z)',
    subnavNumbers: '5.2 Saylar və Sayma (1-100)',
    subnavNumbersAlphabetQuiz: '5.3 Hərf və Say Oyunu',
    alphabetTitle: 'Uşaqlar üçün Əlifba Dünyası 🔤',
    alphabetSubtitle: 'Hərfləri dinləyin, nümunə sözləri öyrənin və ekranda hərfləri barmağınızla çəkin!',
    listenLetter: 'Hərfi Dinlə',
    listenWord: 'Sözü Dinlə',
    practiceWriting: 'Hərfi Ekranda Yaz / Çək',
    clearCanvas: 'Təmizlə',
    strokeColor: 'Qələm Rəngi',
    allLetters: 'Bütün Hərflər',
    uppercaseLowercase: 'Böyük və Kiçik Hərf',
    numbersTitle: 'Əyləncəli Saylar və Sayma (1-100) 🔢',
    numbersSubtitle: 'Sayları dinləyin, ekrandakı sevimli obyektlərə toxunaraq sayın və riyazi sirləri kəşf edin!',
    tapToCount: 'Saymaq üçün sevimli obyektlərə toxunun',
    countedCount: 'Sayılmış',
    addOne: '+1 Əlavə Et',
    subtractOne: '-1 Çıx',
    resetCounting: 'Yenidən Say',
    numberFunFact: 'Maraqlı Riyazi Bilgi',
    numberQuizTitle: 'Hərf və Say Tapmaca Oyunu 🏆',
    numberQuizSubtitle: 'Sualı oxuyun və ya dinləyin, düzgün cavabı seçərək ulduzlar toplayın!',
    quizFindLetter: 'Bu söz hansı hərflə başlayır?',
    quizCountItems: 'Ekranda neçə dənə var? Diqqətlə say və seç!',
    questionNumber: 'Sual',
    quizCorrect: 'Əla! Düzgün cavab tapıldı! 🎉',
    quizIncorrect: 'Bir daha cəhd et, sən bacararsan! 💪',

    // Daily Random Fact UI
    dailyFactTitle: 'Günün Təbiət Möcüzəsi',
    dailyFactBadge: 'Günün Faktı 🌟',
    dailyFactSubtitle: 'Hər gün yeni bir canlı və ya təbiət sirrini kəşf edin!',
    exploreInWorld: 'Aləmdə Kəşf Et',
    solvePuzzle: 'Pazlını Həll Et',
    nextFact: 'Başqa Fakt 🎲',
    previousFact: 'Əvvəlki Fakt',
    todaysFact: 'Bugünkü Möcüzə',
    showOnStartup: 'Tətbiq açılanda hər gün göstər',
    iLearnedThis: 'Bunu Öyrəndim! ✨',
    learnedAwesome: 'Əla! Günün yeni möcüzəsini öyrəndin!',
    listenFact: 'Faktı Dinlə',
    playSound: 'Səsi Dinlə',
    dailyWonderButton: 'Günün Möcüzəsi',
    categoryAnimal: 'Heyvanlar Aləmi',
    categoryNature: 'Təbiət Ünsürü',
    categoryUniverse: 'Kosmik Möcüzə'
  },

  tr: {
    // Brand
    appName: 'Doğa ve Mucizeler',
    appBadge: 'Çocuk Kaşifi',
    appSubtitle: 'Hayvanları, Doğayı, Kozmik Harikaları, Şekilleri ve Duyuları Keşfet',
    welcomeGreeting: 'Doğa ve Mucizelere hoş geldiniz! Harika dünyamızı birlikte keşfedelim!',

    // Nav Sections
    sectionWorld: '1. Çevremizdeki Dünya',
    sectionShapes: '2. Geometrik Şekiller',
    sectionSensations: '3. Yiyecekler ve Duyular',
    sectionPuzzle: '4. Yapboz Oyunu',
    sectionQuiz: '6. Büyük Bilgi Yarışması',

    // World Subsections
    subnavAnimals: '1.1 Hayvanlar (1,000 Katalog)',
    subnavNature: '1.2 Doğa Unsurları',
    subnavUniverse: '1.3 Evren Unsurları',

    // Shapes Subsections
    subnavPlane: '2.1 Düzlem Şekiller (Üçgen ve Dörtgenler)',
    subnavSolid: '2.2 Katı / 3D Şekiller (Küp, Koni vb.)',
    subnavShapesQuiz: 'Şekil Dedektifi Oyunu',

    // Sensations Subsections
    subnavTasteExplorer: 'Tat ve Sıcaklık Kaşifi',
    subnavSensationsSorter: 'Duyu Sıralama Oyunu',

    // Animal Explorer UI
    sectionAnimalsBadge: 'Bölüm 1.1 • Hayvanlar Alemi',
    animalExplorerTitle: 'Dünyanın 1.000 Hayvanıyla Tanışın! 🦁🐘🐬',
    animalExplorerSubtitle: 'Özgün seslerini dinleyin, 9 vahşi yaşam alanını keşfedin ve isimlerini, beslenme biçimlerini öğrenin!',
    badgeNew: 'Yeni',
    tabSpotlight: 'Öne Çıkan Hayvanlar',
    tabCatalog: '1,000 Hayvan Kataloğu',
    tabPictureGame: 'Resimli Gizem Oyunu',
    searchAnimalsPlaceholder: 'Hayvan ara (örn. Aslan, Kartal, Zürafa)...',
    filterHabitat: 'Yaşam Alanı',
    filterGroup: 'Hayvan Grubu',
    allHabitats: 'Tüm Yaşam Alanları',
    allGroups: 'Tüm Gruplar',
    listenSound: 'Sesi Dinle',
    pronounce: 'Seslendir',
    watchVideo: 'Videoyu İzle',
    funFact: 'Eğlenceli Bilgi',
    didYouKnow: 'Biliyor muydunuz?',
    size: 'Boyut / Ağırlık',
    lifespan: 'Ömür',
    speed: 'Hız',
    diet: 'Beslenme',
    habitat: 'Yaşam Alanı',
    viewAngles: 'Farklı Açılar',
    angleAll: 'Tüm Açılar',
    angleFront: 'Önden Görünüm',
    angleSide: 'Yandan Görünüm',
    angleBack: 'Arkadan Görünüm',
    details: 'Detaylı Bilgi',
    noAnimalsFound: 'Aramanızla eşleşen hiçbir hayvan bulunamadı.',
    clearFilters: 'Filtreleri Temizle',

    // Animal Picture Mystery Game
    mysteryGameTitle: 'Resimli Hayvan Bulmacası',
    mysteryGameSubtitle: 'Resme dikkatle bak ve bu harika canlının adını bul!',
    mysteryQuestion: 'Bu resimdeki hayvan hangisidir?',
    score: 'Puan',
    correctAwesome: 'Harika! Doğru bildin!',
    tryAgain: 'Çok yakındı! Tekrar dene!',
    nextCreature: 'Sonraki Canlı',
    playAgain: 'Tekrar Oyna',

    // Nature Explorer UI
    natureTitle: 'Doğa Unsurları',
    natureSubtitle: 'Dağlar, ormanlar, akarsular, şelaleler ve bereketli yağmur!',
    listenToNature: 'Doğanın Sesini Dinle',
    kidActivity: 'Çocuklar İçin Deney',
    whyItMatters: 'Neden Önemlidir?',

    // Universe Explorer UI
    universeTitle: 'Evrenin ve Uzayın Harikaları',
    universeSubtitle: 'Güneş, parıldayan Ay, yıldızlar, gökkuşağı ve kuyrukluyıldızlar!',
    cosmicWonder: 'Kozmik Harika',
    listenCosmicHum: 'Uzay Uğultusunu Dinle',

    // Shapes Explorer UI
    shapesTitle: 'Geometrik Şekiller Dünyası',
    shapesSubtitle: '2D düzlem ve 3D katı şekilleri keşfet, kenarları ve köşeleri say!',
    planeTitle: 'Düzlem (2D) Geometrik Şekiller',
    planeSubtitle: 'Üçgenler ve dörtgenler: kare, dikdörtgen, eşkenar dörtgen ve yamuk!',
    solidTitle: 'Katı (3D) Geometrik Şekiller',
    solidSubtitle: 'Küp, koni, silindir ve küre: çevremizdeki üç boyutlu formlar!',
    sides: 'Kenarlar',
    vertices: 'Köşeler',
    faces: 'Yüzler',
    edges: 'Ayrıtlar',
    countSides: 'Kenarları Say',
    countCorners: 'Köşeleri Say',
    whereToSpot: 'Nerede Görebilirsin',
    shapeSecret: 'Şeklin Sırrı',
    realWorldExamples: 'Günlük Hayattan Örnekler',
    testYourKnowledge: 'Bilgini Sına',
    shapeQuizTitle: 'Şekil Dedektifi Oyunu',
    shapeQuizSubtitle: 'İpuçlarını oku ve gizli şekli tahmin et!',
    question: 'Soru',
    scoreLabel: 'Puan',
    congratulations: 'Tebrikler!',
    perfectScore: 'Kusursuz puan! Gerçek bir Şekil Dedektifisin!',
    greatEffort: 'Harika çaba! Öğrenmeye devam et!',
    restartQuiz: 'Yeniden Başlat',
    revealAnswer: 'Cevabı Göster',
    selectedAnswer: 'Seçilen Cevap',

    // Sensations Explorer UI
    sensationsTitle: 'Yiyecekler ve Tat Duyuları',
    sensationsSubtitle: 'Munchy’yi besle ve tatlı, acı, ekşi, sıcak ve soğuk duyuları keşfet!',
    feedMunchy: 'Munchy’yi Besle!',
    munchyReaction: 'Munchy’nin Tepkisi',
    funTastingTip: 'Eğlenceli Tat İpucu',
    sensationSweet: 'Tatlı',
    sensationSpicy: 'Acı / Baharatlı',
    sensationSour: 'Ekşi',
    sensationHot: 'Sıcak / Kaynar',
    sensationCold: 'Soğuk / Buzlu',
    sorterTitle: 'Tat ve Duyu Sıralama Oyunu',
    sorterSubtitle: 'Yiyecekleri tatlı, acı, ekşi, sıcak ve soğuk kaselere ayır!',
    sorterInstruction: 'Aşağıdaki yiyeceğe uygun kaseye dokunarak yerleştir:',
    dragOrTap: 'Seçmek için kaseye dokun',
    dropFoodHere: 'Bu kaseye koy',
    allSortedCelebration: 'Yaşasın! Bütün yiyecekleri doğru yerleştirdin!',
    resetGame: 'Oyunu Sıfırla',

    // Journal & Auth
    explorerJournal: 'Kaşif Günlüğü',
    myFavorites: 'Favorilerim',
    myDiscoveries: 'Keşiflerim',
    statsTitle: 'Başarılar ve İstatistikler',
    signInGoogle: 'Google ile Giriş Yap',
    signOut: 'Çıkış Yap',
    addDiscovery: 'Yeni Keşif Ekle',
    discoveryTitle: 'Keşif Başlığı',
    discoveryNotes: 'Notların ve İzlenimlerin',
    category: 'Kategori',
    saveDiscovery: 'Keşfi Kaydet',
    emptyFavorites: 'Henüz favori eklenmedi. Kalp simgesine dokunarak ekleyebilirsin!',
    emptyDiscoveries: 'Günlüğünde henüz not yok. Gördüğün ilginç şeyleri yaz!',
    close: 'Kapat',

    // Audio Controls & Footer
    soundMuted: 'Ses Kapalı',
    soundActive: 'Ses ve Konuşma Açık',
    designedForKids: 'Meraklı Küçük Zihinler İçin Tasarlandı',
    madeWithLove: 'Sevgiyle hazırlandı',
    languageSelect: 'Dil',
    aiVoiceBadge: 'Yapay Zeka Sesi',
    aiVoiceSelectTitle: 'Yapay Zeka Sesini Seçin',
    aiVoiceKore: 'Kore (Doğal ve Sıcak - Önerilen)',
    aiVoiceZephyr: 'Zephyr (Net ve Neşeli)',
    aiVoicePuck: 'Puck (Çocuklar İçin Enerjik)',
    aiVoiceFenrir: 'Fenrir (Sakin ve Derin)',
    testVoice: 'Sesi Dene',
    testVoicePhrase: 'Merhaba arkadaşım! Seninle tertemiz ve doğal sesle konuşuyorum.',

    // Voiceover Studio
    voiceoverStudio: 'Ses Kayıt Stüdyosu',
    myVoiceovers: 'Kendi Sesim',
    addVoiceover: 'Kendi Sesini Kaydet',
    recordVoice: 'Ses Kaydet',
    recordingInProgress: 'Kayıt yapılıyor...',
    stopRecording: 'Durdur',
    saveVoiceover: 'Kaydet',
    deleteVoiceover: 'Sil',
    listenRecording: 'Dinle',
    uploadAudio: 'Ses Dosyası Yükle',
    customVoiceActive: 'Kendi Seslerim Açık',
    customVoiceInactive: 'Sistem Sesi Açık',
    recordedCount: 'Kaydedilen Sesler',
    noRecordingsYet: 'Henüz özel ses kaydı eklenmedi',
    searchItemsToRecord: 'Ses kaydetmek için hayvan veya konu ara...',
    micPermissionPrompt: 'Ses kaydı için mikrofon izni gereklidir.',
    recordingSuccess: 'Ses başarıyla kaydedildi!',
    recordCustomPhrase: 'Özel Kelime veya Cümle Kaydet',
    enterPhrasePlaceholder: 'Örn: "Merhaba çocuklar!", "Kaplan çok hızlı koşar"',
    voiceoverStudioDesc: 'Kendi sesinizle hayvanları, doğayı ve şekilleri seslendirin!',

    // Puzzle Game
    puzzleTitle: 'Çocuklar için Eğlenceli Yapboz',
    puzzleSubtitle: 'Hayvanlar, doğa ve uzay harikalarını parçalardan birleştirin!',
    puzzleDifficulty: 'Zorluk Seviyesi',
    puzzleEasy: 'Kolay (2×2 • 4 parça)',
    puzzleMedium: 'Orta (3×3 • 9 parça)',
    puzzleHard: 'Usta (4×4 • 16 parça)',
    puzzleModeSwap: 'Parçaları Değiştir',
    puzzleModeSlide: 'Kayan Yapboz',
    puzzleMoves: 'Hamleler',
    puzzleTime: 'Süre',
    puzzleHint: 'İpucu',
    puzzleShowNumbers: 'Numaraları göster',
    puzzleSolved: 'Harika! Yapboz tamamlandı!',
    puzzleNext: 'Sonraki Resim',
    puzzleShuffle: 'Yeniden Karıştır',
    puzzleChoosePicture: 'Resim Seçin',
    playPuzzle: 'Yapboz Oyna',

    // Additional UI Localization Keys
    allPictures: '🌟 Tüm Resimler',
    verifiedPhoto: 'Doğrulanmış Fotoğraf',
    angleTurnaround: 'Tüm Açılar (Ön • Yan • Arka)',
    angleFrontView: 'Önden Görünüş',
    angleSideView: 'Yan Profil Görünüşü',
    angleBackView: 'Arkadan Görünüş',
    removeFromFavorites: 'Favorilerden Çıkar',
    addToFavorites: 'Favorilere Ekle (Bulut Eşitleme)',
    listenYourVoice: 'Kendi Sesinizi Dinleyin / Güncelleyin',
    recordVoiceForItem: 'Bu Kartı Kendi Sesinizle Kaydedin',
    openInYoutube: 'YouTube-da Aç ↗',
    backupDownload: 'Sesleri İndir (Yedek)',
    backupRestore: 'Ses Paketini Geri Yükle (İçe Aktar)',
    selectAnotherItem: 'Başka öge seç',
    recordAgain: 'Yeniden Ses Kaydet',
    selectItemToRecord: 'Ses kaydetmek istediğiniz ögeyi aşağıdan seçin',
    voiceoverInstruction: 'Hayvanların, doğa nesnelerinin veya şekillerin üzerine tıklayarak hemen kendi sesinizi kaydedebilirsiniz.',
    categoryPhrases: 'Özel Cümle',
    readyRecordings: 'Kaydedilmiş Sesler',
    delete: 'Sil',
    selectAction: 'Seç',
    signInGoogleTitle: 'Buluta Kaydetmek için Google ile Giriş Yapın',
    signInGoogleDesc: 'Favori hayvanlarınızı, yıldızlarınızı ve notlarınızı senkronize etmek için Google ile giriş yapın.',
    itemsSaved: 'kaydedilen öge',
    clickToReadOrRemove: 'Seslendirmek veya koleksiyondan çıkarmak için tıklayın',
    noFavoritesDesc: 'Koleksiyonunuza eklemek için herhangi bir karttaki kırmızı kalp simgesine tıklayın!',
    logNewDiscovery: 'Yeni Saha Keşfi Kaydet',
    whatDidYouFind: 'Ne buldunuz?',
    discoveryPlaceholder: 'örn. Bahçede renkli bir kelebek gördüm',
    topic: 'Konu',
    chooseSticker: 'Çıkartma İkonu Seçin',
    fieldNotesLabel: 'Saha Gözlem Notları',
    fieldNotesPlaceholder: 'Nasıl göründüğünü, sesini veya öğrendiklerinizi yazın...',
    saveToCloudJournal: 'Bulut Günlüğüne Kaydet',
    savedObservations: 'Kaydedilen Gözlemlerim',
    filterNotes: 'Notları filtrele...',
    noNotesYet: 'Henüz hiçbir not yazılmadı. İlk keşfinizi yukarıya yazın!',
    mysteryHighScore: 'Resim Bulmacası Rekoru',
    favoritedWonders: 'Favori Harikalar',
    fieldDiscoveriesCount: 'Saha Keşifleri',
    spinLeft: 'Sola Döndür',
    spinRight: 'Sağa Döndür',
    nextQuestion: 'Sonraki Bilmece',

    // Numbers & Alphabet (TR)
    sectionNumbersAlphabet: '5. Sayılar ve Alfabe',
    subnavAlphabet: '5.1 Alfabe (A-Z)',
    subnavNumbers: '5.2 Sayılar ve Sayma (1-100)',
    subnavNumbersAlphabetQuiz: '5.3 Harf ve Sayı Oyunu',
    alphabetTitle: 'Çocuklar için Alfabe Dünyası 🔤',
    alphabetSubtitle: 'Harfleri dinleyin, örnek kelimeleri öğrenin ve ekranda parmağınızla harfleri çizin!',
    listenLetter: 'Harfi Dinle',
    listenWord: 'Kelimeyi Dinle',
    practiceWriting: 'Harfi Ekranda Yaz / Çiz',
    clearCanvas: 'Temizle',
    strokeColor: 'Kalem Rengi',
    allLetters: 'Tüm Harfler',
    uppercaseLowercase: 'Büyük ve Küçük Harf',
    numbersTitle: 'Eğlenceli Sayılar ve Sayma (1-100) 🔢',
    numbersSubtitle: 'Sayıları dinleyin, ekrandaki sevimli nesnelere dokunarak sayın ve matematiğin sırlarını keşfedin!',
    tapToCount: 'Saymak için sevimli nesnelere dokunun',
    countedCount: 'Sayıldı',
    addOne: '+1 Ekle',
    subtractOne: '-1 Çıkar',
    resetCounting: 'Yeniden Say',
    numberFunFact: 'İlginç Matematik Bilgisi',
    numberQuizTitle: 'Harf ve Sayı Bulmaca Oyunu 🏆',
    numberQuizSubtitle: 'Soruyu okuyun veya dinleyin, doğru cevabı seçerek yıldızlar toplayın!',
    quizFindLetter: 'Bu kelime hangi harfle başlıyor?',
    quizCountItems: 'Ekranda kaç tane var? Dikkatle say ve seç!',
    questionNumber: 'Soru',
    quizCorrect: 'Harika! Doğru cevabı buldun! 🎉',
    quizIncorrect: 'Tekrar dene, başarabilirsin! 💪',

    // Daily Random Fact UI
    dailyFactTitle: 'Günün Doğa Harikası',
    dailyFactBadge: 'Günün Bilgisi 🌟',
    dailyFactSubtitle: 'Her gün yeni bir canlı veya doğa sırrını keşfedin!',
    exploreInWorld: 'Dünyada Keşfet',
    solvePuzzle: 'Yapbozu Çöz',
    nextFact: 'Başka Bilgi 🎲',
    previousFact: 'Önceki Bilgi',
    todaysFact: 'Bugünkü Harika',
    showOnStartup: 'Uygulama açılışında her gün göster',
    iLearnedThis: 'Bunu Öğrendim! ✨',
    learnedAwesome: 'Harika! Günün yeni mucizesini öğrendin!',
    listenFact: 'Bilgiyi Dinle',
    playSound: 'Sesi Dinle',
    dailyWonderButton: 'Günün Harikası',
    categoryAnimal: 'Hayvanlar Alemi',
    categoryNature: 'Doğa Unsuru',
    categoryUniverse: 'Evren Mucizesi'
  },

  ru: {
    // Brand
    appName: 'Природа и Чудеса',
    appBadge: 'Юный Исследователь',
    appSubtitle: 'Изучайте животных, природу, тайны космоса, фигуры и ощущения',
    welcomeGreeting: 'Добро пожаловать в «Природу и Чудеса»! Давайте вместе исследовать наш удивительный мир!',

    // Nav Sections
    sectionWorld: '1. Мир вокруг нас',
    sectionShapes: '2. Геометрические фигуры',
    sectionSensations: '3. Еда и Ощущения',
    sectionPuzzle: '4. Пазлы',
    sectionQuiz: '6. Большая Викторина',

    // World Subsections
    subnavAnimals: '1.1 Животные (Каталог 1,000)',
    subnavNature: '1.2 Элементы природы',
    subnavUniverse: '1.3 Элементы Вселенной',

    // Shapes Subsections
    subnavPlane: '2.1 Плоские фигуры (Треугольники и Четырехугольники)',
    subnavSolid: '2.2 Объемные фигуры (Куб, Конус и 3D)',
    subnavShapesQuiz: 'Игра «Детектив фигур»',

    // Sensations Subsections
    subnavTasteExplorer: 'Исследователь вкуса и температуры',
    subnavSensationsSorter: 'Игра по сортировке ощущений',

    // Animal Explorer UI
    sectionAnimalsBadge: 'Раздел 1.1 • Царство животных',
    animalExplorerTitle: 'Познакомьтесь с 1000 животными мира! 🦁🐘🐬',
    animalExplorerSubtitle: 'Слушайте их подлинные голоса, узнайте, где они живут в 9 диких средах обитания, и изучайте их повадки!',
    badgeNew: 'Новое',
    tabSpotlight: 'Избранные животные',
    tabCatalog: 'Каталог из 1,000 животных',
    tabPictureGame: 'Игра-загадка по картинкам',
    searchAnimalsPlaceholder: 'Поиск животного (например, Лев, Орел, Жираф)...',
    filterHabitat: 'Среда обитания',
    filterGroup: 'Класс животных',
    allHabitats: 'Все среды обитания',
    allGroups: 'Все классы',
    listenSound: 'Слушать голос',
    pronounce: 'Произнести',
    watchVideo: 'Смотреть видео',
    funFact: 'Интересный факт',
    didYouKnow: 'Знаете ли вы?',
    size: 'Размер / Вес',
    lifespan: 'Продолжительность жизни',
    speed: 'Скорость',
    diet: 'Питание',
    habitat: 'Среда обитания',
    viewAngles: 'Разные ракурсы',
    angleAll: 'Все ракурсы',
    angleFront: 'Вид спереди',
    angleSide: 'Вид сбоку',
    angleBack: 'Вид сзади',
    details: 'Подробнее',
    noAnimalsFound: 'По вашему запросу ничего не найдено.',
    clearFilters: 'Сбросить фильтры',

    // Animal Picture Mystery Game
    mysteryGameTitle: 'Загадка с картинкой животного',
    mysteryGameSubtitle: 'Внимательно посмотри на фото и угадай, кто это!',
    mysteryQuestion: 'Какое животное изображено на фотографии?',
    score: 'Счет',
    correctAwesome: 'Молодец! Точный ответ!',
    tryAgain: 'Было близко! Попробуй еще раз!',
    nextCreature: 'Следующее животное',
    playAgain: 'Сыграть снова',

    // Nature Explorer UI
    natureTitle: 'Элементы природы',
    natureSubtitle: 'Горы, древние деревья, леса, полноводные реки, водопады и дождь!',
    listenToNature: 'Слушать звуки природы',
    kidActivity: 'Детский эксперимент',
    whyItMatters: 'Почему это важно?',

    // Universe Explorer UI
    universeTitle: 'Чудеса Вселенной и Космоса',
    universeSubtitle: 'Золотое Солнце, сияющая Луна, звезды, радуга и кометы!',
    cosmicWonder: 'Космическое чудо',
    listenCosmicHum: 'Слушать космический гул',

    // Shapes Explorer UI
    shapesTitle: 'Мир геометрических фигур',
    shapesSubtitle: 'Исследуй плоские 2D и объемные 3D фигуры, считай стороны и углы!',
    planeTitle: 'Плоские (2D) фигуры',
    planeSubtitle: 'Треугольники и четырехугольники: квадрат, прямоугольник, ромб и трапеция!',
    solidTitle: 'Объемные (3D) фигуры',
    solidSubtitle: 'Куб, конус, цилиндр и шар: трехмерные формы в нашем мире!',
    sides: 'Стороны',
    vertices: 'Вершины (углы)',
    faces: 'Грани',
    edges: 'Ребра',
    countSides: 'Посчитать стороны',
    countCorners: 'Посчитать углы',
    whereToSpot: 'Где можно встретить',
    shapeSecret: 'Секрет фигуры',
    realWorldExamples: 'Примеры из реальной жизни',
    testYourKnowledge: 'Проверь свои знания',
    shapeQuizTitle: 'Игра «Детектив фигур»',
    shapeQuizSubtitle: 'Прочитай подсказки и угадай загадочную фигуру!',
    question: 'Вопрос',
    scoreLabel: 'Результат',
    congratulations: 'Поздравляем!',
    perfectScore: 'Идеальный результат! Ты настоящий Детектив фигур!',
    greatEffort: 'Отличная попытка! Продолжай изучать фигуры!',
    restartQuiz: 'Начать заново',
    revealAnswer: 'Показать ответ',
    selectedAnswer: 'Выбранный ответ',

    // Sensations Explorer UI
    sensationsTitle: 'Еда и Вкусовые ощущения',
    sensationsSubtitle: 'Угощай Манчи и узнавай сладкие, острые, кислые, горячие и холодные вкусы!',
    feedMunchy: 'Покорми Манчи!',
    munchyReaction: 'Реакция Манчи',
    funTastingTip: 'Полезный совет исследователя',
    sensationSweet: 'Сладкое',
    sensationSpicy: 'Острое / Жгучее',
    sensationSour: 'Кислое',
    sensationHot: 'Горячее / Кипящее',
    sensationCold: 'Холодное / Ледяное',
    sorterTitle: 'Игра по сортировке вкусов и ощущений',
    sorterSubtitle: 'Разложи продукты по мискам: сладкое, острое, кислое, горячее и холодное!',
    sorterInstruction: 'Нажми на подходящую миску, чтобы поместить продукт:',
    dragOrTap: 'Нажмите на миску для выбора',
    dropFoodHere: 'Положить в эту миску',
    allSortedCelebration: 'Ура! Ты правильно рассортировал все продукты!',
    resetGame: 'Сбросить игру',

    // Journal & Auth
    explorerJournal: 'Дневник исследователя',
    myFavorites: 'Мои избранные',
    myDiscoveries: 'Мои открытия',
    statsTitle: 'Достижения и статистика',
    signInGoogle: 'Войти через Google',
    signOut: 'Выйти',
    addDiscovery: 'Добавить новое открытие',
    discoveryTitle: 'Название открытия',
    discoveryNotes: 'Заметки и впечатления',
    category: 'Категория',
    saveDiscovery: 'Сохранить открытие',
    emptyFavorites: 'Пока нет избранного. Нажми на сердечко на карточке!',
    emptyDiscoveries: 'В дневнике еще нет записей. Записывай интересные находки!',
    close: 'Закрыть',

    // Audio Controls & Footer
    soundMuted: 'Звук выключен',
    soundActive: 'Звук и речь включены',
    designedForKids: 'Создано для любознательных детей',
    madeWithLove: 'Сделано с любовью',
    languageSelect: 'Язык',
    aiVoiceBadge: 'ИИ Голос',
    aiVoiceSelectTitle: 'Выберите голос ИИ',
    aiVoiceKore: 'Kore (Естественный и мягкий - Рекомендуется)',
    aiVoiceZephyr: 'Zephyr (Четкий и яркий)',
    aiVoicePuck: 'Puck (Энергичный для детей)',
    aiVoiceFenrir: 'Fenrir (Спокойный и глубокий)',
    testVoice: 'Проверить звук',
    testVoicePhrase: 'Привет, друг! Я говорю с тобой чистым и естественным голосом.',

    // Voiceover Studio
    voiceoverStudio: 'Студия озвучки',
    myVoiceovers: 'Мой голос',
    addVoiceover: 'Записать свой голос',
    recordVoice: 'Запись',
    recordingInProgress: 'Идет запись...',
    stopRecording: 'Остановить',
    saveVoiceover: 'Сохранить',
    deleteVoiceover: 'Удалить',
    listenRecording: 'Слушать',
    uploadAudio: 'Загрузить аудиофайл',
    customVoiceActive: 'Своя озвучка включена',
    customVoiceInactive: 'Системный голос включен',
    recordedCount: 'Записано звуков',
    noRecordingsYet: 'Пока нет записанных голосов',
    searchItemsToRecord: 'Поиск животного или карточки для озвучки...',
    micPermissionPrompt: 'Для записи требуется доступ к микрофону.',
    recordingSuccess: 'Аудиозапись успешно сохранена!',
    recordCustomPhrase: 'Записать любую фразу',
    enterPhrasePlaceholder: 'Например: "Привет, друзья!", "Тигр бежит быстро"',
    voiceoverStudioDesc: 'Озвучивайте карточки, животных и фигуры своим родным голосом!',

    // Puzzle Game
    puzzleTitle: 'Увлекательные Пазлы для Детей',
    puzzleSubtitle: 'Собирайте картинки животных, природы и космоса из кусочков!',
    puzzleDifficulty: 'Уровень сложности',
    puzzleEasy: 'Легкий (2×2 • 4 кусочка)',
    puzzleMedium: 'Средний (3×3 • 9 кусочков)',
    puzzleHard: 'Мастер (4×4 • 16 кусочков)',
    puzzleModeSwap: 'Поменять местами',
    puzzleModeSlide: 'Пятнашки (Слайдер)',
    puzzleMoves: 'Ходы',
    puzzleTime: 'Время',
    puzzleHint: 'Подсказка',
    puzzleShowNumbers: 'Показать номера',
    puzzleSolved: 'Отлично! Пазл успешно собран!',
    puzzleNext: 'Следующая картинка',
    puzzleShuffle: 'Перемешать',
    puzzleChoosePicture: 'Выберите картинку',
    playPuzzle: 'Собрать пазл',

    // Additional UI Localization Keys
    allPictures: '🌟 Все картинки',
    verifiedPhoto: 'Проверенное фото',
    angleTurnaround: 'Все ракурсы (Спереди • Сбоку • Сзади)',
    angleFrontView: 'Вид спереди',
    angleSideView: 'Вид сбоку',
    angleBackView: 'Вид сзади',
    removeFromFavorites: 'Удалить из избранного',
    addToFavorites: 'Добавить в избранное (Облако)',
    listenYourVoice: 'Слушать / обновить свой голос',
    recordVoiceForItem: 'Озвучить эту карточку своим голосом',
    openInYoutube: 'Открыть на YouTube ↗',
    backupDownload: 'Скачать голоса (Резервная копия)',
    backupRestore: 'Восстановить голоса (Импорт)',
    selectAnotherItem: 'Выбрать другой элемент',
    recordAgain: 'Записать заново',
    selectItemToRecord: 'Выберите карточку для записи голоса ниже',
    voiceoverInstruction: 'Нажмите на карточку животного, природы или фигуры, чтобы сразу озвучить её своим голосом.',
    categoryPhrases: 'Своя фраза',
    readyRecordings: 'Готовые записи',
    delete: 'Удалить',
    selectAction: 'Выбрать',
    signInGoogleTitle: 'Войдите через Google для сохранения в облаке',
    signInGoogleDesc: 'Войдите через Google, чтобы синхронизировать избранных животных, звезды и заметки.',
    itemsSaved: 'сохранено',
    clickToReadOrRemove: 'Нажмите, чтобы прослушать или удалить из коллекции',
    noFavoritesDesc: 'Нажмите на красное сердечко на любой карточке, чтобы сохранить её в коллекцию!',
    logNewDiscovery: 'Записать новое наблюдение',
    whatDidYouFind: 'Что вы увидели?',
    discoveryPlaceholder: 'напр. Увидел яркую бабочку в саду',
    topic: 'Тема',
    chooseSticker: 'Выберите стикер',
    fieldNotesLabel: 'Заметки наблюдений',
    fieldNotesPlaceholder: 'Опишите, как это выглядело, звучало или что вы узнали...',
    saveToCloudJournal: 'Сохранить в дневник',
    savedObservations: 'Мои сохраненные наблюдения',
    filterNotes: 'Фильтр заметок...',
    noNotesYet: 'Пока нет сохраненных заметок. Запишите свое первое наблюдение выше!',
    mysteryHighScore: 'Рекорд в загадках картинок',
    favoritedWonders: 'Избранные чудеса',
    fieldDiscoveriesCount: 'Полевые открытия',
    spinLeft: 'Влево',
    spinRight: 'Вправо',
    nextQuestion: 'Следующая загадка',

    // Numbers & Alphabet (RU)
    sectionNumbersAlphabet: '5. Числа и Алфавит',
    subnavAlphabet: '5.1 Алфавит (А-Я)',
    subnavNumbers: '5.2 Числа и Счёт (1-100)',
    subnavNumbersAlphabetQuiz: '5.3 Игра в Буквы и Числа',
    alphabetTitle: 'Азбука и Мир Букв для Детей 🔤',
    alphabetSubtitle: 'Слушайте произношение букв, учите слова и рисуйте буквы пальчиком на экране!',
    listenLetter: 'Слушать Букву',
    listenWord: 'Слушать Слово',
    practiceWriting: 'Нарисуй / Напиши Букву',
    clearCanvas: 'Очистить',
    strokeColor: 'Цвет Карандаша',
    allLetters: 'Все Буквы',
    uppercaseLowercase: 'Заглавная и Строчная Буква',
    numbersTitle: 'Весёлые Числа и Счёт (1-100) 🔢',
    numbersSubtitle: 'Учитесь считать, нажимайте на предметы, чтобы сосчитать их, и открывайте секреты математики!',
    tapToCount: 'Нажимай на предметы, чтобы сосчитать',
    countedCount: 'Посчитано',
    addOne: '+1 Добавить',
    subtractOne: '-1 Вычесть',
    resetCounting: 'Сбросить Счёт',
    numberFunFact: 'Интересный Факт о Числе',
    numberQuizTitle: 'Игра-Викторина: Буквы и Числа 🏆',
    numberQuizSubtitle: 'Прослушайте или прочитайте вопрос, выберите правильный ответ и получайте звёздочки!',
    quizFindLetter: 'С какой буквы начинается это слово?',
    quizCountItems: 'Сколько предметов на экране? Сосчитай и выбери!',
    questionNumber: 'Вопрос',
    quizCorrect: 'Отлично! Правильный ответ! 🎉',
    quizIncorrect: 'Попробуй ещё раз, у тебя получится! 💪',

    // Daily Random Fact UI
    dailyFactTitle: 'Чудо природы дня',
    dailyFactBadge: 'Факт дня 🌟',
    dailyFactSubtitle: 'Каждый день открывайте для себя новую тайну природы и животных!',
    exploreInWorld: 'Исследовать в мире',
    solvePuzzle: 'Собрать пазл',
    nextFact: 'Другой факт 🎲',
    previousFact: 'Предыдущий факт',
    todaysFact: 'Сегодняшнее чудо',
    showOnStartup: 'Показывать при запуске каждый день',
    iLearnedThis: 'Я узнал это! ✨',
    learnedAwesome: 'Превосходно! Вы открыли новое чудо природы!',
    listenFact: 'Слушать факт',
    playSound: 'Слушать звук',
    dailyWonderButton: 'Чудо дня',
    categoryAnimal: 'Животный мир',
    categoryNature: 'Силы природы',
    categoryUniverse: 'Космическое чудо'
  },

  en: {
    // Brand
    appName: 'Nature & Wonder',
    appBadge: 'Kids Explorer',
    appSubtitle: 'Discover Animals, Nature, Cosmic Wonders, Shapes & Sensations',
    welcomeGreeting: "Welcome to Nature and Wonder! Let's explore our amazing world together!",

    // Nav Sections
    sectionWorld: '1. The World Around Us',
    sectionShapes: '2. Shapes',
    sectionSensations: '3. Foods & Sensations',
    sectionPuzzle: '4. Puzzle Game',
    sectionQuiz: '6. Grand Quiz',

    // World Subsections
    subnavAnimals: '1.1 Animals (1,000 Catalog)',
    subnavNature: '1.2 Nature Elements',
    subnavUniverse: '1.3 Elements of the Universe',

    // Shapes Subsections
    subnavPlane: '2.1 Plane Shapes (Triangles & Quadrilaterals)',
    subnavSolid: '2.2 Solid Shapes (Cube, Cone & 3D)',
    subnavShapesQuiz: 'Shape Detective Game',

    // Sensations Subsections
    subnavTasteExplorer: 'Taste & Temperature Explorer',
    subnavSensationsSorter: 'Sensation Sorting Game',

    // Animal Explorer UI
    sectionAnimalsBadge: 'Section 1.1 • Animal Kingdom',
    animalExplorerTitle: 'Meet 1,000 Animals of the World! 🦁🐘🐬',
    animalExplorerSubtitle: 'Listen to their authentic sounds, discover where they live across 9 wild habitats, and explore their names, diets, and fun facts!',
    badgeNew: 'New',
    tabSpotlight: 'Spotlight Animals',
    tabCatalog: '1,000 Animal Encyclopedia',
    tabPictureGame: 'Picture Mystery Game',
    searchAnimalsPlaceholder: 'Search animals (e.g., Lion, Eagle, Giraffe)...',
    filterHabitat: 'Habitat',
    filterGroup: 'Animal Group',
    allHabitats: 'All Habitats',
    allGroups: 'All Groups',
    listenSound: 'Listen to Sound',
    pronounce: 'Pronounce',
    watchVideo: 'Watch Video',
    funFact: 'Fun Fact',
    didYouKnow: 'Did you know?',
    size: 'Size / Weight',
    lifespan: 'Lifespan',
    speed: 'Speed',
    diet: 'Diet',
    habitat: 'Habitat',
    viewAngles: 'Different Angles',
    angleAll: 'All Angles',
    angleFront: 'Front View',
    angleSide: 'Side View',
    angleBack: 'Back View',
    details: 'View Details',
    noAnimalsFound: 'No animals matched your search criteria.',
    clearFilters: 'Clear Filters',

    // Animal Picture Mystery Game
    mysteryGameTitle: 'Animal Picture Mystery',
    mysteryGameSubtitle: 'Look closely at the photo and identify this amazing creature!',
    mysteryQuestion: 'Which animal is shown in this picture?',
    score: 'Score',
    correctAwesome: 'Awesome! That is correct!',
    tryAgain: 'So close! Give it another try!',
    nextCreature: 'Next Creature',
    playAgain: 'Play Again',

    // Nature Explorer UI
    natureTitle: 'Elements of Nature',
    natureSubtitle: 'Mountains, ancient trees, lush forests, flowing rivers, waterfalls, and rain!',
    listenToNature: 'Listen to Nature Sounds',
    kidActivity: 'Kid Mini Experiment',
    whyItMatters: 'Why It Matters',

    // Universe Explorer UI
    universeTitle: 'Wonders of the Universe & Space',
    universeSubtitle: 'The Golden Sun, Moon, twinkling stars, rainbows, and comets!',
    cosmicWonder: 'Cosmic Wonder',
    listenCosmicHum: 'Listen to Cosmic Hum',

    // Shapes Explorer UI
    shapesTitle: 'World of Geometric Shapes',
    shapesSubtitle: 'Explore 2D plane and 3D solid shapes, count sides and corners!',
    planeTitle: 'Plane (2D) Shapes',
    planeSubtitle: 'Triangles and quadrilaterals: square, rectangle, rhombus, and trapezoid!',
    solidTitle: 'Solid (3D) Shapes',
    solidSubtitle: 'Cube, cone, cylinder, and sphere: three-dimensional forms in our world!',
    sides: 'Sides',
    vertices: 'Vertices (Corners)',
    faces: 'Faces',
    edges: 'Edges',
    countSides: 'Count Sides',
    countCorners: 'Count Corners',
    whereToSpot: 'Where to Spot in Daily Life',
    shapeSecret: 'Secret Fact',
    realWorldExamples: 'Real-World Examples',
    testYourKnowledge: 'Test Your Knowledge',
    shapeQuizTitle: 'Shape Detective Game',
    shapeQuizSubtitle: 'Read the clues and deduce the mystery shape!',
    question: 'Question',
    scoreLabel: 'Score',
    congratulations: 'Congratulations!',
    perfectScore: 'Perfect score! You are a master Shape Detective!',
    greatEffort: 'Great effort! Keep practicing your shape detective skills!',
    restartQuiz: 'Restart Game',
    revealAnswer: 'Reveal Answer',
    selectedAnswer: 'Selected Answer',

    // Sensations Explorer UI
    sensationsTitle: 'Foods & Taste Sensations',
    sensationsSubtitle: 'Feed Munchy and discover sweet, spicy, sour, hot, and cold sensations!',
    feedMunchy: 'Feed Munchy!',
    munchyReaction: 'Munchy’s Reaction',
    funTastingTip: 'Explorer Tasting Tip',
    sensationSweet: 'Sweet',
    sensationSpicy: 'Spicy / Pungent',
    sensationSour: 'Sour',
    sensationHot: 'Hot / Boiling',
    sensationCold: 'Cold / Chilled',
    sorterTitle: 'Sensation Sorting Game',
    sorterSubtitle: 'Sort foods into sweet, spicy, sour, hot, and cold bowls!',
    sorterInstruction: 'Tap the matching sensation bowl to sort the food item below:',
    dragOrTap: 'Tap bowl to sort',
    dropFoodHere: 'Put in this bowl',
    allSortedCelebration: 'Hooray! You sorted all foods into the right bowls!',
    resetGame: 'Reset Game',

    // Journal & Auth
    explorerJournal: 'Explorer Journal',
    myFavorites: 'My Favorites',
    myDiscoveries: 'My Discoveries',
    statsTitle: 'Achievements & Stats',
    signInGoogle: 'Sign In with Google',
    signOut: 'Sign Out',
    addDiscovery: 'Add New Discovery',
    discoveryTitle: 'Discovery Title',
    discoveryNotes: 'Notes & Impressions',
    category: 'Category',
    saveDiscovery: 'Save Discovery',
    emptyFavorites: 'No favorites saved yet. Tap the heart on any item to save it!',
    emptyDiscoveries: 'No notes in your journal yet. Write down what you observe!',
    close: 'Close',

    // Audio Controls & Footer
    soundMuted: 'Sound Muted',
    soundActive: 'Audio & Speech Active',
    designedForKids: 'Designed for Curious Little Minds',
    madeWithLove: 'Made with love',
    languageSelect: 'Language',
    aiVoiceBadge: 'AI Voice',
    aiVoiceSelectTitle: 'Select AI Speech Voice',
    aiVoiceKore: 'Kore (Natural & Gentle - Recommended)',
    aiVoiceZephyr: 'Zephyr (Crisp & Bright)',
    aiVoicePuck: 'Puck (Playful & Energetic)',
    aiVoiceFenrir: 'Fenrir (Calm & Deep)',
    testVoice: 'Test Voice',
    testVoicePhrase: 'Hello friend! I am speaking to you with clear and natural pronunciation.',

    // Voiceover Studio
    voiceoverStudio: 'Voiceover Studio',
    myVoiceovers: 'My Voice',
    addVoiceover: 'Record Your Voice',
    recordVoice: 'Record',
    recordingInProgress: 'Recording in progress...',
    stopRecording: 'Stop',
    saveVoiceover: 'Save',
    deleteVoiceover: 'Delete',
    listenRecording: 'Listen',
    uploadAudio: 'Upload Audio',
    customVoiceActive: 'Custom Voiceovers Active',
    customVoiceInactive: 'System Voice Active',
    recordedCount: 'Recorded Voices',
    noRecordingsYet: 'No custom voiceovers recorded yet',
    searchItemsToRecord: 'Search animals or items to voiceover...',
    micPermissionPrompt: 'Microphone permission is required to record.',
    recordingSuccess: 'Voiceover saved successfully!',
    recordCustomPhrase: 'Record Custom Phrase',
    enterPhrasePlaceholder: 'e.g. "Hello explorers!", "The tiger runs swift"',
    voiceoverStudioDesc: 'Record your own authentic voice for animals, nature, and shapes!',

    // Puzzle Game
    puzzleTitle: 'Fun Kids Picture Puzzle',
    puzzleSubtitle: 'Assemble pictures of animals, nature, and cosmic wonders piece by piece!',
    puzzleDifficulty: 'Difficulty Level',
    puzzleEasy: 'Easy (2×2 • 4 pieces)',
    puzzleMedium: 'Medium (3×3 • 9 pieces)',
    puzzleHard: 'Master (4×4 • 16 pieces)',
    puzzleModeSwap: 'Swap Pieces',
    puzzleModeSlide: 'Sliding Tiles',
    puzzleMoves: 'Moves',
    puzzleTime: 'Time',
    puzzleHint: 'Hint',
    puzzleShowNumbers: 'Show numbers',
    puzzleSolved: 'Awesome! Puzzle completed!',
    puzzleNext: 'Next Puzzle',
    puzzleShuffle: 'Shuffle Again',
    puzzleChoosePicture: 'Choose Picture',
    playPuzzle: 'Play Puzzle',

    // Additional UI Localization Keys
    allPictures: '🌟 All Pictures',
    verifiedPhoto: 'Verified Photo',
    angleTurnaround: 'All Sides Turnaround (Front • Side • Back)',
    angleFrontView: 'Front-Facing View',
    angleSideView: 'Side Profile View',
    angleBackView: 'Back & Dorsal View',
    removeFromFavorites: 'Remove from Favorites',
    addToFavorites: 'Add to Favorites (Cloud Sync)',
    listenYourVoice: 'Listen / Update Your Voice',
    recordVoiceForItem: 'Record Your Voice for this Item',
    openInYoutube: 'Open in YouTube ↗',
    backupDownload: 'Download Voices (Backup)',
    backupRestore: 'Restore Voice Pack (Import)',
    selectAnotherItem: 'Choose another item',
    recordAgain: 'Record Again',
    selectItemToRecord: 'Choose an item below to record your voice',
    voiceoverInstruction: 'Click on any animal, nature wonder, or shape to record it with your own voice!',
    categoryPhrases: 'Custom Phrase',
    readyRecordings: 'Recorded Voices',
    delete: 'Delete',
    selectAction: 'Select',
    signInGoogleTitle: 'Sign In with Google to Save to Cloud',
    signInGoogleDesc: 'Sign in with Google to synchronize your favorite animals, stars, and field notes across all devices.',
    itemsSaved: 'items saved',
    clickToReadOrRemove: 'Click any favorite to read aloud or remove from your collection',
    noFavoritesDesc: 'Click the red heart icon on any card to save it to your collection!',
    logNewDiscovery: 'Log a New Field Discovery',
    whatDidYouFind: 'What did you find?',
    discoveryPlaceholder: 'e.g. Spotted a colorful butterfly in garden',
    topic: 'Topic',
    chooseSticker: 'Choose an Icon Sticker',
    fieldNotesLabel: 'Field Observation Notes',
    fieldNotesPlaceholder: 'Write what it looked like, sounded like, or what you learned...',
    saveToCloudJournal: 'Save to Cloud Journal',
    savedObservations: 'My Saved Observations',
    filterNotes: 'Filter notes...',
    noNotesYet: 'No field notes recorded yet. Write your first discovery above!',
    mysteryHighScore: 'Picture Mystery High Score',
    favoritedWonders: 'Favorited Wonders',
    fieldDiscoveriesCount: 'Field Discoveries',
    spinLeft: 'Spin Left',
    spinRight: 'Spin Right',
    nextQuestion: 'Next Riddle',

    // Numbers & Alphabet (EN)
    sectionNumbersAlphabet: '5. Numbers & Alphabet',
    subnavAlphabet: '5.1 Alphabet (A-Z)',
    subnavNumbers: '5.2 Numbers & Counting (1-100)',
    subnavNumbersAlphabetQuiz: '5.3 Letter & Number Quiz',
    alphabetTitle: 'Kids Alphabet Explorer 🔤',
    alphabetSubtitle: 'Listen to letter sounds, learn fun vocabulary words, and trace letters on the screen!',
    listenLetter: 'Listen to Letter',
    listenWord: 'Listen to Word',
    practiceWriting: 'Trace & Write on Canvas',
    clearCanvas: 'Clear',
    strokeColor: 'Pen Color',
    allLetters: 'All Letters',
    uppercaseLowercase: 'Uppercase & Lowercase',
    numbersTitle: 'Fun Numbers & Counting (1-100) 🔢',
    numbersSubtitle: 'Listen to numbers, tap interactive items to count them, and discover exciting math facts!',
    tapToCount: 'Tap cute items to count them',
    countedCount: 'Counted',
    addOne: '+1 Add',
    subtractOne: '-1 Subtract',
    resetCounting: 'Reset Counting',
    numberFunFact: 'Fun Math Fact',
    numberQuizTitle: 'Letter & Number Quiz Game 🏆',
    numberQuizSubtitle: 'Listen to or read the challenge, pick the correct answer, and collect shining stars!',
    quizFindLetter: 'Which letter does this word start with?',
    quizCountItems: 'How many items are on the screen? Count and choose!',
    questionNumber: 'Question',
    quizCorrect: 'Awesome! That is correct! 🎉',
    quizIncorrect: 'Try again, you can do it! 💪',

    // Daily Random Fact UI
    dailyFactTitle: 'Daily Wonder of Nature',
    dailyFactBadge: 'Fact of the Day 🌟',
    dailyFactSubtitle: 'Discover an amazing new animal or nature secret every single day!',
    exploreInWorld: 'Explore in World',
    solvePuzzle: 'Solve Puzzle',
    nextFact: 'Next Fact 🎲',
    previousFact: 'Previous Fact',
    todaysFact: "Today's Wonder",
    showOnStartup: 'Show daily wonder when app opens',
    iLearnedThis: 'I learned this! ✨',
    learnedAwesome: 'Awesome! You discovered today’s wonder!',
    listenFact: 'Listen to Fact',
    playSound: 'Hear Sound',
    dailyWonderButton: 'Daily Wonder',
    categoryAnimal: 'Animal Kingdom',
    categoryNature: 'Natural Wonder',
    categoryUniverse: 'Cosmic Wonder'
  }
};
