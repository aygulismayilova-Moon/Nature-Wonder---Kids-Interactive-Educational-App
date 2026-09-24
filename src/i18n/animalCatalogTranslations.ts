import { Language } from '../types';

export interface AnimalTranslation {
  name: string;
  childDescription?: string;
  funFact?: string;
  soundLabel?: string;
  diet?: string;
  habitat?: string;
  group?: string;
}

// Translations for all 51 Featured Animals
export const FEATURED_ANIMAL_TRANSLATIONS: Record<string, Record<Language, AnimalTranslation>> = {
  lion: {
    az: { name: 'Aslan', childDescription: 'Aslanlar savannanın kralıdır! Prayd adlanan böyük ailə dəstələri ilə yaşayırlar.', funFact: 'Aslanın nərəsi 8 kilometr uzaqdan eşidilə bilir!', soundLabel: 'Qüdrətli Aslan Nərəsi', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Savanna və Çöllük', group: 'Məməli' },
    tr: { name: 'Aslan', childDescription: 'Aslanlar savananın kralıdır! Gurur adı verilen aile sürüleri halinde yaşarlar.', funFact: 'Kükremesi 8 kilometre öteden duyulabilir!', soundLabel: 'Görkemli Aslan Kükremesi', diet: 'Etobur (Et yiyen)', habitat: 'Savana ve Çayırlık', group: 'Memeli' },
    ru: { name: 'Лев', childDescription: 'Львы — цари саванны! Они живут дружными семьями — прайдами.', funFact: 'Грозный рык льва слышен на целых 8 километров вокруг!', soundLabel: 'Могучий рык льва', diet: 'Хищник (Мясоед)', habitat: 'Саванна и луга', group: 'Млекопитающее' },
    en: { name: 'Lion', childDescription: 'Lions are known as kings of the savannah living in prides.', funFact: 'A roar can be heard from 5 miles away!', soundLabel: 'Mighty Lion Roar', diet: 'Carnivore (Meat)', habitat: 'Savannah & Grassland', group: 'Mammal' }
  },
  elephant: {
    az: { name: 'Afrika Fili', childDescription: 'Fillər quru üzərində yaşayan ən nəhəng heyvanlardır. Xortumları ilə su içir və sarılırlar!', funFact: 'Xortumlarında 40 mindən çox əzələ var!', soundLabel: 'Nəhəng Fil Trubası', diet: 'Otyeyən (Bitkilər)', habitat: 'Savanna və Çöllük', group: 'Məməli' },
    tr: { name: 'Afrika Fili', childDescription: 'Filler yeryüzündeki en büyük kara canlılarıdır.', funFact: 'Hortumlarında 40 binden fazla kas bulunur!', soundLabel: 'Yaban Fili Borazanı', diet: 'Otobur (Bitkiler)', habitat: 'Savana ve Çayırlık', group: 'Memeli' },
    ru: { name: 'Африканский слон', childDescription: 'Слоны — самые большие сухопутные животные на Земле.', funFact: 'В хоботе слона более 40 000 мышц!', soundLabel: 'Трубный зов слона', diet: 'Травоядное (Растения)', habitat: 'Саванна и луга', group: 'Млекопитающее' },
    en: { name: 'African Elephant', childDescription: 'Largest walking animals with multi-purpose trunks.', funFact: 'A trunk has over 40,000 muscles!', soundLabel: 'Wild Elephant Trumpet', diet: 'Herbivore (Plants)', habitat: 'Savannah & Grassland', group: 'Mammal' }
  },
  tiger: {
    az: { name: 'Benqal Pələngi', childDescription: 'Pələnglər narıncı xəzli və qara zolaqlı nəhəng pişikdir. Suda üzməyi çox sevirlər!', funFact: 'Heç bir iki pələngin zolağı bir-birinə bənzəmir!', soundLabel: 'Dərindən Pələng Nərəsi', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Cəngəllik və Tropik Meşə', group: 'Məməli' },
    tr: { name: 'Bengal Kaplanı', childDescription: 'Turuncu ve siyah çizgili görkemli kedi.', funFact: 'Kaplanların çizgileri tıpkı parmak izi gibi benzersizdir!', soundLabel: 'Derin Kaplan Kükremesi', diet: 'Etobur (Et yiyen)', habitat: 'Yağmur Ormanı', group: 'Memeli' },
    ru: { name: 'Бенгальский тигр', childDescription: 'Величественная полосатая кошка, которая обожает плавать!', funFact: 'Узоры полос у каждого тигра уникальны.', soundLabel: 'Грозный рык тигра', diet: 'Хищник (Мясоед)', habitat: 'Тропические леса', group: 'Млекопитающее' },
    en: { name: 'Bengal Tiger', childDescription: 'Majestic big cats with unique orange and black stripes.', funFact: 'Every tiger has a unique stripe pattern!', soundLabel: 'Deep Tiger Growl', diet: 'Carnivore (Meat)', habitat: 'Rainforest & Jungle', group: 'Mammal' }
  },
  panda: {
    az: { name: 'Nəhəng Panda', childDescription: 'Ağ-qara sevimli pandalar günlərini yaşıl bambuk yeməklə keçirirlər.', funFact: 'Gündə 38 kiloqrama qədər təzə bambuk yeyirlər!', soundLabel: 'Mehriban Panda Xorultusu', diet: 'Otyeyən (Bitkilər)', habitat: 'Meşə və Təbiət', group: 'Məməli' },
    tr: { name: 'Dev Panda', childDescription: 'Sevimli siyah beyaz pandalar bambu yemeyi çok sever.', funFact: 'Günde 38 kilo bambu yiyebilirler!', soundLabel: 'Sevimli Panda Sesi', diet: 'Otobur (Bitkiler)', habitat: 'Orman ve Ağaçlık', group: 'Memeli' },
    ru: { name: 'Большая панда', childDescription: 'Очаровательные черно-белые медведи, жующие бамбук.', funFact: 'Панда съедает до 38 кг бамбука каждый день!', soundLabel: 'Милое ворчание панды', diet: 'Травоядное (Растения)', habitat: 'Леса и рощи', group: 'Млекопитающее' },
    en: { name: 'Giant Panda', childDescription: 'Gentle black-and-white bears munching on bamboo.', funFact: 'Can eat up to 38 kg of bamboo a day!', soundLabel: 'Gentle Panda Bleat & Grunt', diet: 'Herbivore (Plants)', habitat: 'Forest & Woodland', group: 'Mammal' }
  },
  dolphin: {
    az: { name: 'Afalina Delfini', childDescription: 'Delfinlər dalğalar arasında tullanan çox ağıllı və mehriban dəniz dostlarımızdır!', funFact: 'Delfinlər bir gözləri açıq və beyninin bir yarısı ilə yatırlar!', soundLabel: 'Delfin Fit və Şaqqıltısı', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Okean və Dəniz', group: 'Məməli' },
    tr: { name: 'Şişeburun Yunus', childDescription: 'Akıllı ve oyuncu deniz memelileri.', funFact: 'Yunuslar beyinlerinin tek tarafıyla uyurlar!', soundLabel: 'Yunus Islık ve Eko Sesi', diet: 'Etobur (Et yiyen)', habitat: 'Okyanus ve Deniz', group: 'Memeli' },
    ru: { name: 'Дельфин афалина', childDescription: 'Умные и игривые обитатели океанских глубин.', funFact: 'Дельфины спят с одним открытым глазом!', soundLabel: 'Свист и эхо дельфина', diet: 'Хищник (Мясоед)', habitat: 'Океаны и моря', group: 'Млекопитающее' },
    en: { name: 'Bottlenose Dolphin', childDescription: 'Smart marine mammals leaping playfully in ocean waves.', funFact: 'Dolphins sleep with half their brain at a time!', soundLabel: 'Dolphin Whistle & Click Echo', diet: 'Carnivore (Meat)', habitat: 'Ocean & Marine', group: 'Mammal' }
  },
  'blue-whale': {
    az: { name: 'Göy Balina', childDescription: 'Göy balina Yer kürəsində indiyə qədər yaşamış ən böyük canlıdır!', funFact: 'Balinanın ürəyi kiçik bir avtomobil boydadır!', soundLabel: 'Dərin Okean Balina Nəğməsi', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Okean və Dəniz', group: 'Məməli' },
    tr: { name: 'Mavi Balina', childDescription: 'Dünya üzerinde yaşamış en büyük canlıdır.', funFact: 'Kalbi bir otomobil büyüklüğündedir!', soundLabel: 'Derin Okyanus Balina Çağrısı', diet: 'Etobur (Et yiyen)', habitat: 'Okyanus ve Deniz', group: 'Memeli' },
    ru: { name: 'Синий кит', childDescription: 'Самое огромное существо, когда-либо жившее на нашей планете!', funFact: 'Сердце синего кита размером с легковой автомобиль!', soundLabel: 'Глубокий зов кита', diet: 'Хищник (Мясоед)', habitat: 'Океаны и моря', group: 'Млекопитающее' },
    en: { name: 'Blue Whale', childDescription: 'The largest animal known to have ever lived on Earth.', funFact: 'Its heart is as big as a small car!', soundLabel: 'Deep Ocean Whale Call', diet: 'Carnivore (Meat)', habitat: 'Ocean & Marine', group: 'Mammal' }
  },
  penguin: {
    az: { name: 'İmperator Pinqvini', childDescription: 'Qütb buzlaqlarında yaşayan, frak geyinmiş kimi görünən sevimli quşlar!', funFact: 'Uça bilmirlər, amma suda balıq kimi sürətlə üzürlər!', soundLabel: 'Pinqvin Şən Qığıltısı', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Qütb və Arktika', group: 'Quş' },
    tr: { name: 'İmparator Penguen', childDescription: 'Kutup soğuklarında yaşayan, uçamayan ama harika yüzen kuşlar.', funFact: 'Buzlu sularda saatte 36 km hızla yüzebilirler!', soundLabel: 'Kutup Pengueni Şarkısı', diet: 'Etobur (Et yiyen)', habitat: 'Kutup ve Arktika', group: 'Kuş' },
    ru: { name: 'Императорский пингвин', childDescription: 'Птицы в нарядных фраках, выдерживающие арктические морозы.', funFact: 'Не умеют летать, но превосходно плавают под водой!', soundLabel: 'Веселое щебетание пингвинов', diet: 'Хищник (Мясоед)', habitat: 'Полярные льды и Арктика', group: 'Птица' },
    en: { name: 'Emperor Penguin', childDescription: 'Antarctic flightless birds that endure cold by huddling.', funFact: 'Can dive up to 500 meters deep!', soundLabel: 'Penguin Chirp & Chatter', diet: 'Carnivore (Meat)', habitat: 'Polar & Arctic', group: 'Bird' }
  },
  'polar-bear': {
    az: { name: 'Ağ Qütb Ayısı', childDescription: 'Ağ ayı Arktikanın şaxtalı buzlaqlarının ən güclü və böyük padşahıdır!', funFact: 'Tükləri əslində şəffafdır və günəş işığını içinə çəkir!', soundLabel: 'Şimal Ayısı Gurultusu', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Qütb və Arktika', group: 'Məməli' },
    tr: { name: 'Kutup Ayısı', childDescription: 'Buzulların beyaz kürklü güçlü devi.', funFact: 'Kürkleri aslında şeffaftır, güneş ısısını emer!', soundLabel: 'Kutup Ayısı Kükremesi', diet: 'Etobur (Et yiyen)', habitat: 'Kutup ve Arktika', group: 'Memeli' },
    ru: { name: 'Белый медведь', childDescription: 'Могучий северный исполин ледяных просторов Арктики.', funFact: 'Кожа у белого медведя черная, а шерсть прозрачная!', soundLabel: 'Грозный рев полярного медведя', diet: 'Хищник (Мясоед)', habitat: 'Полярные льды и Арктика', group: 'Млекопитающее' },
    en: { name: 'Polar Bear', childDescription: 'The white-coated monarch of Arctic sea ice.', funFact: 'Their fur is actually transparent and hollow!', soundLabel: 'Polar Bear Roar & Grunt', diet: 'Carnivore (Meat)', habitat: 'Polar & Arctic', group: 'Mammal' }
  },
  wolf: {
    az: { name: 'Boz Canavar', childDescription: 'Canavarlar meşələrin və dağların sadiq ailə dəstələri ilə gəzən qoruyucularıdır.', funFact: 'Ay işığında ulayaraq kilometrlərlə uzaqdakı dostları ilə danışırlar!', soundLabel: 'Canavarın Əzəmətli Ulaması', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Meşə və Təbiət', group: 'Məməli' },
    tr: { name: 'Bozkurt', childDescription: 'Sadık sürüleriyle dağlarda ve ormanlarda yaşayan vahşi kurt.', funFact: 'Uluyarak kilometrelerce uzaktaki sürü üyeleriyle iletişim kurarlar!', soundLabel: 'Bozkurt Uluması', diet: 'Etobur (Et yiyen)', habitat: 'Orman ve Ağaçlık', group: 'Memeli' },
    ru: { name: 'Серый волк', childDescription: 'Благородный лесной хищник, живущий дружной верной стаей.', funFact: 'Вой волка помогает координировать стаю на огромных расстояниях!', soundLabel: 'Протяжный вой волка', diet: 'Хищник (Мясоед)', habitat: 'Леса и рощи', group: 'Млекопитающее' },
    en: { name: 'Gray Wolf', childDescription: 'Pack hunters communicating across forests with resonant howls.', funFact: 'Wolves can run up to 60 km/h!', soundLabel: 'Wolf Pack Howl', diet: 'Carnivore (Meat)', habitat: 'Forest & Woodland', group: 'Mammal' }
  },
  eagle: {
    az: { name: 'Ağbaş Qartal', childDescription: 'Qartallar göy üzünün cəsur hökmdarlarıdır, gözləri çox uzaqları aydın görür!', funFact: 'Gözləri 3 kilometr uzaqda üzən xırda balığı belə seçə bilir!', soundLabel: 'Qartalın Kəskin Qıy-səsi', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Dağlar və Zirvələr', group: 'Quş' },
    tr: { name: 'Kel Kartal', childDescription: 'Gökyüzünün keskin bakışlı gururlu kuşu.', funFact: 'Gözleri 3 kilometre uzaktaki balığı bile net görebilir!', soundLabel: 'Kartal Haykırışı', diet: 'Etobur (Et yiyen)', habitat: 'Dağlar ve Zirveler', group: 'Kuş' },
    ru: { name: 'Белоголовый орлан', childDescription: 'Гордый повелитель высот с невероятно острым зрением.', funFact: 'Орел видит добычу с расстояния более 3 километров!', soundLabel: 'Пронзительный крик орла', diet: 'Хищник (Мясоед)', habitat: 'Горы и вершины', group: 'Птица' },
    en: { name: 'Bald Eagle', childDescription: 'Majestic bird of prey soaring through mountain skies.', funFact: 'Can spot a fish from 3 km away!', soundLabel: 'Piercing Eagle Screech', diet: 'Carnivore (Meat)', habitat: 'Mountains', group: 'Bird' }
  },
  frog: {
    az: { name: 'Ağac Qurbağası', childDescription: 'Qırmızı iri gözlü, parlaq yaşıl dərili şən tullanan balaca qurbağa!', funFact: 'Dərisi ilə su içir və tullandıqda yapışqan pəncələri budaqlara yapışır!', soundLabel: 'Qurbağanın Qığıltısı', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Cəngəllik və Tropik Meşə', group: 'Suda-quruda yaşayan' },
    tr: { name: 'Kırmızı Gözlü Ağaç Kurbağası', childDescription: 'Göz alıcı parlak renkli sevimli kurbağa.', funFact: 'Yapışkan parmaklarıyla dikey yapraklarda bile yürüyebilir!', soundLabel: 'Kurbağa Vıraklaması', diet: 'Etobur (Et yiyen)', habitat: 'Yağmur Ormanı', group: 'İkiyaşamlı (Amfibi)' },
    ru: { name: 'Красноглазая квакша', childDescription: 'Яркая древесная лягушка с большими рубиновыми глазами.', funFact: 'Присоски на пальцах позволяют лазать по гладким листьям!', soundLabel: 'Кваканье квакши', diet: 'Хищник (Мясоед)', habitat: 'Тропические леса', group: 'Земноводное (Амфибия)' },
    en: { name: 'Red-Eyed Tree Frog', childDescription: 'Colorful rainforest jumper with ruby red eyes.', funFact: 'Uses foot pads to stick to leaves!', soundLabel: 'Tree Frog Croak & Chirp', diet: 'Carnivore (Meat)', habitat: 'Rainforest & Jungle', group: 'Amphibian' }
  },
  clownfish: {
    az: { name: 'Kloun Balığı', childDescription: 'Mərcan riflərində yaşayan parlaq narıncı zolaqlı kiçik dostumuz Nemonu xatırladır!', funFact: 'Zəhərli aktiniyaların arasında heç zərər görmədən təhlükəsiz yaşayır!', soundLabel: 'Kloun Balığı Cırıltısı', diet: 'Həryeyən (Hər ikisi)', habitat: 'Okean və Dəniz', group: 'Balıq və Dəniz Canlısı' },
    tr: { name: 'Palyaço Balığı', childDescription: 'Mercan resiflerinin neşeli turuncu ve beyaz çizgili balığı.', funFact: 'Zehirli anemonların dokunaçları arasında bağışıklık sayesinde güvende yaşar!', soundLabel: 'Palyaço Balığı Sesi', diet: 'Hepçil (Her şeyi yiyen)', habitat: 'Okyanus ve Deniz', group: 'Balık ve Deniz Canlısı' },
    ru: { name: 'Рыба-клоун', childDescription: 'Яркая оранжево-белая рыбка из коралловых рифов, как Немо!', funFact: 'Особая слизь защищает ее от жгучих щупалец актиний!', soundLabel: 'Бульканье рыбы-клоуна', diet: 'Всеядное (Растения и мясо)', habitat: 'Океаны и моря', group: 'Рыбы и морская жизнь' },
    en: { name: 'Clownfish', childDescription: 'Bright orange striped reef swimmer living in sea anemones.', funFact: 'Immune to stinging anemone tentacles!', soundLabel: 'Clownfish Click & Bubble', diet: 'Omnivore (Plants & Meat)', habitat: 'Ocean & Marine', group: 'Fish & Ocean Life' }
  },
  bee: {
    az: { name: 'Bal Arısı', childDescription: 'Güllərdən şirə toplayıb bizim üçün dadlı və şəfalı bal hazırlayan zəhmətkeş həşərat!', funFact: 'Arılar bir-birlərinə çiçəklərin yerini rəqs edərək başa salırlar!', soundLabel: 'Arının Şən Vızıltısı', diet: 'Otyeyən (Bitkilər)', habitat: 'Ferma və Həyətyanı', group: 'Onurğasız və Həşərat' },
    tr: { name: 'Bal Arısı', childDescription: 'Çiçekleri dolaşıp bize şifalı bal üreten çalışkan dostumuz.', funFact: 'Çiçeklerin yerini arkadaşlarına sallantı dansı ile anlatırlar!', soundLabel: 'Arı Vızıltısı', diet: 'Otobur (Bitkiler)', habitat: 'Çiftlik ve Bahçe', group: 'Omurgasız ve Böcek' },
    ru: { name: 'Медоносная пчела', childDescription: 'Трудолюбивая пчелка, собирающая нектар и создающая вкусный мед.', funFact: 'Пчелы общаются при помощи особого виляющего танца!', soundLabel: 'Веселое жужжание пчелы', diet: 'Травоядное (Растения)', habitat: 'Ферма и деревенский двор', group: 'Беспозвоночные и насекомые' },
    en: { name: 'Honeybee', childDescription: 'Hardworking pollinators that dance to show where nectar is.', funFact: 'Communicates flower locations through a waggle dance!', soundLabel: 'Honeybee Buzz & Hum', diet: 'Herbivore (Plants)', habitat: 'Farm & Backyard', group: 'Invertebrate & Insect' }
  },
  koala: {
    az: { name: 'Koala', childDescription: 'Avstraliyanın evkalipt ağaclarında yaşayan, günün çoxunu yatan yumşaq heyvan!', funFact: 'Gündə 20 saata qədər şirin-şirin yatırlar!', soundLabel: 'Koalanın Sakit Nəfəsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Meşə və Təbiət', group: 'Məməli' },
    tr: { name: 'Koala', childDescription: 'Okaliptüs ağaçlarında yaşayan sevimli keseli ayı.', funFact: 'Günde 20 saate kadar uyurlar!', soundLabel: 'Koala Hırıltısı', diet: 'Otobur (Bitkiler)', habitat: 'Orman ve Ağaçlık', group: 'Memeli' },
    ru: { name: 'Коала', childDescription: 'Очаровательное сумчатое животное, живущее на эвкалиптах.', funFact: 'Коалы могут спать до 20 часов в сутки!', soundLabel: 'Спокойное посапывание коалы', diet: 'Травоядное (Растения)', habitat: 'Леса и рощи', group: 'Млекопитающее' },
    en: { name: 'Koala', childDescription: 'Gentle marsupial sleeping high in eucalyptus branches.', funFact: 'Sleeps up to 20 hours a day!', soundLabel: 'Koala Bellow & Snooze', diet: 'Herbivore (Plants)', habitat: 'Forest & Woodland', group: 'Mammal' }
  },
  giraffe: {
    az: { name: 'Zürafə', childDescription: 'Yer üzünün ən uzunboylu heyvanı! Uzun boynu ilə uca ağacların ən dadlı yarpaqlarını yeyir.', funFact: 'Zürafənin dili 50 santimetr uzunluğundadır və göyümtül-bənövşəyi rəngdədir!', soundLabel: 'Zürafənin Mehriban Fısıltısı', diet: 'Otyeyən (Bitkilər)', habitat: 'Savanna və Çöllük', group: 'Məməli' },
    tr: { name: 'Zürafa', childDescription: 'Dünyanın en uzun boylu hayvanıdır. Yüksek ağaçların yapraklarını yer.', funFact: 'Dili yarım metre uzunluğunda ve mavidir!', soundLabel: 'Zürafa Mırıltısı', diet: 'Otobur (Bitkiler)', habitat: 'Savana ve Çayırlık', group: 'Memeli' },
    ru: { name: 'Жираф', childDescription: 'Самое высокое животное в мире с удивительно длинной шеей.', funFact: 'Язык жирафа достигает 50 сантиметров в длину!', soundLabel: 'Тихое урчание жирафа', diet: 'Травоядное (Растения)', habitat: 'Саванна и луга', group: 'Млекопитающее' },
    en: { name: 'Giraffe', childDescription: 'Tallest animal in the world reaching high treetop leaves.', funFact: 'Its tongue is up to 50 cm long and dark purple!', soundLabel: 'Giraffe Gentle Hum & Flute', diet: 'Herbivore (Plants)', habitat: 'Savannah & Grassland', group: 'Mammal' }
  },
  cheetah: {
    az: { name: 'Hepard', childDescription: 'Yer üzünün ən sürətli qaçan quru heyvanıdır! Qısa müddətdə maşın kimi sürət yığır.', funFact: '0-dan 100 km/saat sürətə cəmi 3 saniyəyə çatır!', soundLabel: 'Hepardın Cəld Xırıldaması', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Savanna və Çöllük', group: 'Məməli' },
    tr: { name: 'Çita', childDescription: 'Dünyanın en hızlı koşan kara hayvanıdır.', funFact: '3 saniyede 100 kilometre hıza ulaşabilir!', soundLabel: 'Çita Hırıltısı', diet: 'Etobur (Et yiyen)', habitat: 'Savana ve Çayırlık', group: 'Memeli' },
    ru: { name: 'Гепард', childDescription: 'Самое быстрое наземное существо, бегающее с поразительной скоростью.', funFact: 'Разгоняется до 100 км/ч всего за 3 секунды!', soundLabel: 'Мурлыканье гепарда', diet: 'Хищник (Мясоед)', habitat: 'Саванна и луга', group: 'Млекопитающее' },
    en: { name: 'Cheetah', childDescription: 'Fastest land animal running as fast as a sports car.', funFact: 'Can accelerate from 0 to 100 km/h in 3 seconds!', soundLabel: 'Cheetah Purr & Chirp', diet: 'Carnivore (Meat)', habitat: 'Savannah & Grassland', group: 'Mammal' }
  },
  leopard: {
    az: { name: 'Bəbir', childDescription: 'Gözəl xallı xəzə malik, ağaclara ustalıqla dırmaşan qüdrətli yırtıcı.', funFact: 'Ağac budaqlarında dincəlməyi çox sevir!', soundLabel: 'Bəbirin Güclü Xırıltısı', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Savanna və Çöllük', group: 'Məməli' },
    tr: { name: 'Pars (Leopar)', childDescription: 'Ağaçlara tırmanma ustası benekli büyük kedi.', funFact: 'Ağaç dallarında güvenle uyuyabilir!', soundLabel: 'Leopar Kükremesi', diet: 'Etobur (Et yiyen)', habitat: 'Savana ve Çayırlık', group: 'Memeli' },
    ru: { name: 'Леопард', childDescription: 'Пятнистый ловкий охотник, виртуозно лазающий по деревьям.', funFact: 'Способен затащить на дерево добычу тяжелее самого себя!', soundLabel: 'Низкое рычание леопарда', diet: 'Хищник (Мясоед)', habitat: 'Саванна и луга', group: 'Млекопитающее' },
    en: { name: 'Leopard', childDescription: 'Agile spotted cat resting on high tree branches.', funFact: 'Superb climbers that haul food high into trees!', soundLabel: 'Leopard Low Roar', diet: 'Carnivore (Meat)', habitat: 'Savannah & Grassland', group: 'Mammal' }
  },
  cat: {
    az: { name: 'Ev Pişiyi', childDescription: 'Yumşaq tüklü, evimizdə bizimlə yaşayan, sığallananda xoruldayan şirin dostumuz.', funFact: 'Pişiklər həmişə dörd ayağı üstə yerə düşməyi bacarırlar!', soundLabel: 'Şirin Pişik Miyovultusu', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Ferma və Həyətyanı', group: 'Məməli' },
    tr: { name: 'Ev Kedisi', childDescription: 'Yumuşacık tüylü, okşanınca mırıldayan sevimli ev arkadaşı.', funFact: 'Kediler düşerken neredeyse her zaman dört ayak üstüne inerler!', soundLabel: 'Kedi Miyavlaması', diet: 'Etobur (Et yiyen)', habitat: 'Çiftlik ve Bahçe', group: 'Memeli' },
    ru: { name: 'Домашняя кошка', childDescription: 'Ласковый пушистый друг, который уютно мурлычет на коленях.', funFact: 'У кошек уникальный вестибулярный аппарат — они приземляются на лапы!', soundLabel: 'Нежное мяуканье кошки', diet: 'Хищник (Мясоед)', habitat: 'Ферма и деревенский двор', group: 'Млекопитающее' },
    en: { name: 'Domestic Cat', childDescription: 'Playful agile feline friend that loves to purr.', funFact: 'Cats can rotate their ears 180 degrees!', soundLabel: 'Gentle Cat Meow & Purr', diet: 'Carnivore (Meat)', habitat: 'Farm & Backyard', group: 'Mammal' }
  },
  dog: {
    az: { name: 'Sadiq İt', childDescription: 'İnsanın ən sadiq və etibarlı dostu! Quyruğunu bulayaraq sevincini göstərir.', funFact: 'İtlərin qoxubilmə qabiliyyəti insandan 40 dəfə güclüdür!', soundLabel: 'Şən İt Hürməsi', diet: 'Həryeyən (Hər ikisi)', habitat: 'Ferma və Həyətyanı', group: 'Məməli' },
    tr: { name: 'Sadık Köpek', childDescription: 'İnsanın en sadık ve koruyucu dostu.', funFact: 'Koku alma duyuları insanlardan 40 kat daha güçlüdür!', soundLabel: 'Neşeli Köpek Havlaması', diet: 'Hepçil (Her şeyi yiyen)', habitat: 'Çiftlik ve Bahçe', group: 'Memeli' },
    ru: { name: 'Верная собака', childDescription: 'Самый преданный и чуткий четвероногий друг человека.', funFact: 'Обоняние собаки в десятки тысяч раз острее человеческого!', soundLabel: 'Радостный лай собаки', diet: 'Всеядное (Растения и мясо)', habitat: 'Ферма и деревенский двор', group: 'Млекопитающее' },
    en: { name: 'Domestic Dog', childDescription: 'Loyal best friend that wags its tail with pure joy.', funFact: 'A dog’s sense of smell is 40 times better than humans!', soundLabel: 'Friendly Dog Bark', diet: 'Omnivore (Plants & Meat)', habitat: 'Farm & Backyard', group: 'Mammal' }
  },
  'golden-eagle': {
    az: { name: 'Qızıl Qartal (Bərkut)', childDescription: 'Qafqaz dağlarının ən əzəmətli və güclü yırtıcı quşlarından biri!', funFact: 'Göy üzündən saatda 300 km sürətlə aşağıya şığıya bilir!', soundLabel: 'Qızıl Qartalın Əks-sədası', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Dağlar və Zirvələr', group: 'Quş' },
    tr: { name: 'Kaya Kartalı', childDescription: 'Yüksek zirvelerde süzülen heybetli kaya kartalı.', funFact: 'Avına doğru dalarken hızı 300 km/s üzerine çıkabilir!', soundLabel: 'Kaya Kartalı Sesi', diet: 'Etobur (Et yiyen)', habitat: 'Dağlar ve Zirveler', group: 'Kuş' },
    ru: { name: 'Беркут (Золотой орел)', childDescription: 'Могучий горный орел, парящий над снежными альпийскими пиками.', funFact: 'При пикировании развивает невероятную скорость до 300 км/ч!', soundLabel: 'Клекот беркута', diet: 'Хищник (Мясоед)', habitat: 'Горы и вершины', group: 'Птица' },
    en: { name: 'Golden Eagle', childDescription: 'Majestic bird of prey soaring over mountain summits.', funFact: 'Can dive at speeds over 300 km/h!', soundLabel: 'Golden Eagle Screech', diet: 'Carnivore (Meat)', habitat: 'Mountains', group: 'Bird' }
  },
  'barn-owl': {
    az: { name: 'Ağ Bayquş (Şad Bayquş)', childDescription: 'Ürəkşəkilli ağ sifəti ilə gecələr sakitcə uçan xeyirxah quş.', funFact: 'Qanadları o qədər yumşaqdır ki, havada uçarkən heç səs çıxarmır!', soundLabel: 'Ağ Bayquşun Gecə Səsi', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Ferma və Həyətyanı', group: 'Quş' },
    tr: { name: 'Peçeli Baykuş', childDescription: 'Kalp şeklinde beyaz yüzüyle gece avlanan sessiz avcı.', funFact: 'Kanat tüyleri sayesinde tamamen sessizce uçar!', soundLabel: 'Baykuş Ötüşü', diet: 'Etobur (Et yiyen)', habitat: 'Çiftlik ve Bahçe', group: 'Kuş' },
    ru: { name: 'Сипуха (Белая сова)', childDescription: 'Ночная птица с выразительным сердцевидным белым лицом.', funFact: 'Строение ее крыльев обеспечивает абсолютно бесшумный полет!', soundLabel: 'Крик сипухи', diet: 'Хищник (Мясоед)', habitat: 'Ферма и деревенский двор', group: 'Птица' },
    en: { name: 'Barn Owl', childDescription: 'Heart-shaped face funneling sound for totally silent night flight.', funFact: 'Feather fringes muffle all flying sounds completely!', soundLabel: 'Barn Owl Screech & Hiss', diet: 'Carnivore (Meat)', habitat: 'Farm & Backyard', group: 'Bird' }
  },
  'great-horned-owl': {
    az: { name: 'Böyük Qulaqlı Bayquş', childDescription: 'Tələsik dönən iri gözləri və tük qulaqları olan meşə bayquşu.', funFact: 'Başını 270 dərəcə çevirərək arxasını görə bilir!', soundLabel: 'Bayquşun Hu-hu Səsi', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Meşə və Təbiət', group: 'Quş' },
    tr: { name: 'Büyük Boynuzlu Baykuş', childDescription: 'Kafasını 270 derece döndürebilen orman baykuşu.', funFact: 'Gözleri yuvalarında hareket etmez ama kafasını arkaya çevirir!', soundLabel: 'Baykuş Hu-hu Sesi', diet: 'Etobur (Et yiyen)', habitat: 'Orman ve Ağaçlık', group: 'Kuş' },
    ru: { name: 'Виргинский филин', childDescription: 'Большая лесная сова с перьевыми ушками и огромными желтыми глазами.', funFact: 'Поворачивает голову на 270 градусов, не двигая туловищем!', soundLabel: 'Уханье филина', diet: 'Хищник (Мясоед)', habitat: 'Леса и рощи', group: 'Птица' },
    en: { name: 'Great Horned Owl', childDescription: 'Wise night forest owl that can turn its head 270 degrees.', funFact: 'Its eyes cannot move, so it swivels its whole head!', soundLabel: 'Horned Owl Hoot', diet: 'Carnivore (Meat)', habitat: 'Forest & Woodland', group: 'Bird' }
  },
  sheep: {
    az: { name: 'Ev Qoyunu', childDescription: 'Yumşaq yunlu, çəmənlikdə otlayan dinc kənd heyvanı.', funFact: 'Göz bəbəkləri dördbucaqlıdır və arxasını rahat görə bilir!', soundLabel: 'Qoyunun Mələməsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Ferma və Həyətyanı', group: 'Məməli' },
    tr: { name: 'Koyun', childDescription: 'Kıvırcık yünlü uysal çiftlik hayvanı.', funFact: 'Göz bebekleri dikdörtgendir ve arkasını görebilir!', soundLabel: 'Koyun Melemesi', diet: 'Otobur (Bitkiler)', habitat: 'Çiftlik ve Bahçe', group: 'Memeli' },
    ru: { name: 'Овца', childDescription: 'Доброе шерстяное животное, мирно щиплющее траву на пастбище.', funFact: 'Прямоугольные зрачки овцы дают ей круговой обзор почти на 360 градусов!', soundLabel: 'Блеяние овцы', diet: 'Травоядное (Растения)', habitat: 'Ферма и деревенский двор', group: 'Млекопитающее' },
    en: { name: 'Domestic Sheep', childDescription: 'Gentle woolly animals grazing peacefully together.', funFact: 'Rectangular pupils let them see behind without moving!', soundLabel: 'Gentle Sheep Bleat', diet: 'Herbivore (Plants)', habitat: 'Farm & Backyard', group: 'Mammal' }
  },
  hen: {
    az: { name: 'Ana Toyuq', childDescription: 'Qıqıldayaraq balalarına qayğı göstərən və bizə təzə yumurta verən ev quşu.', funFact: 'Toyuqlar 100-dən çox insan və dostunun üzünü tanıya bilir!', soundLabel: 'Toyuğun Qıqıldaması', diet: 'Həryeyən (Hər ikisi)', habitat: 'Ferma və Həyətyanı', group: 'Quş' },
    tr: { name: 'Tavuk', childDescription: 'Gıdaklayarak civcivlerini koruyan, taze yumurta veren çiftlik kuşu.', funFact: 'Tavuklar 100 farklı yüzü hatırlayabilir!', soundLabel: 'Tavuk Gıdaklaması', diet: 'Hepçil (Her şeyi yiyen)', habitat: 'Çiftlik ve Bahçe', group: 'Kuş' },
    ru: { name: 'Домашняя курица', childDescription: 'Заботливая наседка, кудахчущая во дворе и несущая свежие яйца.', funFact: 'Куры могут запоминать и различать более 100 разных лиц!', soundLabel: 'Кудахтанье курицы', diet: 'Всеядное (Растения и мясо)', habitat: 'Ферма и деревенский двор', group: 'Птица' },
    en: { name: 'Domestic Hen', childDescription: 'Loving mother bird that clucks and lays eggs.', funFact: 'Hens can recognize over 100 distinct faces!', soundLabel: 'Hen Cluck & Cackle', diet: 'Omnivore (Plants & Meat)', habitat: 'Farm & Backyard', group: 'Bird' }
  },
  rooster: {
    az: { name: 'Məğrur Xoruz', childDescription: 'Səhər tezdən günəş çıxanda banlayaraq bütün kəndi yuxudan oyadan qırmızı pipikli quş!', funFact: 'Banlayarkən qulaqlarını xüsusi qapaqla örtür ki, səsi özünü kar etməsin!', soundLabel: 'Xoruzun Gur Banlaması', diet: 'Həryeyən (Hər ikisi)', habitat: 'Ferma və Həyətyanı', group: 'Quş' },
    tr: { name: 'Horoz', childDescription: 'Sabah güneşiyle birlikte ötüp çiftliği uyandıran gururlu kuş.', funFact: 'Öterken kendi kulaklarını kapatan özel bir kulak kapağı vardır!', soundLabel: 'Horoz Ötüşü', diet: 'Hepçil (Her şeyi yiyen)', habitat: 'Çiftlik ve Bahçe', group: 'Kuş' },
    ru: { name: 'Петух', childDescription: 'Гордый красавец с красным гребешком, звонко поющий на заре.', funFact: 'При кукарекании закрывает слуховые проходы, чтобы не оглушить самого себя!', soundLabel: 'Звонкое кукареку петуха', diet: 'Всеядное (Растения и мясо)', habitat: 'Ферма и деревенский двор', group: 'Птица' },
    en: { name: 'Rooster', childDescription: 'Proud farm watcher crowing "Cock-a-doodle-doo" at sunrise.', funFact: 'Closes ears while crowing so it doesn’t deafen itself!', soundLabel: 'Rooster Crow', diet: 'Omnivore (Plants & Meat)', habitat: 'Farm & Backyard', group: 'Bird' }
  },
  cow: {
    az: { name: 'Südlük İnək', childDescription: 'Bizə ləziz süd, qatıq və pendir verən xeyirxah, iri və mehriban dostumuz!', funFact: 'İnəklərin ən yaxın dostları olur və dostundan ayrı qalanda darıxırlar!', soundLabel: 'İnəyin Mögürməsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Ferma və Həyətyanı', group: 'Məməli' },
    tr: { name: 'Süt İneği', childDescription: 'Bize lezzetli süt ve peynir veren sakin dev.', funFact: 'İneklerin en yakın arkadaşları vardır ve ayrılınca üzülürler!', soundLabel: 'İnek Böğürmesi', diet: 'Otobur (Bitkiler)', habitat: 'Çiftlik ve Bahçe', group: 'Memeli' },
    ru: { name: 'Корова', childDescription: 'Добрая кормилица, дающая полезное свежее молоко.', funFact: 'У коров есть лучшие подруги в стаде, с которыми они неразлучны!', soundLabel: 'Протяжное мычание коровы', diet: 'Травоядное (Растения)', habitat: 'Ферма и деревенский двор', group: 'Млекопитающее' },
    en: { name: 'Dairy Cow', childDescription: 'Gentle giant providing wholesome milk for children.', funFact: 'Cows have best friends and get stressed if separated!', soundLabel: 'Cow Gentle Moo', diet: 'Herbivore (Plants)', habitat: 'Farm & Backyard', group: 'Mammal' }
  },
  goose: {
    az: { name: 'Ağ Ev Qazı', childDescription: 'Uzun boyunlu, narıncı dimdikli və suda ləngər vura-vura üzən gözəl quş.', funFact: 'Qazlar sədaqətli quşlardır və ailə qurduqdan sonra ömür boyu birgə qalırlar!', soundLabel: 'Qazın Qaqqıltısı', diet: 'Otyeyən (Bitkilər)', habitat: 'Ferma və Həyətyanı', group: 'Quş' },
    tr: { name: 'Ev Kazı', childDescription: 'Uzun boyunlu, turuncu gagalı beyaz su kuşu.', funFact: 'Kazlar eşlerine ömür boyu sadık kalırlar!', soundLabel: 'Kaz Çığlığı', diet: 'Otobur (Bitkiler)', habitat: 'Çiftlik ve Bahçe', group: 'Kuş' },
    ru: { name: 'Домашний гусь', childDescription: 'Важная белая птица с оранжевыми лапками и длинной шеей.', funFact: 'Гуси выбирают пару на всю жизнь и очень верны друг другу!', soundLabel: 'Гоготание гуся', diet: 'Травоядное (Растения)', habitat: 'Ферма и деревенский двор', group: 'Птица' },
    en: { name: 'Domestic Goose', childDescription: 'Graceful white waterbird with an alert honk.', funFact: 'Geese mate for life and protect their young fiercely!', soundLabel: 'Goose Honk', diet: 'Herbivore (Plants)', habitat: 'Farm & Backyard', group: 'Bird' }
  },
  fox: {
    az: { name: 'Qırmızı Tülkü', childDescription: 'Quyruğu qırmızı və ucu ağ olan, hiyləgər və çox ağıllı meşə ovçusu.', funFact: 'Qışda qarın altında qaçan siçanın səsini eşidib başıaşağı qara tullanır!', soundLabel: 'Tülkünün Cığıltısı', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Meşə və Təbiət', group: 'Məməli' },
    tr: { name: 'Kızıl Tilki', childDescription: 'Gür tüylü kuyruğu ve zekasıyla ünlü sevimli tilki.', funFact: 'Karın altındaki fare sesini duyup kardan içeri dalar!', soundLabel: 'Tilki Havlaması', diet: 'Etobur (Et yiyen)', habitat: 'Orman ve Ağaçlık', group: 'Memeli' },
    ru: { name: 'Рыжая лисица', childDescription: 'Хитрая лесная красавица с пушистым рыжим хвостом.', funFact: 'Лиса может нырять головой в снег, охотясь на мышей под сугробом!', soundLabel: 'Тявканье лисицы', diet: 'Хищник (Мясоед)', habitat: 'Леса и рощи', group: 'Млекопитающее' },
    en: { name: 'Red Fox', childDescription: 'Clever pouncer with a bushy tail hunting in snowy woods.', funFact: 'Can hear mice squeaking beneath deep snowdrifts!', soundLabel: 'Fox Bark & Yip', diet: 'Carnivore (Meat)', habitat: 'Forest & Woodland', group: 'Mammal' }
  },
  swallow: {
    az: { name: 'Qaranquş', childDescription: 'Yazın müjdəçisi olan, qanadları çəngəl kimi iti və havada həşərat tutan sürətli quş!', funFact: 'Yuvalarını palçıq və tüpürcəkləri ilə evlərin eyvanında hörürlər!', soundLabel: 'Qaranquşun Şən Cəh-cəhi', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Ferma və Həyətyanı', group: 'Quş' },
    tr: { name: 'Kırlangıç', childDescription: 'Baharın müjdecisi, çatallı kuyruklu hızlı gökyüzü kuşu.', funFact: 'Yuvalarını çamurdan ve samandan ustalıkla örerler!', soundLabel: 'Kırlangıç Cıvıltısı', diet: 'Etobur (Et yiyen)', habitat: 'Çiftlik ve Bahçe', group: 'Kuş' },
    ru: { name: 'Ласточка', childDescription: 'Быстрокрылая вестница весны с раздвоенным хвостиком.', funFact: 'Ласточки лепят свои гнезда из комочков глины под крышами домов!', soundLabel: 'Звонкое щебетание ласточки', diet: 'Хищник (Мясоед)', habitat: 'Ферма и деревенский двор', group: 'Птица' },
    en: { name: 'Barn Swallow', childDescription: 'Fork-tailed harbinger of spring swooping for flying insects.', funFact: 'Builds mud-pellet cup nests under eaves of barns!', soundLabel: 'Swallow Chirp & Warble', diet: 'Carnivore (Meat)', habitat: 'Farm & Backyard', group: 'Bird' }
  },
  crane: {
    az: { name: 'Boz Durna', childDescription: 'Göylərdə dəstə ilə qatar düzəldib uçan, uzun ayaqlı və zərif nəğməkar quş.', funFact: 'Bahar gələndə bir-birlərinə gözəl rəqslər edirlər!', soundLabel: 'Durnanın Əks-sədalı Səsi', diet: 'Həryeyən (Hər ikisi)', habitat: 'Şirin Su və Çaylar', group: 'Quş' },
    tr: { name: 'Turna', childDescription: 'Zarif uzun bacaklı, gökyüzünde sıra halinde uçan turna.', funFact: 'Eşlerine kur yaparken harika danslar sergilerler!', soundLabel: 'Turna Çığlığı', diet: 'Hepçil (Her şeyi yiyen)', habitat: 'Tatlı Su ve Nehirler', group: 'Kuş' },
    ru: { name: 'Серый журавль', childDescription: 'Грациозная птица с длинными ногами, летящая клином в небесах.', funFact: 'Журавли исполняют удивительные брачные танцы с поклонами и прыжками!', soundLabel: 'Курлыканье журавля', diet: 'Всеядное (Растения и мясо)', habitat: 'Реки и пресные водоемы', group: 'Птица' },
    en: { name: 'Common Crane', childDescription: 'Graceful long-legged bird flying in V-formations.', funFact: 'Perform elaborate leaping courtship dances!', soundLabel: 'Crane Bugle Call', diet: 'Omnivore (Plants & Meat)', habitat: 'Freshwater & River', group: 'Bird' }
  },
  crow: {
    az: { name: 'Ağıllı Qarğa', childDescription: 'Dünyanın ən ağıllı quşlarından biri! Qoz sındırmaq üçün onu maşın yoluna atır.', funFact: 'İnsanların üzünü illərlə yadda saxlayır və alətlərdən istifadə edə bilir!', soundLabel: 'Qarğanın Qarıltısı', diet: 'Həryeyən (Hər ikisi)', habitat: 'Ferma və Həyətyanı', group: 'Quş' },
    tr: { name: 'Karga', childDescription: 'Zekasıyla bilinen, ceviz kırmak için yollara atan akıllı kuş.', funFact: 'Alet kullanabilir ve insan yüzlerini yıllarca unutmaz!', soundLabel: 'Karga Gaklaması', diet: 'Hepçil (Her şeyi yiyen)', habitat: 'Çiftlik ve Bahçe', group: 'Kuş' },
    ru: { name: 'Серая ворона', childDescription: 'Одна из самых сообразительных птиц, умеющая решать головоломки.', funFact: 'Вороны помнят лица людей и передают знания своим сородичам!', soundLabel: 'Карканье вороны', diet: 'Всеядное (Растения и мясо)', habitat: 'Ферма и деревенский двор', group: 'Птица' },
    en: { name: 'Hooded Crow', childDescription: 'Extremely clever bird capable of using tools and solving puzzles.', funFact: 'Remembers human faces for years!', soundLabel: 'Crow Caw', diet: 'Omnivore (Plants & Meat)', habitat: 'Farm & Backyard', group: 'Bird' }
  },
  chick: {
    az: { name: 'Sarı Cücə', childDescription: 'Yumurta qabığını qırıb çıxan, sarı pambıq kimi yumşaq balaca cücə!', funFact: 'Yumurtanın içində olarkən hələ anası ilə cikkildəşərək danışır!', soundLabel: 'Cücənin Şirin Cikkiltisi', diet: 'Həryeyən (Hər ikisi)', habitat: 'Ferma və Həyətyanı', group: 'Quş' },
    tr: { name: 'Sarı Civciv', childDescription: 'Yumurtadan yeni çıkmış pamuk gibi minik sarı civciv.', funFact: 'Yumurtanın içindeyken bile annesiyle sesleşebilir!', soundLabel: 'Civciv Cıvıltısı', diet: 'Hepçil (Her şeyi yiyen)', habitat: 'Çiftlik ve Bahçe', group: 'Kuş' },
    ru: { name: 'Маленький цыпленок', childDescription: 'Пушистый желтый комочек, только что вылупившийся из яйца.', funFact: 'Цыплята могут переговариваться с мамой еще до вылупления!', soundLabel: 'Нежный писк цыпленка', diet: 'Всеядное (Растения и мясо)', habitat: 'Ферма и деревенский двор', group: 'Птица' },
    en: { name: 'Little Chick', childDescription: 'Fluffy yellow baby chick pecking out of its eggshell.', funFact: 'Peeps to its mother hen before even hatching!', soundLabel: 'Chick Peep & Chirp', diet: 'Omnivore (Plants & Meat)', habitat: 'Farm & Backyard', group: 'Bird' }
  },
  snake: {
    az: { name: 'Çəmənlik İlanı', childDescription: 'Ayaqsız, lakin bədəni ilə dalğavari şəkildə sürətlə sürünən parlaq pulcuqlu sürünən.', funFact: 'Ətrafları qoxulamaq və hiss etmək üçün haçalanmış dilini çıxarır!', soundLabel: 'İlanın Fısıltısı', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Meşə və Təbiət', group: 'Sürünən' },
    tr: { name: 'Yılan', childDescription: 'Ayakları olmadan dalgalanarak hızla kayan sürüngen.', funFact: 'Kokuları ve çevresini hissetmek için çatallı dilini kullanır!', soundLabel: 'Yılan Tıslaması', diet: 'Etobur (Et yiyen)', habitat: 'Orman ve Ağaçlık', group: 'Sürüngen' },
    ru: { name: 'Травяной уж', childDescription: 'Гибкое чешуйчатое пресмыкающееся, грациозно скользящее в траве.', funFact: 'Улавливает запахи раздвоенным язычком!', soundLabel: 'Шипение змеи', diet: 'Хищник (Мясоед)', habitat: 'Леса и рощи', group: 'Пресмыкающееся' },
    en: { name: 'Grass Snake', childDescription: 'Legless reptile gliding gracefully across forest moss.', funFact: 'Uses its forked tongue to sample scents in the air!', soundLabel: 'Snake Gentle Hiss', diet: 'Carnivore (Meat)', habitat: 'Forest & Woodland', group: 'Reptile' }
  },
  turtle: {
    az: { name: 'Quru Tısbağası', childDescription: 'Öz zirehli evini belində daşıyan, heç yerə tələsməyən müdrik və sakit dostumuz.', funFact: 'Tısbağalar 100 ildən çox ömür sürə bilirlər!', soundLabel: 'Tısbağanın Sakit Nəfəsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Ferma və Həyətyanı', group: 'Sürünən' },
    tr: { name: 'Kaplumbağa', childDescription: 'Evini sırtında taşıyan, yavaş adımlarla yürüyen sevimli sürüngen.', funFact: 'Bazı kaplumbağalar 100 yıldan uzun yaşayabilir!', soundLabel: 'Kaplumbağa Nefesi', diet: 'Otobur (Bitkiler)', habitat: 'Çiftlik ve Bahçe', group: 'Sürüngen' },
    ru: { name: 'Черепаха', childDescription: 'Мудрое неторопливое создание с крепким панцирным домиком на спине.', funFact: 'Черепахи могут жить более века!', soundLabel: 'Тихое шуршание черепахи', diet: 'Травоядное (Растения)', habitat: 'Ферма и деревенский двор', group: 'Пресмыкающееся' },
    en: { name: 'Tortoise', childDescription: 'Armored gentle creature carrying its dome shell home.', funFact: 'Can live for more than a hundred years!', soundLabel: 'Tortoise Breath & Rustle', diet: 'Herbivore (Plants)', habitat: 'Farm & Backyard', group: 'Reptile' }
  },
  lama: {
    az: { name: 'Lama', childDescription: 'Cənubi Amerika dağlarında yaşayan, yumşaq yunlu və maraqlı iri gözləri olan heyvan.', funFact: 'Hirsli olanda təhlükəni uzaqlaşdırmaq üçün tüpürə bilir!', soundLabel: 'Lamanın Nəzakətli Səsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Dağlar və Zirvələr', group: 'Məməli' },
    tr: { name: 'Lama', childDescription: 'And Dağlarında yaşayan sevimli, tüylü dağ hayvanı.', funFact: 'Kendini korumak için bazen tükürebilir!', soundLabel: 'Lama Sesi', diet: 'Otobur (Bitkiler)', habitat: 'Dağlar ve Zirveler', group: 'Memeli' },
    ru: { name: 'Лама', childDescription: 'Пушистое горное животное из Анд с длинной шеей и выразительными глазами.', funFact: 'Если ламу рассердить, она может метко плюнуть!', soundLabel: 'Гудение ламы', diet: 'Травоядное (Растения)', habitat: 'Горы и вершины', group: 'Млекопитающее' },
    en: { name: 'Llama', childDescription: 'Surefooted Andean pack animal with soft warm fleece.', funFact: 'Spits when annoyed to defend its personal space!', soundLabel: 'Llama Gentle Hum', diet: 'Herbivore (Plants)', habitat: 'Mountains', group: 'Mammal' }
  },
  goat: {
    az: { name: 'Dəcəl Keçi', childDescription: 'Həmişə hündür qayalara və ağac budaqlarına dırmaşmağı sevən çevik heyvan!', funFact: 'Pəncələrinin xüsusi quruluşu sayəsində dik daş divarlarda belə yeriyə bilir!', soundLabel: 'Keçinin Mələməsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Ferma və Həyətyanı', group: 'Məməli' },
    tr: { name: 'Keçi', childDescription: 'Kayalıklara tırmanmayı seven enerjik çiftlik hayvanı.', funFact: 'Özel toynakları sayesinde dimdik yamaçlarda yürüyebilir!', soundLabel: 'Keçi Melemesi', diet: 'Otobur (Bitkiler)', habitat: 'Çiftlik ve Bahçe', group: 'Memeli' },
    ru: { name: 'Коза', childDescription: 'Ловкое рогатое животное, обожающее прыгать по высоким камням.', funFact: 'Благодаря эластичным копытцам козы легко лазают по отвесным скалам!', soundLabel: 'Звонкое блеяние козы', diet: 'Травоядное (Растения)', habitat: 'Ферма и деревенский двор', group: 'Млекопитающее' },
    en: { name: 'Domestic Goat', childDescription: 'Agile climber with specialized rubbery hooves.', funFact: 'Can balance on sheer near-vertical mountain cliffs!', soundLabel: 'Goat Bleat', diet: 'Herbivore (Plants)', habitat: 'Farm & Backyard', group: 'Mammal' }
  },
  calf: {
    az: { name: 'Şirin Buzov', childDescription: 'İnəyin sevimli, iri nəmli gözləri olan və çəmənlikdə tullanan körpə balası.', funFact: 'Doğulduqdan bir neçə dəqiqə sonra ayağa qalxıb qaça bilir!', soundLabel: 'Buzovun İncə Mögürməsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Ferma və Həyətyanı', group: 'Məməli' },
    tr: { name: 'Buzağı', childDescription: 'İneğin neşeyle zıplayan tatlı yavrusu.', funFact: 'Doğduktan birkaç dakika sonra ayağa kalkıp yürüyebilir!', soundLabel: 'Buzağı Sesi', diet: 'Otobur (Bitkiler)', habitat: 'Çiftlik ve Bahçe', group: 'Memeli' },
    ru: { name: 'Теленок', childDescription: 'Очаровательный ласковый детеныш коровы с большими глазами.', funFact: 'Уже через пару минут после рождения может стоять на ножках!', soundLabel: 'Тонкое мычание теленка', diet: 'Травоядное (Растения)', habitat: 'Ферма и деревенский двор', group: 'Млекопитающее' },
    en: { name: 'Little Calf', childDescription: 'Playful baby cow with big dewy eyes bounding through clover.', funFact: 'Can stand and walk within minutes of being born!', soundLabel: 'Baby Calf Gentle Moo', diet: 'Herbivore (Plants)', habitat: 'Farm & Backyard', group: 'Mammal' }
  },
  lamb: {
    az: { name: 'Qıvrım Quzu', childDescription: 'Ağappaq yumşaq yunlu, anasının arxasınca qaçan çox şirin quzu balası.', funFact: 'Anasının səsini yüzlərlə qoyunun arasından dərhal tanıyır!', soundLabel: 'Quzunun İncə Mələməsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Ferma və Həyətyanı', group: 'Məməli' },
    tr: { name: 'Kuzu', childDescription: 'Yumuşacık beyaz yünlü, annesinin peşinden koşan tatlı kuzu.', funFact: 'Annesinin sesini yüzlerce koyun arasından tanır!', soundLabel: 'Kuzu Melemesi', diet: 'Otobur (Bitkiler)', habitat: 'Çiftlik ve Bahçe', group: 'Memeli' },
    ru: { name: 'Ягненок', childDescription: 'Маленький кудрявый детеныш овечки, весело скачущий по лугу.', funFact: 'Узнает голос своей мамы среди целой отары овец!', soundLabel: 'Тонкое блеяние ягненка', diet: 'Травоядное (Растения)', habitat: 'Ферма и деревенский двор', group: 'Млекопитающее' },
    en: { name: 'Fluffy Lamb', childDescription: 'Curly-fleeced baby sheep prancing behind its mother.', funFact: 'Can recognize its mother’s unique voice across a meadow!', soundLabel: 'Baby Lamb Bleat', diet: 'Herbivore (Plants)', habitat: 'Farm & Backyard', group: 'Mammal' }
  },
  buffalo: {
    az: { name: 'Su Camışı', childDescription: 'Böyük qövsşəkilli buynuzları olan, gölməçələrdə və suda sərinləməyi sevən güclü heyvan.', funFact: 'Bataqlıq sularında dincələrək bədənini istidən qoruyur!', soundLabel: 'Camışın Dərin Gurultusu', diet: 'Otyeyən (Bitkilər)', habitat: 'Şirin Su və Çaylar', group: 'Məməli' },
    tr: { name: 'Manda (Su Sığırı)', childDescription: 'Güçlü boynuzlarıyla çamur banyolarını seven sakin dev.', funFact: 'Serinlemek için çamurlu göletlerde saatlerce kalır!', soundLabel: 'Manda Böğürmesi', diet: 'Otobur (Bitkiler)', habitat: 'Tatlı Su ve Nehirler', group: 'Memeli' },
    ru: { name: 'Водяной буйвол', childDescription: 'Мощное рогатое животное, любящее купаться в прохладной воде.', funFact: 'Грязевые ванны помогают буйволам защищаться от жары и насекомых!', soundLabel: 'Глубокий рев буйвола', diet: 'Травоядное (Растения)', habitat: 'Реки и пресные водоемы', group: 'Млекопитающее' },
    en: { name: 'Water Buffalo', childDescription: 'Sturdy swimmer cooling off in muddy tropical riverbanks.', funFact: 'Spends much of the day submerged in water!', soundLabel: 'Buffalo Deep Grunt', diet: 'Herbivore (Plants)', habitat: 'Freshwater & River', group: 'Mammal' }
  },
  donkey: {
    az: { name: 'Zəhmətkeş Ulaq (Eşşək)', childDescription: 'Uzun qulaqları olan, kəndlilərə yük daşımaqda kömək edən səbirli dostumuz.', funFact: 'Yaddaşı o qədər güclüdür ki, 25 il əvvəl keçdiyi cığırı heç vaxt unutmur!', soundLabel: 'Ulağın Şən Anqırması', diet: 'Otyeyən (Bitkilər)', habitat: 'Ferma və Həyətyanı', group: 'Məməli' },
    tr: { name: 'Eşek', childDescription: 'Uzun kulaklı, sabırlı ve çalışkan çiftlik yardımcısı.', funFact: '25 yıl önce geçtiği yolları bile unutmayan muhteşem bir hafızası vardır!', soundLabel: 'Eşek Anırması', diet: 'Otobur (Bitkiler)', habitat: 'Çiftlik ve Bahçe', group: 'Memeli' },
    ru: { name: 'Ослик', childDescription: 'Выносливый длинноухий помощник с добрым и терпеливым нравом.', funFact: 'У осликов феноменальная память — они помнят тропинки спустя 25 лет!', soundLabel: 'Громкое кричание ослика', diet: 'Травоядное (Растения)', habitat: 'Ферма и деревенский двор', group: 'Млекопитающее' },
    en: { name: 'Domestic Donkey', childDescription: 'Patient long-eared helper with extraordinary path memory.', funFact: 'Can remember paths and places from 25 years ago!', soundLabel: 'Donkey Bray', diet: 'Herbivore (Plants)', habitat: 'Farm & Backyard', group: 'Mammal' }
  },
  horse: {
    az: { name: 'Ərəb Atı', childDescription: 'Külək kimi yeyin qaçan, yalı dalğalanan qürurlu və nəcib heyvan.', funFact: 'Atlar həm ayaqüstə, həm də uzanaraq yata bilirlər!', soundLabel: 'Atın Şən Kişnəməsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Ferma və Həyətyanı', group: 'Məməli' },
    tr: { name: 'Arap Atı', childDescription: 'Rüzgar gibi koşan asil ve sadık dostumuz.', funFact: 'Atlar ayakta da uyuyabilirler!', soundLabel: 'At Kişnemesi', diet: 'Otobur (Bitkiler)', habitat: 'Çiftlik ve Bahçe', group: 'Memeli' },
    ru: { name: 'Арабский конь', childDescription: 'Благородный и быстрый скакун с развевающейся на ветру гривой.', funFact: 'Лошади умеют спать как стоя, так и лежа!', soundLabel: 'Звонкое ржание коня', diet: 'Травоядное (Растения)', habitat: 'Ферма и деревенский двор', group: 'Млекопитающее' },
    en: { name: 'Arabian Horse', childDescription: 'Noble, fast runner with flowing mane galloping across meadows.', funFact: 'Horses can sleep both lying down and standing up!', soundLabel: 'Horse Whinny & Neigh', diet: 'Herbivore (Plants)', habitat: 'Farm & Backyard', group: 'Mammal' }
  },
  gazelle: {
    az: { name: 'Gözəl Ceyran', childDescription: 'Azərbaycan təbiətinin və Şirvan düzünün ən zərif, gözəl və sürətli ceyranı!', funFact: 'Tullandıqda sanki havada uçur və saatda 80 km sürətlə qaça bilir!', soundLabel: 'Ceyranın Zərif Səsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Savanna və Çöllük', group: 'Məməli' },
    tr: { name: 'Ceylan', childDescription: 'Bozkırların narin bakışlı, zarif ve çok hızlı koşan hayvanı.', funFact: 'Zıplarken adeta havada süzülür gibi koşar!', soundLabel: 'Ceylan Sesi', diet: 'Otobur (Bitkiler)', habitat: 'Savana ve Çayırlık', group: 'Memeli' },
    ru: { name: 'Джейран (Газель)', childDescription: 'Грациозная степная красавица с быстрыми стройными ножками.', funFact: 'Бегает со скоростью до 80 км/ч, совершая гигантские прыжки!', soundLabel: 'Тихий свист джейрана', diet: 'Травоядное (Растения)', habitat: 'Саванна и луга', group: 'Млекопитающее' },
    en: { name: 'Goitered Gazelle', childDescription: 'Graceful leaper on open plains with alert black horns.', funFact: 'Can leap over 3 meters into the air while bounding!', soundLabel: 'Gazelle Snort & Bound', diet: 'Herbivore (Plants)', habitat: 'Savannah & Grassland', group: 'Mammal' }
  },
  'roe-deer': {
    az: { name: 'Avropa Cüyürü', childDescription: 'Qafqaz meşələrinin incə dırnaqlı, qısa buynuzlu çox zərif və ürkək maralı.', funFact: 'Təhlükə hiss edəndə quyruğundakı ağ xalı parıldadaraq qaçır!', soundLabel: 'Cüyürün İncə Səsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Meşə və Təbiət', group: 'Məməli' },
    tr: { name: 'Karaca', childDescription: 'Ormanların narin ve ürkek minik geyiği.', funFact: 'Tehlike anında beyaz kuyruk lekesini parlatarak uyarır!', soundLabel: 'Karaca Sesi', diet: 'Otobur (Bitkiler)', habitat: 'Orman ve Ağaçlık', group: 'Memeli' },
    ru: { name: 'Европейская косуля', childDescription: 'Маленький изящный олень с выразительными глазами-бусинками.', funFact: 'Превосходно прыгает сквозь густые лесные заросли!', soundLabel: 'Тихий крик косули', diet: 'Травоядное (Растения)', habitat: 'Леса и рощи', group: 'Млекопитающее' },
    en: { name: 'European Roe Deer', childDescription: 'Dainty forest deer with agile jumps through woodlands.', funFact: 'Flashes a white tail rump patch when startled!', soundLabel: 'Roe Deer Bark', diet: 'Herbivore (Plants)', habitat: 'Forest & Woodland', group: 'Mammal' }
  },
  'red-deer': {
    az: { name: 'Nəcib Qafqaz Maralı', childDescription: 'Böyük budaqlı buynuzları olan, meşələrin əsl şahı sayılan nəhəng maral.', funFact: 'Payızda güclü nərə çəkərək bütün meşəni səsə bürüyür!', soundLabel: 'Nəcib Maral Nərəsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Meşə və Təbiət', group: 'Məməli' },
    tr: { name: 'Kızıl Geyik', childDescription: 'Dallı budaklı görkemli boynuzlarıyla ormanların kralı.', funFact: 'Boynuzlarını her yıl döküp yenisini çıkarır!', soundLabel: 'Geyik Böğürmesi', diet: 'Otobur (Bitkiler)', habitat: 'Orman ve Ağaçlık', group: 'Memeli' },
    ru: { name: 'Благородный олень', childDescription: 'Величественный лесной красавец с ветвистыми царственными рогами.', funFact: 'Каждый год сбрасывает рога, чтобы отрастить еще более пышные!', soundLabel: 'Трубный рев благородного оленя', diet: 'Травоядное (Растения)', habitat: 'Леса и рощи', group: 'Млекопитающее' },
    en: { name: 'Caspian Red Deer', childDescription: 'Antlered forest monarch with deep autumn roars.', funFact: 'Stags shed and regrow massive antlers every year!', soundLabel: 'Red Deer Roar', diet: 'Herbivore (Plants)', habitat: 'Forest & Woodland', group: 'Mammal' }
  },
  peacock: {
    az: { name: 'Hind Tovuzquşu', childDescription: 'Göy-yaşıl gözlü və zümrüd quyruğunu nəhəng yelpik kimi açan nağıl quşu!', funFact: 'Quyruğundakı lələklər günəşdə parıldayır və 150-dən çox lələkdən ibarətdir!', soundLabel: 'Tovuzquşunun Zəng Səsi', diet: 'Həryeyən (Hər ikisi)', habitat: 'Ferma və Həyətyanı', group: 'Quş' },
    tr: { name: 'Tavuskuşu', childDescription: 'Göz kamaştırıcı rengarenk kuyruğunu yelpaze gibi açan muhteşem kuş.', funFact: 'Kuyruğundaki göz desenleri güneş ışığında parıldar!', soundLabel: 'Tavuskuşu Çığlığı', diet: 'Hepçil (Her şeyi yiyen)', habitat: 'Çiftlik ve Bahçe', group: 'Kuş' },
    ru: { name: 'Индийский павлин', childDescription: 'Сказочная птица с роскошным веерным хвостом, переливающимся на солнце.', funFact: 'В хвосте павлина более 150 перьев с узорами-глазками!', soundLabel: 'Звонкий крик павлина', diet: 'Всеядное (Растения и мясо)', habitat: 'Ферма и деревенский двор', group: 'Птица' },
    en: { name: 'Indian Peacock', childDescription: 'Dazzling bird fanning an iridescent emerald-and-azure train.', funFact: 'Has over 150 feathers with shimmering eyespots!', soundLabel: 'Peacock Call', diet: 'Omnivore (Plants & Meat)', habitat: 'Farm & Backyard', group: 'Bird' }
  },
  duck: {
    az: { name: 'Yaşılbaş Ördək', childDescription: 'Başı parlaq zümrüd yaşılı olan, suda qanad çalıb quyruğunu bulayan dinc quş.', funFact: 'Tükləri xüsusi yağla örtülüdür və suya batdıqda belə quru qalır!', soundLabel: 'Ördəyin Vaqqıltısı', diet: 'Həryeyən (Hər ikisi)', habitat: 'Şirin Su və Çaylar', group: 'Quş' },
    tr: { name: 'Yeşilbaş Ördek', childDescription: 'Yeşil parıltılı tüyleriyle göletlerde neşeyle yüzen su kuşu.', funFact: 'Tüyleri su geçirmezdir, dalsa bile kuru kalır!', soundLabel: 'Ördek Vakvaklaması', diet: 'Hepçil (Her şeyi yiyen)', habitat: 'Tatlı Su ve Nehirler', group: 'Kuş' },
    ru: { name: 'Утка кряква', childDescription: 'Водоплавающая птица с переливающейся зеленой шапочкой на голове.', funFact: 'Перья утки покрыты водоотталкивающим слоем и никогда не промокают!', soundLabel: 'Веселое кряканье утки', diet: 'Всеядное (Растения и мясо)', habitat: 'Реки и пресные водоемы', group: 'Птица' },
    en: { name: 'Mallard Duck', childDescription: 'Iridescent waterbird with waterproof feathers dabbling in rivers.', funFact: 'Feathers are so waterproof they stay bone-dry underwater!', soundLabel: 'Duck Quack', diet: 'Omnivore (Plants & Meat)', habitat: 'Freshwater & River', group: 'Bird' }
  },
  zebra: {
    az: { name: 'Savanna Zebrası', childDescription: 'Ağ və qara zolaqlı xəzləri olan, savanna çöllərində dəstə ilə qaçan cəsur at.', funFact: 'Zolaqları sayəsində ağcaqanadlar və zəhərli həşəratlar onları dişləyə bilmir!', soundLabel: 'Zebranın Şən Səsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Savanna və Çöllük', group: 'Məməli' },
    tr: { name: 'Zebra', childDescription: 'Siyah ve beyaz çizgileriyle ünlü vahşi Afrika atı.', funFact: 'Çizgileri sineklerin kafasını karıştırarak ısırmasını önler!', soundLabel: 'Zebra Kişnemesi', diet: 'Otobur (Bitkiler)', habitat: 'Savana ve Çayırlık', group: 'Memeli' },
    ru: { name: 'Зебра', childDescription: 'Дикая африканская лошадка в нарядную черно-белую полоску.', funFact: 'Полосатый узор отпугивает кусачих насекомых и мух цеце!', soundLabel: 'Ржание зебры', diet: 'Травоядное (Растения)', habitat: 'Саванна и луга', group: 'Млекопитающее' },
    en: { name: 'Plains Zebra', childDescription: 'Black-and-white striped runner confusing biting insects.', funFact: 'Every zebra has a unique pattern of stripes like a barcode!', soundLabel: 'Zebra Whinny & Bark', diet: 'Herbivore (Plants)', habitat: 'Savannah & Grassland', group: 'Mammal' }
  },
  kangaroo: {
    az: { name: 'Qırmızı Kenquru', childDescription: 'Qarnında balası üçün isti kisəsi olan və güclü quyruğuna söykənib tullanan canlı.', funFact: 'Bir tullanışda 9 metr məsafə qət edə bilir!', soundLabel: 'Kenqurunun Tullantı Səsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Savanna və Çöllük', group: 'Məməli' },
    tr: { name: 'Kızıl Kanguru', childDescription: 'Karnındaki cebinde bebeğini taşıyan zıpzıp Avustralya hayvanı.', funFact: 'Tek bir sıçrayışta 9 metre ileriye atlayabilir!', soundLabel: 'Kanguru Zıplama Sesi', diet: 'Otobur (Bitkiler)', habitat: 'Savana ve Çayırlık', group: 'Memeli' },
    ru: { name: 'Рыжий кенгуру', childDescription: 'Знаменитый австралийский прыгун с уютной сумкой для малыша.', funFact: 'Один прыжок кенгуру может достигать 9 метров в длину!', soundLabel: 'Прыжки кенгуру', diet: 'Травоядное (Растения)', habitat: 'Саванна и луга', group: 'Млекопитающее' },
    en: { name: 'Red Kangaroo', childDescription: 'Marsupial leaper carrying its baby joey safely in a pouch.', funFact: 'Can leap over 9 meters in a single bound!', soundLabel: 'Kangaroo Thump & Hop', diet: 'Herbivore (Plants)', habitat: 'Savannah & Grassland', group: 'Mammal' }
  },
  rhinoceros: {
    az: { name: 'Ağ Kərgədan', childDescription: 'Burnunun üstündə möhkəm buynuzu olan, qalın dərili zirehli nəhəng.', funFact: 'Buynuzu saçlarımız və dırnaqlarımız kimi keratindən ibarətdir!', soundLabel: 'Kərgədanın Püskürməsi', diet: 'Otyeyən (Bitkilər)', habitat: 'Savanna və Çöllük', group: 'Məməli' },
    tr: { name: 'Beyaz Gergedan', childDescription: 'Burnunun ucundaki güçlü boynuzuyla zırhlı otobur dev.', funFact: 'Boynuzu tırnaklarımız gibi keratinden oluşur!', soundLabel: 'Gergedan Hırıltısı', diet: 'Otobur (Bitkiler)', habitat: 'Savana ve Çayırlık', group: 'Memeli' },
    ru: { name: 'Белый носорог', childDescription: 'Огромный травоядный исполин с массивным рогом на носу.', funFact: 'Рог носорога состоит из кератина — того же вещества, что наши ногти!', soundLabel: 'Фырканье носорога', diet: 'Травоядное (Растения)', habitat: 'Саванна и луга', group: 'Млекопитающее' },
    en: { name: 'White Rhinoceros', childDescription: 'Armored herbivore with keratin horns grazing on savannah plains.', funFact: 'Its horn is made of keratin, just like our fingernails!', soundLabel: 'Rhino Snort & Bellow', diet: 'Herbivore (Plants)', habitat: 'Savannah & Grassland', group: 'Mammal' }
  },
  crocodile: {
    az: { name: 'Nil Timsahı', childDescription: 'Çayların və bataqlıqların qədim zirehli və güclü çənəli sürünəni.', funFact: 'Su altında gözlərini qorumaq üçün üçüncü şəffaf göz qapağı var!', soundLabel: 'Timsahın Gurultusu', diet: 'Yırtıcı (Ətyeyən)', habitat: 'Şirin Su və Çaylar', group: 'Sürünən' },
    tr: { name: 'Nil Timsahı', childDescription: 'Güçlü çenesiyle su kenarlarında yaşayan antik zırhlı sürüngen.', funFact: 'Su altında net görebilmek için üçüncü bir şeffaf göz kapağı vardır!', soundLabel: 'Timsah Kükremesi', diet: 'Etobur (Et yiyen)', habitat: 'Tatlı Su ve Nehirler', group: 'Sürüngen' },
    ru: { name: 'Нильский крокодил', childDescription: 'Древний бронированный житель рек с мощными челюстями.', funFact: 'У крокодила есть третье прозрачное веко для защиты глаз под водой!', soundLabel: 'Глухой рык крокодила', diet: 'Хищник (Мясоед)', habitat: 'Реки и пресные водоемы', group: 'Пресмыкающееся' },
    en: { name: 'Nile Crocodile', childDescription: 'Ancient armored swamp predator with a powerful bite.', funFact: 'Has a third clear eyelid acting like swimming goggles underwater!', soundLabel: 'Crocodile Growl & Hiss', diet: 'Carnivore (Meat)', habitat: 'Freshwater & River', group: 'Reptile' }
  },
  pig: {
    az: { name: 'Ev Donuzu', childDescription: 'Qıvrım quyruqlu, düymə burunlu və palçıqda sərinlənməyi sevən çox ağıllı heyvan.', funFact: 'Dünyanın ən ağıllı 5 heyvanından biridir və gözəl musiqi yaddaşı var!', soundLabel: 'Donuzun Xorultusu', diet: 'Həryeyən (Hər ikisi)', habitat: 'Ferma və Həyətyanı', group: 'Məməli' },
    tr: { name: 'Evcil Domuz', childDescription: 'Kıvrık kuyruklu, pembe burunlu neşeli çiftlik hayvanı.', funFact: 'Dünyanın en zeki 5 hayvanı arasındadır!', soundLabel: 'Domuz Homurtusu', diet: 'Hepçil (Her şeyi yiyen)', habitat: 'Çiftlik ve Bahçe', group: 'Memeli' },
    ru: { name: 'Домашняя свинья', childDescription: 'Веселое смышленое животное с забавным пятачком и хвостиком крючком.', funFact: 'Свиньи входят в пятерку самых сообразительных животных на Земле!', soundLabel: 'Хрюканье свинки', diet: 'Всеядное (Растения и мясо)', habitat: 'Ферма и деревенский двор', group: 'Млекопитающее' },
    en: { name: 'Domestic Pig', childDescription: 'Cheerful, intelligent farm animal with a curly tail and button snout.', funFact: 'Pigs are among the top 5 smartest animals on Earth!', soundLabel: 'Pig Oink & Snort', diet: 'Omnivore (Plants & Meat)', habitat: 'Farm & Backyard', group: 'Mammal' }
  }
};

// Global Habitats Translation
export const HABITAT_TRANSLATIONS: Record<string, Record<Language, string>> = {
  'Savannah & Grassland': { az: 'Savanna və Çöllük', tr: 'Savana ve Çayırlık', ru: 'Саванна и луга', en: 'Savannah & Grassland' },
  'Rainforest & Jungle': { az: 'Cəngəllik və Tropik Meşə', tr: 'Yağmur Ormanı', ru: 'Тропические леса', en: 'Rainforest & Jungle' },
  'Ocean & Marine': { az: 'Okean və Dəniz', tr: 'Okyanus ve Deniz', ru: 'Океаны и моря', en: 'Ocean & Marine' },
  'Polar & Arctic': { az: 'Qütb və Arktika', tr: 'Kutup ve Arktika', ru: 'Полярные льды и Арктика', en: 'Polar & Arctic' },
  'Forest & Woodland': { az: 'Meşə və Təbiət', tr: 'Orman ve Ağaçlık', ru: 'Леса и рощи', en: 'Forest & Woodland' },
  'Mountains': { az: 'Dağlar və Zirvələr', tr: 'Dağlar ve Zirveler', ru: 'Горы и вершины', en: 'Mountains' },
  'Desert': { az: 'Səhra və Quraqlıq', tr: 'Çöl ve Kurak Alanlar', ru: 'Пустыни и дюны', en: 'Desert' },
  'Freshwater & River': { az: 'Şirin Su və Çaylar', tr: 'Tatlı Su ve Nehirler', ru: 'Реки и пресные водоемы', en: 'Freshwater & River' },
  'Farm & Backyard': { az: 'Ferma və Həyətyanı', tr: 'Çiftlik ve Bahçe', ru: 'Ферма и деревенский двор', en: 'Farm & Backyard' },
  'All': { az: 'Bütün Mühitlər', tr: 'Tüm Yaşam Alanları', ru: 'Все среды обитания', en: 'All Habitats' }
};

// Global Groups Translation
export const GROUP_TRANSLATIONS: Record<string, Record<Language, string>> = {
  'Mammal': { az: 'Məməli', tr: 'Memeli', ru: 'Млекопитающее', en: 'Mammal' },
  'Bird': { az: 'Quş', tr: 'Kuş', ru: 'Птица', en: 'Bird' },
  'Reptile': { az: 'Sürünən', tr: 'Sürüngen', ru: 'Пресмыкающееся', en: 'Reptile' },
  'Amphibian': { az: 'Suda-quruda yaşayan', tr: 'İkiyaşamlı (Amfibi)', ru: 'Земноводное', en: 'Amphibian' },
  'Fish & Ocean Life': { az: 'Balıq və Dəniz Canlısı', tr: 'Balık ve Deniz Canlısı', ru: 'Рыбы и морская жизнь', en: 'Fish & Ocean Life' },
  'Invertebrate & Insect': { az: 'Onurğasız və Həşərat', tr: 'Omurgasız ve Böcek', ru: 'Беспозвоночные и насекомые', en: 'Invertebrate & Insect' },
  'All': { az: 'Bütün Qruplar', tr: 'Tüm Canlı Grupları', ru: 'Все группы животных', en: 'All Groups' }
};

// Global Diet Translation
export const DIET_TRANSLATIONS: Record<string, Record<Language, string>> = {
  'Herbivore (Plants)': { az: 'Otyeyən (Bitkilər)', tr: 'Otobur (Bitkiler)', ru: 'Травоядное (Растения)', en: 'Herbivore (Plants)' },
  'Carnivore (Meat)': { az: 'Yırtıcı (Ətyeyən)', tr: 'Etobur (Et yiyen)', ru: 'Хищник (Мясоед)', en: 'Carnivore (Meat)' },
  'Omnivore (Plants & Meat)': { az: 'Həryeyən (Hər ikisi)', tr: 'Hepçil (Her şeyi yiyen)', ru: 'Всеядное (Растения и мясо)', en: 'Omnivore (Plants & Meat)' }
};

// General Catalog Word Dictionary for Dynamic Species Translation
export const BASE_SPECIES_AZ: Record<string, string> = {
  'cat': 'Pişik',
  'dog': 'İt',
  'sheep': 'Qoyun',
  'cow': 'İnək',
  'wolf': 'Canavar',
  'elephant': 'Fil',
  'tiger': 'Pələng',
  'bear': 'Ayı',
  'panda': 'Panda',
  'whale': 'Balina',
  'dolphin': 'Delfin',
  'cheetah': 'Hepard',
  'leopard': 'Bəbir',
  'lion': 'Aslan',
  'giraffe': 'Zürafə',
  'fox': 'Tülkü',
  'horse': 'At',
  'donkey': 'Ulaq',
  'zebra': 'Zebra',
  'camel': 'Dəvə',
  'alpaca': 'Alpaka',
  'llama': 'Lama',
  'bison': 'Bizon',
  'buffalo': 'Camış',
  'hare': 'Dovşan',
  'rabbit': 'Dovşan',
  'badger': 'Porsuq',
  'beaver': 'Qunduz',
  'capybara': 'Kapibara',
  'chimpanzee': 'Şimpanze',
  'monkey': 'Meymun',
  'baboon': 'Paviyan',
  'hedgehog': 'Kirpi',
  'hippopotamus': 'Begemot',
  'jaguar': 'Yaquar',
  'kangaroo': 'Kenquru',
  'koala': 'Koala',
  'moose': 'Sığın',
  'goat': 'Keçi',
  'narwhal': 'Narval',
  'orangutan': 'Oranqutan',
  'otter': 'Samur',
  'sloth': 'Tənbəl',
  'walrus': 'Morj',
  'wombat': 'Vombat',
  'seal': 'Suiti',
  'anteater': 'Qarışqayeyən',
  'eagle': 'Qartal',
  'owl': 'Bayquş',
  'puffin': 'Tupik',
  'hen': 'Toyuq',
  'rooster': 'Xoruz',
  'goose': 'Qaz',
  'duck': 'Ördək',
  'flamingo': 'Flamingo',
  'hummingbird': 'Kolibri',
  'kingfisher': 'Şanapipik',
  'ostrich': 'Dəvəquşu',
  'falcon': 'Qızılquş',
  'parrot': 'Tutuquşu',
  'toucan': 'Tukan',
  'albatross': 'Albatros',
  'swan': 'Qu quşu',
  'woodpecker': 'Ağacdələn',
  'penguin': 'Pinqvin',
  'alligator': 'Alliqator',
  'crocodile': 'Timsah',
  'chameleon': 'Buqələmun',
  'snake': 'İlan',
  'tortoise': 'Tısbağa',
  'turtle': 'Dəniz Tısbağası',
  'gecko': 'Qekkon',
  'iguana': 'İquana',
  'frog': 'Qurbağa',
  'toad': 'Quru Qurbağası',
  'axolotl': 'Aksolotl',
  'salamander': 'Salamandra',
  'shark': 'Akula',
  'ray': 'Skat',
  'trout': 'Qızılxallı',
  'salmon': 'Qızılbalıq',
  'seahorse': 'Dəniz Atı',
  'eel': 'İlanbalığı',
  'butterfly': 'Kəpənək',
  'firefly': 'İşıqböcəyi',
  'octopus': 'Səkkizayaq',
  'bee': 'Arı',
  'jellyfish': 'Meduza',
  'ladybug': 'Parbüzən',
  'mantis': 'Dəvədəlləyi',
  'spider': 'Hörümçək',
  'tarantula': 'Tarantul',
  'gazelle': 'Ceyran',
  'antelope': 'Antilop',
  'macaque': 'Makaka',
  'squirrel': 'Dələ',
  'mongoose': 'Manqust',
  'porcupine': 'Oxlu Kirpi',
  'bat': 'Yarasa',
  'warbler': 'Bülbülcük',
  'finch': 'Hörücə',
  'heron': 'Vağ',
  'pelican': 'Qutan'
};

export const ADJECTIVES_AZ: Record<string, string> = {
  'northern': 'Şimal',
  'southern': 'Cənub',
  'eastern': 'Şərq',
  'western': 'Qərb',
  'arctic': 'Arktika',
  'polar': 'Qütb',
  'tropical': 'Tropik',
  'golden': 'Qızılı',
  'spotted': 'Xallı',
  'striped': 'Zolaqlı',
  'giant': 'Nəhəng',
  'pygmy': 'Cırtdan',
  'dwarf': 'Cırtdan',
  'red': 'Qırmızı',
  'blue': 'Mavi',
  'emerald': 'Zümrüd',
  'snowy': 'Qar',
  'crowned': 'Taclı',
  'masked': 'Maskalı',
  'silvery': 'Gümüşü',
  'black': 'Qara',
  'white': 'Ağ',
  'gray': 'Boz',
  'grey': 'Boz',
  'velvet': 'Məxməri',
  'long-eared': 'Uzunqulaq',
  'ring-tailed': 'Zolaqlıquyruq',
  'greater': 'Böyük',
  'lesser': 'Kiçik',
  'mountain': 'Dağ',
  'desert': 'Səhra',
  'river': 'Çay',
  'ocean': 'Okean',
  'sea': 'Dəniz',
  'forest': 'Meşə',
  'coastal': 'Sahil',
  'domestic': 'Ev',
  'african': 'Afrika',
  'asian': 'Asiya',
  'american': 'Amerika',
  'bengal': 'Benqal',
  'emperor': 'İmperator',
  'atlantic': 'Atlantika',
  'pacific': 'Sakit Okean',
  'himalayan': 'Himalay',
  'andean': 'And',
  'amazonian': 'Amazon'
};

// Translate any species name cleanly into Azerbaijani
export function translateSpeciesNameToAz(englishName: string): string {
  const clean = englishName.trim();
  const lower = clean.toLowerCase();

  // Direct match
  if (BASE_SPECIES_AZ[lower]) {
    return BASE_SPECIES_AZ[lower];
  }

  // Multi-word breakdown
  const words = clean.split(/[\s-]+/);
  const translatedWords = words.map((w, idx) => {
    const wLower = w.toLowerCase();
    if (ADJECTIVES_AZ[wLower]) return ADJECTIVES_AZ[wLower];
    if (BASE_SPECIES_AZ[wLower]) return BASE_SPECIES_AZ[wLower];
    return w;
  });

  return translatedWords.join(' ');
}
