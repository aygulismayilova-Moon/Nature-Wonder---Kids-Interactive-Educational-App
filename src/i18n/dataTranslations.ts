import { Language } from '../types';

export interface LocalizedAnimal {
  name: string;
  childDescription: string;
  funFact: string;
  soundLabel: string;
  diet: string;
  habitat: string;
  group: string;
}

export interface LocalizedNatureElement {
  name: string;
  category: string;
  soundLabel: string;
  description: string;
  funFacts: string[];
  kidActivity: string;
  whyItMatters: string;
}

export interface LocalizedUniverseElement {
  name: string;
  category: string;
  soundLabel: string;
  description: string;
  kidWonder: string;
  funFacts: string[];
}

export interface LocalizedShape {
  name: string;
  description: string;
  funFact: string;
  realWorldExamples: Array<{ label: string; hint: string; emoji?: string }>;
}

export interface LocalizedQuizQuestion {
  question: string;
  clues: string[];
  explanation: string;
  hint: string;
}

export interface LocalizedFood {
  name: string;
  tasteCategory: string;
  description: string;
  funTip: string;
  spokenQuote: string;
}

// -------------------------------------------------------------
// ANIMAL TRANSLATIONS (Keyed by Animal ID)
// -------------------------------------------------------------
export const ANIMAL_DATA_TRANSLATIONS: Record<string, Record<Language, Partial<LocalizedAnimal>>> = {
  lion: {
    az: {
      name: 'Aslan',
      childDescription: 'Aslanlar savannanın kralı kimi tanınır! Onlar "prayd" adlanan isti ailə dəstələrində birlikdə yaşayırlar.',
      funFact: 'Aslanın nərəsi o qədər güclüdür ki, düzənlik boyunca 8 kilometr uzaqdan eşidilə bilər!',
      soundLabel: 'Qüdrətli Aslan Nərəsi',
      diet: 'Yırtıcı (Ətyeyən)',
      habitat: 'Savanna və Çöllük',
      group: 'Məməli'
    },
    tr: {
      name: 'Aslan',
      childDescription: 'Aslanlar savananın kralları olarak bilinir! Sürü halinde sıcak aile gruplarında yaşarlar.',
      funFact: 'Bir aslanın kükremesi o kadar güçlüdür ki, 8 kilometre uzaktan bile duyulabilir!',
      soundLabel: 'Görkemli Aslan Kükremesi',
      diet: 'Etobur (Et yiyen)',
      habitat: 'Savana ve Çayırlık',
      group: 'Memeli'
    },
    ru: {
      name: 'Лев',
      childDescription: 'Львы известны как цари саванны! Они живут дружными семейными группами — прайдами.',
      funFact: 'Грозный рык льва настолько могучий, что разносится по саванне на целых 8 километров!',
      soundLabel: 'Могучий рык льва',
      diet: 'Хищник (Мясоед)',
      habitat: 'Саванна и луга',
      group: 'Млекопитающее'
    },
    en: {
      name: 'Lion',
      childDescription: 'Lions are known as the kings of the savannah! They live together in warm family groups called prides.',
      funFact: 'A lion’s roar is so powerful it can be heard from 5 miles (8 km) away across the plains!',
      soundLabel: 'Mighty Lion Roar',
      diet: 'Carnivore (Meat)',
      habitat: 'Savannah & Grassland',
      group: 'Mammal'
    }
  },

  elephant: {
    az: {
      name: 'Afrika Fili',
      childDescription: 'Fillər Yer üzündə yaşayan ən böyük quru heyvanlarıdır. Onların uzun xortumları sarılmaq, su içmək və meyvə dərmək üçün möcüzəli bir əl kimidir!',
      funFact: 'Filin xortumunda 40,000-dən çox əzələ var və o, balaca fıstıq dənəsindən tutmuş bütöv ağac budağına qədər hər şeyi qaldıra bilər!',
      soundLabel: 'Fil Şeypur Səsi',
      diet: 'Otyeyən (Bitki ilə qidalanan)',
      habitat: 'Savanna və Çöllük',
      group: 'Məməli'
    },
    tr: {
      name: 'Afrika Fili',
      childDescription: 'Filler karadaki en büyük yürüyen hayvanlardır. Uzun hortumları sarılmak, su içmek ve meyve toplamak için süper bir el gibidir!',
      funFact: 'Filin hortumunda 40.000’den fazla kas vardır; minicik bir fıstığı da kocaman bir ağaç dalını da kaldırabilir!',
      soundLabel: 'Yabani Fil Borusu',
      diet: 'Otobur (Bitki yiyen)',
      habitat: 'Savana ve Çayırlık',
      group: 'Memeli'
    },
    ru: {
      name: 'Африканский слон',
      childDescription: 'Слоны — крупнейшие наземные животные планеты. Их длинный хобот работает как волшебная рука: им можно обниматься, пить и срывать плоды!',
      funFact: 'В хоботе слона более 40 000 мышц: он способен поднять как крошечный арахис, так и целое бревно!',
      soundLabel: 'Трубный голос слона',
      diet: 'Травоядное',
      habitat: 'Саванна и луга',
      group: 'Млекопитающее'
    },
    en: {
      name: 'African Elephant',
      childDescription: 'Elephants are the largest walking animals on Earth. Their long trunks are like super-hands that can hug, drink, and pick fruit!',
      funFact: 'An elephant trunk has over 40,000 muscles and can pick up a single tiny peanut or a whole tree branch!',
      soundLabel: 'Wild Elephant Trumpet',
      diet: 'Herbivore (Plants)',
      habitat: 'Savannah & Grassland',
      group: 'Mammal'
    }
  },

  tiger: {
    az: {
      name: 'Benqal Pələngi',
      childDescription: 'Pələnglər dünyada ən böyük vəhşi pişiklərdir! Onlar əla üzgüçüdürlər və sərin çaylarda çimməyi çox sevirlər.',
      funFact: 'Heç bir iki pələngin zolağı eyni deyil — onların zolaqları insanların barmaq izi kimi təkrarolunmazdır!',
      soundLabel: 'Cəngəllik Pələngi Nərəsi',
      diet: 'Yırtıcı (Ətyeyən)',
      habitat: 'Cəngəllik və Yağış Meşələri',
      group: 'Məməli'
    },
    tr: {
      name: 'Bengal Kaplanı',
      childDescription: 'Kaplanlar dünyadaki en büyük vahşi kedilerdir! Harika yüzücülerdir ve serin ırmaklarda yüzmeye bayılırlar.',
      funFact: 'Hiçbir iki kaplanın çizgileri aynı değildir; insan parmak izi gibi tamamen benzersizdir!',
      soundLabel: 'Orman Kaplanı Kükremesi',
      diet: 'Etobur (Et yiyen)',
      habitat: 'Yağmur Ormanı ve Cengel',
      group: 'Memeli'
    },
    ru: {
      name: 'Бенгальский тигр',
      childDescription: 'Тигры — самые крупные дикие кошки на планете! Они обожают воду и с удовольствием купаются в прохладных реках.',
      funFact: 'Полоски каждого тигра неповторимы, точно так же, как отпечатки пальцев у человека!',
      soundLabel: 'Рычание джунглей',
      diet: 'Хищник (Мясоед)',
      habitat: 'Тропический лес и джунгли',
      group: 'Млекопитающее'
    },
    en: {
      name: 'Bengal Tiger',
      childDescription: 'Tigers are the biggest wild cats in the entire world! They are superb swimmers and love cooling off in rivers.',
      funFact: 'No two tigers have the same stripes — their stripes are as unique as human fingerprints!',
      soundLabel: 'Jungle Tiger Roar',
      diet: 'Carnivore (Meat)',
      habitat: 'Rainforest & Jungle',
      group: 'Mammal'
    }
  },

  panda: {
    az: {
      name: 'Böyük Panda',
      childDescription: 'Pandalar bambuk meşələrində dincələn, qara-ağ tüklü şirin ayı balalarına bənzəyirlər. Onlar günün çox hissəsini ləzzətli bambuk çeynəməklə keçirirlər.',
      funFact: 'Yetkin bir panda hər gün 12-dən 38 kiloqrama qədər təzə bambuk yeyir!',
      soundLabel: 'Panda Cikkiltisi',
      diet: 'Otyeyən (Bambuk həvəskarı)',
      habitat: 'Meşələr və Dağətəyi',
      group: 'Məməli'
    },
    tr: {
      name: 'Dev Panda',
      childDescription: 'Pandalar bambu ormanlarında dinlenen sevimli siyah-beyaz ayılardır. Günün büyük kısmını leziz bambuları çiğneyerek geçirirler.',
      funFact: 'Yetişkin bir panda her gün 12 ila 38 kilogram taze bambu yer!',
      soundLabel: 'Panda Sesi',
      diet: 'Otobur (Bambu sever)',
      habitat: 'Ormanlık Alanlar',
      group: 'Memeli'
    },
    ru: {
      name: 'Большая панда',
      childDescription: 'Панды — очаровательные черно-белые медведи, живущие в горных бамбуковых рощах. Большую часть дня они увлеченно лакомятся бамбуком.',
      funFact: 'Взрослая панда съедает от 12 до 38 килограммов сочного бамбука каждый день!',
      soundLabel: 'Голос панды',
      diet: 'Травоядное (Бамбук)',
      habitat: 'Леса и горы',
      group: 'Млекопитающее'
    },
    en: {
      name: 'Giant Panda',
      childDescription: 'Pandas are gentle black-and-white bears that love bamboo forests. They spend most of their sunny day munching tasty bamboo shoots!',
      funFact: 'A full-grown panda eats between 12 to 38 kilograms of fresh bamboo every single day!',
      soundLabel: 'Gentle Panda Bleat',
      diet: 'Herbivore (Bamboo)',
      habitat: 'Forest & Woodland',
      group: 'Mammal'
    }
  },

  dolphin: {
    az: {
      name: 'Afalina Delfini',
      childDescription: 'Delfinlər okeanın ən şən və ağıllı sakinləridir! Onlar dalğaların üzərində tullanır və bir-birləri ilə fit və çıqqıltılarla danışırlar.',
      funFact: 'Delfinlər yatarkən beyinlərinin yalnız bir yarısı dincəlir, bir gözləri isə açıq qalır!',
      soundLabel: 'Delfin Fiti və Şaqqıltısı',
      diet: 'Yırtıcı (Balıq və kalmar)',
      habitat: 'Okean və Dənizlər',
      group: 'Məməli'
    },
    tr: {
      name: 'Şişeburunlu Yunus',
      childDescription: 'Yunuslar okyanusun en neşeli ve zeki dostlarıdır! Dalgaların üzerinden atlarlar ve ıslıklarla haberleşirler.',
      funFact: 'Yunuslar uyurken beyinlerinin sadece bir yarısı dinlenir, bir gözleri hep açık kalır!',
      soundLabel: 'Yunus Islığı',
      diet: 'Etobur (Balık ve kalamar)',
      habitat: 'Okyanus ve Denizler',
      group: 'Memeli'
    },
    ru: {
      name: 'Дельфин афалина',
      childDescription: 'Дельфины — удивительно умные и дружелюбные морские обитатели! Они взлетают над волнами и переговариваются звонкими свистами.',
      funFact: 'Во время сна у дельфина отдыхает только одно полушарие мозга, а один глаз всегда открыт!',
      soundLabel: 'Свист и щелканье дельфина',
      diet: 'Хищник (Рыба)',
      habitat: 'Океан и морские глубины',
      group: 'Млекопитающее'
    },
    en: {
      name: 'Bottlenose Dolphin',
      childDescription: 'Dolphins are playful and ultra-smart ocean acrobats! They love leaping over cresting waves and chatting using clicks and whistles.',
      funFact: 'Dolphins sleep with only half their brain at a time so they can keep breathing and watching for danger!',
      soundLabel: 'Dolphin Whistle & Churp',
      diet: 'Carnivore (Fish)',
      habitat: 'Ocean & Marine',
      group: 'Mammal'
    }
  },

  'blue-whale': {
    az: {
      name: 'Mavi Balina',
      childDescription: 'Mavi balina Yer üzündə indiyə qədər yaşamış ən nəhəng canlıdır — hətta ən böyük dinozavrlardan da böyükdür!',
      funFact: 'Mavi balinanın yalnız ürəyi kiçik bir avtomobil boydadır!',
      soundLabel: 'Dərin Okean Balina Nəğməsi',
      diet: 'Yırtıcı (Xırda krillər)',
      habitat: 'Okean və Dənizlər',
      group: 'Məməli'
    },
    tr: {
      name: 'Mavi Balina',
      childDescription: 'Mavi balina Dünya tarihinde yaşamış en devasa canlıdır; en büyük dinozorlardan bile daha büyüktür!',
      funFact: 'Bir mavi balinanın sadece kalbi küçük bir araba büyüklüğündedir!',
      soundLabel: 'Derin Okyanus Balina Şarkısı',
      diet: 'Etobur (Minik kriller)',
      habitat: 'Okyanus ve Denizler',
      group: 'Memeli'
    },
    ru: {
      name: 'Синий кит',
      childDescription: 'Синий кит — самое огромное живое существо, когда-либо обитавшее на Земле, больше любого динозавра!',
      funFact: 'Одно лишь сердце синего кита размером с легковой автомобиль!',
      soundLabel: 'Глубокая песнь кита',
      diet: 'Плотоядное (Криль)',
      habitat: 'Океан и морские глубины',
      group: 'Млекопитающее'
    },
    en: {
      name: 'Blue Whale',
      childDescription: 'The blue whale is the largest animal that has ever lived on Earth — bigger than the mightiest dinosaurs!',
      funFact: 'A blue whale’s heart is the size of a small car, and its tongue can weigh as much as an entire elephant!',
      soundLabel: 'Deep Ocean Whale Song',
      diet: 'Carnivore (Tiny krill)',
      habitat: 'Ocean & Marine',
      group: 'Mammal'
    }
  },

  penguin: {
    az: {
      name: 'İmperator Pinqvini',
      childDescription: 'Pinqvinlər smokinq geyinmiş kimi görünən sevimli quşlardır. Onlar uça bilmirlər, lakin buzlu sularda torpeda kimi sürətlə üzürlər!',
      funFact: 'Ata pinqvinlər dondurucu Antarktika şaxtasında yumurtanı iki ay boyunca ayaqlarının üstündə isti saxlayırlar!',
      soundLabel: 'Pinqvin Çağırışı',
      diet: 'Yırtıcı (Balıq və krevetka)',
      habitat: 'Qütb və Arktika',
      group: 'Quş'
    },
    tr: {
      name: 'İmparator Pengueni',
      childDescription: 'Penguenler smokin giymiş gibi görünen sevimli kuşlardır. Uçamazlar ama buz gibi sularda roket gibi yüzerler!',
      funFact: 'Baba penguenler dondurucu kutup soğuğunda yumurtayı ayaklarının üstünde iki ay boyunca sıcacık tutarlar!',
      soundLabel: 'Penguen Çağrısı',
      diet: 'Etobur (Balık ve karides)',
      habitat: 'Kutup ve Arktik',
      group: 'Kuş'
    },
    ru: {
      name: 'Императорский пингвин',
      childDescription: 'Пингвины похожи на птиц в праздничных смокингах. Они не летают в небе, зато грациозно "летают" под ледяной водой!',
      funFact: 'Папа-пингвин держит драгоценное яйцо на лапах под теплой складкой перьев два месяца на морозе -50°C!',
      soundLabel: 'Голос пингвина',
      diet: 'Плотоядное (Рыба)',
      habitat: 'Полярные льды и Арктика',
      group: 'Птица'
    },
    en: {
      name: 'Emperor Penguin',
      childDescription: 'Penguins look like birds wearing fancy tuxedos! They cannot fly in the air, but they "fly" through icy waters with incredible agility.',
      funFact: 'Father penguins balance an egg on their feet in minus 50°C Antarctic blizzards for two whole months without eating!',
      soundLabel: 'Chattering Penguin Chirp',
      diet: 'Carnivore (Fish & squid)',
      habitat: 'Polar & Arctic',
      group: 'Bird'
    }
  },

  'polar-bear': {
    az: {
      name: 'Ağ Ayı',
      childDescription: 'Ağ ayılar Şimal Qütbünün qalın qarları üzərində gəzən nəhəng şimal kəşfiyyatçılarıdır. Onların qalın xəzi ən güclü şaxtadan belə qoruyur.',
      funFact: 'Ağ ayının xəzinin altındakı dərisi əslində qapqaradır — bu, günəş istisini udmağa kömək edir!',
      soundLabel: 'Şimal Ağ Ayı Nərəsi',
      diet: 'Yırtıcı (Ətyeyən)',
      habitat: 'Qütb və Arktika',
      group: 'Məməli'
    },
    tr: {
      name: 'Kutup Ayısı',
      childDescription: 'Kutup ayıları Kuzey Kutbu’nun karlı buzulları üstünde gezen dev kahramanlardır. Kalın kürkleri onları en sert ayazdan korur.',
      funFact: 'Kutup ayısının tüylerinin altındaki derisi aslında simsiyahtır; bu sayede güneş sıcaklığını çeker!',
      soundLabel: 'Kutup Ayısı Homurtusu',
      diet: 'Etobur (Et yiyen)',
      habitat: 'Kutup ve Arktik',
      group: 'Memeli'
    },
    ru: {
      name: 'Белый медведь',
      childDescription: 'Белые медведи — могучие властелины ледяной Арктики. Их густая шуба надежно защищает от самых суровых метелей.',
      funFact: 'Кожа белого медведя под белой шерстью абсолютно черная — так она быстрее впитывает тепло солнца!',
      soundLabel: 'Рычание полярного медведя',
      diet: 'Хищник (Мясоед)',
      habitat: 'Полярные льды и Арктика',
      group: 'Млекопитающее'
    },
    en: {
      name: 'Polar Bear',
      childDescription: 'Polar bears are majestic white giants wandering across sea ice. Their thick fur and blubber keep them toasty warm in subzero snow!',
      funFact: 'Underneath their gleaming white fur, a polar bear’s skin is actually pitch black to absorb warmth from the sun!',
      soundLabel: 'Deep Arctic Bear Growl',
      diet: 'Carnivore (Meat)',
      habitat: 'Polar & Arctic',
      group: 'Mammal'
    }
  },

  wolf: {
    az: {
      name: 'Boz Qurd',
      childDescription: 'Boz qurdlar meşələrdə və dağlarda ailə kimi yaşayan sədaqətli heyvanlardır. Onlar gecələr bir-birlərinə xəbər vermək üçün aya ulayırlar.',
      funFact: 'Qurdlar ulayanda bir-birlərinin səsini 16 kilometr məsafədən eşidə bilirlər!',
      soundLabel: 'Qurd Ulaması',
      diet: 'Yırtıcı (Ətyeyən)',
      habitat: 'Meşələr və Dağətəyi',
      group: 'Məməli'
    },
    tr: {
      name: 'Bozkurt',
      childDescription: 'Kurtlar ormanlarda ve dağlarda sürü halinde yaşayan sadık hayvanlardır. Birbirlerine haber vermek için aya karşı ulurlar.',
      funFact: 'Kurtların uluması rüzgarlı gecelerde 16 kilometre öteden bile duyulabilir!',
      soundLabel: 'Kurt Uluması',
      diet: 'Etobur (Et yiyen)',
      habitat: 'Ormanlık Alanlar',
      group: 'Memeli'
    },
    ru: {
      name: 'Серый волк',
      childDescription: 'Волки — преданные и умные лесные охотники, живущие сплоченными семьями-стаями. По ночам они перекликаются мелодичным воем.',
      funFact: 'Вой волка в тихую ночь разносится по лесам и степям на расстояние до 16 километров!',
      soundLabel: 'Протяжный вой волка',
      diet: 'Хищник (Мясоед)',
      habitat: 'Леса и горы',
      group: 'Млекопитающее'
    },
    en: {
      name: 'Gray Wolf',
      childDescription: 'Wolves are devoted pack animals that live and hunt together like a close-knit family. They communicate across valleys with haunting howls.',
      funFact: 'A wolf pack howl can carry over 10 miles (16 km) through open wilderness on a calm night!',
      soundLabel: 'Wild Wolf Howl',
      diet: 'Carnivore (Meat)',
      habitat: 'Forest & Woodland',
      group: 'Mammal'
    }
  },

  eagle: {
    az: {
      name: 'Ağbaş Qartal',
      childDescription: 'Qartallar göylərin cəsur fatehləridir! Onların iti gözləri göyün ən uca yerindən yerdəki xırda dovşanı belə dərhal görür.',
      funFact: 'Qartalın görmə qabiliyyəti insanınkından 4-8 dəfə daha itidir!',
      soundLabel: 'Qartal Qıyğacı',
      diet: 'Yırtıcı (Balıq və kiçik canlılar)',
      habitat: 'Dağlar və Qayalıqlar',
      group: 'Quş'
    },
    tr: {
      name: 'Kel Kartal',
      childDescription: 'Kartallar göklerin cesur hükümdarlarıdır! Keskin gözleri gökyüzünün en tepesinden yerdeki minik bir tavşanı bile hemen fark eder.',
      funFact: 'Bir kartalın görüş gücü insan gözünden 4 ila 8 kat daha keskindir!',
      soundLabel: 'Kartal Çığlığı',
      diet: 'Etobur (Balık ve küçük hayvanlar)',
      habitat: 'Dağlar ve Kayalıklar',
      group: 'Kuş'
    },
    ru: {
      name: 'Белоголовый орлан',
      childDescription: 'Орланы и орлы — гордые повелители небес! Их зоркие глаза способны с высоты сотен метров разглядеть маленькую рыбку в воде.',
      funFact: 'Зрение орла в 4–8 раз острее человеческого, позволяя видеть добычу на расстоянии километра!',
      soundLabel: 'Звонкий крик орла',
      diet: 'Хищник (Рыба и птицы)',
      habitat: 'Горы и скалы',
      group: 'Птица'
    },
    en: {
      name: 'Bald Eagle',
      childDescription: 'Eagles are fearless kings of the skies with majestic wings and piercing vision that can spot movement from miles up in the air.',
      funFact: 'An eagle has eyesight 4 to 8 times sharper than humans and can spot a rabbit from two miles away!',
      soundLabel: 'Piercing Eagle Screech',
      diet: 'Carnivore (Fish & small animals)',
      habitat: 'Mountains',
      group: 'Bird'
    }
  },

  frog: {
    az: {
      name: 'Yaşıl Qurbağa',
      childDescription: 'Qurbağalar həm suda, həm də quruda yaşayan sevimli tullanğıclardır. Onlar güclü arxa ayaqları ilə uzağa sıçrayır və şirin qurultu çıxarırlar.',
      funFact: 'Qurbağalar suyu ağızları ilə içmirlər — suyu nəmli dəriləri vasitəsilə canlarına çəkirlər!',
      soundLabel: 'Qurbağa Qurultusu',
      diet: 'Həşəratyeyən',
      habitat: 'Şirin Su və Çaylar',
      group: 'Suda-quruda yaşayan'
    },
    tr: {
      name: 'Yeşil Kurbağa',
      childDescription: 'Kurbağalar hem karada hem suda yaşayan sevimli sıçrayıcılardır. Güçlü bacaklarıyla zıplar ve neşeli sesler çıkarırlar.',
      funFact: 'Kurbağalar suyu ağızlarıyla içmez; nemli derileri sayesinde emerler!',
      soundLabel: 'Kurbağa Vıraklaması',
      diet: 'Böcekle beslenen',
      habitat: 'Tatlı Su ve Nehirler',
      group: 'Amfibi'
    },
    ru: {
      name: 'Зеленая лягушка',
      childDescription: 'Лягушки — забавные прыгуны, живущие у прудов и ручьев. Они ловко ловят комаров длинным липким языком и весело квакают.',
      funFact: 'Лягушки не пьют воду ртом — они впитывают влагу прямо через свою гладкую кожу!',
      soundLabel: 'Веселое кваканье',
      diet: 'Насекомоядное',
      habitat: 'Реки и пресные водоемы',
      group: 'Земноводное'
    },
    en: {
      name: 'Green Tree Frog',
      childDescription: 'Frogs are bouncy amphibians that love ponds and lily pads. They use their long sticky tongues to catch pesky flies with lightning speed!',
      funFact: 'Frogs do not drink water with their mouths — they absorb all the water they need straight through their skin!',
      soundLabel: 'Rhythmic Pond Croak',
      diet: 'Insectivore',
      habitat: 'Freshwater & River',
      group: 'Amphibian'
    }
  },

  giraffe: {
    az: {
      name: 'Zürafə',
      childDescription: 'Zürafələr dünyanın ən hündür heyvanlarıdır! Onların uzun boyunları uca akasiya ağaclarının ən şirin təzə yarpaqlarını dərməyə kömək edir.',
      funFact: 'Zürafənin dili 50 santimetr uzunluğunda və tünd bənövşəyi rəngdədir ki, günəş altında yanmasın!',
      soundLabel: 'Zürafə Nəfəsi',
      diet: 'Otyeyən (Yarpaqlar)',
      habitat: 'Savanna və Çöllük',
      group: 'Məməli'
    },
    tr: {
      name: 'Zürafa',
      childDescription: 'Zürafalar dünyanın en uzun boylu hayvanlarıdır! Uzun boyunları sayesinde ağaçların en tepesindeki taze yaprakları rahatça yerler.',
      funFact: 'Bir zürafanın dili 50 santimetre uzunluğundadır ve güneşten yanmaması için koyu mor renktedir!',
      soundLabel: 'Zürafa Uğultusu',
      diet: 'Otobur (Ağaç yaprakları)',
      habitat: 'Savana ve Çayırlık',
      group: 'Memeli'
    },
    ru: {
      name: 'Жираф',
      childDescription: 'Жирафы — самые высокие животные на Земле! Их невероятная шея помогает дотягиваться до самых сочных листочков на верхушках акаций.',
      funFact: 'Язык жирафа длиной до 50 сантиметров и темно-фиолетового цвета, чтобы не обгореть на ярком африканском солнце!',
      soundLabel: 'Дыхание жирафа',
      diet: 'Травоядное (Листья)',
      habitat: 'Саванна и луга',
      group: 'Млекопитающее'
    },
    en: {
      name: 'Giraffe',
      childDescription: 'Giraffes are the tallest animals on the planet! Their long necks reach delicious tender leaves at the very tops of thorny acacia trees.',
      funFact: 'A giraffe tongue is up to 50 cm (20 inches) long and dark bluish-purple so it doesn’t get sunburned!',
      soundLabel: 'Gentle Giraffe Hum',
      diet: 'Herbivore (Plants)',
      habitat: 'Savannah & Grassland',
      group: 'Mammal'
    }
  },

  cheetah: {
    az: {
      name: 'Hepard',
      childDescription: 'Hepard quruda yaşayan ən sürətli qaçışçıdır! O, idman avtomobili kimi bir neçə saniyəyə saatda 100 km sürət toplaya bilir.',
      funFact: 'Hepard qaçarkən uzun quyruğunu sükan kimi istifadə edərək havada kəskin döngələr edir!',
      soundLabel: 'Hepard Xorultusu',
      diet: 'Yırtıcı (Ətyeyən)',
      habitat: 'Savanna və Çöllük',
      group: 'Məməli'
    },
    tr: {
      name: 'Çita',
      childDescription: 'Çita karadaki en hızlı koşucudur! Bir spor araba gibi sadece birkaç saniyede saatte 100 km hıza ulaşabilir.',
      funFact: 'Çitalar koşarken uzun kuyruklarını bir dümen gibi kullanarak havada keskin dönüşler yaparlar!',
      soundLabel: 'Çita Mırıltısı',
      diet: 'Etobur (Et yiyen)',
      habitat: 'Savana ve Çayırlık',
      group: 'Memeli'
    },
    ru: {
      name: 'Гепард',
      childDescription: 'Гепард — самое быстроногое сухопутное существо! Словно гоночный болид, он разгоняется до 100 км/ч всего за три секунды.',
      funFact: 'Во время стремительного бега гепард использует длинный хвост как руль, резко маневрируя на виражах!',
      soundLabel: 'Мурлыканье гепарда',
      diet: 'Хищник (Мясоед)',
      habitat: 'Саванна и луга',
      group: 'Млекопитающее'
    },
    en: {
      name: 'Cheetah',
      childDescription: 'Cheetahs are the fastest sprinters on land! Like a supercar, they can accelerate from 0 to 60 mph in just three seconds.',
      funFact: 'Cheetahs use their long muscular tails like boat rudders to make sharp turns while running at top speed!',
      soundLabel: 'Cheetah Chirp & Purr',
      diet: 'Carnivore (Meat)',
      habitat: 'Savannah & Grassland',
      group: 'Mammal'
    }
  },

  horse: {
    az: {
      name: 'Ev Atı',
      childDescription: 'Atlar insanlarla min illərdir dostluq edən nəcib və güclü heyvanlardır. Onlar çəmənliklərdə qaçmağı və kişnəməyi çox sevirlər.',
      funFact: 'Atlar ayaq üstə dincələ və yata bilirlər, çünki ayaqlarında xüsusi oynaq kilidi mexanizmi var!',
      soundLabel: 'At Kişnəməsi',
      diet: 'Otyeyən (Ot və yulaf)',
      habitat: 'Təsərrüfat və Həyət',
      group: 'Məməli'
    },
    tr: {
      name: 'Evcil At',
      childDescription: 'Atlar binlerce yıldır insanların en yakın dostu olan asil ve güçlü canlılardır. Çayırlarda dörtnala koşmayı severler.',
      funFact: 'Atlar ayakta uyuyabilirler çünkü bacaklarında kilitlenen özel bir kas sistemi vardır!',
      soundLabel: 'At Kişnemesi',
      diet: 'Otobur (Ot ve yulaf)',
      habitat: 'Çiftlik ve Bahçe',
      group: 'Memeli'
    },
    ru: {
      name: 'Домашняя лошадь',
      childDescription: 'Лошади — благородные, сильные и верные друзья человека. Они обожают скакать галопом по просторным лугам.',
      funFact: 'Лошади умеют спать стоя благодаря особому природному замку в суставах ног!',
      soundLabel: 'Звонкое ржание лошади',
      diet: 'Травоядное',
      habitat: 'Ферма и двор',
      group: 'Млекопитающее'
    },
    en: {
      name: 'Domestic Horse',
      childDescription: 'Horses are noble and intelligent companions that love galloping across open meadows and enjoying fresh apples and crunchy carrots.',
      funFact: 'Horses have a special locking mechanism in their leg joints that allows them to sleep soundly while standing up!',
      soundLabel: 'Joyful Horse Whinny',
      diet: 'Herbivore (Plants)',
      habitat: 'Farm & Backyard',
      group: 'Mammal'
    }
  },

  sheep: {
    az: {
      name: 'Ev Qoyunu',
      childDescription: 'Qoyunlar yaşıl təpələrdə otlayan yumşaq yunlu dinc heyvanlardır. Onların yunu bizi qışda isti saxlayan corab və sviterlər toxumaq üçün istifadə olunur.',
      funFact: 'Qoyunların bəbəkləri düzbucaqlıdır, bu da onlara başlarını çevirmədən demək olar ki, 360 dərəcə ətrafı görməyə imkan verir!',
      soundLabel: 'Qoyun Mələməsi',
      diet: 'Otyeyən (Təzə ot)',
      habitat: 'Təsərrüfat və Həyət',
      group: 'Məməli'
    },
    tr: {
      name: 'Evcil Koyun',
      childDescription: 'Koyunlar yemyeşil tepelerde otlayan yumuşacık yünlü sevimli hayvanlardır. Yünleri kışın bizi sıcak tutan kazaklara dönüşür.',
      funFact: 'Koyunların göz bebekleri dikdörtgen şeklindedir; başlarını çevirmeden neredeyse her yönü görebilirler!',
      soundLabel: 'Koyun Melemesi',
      diet: 'Otobur (Taze ot)',
      habitat: 'Çiftlik ve Bahçe',
      group: 'Memeli'
    },
    ru: {
      name: 'Домашняя овца',
      childDescription: 'Овечки — мирные кудрявые животные, пасущиеся на сочных лугах. Их теплая шерсть дарит нам мягкие зимние свитера и варежки.',
      funFact: 'У овец прямоугольные зрачки, благодаря чему они видят почти на 360 градусов, не поворачивая головы!',
      soundLabel: 'Блеяние овечки',
      diet: 'Травоядное',
      habitat: 'Ферма и двор',
      group: 'Млекопитающее'
    },
    en: {
      name: 'Domestic Sheep',
      childDescription: 'Sheep are gentle woolly herbivores grazing peacefully on rolling hillsides. Their soft fleece provides warm wool for cozy winter sweaters.',
      funFact: 'Sheep have horizontal rectangular pupils that let them see predators behind them without even turning their heads!',
      soundLabel: 'Gentle Sheep Bleat',
      diet: 'Herbivore (Plants)',
      habitat: 'Farm & Backyard',
      group: 'Mammal'
    }
  }
};

// -------------------------------------------------------------
// NATURE ELEMENTS TRANSLATIONS
// -------------------------------------------------------------
export const NATURE_DATA_TRANSLATIONS: Record<string, Record<Language, Partial<LocalizedNatureElement>>> = {
  mountain: {
    az: {
      name: 'Uca Dağlar',
      category: 'Zirvələr və Qarlı Qayalıqlar',
      soundLabel: 'Dağ Küləyi və Əks-səda',
      description: 'Dağlar buludlara qədər ucalan nəhəng daş qalalardır! Bəzi zirvələr o qədər ucadır ki, yayın ortasında belə qarı heç vaxt ərimir.',
      funFacts: [
        'Everest dağı Yer kürəsində ən hündür zirvədir — hündürlüyü 8,848 metrdir.',
        'Dağlar yer qabığının nəhəng plitələrinin milyonlarla il boyunca bir-biri ilə toqquşması nəticəsində yaranır.',
        'Dünyadakı təmiz içməli suyun yarıdan çoxu qarlı dağ zirvələrindən axıb gəlir.'
      ],
      kidActivity: 'Mini Təcrübə: Yumşaq dəsmalı hər iki tərəfdən əllərinizlə mərkəzə doğru sıxın. Görün necə yuxarıya doğru kiçik dağ silsilələri kimi qatlanır!',
      whyItMatters: 'Dağlar yağış buludlarını saxlayır, qış qarlarını toplayır və bütün il boyu çaylara saf təmiz su bəxş edir.'
    },
    tr: {
      name: 'Ulu Dağlar',
      category: 'Zirveler ve Karlı Kayalıklar',
      soundLabel: 'Dağ Rüzgarı ve Yankı',
      description: 'Dağlar bulutlara kadar yükselen dev taş kalelerdir! Bazı zirveler o kadar yüksektir ki, yazın ortasında bile karları hiç erimez.',
      funFacts: [
        'Everest Dağı, 8.848 metrelik yüksekliğiyle Dünya’nın en yüksek noktasıdır.',
        'Dağlar, yer kabuğunun dev plakalarının milyonlarca yıl boyunca çarpışmasıyla oluşur.',
        'Dünyadaki tatlı içme suyunun yarıdan fazlası karlı dağ zirvelerinden doğar.'
      ],
      kidActivity: 'Mini Deney: Yumuşak bir havluyu iki yanından ellerinizle ortaya doğru itin. Ortasında minik dağ sıraları gibi nasıl yükseldiğini gözlemleyin!',
      whyItMatters: 'Dağlar yağmur bulutlarını tutar, kış karını depolar ve nehirlere yıl boyunca temiz içme suyu sağlar.'
    },
    ru: {
      name: 'Величественные горы',
      category: 'Высокие вершины и снежные пики',
      soundLabel: 'Горный ветер и альпийское эхо',
      description: 'Горы — это гигантские каменные башни, уходящие прямо в облака! Вершины многих гор настолько высоки, что снег на них не тает даже жарким летом.',
      funFacts: [
        'Гора Эверест — высочайшая точка планеты, ее высота достигает 8 848 метров над уровнем моря.',
        'Горы образуются, когда гигантские плиты земной коры медленно сталкиваются друг с другом миллионы лет.',
        'Более половины пресной питьевой воды в мире берет свое начало на заснеженных горных склонах.'
      ],
      kidActivity: 'Мини-эксперимент: Сожмите мягкое полотенце с двух сторон к центру. Посмотрите, как оно сминается вверх, образуя горные хребты!',
      whyItMatters: 'Горы задерживают дождевые облака, копят снег и круглый год питают реки чистейшей родниковой водой.'
    },
    en: {
      name: 'Mountain',
      category: 'High Peaks & Alpine Horizons',
      soundLabel: 'Alpine Wind & Mountain Echoes',
      description: 'Mountains are giant stone towers that rise high into the clouds! Some peaks are so high that snow never melts, even in the middle of summer.',
      funFacts: [
        'Mount Everest is the highest mountain on Earth, standing over 8,848 meters (29,031 feet) tall.',
        'Mountains are formed when huge tectonic plates of Earth’s crust slowly crash into each other over millions of years.',
        'More than half of the fresh drinking water in the whole world starts on snowy mountain tops.'
      ],
      kidActivity: 'Mini Experiment: Squeeze a soft towel from both sides with your hands. Watch how it buckles upward into little mountain ridges!',
      whyItMatters: 'Mountains catch rainclouds and store winter snow, releasing pure fresh water into rivers all year long.'
    }
  },

  trees: {
    az: {
      name: 'Qədim Ağaclar',
      category: 'Canlı Nəhənglər və Təbiət Şahları',
      soundLabel: 'Yarpaqların Xışıltısı',
      description: 'Ağaclar Yerin möhtəşəm canlı möcüzələridir! Onlar quşlara və dələlərə sığınacaq verir, çiçək açır və nəfəs aldığımız təmiz oksigeni yaradır.',
      funFacts: [
        'Dünyada ən qədim tək ağac 4,850 yaşdan çox olan Şam ağacı "Matusail"dir!',
        'Ağaclar suyu yerin dərinliklərindən çəkib yüz metr yüksəklikdəki yarpaqlara qədər təbii təzyiqlə qaldırırlar.',
        'Yetkin bir palıd ağacı 2,300-dən çox quş, həşərat və bitki növünə ev sahibliyi edə bilər!'
      ],
      kidActivity: 'Ağacı Qucaqla: Həyətdə bir ağac tap. Qabığının naxışlarına bax və qollarını ona sar — onu qucaqlamaq üçün neçə nəfər lazımdır?',
      whyItMatters: 'Ağaclar havanı təmizləyir, kölgə salır, torpağı qoruyur və bütün canlılar üçün oksigen istehsal edir.'
    },
    tr: {
      name: 'Kadim Ağaçlar',
      category: 'Yaşayan Devler ve Flora',
      soundLabel: 'Yaprak Hışırtısı',
      description: 'Ağaçlar Dünya’nın harika yaşayan devleridir! Kuşlara yuva olur, mis kokulu çiçekler açar ve soluduğumuz oksijeni üretirler.',
      funFacts: [
        'Dünyadaki en yaşlı yaşayan ağaç, 4.850 yıldan daha yaşlı olan Methuselah adlı çam ağacıdır!',
        'Ağaçlar suyu toprağın derinliklerinden emip yüzlerce metre yukarıdaki yapraklara kadar pompalar.',
        'Tek bir yaşlı meşe ağacı, 2.300’den fazla canlı türüne ev sahipliği yapabilir!'
      ],
      kidActivity: 'Ağaca Sarılma: Yakındaki bir ağacın kabuğuna nazikçe dokun ve kollarınla sarıl; gövdesini sarmak için kaç çocuk gerekiyor?',
      whyItMatters: 'Ağaçlar karbonu emer, şehirleri serinletir ve tüm canlılara taze oksijen sunar.'
    },
    ru: {
      name: 'Деревья-великаны',
      category: 'Живые исполины планеты',
      soundLabel: 'Шелест листьев и шепот крон',
      description: 'Деревья — великолепные живые чудеса Земли! Они дают дом птицам и зверям, радуют цветами и производят кислород, которым мы дышим.',
      funFacts: [
        'Самое старое дерево на планете — сосна Мафусаил, ее возраст превышает 4 850 лет!',
        'Дерево способно поднимать воду из глубины почвы на высоту десятков метров без единого насоса.',
        'Один взрослый дуб может поддерживать жизнь более 2 300 видов птиц, насекомых и грибов!'
      ],
      kidActivity: 'Обними дерево: Найди в парке дерево, потрогай его теплую кору и попробуй обнять стволом — сколько рук нужно, чтобы замкнуть круг?',
      whyItMatters: 'Деревья очищают воздух, защищают почву и дарят нам драгоценный кислород.'
    },
    en: {
      name: 'Trees',
      category: 'Living Giants & Ancient Flora',
      soundLabel: 'Rustling Leaves & Tree Whispers',
      description: 'Trees are Earth’s magnificent living wonders! From gentle birch trees to colossal redwoods, trees shelter wildlife and produce the oxygen we breathe.',
      funFacts: [
        'The oldest living individual tree in the world is a pine named Methuselah, over 4,850 years old!',
        'Trees drink water from deep underground and pump it all the way up to leaves hundreds of feet high through natural pressure.',
        'A single mature oak tree can support more than 2,300 species of birds, insects, lichens, and fungi!'
      ],
      kidActivity: 'Tree Hug: Find a tree in your neighborhood. Gently feel the patterns in its bark and wrap your arms around it!',
      whyItMatters: 'Trees absorb carbon dioxide, cool cities with natural shade, and produce fresh oxygen for all living beings.'
    }
  },

  forests: {
    az: {
      name: 'Zümrüd Meşələr',
      category: 'Təbii Ekosistem və Yaşıl Çətir',
      soundLabel: 'Yarpaqların Xışıltısı və Meşə Küləyi',
      description: 'Meşələr başı göylərə çatan minlərlə uca ağacdan ibarət yamyaşıl canlı aləmdir. Onlar doğma Yer planetimizin yaşıl ağciyərləridir!',
      funFacts: [
        'Ağaclar yeraltı kök göbələk şəbəkəsi vasitəsilə bir-biri ilə ünsiyyət qurur və buna "Təbiət Şəbəkəsi" (Wood Wide Web) deyilir!',
        'Böyük bir yetkin ağac dörd nəfər insanın bir gün boyunca rahat nəfəs alması üçün kifayət qədər təmiz oksigen istehsal edir.',
        'Quru heyvanlarının və həşəratlarının 80%-dən çoxu məhz meşələrdə rahat yuva qurub yaşayır.'
      ],
      kidActivity: 'Təbiət Detektivi: Ətrafındakı bir ağacın qabığına toxunub bax. Qabıq hamardır, kələ-kötürdür, yoxsa yumşaq yaşıl mamırla örtülüdür?',
      whyItMatters: 'Meşələr havanı zərərli qazlardan təmizləyir, buludları çəkərək yağış yağdırır, marallara, bayquşlara və dələlərə isti yuva bəxş edir.'
    },
    tr: {
      name: 'Zümrüt Ormanlar',
      category: 'Doğal Ekosistem ve Yeşil Örtü',
      soundLabel: 'Yaprak Hışırtısı ve Orman Rüzgarı',
      description: 'Ormanlar göklere uzanan binlerce ulu ağaçla dolu yemyeşil canlı dünyalardır. Onlar Dünya’mızın nefes alan akciğerleridir!',
      funFacts: [
        'Ağaçlar yeraltındaki mantar kök ağları sayesinde birbiriyle iletişim kurarlar; buna "Doğa Ağı" (Wood Wide Web) denir!',
        'Tek bir olgun ağaç, dört insanın tam bir gün boyunca rahat nefes almasına yetecek kadar oksijen üretir.',
        'Tüm kara hayvanlarının ve böceklerinin %80’inden fazlası sıcacık yuvalarını ormanlarda kurar.'
      ],
      kidActivity: 'Doğa Dedektifi: Yakınındaki bir ağacın kabuğuna dokun. Pürüzsüz mü, engebeli mi, yoksa yumuşak yeşil yosunla mı kaplı?',
      whyItMatters: 'Ormanlar havayı temizler, yağmur döngüsünü besler ve geyiklere, baykuşlara ve sincaplara yuva olur.'
    },
    ru: {
      name: 'Изумрудные леса',
      category: 'Экосистемы и зеленый полог',
      soundLabel: 'Шелест листьев и лесной ветер',
      description: 'Леса — это густые зеленые миры с тысячами высоких деревьев, кроны которых касаются неба. Это настоящие легкие нашей планеты!',
      funFacts: [
        'Деревья общаются друг с другом под землей через особую сеть грибных нитей, которую ученые называют «лесной паутиной»!',
        'Одно взрослое дерево вырабатывает достаточно кислорода для дыхания четырех человек в течение целого дня.',
        'Более 80% всех наземных животных и птиц живут в лесах.'
      ],
      kidActivity: 'Лесной сыщик: Потрогай кору ближайшего дерева. Она гладкая, шершавая или покрыта мягким зеленым мхом?',
      whyItMatters: 'Леса очищают воздух, призывают дожди и дарят уютный дом оленям, совам, белкам и птицам.'
    },
    en: {
      name: 'Forests & Woods',
      category: 'Ecosystems & Green Canopy',
      soundLabel: 'Rustling Leaves & Forest Wind',
      description: 'Forests are lush worlds filled with thousands of tall trees whose leafy canopies touch the sky. They are the lungs of planet Earth!',
      funFacts: [
        'Trees talk to each other underground using a vast network of friendly mushroom roots called the "Wood Wide Web"!',
        'One large mature tree can produce enough fresh oxygen for four people to breathe for an entire day.',
        'Over 80% of all land animals and insects call forests their cozy home.'
      ],
      kidActivity: 'Nature Detective: Look at the bark on a tree near you. Is it smooth, rough, or covered in soft green moss?',
      whyItMatters: 'Forests clean our air, create rain, and give homes to deer, owls, squirrels, and monkeys.'
    }
  },

  rivers: {
    az: {
      name: 'Axar Çaylar',
      category: 'Şirin Su Yolları və Vadilər',
      soundLabel: 'Şırıltılı Axar Çay Səsi',
      description: 'Çaylar uca qarlı dağlardan süzülüb axan, dərələri yarıb vadilər açan və dənizlərə doğru tələsən şirin su lentləridir.',
      funFacts: [
        'Afrikadakı Nil çayı və Cənubi Amerikadakı Amazon çayı planetimizin ən uzun və bol sulu çaylarıdır.',
        'Çaylar sahilləri boyunca bitkiləri, balıqları və su samurlarını qidalandıran zəngin minerallar və xırda çınqıllar daşıyır.',
        'Çayın içindəki hamar və yumru daşlar yüz illər boyunca suyun axını ilə bir-birinə sürtülərək bu cür cilalanmışdır!'
      ],
      kidActivity: 'Üzən Yarpaq Gəmisi: Sakit bir arx və ya çay görəndə, suya balaca bir xəzan yarpağı burax və su axınının onu necə üzdürdüyünü izlə.',
      whyItMatters: 'Çaylar insanlara və təbiətə təmiz içməli su gətirir, su elektrik stansiyalarında ekoloji enerji yaradır və əkin sahələrini suvarır.'
    },
    tr: {
      name: 'Çağlayan Nehirler',
      category: 'Tatlı Su Yolları ve Vadiler',
      soundLabel: 'Şırıl Şırıl Nehir Akıntısı',
      description: 'Nehirler yüksek karlı dağlardan doğup vadileri yararak denizlere doğru koşan serin tatlı su kurdeleleridir.',
      funFacts: [
        'Afrika’daki Nil Nehri ve Güney Amerika’daki Amazon Nehri gezegenimizin en uzun akarsularıdır.',
        'Nehirler, kıyılarındaki bitkileri, balıkları ve su samurlarını besleyen zengin mineraller taşır.',
        'Nehir yataklarındaki yuvarlak çakıl taşları, suların yüzyıllar boyunca onları birbirine sürtmesiyle pürüzsüzleşmiştir!'
      ],
      kidActivity: 'Yaprak Gemisi: Güvenli bir akarsu kenarında suya küçük bir yaprak bırak ve akıntının onu nasıl yüzdürdüğünü izle.',
      whyItMatters: 'Nehirler içme suyu sağlar, hidroelektrik santralleriyle temiz enerji üretir ve tarım alanlarını sular.'
    },
    ru: {
      name: 'Быстрые реки',
      category: 'Пресноводные артерии и долины',
      soundLabel: 'Журчание речного потока',
      description: 'Реки — это звонкие пресноводные ленты, спускающиеся с заснеженных гор, прорезающие долины и бегущие к морям.',
      funFacts: [
        'Река Нил в Африке и Амазонка в Южной Америке — самые длинные и полноводные реки на нашей планете.',
        'Реки несут питательные вещества и мелкие камешки, которые кормят растения, рыбок и речных выдр по берегам.',
        'Гладкие речные камушки стали круглыми потому, что вода обкатывала их друг о друга сотни лет!'
      ],
      kidActivity: 'Кораблик из листика: Пусти сухой осенний лист по течению ручейка и посмотри, как плавно несет его вода!',
      whyItMatters: 'Реки дают нам питьевую воду, чистую электроэнергию гидростанций и орошают поля с урожаем.'
    },
    en: {
      name: 'Flowing Rivers',
      category: 'Freshwater Pathways',
      soundLabel: 'Bubbling River Current',
      description: 'Rivers are freshwater ribbons that dance down from high mountains, carving winding valleys as they travel all the way to the sea.',
      funFacts: [
        'The Nile River in Africa and the Amazon River in South America are the longest rivers on our planet.',
        'Rivers carry tiny pebbles and nutrients that feed plants, fish, otters, and beavers along their shores.',
        'Smooth river stones became round because water rolled them against each other for hundreds of years!'
      ],
      kidActivity: 'Water Float: Next time you see a safe stream, float a small fallen leaf and see how water currents guide it downstream.',
      whyItMatters: 'Rivers provide fresh drinking water, clean hydropower energy, and fertile soil for farming.'
    }
  },

  waterfalls: {
    az: {
      name: 'Uca Şəlalələr',
      category: 'Möhtəşəm Su Kaskadları',
      soundLabel: 'Gurlayan Şəlalə Nərəsi',
      description: 'Şəlalələr çay sularının uca sıldırım qayalardan aşağı töküldüyü yerdə yaranır; ətrafa büllur damcılar səpilir, güclü nərə çəkir və möcüzəvi göyqurşağı saçır.',
      funFacts: [
        'Venesueladakı Anxel şəlaləsi dünyada ən hündür şəlalədir — su düz 979 metr yüksəklikdən aşağı süzülür!',
        'Böyük şəlalələrin ətrafa yaydığı büllur su tozu nadir mamırların və qıjı bitkilərinin bitməsi üçün xüsusi mikromühit yaradır.',
        'Günəş şüaları şəlalənin sıçrayan su damcılarına dəyəndə, çox vaxt şəlalənin üstündə valehedici qoşa göyqurşağı görmək olar!'
      ],
      kidActivity: 'Göyqurşağı Axtarışı: Günəşli gündə böyüklərdən bağ şlanqı ilə havaya incə su çiləməsini xahiş et və öz şəxsi balaca göyqurşağını kəşf et!',
      whyItMatters: 'Şəlalələr suyu milyonlarla oksigen qabarcığı ilə zənginləşdirərək çayların suyunu təravətli və canlılarla dolu saxlayır.'
    },
    tr: {
      name: 'Görkemli Şelaleler',
      category: 'Büyüleyici Su Kaskadları',
      soundLabel: 'Gürleyen Şelale Çağlayışı',
      description: 'Şelaleler, bir nehrin sarp kayalıklardan aşağıya döküldüğü yerde oluşur; etrafa pırıl pırıl su damlacıkları saçar ve gökkuşakları yaratır.',
      funFacts: [
        'Venezuela’daki Angel Şelalesi, yaklaşık 979 metrelik kesintisiz düşüşüyle Dünya’nın en yüksek şelalesidir!',
        'Büyük şelalelerin oluşturduğu serin su sisi, etrafta nadir eğrelti otlarının ve yosunların yetiştiği özel bir iklim yaratır.',
        'Güneş ışınları su damlacıklarına çarptığında, şelalenin üzerinde rengarenk çift gökkuşakları parıldar!'
      ],
      kidActivity: 'Gökkuşağı Avcısı: Güneşli bir günde bir yetişkinden bahçe hortumuyla havaya su püskürtmesini iste ve minik gökkuşağını yakala!',
      whyItMatters: 'Şelaleler suya milyonlarca oksijen kabarcığı katarak nehir yaşamını sağlıklı ve canlı tutar.'
    },
    ru: {
      name: 'Шумные водопады',
      category: 'Грандиозные водные каскады',
      soundLabel: 'Могучий рев водопада',
      description: 'Водопады рождаются там, где река срывается с высокого обрыва, вздымая облака искрящихся брызг и рождая сказочные радуги.',
      funFacts: [
        'Водопад Анхель в Венесуэле — высочайший в мире, вода падает с головокружительной высоты 979 метров!',
        'Водяная пыль от водопадов создает прохладный микроклимат, в котором пышно растут редкие папоротники и мхи.',
        'Когда солнечные лучи пробиваются сквозь водяные брызги, над водопадом часто загорается яркая двойная радуга!'
      ],
      kidActivity: 'Ловец радуги: В ясный солнечный день попроси взрослых распылить воду из шланга и найди вспыхнувшую радугу!',
      whyItMatters: 'Водопады насыщают воду пузырьками кислорода, оживляя всю речную флору и фауну.'
    },
    en: {
      name: 'Cascading Waterfalls',
      category: 'Dramatic Water Cascades',
      soundLabel: 'Mighty Waterfall Roar',
      description: 'Waterfalls happen when a river plunges over a steep cliff of hard rock, creating sparkling mist, roaring thunder, and magical rainbows.',
      funFacts: [
        'Angel Falls in Venezuela is the highest uninterrupted waterfall on Earth, dropping almost 1 kilometer (979 meters)!',
        'The mist created by big waterfalls creates its own microclimate where rare ferns and mosses thrive.',
        'When sunlight hits the tiny water droplets in the waterfall mist, you can often spot a permanent double rainbow!'
      ],
      kidActivity: 'Rainbow Spotter: On a sunny day, ask an adult to spray a gentle mist with a garden hose to make your own mini rainbow!',
      whyItMatters: 'Waterfalls churn up millions of oxygen bubbles into the water, keeping river ecosystems healthy and lively.'
    }
  },

  lakes: {
    az: {
      name: 'Sakit Göllər',
      category: 'Dinc Şirin Su Hövzələri',
      soundLabel: 'Zərif Göl Ləpələri',
      description: 'Göllər dörd tərəfi quru ilə əhatə olunmuş sakit şirin su hövzələridir. Onların ayna kimi parlaq səthi göydəki ağ buludları əks etdirir.',
      funFacts: [
        'Baykal gölü dünyanın ən dərin və ən qədim gölüdür — Yerdəki donmamış bütün şirin suyun beşdə birini təkbaşına saxlayır.',
        'Sönmüş vulkanların kraterində yaranan bəzi göllər heyrətamiz firuzəyi və zümrüd rəngində parıldayır.',
        'Ördəklər, qurbağalar, su zanbaqları, cırcıramalar və ağ qu quşları sakit və ləpəsiz göl sularını çox sevirlər.'
      ],
      kidActivity: 'Ayna Suları: Sakit bir qab suya baxaraq öz əksini görə bilirsənmi? Bəs barmağınla suya toxunduqda nə baş verir?',
      whyItMatters: 'Göllər şəhərlər üçün dəyərli su ehtiyatı toplayır və uzaqlara uçan köçəri quşlar üçün dincəlmə məkanı rolunu oynayır.'
    },
    tr: {
      name: 'Huzurlu Göller',
      category: 'Sakin Tatlı Su Havzaları',
      soundLabel: 'Hafif Göl Dalgaları',
      description: 'Göller, etrafı karayla çevrili dingin tatlı su havzalarıdır. Cam gibi berrak yüzeyleri gökyüzündeki pamuk bulutları ayna gibi yansıtır.',
      funFacts: [
        'Baykal Gölü dünyanın en derin ve en eski gölüdür; Dünya’daki donmamış tatlı suyun beşte birini barındırır.',
        'Sönmüş volkanların kraterlerinde oluşan bazı göller büyüleyici turkuaz renkte parıldar.',
        'Ördekler, kurbağalar, nilüferler, yusufçuklar ve kuğular göllerin sakin sularını çok severler.'
      ],
      kidActivity: 'Su Aynası: Durgun bir kase suya bakarak kendi yansımanı görebiliyor musun? Parmağınla dokununca ne oluyor?',
      whyItMatters: 'Göller değerli su depolarıdır ve göçmen kuşların uzun yolculuklarında dinlenme durağıdır.'
    },
    ru: {
      name: 'Спокойные озера',
      category: 'Пресноводные озерные чаши',
      soundLabel: 'Тихий плеск озерной волны',
      description: 'Озера — это безмятежные водоемы, со всех сторон окруженные сушей. Их гладкая гладь отражает облака, словно огромное зеркало.',
      funFacts: [
        'Озеро Байкал в Сибири — самое глубокое и древнее в мире; в нем хранится пятая часть всей незамерзшей пресной воды Земли.',
        'Некоторые озера образовались прямо в кратерах потухших вулканов и переливаются бирюзовым цветом.',
        'Утки, лягушки, белые кувшинки, стрекозы и лебеди обожают спокойную воду озер.'
      ],
      kidActivity: 'Водное зеркало: Посмотри в чашку со спокойной водой — видишь свое отражение? А что будет, если коснуться пальцем?',
      whyItMatters: 'Озера хранят бесценные запасы пресной воды и служат приютом для перелетных птиц.'
    },
    en: {
      name: 'Peaceful Lakes',
      category: 'Calm Freshwater Basins',
      soundLabel: 'Gentle Lake Ripples',
      description: 'Lakes are calm pools of fresh water surrounded by land. Their glassy surfaces reflect fluffy white clouds like a giant outdoor mirror.',
      funFacts: [
        'Lake Baikal in Siberia is the deepest and oldest lake in the world, holding one-fifth of all unfrozen freshwater on Earth.',
        'Some volcanic lakes are created inside the crater of extinct volcanoes and have vibrant turquoise waters.',
        'Ducks, frogs, water lilies, dragonflies, and swans love the still, gentle water of lakes.'
      ],
      kidActivity: 'Mirror Waters: Can you see your reflection in a bowl of calm water? What happens when you tap it with your finger?',
      whyItMatters: 'Lakes hold precious water supplies for communities and serve as resting rest-stops for migrating birds.'
    }
  },

  seas: {
    az: {
      name: 'Sahil Dənizləri',
      category: 'Duzlu Dəniz Suları və Mərcanlar',
      soundLabel: 'Sahilə Çırpılan Dəniz Dalğaları',
      description: 'Dənizlər okeanlara bağlı olan, çox vaxt quru ilə əhatələnmiş, rəngbərəng mərcan riflərinə və qızılı qumlu çimərliklərə ev sahibliyi edən duzlu su aləmidir.',
      funFacts: [
        'İsti dənizlərdəki mərcan riflərinə "dənizlərin tropik meşələri" deyilir, çünki orada minlərlə rəngarəng balıq və dəniz canlısı yaşayır.',
        'Aralıq dənizi eyni anda üç qitəni — Avropa, Asiya və Afrikanı bir-biri ilə birləşdirir.',
        'Sahildə tapdığın dəniz balıqqulaqları bir vaxtlar balaca dəniz ilbizlərinin və molyuskaların möhkəm qoruyucu evləri olub!'
      ],
      kidActivity: 'Balıqqulağının Sirri: Spiral formalı təmiz dəniz balıqqulağını qulağına yaxınlaşdır — uzaq dənizin zərif ləpə səsini eşidirsənmi?',
      whyItMatters: 'Dənizlər sahilyanı şəhərlərin havasını mülayimləşdirir, balaca balıqlar üçün körpələr evi yaradır və sahil mehləri əsdirir.'
    },
    tr: {
      name: 'Kıyı Denizleri',
      category: 'Tuzlu Deniz Resifleri',
      soundLabel: 'Kıyıya Vuran Deniz Dalgaları',
      description: 'Denizler, okyanuslara bağlı, rengarenk mercan resiflerine ve kumluk sahillere ev sahipliği yapan tuzlu su dünyalarıdır.',
      funFacts: [
        'Sıcak denizlerdeki mercan resiflerine "denizlerin yağmur ormanları" denir çünkü binlerce renkli canlı burada yaşar.',
        'Akdeniz, üç kıtayı (Avrupa, Asya ve Afrika) birbirine bağlar.',
        'Sahillerde bulduğun deniz kabukları, bir zamanlar sevimli deniz canlılarının koruyucu evleriydi!'
      ],
      kidActivity: 'Deniz Kabuğu Mucizesi: Helezon bir deniz kabuğunu kulağına daya; uzaktaki dalgaların fısıltısını duyabiliyor musun?',
      whyItMatters: 'Denizler kıyı iklimini ılımanlaştırır, yavru balıklara yuva olur ve ferah kıyı meltemleri üretir.'
    },
    ru: {
      name: 'Прибрежные моря',
      category: 'Морские глубины и коралловые рифы',
      soundLabel: 'Морской прибой у берега',
      description: 'Моря — это соленые водоемы, соединенные с океанами, часто окаймленные сушей и богатые яркими коралловыми рифами.',
      funFacts: [
        'Коралловые рифы в теплых морях называют «морскими тропическими лесами» за невероятное разнообразие обитателей.',
        'Средиземное море омывает берега трех частей света: Европы, Азии и Африки.',
        'Морские ракушки на пляже когда-то были надежными домиками для моллюсков и улиток!'
      ],
      kidActivity: 'Шепот ракушки: Приложи к уху морскую раковину — слышишь тихий шум морских волн?',
      whyItMatters: 'Моря смягчают климат на побережьях, растят молодь рыбы и дарят нам свежие бризы.'
    },
    en: {
      name: 'Coastal Seas',
      category: 'Saltwater Shelves & Reefs',
      soundLabel: 'Coastal Sea Waves',
      description: 'Seas are large bodies of saltwater connected to oceans, often partially cradled by land and home to colorful coral reefs and sandy beaches.',
      funFacts: [
        'Coral reefs found in warm seas are nicknamed the "rainforests of the sea" because thousands of colorful creatures live there.',
        'The Mediterranean Sea connects three continents: Europe, Asia, and Africa.',
        'Seashells washed up on beaches were once protective little homes made by snails, clams, and mollusks!'
      ],
      kidActivity: 'Sea Shell Wonder: Hold a clean spiral seashell up to your ear — do you hear the gentle whoosh of the sea?',
      whyItMatters: 'Seas buffer coastal communities, nurture young fish nurseries, and generate warm coastal breezes.'
    }
  },

  oceans: {
    az: {
      name: 'Dərin Mavi Okeanlar',
      category: 'Qlobal Nəhəng Duzlu Sular',
      soundLabel: 'Dərin Okean Dalğaları və Qabarma',
      description: 'Okeanlar planetimizin 70%-dən çoxunu örtür! Onlar son dərəcə nəhəng və dərindir; Yer üzünün ən böyük sirrlərini və ən nəhəng canlılarını qucağında saxlayır.',
      funFacts: [
        'Sakit Okean o qədər nəhəngdir ki, Yer kürəsindəki bütün 7 qitə onun içinə asanlıqla yerləşərdi!',
        'Okeanın ən dərin nöqtəsi olan Mariana çökəkliyinin dərinliyi 11,000 metrdir — bu, Everest dağının hündürlüyündən belə dərindir!',
        'Fitoplankton adlanan mikroskopik okean yosunları hər gün nəfəs aldığımız oksigenin 50%-dən çoxunu istehsal edir.'
      ],
      kidActivity: 'Qlobus Kəşfiyyatı: Yer qlobusunu fırlat və mavi okean sularının yaşıl və qəhvəyi quru sahələrinə nisbətən necə çox olduğunu gör!',
      whyItMatters: 'Okeanlar Yer kürəsinin iqlimini tənzimləyir, artıq istiliyi udur və hava sistemimizin döyünən ürəyidir.'
    },
    tr: {
      name: 'Derin Mavi Okyanuslar',
      category: 'Uçsuz Bucaksız Okyanus Suları',
      soundLabel: 'Derin Okyanus Dalgaları',
      description: 'Okyanuslar gezegenimizin %70’inden fazlasını kaplar! Çok derin ve devasadırlar; Dünya’nın en büyük canlılarına ev sahipliği yaparlar.',
      funFacts: [
        'Büyük Okyanus (Pasifik) o kadar büyüktür ki yeryüzündeki 7 kıtanın tümü içine rahatça sığabilir!',
        'Okyanusun en derin yeri olan Mariana Çukuru yaklaşık 11.000 metre derindir; yani Everest Dağı’nın boyundan bile daha derindir!',
        'Fitoplankton adı verilen mikroskobik okyanus bitkileri, her gün soluduğumuz oksijenin yarısından fazlasını üretir.'
      ],
      kidActivity: 'Küre Kaşifi: Bir dünya küresini çevir ve mavi okyanusların yeşil karalara göre ne kadar geniş olduğunu incele!',
      whyItMatters: 'Okyanuslar Dünya iklimini dengeler, fazla ısıyı emer ve hava sistemimizin kalbidir.'
    },
    ru: {
      name: 'Глубокие синие океаны',
      category: 'Глобальные соленые просторы',
      soundLabel: 'Мощь океанских волн',
      description: 'Океаны покрывают более 70% нашей планеты! Они безбрежны, таинственны и укрывают самых огромных созданий Земли.',
      funFacts: [
        'Тихий океан настолько колоссален, что в нем с легкостью поместились бы все семь земных континентов!',
        'Самое глубокое место — Марианская впадина — достигает почти 11 000 метров, что больше высоты горы Эверест!',
        'Микроскопические океанические водоросли фитопланктона производят более половины кислорода на планете.'
      ],
      kidActivity: 'Исследователь глобуса: Покрути глобус и посмотри, насколько синий цвет океанов преобладает над сушей!',
      whyItMatters: 'Океаны регулируют земной климат, поглощают излишки тепла и управляют погодой на планете.'
    },
    en: {
      name: 'Deep Blue Oceans',
      category: 'Global Saltwater Expanse',
      soundLabel: 'Deep Ocean Swell & Surf',
      description: 'Oceans cover more than 70% of our entire planet! They are vast, deep, and home to the greatest mysteries and creatures on Earth.',
      funFacts: [
        'The Pacific Ocean is so gigantic that all seven continents could fit inside it with room to spare!',
        'The deepest trench in the ocean, the Mariana Trench, is nearly 11,000 meters deep — deeper than Mount Everest is tall!',
        'Microscopic ocean plants called phytoplankton produce more than 50% of the oxygen we breathe every day.'
      ],
      kidActivity: 'Globe Explorer: Spin a world globe and count how much blue you see compared to green and brown land!',
      whyItMatters: 'Oceans regulate Earth’s climate, absorb extra heat, and are the beating heart of our planetary weather.'
    }
  },

  snow: {
    az: {
      name: 'Parıldayan Bəyaz Qar',
      category: 'Buz Kristalları və Qış Möcüzəsi',
      soundLabel: 'Qar Xışıltısı və Addım Səsi',
      description: 'Qar soyuq buludlarda su buxarının donaraq altıguşəli zərif buz kristallarına çevrilməsi və qu quşu tükü kimi yerə süzülməsi ilə yaranır.',
      funFacts: [
        'Dünyada heç vaxt iki tam eyni qar dənəciyi olmur — hər bir dənəcik özünəməxsus altıguşəli naxışla böyüyür!',
        'Qar yağanda ətraf çox sakit olur, çünki təzə pambıq kimi qar səs dalğalarını təbii yumşaq yorğan kimi özünə çəkir.',
        'Ağ dovşan və kəklik kimi bəzi heyvanlar qarda gizlənmək üçün qışda qəhvəyi tüklərini tam bəyaz rəngə dəyişirlər.'
      ],
      kidActivity: 'Kağız Qar Dənəsi: Kvadrat kağızı üçbucaq şəklində qatla, kənarlarından kiçik fiqurlar kəs və açaraq öz unikal qar dənəciyini yarat!',
      whyItMatters: 'Qar torpağı və bitki toxumlarını şaxtadan qoruyan isti qış yorğanı rolunu oynayır və yazda əriyərək torpağı canlandırır.'
    },
    tr: {
      name: 'Işıl Işıl Kar',
      category: 'Buz Kristalleri ve Kış Harikası',
      soundLabel: 'Kar Hışırtısı ve Ayak Sesleri',
      description: 'Kar, soğuk bulutlardaki su buharının donup altı köşeli narin buz kristallerine dönüşerek yavaşça süzülmesiyle oluşur.',
      funFacts: [
        'Hiçbir iki kar tanesi birbirinin tamamen aynısı değildir; her birinin kendine has altıgen bir deseni vardır!',
        'Kar yağarken etraf çok sessizleşir çünkü taze kar sesi yumuşacık bir yorgan gibi içine çeker.',
        'Kar tavşanı gibi bazı hayvanlar karda kamufle olabilmek için kışın kürklerini bembeyaz renge dönüştürürler.'
      ],
      kidActivity: 'Kağıttan Kar Tanesi: Kare bir kağıdı katlayıp makasla küçük şekiller kes ve açarak kendi eşsiz kar taneni yap!',
      whyItMatters: 'Kar, toprağı ve tohumları dondurucu soğuktan koruyan sıcak bir battaniye görevi görür ve baharda eriyerek bitkileri sular.'
    },
    ru: {
      name: 'Искристый белый снег',
      category: 'Зимние кристаллы и снежные узоры',
      soundLabel: 'Хруст снега под ногами',
      description: 'Снег рождается высоко в холодных облаках, когда пар замерзает в изящные шестиугольные снежинки, плавно кружащиеся в воздухе.',
      funFacts: [
        'В природе не существует двух абсолютно одинаковых снежинок — каждая плетет свой неповторимый морозный узор!',
        'Во время снегопада вокруг становится удивительно тихо, потому что пушистый снег глушит звуки, как мягкое одеяло.',
        'Зайцы-беляки и куропатки на зиму меняют окрас на белоснежный, чтобы прятаться в сугробах от хищников.'
      ],
      kidActivity: 'Бумажная снежинка: Сложи квадратный листок треугольником, вырежи узоры по краям и разверни свою уникальную снежинку!',
      whyItMatters: 'Снег защищает семена и корни растений от свирепых морозов, а весной бережно поит землю талой водой.'
    },
    en: {
      name: 'Sparkling Snow',
      category: 'Frozen Winter Crystals',
      soundLabel: 'Crisp Snow Shimmer & Footsteps',
      description: 'Snow forms high in cold clouds when water vapor freezes into delicate six-sided ice crystals that float down like soft white feathers.',
      funFacts: [
        'No two snowflakes are ever completely identical — each one grows its own unique six-pointed fractal pattern!',
        'Snow feels quiet because fresh powder absorbs sound waves like a giant, soft acoustic blanket.',
        'Some animals, like the snowshoe hare and ptarmigan bird, change their brown summer coats into pure white winter coats to hide in the snow.'
      ],
      kidActivity: 'Paper Snowflake: Fold a square paper into triangles, snip little shapes along the folds, and unfold to reveal your own unique snowflake!',
      whyItMatters: 'Snow acts as a warm thermal blanket for soil and seeds, and slowly melts in spring to nourish baby plants.'
    }
  },

  rain: {
    az: {
      name: 'Həyat Bəxş Edən Yağış',
      category: 'Atmosfer Su Dövrü',
      soundLabel: 'Yarpaqlara Döyən Yağış Şırıltısı',
      description: 'Yağış Yer planetini canlı və təravətli saxlayan sehirli su dövranıdır! İsti günəş suları buxara çevirir, buludlar yaranır və yenidən bərəkətli yağış kimi yerə qayıdır.',
      funFacts: [
        'Yağış yağdıqdan dərhal sonra ətrafa yayılan o təravətli xoş torpaq qoxusunun xüsusi elmi adı var: "Petrixor"!',
        'Yağış damcıları səmada düşərkən göz yaşı formasında deyil, havanın müqaviməti səbəbilə balaca bulkaya bənzəyir!',
        'Tək bir güclü ildırımlı bulud öz içində milyardlarla litr saf su damcısı saxlaya bilər.'
      ],
      kidActivity: 'Yağış Damcısı Yarışı: Yağışlı gündə pəncərə şüşəsindən aşağı süzülən iki damcını seç və hansının aşağı daha tez çatacağını təxmin et!',
      whyItMatters: 'Yağış olmasaydı, ağaclar böyüməz, çaylar quruyar və canlıların içməyə heç bir damla suyu olmazdı.'
    },
    tr: {
      name: 'Hayat Veren Yağmur',
      category: 'Atmosferik Su Döngüsü',
      soundLabel: 'Yapraklara Vuran Yağmur Sesi',
      description: 'Yağmur, Dünya’mızı canlı ve yemyeşil tutan büyüleyici bir döngüdür! Güneş suyu buharlaştırır, bulutlar oluşur ve bereketli damlalar olarak geri yağar.',
      funFacts: [
        'Yağmurdan hemen sonra duyulan o taze ve mis gibi toprak kokusunun bilimsel bir adı vardır: "Petrikor"!',
        'Yağmur damlaları havadan düşerken gözyaşı şeklinde değil, havanın direnci nedeniyle minik bir hamburger ekmeği şeklindedir!',
        'Tek bir gök gürültülü fırtına bulutu, milyarlarca litre saf su damlacığı taşıyabilir.'
      ],
      kidActivity: 'Yağmur Damlası Yarışı: Yağmurlu bir günde pencere camından kayan iki damla seç ve hangisinin önce alta varacağını tahmin et!',
      whyItMatters: 'Yağmur olmasaydı ağaçlar yeşermez, nehirler kurur ve canlıların içecek suyu kalmazdı.'
    },
    ru: {
      name: 'Живительный дождь',
      category: 'Атмосферный круговорот воды',
      soundLabel: 'Шум дождя по зеленым листьям',
      description: 'Дождь — это волшебный круговорот, который питает планету! Теплое солнце превращает воду в пар, рождаются облака и проливаются свежим дождиком.',
      funFacts: [
        'Свежий землистый запах после дождя имеет настоящее научное название — «петрикор»!',
        'Падая с неба, капли дождя похожи не на слезинки, а на крошечные булочки для бургера из-за сопротивления воздуха!',
        'Одна грозовая туча может нести в себе миллиарды литров чистейшей пресной воды.'
      ],
      kidActivity: 'Гонка дождевых капель: В дождливый день выбери две капельки на стекле и угадай, какая быстрее добежит до низа!',
      whyItMatters: 'Без дождей высохли бы реки, увяли деревья и живым существам нечего было бы пить.'
    },
    en: {
      name: 'Life-Giving Rain',
      category: 'Atmospheric Water Cycle',
      soundLabel: 'Gentle Rain on Leaves',
      description: 'Rain is the magical cycle that keeps planet Earth alive! Warm sunshine turns puddle water into invisible vapor, which forms clouds and falls again as rain.',
      funFacts: [
        'That sweet, fresh earthy smell right after it rains has a real scientific name: "Petrichor"!',
        'Raindrops are not shaped like teardrops when falling — they actually look like tiny hamburger buns as air pushes against them!',
        'A single thunderstorm cloud can hold billions of liters of pure fresh water droplets.'
      ],
      kidActivity: 'Raindrop Race: On a rainy day, watch two raindrops slide down a windowpane and guess which one reaches the sill first!',
      whyItMatters: 'Without rain, trees would not grow, rivers would run dry, and animals would have nothing to drink.'
    }
  }
};

// -------------------------------------------------------------
// UNIVERSE TRANSLATIONS
// -------------------------------------------------------------
export const UNIVERSE_DATA_TRANSLATIONS: Record<string, Record<Language, Partial<LocalizedUniverseElement>>> = {
  sun: {
    az: {
      name: 'Qızılı Günəş',
      category: 'Səma Cismi',
      soundLabel: 'Günəş Küləyinin Vıyıltısı',
      description: 'Günəş günəş sistemimizin mərkəzində yerləşən nəhəng parıldayan ulduzdur! Onun isti şüaları Yerə işıq, hərarət və həyat bəxş edir.',
      kidWonder: 'Bilirdinizmi? Günəş o qədər böyükdür ki, onun içinə 1.3 milyondan çox Yer kürəsi sığa bilər!',
      funFacts: [
        'Günəşdən çıxan işıq 150 milyon kilometr yolu cəmi 8 dəqiqə 20 saniyəyə qət edərək üzümüzə çatır.',
        'Günəşin mərkəzində temperatur inanılmaz dərəcədə qayrardır — təxminən 15 milyon dərəcə Selsi!',
        'Günəş olmasaydı, Yer kürəsi qaranlıq kosmosda donmuş bir buz parçası olardı.'
      ]
    },
    tr: {
      name: 'Altın Güneş',
      category: 'Gök Cismi',
      soundLabel: 'Güneş Rüzgarı Uğultusu',
      description: 'Güneş, sistemimizin merkezindeki devasa parlayan yıldızdır! Sıcak ışınları Dünya’mıza aydınlık ve yaşam verir.',
      kidWonder: 'Biliyor muydunuz? Güneş o kadar büyüktür ki, içine 1,3 milyondan fazla Dünya sığabilir!',
      funFacts: [
        'Güneş ışığı 150 milyon kilometrelik mesafeyi sadece 8 dakika 20 saniyede kat ederek yüzümüze ulaşır.',
        'Güneş’in çekirdeği inanılmaz derecede sıcaktır; yaklaşık 15 milyon santigrat derece!',
        'Güneş olmasaydı Dünya, uzayda yüzen donmuş karanlık bir buz topuna dönerdi.'
      ]
    },
    ru: {
      name: 'Золотое Солнце',
      category: 'Небесное светило',
      soundLabel: 'Гул солнечного ветра',
      description: 'Солнце — это гигантская пылающая звезда в самом центре нашей системы! Его лучи дарят Земле свет, тепло и саму жизнь.',
      kidWonder: 'Знаете ли вы? Солнце настолько огромное, что внутри него могло бы поместиться 1,3 миллиона таких планет, как Земля!',
      funFacts: [
        'Солнечный свет преодолевает расстояние в 150 миллионов километров до Земли всего за 8 минут и 20 секунд.',
        'Температура в ядре Солнца превышает 15 миллионов градусов Цельсия!',
        'Без Солнца наша планета превратилась бы в темный ледяной шар, блуждающий в космической пустоте.'
      ]
    },
    en: {
      name: 'The Golden Sun',
      category: 'Celestial Body',
      soundLabel: 'Solar Wind Humming',
      description: 'The Sun is the giant glowing star at the center of our solar system! Its warm golden rays give Earth light, warmth, and life.',
      kidWonder: 'Did you know? The Sun is so huge that over 1.3 million Earths could fit inside it!',
      funFacts: [
        'Light from the Sun travels 150 million kilometers to reach your face in just 8 minutes and 20 seconds.',
        'The core of the Sun is blistering hot — about 15 million degrees Celsius!',
        'Without the Sun, Earth would be a frozen ball of dark ice floating through space.'
      ]
    }
  },

  moon: {
    az: {
      name: 'İşıqlı Ay',
      category: 'Səma Cismi',
      soundLabel: 'Zərif Gecə Parıltısı',
      description: 'Ay Yer kürəsinin sadiq gecə dostu və yeganə təbii peykidir! O, özü işıq saçmır, Günəşin şüalarını nəhəng bir güzgü kimi bizə əks etdirir.',
      kidWonder: 'Gecə göyə baxın: Aydakı vulkan düzənliklərində gülümsəyən sevimli bir sima görə bilirsinizmi?',
      funFacts: [
        'Ayda külək və yağış olmadığı üçün astronavtların ayaq izləri milyonlarla il olduğu kimi qalacaq!',
        'Ayda cazibə qüvvəsi Yerdəkindən 6 dəfə azdır — orada batutdan altı qat daha yüksəyə tullana bilərsiniz!',
        'Ay səmada tədricən mərhələlərini dəyişir: Təzə Ay, Hilal, Yarımay və Bütöv Ay.'
      ]
    },
    tr: {
      name: 'Parlayan Ay',
      category: 'Gök Cismi',
      soundLabel: 'Gece Işıltısı',
      description: 'Ay, Dünya’mızın sadık gece dostudur! Kendi ışığı yoktur; tıpkı dev bir ayna gibi Güneş’in ışığını bize yansıtır.',
      kidWonder: 'Gece gökyüzüne bakın: Ay’ın yüzeyindeki gölgelerde gülümseyen bir yüz görebiliyor musunuz?',
      funFacts: [
        'Ay’da rüzgar veya yağmur olmadığı için astronotların ayak izleri milyonlarca yıl silinmeden kalacaktır!',
        'Ay’daki yerçekimi Dünya’nın altıda biridir; trambolinde altı kat daha yükseğe sıçrayabilirsiniz!',
        'Ay gökyüzünde evreler halinde görünür: Hilal, İlk Dördün ve Dolunay.'
      ]
    },
    ru: {
      name: 'Сияющая Луна',
      category: 'Небесное светило',
      soundLabel: 'Ночное мерцание',
      description: 'Луна — верная ночная спутница Земли! Она не светится сама, а отражает солнечный свет, словно гигантское зеркало в небе.',
      kidWonder: 'Взгляните ночью на небо: темные лунные равнины складываются в очертания доброго лица!',
      funFacts: [
        'На Луне нет ветра и дождей, поэтому следы первых космонавтов останутся там нетронутыми на миллионы лет!',
        'Гравитация на Луне в 6 раз слабее земной: там можно прыгать в шесть раз выше, чем на батуте!',
        'Луна меняет свой облик по фазам: новолуние, месяц, полумесяц и круглая полная Луна.'
      ]
    },
    en: {
      name: 'The Glowing Moon',
      category: 'Celestial Body',
      soundLabel: 'Soft Night Shimmer',
      description: 'The Moon is Earth’s faithful night companion! It doesn’t create its own light, but acts like a giant mirror reflecting sunshine down to us.',
      kidWonder: 'Look up at night: Can you spot the dark volcanic plains that look like a smiling face?',
      funFacts: [
        'Because there is no wind or rain on the Moon, astronaut footprints will stay there for millions of years!',
        'Gravity on the Moon is one-sixth of Earth’s gravity — you could jump six times higher than on a trampoline!',
        'The Moon changes shape through phases: New Moon, Crescent, Quarter, and Full Moon.'
      ]
    }
  },

  earth: {
    az: {
      name: 'Doğma Yer Kürəsi',
      category: 'Səma Cismi',
      soundLabel: 'Yer Kürəsinin Ahəngi',
      description: 'Bizim əziz mavi evimiz! Yer kürəsi bütün nəhəng kainatda maye suya, təmiz havaya və canlı həyata malik olduğu məlum olan yeganə planetdir.',
      kidWonder: 'Siz elə indi kosmik gəmidə səyahət edirsiniz! Yer kürəsi hər gün öz oxu ətrafında fırlanır və ildə bir dəfə Günəşin dövrəsinə çıxır.',
      funFacts: [
        'Yerin qalın atmosferi görünməz superqəhrəman qalxanı kimi bizi kosmik şüalardan və meteor parçalarından qoruyur.',
        'Yer kürəsi tam ideal kürə deyil — fırlanması səbəbindən ekvator hissəsindən bir qədər qabarıqdır.',
        'Yer kürəsində kiçik qarışqalardan nəhəng göy balinalara qədər milyonlarla canlı növü yaşayır.'
      ]
    },
    tr: {
      name: 'Gezegenimiz Dünya',
      category: 'Gök Cismi',
      soundLabel: 'Dünya Rezonansı',
      description: 'Bizim değerli mavi yuvamız! Dünya, tüm evrende sıvı suya, temiz havaya ve canlı yaşama sahip olduğu bilinen tek gezegendir.',
      kidWonder: 'Şu an kozmik bir uzay gemisindesiniz! Dünya kendi etrafında günde bir kez döner ve yılda bir kez Güneş çevresinde tur atar.',
      funFacts: [
        'Dünya’nın atmosferi görünmez bir süper kahraman kalkanı gibi bizi uzay radyasyonundan ve meteorlardan korur.',
        'Dünya tam bir küre değildir; kendi etrafında döndüğü için ekvatordan hafifçe basıktır.',
        'Dünya’da minik karıncalardan dev mavi balinalara kadar milyonlarca canlı türü yaşar.'
      ]
    },
    ru: {
      name: 'Планета Земля',
      category: 'Небесное тело',
      soundLabel: 'Земной резонанс',
      description: 'Наш драгоценный голубой дом! Земля — единственная известная планета в космосе, где есть жидкая вода, чистый воздух и цветущая жизнь.',
      kidWonder: 'Прямо сейчас вы летите на космическом корабле! Земля делает один оборот вокруг оси за сутки и облетает Солнце за один год.',
      funFacts: [
        'Атмосфера Земли защищает нас, словно щит супергероя, от солнечной радиации и космических метеоритов.',
        'Земля — не идеальный шар: из-за вращения она немного сплюснута у полюсов и расширена на экваторе.',
        'На Земле обитают миллионы видов живых существ — от крошечных муравьев до гигантских синих китов.'
      ]
    },
    en: {
      name: 'Planet Earth',
      category: 'Celestial Body',
      soundLabel: 'Earth Resonance',
      description: 'Our precious blue marble home! Earth is the only known planet in the entire cosmos blessed with liquid water, fresh air, and blooming life.',
      kidWonder: 'You are riding a cosmic spaceship right now! Earth spins around once a day and circles the Sun once every year.',
      funFacts: [
        'Earth’s atmosphere protects us like an invisible superhero shield against solar radiation and space pebbles.',
        'Earth is not a perfect sphere — it bulges slightly around the equator because of its rotation.',
        'Earth has millions of different living species, from tiny ants to giant redwood trees and blue whales.'
      ]
    }
  },

  saturn: {
    az: {
      name: 'Halqalı Saturn',
      category: 'Səma Cismi',
      soundLabel: 'Saturn Halqalarının Pıçıltısı',
      description: 'Saturn Günəş sisteminin ən füsunkar incisidir! O, milyardlarla parıldayan buz və qaya parçalarından ibarət möhtəşəm geniş halqaları ilə məşhurdur.',
      kidWonder: 'Saturn əsasən yüngül qazlardan ibarətdir. Əgər kifayət qədər böyük bir su vannası tapsaydıq, Saturn batmadan suyun üzərində üzərdi!',
      funFacts: [
        'Saturnun halqaları 282 000 kilometr enindədir, lakin qalınlığı əksər yerlərdə cəmi 10 metrə yaxındır!',
        'Saturnun 140-dan çox peyki var, o cümlədən maye metan gölləri olan sirli Titan peyki.',
        'Saturnda bir il təxminən 29 Yer ilinə bərabərdir!'
      ]
    },
    tr: {
      name: 'Halkalı Satürn',
      category: 'Gök Cismi',
      soundLabel: 'Gezegen Halkası Fısıltıları',
      description: 'Satürn, Güneş Sistemi’nin mücevheridir! Milyarlarca parıldayan buz ve kaya parçasından oluşan muazzam geniş halkalarıyla ünlüdür.',
      kidWonder: 'Satürn çoğunlukla hafif gazlardan oluşur. Yeterince büyük bir küvet olsaydı, Satürn suyun üstünde yüzerdi!',
      funFacts: [
        'Satürn’ün halkaları 282.000 kilometre genişliğindedir, ancak kalınlığı çoğu yerde sadece 10 metre kadardır!',
        'Satürn’ün çevresinde dönen 140’tan fazla uydusu vardır; Titan uydusunda sıvı metan gölleri bulunur.',
        'Satürn’de bir yıl yaklaşık 29 Dünya yılı sürer!'
      ]
    },
    ru: {
      name: 'Окольцованный Сатурн',
      category: 'Небесное тело',
      soundLabel: 'Шепот планетных колец',
      description: 'Сатурн — жемчужина Солнечной системы, знаменитая своими великолепными широкими кольцами из миллиардов льдинок и камней.',
      kidWonder: 'Сатурн состоит из легких газов. Если бы нашлась ванна нужного размера, Сатурн плавал бы на поверхности воды!',
      funFacts: [
        'Кольца Сатурна простираются в ширину на 282 000 километров, но их толщина местами составляет всего около 10 метров!',
        'У Сатурна более 140 спутников, включая Титан с озерами из жидкого метана.',
        'Один год на Сатурне длится почти 29 земных лет!'
      ]
    },
    en: {
      name: 'Ringed Saturn',
      category: 'Celestial Body',
      soundLabel: 'Planetary Ring Whispers',
      description: 'Saturn is the jewel of the Solar System, famous for its magnificent wide rings made of billions of shimmering ice and rock pieces.',
      kidWonder: 'Saturn is made mostly of lightweight gases. If you had a bathtub big enough, Saturn would actually float on water!',
      funFacts: [
        'Saturn’s rings stretch 282,000 kilometers wide, but in many places they are only about 10 meters thick!',
        'Saturn has over 140 known moons orbiting around it, including Titan, which has lakes of liquid methane.',
        'A year on Saturn lasts almost 29 Earth years!'
      ]
    }
  },

  comets: {
    az: {
      name: 'Sürətli Kometlər',
      category: 'Səma Cismi',
      soundLabel: 'Kometin Kosmik Vıyıltısı',
      description: 'Kometlər Günəş sistemimizin ən soyuq kənarlarından gələn qədim buz, toz və qayalardan ibarət kosmik "çirkli qar topları"dır.',
      kidWonder: 'Komet isti Günəşə yaxınlaşanda onun buzu qaza çevrilərək milyonlarla kilometr uzanan parlaq quyruq yaradır!',
      funFacts: [
        'Məşhur Halley kometi hər 75-76 ildən bir Yer səmasından keçir — növbəti dəfə 2061-ci ildə gələcək!',
        'Komet quyruqları günəş küləyinin təsiri ilə həmişə Günəşin əksi istiqamətinə doğru uzanır.',
        'Alimlərin fikrincə, milyardlarla il əvvəl Yerə ilk suyu məhz kometlər gətirmiş ola bilər.'
      ]
    },
    tr: {
      name: 'Hızlı Kuyrukluyıldızlar',
      category: 'Gök Cismi',
      soundLabel: 'Kuyrukluyıldız Rüzgarı',
      description: 'Kuyrukluyıldızlar, Güneş sistemimizin buzlu dış sınırlarından gelen antik buz, toz ve kayadan yapılmış kozmik kar toplarıdır.',
      kidWonder: 'Kuyrukluyıldız Güneş’e yaklaştığında buzu buharlaşır ve milyonlarca kilometre uzunluğunda ışıltılı bir kuyruk oluşturur!',
      funFacts: [
        'Halley Kuyrukluyıldızı her 75-76 yılda bir gökyüzümüzden geçer; bir sonraki ziyaret 2061 yılında olacak!',
        'Kuyruklar her zaman güneş rüzgarı tarafından itildiği için Güneş’in tam tersi yönüne uzanır.',
        'Bilim insanları milyarlarca yıl önce Dünya’ya ilk suyu kuyrukluyıldızların taşımış olabileceğini düşünüyor.'
      ]
    },
    ru: {
      name: 'Стремительные кометы',
      category: 'Небесное тело',
      soundLabel: 'Свист кометы',
      description: 'Кометы — это "грязные космические снежки" из древнего льда, космической пыли и камней с ледяных окраин нашей системы.',
      kidWonder: 'Когда комета подлетает к горячему Солнцу, лед испаряется, образуя сияющий хвост длиной в миллионы километров!',
      funFacts: [
        'Знаменитая комета Галлея возвращается к Земле каждые 75–76 лет — в следующий раз в 2061 году!',
        'Хвост кометы всегда направлен строго в сторону от Солнца под действием солнечного ветра.',
        'Ученые полагают, что именно кометы миллиарды лет назад принесли на Землю первую воду.'
      ]
    },
    en: {
      name: 'Speeding Comets',
      category: 'Celestial Body',
      soundLabel: 'Comet Whoosh',
      description: 'Comets are "dirty snowballs" made of ancient ice, dust, and rock from the frozen edge of our solar system.',
      kidWonder: 'When a comet flies close to the warm Sun, its ice boils into gas, creating a glowing tail millions of kilometers long!',
      funFacts: [
        'Halley’s Comet visits Earth’s sky once every 75 to 76 years — next appearing in the year 2061!',
        'Comet tails always point directly away from the Sun, blown backwards by the solar wind.',
        'Scientists believe comets may have brought early water to Earth billions of years ago.'
      ]
    }
  },

  galaxies: {
    az: {
      name: 'Süd Yolu Qalaktikası',
      category: 'Kosmik Hadisə',
      soundLabel: 'Kosmik Simfoniya',
      description: 'Qalaktika cazibə qüvvəsi ilə bir-birinə bağlı yüz milyardlarla ulduz, planet və qaz dumanlıqlarından ibarət nəhəng spiral ulduz şəhəridir.',
      kidWonder: 'Bizim evimiz olan Süd Yolu qalaktikası qaranlıq ulduzlu səmada dökülmüş südlü bir kəmər kimi görünür.',
      funFacts: [
        'Təkcə bizim Süd Yolu qalaktikamızda 100 milyarddan çox ulduz var, kainatda isə milyardlarla başqa qalaktikalar mövcuddur!',
        'Günəşimizin qalaktika mərkəzi ətrafında bircə dövrə vurması üçün təxminən 230 milyon il tələb olunur.',
        'Böyük qalaktikaların əksəriyyətinin mərkəzində super-nəhəng qara dəlik yerləşir.'
      ]
    },
    tr: {
      name: 'Samanyolu Galaksisi',
      category: 'Kozmik Olay',
      soundLabel: 'Kozmik Senfoniya',
      description: 'Galaksi, kütleçekimiyle birbirine bağlı yüz milyarlarca yıldız, gezegen ve gaz bulutundan oluşan devasa bir yıldızlar adasıdır.',
      kidWonder: 'Yuvamız Samanyolu, karanlık gecelerde gökyüzüne dökülmüş parlak sütten bir kuşak gibi görünür.',
      funFacts: [
        'Yalnızca Samanyolu galaksimizde 100 milyardan fazla yıldız vardır ve evrende milyarlarca başka galaksi bulunur!',
        'Güneş’imizin galaktik merkezin etrafında bir tam tur atması yaklaşık 230 milyon yıl sürer.',
        'Büyük galaksilerin çoğunun merkezinde süper kütleli bir kara delik oturur.'
      ]
    },
    ru: {
      name: 'Галактика Млечный Путь',
      category: 'Космическое явление',
      soundLabel: 'Космическая симфония',
      description: 'Галактика — это колоссальный спиральный звездный мегаполис из сотен миллиардов звезд, планет и туманностей.',
      kidWonder: 'Наша родная галактика Млечный Путь в ночном небе напоминает пролитую молочную реку из искрящихся звезд.',
      funFacts: [
        'В одном только Млечном Пути более 100 миллиардов звезд, а во всей Вселенной — триллионы других галактик!',
        'Солнцу требуется около 230 миллионов лет, чтобы совершить один полный оборот вокруг центра Галактики.',
        'В самом центре большинства крупных галактик скрывается сверхмассивная черная дыра.'
      ]
    },
    en: {
      name: 'The Milky Way Galaxy',
      category: 'Cosmic Phenomenon',
      soundLabel: 'Cosmic Symphony',
      description: 'A galaxy is a gigantic cosmic pinwheel containing hundreds of billions of stars, planets, and nebulae bound together by gravity.',
      kidWonder: 'Our home galaxy, the Milky Way, looks like a spilled ribbon of creamy milk across dark starry skies.',
      funFacts: [
        'There are over 100 billion stars in our Milky Way galaxy alone, and billions of other galaxies in the universe!',
        'It takes our Sun about 230 million years to make just one full lap around the galactic center.',
        'At the very center of most large galaxies sits a supermassive black hole.'
      ]
    }
  },

  aurora: {
    az: {
      name: 'Şimal Parıltısı (Avrora)',
      category: 'Kosmik Hadisə',
      soundLabel: 'Parıltılı Avrora Sədası',
      description: 'Avrora qütb gecələrində səmada dalğalanan zümrüd yaşılı, bənövşəyi və moruq rəngli sehrli, işıqlı pərdədir.',
      kidWonder: 'Bu, əsl kosmik rəqsdir! Günəşdən gələn elektrik hissəcikləri Yer atmosferi ilə toqquşaraq səmanı neon lampası kimi işıqlandırır!',
      funFacts: [
        'Şimal yarımkürəsində Aurora Borealis, cənub yarımkürəsində isə Aurora Australis adlanır.',
        'Beynəlxalq Kosmik Stansiyadakı kosmonavtlar aşağı baxaraq parıldayan avrora pərdələrinin düz içindən uça bilirlər!',
        'Qədim şimal xalqları bu rəqs edən işıqların səmada oyun oynayan xeyirxah ruhlar olduğuna inanırdılar.'
      ]
    },
    tr: {
      name: 'Kutup Işıkları (Aurora)',
      category: 'Kozmik Olay',
      soundLabel: 'Aurora Işıltı Melodisi',
      description: 'Aurora, kutup gecelerinde gökyüzünde dalgalanan zümrüt yeşili, mor ve pembe ışıklardan oluşan büyüleyici bir gök perdesidir.',
      kidWonder: 'Bu gerçek bir kozmik danstır! Güneş parçacıkları Dünya’nın atmosferiyle çarpışarak gökyüzünü neon gibi parlatır!',
      funFacts: [
        'Kuzey yarımkürede Aurora Borealis, güney yarımkürede Aurora Australis olarak adlandırılır.',
        'Uluslararası Uzay İstasyonu’ndaki astronotlar bu parıldayan ışık perdelerinin tam içinden geçebilirler!',
        'Eski efsanelerde bu ışıkların gökyüzünde oyun oynayan dost ruhlar olduğuna inanılırdı.'
      ]
    },
    ru: {
      name: 'Северное сияние (Аврора)',
      category: 'Космическое явление',
      soundLabel: 'Перелив полярного сияния',
      description: 'Аврора — это мерцающий занавес из изумрудных, лиловых и рубиновых огней, танцующих в ночном полярном небе.',
      kidWonder: 'Это настоящий космический танец! Заряженные частицы Солнца сталкиваются с атмосферой Земли, заставляя воздух светиться неоном!',
      funFacts: [
        'В северном полушарии явление зовут Aurora Borealis, а в южном — Aurora Australis.',
        'Космонавты на орбитальной станции могут наблюдать сияние сверху и даже пролетать прямо сквозь него!',
        'В древности люди верили, что в небе танцуют добрые духи предков.'
      ]
    },
    en: {
      name: 'Aurora Borealis (Northern Lights)',
      category: 'Cosmic Phenomenon',
      soundLabel: 'Aurora Shimmer Chimes',
      description: 'The Aurora is a glowing, dancing curtain of emerald green, violet, and magenta light that swirls across high polar night skies.',
      kidWonder: 'It is a real cosmic dance! Charged solar particles collide with gases in Earth’s upper atmosphere, making the sky glow like neon!',
      funFacts: [
        'In the northern hemisphere they are called Aurora Borealis, and in the southern hemisphere they are called Aurora Australis.',
        'Astronauts on the International Space Station can look down and fly right through the glowing aurora curtains!',
        'Indigenous folklore imagined the dancing lights were friendly spirits playing a game across the heavens.'
      ]
    }
  },

  eclipse: {
    az: {
      name: 'Günəş və Ay Tutulması',
      category: 'Kosmik Hadisə',
      soundLabel: 'Kosmik Düzülüş Ahəngi',
      description: 'Tutulma Günəş, Ay və Yer kürəsinin düz bir xətt boyunca sıralandığı zaman baş verən möhtəşəm kölgə oyunudur.',
      kidWonder: 'Tam Günəş tutulması zamanı gündüz bir neçə dəqiqəliyə alatoranlığa çevrilir, ulduzlar görünür və quşlar axşam nəğməsi oxuyur!',
      funFacts: [
        'Möcüzəvi təsadüf nəticəsində Günəş Aydan 400 dəfə böyükdür, lakin 400 dəfə uzaqdadır, ona görə də səmada eyni ölçüdə görünürlər!',
        'Ay tutulması zamanı Yer kürəsi Günəş işığının Aya düşməsinə mane olur və Ay dərin qırmızı "Qanlı Ay" rənginə boyanır.',
        'Qədim dövrlərdə insanlar tutulma zamanı nağara çalar və Günəşin tez qayıtmasını arzulayardılar!'
      ]
    },
    tr: {
      name: 'Güneş ve Ay Tutulması',
      category: 'Kozmik Olay',
      soundLabel: 'Kozmik Hizalanma Tonu',
      description: 'Tutulma; Güneş, Ay ve Dünya’nın tam bir doğru boyunca dizilmesiyle gökyüzünde yaşanan muazzam bir gölge oyunudur.',
      kidWonder: 'Tam güneş tutulmasında gündüz vakti birkaç dakikalığına alacakaranlığa döner, yıldızlar belirir ve kuşlar akşam şarkısı söyler!',
      funFacts: [
        'Kozmik bir tesadüfle Güneş, Ay’dan 400 kat büyüktür ama 400 kat daha uzaktadır; bu sayede gökyüzünde aynı boyutta görünürler!',
        'Ay tutulmasında Dünya gölgesi Ay’a düşer ve Ay "Kanlı Ay" denilen kızıl-bakır rengine bürünür.',
        'Eski medeniyetler tutulma sırasında Güneş’i geri getirmek için davullar çalardı!'
      ]
    },
    ru: {
      name: 'Солнечное и лунное затмение',
      category: 'Космическое явление',
      soundLabel: 'Тон космического выравнивания',
      description: 'Затмение — это грандиозная игра теней между Солнцем, Луной и Землей, когда они выстраиваются в одну линию.',
      kidWonder: 'Во время полного солнечного затмения день на несколько минут сменяется сумерками, вспыхивают звезды и затихают птицы!',
      funFacts: [
        'По поразительному совпадению Солнце в 400 раз больше Луны, но и в 400 раз дальше от Земли, поэтому на небе их диски кажутся одинаковыми!',
        'При лунном затмении Земля заслоняет солнечный свет, и Луна окрашивается в медно-красный цвет "Кровавой Луны".',
        'В древности люди били в барабаны во время затмений, прося Солнце вернуться!'
      ]
    },
    en: {
      name: 'Solar & Lunar Eclipse',
      category: 'Cosmic Phenomenon',
      soundLabel: 'Cosmic Alignment Tone',
      description: 'An eclipse is a grand cosmic game of shadow-tag between the Sun, Moon, and Earth when they line up in a perfect straight line.',
      kidWonder: 'During a total solar eclipse, day turns into twilight for a few minutes, stars come out, and birds sing evening songs!',
      funFacts: [
        'By pure celestial coincidence, the Sun is 400 times bigger than the Moon, but also 400 times farther away, so they look the exact same size in our sky!',
        'During a lunar eclipse, Earth blocks sunlight from hitting the Moon, turning the Moon a deep rusty "blood red".',
        'Ancient cultures would beat drums during eclipses to encourage the Sun to come back out!'
      ]
    }
  },

  rainbow: {
    az: {
      name: 'Əlvan Göyqurşağı',
      category: 'Təbiət Hadisəsi',
      soundLabel: 'Prizmatik Çalarlar Melodiyası',
      description: 'Göyqurşağı parlaq günəş şüaları yağan minlərlə yağış damcısından keçərək ağ işığı 7 sehrli rəngə böldükdə səmada yaranır.',
      kidWonder: 'Sehrli 7 rəngi yadında saxla: Qırmızı, Narıncı, Sarı, Yaşıl, Mavi, Göy, Bənövşəyi!',
      funFacts: [
        'Təyyarədən və ya yüksək dağın zirvəsindən baxdıqda göyqurşağının əslində səmada tam bütöv bir dairə olduğunu görmək olar!',
        'Heç vaxt iki insan eyni göyqurşağını görmür, çünki hər kəs fərqli yağış damcılarının əksinə baxır.',
        'Bəzən birinci göyqurşağının üstündə rəngləri tərsinə düzülmüş ikinci, daha zərif göyqurşağı da yaranır!'
      ]
    },
    tr: {
      name: 'Rengarenk Gökkuşağı',
      category: 'Doğa Olayı',
      soundLabel: 'Prizmatik Melodi',
      description: 'Gökkuşağı, güneş ışığı yağmur damlalarından geçerken kırılıp beyaz ışığı 7 sihirli renge ayırdığında ortaya çıkar.',
      kidWonder: 'Gökkuşağının 7 rengini hatırla: Kırmızı, Turuncu, Sarı, Yeşil, Mavi, Lacivert ve Menekşe moru!',
      funFacts: [
        'Bir uçaktan veya yüksek bir dağdan baktığınızda, gökkuşağının aslında tam bir çember olduğunu görebilirsiniz!',
        'Hiçbir zaman iki kişi aynı gökkuşağına bakmaz; çünkü herkes farklı yağmur damlalarının açısından bakar.',
        'Bazen ilk gökkuşağının üzerinde renkleri ters sıralanmış ikinci bir gökkuşağı belirir!'
      ]
    },
    ru: {
      name: 'Яркая радуга',
      category: 'Природное явление',
      soundLabel: 'Призматический звон',
      description: 'Радуга вспыхивает, когда солнечный свет проходит сквозь миллионы дождевых капель, расщепляясь на 7 чистых спектральных цветов.',
      kidWonder: 'Вспомни считалочку: Каждый Охотник Желает Знать, Где Сидит Фазан (красный, оранжевый, желтый, зеленый, голубой, синий, фиолетовый)!',
      funFacts: [
        'С борта самолета или вершины горы видно, что радуга на самом деле образует идеальный полный круг!',
        'Два человека никогда не видят абсолютно одинаковую радугу, ведь каждый смотрит через свой набор капель дождя.',
        'Иногда в небе можно увидеть двойную радугу, причем у верхней дуги цвета идут в обратном порядке!'
      ]
    },
    en: {
      name: 'Vibrant Rainbows',
      category: 'Natural Phenomenon',
      soundLabel: 'Prismatic Chime',
      description: 'Rainbows appear when golden sunshine shines through thousands of falling raindrops, splitting pure white light into a rainbow arc of 7 colors.',
      kidWonder: 'Remember the magic color song: Red, Orange, Yellow, Green, Blue, Indigo, Violet (ROY G. BIV)!',
      funFacts: [
        'From an airplane or high mountain, you can see that a rainbow is actually a complete, full circle in the sky!',
        'No two people ever see the exact same rainbow, because you are looking through a slightly different set of raindrops than anyone else.',
        'Sometimes you can see a second, fainter rainbow above the first one, with the colors reversed!'
      ]
    }
  },

  lightning: {
    az: {
      name: 'İldırım və Şimşək',
      category: 'Təbiət Hadisəsi',
      soundLabel: 'Göy Gurultusu və Şimşək Şaqqıltısı',
      description: 'İldırım təbiətin nəhəng elektrik qığılcımıdır! Fırtına buludlarında buz kristalları toqquşaraq güclü elektrik toplayır və gözqamaşdırıcı şimşək çaxır.',
      kidWonder: 'Göy gurultusu qızmar havanın ani partlayış səsidir! İldırım Günəşin səthindən beş dəfə daha istidir!',
      funFacts: [
        'İşıq səsdən daha sürətlə hərəkət edir. İşıq çaxması ilə göy gurultusu arasındakı saniyələri say: hər 3 saniyə fırtınanın 1 km uzaqda olduğunu göstərir.',
        'Tək bir ildırım çaxması 100 000 dilim çörəyi qızartmağa bəs edəcək qədər nəhəng elektrik enerjisinə malikdir!',
        'Yer kürəsində hər gün 8 milyondan çox ildırım çaxır.'
      ]
    },
    tr: {
      name: 'Şimşek ve Gök Gürültüsü',
      category: 'Doğa Olayı',
      soundLabel: 'Gök Gürültüsü Uğultusu',
      description: 'Şimşek doğanın dev elektrik kıvılcımıdır! Fırtına bulutlarındaki buz kristalleri sürtünerek elektrik üretir ve göz kamaştırıcı yıldırım çakar.',
      kidWonder: 'Gök gürültüsü havanın ısıyla aniden patlamasının sesidir! Yıldırım, Güneş’in yüzeyinden beş kat daha sıcaktır!',
      funFacts: [
        'Işık sesten hızlıdır. Şimşek ile gök gürültüsü arasındaki saniyeleri sayın: her 3 saniye fırtınanın 1 kilometre uzakta olduğunu gösterir.',
        'Tek bir yıldırım darbesi 100.000 dilim ekmeği kızartacak kadar elektrik enerjisi taşır!',
        'Dünya üzerinde her gün 8 milyondan fazla şimşek çakar.'
      ]
    },
    ru: {
      name: 'Молния и гром',
      category: 'Природное явление',
      soundLabel: 'Раскаты грома',
      description: 'Молния — исполинская электрическая искра природы! Льдинки сталкиваются внутри грозовых туч, накапливая заряд до ослепительной вспышки.',
      kidWonder: 'Гром — это звук взрывающегося от мгновенного жара воздуха! Молния в пять раз горячее поверхности Солнца!',
      funFacts: [
        'Свет летит быстрее звука: сосчитайте секунды между вспышкой и ударом грома — каждые 3 секунды означают 1 км до грозы.',
        'Энергии одной молнии хватило бы, чтобы поджарить 100 000 тостов!',
        'Каждый день на Земле сверкает свыше 8 миллионов ударов молний.'
      ]
    },
    en: {
      name: 'Lightning & Thunder',
      category: 'Natural Phenomenon',
      soundLabel: 'Thunder Rumble',
      description: 'Lightning is nature’s giant electric spark! Ice crystals bump inside storm clouds, building up static electricity until a brilliant bolt zaps.',
      kidWonder: 'Thunder is the sound of air exploding with heat! Lightning is five times hotter than the surface of the Sun!',
      funFacts: [
        'Light travels faster than sound. Count the seconds between the flash and thunder boom: every 3 seconds means the storm is 1 kilometer away.',
        'A single bolt of lightning contains enough electrical energy to toast 100,000 slices of bread!',
        'Earth experiences over 8 million lightning strikes every single day.'
      ]
    }
  },

  volcano: {
    az: {
      name: 'Odlu Vulkanlar',
      category: 'Təbiət Hadisəsi',
      soundLabel: 'Qaynar Maqma Gurultusu',
      description: 'Vulkanlar Yerin alovlu daxili dünyasına açılan pəncərəsi olan dağlardır. Yerin dərinliyində ərimiş qızmar qaya kütləsi — maqma qaynayır.',
      kidWonder: 'Ərimiş qaya yerin altında olanda ona Maqma deyilir. O, yer səthinə püskürəndə isə Lava adlanır!',
      funFacts: [
        'Havay adaları milyonlarla il ərzində sualtı vulkan püskürmələri nəticəsində yaranmışdır.',
        'Vulkan külü zəngin minerallarla doludur və ətrafdakı torpağı meyvə-tərəvəz yetişdirmək üçün çox bərəkətli edir.',
        'Günəş sisteminin ən hündür vulkanı Mars planetindəki Olimp dağıdır — o, Everest zirvəsindən üç dəfə hündürdür!'
      ]
    },
    tr: {
      name: 'Ateşli Volkanlar',
      category: 'Doğa Olayı',
      soundLabel: 'Magma Odası Uğultusu',
      description: 'Volkanlar, Dünya’nın ateşli iç çekirdeğine açılan pencerelerdir. Yerin derinliklerinde erimiş kızgın kaya kütlesi magma kaynar.',
      kidWonder: 'Erimiş kaya yerin altındayken Magma, yeryüzüne fışkırdığında ise Lav adını alır!',
      funFacts: [
        'Hawaii adaları milyonlarca yıl süren sualtı volkanik patlamalarıyla oluşmuştur.',
        'Volkanik kül zengin mineraller içerir ve toprağı tarım için olağanüstü verimli hale getirir.',
        'Güneş Sistemi’nin en yüksek volkanı Mars’taki Olympus Dağı’dır; Everest’ten üç kat daha yüksektir!'
      ]
    },
    ru: {
      name: 'Огненные вулканы',
      category: 'Природное явление',
      soundLabel: 'Гул магматического очага',
      description: 'Вулканы — это горы с жерлом, ведущим в огненные недра Земли, где бурлит расплавленная порода — магма.',
      kidWonder: 'Под землей жидкий камень называют магмой, а когда он изливается на поверхность, его зовут лавой!',
      funFacts: [
        'Гавайские острова полностью сформировались благодаря подводным извержениям за миллионы лет.',
        'Вулканический пепел богат микроэлементами, делая окружающие почвы невероятно плодородными.',
        'Крупнейший вулкан в Солнечной системе — гора Олимп на Марсе, которая в три раза выше Эвереста!'
      ]
    },
    en: {
      name: 'Fiery Volcanoes',
      category: 'Natural Phenomenon',
      soundLabel: 'Magma Chamber Rumble',
      description: 'Volcanoes are mountains with an opening down to Earth’s fiery interior. Deep beneath the crust, melted liquid rock called magma bubbles up.',
      kidWonder: 'When liquid rock is under the ground, it is called Magma. When it erupts into the open air, it is called Lava!',
      funFacts: [
        'The Hawaiian islands were formed entirely by underwater volcanic eruptions over millions of years.',
        'Volcanic ash is packed with rich minerals that make the surrounding soil super fertile for farming fruits and vegetables.',
        'The biggest volcano in the solar system is Olympus Mons on Mars — three times higher than Mount Everest!'
      ]
    }
  },

  tides: {
    az: {
      name: 'Okean Qabarma və Çəkilmələri',
      category: 'Təbiət Hadisəsi',
      soundLabel: 'Qabarma Dalğasının Ahəngi',
      description: 'Hər gün iki dəfə okean suları sahillərə doğru qalxır (qabarma) və sonra tədricən dənizə geri çəkilir (çəkilmə).',
      kidWonder: 'Ay Yer kürəsinin suları ilə kəndir dartma oyunu oynayır! Ayın cazibə qüvvəsi okean sularını zərifcə özünə doğru çəkir.',
      funFacts: [
        'Kanadadakı Fandi körfəzində dünyanın ən hündür qabarması baş verir — su bir neçə saata 16 metr (4 mərtəbəli bina boyda) yüksəlir!',
        'Su çəkiləndə qumda dəniz ulduzları, xərçənglər və balıqqulaqları ilə dolu kəşf gölməçələri qalır.',
        'Günəşin cazibəsi də qabarmaya təsir edir: Günəş və Ay eyni xətdə olanda ən güclü qabarma baş verir.'
      ]
    },
    tr: {
      name: 'Okyanus Gelgitleri (Medcezir)',
      category: 'Doğa Olayı',
      soundLabel: 'Gelgit Dalgası Kabarması',
      description: 'Her gün iki kez okyanus suları kumsallara doğru yükselir (kabarma) ve ardından yavaşça denize geri çekilir (çekilme).',
      kidWonder: 'Ay, Dünya’nın sularıyla halat çekme oyunu oynuyor! Ay’ın kütleçekimi okyanus sularını nazikçe kendine doğru çeker.',
      funFacts: [
        'Kanada’daki Fundy Körfezi’nde dünyanın en yüksek gelgiti yaşanır; sular 4 katlı bina yüksekliğine (16 metre) ulaşabilir!',
        'Sular çekildiğinde sahilde deniz yıldızları, yengeçler ve anemonlarla dolu keşif havuzları kalır.',
        'Güneş ile Ay aynı hizaya geldiğinde gelgitler en yüksek seviyeye ulaşır.'
      ]
    },
    ru: {
      name: 'Океанские приливы и отливы',
      category: 'Природное явление',
      soundLabel: 'Всплеск приливной волны',
      description: 'Дважды в день океанские воды накатывают на берег (прилив), а затем плавно отступают обратно в море (отлив).',
      kidWonder: 'Луна играет с океанами Земли в перетягивание каната! Гравитация Луны бережно притягивает к себе толщу воды.',
      funFacts: [
        'В заливе Фанди в Канаде наблюдаются самые высокие приливы в мире — уровень воды поднимается на 16 метров (высота 4-этажного дома)!',
        'Во время отлива на берегу остаются мелкие лагуны с морскими звездами, крабами и актиниями.',
        'Гравитация Солнца тоже влияет на приливы: когда Солнце и Луна на одной линии, приливы достигают максимальной силы.'
      ]
    },
    en: {
      name: 'Ocean Tides',
      category: 'Natural Phenomenon',
      soundLabel: 'Tidal Wave Swell',
      description: 'Twice every day, the ocean waters rise up onto sandy beaches (high tide) and then slowly pull back into the sea (low tide).',
      kidWonder: 'The Moon is playing tug-of-war with Earth’s water! The Moon’s gravity gently pulls ocean water towards itself.',
      funFacts: [
        'The Bay of Fundy in Canada has the highest tides in the world — water can rise 16 meters (the height of a 4-story building) in a few hours!',
        'When the tide goes out, it leaves behind tide pools filled with starfish, crabs, and sea anemones for kids to discover.',
        'Sun gravity also pulls on tides: when Sun and Moon line up, we get extra high "Spring Tides".'
      ]
    }
  },

  'shooting-star': {
    az: {
      name: 'Axan Ulduzlar (Meteorlar)',
      category: 'Kosmik Hadisə',
      soundLabel: 'Meteorun Səmada Süzülüşü',
      description: 'Axan ulduzlar əslində ulduz deyil! Onlar Yer atmosferinə daxil olarkən böyük sürətlə alışıb parıldayan xırda kosmik toz və qaya parçalarıdır.',
      kidWonder: 'Tez bir arzu tutun! Gecə səmasından parıldayaraq keçən əksər axan ulduzlar adi bir qum dənəsindən böyük deyil!',
      funFacts: [
        'Yer kürəsi kometlərin qoyub getdiyi toz zolağından keçəndə hər saatda onlarla axan ulduz görünən meteor yağışları baş verir.',
        'Meteorlar atmosferimizə saniyədə 70 kilometrədək (saatda 250 000 km-dən çox) inanılmaz sürətlə daxil olurlar!',
        'Əgər kosmik daş bu alovlu yolu keçərək sağ qalıb yerə düşərsə, ona "Meteorit" deyilir.'
      ]
    },
    tr: {
      name: 'Kayan Yıldızlar (Meteorlar)',
      category: 'Kozmik Olay',
      soundLabel: 'Meteor Rüzgarı',
      description: 'Kayan yıldızlar aslında yıldız değildir! Dünya atmosferine girip sürtünmeyle parıldayan minik uzay tozu ve kaya parçacıklarıdır.',
      kidWonder: 'Hemen bir dilek tutun! Gökyüzünde parıldayan çoğu kayan yıldız kum tanesinden daha büyük değildir!',
      funFacts: [
        'Dünya, kuyrukluyıldızların ardında bıraktığı toz bulutlarından geçerken saatte onlarca kayan yıldızın görüldüğü meteor yağmurları oluşur.',
        'Meteorlar atmosferimize saniyede 70 kilometreye (saatte 250.000 km) varan baş döndürücü bir hızla girerler!',
        'Ateşli yolculuğu aşıp yere ulaşan uzay taşlarına "Meteorit" (göktaşı) denir.'
      ]
    },
    ru: {
      name: 'Падающие звезды (Метеоры)',
      category: 'Космическое явление',
      soundLabel: 'Росчерк падающего метеора',
      description: 'Падающие звезды вовсе не звезды! Это крошечные пылинки и камешки из глубин космоса, вспыхивающие при входе в атмосферу Земли.',
      kidWonder: 'Скорее загадывайте желание! Большинство сияющих метеоров размером не больше обычной песчинки!',
      funFacts: [
        'Когда Земля проходит через шлейф кометной пыли, мы любуемся метеорным дождем с десятками звезд в час.',
        'Метеоры влетают в атмосферу на колоссальной скорости до 70 километров в секунду (более 250 000 км/ч)!',
        'Если космический камень не сгорел дотла и упал на поверхность Земли, его называют метеоритом.'
      ]
    },
    en: {
      name: 'Shooting Stars (Meteors)',
      category: 'Cosmic Phenomenon',
      soundLabel: 'Meteor Streak Whoosh',
      description: 'Shooting stars aren’t real stars at all! They are tiny bits of space dust or rock that burn up brightly as they enter Earth’s atmosphere.',
      kidWonder: 'Make a wish! Most shooting stars that streak across the night sky are no bigger than a single grain of sand or pebble!',
      funFacts: [
        'When Earth passes through dust trails left by comets, we see meteor showers with dozens of shooting stars every hour.',
        'Meteors enter our atmosphere traveling at up to 70 kilometers per second (over 250,000 km/h)!',
        'If a space rock survives the fiery trip and lands on the ground, it is called a "Meteorite".'
      ]
    }
  }
};

// -------------------------------------------------------------
// SHAPES TRANSLATIONS
// -------------------------------------------------------------
export const SHAPES_DATA_TRANSLATIONS: Record<string, Record<Language, Partial<LocalizedShape>>> = {
  triangle: {
    az: {
      name: 'Üçbucaq',
      description: '3 düz tərəfi və 3 iti bucağı (təpəsi) olan müstəvi 2D fiqur. Memarlıqda ən möhkəm fiqurdur!',
      funFact: 'Mühəndislər nəhəng körpüləri və hündür qüllələri tikərkən üçbucaqlardan istifadə edirlər!',
      realWorldExamples: [
        { label: 'Pizza Dilimi', hint: 'Dairəvi pizzadan kəsilmiş dadlı üçbucaq dilim!' },
        { label: 'Ad Günü Papağı', hint: 'Şənliklərdə başa qoyulan konusvari papaq!' },
        { label: 'Ev Damı', hint: 'Maili tərəflər yağış və qarın asanlıqla axıb getməsinə kömək edir!' }
      ]
    },
    tr: {
      name: 'Üçgen',
      description: '3 düz kenarı ve 3 köşesi olan düzlem şekil. Mimarlıkta en dayanıklı ve güçlü şekildir!',
      funFact: 'Mühendisler dev köprüleri ve yüksek kuleleri inşa ederken üçgenleri kullanırlar!',
      realWorldExamples: [
        { label: 'Pizza Dilimi', hint: 'Yuvarlak bir pizzadan kesilen lezzetli üçgen dilim!' },
        { label: 'Parti Şapkası', hint: 'Doğum günlerinde başa takılan neşeli külah!' },
        { label: 'Ev Çatısı', hint: 'Eğik kenarlar yağmur ve karın kolayca kaymasını sağlar!' }
      ]
    },
    ru: {
      name: 'Треугольник',
      description: 'Плоская фигура с 3 прямыми сторонами и 3 углами-вершинами. Самая прочная форма в инженерии!',
      funFact: 'Инженеры строят мосты и башни из треугольников, потому что эта фигура не деформируется под нагрузкой!',
      realWorldExamples: [
        { label: 'Кусочек пиццы', hint: 'Аппетитный треугольный ломтик круглой пиццы!' },
        { label: 'Праздничный колпак', hint: 'Веселый колпачок для дня рождения!' },
        { label: 'Крыша дома', hint: 'Наклонные скаты помогают дождю и снегу легко стекать вниз!' }
      ]
    },
    en: {
      name: 'Triangle',
      description: 'A 2D flat shape with 3 straight sides and 3 sharp corners (vertices). The word "tri" means three!',
      funFact: 'Triangles are the strongest shape in architecture — engineers use them to build massive bridges and tall towers!',
      realWorldExamples: [
        { label: 'Slice of Pizza', hint: 'A yummy triangular slice from a round pizza pie!' },
        { label: 'Party Hat', hint: 'Worn on your head at birthday celebrations!' },
        { label: 'House Roof', hint: 'Slanted sides help rain and snow slide down easily!' }
      ]
    }
  },

  square: {
    az: {
      name: 'Kvadrat (Dördbucaqlı)',
      description: 'Bütün 4 tərəfi bir-birinə tam bərabər olan və 4 düz bucağı olan xüsusi dördbucaqlı.',
      funFact: 'Hər bir kvadrat eyni zamanda həm düzbucaqlıdır, həm də rombdur!',
      realWorldExamples: [
        { label: 'Şahmat Taxtası Xanası', hint: 'Fiqurlar üçün ağ və qara kvadratlar!' },
        { label: 'Qeyd Kağızı (Stiker)', hint: 'Xoş qeydlər yazmaq üçün kvadrat vərəq!' },
        { label: 'Kvadrat Pəncərə', hint: 'Otağımıza günəş işığı gətirir!' }
      ]
    },
    tr: {
      name: 'Kare (Dörtgen)',
      description: 'Tüm 4 kenarı birbirine eşit ve 4 dik açısı olan özel bir dörtgen.',
      funFact: 'Her kare aynı zamanda bir dikdörtgen ve eşkenar dörtgendir!',
      realWorldExamples: [
        { label: 'Satranç Tahtası Karesi', hint: 'Piyon ve atlar için siyah-beyaz kareler!' },
        { label: 'Yapışkan Not Kağıdı', hint: 'Notlar yazmak için kare renkli kağıt!' },
        { label: 'Kare Pencere', hint: 'Odamıza sıcacık güneş ışığı doldurur!' }
      ]
    },
    ru: {
      name: 'Квадрат (Четырехугольник)',
      description: 'Особый четырехугольник, у которого все 4 стороны точно равны по длине, а все 4 угла — прямые.',
      funFact: 'Каждый квадрат одновременно является и прямоугольником, и ромбом!',
      realWorldExamples: [
        { label: 'Клетка шахматной доски', hint: 'Черно-белые квадраты для пешек и ферзя!' },
        { label: 'Квадратный стикер', hint: 'Листик бумаги для добрых напоминаний!' },
        { label: 'Окно в комнате', hint: 'Впускает в дом солнечные лучи!' }
      ]
    },
    en: {
      name: 'Square (Quadrilateral)',
      description: 'A special quadrilateral with 4 straight sides that are all exactly equal in length, and 4 right-angle corners.',
      funFact: 'Every square is also a rectangle and a rhombus, but not every rectangle is a square!',
      realWorldExamples: [
        { label: 'Chess Board Tile', hint: 'Black and white square squares for knight and queen!' },
        { label: 'Sticky Note Pad', hint: 'Square paper for writing cheerful reminder notes!' },
        { label: 'Square Window', hint: 'Lets warm sunshine into your bedroom!' }
      ]
    }
  },

  cube: {
    az: {
      name: 'Kub (3D Fiqur)',
      description: 'Hər biri kvadrat olan 6 bərabər üzü, 12 tili və 8 təpəsi olan fəza fiquru.',
      funFact: 'Rubik kubikinin 43 kvintilyondan çox müxtəlif vəziyyəti var!',
      realWorldExamples: [
        { label: 'Oyun Zəri', hint: 'Masaüstü oyunlarda atılan 6 üzlü xallı zər!' },
        { label: 'Buz Kubiki', hint: 'İçkini sərinləşdirən soyuq kub!' },
        { label: 'Qutu / Bağlama', hint: 'Hədiyyə qoymaq üçün kub formasında qutu!' }
      ]
    },
    tr: {
      name: 'Küp (3D Şekil)',
      description: 'Her biri eşit kare olan 6 yüze, 12 ayrıta ve 8 köşeye sahip üç boyutlu katı cisim.',
      funFact: 'Zeka küpünün (Rubik) 43 kentilyondan fazla farklı konfigürasyonu vardır!',
      realWorldExamples: [
        { label: 'Oyun Zarı', hint: 'Kutu oyunlarında atılan noktalı zar!' },
        { label: 'Buz Küpü', hint: 'Limonatayı serinleten şeffaf buz parçası!' },
        { label: 'Hediye Kutusu', hint: 'İçinde sürprizler saklayan küp kutu!' }
      ]
    },
    ru: {
      name: 'Куб (3D фигура)',
      description: 'Объемное тело с 6 равными квадратными гранями, 12 ребрами и 8 вершинами.',
      funFact: 'У кубика Рубика существует более 43 квинтиллионов различных комбинаций!',
      realWorldExamples: [
        { label: 'Игральный кубик', hint: 'Кубик с точками для настольных игр!' },
        { label: 'Кубик льда', hint: 'Звонкий кусочек льда в стакане лимонада!' },
        { label: 'Подарочная коробка', hint: 'Кубическая коробка с красивым бантом!' }
      ]
    },
    en: {
      name: 'Cube (3D Solid)',
      description: 'A 3D solid shape with 6 identical square faces, 12 straight edges, and 8 vertices.',
      funFact: 'A standard Rubik’s cube has over 43 quintillion possible combinations!',
      realWorldExamples: [
        { label: 'Game Die', hint: 'Numbered with dots 1 to 6 for board games!' },
        { label: 'Ice Cube', hint: 'Keeps lemonade cold and refreshing!' },
        { label: 'Cardboard Box', hint: 'Holds toys and packages safely!' }
      ]
    }
  },

  rectangle: {
    az: {
      name: 'Düzbucaqlı (Dördbucaqlı)',
      description: '4 düz tərəfi və 4 düz bucağı olan dördbucaqlı. Qarşı tərəfləri bir-birinə paralel və bərabərdir.',
      funFact: 'Otaq qapıları, kompüter ekranları, kitablar və kağız pullar demək olar ki, həmişə düzbucaqlı formasında olur!',
      realWorldExamples: [
        { label: 'Otaq Qapısı', hint: 'Dostları içəri dəvət etmək üçün açılan hündür düzbucaqlı qapı!' },
        { label: 'Şokolad Plitkası', hint: 'Balaca kvadratlara bölünən şirin düzbucaqlı şokolad!' },
        { label: 'Sevimli Kitab', hint: 'Nağıllar və macəralarla dolu düzbucaqlı kitab!' },
        { label: 'Smartfon / Planşet', hint: 'Oyun oynamaq və öyrənmək üçün cib boyda düzbucaqlı ekran!' }
      ]
    },
    tr: {
      name: 'Dikdörtgen (Dörtgen)',
      description: '4 düz kenarı ve 4 dik açısı olan bir dörtgen. Karşılıklı kenarları birbirine paralel ve eşittir.',
      funFact: 'Sınıf kapıları, bilgisayar ekranları, kitaplar ve kağıt paralar neredeyse her zaman dikdörtgendir!',
      realWorldExamples: [
        { label: 'Giriş Kapısı', hint: 'Arkadaşlarını içeri buyur etmek için açılan uzun kapı!' },
        { label: 'Çikolata Tableti', hint: 'Daha küçük karelere bölünen lezzetli dikdörtgen çikolata!' },
        { label: 'En Sevilen Kitap', hint: 'Uyku öncesi masallarıyla dolu dikdörtgen sayfalar!' },
        { label: 'Akıllı Telefon', hint: 'Oyun ve öğrenme dolu cep boy dikdörtgen ekran!' }
      ]
    },
    ru: {
      name: 'Прямоугольник (Четырехугольник)',
      description: 'Четырехугольник с 4 прямыми сторонами и 4 прямыми углами. Противоположные стороны параллельны и равны.',
      funFact: 'Двери в комнаты, экраны компьютеров, книги и купюры почти всегда имеют форму прямоугольника!',
      realWorldExamples: [
        { label: 'Входная дверь', hint: 'Высокая дверь, которая открывается навстречу друзьям!' },
        { label: 'Плитка шоколада', hint: 'Сладкое лакомство, разделенное на ровные дольки!' },
        { label: 'Любимая книжка', hint: 'Страницы со сказками и увлекательными историями!' },
        { label: 'Смартфон / Планшет', hint: 'Карманный прямоугольный экран для игр и учебы!' }
      ]
    },
    en: {
      name: 'Rectangle (Quadrilateral)',
      description: 'A quadrilateral with 4 straight sides and 4 right corners. Opposite sides are parallel and equal in length.',
      funFact: 'Your classroom doors, computer screens, books, and dollar bills are almost always rectangles!',
      realWorldExamples: [
        { label: 'Front Door', hint: 'A tall rectangle that swings open to welcome friends!' },
        { label: 'Chocolate Bar', hint: 'Sweet rectangular treat broken into smaller squares!' },
        { label: 'Favorite Book', hint: 'Pages filled with bedtime stories and adventures!' },
        { label: 'Smartphone / Tablet', hint: 'A pocket-sized rectangular screen for games and learning!' }
      ]
    }
  },

  rhombus: {
    az: {
      name: 'Romb / Almaz (Dördbucaqlı)',
      description: 'Bütün 4 tərəfi bərabər olan, qarşı bucaqları bir-birinə bərabər olan mailli dördbucaqlı. Parıldayan almaz kimi görünür!',
      funFact: 'Küləkli gündə havaya çərpələng uçuranda, səmada əsl aerodinamik romb süzür!',
      realWorldExamples: [
        { label: 'Uçan Çərpələng', hint: 'Küləkli gündə parkın üstündə süzən rəngli çərpələng!' },
        { label: 'Kərpic Xalı (Karo)', hint: 'Kart oyunlarında qırmızı almaz simvolu!' },
        { label: 'Yol Xəbərdarlıq Nişanı', hint: 'Sürücülərə sürəti azaltmağı xəbərdar edən sarı romb nişan!' },
        { label: 'Toxunma Xalça Naxışı', hint: 'Qədim xalçalarda toxunmuş gözəl romb naxışları!' }
      ]
    },
    tr: {
      name: 'Eşkenar Dörtgen / Baklava',
      description: '4 kenarı birbirine eşit, karşılıklı açıları eşit eğik bir dörtgen. Parlayan bir elmas gibidir!',
      funFact: 'Rüzgarlı bir günde uçurtma uçurduğunuzda gökyüzünde aerodinamik bir eşkenar dörtgen süzülür!',
      realWorldExamples: [
        { label: 'Uçan Uçurtma', hint: 'Rüzgarlı bir günde parkın üstünde süzülen renkli uçurtma!' },
        { label: 'Karo Sembolü', hint: 'Kart oyunlarında kırmızı elmas biçimli karo sembolü!' },
        { label: 'Trafik Uyarı Levhası', hint: 'Sürücüleri dikkatli olmaya çağıran sarı baklava levha!' },
        { label: 'Halı Baklava Deseni', hint: 'Geleneksel motiflerde örülmüş şık baklava deseni!' }
      ]
    },
    ru: {
      name: 'Ромб / Алмаз (Четырехугольник)',
      description: 'Четырехугольник с 4 равными сторонами и попарно равными углами. Напоминает сверкающий драгоценный камень!',
      funFact: 'Запуская в ветреный день воздушного змея, вы любуетесь полетом настоящего ромба!',
      realWorldExamples: [
        { label: 'Воздушный змей', hint: 'Парит высоко над парком в ветреный денек!' },
        { label: 'Бубновый знак (Бубны)', hint: 'Красный значок в форме ромбика в карточных играх!' },
        { label: 'Дорожный знак внимания', hint: 'Желтый ромбовидный знак, предупреждающий водителей!' },
        { label: 'Ромбовидный узор', hint: 'Уютный вязаный или тканый орнамент на ковре!' }
      ]
    },
    en: {
      name: 'Rhombus / Diamond (Quadrilateral)',
      description: 'A quadrilateral with 4 equal sides, tilted so its opposite angles are equal. Often called a sparkling diamond!',
      funFact: 'When you fly a diamond kite high on a breezy day, you are flying a true aerodynamic rhombus!',
      realWorldExamples: [
        { label: 'Flying Kite', hint: 'Soaring high above the park on a windy afternoon!' },
        { label: 'Playing Card Diamond', hint: 'The red diamond suit on classic card games!' },
        { label: 'Road Warning Sign', hint: 'Yellow diamond sign warning drivers to slow down!' },
        { label: 'Argyle Sweater Pattern', hint: 'Cozy knitted diamond crisscross patterns!' }
      ]
    }
  },

  trapezoid: {
    az: {
      name: 'Trapeziya (Dördbucaqlı)',
      description: 'Yalnız iki qarşı tərəfi bir-birinə paralel olan 4 tərəfli dördbucaqlı (qısa üst tərəf və enli alt oturacaq).',
      funFact: 'Bir çox gül dibçəkləri və körpü dayaqları möhkəm trapeziya formasındadır ki, aşmasınlar!',
      realWorldExamples: [
        { label: 'Gül Dibçəyi', hint: 'Üstü enli dibçək ki, bitkinin yarpaqları rahat böyüsün!' },
        { label: 'Popkorn Qabı', hint: 'Kinoteatrlarda dadlı popkorn qoyulan trapeziya qab!' },
        { label: 'Körpü Dayağı', hint: 'Qatar və maşınları saxlayan güclü polad körpü konstruksiyası!' },
        { label: 'Qadın Çantası', hint: 'Enli və möhkəm oturacağı olan zərif çanta!' }
      ]
    },
    tr: {
      name: 'Yamuk (Dörtgen)',
      description: 'Sadece iki karşılıklı kenarı birbirine paralel olan 4 kenarlı bir dörtgen (kısa üst kenar ve geniş alt taban).',
      funFact: 'Birçok saksı ve köprü ayağı, devrilmemesi için sağlam yamuk formunda tasarlanır!',
      realWorldExamples: [
        { label: 'Çiçek Saksısı', hint: 'Yaprakların rahatça büyümesi için üstü geniş saksı!' },
        { label: 'Mısır Kovası', hint: 'Sinemada çıtır çıtır patlamış mısır koyulan kova!' },
        { label: 'Köprü Çeliği', hint: 'Ağır trenleri taşıyan sağlam çelik kirişler!' },
        { label: 'El Çantası', hint: 'Tabanı geniş ve dengeli duran şık çanta!' }
      ]
    },
    ru: {
      name: 'Трапеция (Четырехугольник)',
      description: 'Четырехугольник, у которого только две противоположные стороны параллельны (верхнее и нижнее основания).',
      funFact: 'Многие цветочные горшки и опоры мостов имеют форму трапеции, чтобы надежно стоять и не опрокидываться!',
      realWorldExamples: [
        { label: 'Цветочный горшок', hint: 'Расширяется кверху, чтобы корням и листьям было просторно!' },
        { label: 'Ведерко с попкорном', hint: 'Удобный бумажный стаканчик с хрустящим лакомством!' },
        { label: 'Опора моста', hint: 'Прочные балки, держащие автомобили и поезда!' },
        { label: 'Сумочка', hint: 'Удобная сумка с устойчивым широким донышком!' }
      ]
    },
    en: {
      name: 'Trapezoid (Quadrilateral)',
      description: 'A 4-sided quadrilateral with only one pair of parallel sides (a shorter top side and a wider bottom base).',
      funFact: 'Many flower pots, popcorn buckets, and bridge trusses have a sturdy trapezoid shape so they do not tip over!',
      realWorldExamples: [
        { label: 'Garden Flower Pot', hint: 'Wider at the top so plant leaves have plenty of space!' },
        { label: 'Popcorn Bucket', hint: 'Crisp buttery movie snack container!' },
        { label: 'Bridge Truss', hint: 'Sturdy steel beams holding up heavy cars and trains!' },
        { label: 'Handbag Purse', hint: 'Cute accessory with a wide sturdy base!' }
      ]
    }
  },

  circle: {
    az: {
      name: 'Dairə',
      description: 'Düz tərəfi və iti küncü olmayan tam yumru müstəvi 2D fiqur! Kənarındakı hər bir nöqtə mərkəzdən eyni məsafədədir.',
      funFact: 'Təkər bəşəriyyətin ən böyük kəşflərindən biridir və o, mükəmməl bir dairədir!',
      realWorldExamples: [
        { label: 'Velosiped Təkəri', hint: 'Rahat və sürətlə fırlanaraq irəliləməyə kömək edir!' },
        { label: 'Divar Saatı', hint: 'Əqrəbləri fırlanaraq dərs və oyun vaxtını göstərir!' },
        { label: 'Təzə Bişmiş Qoğal / Peçenye', hint: 'Şokoladlı və ləzzətli yumru şirniyyat!' },
        { label: 'Parlaq Sikkə', hint: 'Qumbara içində cingildəyən yumru metal qəpik!' }
      ]
    },
    tr: {
      name: 'Daire / Çember',
      description: 'Düz kenarı veya köşesi olmayan kusursuz yuvarlak düzlem şekil! Kenarındaki tüm noktalar merkeze eşit uzaklıktadır.',
      funFact: 'Tekerlek insanlık tarihinin en büyük icatlarından biridir ve tam bir dairedir!',
      realWorldExamples: [
        { label: 'Bisiklet Tekerleği', hint: 'Dönerek yolda hızlıca ilerlemeni sağlar!' },
        { label: 'Duvar Saati', hint: 'Dönen kollarıyla oyun ve dinlenme zamanını haber verir!' },
        { label: 'Çikolatalı Kurabiye', hint: 'Fırından yeni çıkmış nefis yuvarlak kurabiye!' },
        { label: 'Parlak Madeni Para', hint: 'Kumbaranda şıngırdayan yuvarlak metal para!' }
      ]
    },
    ru: {
      name: 'Круг / Окружность',
      description: 'Идеально круглая плоская фигура без прямых сторон и углов! Каждая точка границы находится на одинаковом расстоянии от центра.',
      funFact: 'Колесо считается одним из величайших изобретений человечества — и это совершенный круг!',
      realWorldExamples: [
        { label: 'Колесо велосипеда', hint: 'Плавно крутится, чтобы мчать по дорожке!' },
        { label: 'Настенные часы', hint: 'Стрелки бегут по кругу, показывая время обеда и сна!' },
        { label: 'Круглое печенье', hint: 'Хрустящее лакомство с шоколадными каплями!' },
        { label: 'Блестящая монетка', hint: 'Круглая звонкая монетка в детской копилке!' }
      ]
    },
    en: {
      name: 'Circle',
      description: 'A perfectly round 2D shape with no straight sides and no sharp corners! Every point on the edge is the exact same distance from the center.',
      funFact: 'The wheel is considered one of humankind’s greatest inventions — and it is a pure circle!',
      realWorldExamples: [
        { label: 'Bicycle Wheel', hint: 'Spins smoothly so you can zoom down the sidewalk!' },
        { label: 'Wall Clock', hint: 'Ticking hands tell you when it’s playtime and lunchtime!' },
        { label: 'Fresh Baked Cookie', hint: 'Delicious round treat with chocolate chips!' },
        { label: 'Shiny Coin', hint: 'Round metallic money jingling in your piggy bank!' }
      ]
    }
  },

  pentagon: {
    az: {
      name: 'Beşbucaqlı',
      description: '5 düz tərəfi və 5 küncü (təpəsi) olan müstəvi çoxbucaqlı. "Penta" sözü qədim dildə beş deməkdir!',
      funFact: 'Klassik futbol topunun qara ləkələri ağ altıbucaqlılarla əhatə olunmuş beşbucaqlılardır!',
      realWorldExamples: [
        { label: 'Futbol Topunun Qara Xanası', hint: 'Topun formalaşması üçün tikilən qara dərili beşbucaqlı!' },
        { label: 'Məktəbli Keçidi Nişanı', hint: 'Uşaqların təhlükəsiz keçməsini göstərən 5 tərəfli yol nişanı!' },
        { label: 'Quş Yuvası Evi', hint: 'Üçbucaq damı və 4 divarı olan sevimli taxta quş evi!' }
      ]
    },
    tr: {
      name: 'Beşgen',
      description: '5 düz kenarı ve 5 köşesi olan çokgen. "Penta" kelimesi beş anlamına gelir!',
      funFact: 'Klasik futbol toplarının üzerindeki siyah desenler birer beşgendir!',
      realWorldExamples: [
        { label: 'Futbol Topu Parçası', hint: 'Topun yuvarlak formunu oluşturan siyah beşgen parçalar!' },
        { label: 'Okul Geçidi Tabelası', hint: 'Çocukların güvenle karşıya geçmesini gösteren 5 kenarlı tabela!' },
        { label: 'Kuş Yuvası', hint: 'Sivri çatısı ve duvarlarıyla tatlı ahşap kuş evi!' }
      ]
    },
    ru: {
      name: 'Пятиугольник',
      description: 'Плоский многоугольник с 5 прямыми сторонами и 5 вершинами. Греческое слово «пента» означает пять!',
      funFact: 'Черные вставки на классическом футбольном мяче — это правильные пятиугольники!',
      realWorldExamples: [
        { label: 'Вставка на футбольном мяче', hint: 'Черные кожаные пятиугольники, сшитые вместе!' },
        { label: 'Знак пешеходного перехода', hint: 'Пятиугольный указатель безопасности у школы!' },
        { label: 'Скворечник', hint: 'Деревянный домик для птиц с треугольной крышей!' }
      ]
    },
    en: {
      name: 'Pentagon',
      description: 'A flat polygon with 5 straight sides and 5 vertices. The prefix "penta" means five!',
      funFact: 'The black patches on a classic soccer ball are pentagons surrounded by white hexagons!',
      realWorldExamples: [
        { label: 'Soccer Ball Patch', hint: 'Black leather pentagons stitched to make a ball!' },
        { label: 'School Crossing Sign', hint: 'Five-sided sign showing kids walking safely!' },
        { label: 'Birdhouse Front', hint: 'Wooden birdhouse with peak roof and four walls!' }
      ]
    }
  },

  hexagon: {
    az: {
      name: 'Altıbucaqlı',
      description: '6 düz tərəfi və 6 küncü (təpəsi) olan müstəvi çoxbucaqlı. Hər tərəfi simmetrik və nizamlıdır!',
      funFact: 'Bal arıları pətəklərini altıbucaqlı şəklində tikirlər, çünki bu forma boşluq qoymadan ən çox bal saxlamağa imkan verir!',
      realWorldExamples: [
        { label: 'Arı Pətəyi', hint: 'Şirin və qızılı balla dolu altıbucaqlı hücrələr!' },
        { label: 'Metal Qayka', hint: 'Açarın möhkəm tuta biləcəyi 6 tərəfli metal bolt qaykası!' },
        { label: 'Döşəmə Mozaika Plitəsi', hint: 'Vanna və mətbəx döşəmələrində gözəl altıbucaqlı naxışlar!' }
      ]
    },
    tr: {
      name: 'Altıgen',
      description: '6 düz kenarı ve 6 köşesi olan düzgün çokgen. Doğanın en verimli geometrik şeklidir!',
      funFact: 'Bal arıları peteklerini altıgen örerler çünkü altıgenler sıfır boşlukla en fazla balı depolar!',
      realWorldExamples: [
        { label: 'Bal Peteği', hint: 'Altın renkli leziz balla dolu altıgen yuvalar!' },
        { label: 'Civata Somunu', hint: 'Anahtarın sıkıca kavrayabileceği altı köşeli metal parça!' },
        { label: 'Mozaik Zemin Karosu', hint: 'Banyoda veya mutfakta şık altıgen zemin döşemesi!' }
      ]
    },
    ru: {
      name: 'Шестиугольник',
      description: 'Плоский многоугольник с 6 прямыми сторонами и 6 углами-вершинами.',
      funFact: 'Пчелы строят соты именно шестиугольной формы, потому что они идеально стыкуются без щелей и вмещают максимум меда!',
      realWorldExamples: [
        { label: 'Пчелиные соты', hint: 'Ячейки из воска, наполненные золотистым душистым медом!' },
        { label: 'Металлическая гайка', hint: 'Шестигранная гайка, которую легко закручивать гаечным ключом!' },
        { label: 'Напольная мозаичная плитка', hint: 'Красивый узор из шестигранников на полу в ванной!' }
      ]
    },
    en: {
      name: 'Hexagon',
      description: 'A flat polygon with 6 straight sides and 6 vertices. "Hexa" comes from Greek for six!',
      funFact: 'Honeybees build their hives out of hexagons because hexagons fit together with zero wasted wax!',
      realWorldExamples: [
        { label: 'Bee Honeycomb', hint: 'Sweet golden chambers filled with sticky honey!' },
        { label: 'Hardware Nut', hint: 'Metal hexagon that wrenches can grip securely!' },
        { label: 'Hexagonal Tile', hint: 'Pretty mosaic patterns in kitchen and bathroom floors!' }
      ]
    }
  },

  cone: {
    az: {
      name: 'Konus (3D Fəza Fiquru)',
      description: 'Dairəvi alt əsası olan və yuxarıya doğru hamar sivrilərək bir təpə nöqtəsində (apeks) birləşən 3D fəza fiquru.',
      funFact: 'Şam ağacının qozaları şaxtadan toxumları qorumaq üçün təbiətdə tam konus formasında böyüyür!',
      realWorldExamples: [
        { label: 'Dondurma Külahı', hint: 'Dadlı dondurma toplarını saxlayan xırçıltılı vafli konus!' },
        { label: 'Yol Təhlükəsizlik Konusu', hint: 'Yolda təmir gedərkən qoyulan parlaq narıncı konus!' },
        { label: 'Şənlik Papağı', hint: 'Ad günlərində başa taxılan konus formalı əyləncəli papaq!' },
        { label: 'Vulkan Zirvəsi', hint: 'Təpəsində krateri olan konusvari əzəmətli dağ!' }
      ]
    },
    tr: {
      name: 'Koni (3D Cisim)',
      description: 'Dairesel bir tabanı olan ve yukarıya doğru daralarak tek bir tepe noktasında birleşen 3 boyutlu cisim.',
      funFact: 'Çam kozalakları, tohumlarını kış soğuklarından korumak için doğada tam koni biçiminde büyür!',
      realWorldExamples: [
        { label: 'Dondurma Külahı', hint: 'Lezzetli dondurma toplarını taşıyan çıtır külah!' },
        { label: 'Trafik Dubası', hint: 'Yol çalışmalarında güvenliği sağlayan turuncu koni!' },
        { label: 'Parti Şapkası', hint: 'Kutlamalarda başa takılan neşeli sivri külah!' },
        { label: 'Yanardağ Tepesi', hint: 'Tepesinde krateri bulunan koni biçimli dev dağ!' }
      ]
    },
    ru: {
      name: 'Конус (3D фигура)',
      description: 'Объемное геометрическое тело с круглым основанием, плавно сужающимся к одной вершине-пику.',
      funFact: 'Сосновые шишки растут в форме конуса, защищая свои семена от зимних морозов!',
      realWorldExamples: [
        { label: 'Вафельный рожок', hint: 'Хрустящий рожок для шариков клубничного мороженого!' },
        { label: 'Дорожный конус', hint: 'Ярко-оранжевый конус, обеспечивающий безопасность на дороге!' },
        { label: 'Праздничный колпачок', hint: 'Веселый остроконечный колпак на день рождения!' },
        { label: 'Вулканическая сопка', hint: 'Конусообразная гора с кратером на самой верхушке!' }
      ]
    },
    en: {
      name: 'Cone (3D Solid)',
      description: 'A 3D solid shape with a flat circular base that smoothly tapers up to a single pointed tip called the apex.',
      funFact: 'Pine trees grow wooden pinecones that have the exact same shape to protect their seeds from freezing winter frost!',
      realWorldExamples: [
        { label: 'Ice Cream Waffle Cone', hint: 'Crispy crunchy cone holding delicious scoops!' },
        { label: 'Traffic Safety Cone', hint: 'Bright orange cone keeping road workers safe!' },
        { label: 'Party Birthday Hat', hint: 'Pointy hat with an elastic strap for celebrations!' },
        { label: 'Volcano Peak', hint: 'Conical mountain with a crater at the very tip!' }
      ]
    }
  },

  cylinder: {
    az: {
      name: 'Silindr (3D Fəza Fiquru)',
      description: 'Üst və alt hissəsində iki eyni dairəvi düz üzü olan və hamar əyri boru ilə birləşən 3D fəza fiquru.',
      funFact: 'Mətbəx bankaları və qabları ona görə silindr formasındadır ki, ən çox maye tutur və asanlıqla üst-üstə yığılır!',
      realWorldExamples: [
        { label: 'Şorba Konserv Qutusu', hint: 'Dadlı şorba və noxud saxlayan metal konserv bankası!' },
        { label: 'Batareya', hint: 'Fənəri və oyuncaq maşınları işlədən silindrik batareya!' },
        { label: 'Su Stəkanı', hint: 'Sərin su və ya südlə dolu şəffaf silindrik stəkan!' },
        { label: 'Ağac Kötüyü', hint: 'Tonqal ətrafında oturmaq üçün yumru taxta kötük!' }
      ]
    },
    tr: {
      name: 'Silindir (3D Cisim)',
      description: 'Altında ve üstünde iki özdeş dairesel düz yüzeyi bulunan ve yuvarlak gövdeyle birleşen 3 boyutlu cisim.',
      funFact: 'Mutfak kavanozları ve konserve kutuları en çok hacmi kaplayıp kolayca istiflendiği için silindir biçimindedir!',
      realWorldExamples: [
        { label: 'Konserve Kutusu', hint: 'Nefis domates çorbası saklayan teneke kutu!' },
        { label: 'Kalem Pil', hint: 'El feneri ve uzaktan kumandayı çalıştıran silindirik pil!' },
        { label: 'Su Bardağı', hint: 'İçine taze soğuk süt doldurulan cam bardak!' },
        { label: 'Ağaç Kütüğü', hint: 'Kamp ateşinin başında oturulan yuvarlak odun kütüğü!' }
      ]
    },
    ru: {
      name: 'Цилиндр (3D тело)',
      description: 'Объемная геометрическая фигура с двумя одинаковыми круглыми основаниями вверху и внизу, соединенными гладкой трубкой.',
      funFact: 'Банки и емкости делают цилиндрическими, потому что в них помещается максимум жидкости и их удобно ставить друг на друга!',
      realWorldExamples: [
        { label: 'Консервная банка', hint: 'Металлическая баночка со сладкой кукурузой или супом!' },
        { label: 'Батарейка', hint: 'Питает фонарики и машинки на пульте управления!' },
        { label: 'Стеклянный стакан', hint: 'Стаканчик для прохладной воды или сока!' },
        { label: 'Бревно', hint: 'Круглое деревянное бревно для лесного костра!' }
      ]
    },
    en: {
      name: 'Cylinder (3D Solid)',
      description: 'A 3D solid shape with two identical flat circular faces at top and bottom, connected by a smooth curved tube.',
      funFact: 'Cylinders are everywhere in kitchens because their round shape holds maximum liquid and stacks easily!',
      realWorldExamples: [
        { label: 'Soup Can', hint: 'Metal container storing delicious tomato or noodle soup!' },
        { label: 'Battery Cell', hint: 'Powers your flashlight and remote control cars!' },
        { label: 'Drinking Glass', hint: 'Smooth glass filled with cool fresh water or milk!' },
        { label: 'Tree Trunk Log', hint: 'Round wooden log for campfire warmth!' }
      ]
    }
  },

  sphere: {
    az: {
      name: 'Kürə (3D Fəza Fiquru)',
      description: 'Kənarındakı hər bir nöqtə mərkəzindən tam eyni məsafədə olan kamil yumru 3D fəza fiquru. Heç bir tili və küncü yoxdur.',
      funFact: 'Çəkisizlik şəraitində açıq kosmosda su havada sərbəst buraxıldıqda dərhal kamil kürə forması alır!',
      realWorldExamples: [
        { label: 'Futbol / Basketbol Topu', hint: 'Həyətdə tullanaraq diyirlənən yumru oyun topu!' },
        { label: 'Yer Kürəsi Qlobusu', hint: 'Kosmosda süzən mavi və yaşıl doğma planetimiz!' },
        { label: 'Şirəli Portağal', hint: 'Qabığını soyub ləzzətlə yediyimiz C vitaminli meyvə!' },
        { label: 'Şüşə Mərmər Şar', hint: 'Hədəfə ataraq oynanılan parıldayan balaca şüşə kürəcik!' }
      ]
    },
    tr: {
      name: 'Küre (3D Cisim)',
      description: 'Dış yüzeyindeki her nokta merkezine tam eşit uzaklıkta olan kusursuz yuvarlak 3 boyutlu cisim.',
      funFact: 'Uzayda yerçekimsiz ortamda su damlacıkları havada kendiliğinden mükemmel parıldayan kürelere dönüşür!',
      realWorldExamples: [
        { label: 'Oyun Topu', hint: 'Bahçede zıplayıp yuvarlanan futbol veya basketbol topu!' },
        { label: 'Dünya Küresi', hint: 'Uzayda dönen mavi ve yeşil güzel evimiz!' },
        { label: 'Sulu Portakal', hint: 'Soyup afiyetle yediğimiz C vitaminli yuvarlak meyve!' },
        { label: 'Misket (Bilye)', hint: 'Çocukların yerde yuvarladığı parlak cam bilye!' }
      ]
    },
    ru: {
      name: 'Шар / Сфера (3D тело)',
      description: 'Идеально круглое трехмерное тело, каждая точка поверхности которого равноудалена от центра.',
      funFact: 'В невесомости космоса капли воды сами собой собираются в воздухе в идеальные парящие шарики!',
      realWorldExamples: [
        { label: 'Мячик для игр', hint: 'Круглый и прыгучий футбольный или баскетбольный мяч!' },
        { label: 'Глобус Земли', hint: 'Макет нашей круглой планеты, вращающейся в космосе!' },
        { label: 'Сочный апельсин', hint: 'Ароматный круглый цитрус, полный витаминов!' },
        { label: 'Стеклянный шарик (марбл)', hint: 'Блестящий стеклянный шарик для веселых игр!' }
      ]
    },
    en: {
      name: 'Sphere (3D Solid)',
      description: 'A completely round 3D solid shape where every single point on the outside is the exact same distance from the middle center.',
      funFact: 'In zero-gravity space, water naturally floats in the air as perfect little shimmering spheres!',
      realWorldExamples: [
        { label: 'Soccer Ball / Basketball', hint: 'Bounces and rolls smoothly across playgrounds!' },
        { label: 'Planet Earth Globe', hint: 'Our round home floating peacefully in space!' },
        { label: 'Juicy Orange Fruit', hint: 'Sweet vitamin C fruit you peel and enjoy!' },
        { label: 'Glass Marble', hint: 'Swirled shiny glass toy for aiming and rolling!' }
      ]
    }
  },

  pyramid: {
    az: {
      name: 'Piramida (Dördbucaqlı Piramida)',
      description: 'Kvadrat oturacağı və yuxarıda bir təpə nöqtəsində birləşən 4 üçbucaq yan üzü olan 3D fəza fiquru.',
      funFact: 'Misirdəki Böyük Qahirə Piramidaları 3800 ildən çox Yer üzündə ən hündür insan əli ilə tikilmiş abidə olmuşdur!',
      realWorldExamples: [
        { label: 'Misir Piramidaları', hint: 'Min illər əvvəl səhrada tikilmiş qədim dünya möcüzəsi!' },
        { label: 'Düşərgə Çadırı', hint: 'Ulduzlu səma altında gecələmək üçün qurulan üçbucaq çadır!' },
        { label: 'Musiqi Metronomu', hint: 'Piano çalarkən ritmi göstərən piramida formalı cihaz!' }
      ]
    },
    tr: {
      name: 'Kare Piramit (3D Cisim)',
      description: 'Kare bir tabana ve tepede birleşen 4 üçgen yan yüze sahip 3 boyutlu cisim.',
      funFact: 'Mısır’daki Büyük Gize Piramidi, 3800 yıldan uzun süre Dünya’nın en yüksek insan yapımı yapısıydı!',
      realWorldExamples: [
        { label: 'Mısır Piramitleri', hint: 'Çölde binlerce yıl önce inşa edilmiş antik harika!' },
        { label: 'Kamp Çadırı', hint: 'Yıldızlar altında uyumak için kurulan rahat çadır!' },
        { label: 'Müzik Metronomu', hint: 'Piyano çalarken tıkır tıkır ritim tutan alet!' }
      ]
    },
    ru: {
      name: 'Четырехугольная пирамида',
      description: 'Объемная фигура с квадратным основанием и 4 треугольными гранями, сходящимися в одной вершине.',
      funFact: 'Великая пирамида в Египте более 3800 лет оставалась самым высоким рукотворным сооружением на Земле!',
      realWorldExamples: [
        { label: 'Египетские пирамиды', hint: 'Древнее чудо света, возведенное тысячи лет назад в пустыне!' },
        { label: 'Туристическая палатка', hint: 'Уютный домик для ночевки под звездным небом!' },
        { label: 'Музыкальный метроном', hint: 'Пирамидка, которая мерно щелкает и помогает музыкантам держать ритм!' }
      ]
    },
    en: {
      name: 'Square Pyramid',
      description: 'A 3D solid shape with a flat square base and four triangular sides that meet together at one top point (apex).',
      funFact: 'The Great Pyramid of Giza in Egypt was the tallest man-made structure on Earth for over 3,800 years!',
      realWorldExamples: [
        { label: 'Egyptian Pyramid', hint: 'Ancient wonder built thousands of years ago in the desert!' },
        { label: 'Camping Tent', hint: 'Cozy outdoor shelter for sleeping under starry skies!' },
        { label: 'Music Metronome', hint: 'Ticks back and forth to keep rhythm for piano players!' }
      ]
    }
  },

  'rectangular-prism': {
    az: {
      name: 'Düzbucaqlı Prizma (3D Fəza Fiquru)',
      description: 'Qutuya bənzəyən, bütün 6 üzü düzbucaqlı olan 3D fəza fiquru. Qarşı üzləri bir-birinə tam bərabərdir.',
      funFact: 'Demək olar ki, bütün poçt bağlamaları və yük qutuları düzbucaqlı prizmadır, çünki yük maşınlarına kip yerləşirlər!',
      realWorldExamples: [
        { label: 'Səhər Yeməyi Qutusu (Yarma Qutusu)', hint: 'Qarğıdalı lopaları ilə dolu rəngli karton qutu!' },
        { label: 'Qırmızı Kərpic', hint: 'Möhkəm evlər və məktəblər tikmək üçün istifadə olunan kərpic!' },
        { label: 'Qalın Nağıl Kitabı', hint: 'Çarpayının yanında duran qalın macəra kitabı!' }
      ]
    },
    tr: {
      name: 'Dikdörtgenler Prizması',
      description: 'Kutu şeklinde, tüm 6 yüzü de dikdörtgen olan 3 boyutlu cisim. Karşılıklı yüzleri birbirine eştir.',
      funFact: 'Neredeyse tüm kargo kutuları dikdörtgenler prizmasıdır, çünkü kamyonlara sıfır boşlukla istiflenirler!',
      realWorldExamples: [
        { label: 'Mısır Gevreği Kutusu', hint: 'Kahvaltılık gevreklerle dolu renkli karton kutu!' },
        { label: 'Kırmızı İnşaat Tuğlası', hint: 'Sağlam evler yapmak için üst üste dizilen tuğlalar!' },
        { label: 'Kalın Masal Kitabı', hint: 'Komodinin üzerinde duran macera dolu kalın kitap!' }
      ]
    },
    ru: {
      name: 'Прямоугольный параллелепипед',
      description: 'Объемное тело в форме кирпичика или коробки, все 6 граней которого являются прямоугольниками.',
      funFact: 'Почти все почтовые посылки и коробки имеют форму прямоугольного параллелепипеда, так как их удобнее всего грузить в машины!',
      realWorldExamples: [
        { label: 'Коробка с хлопьями', hint: 'Яркая картонная коробка с хрустящим завтраком!' },
        { label: 'Красный кирпич', hint: 'Прочный глиняный брусок для строительства теплых домов!' },
        { label: 'Толстая книга сказок', hint: 'Большая увлекательная книга с картинками!' }
      ]
    },
    en: {
      name: 'Rectangular Prism',
      description: 'A 3D solid shape shaped like a box, where all 6 faces are rectangles. Opposite faces are identical.',
      funFact: 'Almost all shipping boxes and delivery packages are rectangular prisms because they pack neatly together in trucks!',
      realWorldExamples: [
        { label: 'Cereal Box', hint: 'Bright cardboard box filled with crispy breakfast flakes!' },
        { label: 'Red Brick', hint: 'Heavy clay blocks used to build sturdy houses and schools!' },
        { label: 'Storybook', hint: 'Thick adventure book resting on your bedside table!' }
      ]
    }
  }
};

// -------------------------------------------------------------
// FOODS & SENSATIONS TRANSLATIONS
// -------------------------------------------------------------
export const FOOD_DATA_TRANSLATIONS: Record<string, Record<Language, Partial<LocalizedFood>>> = {
  honey: {
    az: {
      name: 'Qızılı Təbii Bal',
      tasteCategory: 'Təbii Şirin',
      description: 'Çiçəklərin nektarından zəhmətkeş arılar tərəfindən hazırlanan təmiz, kəhrəba rəngli şirin nemət.',
      funTip: 'Bal dadarkən deyin: "Bu çox şirindir və boğazımı yumşaldır!"',
      spokenQuote: 'Mmm-mmm! Çox şirindir! Bu dadlı bal dilimin üstündə parıldayır!'
    },
    tr: {
      name: 'Altın Doğal Bal',
      tasteCategory: 'Doğal Tatlı',
      description: 'Çiçek nektarlarından çalışkan arıların ürettiği altın rengi şifalı ve tatlı mucize.',
      funTip: 'Bal yerken deyin ki: "Bu çok tatlı ve boğazımı yumuşatıyor!"',
      spokenQuote: 'Mmm-mmm! Çok tatlı! Bu nefis bal dilimde parıldıyor!'
    },
    ru: {
      name: 'Золотистый натуральный мед',
      tasteCategory: 'Природная сладость',
      description: 'Янтарное лакомство, собранное трудолюбивыми пчелами с душистых луговых цветов.',
      funTip: 'Пробуя мед, скажите: "Какой он сладкий, ароматный и густой!"',
      spokenQuote: 'Ммм-ням! Как сладко и вкусно! Обожаю ароматный мед!'
    },
    en: {
      name: 'Golden Natural Honey',
      tasteCategory: 'Natural Sweet',
      description: 'Pure amber nectar crafted by busy honeybees from wildflowers, coating your tongue with smooth floral sweetness.',
      funTip: 'When you taste honey, say: "This is sweet and silky smooth!"',
      spokenQuote: 'Mmm-mmm! Sweet as sunshine! That floral honey puts a big happy smile on my face!'
    }
  },

  wasabi: {
    az: {
      name: 'Yaşıl Vasabi',
      tasteCategory: 'Burun Qıcıqlandırıcı Acılıq',
      description: 'Soyuq dağ çaylarından təzə yığılmış yaşıl köklər (rizomlar), buruna qədər çatan ani və həyəcanlı bir istilik hissi bəxş edir.',
      funTip: 'Vasabi dadarkən deyin: "Bu çox kəskindir! Burnumda qığılcım kimi parladı və dərhal yox oldu!"',
      spokenQuote: 'Vaaaay! Düz burnuma qədər vurdu! Sonra isə puf, istilik getdi! Nə həyəcanlı macəradır!'
    },
    tr: {
      name: 'Yeşil Vazabi',
      tasteCategory: 'Burun Yakan Keskinlik',
      description: 'Dağ derelerinde yetişen taze yeşil kökler; burunda aniden parlayan ve çabucak kaybolan heyecanlı bir acılık verir.',
      funTip: 'Vazabi tadarken deyin ki: "Çok keskin ve burundan geçen harika bir ateşi var!"',
      spokenQuote: 'Vay canına! Doğrudan burnuma vurdu! Sonra bir anda kayboldu! Ne heyecanlı bir tat!'
    },
    ru: {
      name: 'Зеленый васаби',
      tasteCategory: 'Пряная острота в носу',
      description: 'Свежие зеленые корни японского васаби из чистых горных ручьев: дают быструю, щекочущую нос вспышку жара.',
      funTip: 'Пробуя васаби, скажите: "Ой, как пикантно прострелило в нос и сразу отпустило!"',
      spokenQuote: 'Ого-го! Прямо в нос взлетело! А потом — раз, и жар ушел! Вот это приключение!'
    },
    en: {
      name: 'Green Wasabi',
      tasteCategory: 'Nose-Tingling Pungency',
      description: 'Freshly harvested vibrant green wasabi roots (rhizomes) from cold mountain streams that produce a fast, exciting, nose-tingling burst of heat.',
      funTip: 'When you taste wasabi, say: "That is pungent! It shoots a spicy tickle through my nose!"',
      spokenQuote: 'Whoaaa! It zoomed straight up to my nose! Then poof, the heat is gone! What an adventure!'
    }
  },

  chocolate: {
    az: {
      name: 'Südlü Şokolad',
      tasteCategory: 'Şirin Şirniyyat',
      description: 'İsti dilinizin üstündə asta-asta əriyən ipək kimi zərif kakao və süd şirinliyi.',
      funTip: 'Şokolad dadarkən deyin: "Bu çox zərif, ləzzətli və şirindir!"',
      spokenQuote: 'Bəh-bəh! Şokolad dilimdə əriyir və əhvalımı qaldırır! Əsl şirinlik bayramıdır!'
    },
    tr: {
      name: 'Sütlü Çikolata',
      tasteCategory: 'Tatlı Atıştırmalık',
      description: 'Sıcak dilinizin üstünde yavaşça eriyen ipeksi kakao ve süt tadı.',
      funTip: 'Çikolata yerken deyin ki: "Çok lezzetli, yumuşacık ve tatlı!"',
      spokenQuote: 'Nefis! Ağzımda eriyen ipeksi çikolata bana neşe veriyor!'
    },
    ru: {
      name: 'Молочный шоколад',
      tasteCategory: 'Сладкое лакомство',
      description: 'Нежнейшее какао с молоком, тающее на теплом язычке в бархатную сладкую улыбку.',
      funTip: 'Пробуя шоколад, скажите: "Какой он нежный, сладкий и тающий!"',
      spokenQuote: 'Ммм, объедение! Тает во рту, заряжает радостью и сладкой энергией!'
    },
    en: {
      name: 'Milk Chocolate',
      tasteCategory: 'Sweet Treat',
      description: 'Silky smooth cocoa that gently melts on your warm tongue into a rich, sweet chocolate smile.',
      funTip: 'When you taste chocolate, say: "This is rich and sweet!"',
      spokenQuote: 'Yum! Rich and velvety! It gives me happy energy and makes my sweet tooth dance!'
    }
  },

  jam: {
    az: {
      name: 'Çiyələk Mürəbbəsi',
      tasteCategory: 'Meyvəli Şirniyyat',
      description: 'Yetkin qırmızı çiyələklərdən bişirilmiş, səhər çörəyinə sürtmək üçün ləzzətli və ətirli şirinlik.',
      funTip: 'Mürəbbə yeyərkən deyin: "Bu meyvə mürəbbəsi çox şirin və ətirlidir!"',
      spokenQuote: 'Dadlıdır! Qırmızı giləmeyvə ləzzəti! Bir qaşıq da çörəyimin üstünə çəkə bilərəm?'
    },
    tr: {
      name: 'Çilek Reçeli',
      tasteCategory: 'Meyveli Tatlı Ezme',
      description: 'Taze çileklerle kaynatılmış, sabah kahvaltısında ekmeğe sürülen mis kokulu tatlı reçel.',
      funTip: 'Reçel yerken deyin ki: "Meyve tadı çok yoğun ve nefis bir tatlı!"',
      spokenQuote: 'Harika! Meyveli, yapışkan ve çok tatlı! Ekmeğimin üzerine bir kaşık daha alabilir miyim?'
    },
    ru: {
      name: 'Клубничный джем',
      tasteCategory: 'Сладкий ягодный джем',
      description: 'Спелая душистая клубника, уваренная с сахаром для утренних тостов и блинчиков.',
      funTip: 'Пробуя джем, скажите: "Этот джем такой сладкий, ягодный и ароматный!"',
      spokenQuote: 'Ох, как вкусно! Сладкая ягодная сказка! Можно еще ложечку на хрустящий тост?'
    },
    en: {
      name: 'Strawberry Jam',
      tasteCategory: 'Sweet Fruit Spread',
      description: 'Cooked ripe strawberries mashed with a sprinkle of sugar, ready to spread sweetness on warm morning toast.',
      funTip: 'When you taste jam, say: "This fruit spread tastes delightfully sweet!"',
      spokenQuote: 'Oh delicious! Fruity, sticky, and super sweet! Can I have another spoonful on my toast?'
    }
  },

  strawberry: {
    az: {
      name: 'Təzə Qırmızı Çiyələk',
      tasteCategory: 'Təbii Şirin Giləmeyvə',
      description: 'Bağçadan yeni dərildiyi kimi sulu, ürək formalı qırmızı giləmeyvə.',
      funTip: 'Çiyələk yeyərkən deyin: "Bu giləmeyvə sulu, təravətli və təbii şirindir!"',
      spokenQuote: 'Sulu və təravətlidir! Sarı nöqtəli balaca şirin təbiət konfeti!'
    },
    tr: {
      name: 'Taze Kırmızı Çilek',
      tasteCategory: 'Tatlı Meyve',
      description: 'Güneşli bahçeden yeni toplanmış, sulu ve kalp şekilli kıpkırmızı çilek.',
      funTip: 'Çilek yerken deyin ki: "Sulu, taptaze ve doğal olarak tatlı!"',
      spokenQuote: 'Sulu ve çok ferahlatıcı! Doğanın küçük tatlı şekerlemesi gibi!'
    },
    ru: {
      name: 'Свежая клубника',
      tasteCategory: 'Сладкая ягода',
      description: 'Ярко-красная ягода в форме сердечка, только что сорванная с грядки, полная сочной природной сладости.',
      funTip: 'Кушая клубничку, скажите: "Она такая сочная, свежая и естественно сладкая!"',
      spokenQuote: 'Сочно и освежающе! Настоящая природная ягодная конфетка!'
    },
    en: {
      name: 'Fresh Strawberry',
      tasteCategory: 'Sweet Berry',
      description: 'Bright red heart-shaped berry picked right from the sunny garden patch, bursting with juicy sweetness.',
      funTip: 'When you eat a strawberry, say: "It tastes juicy, fresh, and naturally sweet!"',
      spokenQuote: 'Juicy and refreshing! It is nature’s sweet little candy with tiny yellow seed speckles!'
    }
  },

  watermelon: {
    az: {
      name: 'Sulu Qarpız Dilimi',
      tasteCategory: 'Sərinlədici Şirin Meyvə',
      description: 'Yay günlərində susuzluğu yatıran, xırçıldayan yaqut qırmızısı təbii şirinlik.',
      funTip: 'Qarpız dişləyərkən deyin: "Bu həm çox suludur, həm də xırçıltılı və şirindir!"',
      spokenQuote: 'Xırt! Nə ləzzətli və suludur! Sanki qarpız şirəsini xırçıldadaraq içirəm!'
    },
    tr: {
      name: 'Kıtır Sulu Karpuz',
      tasteCategory: 'Serinletici Tatlı Meyve',
      description: 'Yaz sıcaklarında ferahlatan, yakut kırmızısı bol sulu tatlı dilim.',
      funTip: 'Karpuz yerken deyin ki: "Buz gibi, sulu, kıtır ve tatlı!"',
      spokenQuote: 'Hup! Çok kıtır ve tatlı! Sanki leziz karpuz suyunu yudumluyorum!'
    },
    ru: {
      name: 'Сочный арбуз',
      tasteCategory: 'Освежающая сладость',
      description: 'Хрустящий рубиновый ломтик гигантской полосатой ягоды, брызжущий сладким соком в жаркий день.',
      funTip: 'Откусывая арбуз, скажите: "Он такой прохладный, хрустящий и сладенький!"',
      spokenQuote: 'Хрум! Сколько сока и сладости! Как будто пьешь прохладный сахарный лимонад!'
    },
    en: {
      name: 'Crisp Watermelon',
      tasteCategory: 'Sweet Hydrating Fruit',
      description: 'A giant green striped melon filled with ruby-red, watery sweetness that drips down your chin in summer.',
      funTip: 'When you bite watermelon, say: "It is cool, crunchy, and delightfully sweet!"',
      spokenQuote: 'Slurp! So crisp and sweet! It is like drinking sweet watermelon juice with a big crunch!'
    }
  },

  pepper: {
    az: {
      name: 'Qırmızı Acı Bibər',
      tasteCategory: 'Yandırıcı Acılıq',
      description: 'Kapsaisin maddəsi ilə zəngin al-qırmızı bibər: dildə od kimi alovlanan istilik yaradır!',
      funTip: 'Bibər dadarkən deyin: "Bu çox acıdır! Dilimdə alov kimi parlayır!"',
      spokenQuote: 'Uff! Alov püskürürəm! Dilimdə atəşfəşanlıq başladı! Mənə təcili soyuq süd verin!'
    },
    tr: {
      name: 'Kırmızı Acı Biber',
      tasteCategory: 'Ateşli Acı',
      description: 'Kapsaisin zengini kırmızı biber; dilde sıcak ve kıpır kıpır bir acılık hissi uyandırır!',
      funTip: 'Acı biber yerken deyin ki: "Bu çok acı! Dilimde ateş var sanki!"',
      spokenQuote: 'Püfff! Dilim karıncalandı, alev gibi oldu! Çabuk bir bardak soğuk süt lütfen!'
    },
    ru: {
      name: 'Красный острый перец',
      tasteCategory: 'Огненная острота',
      description: 'Ярко-красный перчик с капсаицином: от него на язычке загорается веселый теплый огонек!',
      funTip: 'Пробуя перчик, скажите: "Ух, какой острый! Во рту прямо покалывает!"',
      spokenQuote: 'Ого-го! Язычок горит, как бенгальский огонек! Срочно дайте стакан холодного молока!'
    },
    en: {
      name: 'Red Chili Pepper',
      tasteCategory: 'Fiery Capsaicin',
      description: 'Bright crimson pepper packed with capsaicin, a natural compound that makes your tongue feel hot and tingly!',
      funTip: 'When food has pepper, say: "This is spicy! My tongue feels tingly and warm!"',
      spokenQuote: 'Whoosh! Holy smoke! My tongue is tingling like fireworks! Pass a glass of cold milk please!'
    }
  },

  'black-pepper': {
    az: {
      name: 'Xırdalanmış Qara İstiot',
      tasteCategory: 'Kəskin Ədviyyat',
      description: 'Qurudulmuş istiot dənələrindən üyüdülmüş qara toz. Burunda və dildə qıdıqlayıcı kəskinlik yaradır.',
      funTip: 'Yeməkdə istiot olanda deyin: "Bu yemək istiotludur və burnumu qıdıqlayır!"',
      spokenQuote: 'Apsu! Qıdıqladı! Burnum açıldı, dilim oyandı! Nə kəskin ədviyyatdır!'
    },
    tr: {
      name: 'Çekilmiş Karabiber',
      tasteCategory: 'Keskin Baharat',
      description: 'Kurutulmuş tanelerden çekilen karabiber parçacıkları; burnu ve dili gıdıklayan tatlı bir keskinlik sunar.',
      funTip: 'Çorbada karabiber varken deyin ki: "Bu baharatlı ve burnu gıdıklıyor!"',
      spokenQuote: 'Hapşuuu! Ağzımı ve burnumu canlandıran keskin bir baharat!'
    },
    ru: {
      name: 'Черный молотый перец',
      tasteCategory: 'Пряная специя',
      description: 'Ароматные крупинки молотого перца: бодрят нос и язычок звонким покалыванием.',
      funTip: 'Пробуя блюдо с перцем, скажите: "Здесь есть перчинка, в носу даже щекотно!"',
      spokenQuote: 'Апчхи! Вот это пряность! Щекочет нос и бодрит язычок!'
    },
    en: {
      name: 'Cracked Black Pepper',
      tasteCategory: 'Pungent Spice',
      description: 'Tiny black peppercorn flakes ground from dried berries. Adds a zesty zing that tickles your nose and tongue.',
      funTip: 'When soup has pepper, say: "This seasoning is peppery and has a kick!"',
      spokenQuote: 'Achoo! Zing! That has a sharp kick! It makes my nose tickle and my mouth feel awake!'
    }
  },

  lime: {
    az: {
      name: 'Parlaq Yaşıl Laym',
      tasteCategory: 'Təravətli Turş Sitrus',
      description: 'Ətirli qabığı və parlaq turş şirəsi olan zümrüd rəngli kiçik sitrus meyvəsi.',
      funTip: 'Laym şirəsi sıxarkən deyin: "Bu laym çox təravətli, kəskin və turşdur!"',
      spokenQuote: 'Gözüm qırpıldı! Sitrus möcüzəsinin kiçik elektrik qığılcımı kimidir!'
    },
    tr: {
      name: 'Parlak Yeşil Misket Limonu (Laym)',
      tasteCategory: 'Canlandırıcı Ekşi Narenciye',
      description: 'Zümrüt yeşili küçük narenciye; kokulu kabuğu ve keskin ekşi suyuyla içecekleri canlandırır.',
      funTip: 'Laym tadarken deyin ki: "Bu misket limonu çok keskin, ferahlatıcı ve ekşi!"',
      spokenQuote: 'Gözüm kapandı! Küçük bir narenciye şimşeği gibi çok ferahlatıcı ekşi!'
    },
    ru: {
      name: 'Ярко-зеленый лайм',
      tasteCategory: 'Бодрящий кислый цитрус',
      description: 'Изумрудный цитрусовый плод с ароматной цедрой и электрической кислинкой, сверкающей в напитках.',
      funTip: 'Пробуя лайм, скажите: "Этот лайм такой яркий, кислый и бодрящий!"',
      spokenQuote: 'Подмигнул одним глазом! Настоящий цитрусовый салют во рту!'
    },
    en: {
      name: 'Bright Green Lime',
      tasteCategory: 'Zingy Citrus',
      description: 'Small emerald citrus fruit with an aromatic peel and electric sour juice that sparkles in drinks.',
      funTip: 'When you squeeze lime, say: "This lime juice is zesty, sharp, and sour!"',
      spokenQuote: 'Wink! One eye squints shut! It’s like a little electric shock of citrus wonder!'
    }
  },

  soup: {
    az: {
      name: 'Buxarlanan İsti Tərəvəz Şorbası',
      tasteCategory: 'Qaynar Bulyon',
      description: 'Kök, kartof və yaşıl noxudla bişirilmiş, üzərindən buxar qalxan isti və şəfalı şorba.',
      funTip: 'Şorba içərkən deyin: "Ehtiyatlı ol, istidir! Qaşığa üfürüb sonra içirəm!"',
      spokenQuote: 'Püfff, buxara bax! Əvvəlcə qaşığa asta-asta üfürək: Fff, fff! İndi qarnımı necə də gözəl isidir!'
    },
    tr: {
      name: 'Dumanı Üstünde Sebze Çorbası',
      tasteCategory: 'Sıcak Çorba',
      description: 'Havuç, patates ve bezelyelerle kaynayan, sıcacık dumanları yükselen şifalı çorba.',
      funTip: 'Çorba içerken deyin ki: "Dikkat, çok sıcak! Önce üfleyip öyle içeceğim!"',
      spokenQuote: 'Aman dumana dikkat! Kaşığa yavaşça üfleyelim: Püfff, püfff! Şimdi içimi sıcacık ısıttı!'
    },
    ru: {
      name: 'Горячий овощной суп',
      tasteCategory: 'Согревающий бульон',
      description: 'Сытный суп с морковкой, картошечкой и зеленым горошком, над которым поднимаются ароматные клубы пара.',
      funTip: 'Когда подают суп, скажите: "Осторожно, горячо! Сначала подую на ложечку!"',
      spokenQuote: 'Осторожно, горячий пар! Подуем на ложечку: Фуууу, фуууу! Вот теперь животику тепло и уютно!'
    },
    en: {
      name: 'Steaming Vegetable Soup',
      tasteCategory: 'Warm Broth',
      description: 'Hearty broth with tender carrots, potatoes, and peas bubbling gently on the stove with clouds of rising steam.',
      funTip: 'When soup is served, say: "Careful, it is hot! I will wait and blow on it before tasting!"',
      spokenQuote: 'Oof, watch out for the steam! Blow gently on the spoon first: *Fffff, fffff!* Now it warms my belly nicely!'
    }
  },

  tea: {
    az: {
      name: 'Təzə Dəmlənmiş İsti Çay',
      tasteCategory: 'İsti Dəmləmə',
      description: 'Çaynikdən fincana təzə süzülmüş, ətirli kəklikotu və ya nanəli isti çay.',
      funTip: 'Çay içərkən deyin: "Çay qaynar və istidir, bir az soyumasını gözləyirəm."',
      spokenQuote: 'Bəh-bəh! Fincanı iki əlimlə tutanda əllərimi isidir. İsti olanda kiçik qurtumlarla için!'
    },
    tr: {
      name: 'Taze Demlenmiş Sıcak Çay',
      tasteCategory: 'Sıcak İçecek',
      description: 'Demlikten fincana taze doldurulmuş, mis gibi kokan sıcacık çay.',
      funTip: 'Çay içerken deyin ki: "Çay çok sıcak, biraz soğumasını bekleyeceğim."',
      spokenQuote: 'Ohhh! Fincanı iki elimle tutmak ellerimi ısıtıyor. Sıcakken minik yudumlar alalım!'
    },
    ru: {
      name: 'Свежезаваренный горячий чай',
      tasteCategory: 'Горячий настой',
      description: 'Теплый чай с мятой или ромашкой, только что налитый из свистящего чайника в керамическую кружку.',
      funTip: 'Пробуя чай, скажите: "Чай горячий, нужно подождать, пока остынет."',
      spokenQuote: 'Аххх! Как приятно греть ладошки о чашку! Пьем осторожно, маленькими глоточками!'
    },
    en: {
      name: 'Freshly Brewed Tea',
      tasteCategory: 'Warm Infusion',
      description: 'Warm chamomile or peppermint tea poured freshly from the whistling teapot into a ceramic mug.',
      funTip: 'When given tea, say: "The tea is steaming hot, I need to let it cool down slightly."',
      spokenQuote: 'Ahhh! The mug is warm to hold with both hands. Take tiny careful sips while it is hot!'
    }
  },

  'hot-cocoa': {
    az: {
      name: 'Qaynar İsti Kakao',
      tasteCategory: 'İsti Şirin İçki',
      description: 'Üzərində əriyən marşmellou olan qaynar şokoladlı süd: qış günlərində əlləri və ürəyi isidir.',
      funTip: 'Kakao içərkən deyin: "Bu fincan isti və rahatlıq gətirir, məni isidir!"',
      spokenQuote: 'İsti və rahatlıq vericidir! Fincan üşüyən barmaqlarımı isidir, asta-asta içirəm!'
    },
    tr: {
      name: 'Sıcak Kakao ve Çikolata',
      tasteCategory: 'Sıcak Tatlı İçecek',
      description: 'Üzerinde eriyen yumuşak lokumcuklarla sıcak sütlü çikolata; kış günlerinde sıcacık bir keyif.',
      funTip: 'Kakao içerken deyin ki: "Fincan ellerimi ısıtıyor, çok sıcak ve lezzetli!"',
      spokenQuote: 'Sıcacık ve iç ısıtıcı! Üşüyen parmaklarımı hemen ısıttı, çok hızlı içmeyelim!'
    },
    ru: {
      name: 'Горячее какао',
      tasteCategory: 'Теплый сладкий напиток',
      description: 'Ароматное сливочное какао с тающими зефирками-маршмеллоу, идеальное после зимней прогулки.',
      funTip: 'Пья какао, скажите: "Оно такое горячее, уютное и согревающее!"',
      spokenQuote: 'Тепло и уютно! Кружка греет озябшие пальчики, главное — пить не спеша!'
    },
    en: {
      name: 'Hot Chocolate Cocoa',
      tasteCategory: 'Warm Sweet Drink',
      description: 'Creamy warm chocolate milk topped with melting mini marshmallows, perfect after playing in chilly winter snow.',
      funTip: 'When drinking cocoa, say: "It feels hot and cozy in my hands and warms me up!"',
      spokenQuote: 'Warm and comforting! The mug warms my chilly fingers, but don’t gulp too fast or your tongue gets hot!'
    }
  },

  'ice-cream': {
    az: {
      name: 'Dondurucu Soyuq Dondurma',
      tasteCategory: 'Buzlu Qaymaqlı Dondurma',
      description: 'Vanilli və giləmeyvəli şaxtalı sərin krem: yay istisində dili dərhal sərinlədir.',
      funTip: 'Dondurma yeyərkən deyin: "Bu dondurucu soyuqdur və ağzımı sərinlədir!"',
      spokenQuote: 'Bırrr! Necə də sərin və soyuqdur! Dodaqlarımda qütb şaxtası rəqs edir!'
    },
    tr: {
      name: 'Buz Gibi Dondurma',
      tasteCategory: 'Dondurulmuş Krema',
      description: 'Vanilyalı ve meyveli dondurucu soğuk top; sıcak havalarda anında serinlik verir.',
      funTip: 'Dondurma yerken deyin ki: "Buz gibi ve çok soğuk, ağzımı hemen ferahlatıyor!"',
      spokenQuote: 'Brrrr! Buzzz gibi serin! Dudaklarımda dondurucu bir ferahlık var!'
    },
    ru: {
      name: 'Морозное мороженое',
      tasteCategory: 'Замороженный десерт',
      description: 'Нежный ванильно-клубничный шарик прямо из морозилки: моментально освежает в жаркий полдень.',
      funTip: 'Лакомясь мороженым, скажите: "Оно такое морозное и холодное, прямо дух захватывает!"',
      spokenQuote: 'Брррр! Холодок на губах! Если кушать слишком быстро, язычок замерзнет!'
    },
    en: {
      name: 'Frosty Ice Cream Scoop',
      tasteCategory: 'Frozen Cream',
      description: 'Chilled creamy vanilla and strawberry swirls scooped frozen from the icebox onto a cone or bowl.',
      funTip: 'When eating ice cream, say: "This is frosty and cold! It cools my mouth down instantly!"',
      spokenQuote: 'Brrrrr! Chilly chill! It feels super icy on my lips! If I eat too fast I get a silly little brain freeze!'
    }
  },

  ice: {
    az: {
      name: 'Şaxtalı Buz Parçası',
      tasteCategory: 'Dondurucu Soyuq',
      description: 'Sıfır dərəcədən aşağı temperaturda donmuş saf su kubiki. Dodaqlara dəyən kimi xoş sərinlik bəxş edir.',
      funTip: 'Buza toxunarkən deyin: "Bu dondurucu soyuqdur və barmaqlarımı qıdıqlayır!"',
      spokenQuote: 'Bırrrr! Dişlərim tıq-tıq edir! Dilim dondu! Soyuq qütb şaxtası kimidir!'
    },
    tr: {
      name: 'Şeffaf Buz Küpü',
      tasteCategory: 'Dondurucu Soğuk',
      description: 'Sıfır derecede donmuş kristal berraklığında su küpü. Dudaklara değer değmez dondurucu bir ferahlık verir.',
      funTip: 'Buza dokunurken deyin ki: "Dondurucu soğuk ve parmaklarımı gıdıklıyor!"',
      spokenQuote: 'Brrrr! Dişlerim tıkırdıyor! Dilim dondu sanki! Tam bir kutup soğuğu!'
    },
    ru: {
      name: 'Ледяной кубик',
      tasteCategory: 'Ледяной холод',
      description: 'Кристально чистый кубик замерзшей воды. Моментально обжигает пальчики бодрящим арктическим холодом.',
      funTip: 'Трогая лед, скажите: "Ой, какой он ледяной, аж зубы стучат!"',
      spokenQuote: 'Брррр! Зуб на зуб не попадает! Язычок замерз, как на Северном полюсе!'
    },
    en: {
      name: 'Crystal Clear Ice Cube',
      tasteCategory: 'Freezing Solid',
      description: 'Pure frozen water at zero degrees Celsius. Slippery, numbingly chilly, and clinking inside a cold glass.',
      funTip: 'When holding ice, say: "This ice is freezing cold and slippery!"',
      spokenQuote: 'Whoa, freezing! My fingertips are shivering just touching it! It’s melting into cold drops of water!'
    }
  },

  popsicle: {
    az: {
      name: 'Meyvə Şirəli Buzlu Dondurma',
      tasteCategory: 'Buzlu Meyvə Şirəsi',
      description: 'Ağac çubuğun üstündə bərk donmuş meyvə şirəsi: günəşli gündə dişləri qıdıqlayan şaxtalı dad.',
      funTip: 'Buzlu dondurma yeyərkən deyin: "Bu buz kimi soyuqdur və dilimi dondurur!"',
      spokenQuote: 'Dişlərim tıqqıldadı! Çox şaxtalı və soyuqdur! Dilimə qütb gücü bəxş edir!'
    },
    tr: {
      name: 'Meyveli Buz Parmak',
      tasteCategory: 'Donmuş Meyve Buzu',
      description: 'Tahta çubuk üzerinde donmuş meyve püresi; güneşli yaz gününde damlayan buz gibi lezzet.',
      funTip: 'Buz parmak yerken deyin ki: "Buz gibi çok soğuk ve dilimi ferahlatıyor!"',
      spokenQuote: 'Dişlerim tıkırdadı! Harika bir kutup soğuğu, dilimi dondurdu!'
    },
    ru: {
      name: 'Фруктовый лед',
      tasteCategory: 'Замороженный сок',
      description: 'Сочный фруктовый сок, замороженный на деревянной палочке, звенящий ледяной прохладой в теплый день.',
      funTip: 'Кушая фруктовый лед, скажите: "Какой он ледяной и освежающий!"',
      spokenQuote: 'Зубки стучат от холода! Ледяная бодрость и суперсила для язычка!'
    },
    en: {
      name: 'Fruit Juice Popsicle',
      tasteCategory: 'Frozen Ice Pop',
      description: 'Juicy fruit puree frozen solid around a wooden stick, dripping sweet icy droplets on a sunny day.',
      funTip: 'When eating a popsicle, say: "It is ice-cold and numbs my tongue pleasantly!"',
      spokenQuote: 'Ch-ch-chatter! Frosty on my teeth and super icy cold! Gives my tongue blue frost superpowers!'
    }
  },

  cherry_plum: {
    az: {
      name: 'Yaşıl Alça (Göyəm)',
      tasteCategory: 'Qısqanc Turş',
      description: 'Yazın ilk müjdəçisi olan xırçıldayan təzə yaşıl alça! Dişləyən kimi yanaqları büzüşdürən inanılmaz təravətli turşluq.',
      funTip: 'Alça yeyərkən deyin: "Bu çox xırçıltılı və turşdur, gözlərimi qırpdırır!"',
      spokenQuote: 'Ooooy! Gözlərim bərəldi! Yanaqlarım bir-birinə yapışdı! Nə ləzzətli xırçıltılı turşdur!'
    },
    tr: {
      name: 'Yeşil Can Eriği',
      tasteCategory: 'Kıtır Ekşi',
      description: 'Baharın habercisi kütür kütür yeşil erik! Isırınca yanakları büzüştüren ferahlatıcı ekşilik.',
      funTip: 'Yeşil erik yerken deyin ki: "Kütür kütür ve çok ekşi, dudaklarımı büzüştürdü!"',
      spokenQuote: 'Oooof! Gözlerimi kırpıştırdım! Yanaklarım büzüştü! Ne harika kütür kütür bir ekşi!'
    },
    ru: {
      name: 'Зеленая алыча (тёрн)',
      tasteCategory: 'Хрустящая кислота',
      description: 'Первый весенний хрустящий плод дикой сливы! При надкусывании щечки мгновенно сжимаются от бодрящей кислинки.',
      funTip: 'Пробуя зеленую алычу, скажите: "Какая она хрустящая, кисленькая и освежающая!"',
      spokenQuote: 'Ой-ёй-ёй! Губки бантиком, щечки свело! До чего же звонкая кислинка!'
    },
    en: {
      name: 'Green Sour Cherry Plum',
      tasteCategory: 'Mouth-Watering Sour',
      description: 'Crisp green stone fruit (Myrobalan plum) packed with vibrant malic and citric tang that makes your mouth water and cheeks pucker.',
      funTip: 'When you taste a green cherry plum, say: "Crunch! That is extra tart and juicy!"',
      spokenQuote: 'Wheeeew! *Pucker!* That crisp crunch made both my eyes blink! Tangy, sour perfection!'
    }
  },

  lemon: {
    az: {
      name: 'Turş Sarı Limon',
      tasteCategory: 'Sitrus Turşusu',
      description: 'Limon turşusu ilə zəngin parlaq sarı meyvə. Yanaqları sıxan və ağızda suyu artıran kəskin təravət.',
      funTip: 'Limon dadarkən deyin: "Bu çox turşdur və yanaqlarımı büzüşdürür!"',
      spokenQuote: 'Ooooy! Dodaqlarım titrəyir, yanaqlarım büzüşdü! Əsl turş bombası!'
    },
    tr: {
      name: 'Ekşi Sarı Limon',
      tasteCategory: 'Narenciye Ekşisi',
      description: 'Bol C vitamini ve sitrik asit içeren parlak sarı limon; ağzı sulandıran canlandırıcı ekşilik.',
      funTip: 'Limon yerken deyin ki: "Yanaklarımı sıkan taptaze bir ekşi!"',
      spokenQuote: 'Vay be! Yanaklarım birbirine yapıştı, dudaklarım büzüldü! Süper ekşi!'
    },
    ru: {
      name: 'Кислый желтый лимон',
      tasteCategory: 'Цитрусовая кислота',
      description: 'Ярко-желтый фрукт, полный лимонной кислоты: заставляет рот наполняться слюной, а щеки весело сморщиваться.',
      funTip: 'Пробуя лимон, скажите: "Ой как кисло, аж дух захватывает!"',
      spokenQuote: 'Ой-ё-ёй! Губки сжались, глазки сощурились! Настоящий цитрусовый взрыв!'
    },
    en: {
      name: 'Zesty Yellow Lemon',
      tasteCategory: 'Citric Sour',
      description: 'Bright yellow citrus fruit packed with citric acid that makes your saliva rush and your cheeks squeeze together.',
      funTip: 'When you taste lemon, say: "This is super sour and makes my face squeeze!"',
      spokenQuote: 'Ooooh-eeeee! *Pucker pucker!* My lips are wiggling and my cheeks are squeezing together! Super tangy!'
    }
  },

  ice_cube: {
    az: {
      name: 'Şaxtalı Buz Parçası',
      tasteCategory: 'Dondurucu Soyuq',
      description: 'Sıfır dərəcədən aşağı temperaturda donmuş saf su kubiki. Dodaqlara dəyən kimi xoş sərinlik bəxş edir.',
      funTip: 'Buza toxunarkən deyin: "Bu dondurucu soyuqdur və barmaqlarımı qıdıqlayır!"',
      spokenQuote: 'Bırrrr! Dişlərim tıq-tıq edir! Dilim dondu! Soyuq qütb şaxtası kimidir!'
    },
    tr: {
      name: 'Şeffaf Buz Küpü',
      tasteCategory: 'Dondurucu Soğuk',
      description: 'Sıfır derecede donmuş kristal berraklığında su küpü. Dudaklara değer değmez dondurucu bir ferahlık verir.',
      funTip: 'Buza dokunurken deyin ki: "Dondurucu soğuk ve parmaklarımı gıdıklıyor!"',
      spokenQuote: 'Brrrr! Dişlerim tıkırdıyor! Dilim dondu sanki! Tam bir kutup soğuğu!'
    },
    ru: {
      name: 'Ледяной кубик',
      tasteCategory: 'Ледяной холод',
      description: 'Кристально чистый кубик замерзшей воды. Моментально обжигает пальчики бодрящим арктическим холодом.',
      funTip: 'Трогая лед, скажите: "Ой, какой он ледяной, аж зубы стучат!"',
      spokenQuote: 'Брррр! Зуб на зуб не попадает! Язычок замерз, как на Северном полюсе!'
    },
    en: {
      name: 'Crunchy Ice Cube',
      tasteCategory: 'Freezing Cold',
      description: 'Crystal-clear block of frozen water at zero degrees Celsius that cools your mouth and sends shivers down your spine.',
      funTip: 'When you hold ice, say: "This is icy cold and makes me shiver!"',
      spokenQuote: 'Brrrrrr! Ch-ch-chatter! My teeth are tapping like castanets! Polar ice power!'
    }
  }
};
