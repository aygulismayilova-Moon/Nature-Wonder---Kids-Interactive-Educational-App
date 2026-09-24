import { AnimalNovel, Language } from '../types';

export const NOVEL_GENRES: Array<{
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  emoji: string;
  gradient: string;
}> = [
  {
    id: 'magical_adventure',
    name: {
      az: 'Sehrli Macəra və Kəşf',
      tr: 'Büyülü Macera ve Keşif',
      ru: 'Волшебное Приключение',
      en: 'Magical Adventure & Discovery'
    },
    description: {
      az: 'Sirli meşələr, parıldayan göllər və qədim mağaralar',
      tr: 'Gizemli ormanlar, parlayan göller ve kadim mağaralar',
      ru: 'Таинственные леса, сияющие озёра и древние тайны',
      en: 'Mysterious trails, glowing waterways, and hidden ancient secrets'
    },
    emoji: '🌟',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    id: 'friendship_courage',
    name: {
      az: 'Dostluq və Cəsarət',
      tr: 'Dostluk ve Cesaret',
      ru: 'Дружба и Смелость',
      en: 'Friendship & Courage'
    },
    description: {
      az: 'Birlikdə maneələri aşan sadiq heyvan dostlar',
      tr: 'Birlikte engelleri aşan sadık hayvan dostları',
      ru: 'Преданные друзья-звери, преодолевающие любые трудности',
      en: 'Loyal animal companions overcoming challenges together'
    },
    emoji: '🛡️',
    gradient: 'from-rose-500 to-pink-600'
  },
  {
    id: 'nature_mystery',
    name: {
      az: 'Təbiət Sirri və Detektiv',
      tr: 'Doğa Gizemi ve Dedektif',
      ru: 'Тайны Природы и Детектив',
      en: 'Nature Mystery & Detective'
    },
    description: {
      az: 'Gecə səslərini, itmiş izləri və cığırları axtaran qəhrəman',
      tr: 'Gece seslerini, kayıp izleri ve patikaları çözen kahraman',
      ru: 'Герои, разгадывающие следы на снегу и голоса ночного леса',
      en: 'Solving mysterious clues, tracks in the snow, and wild riddles'
    },
    emoji: '🔍',
    gradient: 'from-sky-500 to-indigo-600'
  },
  {
    id: 'bedtime_wonder',
    name: {
      az: 'Sakit Gecə və Nağıl Yuxusu',
      tr: 'Huzurlu Gece ve Masal Uykusu',
      ru: 'Спокойный Сон и Сказка на Ночь',
      en: 'Gentle Bedtime Wonder'
    },
    description: {
      az: 'Ulduzlu səma altında sakitləşdirici və xoş nağıl',
      tr: 'Yıldızlı gökyüzü altında sakinleştirici ve tatlı masal',
      ru: 'Успокаивающая, добрая сказка под мерцающими звёздами',
      en: 'Soothing rhythm under starry skies for peaceful rest'
    },
    emoji: '🌙',
    gradient: 'from-purple-500 to-indigo-700'
  },
  {
    id: 'habitat_protector',
    name: {
      az: 'Meşə və Təbiət Qoruyucusu',
      tr: 'Orman ve Doğa Koruyucusu',
      ru: 'Защитники Дикой Природы',
      en: 'Habitat Guardian'
    },
    description: {
      az: 'Yaşadıqları təbii mühiti təmiz və firavan saxlayan heyvanlar',
      tr: 'Doğal yuvalarını koruyan ve temiz tutan cesur hayvanlar',
      ru: 'Звери, спасающие свой родной лес, океан и чистые реки',
      en: 'Animals uniting to heal the rivers, trees, and reefs'
    },
    emoji: '🌍',
    gradient: 'from-emerald-500 to-teal-600'
  }
];

export const NOVEL_SETTINGS: Array<{
  id: string;
  name: Record<Language, string>;
  emoji: string;
}> = [
  {
    id: 'savannah',
    name: {
      az: 'Qızılı Günəşli Savanna',
      tr: 'Altın Güneşli Savana',
      ru: 'Золотая Солнечная Саванна',
      en: 'Sunlit Golden Savannah'
    },
    emoji: '🌾'
  },
  {
    id: 'rainforest',
    name: {
      az: 'Zümrüd Yağış Meşəsi & Cəngəllik',
      tr: 'Zümrüt Yağmur Ormanı & Vahşi Doğa',
      ru: 'Изумрудные Тропические Джунгли',
      en: 'Emerald Rainforest & Jungle'
    },
    emoji: '🌴'
  },
  {
    id: 'ocean',
    name: {
      az: 'Dərin Mavi Mərcan Dənizi',
      tr: 'Derin Mavi Mercan Denizi',
      ru: 'Глубокий Синий Коралловый Океан',
      en: 'Deep Blue Coral Ocean'
    },
    emoji: '🌊'
  },
  {
    id: 'arctic',
    name: {
      az: 'Parıldayan Qarlı Şimal Qütbü',
      tr: 'Işıltılı Karlı Kuzey Kutbu',
      ru: 'Сверкающие Снежные Льды Арктики',
      en: 'Sparkling Arctic Snow & Ice'
    },
    emoji: '❄️'
  },
  {
    id: 'mountains',
    name: {
      az: 'Dumanlı Zirvələr və Qaya Cığırları',
      tr: 'Sisli Dağ Zirveleri ve Patikalar',
      ru: 'Величественные Горные Вершины',
      en: 'Misty High Peaks & Valleys'
    },
    emoji: '🏔️'
  }
];

export const PRESET_NOVELS: AnimalNovel[] = [
  {
    id: 'preset-lion-az',
    title: 'Şir Şahinin Qızıl Pıçıltısı 🦁',
    subtitle: 'Savannanın ən cəsur balaca şirinin qeyri-adi dostluq macərası',
    moral: 'Əsl güc təkcə uca səslə nərə çəkməkdə deyil, dostlarını dinləmək və onları qorumaqdadır.',
    protagonist: {
      name: 'Şahin',
      species: 'Şir (Lion)',
      emoji: '🦁',
      trait: 'Cəsur, mehriban və həvəsli',
      superSkill: 'Savanna küləyini hiss edən iti qulaqlar',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80'
    },
    companion: {
      name: 'Piti',
      species: 'Mirkat (Meerkat)',
      emoji: '🦡',
      trait: 'Cəld, diqqətli və zarafatcıl'
    },
    setting: 'Qızılı Günəşli Savanna',
    genre: 'friendship_courage',
    language: 'az',
    readingLevel: 'explorer',
    coverColor: 'from-amber-600 via-orange-600 to-yellow-500',
    createdAt: 1710000000000,
    chapters: [
      {
        chapterNumber: 1,
        title: 'Böyük Baobab Ağacının Kölgəsində',
        content: `Gənc şir balası Şahin səhər günəşinin qızılı şəfəqləri altında gözlərini açdı. Savannada otlar meh ilə rəqs edir, uzaqda zürafələr sakitcə yarpaq yeyirdi. Şahin hər kəs kimi uca səslə nərə çəkmək istəyirdi, amma onun səsi hələlik şirin bir pişik miyoltusuna bənzəyirdi.

Birdən otların arasından balaca mirkat Piti çıxdı. "Salam, Şahin! Bu gün Qırmızı Qayalıq tərəfdən qəribə bir zümzümə eşidilir. Deyəsən kimsə kömək istəyir!" dedi. Şahin cəsarətlə ayağa qalxdı. Birlikdə sirli cığırla addımlamağa başladılar.`,
        animalFact: 'Şir balaları təxminən 1-2 yaşına çatana qədər böyük şirlər kimi uca nərə çəkə bilmirlər!',
        discussionQuestion: 'Sən heç özündən kiçik və ya fərqli bir dostuna kömək etmisən?'
      },
      {
        chapterNumber: 2,
        title: 'Qırmızı Qayalıqda Gizli Bulaq',
        content: `Qayalıqlara çatanda gördülər ki, balaca zebra tayı daşların arasında ilişib qalıb və su tapa bilmir. Günəş getdikcə qızırdı. Şahin var gücü ilə nərə çəkməyə çalışdı, lakin heç kim eşitmədi.

Onda Piti dedi: "Şahin, qışqırmaq lazım deyil! Sənin pəncələrin güclüdür, gəl birlikdə daşları kənara itələyək!" Şahin başa düşdü ki, nərə çəkməkdənsə, hərəkət etmək daha vacibdir. Güclü pəncələri ilə daşları ehtiyatla kənarlaşdırdı və qayaların arasından büllur kimi sərin bulaq suyu axmağa başladı.`,
        animalFact: 'Şirlər gün ərzində enerjilərini qorumaq üçün 16-20 saat dincələ və ya yata bilərlər.',
        discussionQuestion: 'Çətin bir vəziyyətlə qarşılaşanda hirslənmək yerinə başqa hansı çarələr tapa bilərik?'
      },
      {
        chapterNumber: 3,
        title: 'Savannanın Qəhrəmanları',
        content: `Susuzluğunu yatıran balaca zebra sevinclə atılıb-düşdü və ailəsinə qovuşdu. Bütün heyvanlar Şahin və Pitinin cəsarətini alqışladılar.

Axşam düşəndə göydə saysız-hesabsız ulduzlar yandı. Şahin anasının yanına qayıtdı və başa düşdü: əsl qəhrəmanlıq ən uca səslə bağırmaq yox, ehtiyacı olana şəfqətlə əl uzatmaqdır. Və o gecə Şahin ilk dəfə məğrur, lakin çox mülayim bir nərə çəkdi.`,
        animalFact: 'Şirlərin ailə qrupu "prayd" (pride) adlanır və onlar bir-birlərinə çox sədaqətli olurlar.',
        discussionQuestion: 'Şahinin bu hekayədə öyrəndiyi ən vacib dərs nə oldu?'
      }
    ],
    nextAdventureOptions: [
      'Gecə vaxtı parıldayan Ulduzlu Çaya doğru yeni bir kəşf səfəri',
      'Fil ailəsi ilə birlikdə gizli palçıq gölünün sirrini öyrənmək',
      'Qartal Qayasına qalxaraq bütün savannanı seyr etmək'
    ]
  },
  {
    id: 'preset-dolphin-en',
    title: 'Luna the Dolphin and the Singing Reef 🐬',
    subtitle: 'An ocean adventure about kindness, echoes, and marine harmony',
    moral: 'Listening closely to nature and working in harmony can heal our world.',
    protagonist: {
      name: 'Luna',
      species: 'Bottlenose Dolphin',
      emoji: '🐬',
      trait: 'Joyful, acrobatic, and empathetic',
      superSkill: 'Crystal echolocation that maps underwater caves',
      image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=900&q=80'
    },
    companion: {
      name: 'Barnacle Bob',
      species: 'Sea Turtle',
      emoji: '🐢',
      trait: 'Wise, patient, and steady swimmer'
    },
    setting: 'Deep Blue Coral Ocean',
    genre: 'magical_adventure',
    language: 'en',
    readingLevel: 'explorer',
    coverColor: 'from-cyan-600 via-teal-600 to-blue-700',
    createdAt: 1710000000000,
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Whispers of the Coral Lagoon',
        content: `Sunlight danced through turquoise ripples as Luna the young bottlenose dolphin performed a double-twist leap into the morning air. Below her, the Rainbow Reef was alive with yellow tangs, sea anemones, and clownfish.

Yet as Luna sent out a curious series of echolocation clicks, a strange silence returned from the sunken coral grotto. Usually, the living reef hummed with rhythmic ocean music. "Something is troubling the singing coral," said Barnacle Bob, an ancient sea turtle gliding peacefully beside her.`,
        animalFact: 'Dolphins use echolocation like built-in biological sonar to "see" underwater using sound waves!',
        discussionQuestion: 'How do you think underwater animals talk to each other?'
      },
      {
        chapterNumber: 2,
        title: 'The Tangled Current',
        content: `Swimming deeper into the sapphire trench, Luna and Bob discovered an old fishing net tangled across the giant clam shelf, blocking the clean ocean current. Without fresh water flow, the sea sponges and anemones could not breathe.

"Hold on," whistled Luna. "My snout is sleek, but your shell is strong!" Working together with gentle clicks and steady nudges, Luna carefully unhooked the loose fibers while Bob anchored the heavy driftwood. Soon, the clear current surged through again with a joyous bubble cascade!`,
        animalFact: 'Bottlenose dolphins are highly social animals that can remember the signature whistles of their friends for over 20 years!',
        discussionQuestion: 'What is something we can do to keep our oceans and rivers clean?'
      },
      {
        chapterNumber: 3,
        title: 'The Ocean Symphony Reborn',
        content: `As the water cleared, the living coral bloomed in glowing ultraviolet and gold shades. A school of silver jacks swirled in celebration, creating an underwater spiral of starlight.

Luna clicked a cheerful victory melody, and dolphins from nearby bays leaped in unison along the ocean horizon. That night, as moonlight silvered the waves, the singing reef sang louder and sweeter than ever before.`,
        animalFact: 'Dolphins sleep with only one half of their brain at a time so they can stay afloat and breathe air at the surface!',
        discussionQuestion: 'What was your favorite part of Luna and Bob’s ocean rescue?'
      }
    ],
    nextAdventureOptions: [
      'Journey to the deep bioluminescent abyss where glowing jellyfish dance',
      'Rescue a baby humpback whale lost near the kelp forest',
      'Follow the ancient sea current map to the legendary Coral Palace'
    ]
  },
  {
    id: 'preset-owl-ru',
    title: 'Барнаби и Звёздный Компас Тайги 🦉',
    subtitle: 'Удивительная сказка о мудром совёнке и волшебных созвездиях',
    moral: 'Знания и терпение помогают найти правильный путь даже в самой тёмной ночи.',
    protagonist: {
      name: 'Барнаби',
      species: 'Полярная Сова (Snowy Owl)',
      emoji: '🦉',
      trait: 'Мудрый, любознательный и внимательный',
      superSkill: 'Бесшумный ночной полёт и зоркий взгляд',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80'
    },
    companion: {
      name: 'Тимоша',
      species: 'Бурундук (Chipmunk)',
      emoji: '🐿️',
      trait: 'Запасливый, шустрый и весёлый'
    },
    setting: 'Величественные Горные Вершины',
    genre: 'nature_mystery',
    language: 'ru',
    readingLevel: 'explorer',
    coverColor: 'from-indigo-600 via-purple-700 to-slate-900',
    createdAt: 1710000000000,
    chapters: [
      {
        chapterNumber: 1,
        title: 'Шёпот Северного Ветра',
        content: `Над заснеженными кедрами старого сибирского леса зажглась первая вечерняя звезда. Совёнок Барнаби сидел на высокой заиндевелой ветке и расправлял пушистые белоснежные крылья. В отличие от дневных птиц, его рабочий день только начинался.

Внизу, у корней старого дуба, зашуршал снег. Из норки высунулся бурундучок Тимоша с пушистым хвостом. "Барнаби! В глубине ущелья заблудился оленёнок Северянка. Туман опустился на тропы, и он не видит дорогу домой!" Совёнок расправил крылья: "Не волнуйся, Тимоша. Звёзды на небе никогда не сбиваются с пути."`,
        animalFact: 'Совы способны поворачивать голову на 270 градусов, потому что их глаза неподвижно зафиксированы в глазницах!',
        discussionQuestion: 'Как ты думаешь, почему совы так хорошо видят и слышат ночью?'
      },
      {
        chapterNumber: 2,
        title: 'Следы на Серебряном Снегу',
        content: `Барнаби взмыл в воздух абсолютно бесшумно — особое строение перьев совы гасит любой свист воздуха. Он поднялся выше морозного тумана и посмотрел на Большую Медведицу и Полярную звезду.

С высоты птичьего полёта он заметил слабый огонёк: это светился морозный пар от дыхания маленького оленёнка у Голубого ручья. Тимоша бежал по веткам, указывая ориентиры, а Барнаби летел впереди, мягко ухая и освещая путь звёздными лучами.`,
        animalFact: 'У сов очень мягкие перья с бахромой по краям, благодаря чему их полёт абсолютно бесшумен для добычи и леса.',
        discussionQuestion: 'Что помогает тебе чувствовать себя уверенно в темноте?'
      },
      {
        chapterNumber: 3,
        title: 'Тепло Родного Стада',
        content: `Услышав знакомый мягкий голос Барнаби, оленёнок поднял ушки и смело пошёл за белой тенью в небе. Вскоре они вышли на широкую поляну, где взволнованная мама-олениха уже звала своего малыша.

В благодарность лесные жители принесли совёнку сладких кедровых шишек и ягод брусники для его друга Тимоши. Северное сияние окрасило небо в зелёные и лиловые тона, празднуя победу дружбы и звёздной мудрости.`,
        animalFact: 'Белые совы могут охотиться даже под толстым слоем снега благодаря исключительно острому слуху.',
        discussionQuestion: 'Чему нас учит поступок Барнаби и Тимоши?'
      }
    ],
    nextAdventureOptions: [
      'Поиск таинственной ледяной пещеры с кристальными сосульками',
      'Встреча с мудрым амурским тигром на вершине Хребта ветров',
      'Ночной звёздный фестиваль всех лесных птиц'
    ]
  },
  {
    id: 'preset-panda-tr',
    title: 'Kızıl Panda Poko ve Bambu Rüyası 🐾',
    subtitle: 'Bulut ormanında neşe, cesaret ve doğanın gizli melodisi',
    moral: 'Küçük olmak büyük işler başarmaya engel değildir; sevgi her kalbi ısıtır.',
    protagonist: {
      name: 'Poko',
      species: 'Kızıl Panda (Red Panda)',
      emoji: '🦊',
      trait: 'Meraklı, akrobatik ve tatlı',
      superSkill: 'Kocaman kabarık kuyruğuyla mükemmel ağaç dengesi',
      image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=900&q=80'
    },
    companion: {
      name: 'Kırpık',
      species: 'Dağ Keçisi (Mountain Kid)',
      emoji: '🐐',
      trait: 'Cesur, zıplayan ve enerjik'
    },
    setting: 'Zümrüt Yağmur Ormanı & Vahşi Doğa',
    genre: 'habitat_protector',
    language: 'tr',
    readingLevel: 'explorer',
    coverColor: 'from-emerald-600 via-teal-700 to-amber-700',
    createdAt: 1710000000000,
    chapters: [
      {
        chapterNumber: 1,
        title: 'Sisli Tepelerin Saklı Vadisi',
        content: `Himalaya dağlarının eteklerindeki bulut ormanında sabah rüzgarı tatlı bambu kokuları taşıyordu. Kızıl panda Poko, kızıl-kestane kürkü ve çizgili kabarık kuyruğuyla devasa bir meşe dalında neşeyle gerindi.

Poko yürürken patileri adeta yumuşacık yosunlara basıyordu. Aniden aşağıdan arkadaşı yavru dağ keçisi Kırpık seslendi: "Poko, çabuk bak! Rüzgar Şelalesi'nin suyu azalmış, aşağıdaki orman gölü kuruyor!" Poko merakla bıyıklarını oynattı. Bu gizemi çözmek için yukarı tırmanmaları gerekiyordu.`,
        animalFact: 'Kızıl pandalar ağaçlarda dengede durmak ve soğuk gecelerde battaniye gibi örtünmek için uzun, kabarık kuyruklarını kullanırlar!',
        discussionQuestion: 'Doğada bir ağacın ya da suyun korunması neden bu kadar önemlidir?'
      },
      {
        chapterNumber: 2,
        title: 'Bambu Köprüsü ve Dev Kütük',
        content: `Yukarı doğru tırmandıklarında gördüler ki, fırtınadan düşen dev bir kuru ağaç gövdesi şelalenin aktığı doğal kanalı tıkamıştı. Su kayaların arkasında birikiyor ve vadideki küçük hayvanlar susuz kalıyordu.

Kırpık güçlü boynuzlarıyla itmeye çalıştı ama kütük çok ağırdı. Poko akıllıca düşündü: "Boyutumuz küçük olabilir ama esnek bambu dallarını kaldıraç gibi kullanabiliriz!" Poko esnek dalları kayaların arasına sıkıştırdı, Kırpık da var gücüyle yüklendi. Çatırdayan kütük yana kaydı ve berrak kaynak suyu köpük köpük vadiye doğru akmaya başladı!`,
        animalFact: 'Kızıl pandaların ön patilerinde bambu saplarını kolayca tutmalarına yarayan özel bir "sahte başparmak" kemiği bulunur.',
        discussionQuestion: 'Zor bir işle karşılaştığında güç yerine aklını nasıl kullanabilirsin?'
      },
      {
        chapterNumber: 3,
        title: 'Yeşeren Vadi ve Şükran Şarkısı',
        content: `Köpüren su ormana ulaştığında sararan eğrelti otları yeniden canlandı, renkli kelebekler havada dans etmeye başladı. Ormandaki tüm geyikler, maymunlar ve kuşlar Poko ile Kırpık’a teşekkür etmek için toplandılar.

Akşam güneş batarken gökyüzü mor ve pembe renklere boyandı. Poko yüksek bir dalın üstünde kıvrıldı, kabarık kuyruğunu burnuna sararak huzurla gözlerini kapattı. Vadideki her canlının kalbinde tatlı bir şükran melodisi çalıyordu.`,
        animalFact: 'Kızıl pandalar günün büyük kısmını ağaçlarda beslenerek ve dinlenerek geçiren çok barışçıl hayvanlardır.',
        discussionQuestion: 'Poko ve Kırpık’ın macerasından en çok aklında kalan sahne hangisi oldu?'
      }
    ],
    nextAdventureOptions: [
      'Karlı Zirvede yaşayan gizemli Kar Parsı ile tanışma yolculuğu',
      'Yıldız Çiçeği Vadisinde saklı şifalı bitkileri keşfetmek',
      'Ormandaki tüm yavru hayvanlar için neşeli bir bulut pikniği düzenlemek'
    ]
  }
];
