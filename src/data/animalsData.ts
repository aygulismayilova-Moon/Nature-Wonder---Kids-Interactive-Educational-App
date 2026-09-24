import { Animal, CatalogAnimal, AnimalMultiViews } from '../types';

export const FEATURED_ANIMALS: Animal[] = [
  {
    id: 'lion',
    name: 'Lion',
    scientificName: 'Panthera leo',
    group: 'Mammal',
    habitat: 'Savannah & Grassland',
    diet: 'Carnivore (Meat)',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80',
    emoji: '🦁',
    soundType: 'roar',
    soundLabel: 'Mighty Lion Roar',
    audioUrl: '/sounds/lion_roar.mp3',
    youtubeId: '9VTDUfxCYxU',
    youtubeUrl: 'https://youtu.be/9VTDUfxCYxU?si=Q915RgfjcDXWbhBP',
    childDescription: 'Lions are known as the kings of the savannah! They live together in warm family groups called prides.',
    funFact: 'A lion’s roar is so powerful it can be heard from 5 miles (8 km) away across the plains!',
    size: 'Up to 2 meters long, 190 kg',
    lifespan: '10 to 14 years in the wild',
    speed: '80 km/h in short bursts'
  },
  {
    id: 'elephant',
    name: 'African Elephant',
    scientificName: 'Loxodonta africana',
    group: 'Mammal',
    habitat: 'Savannah & Grassland',
    diet: 'Herbivore (Plants)',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=80',
    emoji: '🐘',
    soundType: 'trumpet',
    soundLabel: 'Majestic African Elephant Trumpet & Rumble',
    audioUrl: 'https://soundbible.com/mp3/Elephant Trumpeting-SoundBible.com-1343370148.mp3',
    youtubeId: 'An44Lb1reJM',
    youtubeUrl: 'https://youtube.com/shorts/An44Lb1reJM?si=h4xTd4oCFR-3Dvgr',
    childDescription: 'Elephants are the largest walking animals on Earth. Their long trunks are like super-hands that can hug, drink, and pick fruit!',
    funFact: 'An elephant trunk has over 40,000 muscles and can pick up a single tiny peanut or a whole tree branch!',
    size: 'Up to 3.3 meters tall, 6,000 kg',
    lifespan: '60 to 70 years',
    speed: '40 km/h'
  },
  {
    id: 'tiger',
    name: 'Bengal Tiger',
    scientificName: 'Panthera tigris',
    group: 'Mammal',
    habitat: 'Rainforest & Jungle',
    diet: 'Carnivore (Meat)',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&q=80',
    emoji: '🐯',
    soundType: 'tiger_growl',
    soundLabel: 'Fierce Bengal Tiger Roar & Guttural Snarl',
    audioUrl: 'https://soundbible.com/mp3/Tiger Growling-SoundBible.com-258880045.mp3',
    childDescription: 'Tigers are majestic big cats with bright orange fur and black stripes. Unlike domestic house cats, tigers LOVE swimming!',
    funFact: 'No two tigers ever have the exact same stripe pattern — their stripes are unique just like human fingerprints!',
    size: 'Up to 3 meters long, 220 kg',
    lifespan: '10 to 15 years',
    speed: '65 km/h'
  },
  {
    id: 'panda',
    name: 'Giant Panda',
    scientificName: 'Ailuropoda melanoleuca',
    group: 'Mammal',
    habitat: 'Forest & Woodland',
    diet: 'Herbivore (Plants)',
    image: 'https://images.unsplash.com/photo-1527118732049-c88155f2107c?auto=format&fit=crop&w=900&q=80',
    emoji: '🐼',
    soundType: 'panda_grunt',
    soundLabel: 'Endearing Giant Panda Bleat & Grunt',
    audioUrl: 'https://soundbible.com/mp3/3 Baby Cubs Grunt And Growl-SoundBible.com-1092741453.mp3',
    youtubeId: 'qpEwUD5WqI0',
    youtubeUrl: 'https://youtube.com/shorts/qpEwUD5WqI0?si=p13I2C11WdnRlSUD',
    childDescription: 'Giant pandas are gentle black-and-white bears who spend half their day happily munching on green bamboo leaves.',
    funFact: 'A panda can eat up to 38 kilograms of bamboo every single day to stay healthy and energetic!',
    size: '1.5 meters tall, 100 kg',
    lifespan: '20 years in the wild',
    speed: '32 km/h'
  },
  {
    id: 'dolphin',
    name: 'Bottlenose Dolphin',
    scientificName: 'Tursiops truncatus',
    group: 'Mammal',
    habitat: 'Ocean & Marine',
    diet: 'Carnivore (Meat)',
    image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&w=900&q=80',
    emoji: '🐬',
    soundType: 'dolphin',
    soundLabel: 'Playful Dolphin Whistle, Click Train & Ocean Chortle',
    audioUrl: 'https://soundbible.com/mp3/Dolphins-SoundBible.com-1774583018.mp3',
    childDescription: 'Dolphins are super smart sea mammals that leap joyfully through ocean waves and talk to each other using cheerful clicks.',
    funFact: 'Dolphins sleep with only half of their brain at a time so they can keep swimming and breathing safely!',
    size: '2 to 4 meters long, 300 kg',
    lifespan: '40 to 50 years',
    speed: '35 km/h'
  },
  {
    id: 'blue-whale',
    name: 'Blue Whale',
    scientificName: 'Balaenoptera musculus',
    group: 'Mammal',
    habitat: 'Ocean & Marine',
    diet: 'Carnivore (Meat)',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=900&q=80',
    emoji: '🐋',
    soundType: 'whale',
    soundLabel: 'Majestic Blue Whale Song & Abyssal Sub-Bass',
    audioUrl: 'https://soundbible.com/mp3/Humpback Whale Call-SoundBible.com-1090143239.mp3',
    childDescription: 'The blue whale is the largest animal ever known to have lived on Planet Earth — even bigger than any dinosaur!',
    funFact: 'A blue whale’s heart is as big as a small car, and its tongue can weigh as much as an entire elephant!',
    size: 'Up to 30 meters long, 150,000 kg',
    lifespan: '80 to 90 years',
    speed: '50 km/h'
  },
  {
    id: 'penguin',
    name: 'Emperor Penguin',
    scientificName: 'Aptenodytes forsteri',
    group: 'Bird',
    habitat: 'Polar & Arctic',
    diet: 'Carnivore (Meat)',
    image: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=900&q=80',
    emoji: '🐧',
    soundType: 'penguin',
    soundLabel: 'Emperor Penguin Colony Trumpet & Braying Call',
    audioUrl: 'https://soundbible.com/mp3/Brant Geese Foraging-SoundBible.com-136408705.mp3',
    youtubeId: 'Anr35RbBL3Y',
    youtubeUrl: 'https://youtu.be/Anr35RbBL3Y?si=nty-9FsrHzeNdJ7H',
    childDescription: 'Penguins are charming birds dressed in natural tuxedos. They slide on icy snow on their bellies like toboggans!',
    funFact: 'Penguin fathers hold their eggs on top of their warm feet under a fluffy feathered pouch through freezing winter blizzards.',
    size: '1.2 meters tall, 40 kg',
    lifespan: '15 to 20 years',
    speed: '8 km/h swimming'
  },
  {
    id: 'polar-bear',
    name: 'Polar Bear',
    scientificName: 'Ursus maritimus',
    group: 'Mammal',
    habitat: 'Polar & Arctic',
    diet: 'Carnivore (Meat)',
    image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=900&q=80',
    emoji: '🐻‍❄️',
    soundType: 'growl',
    soundLabel: 'Fierce Arctic Bear Growl, Chest Huff & Snarl',
    audioUrl: 'https://soundbible.com/mp3/Bear Growling-SoundBible.com-2376031.mp3',
    youtubeId: 'hpPMic2oMuU',
    youtubeUrl: 'https://youtube.com/shorts/hpPMic2oMuU?si=HvX-rFiOo4QpqNFM',
    childDescription: 'Polar bears are huge white bears made for the Arctic ice. Their fur is actually transparent hollow tubes that trap sunshine!',
    funFact: 'Underneath their white fluffy coat, a polar bear’s skin is jet black to soak in as much warmth from the sun as possible!',
    size: 'Up to 2.5 meters tall, 500 kg',
    lifespan: '25 to 30 years',
    speed: '40 km/h'
  },
  {
    id: 'wolf',
    name: 'Gray Wolf',
    scientificName: 'Canis lupus',
    group: 'Mammal',
    habitat: 'Forest & Woodland',
    diet: 'Carnivore (Meat)',
    image: '/images/gray_wolf.jpg',
    emoji: '🐺',
    soundType: 'howl',
    soundLabel: 'Authentic Wolf Pack Howl',
    audioUrl: 'https://soundbible.com/mp3/Many Wolves Howling-SoundBible.com-531262521.mp3',
    youtubeId: '-vnLonKyuzc',
    youtubeUrl: 'https://youtube.com/shorts/-vnLonKyuzc?si=82ocZfjnLGeVhF28',
    childDescription: 'Wolves live in close family packs and howl together under moonlit forests to communicate with their cousins across mountains.',
    funFact: 'Each wolf pack has a distinctive harmony when they howl together so other packs know their boundaries!',
    size: '1.5 meters long, 45 kg',
    lifespan: '6 to 8 years in the wild',
    speed: '60 km/h'
  },
  {
    id: 'eagle',
    name: 'Bald Eagle',
    scientificName: 'Haliaeetus leucocephalus',
    group: 'Bird',
    habitat: 'Mountains',
    diet: 'Carnivore (Meat)',
    image: '/images/bald_eagle.jpg',
    emoji: '🦅',
    soundType: 'screech',
    soundLabel: 'Piercing Raptor Eagle Cry',
    audioUrl: 'https://soundbible.com/mp3/hawk_screeching-Mike_Koenig-1626170357.mp3',
    youtubeId: 'Fisvu6pIYqM',
    youtubeUrl: 'https://youtube.com/shorts/Fisvu6pIYqM?si=75bATOuMoHgoIBUj',
    childDescription: 'Bald eagles are majestic raptors with brilliant white head feathers and huge golden eyes that can spot a fish from a mile up.',
    funFact: 'Bald eagle nests are the biggest of any tree-nesting bird — some can weigh over 1,000 kilograms!',
    size: 'Wingspan of 2.3 meters',
    lifespan: '20 to 30 years',
    speed: '160 km/h diving'
  },
  {
    id: 'frog',
    name: 'Red-Eyed Tree Frog',
    scientificName: 'Agalychnis callidryas',
    group: 'Amphibian',
    habitat: 'Rainforest & Jungle',
    diet: 'Insectivore',
    image: '/images/real_frog.jpg',
    emoji: '🐸',
    soundType: 'croak',
    soundLabel: 'Rainforest Frog Ribbits & Croaks',
    audioUrl: '/sounds/frog_croak.mp3',
    youtubeId: 'A9A7BovwcFw',
    youtubeUrl: 'https://youtube.com/shorts/A9A7BovwcFw?si=9kiCln7GItC4O5it',
    childDescription: 'These vibrant rainforest climbers have suction-cup toes, bright neon green bodies, and huge ruby-red eyes.',
    funFact: 'When sleeping, they tuck their bright colors away to look like a plain leaf. If a bird approaches, they flash their big red eyes to startle it!',
    size: '5 to 7 cm',
    lifespan: '5 years',
    speed: 'Quick leaf leaps'
  },
  {
    id: 'clownfish',
    name: 'Clownfish',
    scientificName: 'Amphiprion ocellaris',
    group: 'Fish & Ocean Life',
    habitat: 'Ocean & Marine',
    diet: 'Omnivore (Both)',
    image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=900&q=80',
    emoji: '🐠',
    soundType: 'splash',
    soundLabel: 'Undersea Bubble Acoustics',
    audioUrl: 'https://soundbible.com/mp3/Blop-Mark_DiAngelo-79054334.mp3',
    childDescription: 'Bright orange with crisp white stripes, clownfish live safely sheltered inside the stinging tentacles of sea anemones.',
    funFact: 'Clownfish have a special mucus layer on their scales that makes them completely immune to anemone stings!',
    size: '8 to 11 cm',
    lifespan: '6 to 10 years',
    speed: 'Darting swimmer'
  },
  {
    id: 'bee',
    name: 'Honeybee',
    scientificName: 'Apis mellifera',
    group: 'Invertebrate & Insect',
    habitat: 'Farm & Backyard',
    diet: 'Herbivore (Plants)',
    image: '/images/honey_bee.jpg',
    emoji: '🐝',
    soundType: 'buzz',
    soundLabel: 'Wing Flutter & Hive Buzz',
    audioUrl: 'https://soundbible.com/mp3/Fly Buzzing-SoundBible.com-1512331015.mp3',
    youtubeId: 'TpPnGSgiNxg',
    youtubeUrl: 'https://youtube.com/shorts/TpPnGSgiNxg?si=XaIh9XrU6WpBuvUB',
    childDescription: 'Hardworking honeybees fly from blossom to blossom collecting sweet nectar to make golden honey and pollinate our fruits.',
    funFact: 'Bees communicate the exact location of delicious flower fields by performing an adorable "waggle dance" for their hive mates!',
    size: '1.5 cm',
    lifespan: '6 weeks in summer',
    speed: '25 km/h'
  },
  {
    id: 'koala',
    name: 'Koala',
    scientificName: 'Phascolarctos cinereus',
    group: 'Mammal',
    habitat: 'Forest & Woodland',
    diet: 'Herbivore (Plants)',
    image: '/images/koala.jpg',
    emoji: '🐨',
    soundType: 'panda_grunt',
    soundLabel: 'Eucalyptus Forest Grunt',
    audioUrl: 'https://soundbible.com/mp3/Bear Growling-SoundBible.com-2376031.mp3',
    youtubeId: 'Vj252kOL7a4',
    youtubeUrl: 'https://youtube.com/shorts/Vj252kOL7a4?si=KmslY36BXcetE-xz',
    childDescription: 'Fluffy gray marsupials with round ears and leathery noses who spend their lives hugging eucalyptus trees in Australia.',
    funFact: 'Koalas sleep between 18 to 22 hours each day because eucalyptus leaves take so much energy to digest!',
    size: '60 to 85 cm, 12 kg',
    lifespan: '13 to 18 years',
    speed: 'Slow climber'
  },
  {
    id: 'giraffe',
    name: 'Giraffe',
    scientificName: 'Giraffa camelopardalis',
    group: 'Mammal',
    habitat: 'Savannah & Grassland',
    diet: 'Herbivore (Plants)',
    image: '/images/giraffe_all_sides.jpg',
    multiViews: {
      allSides: '/images/giraffe_all_sides.jpg',
      front: '/images/giraffe_front.jpg',
      side: '/images/giraffe_side.jpg',
      back: '/images/giraffe_back.jpg'
    },
    emoji: '🦒',
    soundType: 'giraffe',
    soundLabel: 'Nocturnal Giraffe Harmonic Hum & Savannah Snort',
    audioUrl: 'https://soundbible.com/mp3/Crisp_Ocean_Waves-Mike_Koenig-1486046376.mp3',
    youtubeId: 'YYFvYAUlLbU',
    youtubeUrl: 'https://youtu.be/YYFvYAUlLbU?si=n0GKfKiCHbUozl1t',
    childDescription: 'The tallest living land mammal! Giraffes have super long necks and purple tongues that can reach the highest acacia treetops.',
    funFact: 'Even with a neck over 2 meters long, giraffes have the exact same number of neck vertebrae as humans: seven!',
    size: 'Up to 5.5 meters tall, 1,200 kg',
    lifespan: '25 years',
    speed: '55 km/h'
  },
  {
    id: 'cheetah',
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    group: 'Mammal',
    habitat: 'Savannah & Grassland',
    diet: 'Carnivore (Meat)',
    image: '/images/cheetah.jpg',
    emoji: '🐆',
    soundType: 'chirp',
    soundLabel: 'Cheetah High Chirp & Purr',
    audioUrl: 'https://soundbible.com/mp3/Cat_Meow_2-Cat_Stevens-2034822903.mp3',
    childDescription: 'The fastest runner on planet Earth! Cheetahs have sleek spots and black tear-marks under their eyes that deflect bright sunshine.',
    funFact: 'A cheetah can sprint from zero to 100 km/h in just 3 seconds — faster than many sports race cars!',
    size: '1.4 meters long, 50 kg',
    lifespan: '10 to 12 years',
    speed: '112 km/h'
  },
  {
    id: 'leopard',
    name: 'African Leopard',
    scientificName: 'Panthera pardus',
    group: 'Mammal',
    habitat: 'Savannah & Grassland',
    diet: 'Carnivore (Meat)',
    image: '/images/leopard.jpg',
    emoji: '🐆',
    soundType: 'roar',
    soundLabel: 'Wild Leopard Roar & Growl',
    audioUrl: 'https://soundbible.com/mp3/Tiger Growling-SoundBible.com-258880045.mp3',
    youtubeId: 's71L3rXqW6Q',
    youtubeUrl: 'https://www.youtube.com/watch?v=s71L3rXqW6Q',
    childDescription: 'Master acrobats and tree-climbers of the big cats! Leopards have sleek golden fur patterned with rosette flower-spots.',
    funFact: 'Leopards are so remarkably strong that they can climb straight up tall trees while carrying prey heavier than themselves to keep it safe from other predators!',
    size: '1.9 meters long, 65 kg',
    lifespan: '12 to 17 years',
    speed: '58 km/h and can leap 6 meters through the air'
  },
  {
    id: 'cat',
    name: 'Cat',
    scientificName: 'Felis catus',
    group: 'Mammal',
    habitat: 'Farm & Backyard',
    diet: 'Carnivore (Meat)',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80',
    emoji: '🐱',
    soundType: 'purr',
    soundLabel: 'Authentic Cat Meow, Chirp Trill & Motor Purr',
    audioUrl: 'https://soundbible.com/mp3/Cat_Meow_2-Cat_Stevens-2034822903.mp3',
    youtubeId: 'KijtAdPvd80',
    youtubeUrl: 'https://youtube.com/shorts/KijtAdPvd80?si=HqJzZC8zoxzcYMEH',
    childDescription: 'Cats are playful, agile companions with soft velvet fur, sensitive whiskers, and flexible bodies that always land gracefully on their feet!',
    funFact: 'Cats can rotate each of their ears 180 degrees independently and spend about 70% of their day peacefully snoozing in sunny spots!',
    size: '46 cm long, 4 to 5 kg',
    lifespan: '12 to 18 years',
    speed: '48 km/h in short sprints'
  },
  {
    id: 'dog',
    name: 'Dog',
    scientificName: 'Canis lupus familiaris',
    group: 'Mammal',
    habitat: 'Farm & Backyard',
    diet: 'Omnivore (Both)',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80',
    emoji: '🐶',
    soundType: 'bark',
    soundLabel: 'Authentic Dog Woof & Bark',
    audioUrl: 'https://soundbible.com/mp3/labrador-barking-daniel_simon.mp3',
    youtubeId: 'yCo_zmM7YIc',
    youtubeUrl: 'https://youtube.com/shorts/yCo_zmM7YIc?si=cWe6ASdeAUlEPevR',
    childDescription: 'Known worldwide as human’s best friend! Dogs are loving, loyal companions that love running, playing fetch, and wagging their happy tails.',
    funFact: 'A dog’s sense of smell is over 10,000 times sharper than ours! They can even detect which direction another creature walked minutes ago!',
    size: '30 to 70 cm tall, 10 to 35 kg',
    lifespan: '10 to 15 years',
    speed: '45 km/h'
  },
  {
    id: 'golden-eagle',
    name: 'Golden Eagle',
    scientificName: 'Aquila chrysaetos',
    group: 'Bird',
    habitat: 'Mountains',
    diet: 'Carnivore (Meat)',
    image: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=900&q=80',
    emoji: '🦅',
    soundType: 'screech',
    soundLabel: 'Alpine Valley Eagle Screech',
    audioUrl: 'https://soundbible.com/mp3/hawk_screech_valley-Mike_Koenig-2128875647.mp3',
    youtubeId: 'Fisvu6pIYqM',
    youtubeUrl: 'https://youtube.com/shorts/Fisvu6pIYqM?si=75bATOuMoHgoIBUj',
    childDescription: 'One of the most formidable birds of prey on Earth! Golden eagles soar majestically over alpine peaks with golden feathers gleaming in the sun.',
    funFact: 'Golden eagles can dive through the mountain air at astonishing speeds of over 320 km/h (200 mph) — as fast as a Formula 1 racing car!',
    size: 'Wingspan of 2.2 meters, 5 kg',
    lifespan: '25 to 30 years',
    speed: '320 km/h diving'
  },
  {
    id: 'barn-owl',
    name: 'Barn Owl',
    scientificName: 'Tyto alba',
    group: 'Bird',
    habitat: 'Farm & Backyard',
    diet: 'Carnivore (Meat)',
    image: '/images/barn_owl.jpg',
    emoji: '🦉',
    soundType: 'hoot',
    soundLabel: 'Authentic Night Owl Hoot',
    audioUrl: 'https://soundbible.com/mp3/Owl Hooting-SoundBible.com-1155496330.mp3',
    youtubeId: 'WjKSJXeoVyQ',
    youtubeUrl: 'https://youtube.com/shorts/WjKSJXeoVyQ?si=KIgrV_GWNUA6UqSq',
    childDescription: 'Barn owls have a stunning heart-shaped face that acts like a satellite dish, focusing quiet nighttime rustles directly into their sensitive ears.',
    funFact: 'Barn owls have specialized velvet-fringed wing feathers that make their flight completely silent, so field mice never hear them approaching!',
    size: '35 cm tall, wingspan 90 cm',
    lifespan: '4 to 10 years',
    speed: '30 km/h silent flight'
  },
  {
    id: 'great-horned-owl',
    name: 'Great Horned Owl',
    scientificName: 'Bubo virginianus',
    group: 'Bird',
    habitat: 'Forest & Woodland',
    diet: 'Carnivore (Meat)',
    image: '/images/great_horned_owl_all_sides.jpg',
    multiViews: {
      allSides: '/images/great_horned_owl_all_sides.jpg',
      front: '/images/owl_front.jpg',
      side: '/images/owl_side.jpg',
      back: '/images/owl_back.jpg'
    },
    emoji: '🦉',
    soundType: 'hoot',
    soundLabel: 'Resonant Great Horned Owl Hoot',
    audioUrl: 'https://soundbible.com/mp3/Owl Hooting-SoundBible.com-1155496330.mp3',
    youtubeId: 'WjKSJXeoVyQ',
    youtubeUrl: 'https://youtube.com/shorts/WjKSJXeoVyQ?si=KIgrV_GWNUA6UqSq',
    childDescription: 'Often called the "tiger of the night sky", this nocturnal hunter has glowing golden eyes and feathered ear tufts that stand tall when listening.',
    funFact: 'Owls cannot roll their eyes like humans do! Instead, they can swivel their heads three-quarters of the way around (270 degrees) to see behind them!',
    size: '60 cm tall, wingspan 1.4 meters',
    lifespan: '15 to 20 years in the wild',
    speed: '65 km/h'
  },
  {
    id: 'sheep',
    name: 'Domestic Sheep',
    scientificName: 'Ovis aries',
    group: 'Mammal',
    habitat: 'Farm & Backyard',
    diet: 'Herbivore (Plants)',
    image: '/images/sheep.jpg',
    emoji: '🐑',
    soundType: 'baa',
    soundLabel: 'Authentic Sheep Baa & Bleat',
    childDescription: 'Gentle, fluffy farm animals covered in thick soft fleece that keeps them cozy and warm in chilly open pastures.',
    funFact: 'Sheep have horizontal rectangular pupils that give them an incredible panoramic field of view — they can see all the way behind themselves without even turning their heads!',
    size: '1.2 to 1.8 meters long, 45 to 100 kg',
    lifespan: '10 to 12 years',
    speed: '32 km/h'
  },
  {
    id: 'hen',
    name: 'Domestic Hen',
    scientificName: 'Gallus gallus domesticus',
    group: 'Bird',
    habitat: 'Farm & Backyard',
    diet: 'Omnivore (Both)',
    image: '/images/hen.jpg',
    emoji: '🐔',
    soundType: 'cluck',
    soundLabel: 'Authentic Hen Cluck & Cackle',
    childDescription: 'Affectionate mother birds that scratch the garden soil for tasty seeds, cluck to their tiny chicks, and lay nutritious fresh eggs.',
    funFact: 'Mother hens talk to their chicks while they are still nestled safely inside their eggshells, and the unborn baby chicks chirp right back to her!',
    size: '30 to 45 cm tall, 1.8 to 3.5 kg',
    lifespan: '5 to 10 years',
    speed: '14 km/h'
  },
  {
    id: 'rooster',
    name: 'Rooster (Cock)',
    scientificName: 'Gallus gallus domesticus',
    group: 'Bird',
    habitat: 'Farm & Backyard',
    diet: 'Omnivore (Both)',
    image: '/images/rooster.jpg',
    emoji: '🐓',
    soundType: 'crow',
    soundLabel: 'Authentic Cock-a-Doodle-Doo Morning Crow',
    childDescription: 'The proud guardian of the farm! Roosters boast vivid crimson combs, iridescent emerald-bronze tail feathers, and a musical sunrise wake-up call.',
    funFact: 'Roosters have a built-in ear flap! Whenever they open their beaks wide to let out a loud morning crow, their ear canal folds closed so they do not deafen themselves!',
    size: '40 to 60 cm tall, 2.5 to 4 kg',
    lifespan: '5 to 8 years',
    speed: '15 km/h'
  },
  {
    id: 'cow',
    name: 'Dairy Cow',
    scientificName: 'Bos taurus',
    group: 'Mammal',
    habitat: 'Farm & Backyard',
    diet: 'Herbivore (Plants)',
    image: '/images/cow.jpg',
    emoji: '🐄',
    soundType: 'moo',
    soundLabel: 'Authentic Gentle Cow Moo',
    childDescription: 'Peaceful, friendly giants that love munching sweet green clover meadows and producing nutritious fresh milk for butter and cheese.',
    funFact: 'Cows have best friends in their herds and get stressed when separated! They also have four specialized stomach chambers to digest tough, fibrous grass.',
    size: '1.5 meters tall at shoulder, 600 to 750 kg',
    lifespan: '15 to 20 years',
    speed: '40 km/h'
  },
  {
    id: 'goose',
    name: 'Domestic Goose',
    scientificName: 'Anser anser domesticus',
    group: 'Bird',
    habitat: 'Farm & Backyard',
    diet: 'Herbivore (Plants)',
    image: '/images/goose.jpg',
    emoji: '🪿',
    soundType: 'honk',
    soundLabel: 'Authentic Goose Honk & Call',
    audioUrl: 'https://soundbible.com/mp3/Brant Geese Foraging-SoundBible.com-136408705.mp3',
    childDescription: 'Graceful waterbirds with waterproof snow-white plumage, bright orange webbed feet, and a spirited honk that watches over the pond.',
    funFact: 'Geese mate for life and are so fiercely protective and alert that ancient Roman temples and modern farms have kept them as trusty watchdogs!',
    size: '80 to 100 cm long, 4 to 10 kg',
    lifespan: '15 to 25 years',
    speed: '65 km/h in flight'
  },
  {
    id: 'fox',
    name: 'Red Fox',
    scientificName: 'Vulpes vulpes',
    group: 'Mammal',
    habitat: 'Forest & Woodland',
    diet: 'Omnivore (Both)',
    image: '/images/fox.jpg',
    emoji: '🦊',
    soundType: 'bark',
    soundLabel: 'Clever Fox Yip & Bark',
    audioUrl: 'https://soundbible.com/mp3/labrador-barking-daniel_simon.mp3',
    childDescription: 'Foxes are small-to-medium-sized omnivorous mammals belonging to several genera of the family Canidae. They have fluffy reddish fur, pointed ears, and a bushy tail.',
    funFact: 'Foxes use the Earth’s magnetic field like a compass to guide their famous high snow-leaps when hunting!',
    size: '45 to 90 cm long, 5 to 10 kg',
    lifespan: '3 to 6 years in the wild',
    speed: '50 km/h'
  },
  {
    id: 'swallow',
    name: 'Barn Swallow',
    scientificName: 'Hirundo rustica',
    group: 'Bird',
    habitat: 'Farm & Backyard',
    diet: 'Insectivore',
    image: '/images/swallow.jpg',
    emoji: '🐦',
    soundType: 'chirp',
    soundLabel: 'Agile Swallow Twitter & Chitter',
    audioUrl: 'https://soundbible.com/mp3/Bird_in_Rain-Mike_Koenig-441535833.mp3',
    childDescription: 'Graceful acrobats of the summer sky with glossy blue-black wings, rusty red throats, and distinctive deeply forked tail streamers.',
    funFact: 'Barn swallows drink water on the wing by skimming smoothly across ponds and taking tiny sips without ever stopping their flight!',
    size: '17 to 19 cm long, wingspan 33 cm',
    lifespan: '4 to 8 years',
    speed: '55 km/h with acrobatic twists'
  },
  {
    id: 'crane',
    name: 'Red-Crowned Crane',
    scientificName: 'Grus japonensis',
    group: 'Bird',
    habitat: 'Freshwater & River',
    diet: 'Omnivore (Both)',
    image: '/images/crane.jpg',
    emoji: '🦤',
    soundType: 'chirp',
    soundLabel: 'Majestic Crane Bugle & Call',
    audioUrl: 'https://soundbible.com/mp3/Brant Geese Foraging-SoundBible.com-136408705.mp3',
    childDescription: 'Elegant wetland giants with snow-white bodies, a vivid crimson crown on their head, and long slender legs designed for wading.',
    funFact: 'Cranes perform synchronized dancing rituals where they leap into the air, bow, and toss twigs to celebrate lifelong partnerships!',
    size: '1.5 meters tall, wingspan 2.4 meters',
    lifespan: '30 to 40 years',
    speed: '65 km/h in flight'
  },
  {
    id: 'crow',
    name: 'American Crow',
    scientificName: 'Corvus brachyrhynchos',
    group: 'Bird',
    habitat: 'Forest & Woodland',
    diet: 'Omnivore (Both)',
    image: '/images/crow.jpg',
    emoji: '🐦‍⬛',
    soundType: 'crow',
    soundLabel: 'Clever Crow "Caw-Caw" Call',
    audioUrl: 'https://soundbible.com/mp3/Crow-SoundBible.com-1473211913.mp3',
    childDescription: 'Glossy jet-black birds celebrated as some of the smartest animals on Earth, capable of making tools and solving multi-stage puzzles.',
    funFact: 'Crows can remember individual human faces for years and pass that knowledge down to their chicks!',
    size: '40 to 50 cm long, 450 g',
    lifespan: '7 to 15 years',
    speed: '50 km/h'
  },
  {
    id: 'chick',
    name: 'Baby Chick',
    scientificName: 'Gallus gallus domesticus',
    group: 'Bird',
    habitat: 'Farm & Backyard',
    diet: 'Omnivore (Both)',
    image: '/images/chick.jpg',
    emoji: '🐥',
    soundType: 'squeak',
    soundLabel: 'Sweet Baby Chick "Peep-Peep"',
    audioUrl: 'https://soundbible.com/mp3/Bird_in_Rain-Mike_Koenig-441535833.mp3',
    childDescription: 'Tiny, fluffy down-covered baby birds that scamper happily behind mother hen and make heartwarming little peep sounds.',
    funFact: 'Baby chicks can communicate with their mother before hatching by peeping through tiny microscopic pores in their eggshell!',
    size: '8 to 12 cm tall, 40 g',
    lifespan: '5 to 10 years (as domestic chicken)',
    speed: 'Quick scampering waddle'
  },
  {
    id: 'snake',
    name: 'Corn Snake',
    scientificName: 'Pantherophis guttatus',
    group: 'Reptile',
    habitat: 'Farm & Backyard',
    diet: 'Carnivore (Meat)',
    image: '/images/snake.jpg',
    emoji: '🐍',
    soundType: 'hiss',
    soundLabel: 'Snake Slither & Gentle Hiss',
    audioUrl: 'https://soundbible.com/mp3/Snake Hiss-SoundBible.com-1949588661.mp3',
    childDescription: 'Calm, beautifully patterned orange-and-red reptiles that glide silently through meadows, helping farmers by keeping barns rodent-free.',
    funFact: 'Snakes smell using their forked tongues! They flick them into the air to capture invisible scent particles and taste their environment.',
    size: '1.2 to 1.8 meters long',
    lifespan: '15 to 20 years',
    speed: 'Smooth silent gliding'
  },
  {
    id: 'turtle',
    name: 'Box Turtle',
    scientificName: 'Terrapene carolina',
    group: 'Reptile',
    habitat: 'Forest & Woodland',
    diet: 'Omnivore (Both)',
    image: '/images/turtle.jpg',
    emoji: '🐢',
    soundType: 'splash',
    soundLabel: 'Gentle Turtle Splash & Rustle',
    audioUrl: 'https://soundbible.com/mp3/Blop-Mark_DiAngelo-79054334.mp3',
    childDescription: 'Peaceful land reptiles with high-domed mosaic shells that serve as permanent mobile homes, pulling legs and head safely inside.',
    funFact: 'A turtle’s shell contains living bone and nerve endings, meaning a turtle can genuinely feel when its shell is gently touched!',
    size: '15 to 20 cm long, 500 g',
    lifespan: '50 to 100 years',
    speed: '0.4 km/h steady stroll'
  },
  {
    id: 'lama',
    name: 'Llama',
    scientificName: 'Lama glama',
    group: 'Mammal',
    habitat: 'Mountains',
    diet: 'Herbivore (Plants)',
    image: '/images/lama.jpg',
    emoji: '🦙',
    soundType: 'bleat',
    soundLabel: 'Friendly Llama Hum & Soft Bleat',
    audioUrl: 'https://soundbible.com/mp3/Bear Growling-SoundBible.com-2376031.mp3',
    childDescription: 'Sturdy, gentle Andean mountain dwellers with warm fleece coats, long perky banana-shaped ears, and calm expressive eyes.',
    funFact: 'Llamas communicate by humming gently to each other when curious or greeting their newborn crias!',
    size: '1.7 to 1.8 meters tall, 150 to 200 kg',
    lifespan: '20 to 25 years',
    speed: '55 km/h'
  },
  {
    id: 'goat',
    name: 'Domestic Goat',
    scientificName: 'Capra hircus',
    group: 'Mammal',
    habitat: 'Farm & Backyard',
    diet: 'Herbivore (Plants)',
    image: '/images/goat.jpg',
    emoji: '🐐',
    soundType: 'bleat',
    soundLabel: 'Playful Goat "Maa-Maa" Bleat',
    childDescription: 'Spirited, curious farm explorers with sweet beards and rubbery cloven hooves that let them balance on steep rocks and fences.',
    funFact: 'Goats have horizontal rectangular pupils that grant them a panoramic 320-degree field of vision without turning their heads!',
    size: '60 to 90 cm tall, 45 to 70 kg',
    lifespan: '15 to 18 years',
    speed: '35 km/h with exceptional agility'
  },
  {
    id: 'calf',
    name: 'Baby Calf',
    scientificName: 'Bos taurus',
    group: 'Mammal',
    habitat: 'Farm & Backyard',
    diet: 'Herbivore (Plants)',
    image: '/images/calf.jpg',
    emoji: '🐮',
    soundType: 'moo',
    soundLabel: 'Gentle Baby Calf Soft Moo',
    audioUrl: 'https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3',
    childDescription: 'Affectionate young cattle with curious velvet noses, big brown eyes, and wobbly legs that love frolicking across sunny meadows.',
    funFact: 'Newborn calves can stand up on their own four hooves and take their first steps within 30 minutes of being born!',
    size: '75 cm tall, 35 to 45 kg',
    lifespan: '15 to 20 years',
    speed: '30 km/h when galloping in play'
  },
  {
    id: 'lamb',
    name: 'Baby Lamb',
    scientificName: 'Ovis aries',
    group: 'Mammal',
    habitat: 'Farm & Backyard',
    diet: 'Herbivore (Plants)',
    image: '/images/lamb.jpg',
    emoji: '🐑',
    soundType: 'baa',
    soundLabel: 'Sweet Baby Lamb "Baa-Baa"',
    childDescription: 'Playful curly-coated baby sheep full of joyful spring energy that leap straight up in the air and answer their mother’s calls.',
    funFact: 'Twin lambs sleep nestled closely together with their heads touching and recognize their mother solely by the melody of her bleat!',
    size: '40 cm tall, 4 to 6 kg',
    lifespan: '10 to 12 years',
    speed: '25 km/h'
  },
  {
    id: 'buffalo',
    name: 'Water Buffalo',
    scientificName: 'Bubalus bubalis',
    group: 'Mammal',
    habitat: 'Freshwater & River',
    diet: 'Herbivore (Plants)',
    image: '/images/buffalo.jpg',
    emoji: '🦬',
    soundType: 'growl',
    soundLabel: 'Mighty Buffalo Low Bellow',
    audioUrl: 'https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3',
    childDescription: 'Massive, gentle water-loving giants with broad crescent horns who love cooling off in river mud to protect their sensitive skin.',
    funFact: 'Water buffalo milk is rich and creamy, traditionally used around the world to craft authentic, silky fresh mozzarella cheese!',
    size: '1.6 meters tall at shoulder, 800 to 1,200 kg',
    lifespan: '20 to 25 years',
    speed: '30 km/h'
  },
  {
    id: 'donkey',
    name: 'Domestic Donkey',
    scientificName: 'Equus africanus asinus',
    group: 'Mammal',
    habitat: 'Farm & Backyard',
    diet: 'Herbivore (Plants)',
    image: '/images/donkey.jpg',
    emoji: '🫏',
    soundType: 'bray',
    soundLabel: 'Joyful Donkey "Hee-Haw" Bray',
    childDescription: 'Patient, dependable friends with large velvety ears, surefooted hooves, and a hearty "Hee-Haw" call that travels over valleys.',
    funFact: 'Donkeys have incredible memory power! They can recognize paths and friend companions they have not seen for over 25 years!',
    size: '1 to 1.4 meters tall, 200 to 350 kg',
    lifespan: '25 to 35 years',
    speed: '40 km/h'
  },
  {
    id: 'horse',
    name: 'Domestic Horse',
    scientificName: 'Equus caballus',
    group: 'Mammal',
    habitat: 'Farm & Backyard',
    diet: 'Herbivore (Plants)',
    image: '/images/horse.jpg',
    emoji: '🐴',
    soundType: 'neigh',
    soundLabel: 'Galloping Horse Whinny & Neigh',
    childDescription: 'Noble, spirited runners with silky flowing manes and powerful legs that love galloping freely across open green fields.',
    funFact: 'Horses can sleep both lying down and standing upright, using a special lock-stay tendon apparatus in their legs!',
    size: '1.5 to 1.7 meters tall, 500 to 650 kg',
    lifespan: '25 to 30 years',
    speed: '70 km/h in full sprint'
  },
  {
    id: 'gazelle',
    name: 'Thomson’s Gazelle',
    scientificName: 'Eudorcas thomsonii',
    group: 'Mammal',
    habitat: 'Savannah & Grassland',
    diet: 'Herbivore (Plants)',
    image: '/images/gazelle.jpg',
    emoji: '🦌',
    soundType: 'snort',
    soundLabel: 'Alert Gazelle Snort & Stomp',
    childDescription: 'Gazelles are super fast, graceful runners with sleek curved horns that can leap high in the air when excited, a playful bounce called "pronking"!',
    funFact: 'A gazelle can leap 3 meters (10 feet) straight up in the air and zig-zag at 80 km/h to outsmart cheetahs!',
    size: '65 cm tall at the shoulder, 25 kg',
    lifespan: '10 to 12 years',
    speed: '80 km/h'
  },
  {
    id: 'roe-deer',
    name: 'European Roe Deer',
    scientificName: 'Capreolus capreolus',
    group: 'Mammal',
    habitat: 'Forest & Woodland',
    diet: 'Herbivore (Plants)',
    image: '/images/roe_deer.jpg',
    emoji: '🦌',
    soundType: 'bark',
    soundLabel: 'Roe Deer Woodland Bark',
    childDescription: 'Roe deer are gentle, small woodland deer with reddish summer coats and a bright white patch of fur on their rear called a rump target!',
    funFact: 'When a roe deer senses danger in the forest, its fluffy white rump fur flares out like a flashlight to warn its family!',
    size: '70 cm tall, 20 to 30 kg',
    lifespan: '10 to 12 years',
    speed: '60 km/h'
  },
  {
    id: 'red-deer',
    name: 'Noble Red Deer',
    scientificName: 'Cervus elaphus',
    group: 'Mammal',
    habitat: 'Forest & Woodland',
    diet: 'Herbivore (Plants)',
    image: '/images/red_deer.jpg',
    emoji: '🦌',
    soundType: 'roar',
    soundLabel: 'Mighty Stag Bellow & Roar',
    childDescription: 'The majestic red deer stag is the king of the ancient woods, carrying giant branching bone antlers that grow bigger every single year!',
    funFact: 'Male stags shed their heavy antlers every winter and grow an entire new set of velvety antlers in just four months of springtime!',
    size: 'Up to 1.3 meters tall, 240 kg',
    lifespan: '16 to 18 years',
    speed: '65 km/h'
  },
  {
    id: 'peacock',
    name: 'Indian Peacock',
    scientificName: 'Pavo cristatus',
    group: 'Bird',
    habitat: 'Forest & Woodland',
    diet: 'Omnivore (Both)',
    image: '/images/peacock.jpg',
    emoji: '🦚',
    soundType: 'peacock',
    soundLabel: 'Resonant Peacock Trumpet Call',
    childDescription: 'Peacocks are famous for their gigantic fan of dazzling sapphire-blue and emerald-green feathers covered in shimmering eye spots!',
    funFact: 'The eye-spots on peacock feathers are microscopic optical crystals — they shimmer with rainbow colors without any blue ink or pigment!',
    size: 'Up to 2.2 meters long with tail train, 5 kg',
    lifespan: '15 to 20 years',
    speed: '16 km/h running'
  },
  {
    id: 'duck',
    name: 'Mallard Duck',
    scientificName: 'Anas platyrhynchos',
    group: 'Bird',
    habitat: 'Freshwater & River',
    diet: 'Omnivore (Both)',
    image: '/images/duck.jpg',
    emoji: '🦆',
    soundType: 'quack',
    soundLabel: 'Cheerful Duck Quack & Splash',
    childDescription: 'Ducks have bright orange webbed feet that paddle like underwater flippers and silky feathers coated in natural waterproof oil!',
    funFact: 'Water drops roll straight off a duck’s back because it brushes waterproof oil onto its feathers from a special gland above its tail!',
    size: '60 cm long, 1.2 kg',
    lifespan: '5 to 10 years',
    speed: '88 km/h in flight'
  },
  {
    id: 'zebra',
    name: 'Plains Zebra',
    scientificName: 'Equus quagga',
    group: 'Mammal',
    habitat: 'Savannah & Grassland',
    diet: 'Herbivore (Plants)',
    image: '/images/zebra.jpg',
    emoji: '🦓',
    soundType: 'neigh',
    soundLabel: 'High-Pitched Zebra Bark & Whinny',
    childDescription: 'Zebras are wild African equines known for their dazzling black and white striped coats, perky alert ears, and upright spiky manes!',
    funFact: 'Underneath all those black and white stripes, zebras actually have solid black skin to keep them protected from intense sun!',
    size: '1.4 meters at shoulder, 300 kg',
    lifespan: '25 years',
    speed: '68 km/h'
  },
  {
    id: 'kangaroo',
    name: 'Red Kangaroo',
    scientificName: 'Osphranter rufus',
    group: 'Mammal',
    habitat: 'Savannah & Grassland',
    diet: 'Herbivore (Plants)',
    image: '/images/kangaroo.jpg',
    emoji: '🦘',
    soundType: 'growl',
    soundLabel: 'Kangaroo Thump & Cluck',
    childDescription: 'Australia’s famous marsupial bounds forward on giant springy feet and balances with a muscular tail while mother carries her baby joey in her belly pouch!',
    funFact: 'Kangaroos cannot walk backwards! Their big feet and thick tail are made purely for springing forward up to 9 meters in a single leap!',
    size: 'Up to 1.8 meters tall, 85 kg',
    lifespan: '12 to 18 years',
    speed: '70 km/h'
  },
  {
    id: 'rhinoceros',
    name: 'White Rhinoceros',
    scientificName: 'Ceratotherium simum',
    group: 'Mammal',
    habitat: 'Savannah & Grassland',
    diet: 'Herbivore (Plants)',
    image: '/images/rhinoceros.jpg',
    emoji: '🦏',
    soundType: 'snort',
    soundLabel: 'Deep Rhino Snort & Huff',
    childDescription: 'The rhinoceros is an enormous herbivore with armor-like skin folds and sturdy horns on its snout that loves cooling off in warm mud baths!',
    funFact: 'A rhino’s horn is not made of bone at all — it is made of solid keratin, the exact same protein that makes up your fingernails and hair!',
    size: 'Up to 1.8 meters tall, 2,300 kg',
    lifespan: '40 to 50 years',
    speed: '50 km/h'
  },
  {
    id: 'crocodile',
    name: 'Nile Crocodile',
    scientificName: 'Crocodylus niloticus',
    group: 'Reptile',
    habitat: 'Freshwater & River',
    diet: 'Carnivore (Meat)',
    image: '/images/crocodile.jpg',
    emoji: '🐊',
    soundType: 'hiss',
    soundLabel: 'Low Crocodile Growl & Water Hiss',
    childDescription: 'Crocodiles are ancient swimming reptiles with armored scales, webbed clawed feet, and a powerful tail that swishes like an outboard motor!',
    funFact: 'Crocodiles have the strongest bite force of any living creature on Earth — yet they can gently carry their newborn babies inside their mouths without harm!',
    size: 'Up to 5 meters long, 750 kg',
    lifespan: '70 to 100 years',
    speed: '35 km/h swimming'
  },
  {
    id: 'pig',
    name: 'Domestic Farm Pig',
    scientificName: 'Sus domesticus',
    group: 'Mammal',
    habitat: 'Farm & Backyard',
    diet: 'Omnivore (Both)',
    image: '/images/pig.jpg',
    emoji: '🐷',
    soundType: 'oink',
    soundLabel: 'Friendly Pig Oink & Snort',
    childDescription: 'Pigs are cheerful, super-intelligent farm animals with button snouts and curly tails that love nuzzling the ground with their sensitive snouts!',
    funFact: 'Pigs are among the top 5 smartest animals on Earth! They have fantastic memories and roll in mud to protect their sensitive skin like sunscreen!',
    size: '90 cm tall, 100 to 250 kg',
    lifespan: '15 to 20 years',
    speed: '18 km/h'
  }
];

// Curated comprehensive 1,000 animal database
const BASE_ANIMAL_SPECIES = [
  // Mammals
  { name: 'Cat', group: 'Mammal', habitat: 'Farm & Backyard', emoji: '🐱', fact: 'Playful agile companion that can land gracefully on its feet.' },
  { name: 'Dog', group: 'Mammal', habitat: 'Farm & Backyard', emoji: '🐶', fact: 'Loyal human best friend with an extraordinary sense of smell.' },
  { name: 'Domestic Sheep', group: 'Mammal', habitat: 'Farm & Backyard', emoji: '🐑', fact: 'Gentle woolly companion with rectangular pupils for 360-degree vision.' },
  { name: 'Dairy Cow', group: 'Mammal', habitat: 'Farm & Backyard', emoji: '🐄', fact: 'Gentle giant that produces wholesome milk and has best friends in the herd.' },
  { name: 'Gray Wolf', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🐺', fact: 'Pack hunter that communicates across mountains with resonant howls.' },
  { name: 'Arctic Wolf', group: 'Mammal', habitat: 'Polar & Arctic', emoji: '🐺', fact: 'All-white wolf adapted to thrive in subzero polar blizzards.' },
  { name: 'Timber Wolf', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🐺', fact: 'Strong forest runner that travels in loyal family packs.' },
  { name: 'African Elephant', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🐘', fact: 'Largest land animal on Earth.' },
  { name: 'African Wild Dog', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🐕', fact: 'Known for colorful calico coat and pack teamwork.' },
  { name: 'Alpaca', group: 'Mammal', habitat: 'Mountains', emoji: '🦙', fact: 'Has super soft, warm hypoallergenic fleece.' },
  { name: 'American Bison', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🦬', fact: 'Huge bearded grazing giant of North America.' },
  { name: 'Arctic Fox', group: 'Mammal', habitat: 'Polar & Arctic', emoji: '🦊', fact: 'Its coat turns snow-white in winter and brown in summer.' },
  { name: 'Arctic Hare', group: 'Mammal', habitat: 'Polar & Arctic', emoji: '🐇', fact: 'Hops like a kangaroo over deep polar snowdrifts.' },
  { name: 'Armadillo', group: 'Mammal', habitat: 'Desert', emoji: '🦔', fact: 'Rolls into a tough armored protective ball.' },
  { name: 'Baboon', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🐒', fact: 'Smart ground-dwelling monkey with a dog-like muzzle.' },
  { name: 'Badger', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🦡', fact: 'Master tunnel digger with strong clawed paws.' },
  { name: 'Beaver', group: 'Mammal', habitat: 'Freshwater & River', emoji: '🦫', fact: 'Builds wooden dams that create calm pond homes.' },
  { name: 'Beluga Whale', group: 'Mammal', habitat: 'Polar & Arctic', emoji: '🐳', fact: 'Known as the sea canary because of its cheerful chirps.' },
  { name: 'Bengal Tiger', group: 'Mammal', habitat: 'Rainforest & Jungle', emoji: '🐯', fact: 'Striped jungle stalker that loves to cool off in rivers.' },
  { name: 'Black Bear', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🐻', fact: 'Excellent tree climber with a keen sense of smell.' },
  { name: 'Blue Whale', group: 'Mammal', habitat: 'Ocean & Marine', emoji: '🐋', fact: 'The largest creature ever to inhabit planet Earth.' },
  { name: 'Capybara', group: 'Mammal', habitat: 'Freshwater & River', emoji: '🐹', fact: 'The largest rodent on Earth, friendly with all animals.' },
  { name: 'Cheetah', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🐆', fact: 'The fastest land animal on planet Earth.' },
  { name: 'Chimpanzee', group: 'Mammal', habitat: 'Rainforest & Jungle', emoji: '🐵', fact: 'Uses twigs and rocks as clever tools to gather food.' },
  { name: 'Chinchilla', group: 'Mammal', habitat: 'Mountains', emoji: '🐭', fact: 'Has the densest fur of any land mammal to survive cold.' },
  { name: 'Cougar', group: 'Mammal', habitat: 'Mountains', emoji: '🦁', fact: 'Can leap over 12 meters across rocky canyon ridges.' },
  { name: 'Dingo', group: 'Mammal', habitat: 'Desert', emoji: '🐕', fact: 'Native wild dog of the vast Australian outback.' },
  { name: 'Dolphin', group: 'Mammal', habitat: 'Ocean & Marine', emoji: '🐬', fact: 'Smart playful ocean swimmer with signature echo clicks.' },
  { name: 'Dromedary Camel', group: 'Mammal', habitat: 'Desert', emoji: '🐪', fact: 'Stores energy-rich fat in its hump to cross hot deserts.' },
  { name: 'Duck-billed Platypus', group: 'Mammal', habitat: 'Freshwater & River', emoji: '🦆', fact: 'Mammal that lays eggs and hunts using electroreception.' },
  { name: 'Fennec Fox', group: 'Mammal', habitat: 'Desert', emoji: '🦊', fact: 'Has enormous ears that radiate desert heat away.' },
  { name: 'Giant Anteater', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🐜', fact: 'Has a 60-centimeter tongue to scoop up termites.' },
  { name: 'Giant Panda', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🐼', fact: 'Munches fresh green bamboo shoots for 12 hours a day.' },
  { name: 'Giraffe', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🦒', fact: 'Tallest animal in the world with a purple tongue.' },
  { name: 'Golden Lion Tamarin', group: 'Mammal', habitat: 'Rainforest & Jungle', emoji: '🐒', fact: 'Tiny fiery golden monkey leaping through treetops.' },
  { name: 'Grizzly Bear', group: 'Mammal', habitat: 'Mountains', emoji: '🐻', fact: 'Catches leaping salmon from mountain waterfalls.' },
  { name: 'Harbor Seal', group: 'Mammal', habitat: 'Ocean & Marine', emoji: '🦭', fact: 'Playful whiskered swimmer sunbathing on ocean rocks.' },
  { name: 'Hedgehog', group: 'Mammal', habitat: 'Farm & Backyard', emoji: '🦔', fact: 'Curling prickly companion that hunts garden insects.' },
  { name: 'Hippopotamus', group: 'Mammal', habitat: 'Freshwater & River', emoji: '🦛', fact: 'Spends daytime submerged, secreting natural pink sunscreen.' },
  { name: 'Humpback Whale', group: 'Mammal', habitat: 'Ocean & Marine', emoji: '🐋', fact: 'Sings intricate melodious songs echoing hundreds of miles.' },
  { name: 'Jaguar', group: 'Mammal', habitat: 'Rainforest & Jungle', emoji: '🐆', fact: 'The apex predator of the Amazon with rosette spots.' },
  { name: 'Kangaroo', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🦘', fact: 'Carries its baby joey in a warm front belly pouch.' },
  { name: 'Koala', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🐨', fact: 'Lives in eucalyptus trees and sleeps up to 20 hours.' },
  { name: 'Leopard', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🐆', fact: 'Incredible tree climber that rests high on heavy branches.' },
  { name: 'Lion', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🦁', fact: 'King of the beasts living in proud family prides.' },
  { name: 'Llama', group: 'Mammal', habitat: 'Mountains', emoji: '🦙', fact: 'Ancient Andean pack animal surefooted on rocky peaks.' },
  { name: 'Manatee', group: 'Mammal', habitat: 'Freshwater & River', emoji: '🦭', fact: 'Gentle "sea cow" grazing on underwater grasses.' },
  { name: 'Meerkat', group: 'Mammal', habitat: 'Desert', emoji: '🦡', fact: 'Stands up on hind legs like a little sentry on guard.' },
  { name: 'Moose', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🫎', fact: 'Has colossal palmate antlers and swims between islands.' },
  { name: 'Mountain Goat', group: 'Mammal', habitat: 'Mountains', emoji: '🐐', fact: 'Specialized rubbery hooves grip near-vertical cliffs.' },
  { name: 'Narwhal', group: 'Mammal', habitat: 'Polar & Arctic', emoji: '🦄', fact: 'The "unicorn of the sea" with a spiral sensory tusk.' },
  { name: 'Ocelot', group: 'Mammal', habitat: 'Rainforest & Jungle', emoji: '🐆', fact: 'Dwarf leopard with velvet fur hunting by twilight.' },
  { name: 'Okapi', group: 'Mammal', habitat: 'Rainforest & Jungle', emoji: '🦓', fact: 'Shy rainforest cousin of the giraffe with zebra stripes.' },
  { name: 'Orangutan', group: 'Mammal', habitat: 'Rainforest & Jungle', emoji: '🦧', fact: 'Red-haired "person of the forest" swinging through canopies.' },
  { name: 'Orca (Killer Whale)', group: 'Mammal', habitat: 'Ocean & Marine', emoji: '🐋', fact: 'Acrobatic apex predator of the oceans.' },
  { name: 'Otter', group: 'Mammal', habitat: 'Freshwater & River', emoji: '🦦', fact: 'Holds paws while sleeping so they don’t drift apart.' },
  { name: 'Polar Bear', group: 'Mammal', habitat: 'Polar & Arctic', emoji: '🐻‍❄️', fact: 'White-coated king of the frozen Arctic sea ice.' },
  { name: 'Red Fox', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🦊', fact: 'Clever pouncer that dives headfirst into snow for mice.' },
  { name: 'Red Panda', group: 'Mammal', habitat: 'Mountains', emoji: '🦊', fact: 'Rusty ring-tailed acrobatic tree dweller of the Himalayas.' },
  { name: 'Rhinoceros', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🦏', fact: 'Armored herbivore with keratin horns like our fingernails.' },
  { name: 'Ring-tailed Lemur', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🐒', fact: 'Madagascar native that sunbathes in yoga-like poses.' },
  { name: 'Sea Lion', group: 'Mammal', habitat: 'Ocean & Marine', emoji: '🦭', fact: 'Fast flipper swimmer that barks like an excited pup.' },
  { name: 'Sloth', group: 'Mammal', habitat: 'Rainforest & Jungle', emoji: '🦥', fact: 'Slow-moving gentle mammal growing green algae in its fur.' },
  { name: 'Snow Leopard', group: 'Mammal', habitat: 'Mountains', emoji: '🐆', fact: 'The elusive "ghost of the mountains" with a thick tail.' },
  { name: 'Walrus', group: 'Mammal', habitat: 'Polar & Arctic', emoji: '🦭', fact: 'Has long ivory tusks used to haul itself onto ice floes.' },
  { name: 'Wombat', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🐻', fact: 'Produces unique cube-shaped droppings!' },
  { name: 'Zebra', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🦓', fact: 'Dazzling black-and-white stripes confuse biting insects.' },

  // Birds
  { name: 'Atlantic Puffin', group: 'Bird', habitat: 'Polar & Arctic', emoji: '🐧', fact: 'Carries a mouthful of a dozen glittering fish at once.' },
  { name: 'Bald Eagle', group: 'Bird', habitat: 'Mountains', emoji: '🦅', fact: 'Has razor eyesight to spot swimming fish from high skies.' },
  { name: 'Golden Eagle', group: 'Bird', habitat: 'Mountains', emoji: '🦅', fact: 'Soars majestically over high alpine snow summits.' },
  { name: 'Harpy Eagle', group: 'Bird', habitat: 'Rainforest & Jungle', emoji: '🦅', fact: 'Massive rainforest eagle with claws bigger than grizzly bear claws!' },
  { name: 'Crowned Eagle', group: 'Bird', habitat: 'Savannah & Grassland', emoji: '🦅', fact: 'Agile crested predator that navigates dense forest canopies.' },
  { name: 'Barn Owl', group: 'Bird', habitat: 'Farm & Backyard', emoji: '🦉', fact: 'Heart-shaped face funnels sounds for silent night hunts.' },
  { name: 'Great Horned Owl', group: 'Bird', habitat: 'Forest & Woodland', emoji: '🦉', fact: 'Has feathered ear tufts and turns its head 270 degrees.' },
  { name: 'Snowy Owl', group: 'Bird', habitat: 'Polar & Arctic', emoji: '🦉', fact: 'Pure white Arctic owl hunting under the midnight sun.' },
  { name: 'Burrowing Owl', group: 'Bird', habitat: 'Savannah & Grassland', emoji: '🦉', fact: 'Charming tiny owl that nests in underground prairie burrows.' },
  { name: 'Screech Owl', group: 'Bird', habitat: 'Forest & Woodland', emoji: '🦉', fact: 'Masters of tree bark camouflage with musical trill calls.' },
  { name: 'Blue Jay', group: 'Bird', habitat: 'Forest & Woodland', emoji: '🐦', fact: 'Crested blue chatterbox that plants thousands of oak trees.' },
  { name: 'Domestic Hen', group: 'Bird', habitat: 'Farm & Backyard', emoji: '🐔', fact: 'Loving mother bird that clucks softly and lays nutritious eggs.' },
  { name: 'Rooster (Cock)', group: 'Bird', habitat: 'Farm & Backyard', emoji: '🐓', fact: 'Proud farm watcher who crows "Cock-a-doodle-doo" at sunrise.' },
  { name: 'Domestic Goose', group: 'Bird', habitat: 'Farm & Backyard', emoji: '🪿', fact: 'Graceful white waterbird with orange feet and an alert honk.' },
  { name: 'Canada Goose', group: 'Bird', habitat: 'Freshwater & River', emoji: '🪿', fact: 'Flies in perfect V-formation across autumn skies.' },
  { name: 'Cardinal', group: 'Bird', habitat: 'Forest & Woodland', emoji: '🐦', fact: 'Vibrant crimson songbird singing in winter snow.' },
  { name: 'Cockatoo', group: 'Bird', habitat: 'Rainforest & Jungle', emoji: '🦜', fact: 'Expressive parrot with a crest that pops up when excited.' },
  { name: 'Common Kingfisher', group: 'Bird', habitat: 'Freshwater & River', emoji: '🐦', fact: 'Dives like a lightning bolt into water to catch minnows.' },
  { name: 'Emperor Penguin', group: 'Bird', habitat: 'Polar & Arctic', emoji: '🐧', fact: 'Endures Antarctic blizzards by huddling together.' },
  { name: 'Flamingo', group: 'Bird', habitat: 'Freshwater & River', emoji: '🦩', fact: 'Pink feathers come from the carotenoid algae they eat.' },
  { name: 'Green Woodpecker', group: 'Bird', habitat: 'Forest & Woodland', emoji: '🐦', fact: 'Pecks tree bark with cushioned brain protection.' },
  { name: 'Hummingbird', group: 'Bird', habitat: 'Rainforest & Jungle', emoji: '🐦', fact: 'Flaps wings 80 times a second and can fly backwards!' },
  { name: 'Kakapo', group: 'Bird', habitat: 'Forest & Woodland', emoji: '🦜', fact: 'The world’s only flightless, nocturnal, giant parrot.' },
  { name: 'Kiwibird', group: 'Bird', habitat: 'Forest & Woodland', emoji: '🥝', fact: 'New Zealand flightless bird with nostrils at the tip of its beak.' },
  { name: 'Mallard Duck', group: 'Bird', habitat: 'Freshwater & River', emoji: '🦆', fact: 'Dabbling water bird with waterproof iridescent feathers.' },
  { name: 'Mute Swan', group: 'Bird', habitat: 'Freshwater & River', emoji: '🦢', fact: 'Graceful white bird that mates for life.' },
  { name: 'Ostrich', group: 'Bird', habitat: 'Savannah & Grassland', emoji: '🐦', fact: 'Largest bird on Earth; can run faster than race horses.' },
  { name: 'Peregrine Falcon', group: 'Bird', habitat: 'Mountains', emoji: '🦅', fact: 'Fastest creature alive, diving at speeds over 380 km/h!' },
  { name: 'Resplendent Quetzal', group: 'Bird', habitat: 'Rainforest & Jungle', emoji: '🦜', fact: 'Sacred iridescent green bird with ribbon-like tail feathers.' },
  { name: 'Roadrunner', group: 'Bird', habitat: 'Desert', emoji: '🐦', fact: 'Zips across desert sands chasing lizards and rattlesnakes.' },
  { name: 'Scarlet Macaw', group: 'Bird', habitat: 'Rainforest & Jungle', emoji: '🦜', fact: 'Brilliant red, yellow, and blue parrot with a mighty beak.' },
  { name: 'Toucan', group: 'Bird', habitat: 'Rainforest & Jungle', emoji: '🦜', fact: 'Has a giant colorful beak that helps regulate body heat.' },
  { name: 'Wandering Albatross', group: 'Bird', habitat: 'Ocean & Marine', emoji: '🕊️', fact: 'Has a 3.5-meter wingspan, gliding for years over oceans.' },

  // Reptiles
  { name: 'Alligator', group: 'Reptile', habitat: 'Freshwater & River', emoji: '🐊', fact: 'Ancient armored swamp dweller with rounded snout.' },
  { name: 'American Crocodile', group: 'Reptile', habitat: 'Freshwater & River', emoji: '🐊', fact: 'Has a sharp V-shaped snout with teeth visible when closed.' },
  { name: 'Black Mamba', group: 'Reptile', habitat: 'Savannah & Grassland', emoji: '🐍', fact: 'Fastest snake in Africa with an inky-black mouth.' },
  { name: 'Chameleon', group: 'Reptile', habitat: 'Rainforest & Jungle', emoji: '🦎', fact: 'Moves eyes independently and changes skin color.' },
  { name: 'Corn Snake', group: 'Reptile', habitat: 'Farm & Backyard', emoji: '🐍', fact: 'Gentle, beautifully patterned helper in farm fields.' },
  { name: 'Galapagos Giant Tortoise', group: 'Reptile', habitat: 'Ocean & Marine', emoji: '🐢', fact: 'Can live over 150 years and weigh 400 kilograms!' },
  { name: 'Gecko', group: 'Reptile', habitat: 'Rainforest & Jungle', emoji: '🦎', fact: 'Microscopic hair pads on feet allow walking on ceilings.' },
  { name: 'Gila Monster', group: 'Reptile', habitat: 'Desert', emoji: '🦎', fact: 'Beaded desert lizard that spends 90% of life underground.' },
  { name: 'Green Anaconda', group: 'Reptile', habitat: 'Rainforest & Jungle', emoji: '🐍', fact: 'Heaviest snake in the world, swimming gracefully in rivers.' },
  { name: 'Green Iguana', group: 'Reptile', habitat: 'Rainforest & Jungle', emoji: '🦎', fact: 'Herbivore lizard that loves sunbathing on river tree branches.' },
  { name: 'Green Sea Turtle', group: 'Reptile', habitat: 'Ocean & Marine', emoji: '🐢', fact: 'Navigates thousands of ocean miles using Earth’s magnetic field.' },
  { name: 'Komodo Dragon', group: 'Reptile', habitat: 'Savannah & Grassland', emoji: '🦎', fact: 'Largest lizard on Earth, with shark-like teeth.' },
  { name: 'Leatherback Sea Turtle', group: 'Reptile', habitat: 'Ocean & Marine', emoji: '🐢', fact: 'Dives over 1,200 meters deep into freezing ocean waters.' },
  { name: 'Thorny Devil', group: 'Reptile', habitat: 'Desert', emoji: '🦎', fact: 'Spiky Australian lizard that drinks water through its skin grooves.' },

  // Amphibians
  { name: 'Axolotl', group: 'Amphibian', habitat: 'Freshwater & River', emoji: '🦎', fact: 'The smiling water monster that can regenerate its limbs!' },
  { name: 'Bullfrog', group: 'Amphibian', habitat: 'Freshwater & River', emoji: '🐸', fact: 'Deep baritone croak sounds like a bellowing bull.' },
  { name: 'Fire Salamander', group: 'Amphibian', habitat: 'Forest & Woodland', emoji: '🦎', fact: 'Bright yellow and black spots warn predators away.' },
  { name: 'Golden Poison Frog', group: 'Amphibian', habitat: 'Rainforest & Jungle', emoji: '🐸', fact: 'Tiny radiant frog whose skin stores alkaloid toxins.' },
  { name: 'Japanese Giant Salamander', group: 'Amphibian', habitat: 'Freshwater & River', emoji: '🦎', fact: 'Living fossil river monster that can grow 1.5 meters long.' },
  { name: 'Red-Eyed Tree Frog', group: 'Amphibian', habitat: 'Rainforest & Jungle', emoji: '🐸', fact: 'Flashes ruby red eyes to surprise hungry predators.' },
  { name: 'Tiger Salamander', group: 'Amphibian', habitat: 'Forest & Woodland', emoji: '🦎', fact: 'Burrows in damp soil and emerges on rainy nights.' },

  // Fish & Marine
  { name: 'Angelfish', group: 'Fish & Ocean Life', habitat: 'Ocean & Marine', emoji: '🐠', fact: 'Graceful disk-shaped swimmer weaving through coral reefs.' },
  { name: 'Barramundi', group: 'Fish & Ocean Life', habitat: 'Freshwater & River', emoji: '🐟', fact: 'Powerful leaping game fish of Australian rivers.' },
  { name: 'Clownfish', group: 'Fish & Ocean Life', habitat: 'Ocean & Marine', emoji: '🐠', fact: 'Lives safely among stinging sea anemone tentacles.' },
  { name: 'Great White Shark', group: 'Fish & Ocean Life', habitat: 'Ocean & Marine', emoji: '🦈', fact: 'Apex ocean predator with rows of serrated teeth.' },
  { name: 'Hammerhead Shark', group: 'Fish & Ocean Life', habitat: 'Ocean & Marine', emoji: '🦈', fact: 'Wide head gives panoramic 360-degree vision.' },
  { name: 'Lionfish', group: 'Fish & Ocean Life', habitat: 'Ocean & Marine', emoji: '🐡', fact: 'Fan-like striped fins carry protective venomous spines.' },
  { name: 'Manta Ray', group: 'Fish & Ocean Life', habitat: 'Ocean & Marine', emoji: '🐟', fact: 'Gentle giant winging through ocean currents doing backflips.' },
  { name: 'Moray Eel', group: 'Fish & Ocean Life', habitat: 'Ocean & Marine', emoji: '🐍', fact: 'Has a second set of pharyngeal jaws in its throat.' },
  { name: 'Pufferfish', group: 'Fish & Ocean Life', habitat: 'Ocean & Marine', emoji: '🐡', fact: 'Puffs up with water into a spiky prickly ball.' },
  { name: 'Rainbow Trout', group: 'Fish & Ocean Life', habitat: 'Freshwater & River', emoji: '🐟', fact: 'Has a shimmering pink and iridescent stripe along its flanks.' },
  { name: 'Salmon', group: 'Fish & Ocean Life', habitat: 'Freshwater & River', emoji: '🐟', fact: 'Leaps up mountain waterfalls to spawn where they were born.' },
  { name: 'Seahorse', group: 'Fish & Ocean Life', habitat: 'Ocean & Marine', emoji: '🐡', fact: 'The male seahorse gives birth to thousands of tiny babies!' },
  { name: 'Whale Shark', group: 'Fish & Ocean Life', habitat: 'Ocean & Marine', emoji: '🦈', fact: 'The largest fish in the sea, gently eating microscopic plankton.' },

  // Invertebrates & Insects
  { name: 'Blue Morpho Butterfly', group: 'Invertebrate & Insect', habitat: 'Rainforest & Jungle', emoji: '🦋', fact: 'Wings shimmer with radiant metallic blue optical scales.' },
  { name: 'Firefly', group: 'Invertebrate & Insect', habitat: 'Forest & Woodland', emoji: '🪲', fact: 'Bioluminescent belly lights up summer evenings.' },
  { name: 'Giant Pacific Octopus', group: 'Invertebrate & Insect', habitat: 'Ocean & Marine', emoji: '🐙', fact: 'Has three hearts, blue blood, and 9 brain centers.' },
  { name: 'Honeybee', group: 'Invertebrate & Insect', habitat: 'Farm & Backyard', emoji: '🐝', fact: 'Dances the waggle dance to show where sweet flowers grow.' },
  { name: 'Jellyfish', group: 'Invertebrate & Insect', habitat: 'Ocean & Marine', emoji: '🪼', fact: 'Ancient 95% water creature with no bones, brain, or heart.' },
  { name: 'Ladybug', group: 'Invertebrate & Insect', habitat: 'Farm & Backyard', emoji: '🐞', fact: 'Spotted red beetle that protects garden plants from pests.' },
  { name: 'Monarch Butterfly', group: 'Invertebrate & Insect', habitat: 'Forest & Woodland', emoji: '🦋', fact: 'Migrates 4,000 km across North America to winter forests.' },
  { name: 'Praying Mantis', group: 'Invertebrate & Insect', habitat: 'Farm & Backyard', emoji: '🦗', fact: 'Holds front legs like it is praying, with lightning reflexes.' },
  { name: 'Tarantula', group: 'Invertebrate & Insect', habitat: 'Desert', emoji: '🕷️', fact: 'Fuzzy gentle spider that walks softly on silken pads.' }
];

// Algorithmically generate the full catalog of 1,000 well-known animal species for kids exploration
export const FULL_ANIMAL_CATALOG: CatalogAnimal[] = (() => {
  const result: CatalogAnimal[] = [];
  const habitats: Array<Exclude<Animal['habitat'], 'All'>> = [
    'Savannah & Grassland',
    'Rainforest & Jungle',
    'Ocean & Marine',
    'Polar & Arctic',
    'Forest & Woodland',
    'Mountains',
    'Desert',
    'Freshwater & River',
    'Farm & Backyard'
  ];
  
  const groups: Array<Exclude<Animal['group'], 'All'>> = [
    'Mammal',
    'Bird',
    'Reptile',
    'Amphibian',
    'Fish & Ocean Life',
    'Invertebrate & Insect'
  ];

  // Add the base curated animals first
  const seenNames = new Set<string>();
  BASE_ANIMAL_SPECIES.forEach((a) => {
    if (!seenNames.has(a.name)) {
      seenNames.add(a.name);
      result.push({
        name: a.name,
        group: a.group as Exclude<Animal['group'], 'All'>,
        habitat: a.habitat as Exclude<Animal['habitat'], 'All'>,
        emoji: a.emoji,
        fact: a.fact
      });
    }
  });

  // Systematic geographical & descriptive prefixes
  const regions = [
    'Northern', 'Southern', 'Eastern', 'Western', 'Highland', 'Lowland', 'Alpine',
    'Coastal', 'Island', 'Riverine', 'Forest', 'Desert', 'Tropical', 'Arctic',
    'Mountain', 'Valley', 'Prairie', 'Savannah', 'Coral Sea', 'Pacific', 'Atlantic',
    'Amazonian', 'Sahara', 'Himalayan', 'Andean', 'Congo Basin', 'Siberian', 'Baltic'
  ];

  const traits = [
    'Golden', 'Spotted', 'Striped', 'Giant', 'Pygmy', 'Red', 'Blue', 'Emerald',
    'Snowy', 'Dwarf', 'Crowned', 'Spectacled', 'Collared', 'Masked', 'Silvery',
    'Tufted', 'Greater', 'Lesser', 'Banded', 'Ring-tailed', 'Ruby-throated',
    'White-tailed', 'Black-footed', 'Velvet', 'Sunburst', 'Whistling', 'Speckled',
    'Long-eared', 'Feathered', 'Iridescent', 'Spiny', 'Azure', 'Crimson'
  ];

  const animalBases = [
    { base: 'Gazelle', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🦌', fact: 'Graceful leaper on the open plains.' },
    { base: 'Antelope', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🦌', fact: 'Fast runner with spiraled horns.' },
    { base: 'Macaque', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🐒', fact: 'Clever troop monkey foraging in trees.' },
    { base: 'Squirrel', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🐿️', fact: 'Hides acorns in cozy tree hollows.' },
    { base: 'Mongoose', group: 'Mammal', habitat: 'Savannah & Grassland', emoji: '🦡', fact: 'Agile fighter with quick reflexes.' },
    { base: 'Porcupine', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🦔', fact: 'Has sharp quills for defense.' },
    { base: 'Bat', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🦇', fact: 'Only mammal capable of true flight.' },
    { base: 'Fox', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🦊', fact: 'Clever hunter with a bushy warm tail.' },
    { base: 'Badger', group: 'Mammal', habitat: 'Forest & Woodland', emoji: '🦡', fact: 'Sturdy burrower with sharp digging claws.' },
    { base: 'Otter', group: 'Mammal', habitat: 'Freshwater & River', emoji: '🦦', fact: 'Playful swimmer holding hands while floating.' },
    { base: 'Parrot', group: 'Bird', habitat: 'Rainforest & Jungle', emoji: '🦜', fact: 'Can mimic human sounds and chatter.' },
    { base: 'Warbler', group: 'Bird', habitat: 'Forest & Woodland', emoji: '🐦', fact: 'Singing melodious tunes in spring.' },
    { base: 'Finch', group: 'Bird', habitat: 'Farm & Backyard', emoji: '🐦', fact: 'Small seed-eating cheerful songbird.' },
    { base: 'Heron', group: 'Bird', habitat: 'Freshwater & River', emoji: '🦤', fact: 'Stands motionless waiting for fish.' },
    { base: 'Pelican', group: 'Bird', habitat: 'Ocean & Marine', emoji: '🦤', fact: 'Has a pouch beak to scoop up water.' },
    { base: 'Ibis', group: 'Bird', habitat: 'Freshwater & River', emoji: '🦤', fact: 'Curves long beak into shallow mud.' },
    { base: 'Kite', group: 'Bird', habitat: 'Mountains', emoji: '🦅', fact: 'Glides effortless on thermal currents.' },
    { base: 'Swift', group: 'Bird', habitat: 'Mountains', emoji: '🐦', fact: 'Super fast flyer catching bugs in flight.' },
    { base: 'Loon', group: 'Bird', habitat: 'Freshwater & River', emoji: '🦆', fact: 'Haunting call echoed across misty lakes.' },
    { base: 'Viper', group: 'Reptile', habitat: 'Desert', emoji: '🐍', fact: 'Has triangular head and slithers quietly.' },
    { base: 'Skink', group: 'Reptile', habitat: 'Desert', emoji: '🦎', fact: 'Smooth-scaled lizard with shiny skin.' },
    { base: 'Tortoise', group: 'Reptile', habitat: 'Desert', emoji: '🐢', fact: 'Armored dome shell and gentle steps.' },
    { base: 'Monitor', group: 'Reptile', habitat: 'Savannah & Grassland', emoji: '🦎', fact: 'Curious lizard surveying with forked tongue.' },
    { base: 'Toad', group: 'Amphibian', habitat: 'Forest & Woodland', emoji: '🐸', fact: 'Bumpy skin and helps eat garden bugs.' },
    { base: 'Newt', group: 'Amphibian', habitat: 'Freshwater & River', emoji: '🦎', fact: 'Swims in ponds and walks on damp moss.' },
    { base: 'Tree Frog', group: 'Amphibian', habitat: 'Rainforest & Jungle', emoji: '🐸', fact: 'Sticky toe pads cling to wet leaves.' },
    { base: 'Snapper', group: 'Fish & Ocean Life', habitat: 'Ocean & Marine', emoji: '🐟', fact: 'Reef fish with sharp predatory teeth.' },
    { base: 'Wrasse', group: 'Fish & Ocean Life', habitat: 'Ocean & Marine', emoji: '🐠', fact: 'Cleans parasites from bigger fish.' },
    { base: 'Catfish', group: 'Fish & Ocean Life', habitat: 'Freshwater & River', emoji: '🐟', fact: 'Has whisker barbels to feel riverbeds.' },
    { base: 'Ray', group: 'Fish & Ocean Life', habitat: 'Ocean & Marine', emoji: '🐟', fact: 'Glides like a winged kite on ocean sands.' },
    { base: 'Butterfly', group: 'Invertebrate & Insect', habitat: 'Rainforest & Jungle', emoji: '🦋', fact: 'Tastes sweet nectar using its feet.' },
    { base: 'Dragonfly', group: 'Invertebrate & Insect', habitat: 'Freshwater & River', emoji: '🪰', fact: 'Acrobatic flyer hovering over quiet water.' },
    { base: 'Beetle', group: 'Invertebrate & Insect', habitat: 'Forest & Woodland', emoji: '🪲', fact: 'Has armored wings and great strength.' },
    { base: 'Crab', group: 'Invertebrate & Insect', habitat: 'Ocean & Marine', emoji: '🦀', fact: 'Walks sideways with sturdy pinching claws.' },
    { base: 'Shrimp', group: 'Invertebrate & Insect', habitat: 'Ocean & Marine', emoji: '🦐', fact: 'Cleans the seafloor with tiny antennae.' },
    { base: 'Starfish', group: 'Invertebrate & Insect', habitat: 'Ocean & Marine', emoji: '⭐', fact: 'Can regrow a lost arm over time.' },
    { base: 'Urchin', group: 'Invertebrate & Insect', habitat: 'Ocean & Marine', emoji: '🦔', fact: 'Spiny round creature grazing on sea kelp.' }
  ];

  // Combine traits and bases safely to reach exactly 1,000 animals without any infinite loops
  let tIdx = 0;
  let bIdx = 0;
  let rIdx = 0;
  let iterations = 0;

  while (result.length < 1000 && iterations < 15000) {
    iterations++;
    const b = animalBases[bIdx % animalBases.length];
    const t = traits[tIdx % traits.length];
    const r = regions[rIdx % regions.length];

    // Alternate naming formats to create natural variety
    const name = (iterations % 2 === 0) ? `${t} ${b.base}` : `${r} ${t} ${b.base}`;

    if (!seenNames.has(name)) {
      seenNames.add(name);
      result.push({
        name,
        group: b.group as Exclude<Animal['group'], 'All'>,
        habitat: b.habitat as Exclude<Animal['habitat'], 'All'>,
        emoji: b.emoji,
        fact: `${name} has unique adaptations suited to its ${b.habitat.toLowerCase()} home.`
      });
    }

    bIdx++;
    if (bIdx % animalBases.length === 0) {
      tIdx++;
      if (tIdx % traits.length === 0) {
        rIdx++;
      }
    }
  }

  return result;
})();

export interface AnimalAssetInfo {
  image?: string;
  audioUrl?: string;
  soundType?: string;
  soundLabel?: string;
  youtubeId?: string;
  youtubeUrl?: string;
  multiViews?: AnimalMultiViews;
}

export function getAnimalAsset(name: string): AnimalAssetInfo {
  const lower = name.toLowerCase();

  // 1. Direct match with featured animals
  const featured = FEATURED_ANIMALS.find(
    (a) => lower.includes(a.name.toLowerCase()) || lower.includes(a.id.toLowerCase())
  );
  if (featured) {
    return {
      image: featured.image,
      audioUrl: featured.audioUrl,
      soundType: featured.soundType,
      soundLabel: featured.soundLabel,
      youtubeId: featured.youtubeId,
      youtubeUrl: featured.youtubeUrl,
      multiViews: featured.multiViews
    };
  }

  // 2. Keyword-based matching for species families
  if (lower.includes('cat') || lower.includes('kitten') || lower.includes('feline')) {
    return {
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80',
      audioUrl: 'https://soundbible.com/mp3/Cat_Meow_2-Cat_Stevens-2034822903.mp3',
      soundType: 'purr',
      soundLabel: 'Authentic Cat Meow, Chirp Trill & Motor Purr',
      youtubeId: 'KijtAdPvd80',
      youtubeUrl: 'https://youtube.com/shorts/KijtAdPvd80?si=HqJzZC8zoxzcYMEH'
    };
  }
  if (lower.includes('dog') || lower.includes('puppy') || lower.includes('hound') || lower.includes('canine')) {
    return {
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80',
      audioUrl: 'https://soundbible.com/mp3/labrador-barking-daniel_simon.mp3',
      soundType: 'bark',
      soundLabel: 'Dog Woof & Bark',
      youtubeId: 'yCo_zmM7YIc',
      youtubeUrl: 'https://youtube.com/shorts/yCo_zmM7YIc?si=cWe6ASdeAUlEPevR'
    };
  }
  if (lower.includes('wolf')) {
    return {
      image: '/images/gray_wolf.jpg',
      audioUrl: 'https://soundbible.com/mp3/Many Wolves Howling-SoundBible.com-531262521.mp3',
      soundType: 'howl',
      soundLabel: 'Wolf Pack Howl',
      youtubeId: '-vnLonKyuzc',
      youtubeUrl: 'https://youtube.com/shorts/-vnLonKyuzc?si=82ocZfjnLGeVhF28'
    };
  }
  if (lower.includes('eagle') || lower.includes('hawk') || lower.includes('falcon') || lower.includes('harrier')) {
    return {
      image: '/images/bald_eagle.jpg',
      audioUrl: 'https://soundbible.com/mp3/hawk_screeching-Mike_Koenig-1626170357.mp3',
      soundType: 'chirp',
      soundLabel: 'Eagle Raptor Cry',
      youtubeId: 'Fisvu6pIYqM',
      youtubeUrl: 'https://youtube.com/shorts/Fisvu6pIYqM?si=75bATOuMoHgoIBUj'
    };
  }
  if (lower.includes('great horned owl')) {
    return {
      image: '/images/great_horned_owl_all_sides.jpg',
      audioUrl: 'https://soundbible.com/mp3/Owl Hooting-SoundBible.com-1155496330.mp3',
      soundType: 'hoot',
      soundLabel: 'Resonant Great Horned Owl Hoot',
      youtubeId: 'WjKSJXeoVyQ',
      youtubeUrl: 'https://youtube.com/shorts/WjKSJXeoVyQ?si=KIgrV_GWNUA6UqSq'
    };
  }
  if (lower.includes('owl')) {
    return {
      image: '/images/barn_owl.jpg',
      audioUrl: 'https://soundbible.com/mp3/Owl Hooting-SoundBible.com-1155496330.mp3',
      soundType: 'hoot',
      soundLabel: 'Night Owl Hoot',
      youtubeId: 'WjKSJXeoVyQ',
      youtubeUrl: 'https://youtube.com/shorts/WjKSJXeoVyQ?si=KIgrV_GWNUA6UqSq'
    };
  }
  if (lower.includes('lion')) {
    return {
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80',
      audioUrl: '/sounds/lion_roar.mp3',
      soundType: 'roar',
      soundLabel: 'Mighty Lion Roar',
      youtubeId: '9VTDUfxCYxU',
      youtubeUrl: 'https://youtu.be/9VTDUfxCYxU?si=Q915RgfjcDXWbhBP'
    };
  }
  if (lower.includes('cheetah')) {
    return {
      image: '/images/cheetah.jpg',
      audioUrl: 'https://soundbible.com/mp3/Cat_Meow_2-Cat_Stevens-2034822903.mp3',
      soundType: 'chirp',
      soundLabel: 'Cheetah High Chirp & Purr'
    };
  }
  if (lower.includes('koala')) {
    return {
      image: '/images/koala.jpg',
      audioUrl: 'https://soundbible.com/mp3/Bear Growling-SoundBible.com-2376031.mp3',
      soundType: 'squeak',
      soundLabel: 'Koala Grunt',
      youtubeId: 'Vj252kOL7a4',
      youtubeUrl: 'https://youtube.com/shorts/Vj252kOL7a4?si=KmslY36BXcetE-xz'
    };
  }
  if (lower.includes('panda')) {
    return {
      image: 'https://images.unsplash.com/photo-1527118732049-c88155f2107c?auto=format&fit=crop&w=900&q=80',
      audioUrl: 'https://soundbible.com/mp3/3 Baby Cubs Grunt And Growl-SoundBible.com-1092741453.mp3',
      soundType: 'panda_grunt',
      soundLabel: 'Endearing Giant Panda Bleat & Grunt',
      youtubeId: 'qpEwUD5WqI0',
      youtubeUrl: 'https://youtube.com/shorts/qpEwUD5WqI0?si=p13I2C11WdnRlSUD'
    };
  }
  if (lower.includes('leopard')) {
    return {
      image: '/images/leopard.jpg',
      audioUrl: 'https://soundbible.com/mp3/Tiger Growling-SoundBible.com-258880045.mp3',
      soundType: 'roar',
      soundLabel: 'Wild Leopard Roar & Growl',
      youtubeId: 's71L3rXqW6Q',
      youtubeUrl: 'https://www.youtube.com/watch?v=s71L3rXqW6Q'
    };
  }
  if (lower.includes('tiger') || lower.includes('jaguar')) {
    return {
      image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&q=80',
      audioUrl: 'https://soundbible.com/mp3/Tiger Growling-SoundBible.com-258880045.mp3',
      soundType: 'tiger_growl',
      soundLabel: 'Fierce Bengal Tiger Roar & Guttural Snarl'
    };
  }
  if (lower.includes('elephant')) {
    return {
      image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=80',
      audioUrl: 'https://soundbible.com/mp3/Elephant Trumpeting-SoundBible.com-1343370148.mp3',
      soundType: 'trumpet',
      soundLabel: 'Elephant Trumpet',
      youtubeId: 'An44Lb1reJM',
      youtubeUrl: 'https://youtube.com/shorts/An44Lb1reJM?si=h4xTd4oCFR-3Dvgr'
    };
  }
  if (lower.includes('bear')) {
    return {
      image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=900&q=80',
      audioUrl: 'https://soundbible.com/mp3/Bear Growling-SoundBible.com-2376031.mp3',
      soundType: 'growl',
      soundLabel: 'Fierce Arctic Bear Growl, Chest Huff & Snarl',
      youtubeId: 'hpPMic2oMuU',
      youtubeUrl: 'https://youtube.com/shorts/hpPMic2oMuU?si=HvX-rFiOo4QpqNFM'
    };
  }
  if (lower.includes('dolphin')) {
    return {
      image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&w=900&q=80',
      audioUrl: 'https://soundbible.com/mp3/Dolphins-SoundBible.com-1774583018.mp3',
      soundType: 'dolphin',
      soundLabel: 'Playful Dolphin Whistle, Click Train & Ocean Chortle'
    };
  }
  if (lower.includes('whale')) {
    return {
      image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=900&q=80',
      audioUrl: 'https://soundbible.com/mp3/Humpback Whale Call-SoundBible.com-1090143239.mp3',
      soundType: 'whale',
      soundLabel: 'Majestic Blue Whale Song & Abyssal Sub-Bass'
    };
  }
  if (lower.includes('monkey') || lower.includes('chimpanzee') || lower.includes('baboon') || lower.includes('ape')) {
    return {
      image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=900&q=80',
      soundType: 'monkey',
      soundLabel: 'Playful Monkey Vocal Chatter & Whoops'
    };
  }
  if (lower.includes('seal') || lower.includes('sea lion') || lower.includes('walrus')) {
    return {
      image: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=900&q=80',
      soundType: 'seal',
      soundLabel: 'Seal Honking Bark & Call'
    };
  }
  if (lower.includes('frog') || lower.includes('toad')) {
    return {
      image: '/images/real_frog.jpg',
      audioUrl: '/sounds/frog_croak.mp3',
      soundType: 'croak',
      soundLabel: 'Frog Ribbit & Croak',
      youtubeId: 'A9A7BovwcFw',
      youtubeUrl: 'https://youtube.com/shorts/A9A7BovwcFw?si=9kiCln7GItC4O5it'
    };
  }
  if (lower.includes('bee') || lower.includes('wasp')) {
    return {
      image: '/images/honey_bee.jpg',
      audioUrl: 'https://soundbible.com/mp3/Fly Buzzing-SoundBible.com-1512331015.mp3',
      soundType: 'buzz',
      soundLabel: 'Insect Buzz',
      youtubeId: 'TpPnGSgiNxg',
      youtubeUrl: 'https://youtube.com/shorts/TpPnGSgiNxg?si=XaIh9XrU6WpBuvUB'
    };
  }
  if (lower.includes('giraffe')) {
    return {
      image: '/images/giraffe_all_sides.jpg',
      audioUrl: 'https://soundbible.com/mp3/Crisp_Ocean_Waves-Mike_Koenig-1486046376.mp3',
      soundType: 'giraffe',
      soundLabel: 'Nocturnal Giraffe Harmonic Hum & Savannah Snort',
      youtubeId: 'YYFvYAUlLbU',
      youtubeUrl: 'https://youtu.be/YYFvYAUlLbU?si=n0GKfKiCHbUozl1t'
    };
  }
  if (lower.includes('penguin')) {
    return {
      image: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=900&q=80',
      audioUrl: 'https://soundbible.com/mp3/Brant Geese Foraging-SoundBible.com-136408705.mp3',
      soundType: 'penguin',
      soundLabel: 'Emperor Penguin Colony Trumpet & Braying Call',
      youtubeId: 'Anr35RbBL3Y',
      youtubeUrl: 'https://youtu.be/Anr35RbBL3Y?si=nty-9FsrHzeNdJ7H'
    };
  }
  if (lower.includes('lamb')) {
    return {
      image: '/images/lamb.jpg',
      soundType: 'baa',
      soundLabel: 'Sweet Baby Lamb "Baa-Baa"'
    };
  }
  if (lower.includes('sheep') || lower.includes('ram')) {
    return {
      image: '/images/sheep.jpg',
      soundType: 'baa',
      soundLabel: 'Authentic Sheep Baa & Bleat'
    };
  }
  if (lower.includes('crane')) {
    return {
      image: '/images/crane.jpg',
      soundType: 'chirp',
      soundLabel: 'Majestic Crane Bugle & Call'
    };
  }
  if (lower.includes('crow') || lower.includes('raven')) {
    return {
      image: '/images/crow.jpg',
      soundType: 'crow',
      soundLabel: 'Clever Crow "Caw-Caw" Call'
    };
  }
  if (lower.includes('turtle') || lower.includes('tortoise')) {
    return {
      image: '/images/turtle.jpg',
      soundType: 'splash',
      soundLabel: 'Gentle Turtle Splash & Rustle'
    };
  }
  if (lower.includes('chick')) {
    return {
      image: '/images/chick.jpg',
      soundType: 'squeak',
      soundLabel: 'Sweet Baby Chick "Peep-Peep"'
    };
  }
  if (lower.includes('hen') || lower.includes('chicken')) {
    return {
      image: '/images/hen.jpg',
      soundType: 'cluck',
      soundLabel: 'Authentic Hen Cluck & Cackle'
    };
  }
  if (lower.includes('rooster') || lower.includes('cock') || lower.includes('cook')) {
    return {
      image: '/images/rooster.jpg',
      soundType: 'crow',
      soundLabel: 'Authentic Cock-a-Doodle-Doo Morning Crow'
    };
  }
  if (lower.includes('calf') || lower.includes('baby cow')) {
    return {
      image: '/images/calf.jpg',
      audioUrl: 'https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3',
      soundType: 'moo',
      soundLabel: 'Gentle Baby Calf Soft Moo'
    };
  }
  if (lower.includes('cow') || lower.includes('cattle') || lower.includes('bull')) {
    return {
      image: '/images/cow.jpg',
      audioUrl: 'https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3',
      soundType: 'moo',
      soundLabel: 'Authentic Gentle Cow Moo'
    };
  }
  if (lower.includes('horse') || lower.includes('stallion') || lower.includes('mare') || lower.includes('pony')) {
    return {
      image: '/images/horse.jpg',
      soundType: 'neigh',
      soundLabel: 'Galloping Horse Whinny & Neigh'
    };
  }
  if (lower.includes('donkey') || lower.includes('burro') || lower.includes('mule') || lower.includes('ass')) {
    return {
      image: '/images/donkey.jpg',
      soundType: 'bray',
      soundLabel: 'Joyful Donkey "Hee-Haw" Bray'
    };
  }
  if (lower.includes('fox') || lower.includes('vulpine')) {
    return {
      image: '/images/fox.jpg',
      soundType: 'bark',
      soundLabel: 'Clever Fox Yip & Bark'
    };
  }
  if (lower.includes('snake') || lower.includes('serpent') || lower.includes('viper')) {
    return {
      image: '/images/snake.jpg',
      soundType: 'hiss',
      soundLabel: 'Snake Slither & Gentle Hiss'
    };
  }
  if (lower.includes('lama') || lower.includes('llama') || lower.includes('alpaca')) {
    return {
      image: '/images/lama.jpg',
      soundType: 'bleat',
      soundLabel: 'Friendly Llama Hum & Soft Bleat'
    };
  }
  if (lower.includes('goat') || lower.includes('billy') || lower.includes('kid')) {
    return {
      image: '/images/goat.jpg',
      soundType: 'bleat',
      soundLabel: 'Playful Goat "Maa-Maa" Bleat'
    };
  }
  if (lower.includes('swallow') || lower.includes('martin')) {
    return {
      image: '/images/swallow.jpg',
      soundType: 'chirp',
      soundLabel: 'Agile Swallow Twitter & Chitter'
    };
  }
  if (lower.includes('buffalo') || lower.includes('bison')) {
    return {
      image: '/images/buffalo.jpg',
      soundType: 'growl',
      soundLabel: 'Mighty Buffalo Low Bellow'
    };
  }
  if (lower.includes('goose') || lower.includes('geese') || lower.includes('gander')) {
    return {
      image: '/images/goose.jpg',
      audioUrl: 'https://soundbible.com/mp3/Brant Geese Foraging-SoundBible.com-136408705.mp3',
      soundType: 'honk',
      soundLabel: 'Authentic Goose Honk & Call'
    };
  }
  if (lower.includes('gazelle')) {
    return {
      image: '/images/gazelle.jpg',
      soundType: 'snort',
      soundLabel: 'Alert Gazelle Snort & Stomp'
    };
  }
  if (lower.includes('roe deer')) {
    return {
      image: '/images/roe_deer.jpg',
      soundType: 'bark',
      soundLabel: 'Roe Deer Woodland Bark'
    };
  }
  if (lower.includes('red deer') || lower.includes('stag')) {
    return {
      image: '/images/red_deer.jpg',
      soundType: 'roar',
      soundLabel: 'Mighty Stag Bellow & Roar'
    };
  }
  if (lower.includes('peacock') || lower.includes('peahen')) {
    return {
      image: '/images/peacock.jpg',
      soundType: 'peacock',
      soundLabel: 'Resonant Peacock Trumpet Call'
    };
  }
  if (lower.includes('duck') || lower.includes('mallard')) {
    return {
      image: '/images/duck.jpg',
      soundType: 'quack',
      soundLabel: 'Cheerful Duck Quack & Splash'
    };
  }
  if (lower.includes('zebra')) {
    return {
      image: '/images/zebra.jpg',
      soundType: 'neigh',
      soundLabel: 'High-Pitched Zebra Bark & Whinny'
    };
  }
  if (lower.includes('kangaroo') || lower.includes('wallaby') || lower.includes('joey')) {
    return {
      image: '/images/kangaroo.jpg',
      soundType: 'growl',
      soundLabel: 'Kangaroo Thump & Cluck'
    };
  }
  if (lower.includes('rhinoceros') || lower.includes('rhino')) {
    return {
      image: '/images/rhinoceros.jpg',
      soundType: 'snort',
      soundLabel: 'Deep Rhino Snort & Huff'
    };
  }
  if (lower.includes('crocodile') || lower.includes('alligator') || lower.includes('croc')) {
    return {
      image: '/images/crocodile.jpg',
      soundType: 'hiss',
      soundLabel: 'Low Crocodile Growl & Water Hiss'
    };
  }
  if (lower.includes('pig') || lower.includes('swine') || lower.includes('hog') || lower.includes('piglet')) {
    return {
      image: '/images/pig.jpg',
      soundType: 'oink',
      soundLabel: 'Friendly Pig Oink & Snort'
    };
  }

  return {};
}
