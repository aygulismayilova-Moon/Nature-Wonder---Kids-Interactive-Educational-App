import { QuizQuestion } from '../types';

export const ALL_SECTIONS_QUIZ_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // SECTION 1: ANIMALS & WILDLIFE
  // ==========================================
  {
    id: 'anim-1',
    category: 'animals',
    emoji: '🦁',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',
    question: {
      az: 'Hansı heyvan "Cəngəlliyin Kralı" adlanır və nərəsi 8 kilometr uzaqdan eşidilir?',
      tr: 'Hangi hayvan "Ormanların Kralı" olarak bilinir ve kükremesi 8 kilometre öteden duyulabilir?',
      ru: 'Какое животное называют «Царём зверей», чей рык слышен на расстоянии 8 километров?',
      en: 'Which animal is known as the "King of the Jungle", whose roar can be heard 8 km away?'
    },
    options: [
      {
        id: 'opt-zebra',
        emoji: '🦓',
        label: { az: 'Zebra', tr: 'Zebra', ru: 'Зебра', en: 'Zebra' }
      },
      {
        id: 'opt-lion',
        emoji: '🦁',
        label: { az: 'Şir', tr: 'Aslan', ru: 'Лев', en: 'Lion' }
      },
      {
        id: 'opt-giraffe',
        emoji: '🦒',
        label: { az: 'Zürafə', tr: 'Zürafa', ru: 'Жираф', en: 'Giraffe' }
      },
      {
        id: 'opt-bear',
        emoji: '🐻',
        label: { az: 'Ayı', tr: 'Ayı', ru: 'Медведь', en: 'Bear' }
      }
    ],
    correctOptionId: 'opt-lion',
    explanation: {
      az: 'Şirlər savannanın hökmdarıdır! Onlar "prayd" adlı mehriban ailə dəstələrində yaşayırlar.',
      tr: 'Aslanlar savananın hükümdarıdır! "Gurur" adı verilen aile grupları halinde yaşarlar.',
      ru: 'Львы живут большими семейными группами — прайдами, а их мощный рык слышен на многие километры!',
      en: 'Lions live in family groups called prides, and their mighty roar echoes across the savannah!'
    },
    hint: {
      az: 'Bu heyvanın əzəmətli yalı var və möhtəşəm nərə çəkir!',
      tr: 'Bu hayvanın görkemli yeleleri vardır ve çok güçlü kükrer!',
      ru: 'У самцов этого зверя роскошная густая грива!',
      en: 'This animal has a magnificent golden mane!'
    }
  },
  {
    id: 'anim-2',
    category: 'animals',
    emoji: '🐆',
    image: '/images/cheetah.jpg',
    question: {
      az: 'Yer üzündə ən sürətli qaçan quru heyvanı hansıdır?',
      tr: 'Dünyanın karada en hızlı koşan hayvanı hangisidir?',
      ru: 'Какое животное самое быстрое на суше?',
      en: 'What is the fastest running land animal on Earth?'
    },
    options: [
      {
        id: 'opt-horse',
        emoji: '🐎',
        label: { az: 'At', tr: 'At', ru: 'Лошадь', en: 'Horse' }
      },
      {
        id: 'opt-kangaroo',
        emoji: '🦘',
        label: { az: 'Kenquru', tr: 'Kanguru', ru: 'Кенгуру', en: 'Kangaroo' }
      },
      {
        id: 'opt-cheetah',
        emoji: '🐆',
        label: { az: 'Gepard', tr: 'Çita', ru: 'Гепард', en: 'Cheetah' }
      },
      {
        id: 'opt-wolf',
        emoji: '🐺',
        label: { az: 'Canavar', tr: 'Kurt', ru: 'Волк', en: 'Wolf' }
      }
    ],
    correctOptionId: 'opt-cheetah',
    explanation: {
      az: 'Gepard cəmi 3 saniyəyə saatda 100 kilometr sürət yığa bilir — idman maşınından da iti!',
      tr: 'Çita sadece 3 saniyede 100 km/s hıza ulaşabilir — bir spor arabadan bile daha hızlı!',
      ru: 'Гепард разгоняется до 100 км/ч всего за 3 секунды — быстрее гоночного спорткара!',
      en: 'The cheetah can accelerate to 100 km/h in just 3 seconds — faster than a sports car!'
    },
    hint: {
      az: 'Xallı sarı kürkü və gözlərinin altında qara "göz yaşı" xətləri var.',
      tr: 'Benekli kürkü ve gözlerinin altında siyah gözyaşı çizgileri vardır.',
      ru: 'У него пятнистая шкура и черные линии слез под глазами.',
      en: 'It has black tear marks running down its face from the eyes.'
    }
  },
  {
    id: 'anim-3',
    category: 'animals',
    emoji: '🐬',
    image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&w=800&q=80',
    question: {
      az: 'Okeanda yaşayan, balıq deyil məməli olan və exolokasiya ilə yol tapan dost canlı kimdir?',
      tr: 'Okyanusta yaşayan, balık değil memeli olan ve ses dalgalarıyla yolunu bulan sevimli canlı kimdir?',
      ru: 'Кто живет в океане, дышит воздухом как млекопитающее и общается веселыми щелчками?',
      en: 'Which sea creature is a mammal (not a fish) that uses echolocation clicks to navigate?'
    },
    options: [
      {
        id: 'opt-shark',
        emoji: '🦈',
        label: { az: 'Köpəkbalığı (Akula)', tr: 'Köpekbalığı', ru: 'Акула', en: 'Shark' }
      },
      {
        id: 'opt-octopus',
        emoji: '🐙',
        label: { az: 'Səkkizayaq', tr: 'Ahtapot', ru: 'Осьминог', en: 'Octopus' }
      },
      {
        id: 'opt-crab',
        emoji: '🦀',
        label: { az: 'Yengəc', tr: 'Yengeç', ru: 'Краб', en: 'Crab' }
      },
      {
        id: 'opt-dolphin',
        emoji: '🐬',
        label: { az: 'Delfin', tr: 'Yunus', ru: 'Дельфин', en: 'Dolphin' }
      }
    ],
    correctOptionId: 'opt-dolphin',
    explanation: {
      az: 'Delfinlər çox ağıllıdır! Onlar suyun üzünə çıxaraq nəfəs alır və xüsusi fit səsləri ilə danışırlar.',
      tr: 'Yunuslar çok zekidir! Su yüzeyine çıkarak nefes alırlar ve ıslık sesleriyle konuşurlar.',
      ru: 'Дельфины невероятно умны! Они дышат воздухом через дыхало и узнают друг друга по именам.',
      en: 'Dolphins are extremely intelligent mammals that breathe air and communicate with signature whistles!'
    },
    hint: {
      az: 'Bu dəniz dostu dalğaların üzərində tullanmağı və gəmilərlə yarışmağı sevir!',
      tr: 'Bu sevimli dost dalgaların üzerinde zıplamayı ve gemilerle yarışmayı sever!',
      ru: 'Он обожает выпрыгивать из волн и крутить сальто в воздухе!',
      en: 'It loves leaping high above the waves alongside boats!'
    }
  },
  {
    id: 'anim-4',
    category: 'animals',
    emoji: '🐧',
    image: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=800&q=80',
    question: {
      az: 'Hansı quş göydə uça bilmir, amma buzlu suda bir balıq kimi sürətlə üzür?',
      tr: 'Hangi kuş gökyüzünde uçamaz ama buzlu sularda bir balık gibi hızlı yüzer?',
      ru: 'Какая птица не умеет летать в небе, но превосходно плавает в ледяной воде?',
      en: 'Which bird cannot fly in the air, but swims through icy ocean waters like a torpedo?'
    },
    options: [
      {
        id: 'opt-eagle',
        emoji: '🦅',
        label: { az: 'Qartal', tr: 'Kartal', ru: 'Орёл', en: 'Eagle' }
      },
      {
        id: 'opt-penguin',
        emoji: '🐧',
        label: { az: 'Pinqvin', tr: 'Penguen', ru: 'Пингвин', en: 'Penguin' }
      },
      {
        id: 'opt-parrot',
        emoji: '🦜',
        label: { az: 'Tutuquşu', tr: 'Papağan', ru: 'Попугай', en: 'Parrot' }
      },
      {
        id: 'opt-flamingo',
        emoji: '🦩',
        label: { az: 'Flaminqo', tr: 'Flamingo', ru: 'Фламинго', en: 'Flamingo' }
      }
    ],
    correctOptionId: 'opt-penguin',
    explanation: {
      az: 'Pinqvinlər Antarktidada yaşayır və qanadlarını suda avar kimi işlədirlər!',
      tr: 'Penguenler buzlu sularda kanatlarını yüzgeç gibi kullanarak hızla yüzerler!',
      ru: 'Пингвины превратили свои крылья в ласты и ныряют на глубину в сотни метров!',
      en: 'Penguins use their wings as flippers to glide gracefully underwater through cold seas!'
    },
    hint: {
      az: 'Qara-ağ "smokinq" geyinmiş kimi görünür və buz üstündə qarnı ilə sürüşür!',
      tr: 'Siyah-beyaz bir smokin giymiş gibi görünür ve buz üzerinde karnıyla kayar!',
      ru: 'Похож на джентльмена в черно-белом смокинге и катается на животе по льду!',
      en: 'It looks like it is wearing a black-and-white tuxedo and slides on its belly on ice!'
    }
  },

  // ==========================================
  // SECTION 2: NATURE WONDERS
  // ==========================================
  {
    id: 'nat-1',
    category: 'nature',
    emoji: '🌈',
    image: '/images/vibrant_rainbow.jpg',
    question: {
      az: 'Yağışdan sonra günəş şüaları su damcılarından keçəndə göy üzündə nə yaranır?',
      tr: 'Yağmurdan sonra güneş ışınları su damlacıklarından geçtiğinde gökyüzünde ne oluşur?',
      ru: 'Что появляется на небе, когда солнечные лучи пробиваются сквозь капли дождя?',
      en: 'What colorful arch forms in the sky when sunlight shines through raindrops after rain?'
    },
    options: [
      {
        id: 'opt-lightning',
        emoji: '⚡',
        label: { az: 'İldırım', tr: 'Şimşek', ru: 'Молния', en: 'Lightning' }
      },
      {
        id: 'opt-rainbow',
        emoji: '🌈',
        label: { az: 'Göyqurşağı', tr: 'Gökkuşağı', ru: 'Радуга', en: 'Rainbow' }
      },
      {
        id: 'opt-tornado',
        emoji: '🌪️',
        label: { az: 'Qasırğa', tr: 'Hortum', ru: 'Торнадо', en: 'Tornado' }
      },
      {
        id: 'opt-fog',
        emoji: '🌫️',
        label: { az: 'Duman', tr: 'Sis', ru: 'Туман', en: 'Fog' }
      }
    ],
    correctOptionId: 'opt-rainbow',
    explanation: {
      az: 'Göyqurşağı 7 əsas rəngdən ibarətdir: Qırmızı, Narıncı, Sarı, Yaşıl, Mavi, Göy və Bənövşəyi!',
      tr: 'Gökkuşağı 7 büyüleyici renkten oluşur: Kırmızı, Turuncu, Sarı, Yeşil, Mavi, Lacivert ve Mor!',
      ru: 'Радуга состоит из 7 цветов спектра: каждый охотник желает знать, где сидит фазан!',
      en: 'A rainbow has 7 beautiful colors: Red, Orange, Yellow, Green, Blue, Indigo, and Violet!'
    },
    hint: {
      az: 'Göy üzündə 7 parlaq rəngli nəhəng bir körpü kimidir!',
      tr: 'Gökyüzünde rengarenk parıldayan sihirli bir köprü gibidir!',
      ru: 'Это разноцветная дуга из семи ярких цветов на чистом небе!',
      en: 'It is a magical 7-colored glowing arc across the sky!'
    }
  },
  {
    id: 'nat-2',
    category: 'nature',
    emoji: '🌋',
    image: '/images/fiery_volcano.jpg',
    question: {
      az: 'Yerin dərinliklərindən qırmızı qızmar lava və kül püskürən dağ necə adlanır?',
      tr: 'Yerin derinliklerinden kıpkırmızı kızgın lav ve küller püskürten dağa ne denir?',
      ru: 'Как называется гора, из жерла которой извергается раскалённая лава, пепел и газы?',
      en: 'What is a mountain called that erupts glowing red lava, ash, and smoke from deep inside Earth?'
    },
    options: [
      {
        id: 'opt-iceberg',
        emoji: '🧊',
        label: { az: 'Aysberq', tr: 'Buzdağı', ru: 'Айсберг', en: 'Iceberg' }
      },
      {
        id: 'opt-canyon',
        emoji: '🏜️',
        label: { az: 'Kanyon', tr: 'Kanyon', ru: 'Каньон', en: 'Canyon' }
      },
      {
        id: 'opt-volcano',
        emoji: '🌋',
        label: { az: 'Vulkan', tr: 'Yanardağ', ru: 'Вулкан', en: 'Volcano' }
      },
      {
        id: 'opt-island',
        emoji: '🏝️',
        label: { az: 'Ada', tr: 'Ada', ru: 'Остров', en: 'Island' }
      }
    ],
    correctOptionId: 'opt-volcano',
    explanation: {
      az: 'Vulkanlar yer qabığının pəncərəsidir. Lava soyuduqda yeni torpaqlar və adalar əmələ gətirir!',
      tr: 'Yanardağlar Dünya kabuğunun pencereleridir. Lavlar soğuduğunda yeni adalar ve bereketli topraklar oluşturur!',
      ru: 'Вулканы выбрасывают магму, которая на воздухе называется лавой и со временем застывает в камень.',
      en: 'Volcanoes erupt molten rock called magma. When it cools on Earth’s surface, it creates new land and islands!'
    },
    hint: {
      az: 'Zirvəsindən tüstü çıxır və odlu alov fışqırır!',
      tr: 'Tepesinde bir krater bulunur ve bazen dumanlar tüter!',
      ru: 'На вершине этой горы находится кратер с кипящей огненной лавой!',
      en: 'It has a crater at the top where smoke and fire erupt!'
    }
  },
  {
    id: 'nat-3',
    category: 'nature',
    emoji: '🌌',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80',
    question: {
      az: 'Şimal qütbünün gecə səmasında yaşıl və bənövşəyi rənglərlə rəqs edən möcüzəli işıqlar necə adlanır?',
      tr: 'Kutup gecelerinde gökyüzünde yeşil ve mor renklerle dans eden büyüleyici ışıklara ne ad verilir?',
      ru: 'Как называется сказочное разноцветное свечение в небе полярных регионов Земли?',
      en: 'What are the magical dancing green and violet night lights in the polar skies called?'
    },
    options: [
      {
        id: 'opt-aurora',
        emoji: '✨',
        label: { az: 'Qütb Parıltısı (Avrora)', tr: 'Kuzey Işıkları (Aurora)', ru: 'Полярное сияние (Аврора)', en: 'Northern Lights (Aurora)' }
      },
      {
        id: 'opt-eclipse',
        emoji: '🌑',
        label: { az: 'Günəş Tutulması', tr: 'Güneş Tutulması', ru: 'Солнечное затмение', en: 'Solar Eclipse' }
      },
      {
        id: 'opt-meteor',
        emoji: '☄️',
        label: { az: 'Meteor Yağışı', tr: 'Meteor Yağmuru', ru: 'Звездопад (Метеоры)', en: 'Meteor Shower' }
      },
      {
        id: 'opt-sunset',
        emoji: '🌅',
        label: { az: 'Qürub Çağı', tr: 'Gün Batımı', ru: 'Закат солнца', en: 'Sunset' }
      }
    ],
    correctOptionId: 'opt-aurora',
    explanation: {
      az: 'Günəşdən gələn hissəciklər Yerin maqnit sahəsi ilə toqquşanda səma sehrli zümrüd kimi işıldayır!',
      tr: 'Güneş rüzgarları Dünya manyetik kalkanına çarptığında gökyüzünde büyüleyici bir ışık dansı başlar!',
      ru: 'Солнечный ветер сталкивается с атмосферой Земли, заставляя воздух светиться изумрудными волнами!',
      en: 'Solar particles collide with Earth’s magnetic shield, creating a breathtaking cosmic light dance!'
    },
    hint: {
      az: 'Soyuq şimal ölkələrində (Norveç, İslandiya) qış gecələri müşahidə olunur.',
      tr: 'Kuzey ülkelerinde (Norveç, İzlanda) kış gecelerinde yeşil perdeler gibi dalgalanır.',
      ru: 'Его можно увидеть зимней ночью на севере Норвегии, Исландии или в Мурманске.',
      en: 'You can watch it like glowing green curtains waving in cold Nordic skies!'
    }
  },

  // ==========================================
  // SECTION 3: UNIVERSE & SPACE
  // ==========================================
  {
    id: 'univ-1',
    category: 'universe',
    emoji: '☀️',
    image: '/images/real_sun.jpg',
    question: {
      az: 'Günəş Sistemimizin mərkəzində dayanan və planetimizə işıq və istilik verən nəhəng ulduz hansıdır?',
      tr: 'Güneş Sistemimizin tam merkezinde bulunan ve dünyamızı ısıtan dev yıldız hangisidir?',
      ru: 'Какая гигантская звезда находится в самом центре нашей планетной системы и дарит нам тепло?',
      en: 'What giant glowing star is at the very center of our Solar System, giving Earth light and life?'
    },
    options: [
      {
        id: 'opt-moon',
        emoji: '🌕',
        label: { az: 'Ay', tr: 'Ay', ru: 'Луна', en: 'The Moon' }
      },
      {
        id: 'opt-polaris',
        emoji: '⭐',
        label: { az: 'Qütb Ulduzu', tr: 'Kutup Yıldızı', ru: 'Полярная звезда', en: 'North Star' }
      },
      {
        id: 'opt-sirius',
        emoji: '🌟',
        label: { az: 'Sirius', tr: 'Sirius', ru: 'Сириус', en: 'Sirius' }
      },
      {
        id: 'opt-sun',
        emoji: '☀️',
        label: { az: 'Günəş', tr: 'Güneş', ru: 'Солнце', en: 'The Sun' }
      }
    ],
    correctOptionId: 'opt-sun',
    explanation: {
      az: 'Günəş o qədər böyükdür ki, onun içinə 1.3 milyon ədəd Yer kürəsi yerləşə bilər!',
      tr: 'Güneş o kadar büyüktür ki, içerisine 1.3 milyon adet Dünya sığabilir!',
      ru: 'Солнце настолько огромное, что внутри него поместилось бы 1 миллион 300 тысяч таких планет, как Земля!',
      en: 'The Sun is so massive that more than 1.3 million Earths could fit inside it!'
    },
    hint: {
      az: 'Gündüz vaxtı səmanı parlaq sarı işıqla doldurur!',
      tr: 'Gündüzleri gökyüzünde parıldayan sıcacık sarı ışık kaynağımızdır!',
      ru: 'Днём оно ярко сияет на небе и согревает всё живое!',
      en: 'It shines brightly during the day and warms our entire planet!'
    }
  },
  {
    id: 'univ-2',
    category: 'universe',
    emoji: '🪐',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=800&q=80',
    question: {
      az: 'Gözəl buz və qaya halqaları ilə məşhur olan nəhəng qaz planeti hansıdır?',
      tr: 'Buz ve kaya parçalarından oluşan muhteşem halkalarıyla ünlü gezegen hangisidir?',
      ru: 'Какая планета-гигант знаменита своими широкими и красивыми кольцами из льда и камней?',
      en: 'Which giant planet is famous for its stunning, wide rings made of ice, dust, and rock?'
    },
    options: [
      {
        id: 'opt-mars',
        emoji: '🔴',
        label: { az: 'Mars', tr: 'Mars', ru: 'Марс', en: 'Mars' }
      },
      {
        id: 'opt-saturn',
        emoji: '🪐',
        label: { az: 'Saturn', tr: 'Satürn', ru: 'Сатурн', en: 'Saturn' }
      },
      {
        id: 'opt-venus',
        emoji: '🟡',
        label: { az: 'Venera', tr: 'Venüs', ru: 'Венера', en: 'Venus' }
      },
      {
        id: 'opt-mercury',
        emoji: '⚪',
        label: { az: 'Merkuri', tr: 'Merkür', ru: 'Меркурий', en: 'Mercury' }
      }
    ],
    correctOptionId: 'opt-saturn',
    explanation: {
      az: 'Saturnun halqaları əsasən parıldayan su buzundan təşkil olunub və kosmosda parlaq parıldayır!',
      tr: 'Satürn’ün göz alıcı halkaları çoğunlukla saf su buzu parçacıklarından oluşur!',
      ru: 'Кольца Сатурна состоят из миллиардов сверкающих ледяных осколков от пылинок до размеров айсберга!',
      en: 'Saturn’s rings are made of billions of sparkling water ice pieces and cosmic rocks!'
    },
    hint: {
      az: 'Teleskopla baxanda ətrafında dönən parlaq bir çənbər görərsiniz.',
      tr: 'Teleskopla bakıldığında çevresindeki büyüleyici çember hemen fark edilir.',
      ru: 'Вокруг этой планеты словно надет сверкающий обруч!',
      en: 'Through a telescope, it looks like a golden sphere wearing an icy hula-hoop!'
    }
  },
  {
    id: 'univ-3',
    category: 'universe',
    emoji: '🔴',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80',
    question: {
      az: 'Səthindəki qırmızı dəmir pası tozu səbəbindən "Qırmızı Planet" adlanan qonşumuz kimdir?',
      tr: 'Yüzeyindeki paslı kırmızı toz yüzünden "Kızıl Gezegen" olarak adlandırılan komşumuz kimdir?',
      ru: 'Какую планету называют «Красной планетой» из-за обилия ржавчины и оксида железа в почве?',
      en: 'Which neighbor planet is nicknamed the "Red Planet" due to rusty iron oxide dust on its surface?'
    },
    options: [
      {
        id: 'opt-jupiter',
        emoji: '🟠',
        label: { az: 'Yupiter', tr: 'Jüpiter', ru: 'Юпитер', en: 'Jupiter' }
      },
      {
        id: 'opt-neptune',
        emoji: '🔵',
        label: { az: 'Neptun', tr: 'Neptün', ru: 'Нептун', en: 'Neptune' }
      },
      {
        id: 'opt-mars-q',
        emoji: '🔴',
        label: { az: 'Mars', tr: 'Mars', ru: 'Марс', en: 'Mars' }
      },
      {
        id: 'opt-pluto',
        emoji: '🟣',
        label: { az: 'Pluton', tr: 'Plüton', ru: 'Плутон', en: 'Pluto' }
      }
    ],
    correctOptionId: 'opt-mars-q',
    explanation: {
      az: 'Marsda Günəş sisteminin ən hündür vulkanı olan "Olimp Dağı" yerləşir (hündürlüyü 22 km)!',
      tr: 'Mars üzerinde Güneş sisteminin en yüksek yanardağı olan 22 km yüksekliğindeki Olimpos Dağı bulunur!',
      ru: 'На Марсе находится высочайший вулкан Солнечной системы — гора Олимп высотой 22 километра!',
      en: 'Mars is home to Olympus Mons, the tallest volcano in the entire solar system (22 km high)!'
    },
    hint: {
      az: 'Robotsayağı marsoxodlar (Curiosity, Perseverance) bu planetdə kəşfiyyat aparır.',
      tr: 'Tekerlekli uzay robotları bu kızıl topraklar üzerinde gezinerek taş örnekleri toplar.',
      ru: 'По её поверхности сейчас путешествуют исследовательские марсоходы!',
      en: 'Robot rovers with cameras and wheels are currently rolling across its red dust!'
    }
  },

  // ==========================================
  // SECTION 4: SHAPES & GEOMETRY
  // ==========================================
  {
    id: 'shape-1',
    category: 'shapes',
    emoji: '🔺',
    question: {
      az: 'Üçbucağın neçə tərəfi və neçə küncü (təpəsi) var?',
      tr: 'Bir üçgenin kaç kenarı ve kaç köşesi vardır?',
      ru: 'Сколько сторон и сколько углов (вершин) у треугольника?',
      en: 'How many sides and how many corners (vertices) does a triangle have?'
    },
    options: [
      {
        id: 'opt-4',
        emoji: '4️⃣',
        label: { az: '4 tərəfi və 4 küncü', tr: '4 kenar ve 4 köşe', ru: '4 стороны и 4 угла', en: '4 sides and 4 corners' }
      },
      {
        id: 'opt-5',
        emoji: '5️⃣',
        label: { az: '5 tərəfi və 5 küncü', tr: '5 kenar ve 5 köşe', ru: '5 сторон и 5 углов', en: '5 sides and 5 corners' }
      },
      {
        id: 'opt-0',
        emoji: '0️⃣',
        label: { az: '0 tərəfi (yumrudur)', tr: '0 kenar (yuvarlaktır)', ru: '0 сторон (он круглый)', en: '0 sides (it is round)' }
      },
      {
        id: 'opt-3',
        emoji: '3️⃣',
        label: { az: '3 tərəfi və 3 küncü', tr: '3 kenar ve 3 köşe', ru: '3 стороны и 3 угла', en: '3 sides and 3 corners' }
      }
    ],
    correctOptionId: 'opt-3',
    explanation: {
      az: '"Üçbucaq" sözü elə 3 bucaq deməkdir! Pizza dilimi və evlərin damı çox vaxt üçbucaq şəklindədir.',
      tr: '"Üçgen" adı zaten 3 köşe demektir! Pizza dilimleri ve çatı katları üçgen şeklindedir.',
      ru: 'Слово «треугольник» само подсказывает ответ — у него ровно 3 угла и 3 прямые стороны!',
      en: 'The name "triangle" means three angles! A yummy slice of pizza or house roof is a triangle.'
    },
    hint: {
      az: 'Adına diqqət yetir: "Üç" sözü ilə başlayır!',
      tr: 'İsmine dikkat et: "Üç" ile başlıyor!',
      ru: 'Подсказка скрыта в самом названии: «Три»!',
      en: 'Look at the prefix: "Tri" means three!'
    }
  },
  {
    id: 'shape-2',
    category: 'shapes',
    emoji: '🎲',
    question: {
      az: 'Bütün 6 üzü eyni kvadrat olan 3D fəza fiquru necə adlanır?',
      tr: 'Tüm 6 yüzeyi birbirine eşit karelerden oluşan 3 boyutlu şekil nedir?',
      ru: 'Как называется объёмная фигура, у которой все 6 граней — одинаковые квадраты?',
      en: 'What 3D solid shape has 6 identical square faces, like a playing die or a gift box?'
    },
    options: [
      {
        id: 'opt-sphere',
        emoji: '⚽',
        label: { az: 'Kürə', tr: 'Küre', ru: 'Сфера (Шар)', en: 'Sphere' }
      },
      {
        id: 'opt-cube',
        emoji: '🧊',
        label: { az: 'Kub', tr: 'Küp', ru: 'Куб', en: 'Cube' }
      },
      {
        id: 'opt-cylinder',
        emoji: '🥫',
        label: { az: 'Silindr', tr: 'Silindir', ru: 'Цилиндр', en: 'Cylinder' }
      },
      {
        id: 'opt-cone',
        emoji: '🍦',
        label: { az: 'Konus', tr: 'Koni', ru: 'Конус', en: 'Cone' }
      }
    ],
    correctOptionId: 'opt-cube',
    explanation: {
      az: 'Kubun 6 kvadrat üzü, 8 küncü və 12 tili var! Oyun zəri və Rubik kubu ən yaxşı nümunələrdir.',
      tr: 'Küpün 6 kare yüzü, 8 köşesi ve 12 kenarı vardır! Oyun zarı ve Rubik küpü harika örneklerdir.',
      ru: 'У куба 6 квадратных граней, 8 вершин и 12 ребер! Как кубик Рубика или игральная кость.',
      en: 'A cube has 6 square faces, 8 corners, and 12 edges! A toy dice and Rubik’s cube are perfect examples.'
    },
    hint: {
      az: 'Buz parçası və ya oyun zəri şəklindədir.',
      tr: 'Buz kalıbı veya oyun zarları bu şekildedir.',
      ru: 'Кубик Рубика или кубик льда в стакане сока!',
      en: 'Think of an ice cube or a game dice!'
    }
  },
  {
    id: 'shape-3',
    category: 'shapes',
    emoji: '⭕',
    question: {
      az: 'Dairə və çevrənin neçə düz tərəfi və neçə iti küncü var?',
      tr: 'Daire ve çemberin kaç tane düz kenarı ve sivri köşesi vardır?',
      ru: 'Сколько прямых сторон и острых углов у круга?',
      en: 'How many straight edges and sharp corners does a circle have?'
    },
    options: [
      {
        id: 'opt-one',
        emoji: '1️⃣',
        label: { az: '1 tərəfi və 1 küncü var', tr: '1 kenarı ve 1 köşesi var', ru: '1 сторона и 1 угол', en: '1 side and 1 corner' }
      },
      {
        id: 'opt-zero',
        emoji: '0️⃣',
        label: { az: '0 (Sıfır — tərəfi və küncü yoxdur)', tr: '0 (Sıfır — kenar ve köşesi yoktur)', ru: '0 (Ноль — нет ни сторон, ни углов)', en: '0 (Zero — completely smooth & round)' }
      },
      {
        id: 'opt-two',
        emoji: '2️⃣',
        label: { az: '2 tərəfi var', tr: '2 kenarı var', ru: '2 стороны', en: '2 sides' }
      },
      {
        id: 'opt-four',
        emoji: '4️⃣',
        label: { az: '4 tərəfi var', tr: '4 kenarı var', ru: '4 стороны', en: '4 sides' }
      }
    ],
    correctOptionId: 'opt-zero',
    explanation: {
      az: 'Dairə tamamilə hamar və yumrudur, onun heç bir küncü və düz tərəfi yoxdur!',
      tr: 'Daire pürüzsüz ve yuvarlaktır, hiçbir sivri köşesi ve düz çizgisi yoktur!',
      ru: 'Круг абсолютно гладкий и круглый — у него ноль углов и ноль прямых ребер!',
      en: 'A circle is completely smooth and continuous — it has 0 straight sides and 0 sharp corners!'
    },
    hint: {
      az: 'Avtomobil təkəri və ya qızılı qəpik kimi sərbəst yuvarlana bilir.',
      tr: 'Tekerlek veya madeni para gibi hiçbir engele takılmadan yuvarlanır.',
      ru: 'Как колесо или монетка — оно гладко катится по полу.',
      en: 'Like a car tire or a coin, it rolls smoothly without bumping on corners!'
    }
  },

  // ==========================================
  // SECTION 5: FOODS & SENSATIONS
  // ==========================================
  {
    id: 'sens-1',
    category: 'sensations',
    emoji: '🍋',
    image: '/images/yellow_lemon.jpg',
    question: {
      az: 'Təzə kəsilmiş sarı limonun və ya yaşıl almanın dadı necədir?',
      tr: 'Taze kesilmiş sarı bir limonun veya yeşil ekşi elmanın tadı nasıldır?',
      ru: 'Какой вкус у свежего сочного лимона или кислого зелёного яблока?',
      en: 'What taste sensation do you experience when biting into a fresh yellow lemon?'
    },
    options: [
      {
        id: 'opt-sweet',
        emoji: '🍯',
        label: { az: 'Şirin', tr: 'Tatlı', ru: 'Сладкий', en: 'Sweet' }
      },
      {
        id: 'opt-salty',
        emoji: '🧂',
        label: { az: 'Şor (Duzlu)', tr: 'Tuzlu', ru: 'Солёный', en: 'Salty' }
      },
      {
        id: 'opt-sour',
        emoji: '🍋',
        label: { az: 'Turş', tr: 'Ekşi', ru: 'Кислый', en: 'Sour' }
      },
      {
        id: 'opt-bitter',
        emoji: '☕',
        label: { az: 'Acı', tr: 'Acı (Bitter)', ru: 'Горький', en: 'Bitter' }
      }
    ],
    correctOptionId: 'opt-sour',
    explanation: {
      az: 'Limonun tərkibindəki sitrus turşusu dilimizdəki reseptorları oyadaraq yanaqlarımızı büzüşdürür!',
      tr: 'Limonun içindeki sitrik asit dilimizdeki tat tomurcuklarını uyararak yanaklarımızı büzüştürür!',
      ru: 'Лимонная кислота заставляет наши щёчки забавно морщиться от яркого кислого вкуса!',
      en: 'Citric acid in lemons stimulates taste buds on the sides of our tongue, making us make funny pucker faces!'
    },
    hint: {
      az: 'Yeyəndə gözlərimizi qırpırıq və ağzımız büzüşür!',
      tr: 'Tattığımızda gözlerimizi kırpıştırır, yüzümüzü komikçe buruştururuz!',
      ru: 'Когда пробуешь, невольно зажмуриваешься и улыбаешься!',
      en: 'It makes your lips pucker and your eyes squint!'
    }
  },
  {
    id: 'sens-2',
    category: 'sensations',
    emoji: '🍦',
    image: '/images/clear_ice_cube.jpg',
    question: {
      az: 'Dondurma və buz kubları dilimizə toxunanda hansı hissi yaradır?',
      tr: 'Dondurma ve buz küpleri dilimize dokunduğunda hangi sıcaklık hissini verir?',
      ru: 'Какое температурное ощущение дарит нашему языку эскимо или кубик льда?',
      en: 'What temperature sensation does ice cream or an ice cube give your tongue?'
    },
    options: [
      {
        id: 'opt-cold',
        emoji: '❄️',
        label: { az: 'Soyuq və Sərin', tr: 'Soğuk ve Ferah', ru: 'Холодное и освежающее', en: 'Cold & Chilly' }
      },
      {
        id: 'opt-hot',
        emoji: '🔥',
        label: { az: 'İsti və Qaynar', tr: 'Sıcak ve Kaynar', ru: 'Горячее и обжигающее', en: 'Hot & Steaming' }
      },
      {
        id: 'opt-spicy',
        emoji: '🌶️',
        label: { az: 'Acı bibərli', tr: 'Baharatlı Acı', ru: 'Острое (как перец)', en: 'Spicy / Peppery' }
      },
      {
        id: 'opt-warm',
        emoji: '☕',
        label: { az: 'İlıq', tr: 'Ilık', ru: 'Тепловатое', en: 'Lukewarm' }
      }
    ],
    correctOptionId: 'opt-cold',
    explanation: {
      az: 'Buz və dondurma dondurucu temperaturda olur və isti yay günündə bədənimizi sərinlədir!',
      tr: 'Dondurma sıfırın altındaki derecelerde donar ve sıcak yaz günlerinde harika bir serinlik verir!',
      ru: 'Лёд и мороженое имеют минусовую температуру и приятно освежают в жаркий летний день!',
      en: 'Ice cream is frozen below freezing point, giving a refreshing chill on a sunny day!'
    },
    hint: {
      az: 'Qışda yağan qar dənəcikləri kimidir.',
      tr: 'Kışın yağan kar taneleri ve buz sarkıtları gibidir.',
      ru: 'Такое же ощущение, как от снежка в руках зимой!',
      en: 'Just like catching snowflakes on your tongue in winter!'
    }
  },
  {
    id: 'sens-3',
    category: 'sensations',
    emoji: '🥕',
    question: {
      az: 'Təzə yerkökü və ya xırtıldayan alma dişləyəndə hansı səs və hiss yaranır?',
      tr: 'Taze bir havuç veya çıtır yeşil bir elma ısırdığımızda hangi ses ve his oluşur?',
      ru: 'Какой звук и ощущение возникают, когда вы откусываете сочную свежую морковку?',
      en: 'What fun texture and sound do you experience when biting into a crisp carrot or celery stick?'
    },
    options: [
      {
        id: 'opt-sticky',
        emoji: '🍯',
        label: { az: 'Yapışqan', tr: 'Yapış yapış', ru: 'Липкий и тягучий', en: 'Sticky & Gooey' }
      },
      {
        id: 'opt-soft',
        emoji: '🥞',
        label: { az: 'Yumşaq pambıq kimi', tr: 'Yumuşacık pamuk gibi', ru: 'Мягкий как подушка', en: 'Pillow-soft' }
      },
      {
        id: 'opt-liquid',
        emoji: '💧',
        label: { az: 'Maye su kimi', tr: 'Sıvı su gibi', ru: 'Жидкий как вода', en: 'Liquid drink' }
      },
      {
        id: 'opt-crunchy',
        emoji: '🥕',
        label: { az: 'Xırt-xırt (Xırtıldayan)', tr: 'Kıtır kıtır (Çıtır)', ru: 'Хрустящий (Хруст)', en: 'Crunchy & Crispy' }
      }
    ],
    correctOptionId: 'opt-crunchy',
    explanation: {
      az: 'Tərəvəz hüceyrələrindəki təbii su və möhkəm divarlar dişlənəndə xoş "xırt-xırt" səsi çıxarır!',
      tr: 'Havuç ve elmanın gevrek hücre yapısı kırılırken ağzımızda neşeli bir çıtırtı sesi çıkarır!',
      ru: 'Крепкие растительные клетки лопаются при укусе, издавая весёлый звонкий хруст!',
      en: 'Biting through rigid cell walls filled with fresh plant juice creates that satisfying crunch!'
    },
    hint: {
      az: 'Dovşanların yerkökü yeyərkən çıxardığı sevimli səs!',
      tr: 'Tavşanların havuç kemirirken çıkardığı neşeli ses!',
      ru: 'Звук, с которым зайчик грызёт морковку на полянке!',
      en: 'The happy sound a bunny makes while nibbling garden vegetables!'
    }
  },

  // ==========================================
  // SECTION 6: NUMBERS & ALPHABET
  // ==========================================
  {
    id: 'num-1',
    category: 'numbers-alphabet',
    emoji: '🕷️',
    question: {
      az: 'Hörümçəyin neçə ayağı var?',
      tr: 'Bir örümceğin toplam kaç tane bacağı vardır?',
      ru: 'Сколько ножек у паука?',
      en: 'How many legs does a spider have?'
    },
    options: [
      {
        id: 'opt-6',
        emoji: '6️⃣',
        label: { az: '6 ayağı', tr: '6 bacak', ru: '6 ножек', en: '6 legs' }
      },
      {
        id: 'opt-8',
        emoji: '8️⃣',
        label: { az: '8 ayağı', tr: '8 bacak', ru: '8 ножек', en: '8 legs' }
      },
      {
        id: 'opt-4',
        emoji: '4️⃣',
        label: { az: '4 ayağı', tr: '4 bacak', ru: '4 ножки', en: '4 legs' }
      },
      {
        id: 'opt-10',
        emoji: '🔟',
        label: { az: '10 ayağı', tr: '10 bacak', ru: '10 ножек', en: '10 legs' }
      }
    ],
    correctOptionId: 'opt-8',
    explanation: {
      az: 'Bütün hörümçəkkimilərin 8 ayağı olur (həşəratların isə 6 ayağı var)!',
      tr: 'Örümceğimsilerin 8 bacağı vardır (oysa böceklerin 6 bacağı bulunur)!',
      ru: 'У всех пауков ровно 8 ходильных ног (в отличие от насекомых, у которых 6 ног)!',
      en: 'All arachnids (spiders) have 8 walking legs, while true insects have 6 legs!'
    },
    hint: {
      az: 'Hər tərəfində 4 ayaq var: 4 + 4 = ?',
      tr: 'Her iki yanında dörder bacak vardır: 4 + 4 = ?',
      ru: 'По четыре ножки с каждой стороны тела: 4 + 4 = ?',
      en: '4 legs on the left side and 4 on the right: 4 + 4 = ?'
    }
  },
  {
    id: 'num-2',
    category: 'numbers-alphabet',
    emoji: '🅰️',
    question: {
      az: 'Əlifbanın ən birinci hərfi hansıdır?',
      tr: 'Alfabenin en birinci harfi hangisidir?',
      ru: 'Какая самая первая буква в алфавите?',
      en: 'What is the very first letter of the alphabet?'
    },
    options: [
      {
        id: 'opt-letter-b',
        emoji: '🍌',
        label: { az: 'B (Balıq)', tr: 'B (Balık)', ru: 'Б (Бабочка)', en: 'B (Butterfly)' }
      },
      {
        id: 'opt-letter-c',
        emoji: '🐱',
        label: { az: 'C (Ceyran)', tr: 'C (Civciv)', ru: 'В (Воробей)', en: 'C (Cat)' }
      },
      {
        id: 'opt-letter-a',
        emoji: '🍎',
        label: { az: 'A (Alma, Ayı)', tr: 'A (Arı, Aslan)', ru: 'А (Аист, Арбуз)', en: 'A (Apple, Astronaut)' }
      },
      {
        id: 'opt-letter-z',
        emoji: '🦓',
        label: { az: 'Z (Zebra)', tr: 'Z (Zürafa)', ru: 'Я (Яблоко)', en: 'Z (Zebra)' }
      }
    ],
    correctOptionId: 'opt-letter-a',
    explanation: {
      az: '"A" hərfi əlifbanın qapısını açır və çox mühüm səsli hərfdir!',
      tr: '"A" harfi alfabenin lideridir ve en çok kullanılan sesli harflerdendir!',
      ru: 'Буква «А» открывает алфавит и звучит радостно и звонко!',
      en: 'Letter "A" leads the alphabet parade and is the first vowel we learn!'
    },
    hint: {
      az: 'Alma və Aslan bu hərflə başlayır!',
      tr: 'Arı ve Ayı bu harfle başlar!',
      ru: 'С неё начинаются слова Апельсин, Арбуз и Акула!',
      en: 'It starts words like Apple, Ant, and Astronaut!'
    }
  },
  {
    id: 'num-3',
    category: 'numbers-alphabet',
    emoji: '🦋',
    question: {
      az: 'Çiçəyin üstündə 4 kəpənək var idi. Daha 3 kəpənək uçub gəldi. İndi cəmi neçə kəpənək oldu?',
      tr: 'Çiçeğin üzerinde 4 kelebek vardı. 3 kelebek daha neşeyle uçup geldi. Şimdi toplam kaç kelebek oldu?',
      ru: 'На полянке танцевали 4 бабочки. К ним прилетели ещё 3 подружки. Сколько всего бабочек стало?',
      en: 'There were 4 butterflies on a flower. 3 more fluttered over to join them. How many butterflies are there in total?'
    },
    options: [
      {
        id: 'opt-6-calc',
        emoji: '6️⃣',
        label: { az: '6 kəpənək', tr: '6 kelebek', ru: '6 бабочек', en: '6 butterflies' }
      },
      {
        id: 'opt-8-calc',
        emoji: '8️⃣',
        label: { az: '8 kəpənək', tr: '8 kelebek', ru: '8 бабочек', en: '8 butterflies' }
      },
      {
        id: 'opt-5-calc',
        emoji: '5️⃣',
        label: { az: '5 kəpənək', tr: '5 kelebek', ru: '5 бабочек', en: '5 butterflies' }
      },
      {
        id: 'opt-7',
        emoji: '7️⃣',
        label: { az: '7 kəpənək (4 + 3 = 7)', tr: '7 kelebek (4 + 3 = 7)', ru: '7 бабочек (4 + 3 = 7)', en: '7 butterflies (4 + 3 = 7)' }
      }
    ],
    correctOptionId: 'opt-7',
    explanation: {
      az: '4 üstəgəl 3 bərabərdir 7! Saymağı öyrənmək çox əyləncəlidir.',
      tr: '4 artı 3 eşittir 7! Doğada sayıları saymak çok keyiflidir.',
      ru: '4 плюс 3 равно 7! Отличный счёт, юный математик!',
      en: '4 plus 3 equals 7! Counting nature wonders is super fun.'
    },
    hint: {
      az: 'Barmaqlarınla say: 4 barmaq aç, sonra 3 dənə də əlavə et!',
      tr: 'Parmaklarınla say: Önce 4 parmak göster, sonra 3 parmak daha aç!',
      ru: 'Посчитай на пальчиках: 4 пальчика плюс ещё 3 пальчика!',
      en: 'Count on your fingers: start with 4, then count up 3 more (5, 6, 7)!'
    }
  }
];

export const QUIZ_CATEGORIES = [
  { id: 'all', emoji: '🌟', label: { az: 'Bütün Bölmələr (Miks)', tr: 'Tüm Bölümler (Karışık)', ru: 'Все разделы (Микс)', en: 'All Sections (Mega Mix)' } },
  { id: 'animals', emoji: '🦁', label: { az: 'Heyvanlar', tr: 'Hayvanlar', ru: 'Животные', en: 'Animals' } },
  { id: 'nature', emoji: '🌲', label: { az: 'Təbiət Möcüzələri', tr: 'Doğa Harikaları', ru: 'Силы природы', en: 'Nature Wonders' } },
  { id: 'universe', emoji: '✨', label: { az: 'Kainat və Kosmos', tr: 'Evren ve Uzay', ru: 'Космос и Вселенная', en: 'Universe & Space' } },
  { id: 'shapes', emoji: '📐', label: { az: 'Həndəsi Fiqurlar', tr: 'Geometrik Şekiller', ru: 'Фигуры', en: 'Shapes' } },
  { id: 'sensations', emoji: '👅', label: { az: 'Qidalar və Hisslər', tr: 'Yiyecekler ve Duyular', ru: 'Еда и Ощущения', en: 'Foods & Sensations' } },
  { id: 'numbers-alphabet', emoji: '🔢', label: { az: 'Rəqəmlər və Əlifba', tr: 'Sayılar ve Alfabe', ru: 'Числа и Буквы', en: 'Numbers & Alphabet' } }
] as const;
