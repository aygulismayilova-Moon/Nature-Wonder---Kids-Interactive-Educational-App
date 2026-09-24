import { UniverseElement } from '../types';

export const UNIVERSE_ELEMENTS: UniverseElement[] = [
  // --- Celestial Bodies ---
  {
    id: 'sun',
    name: 'The Golden Sun',
    category: 'Celestial Body',
    image: '/images/real_sun.jpg',
    soundType: 'solar_wind',
    soundLabel: 'Solar Wind Humming',
    description: 'The Sun is the giant glowing star at the very center of our solar system! Its warm golden rays give Earth light, warmth, and life.',
    kidWonder: 'Did you know? The Sun is so huge that over 1.3 million Earths could fit inside it!',
    funFacts: [
      'Light from the Sun travels 150 million kilometers to reach your face in just 8 minutes and 20 seconds.',
      'The core of the Sun is blistering hot — about 15 million degrees Celsius!',
      'Without the Sun, Earth would be a frozen ball of dark ice floating through space.'
    ],
    emoji: '☀️'
  },
  {
    id: 'moon',
    name: 'The Glowing Moon',
    category: 'Celestial Body',
    image: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&w=1200&q=80',
    soundType: 'celestial_hum',
    soundLabel: 'Soft Night Shimmer',
    description: 'The Moon is Earth’s faithful night companion! It doesn’t create its own light, but acts like a giant mirror reflecting sunshine down to us.',
    kidWonder: 'Look up at night: Can you spot the dark volcanic plains that look like a smiling "Man in the Moon"?',
    funFacts: [
      'Because there is no wind or rain on the Moon, astronaut footprints from the Apollo missions will stay there for millions of years!',
      'Gravity on the Moon is one-sixth of Earth’s gravity — you could jump six times higher than on a trampoline!',
      'The Moon changes shape in our sky through phases: New Moon, Crescent, Quarter, Gibbous, and Full Moon.'
    ],
    emoji: '🌕'
  },
  {
    id: 'earth',
    name: 'Planet Earth',
    category: 'Celestial Body',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1200&q=80',
    soundType: 'celestial_hum',
    soundLabel: 'Earth Resonance',
    description: 'Our precious blue marble home! Earth is the only known planet in the entire cosmos blessed with liquid water, fresh air, and blooming life.',
    kidWonder: 'You are riding a cosmic spaceship right now! Earth spins around once a day and circles the Sun once every year.',
    funFacts: [
      'Earth’s atmosphere protects us like an invisible superhero shield against solar radiation and space pebbles.',
      'Earth is not a perfect sphere — it bulges slightly around the equator because of its rotation.',
      'Earth has millions of different living species, from tiny ants to giant redwood trees and blue whales.'
    ],
    emoji: '🌍'
  },
  {
    id: 'saturn',
    name: 'Ringed Saturn',
    category: 'Celestial Body',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    soundType: 'celestial_hum',
    soundLabel: 'Planetary Ring Whispers',
    description: 'Saturn is the jewel of the Solar System, famous for its magnificent wide rings made of billions of shimmering ice and rock pieces.',
    kidWonder: 'Saturn is made mostly of lightweight gases. If you had a bathtub big enough, Saturn would actually float on water!',
    funFacts: [
      'Saturn’s rings stretch 282,000 kilometers wide, but in many places they are only about 10 meters thick!',
      'Saturn has over 140 known moons orbiting around it, including Titan, which has lakes of liquid methane.',
      'A year on Saturn lasts almost 29 Earth years!'
    ],
    emoji: '🪐'
  },
  {
    id: 'comets',
    name: 'Speeding Comets',
    category: 'Celestial Body',
    image: '/images/speeding_comet.jpg',
    soundType: 'meteor_whoosh',
    soundLabel: 'Comet Whoosh',
    description: 'Comets are "dirty snowballs" made of ancient ice, dust, and rock from the frozen edge of our solar system.',
    kidWonder: 'When a comet flies close to the warm Sun, its ice boils into gas, creating a glowing tail millions of kilometers long!',
    funFacts: [
      'Halley’s Comet visits Earth’s sky once every 75 to 76 years — next appearing in the year 2061!',
      'Comet tails always point directly away from the Sun, blown backwards by the solar wind.',
      'Scientists believe comets may have brought early water to Earth billions of years ago.'
    ],
    emoji: '☄️'
  },
  {
    id: 'galaxies',
    name: 'The Milky Way Galaxy',
    category: 'Cosmic Phenomenon',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    soundType: 'celestial_hum',
    soundLabel: 'Cosmic Symphony',
    description: 'A galaxy is a gigantic cosmic pinwheel containing hundreds of billions of stars, planets, and nebulae bound together by gravity.',
    kidWonder: 'Our home galaxy, the Milky Way, looks like a spilled ribbon of creamy milk across dark starry skies.',
    funFacts: [
      'There are over 100 billion stars in our Milky Way galaxy alone, and billions of other galaxies in the universe!',
      'It takes our Sun about 230 million years to make just one full lap around the galactic center.',
      'At the very center of most large galaxies sits a supermassive black hole.'
    ],
    emoji: '🌌'
  },

  // --- Cosmic & Natural Phenomena ---
  {
    id: 'aurora',
    name: 'Aurora Borealis (Northern Lights)',
    category: 'Cosmic Phenomenon',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80',
    soundType: 'aurora_shimmer',
    soundLabel: 'Aurora Shimmer Chimes',
    description: 'The Aurora is a glowing, dancing curtain of emerald green, violet, and magenta light that swirls across high polar night skies.',
    kidWonder: 'It is a real cosmic dance! Charged solar particles collide with gases in Earth’s upper atmosphere, making the sky glow like neon!',
    funFacts: [
      'In the northern hemisphere they are called Aurora Borealis, and in the southern hemisphere they are called Aurora Australis.',
      'Astronauts on the International Space Station can look down and fly right through the glowing aurora curtains!',
      'Indigenous folklore imagined the dancing lights were friendly spirits playing a game across the heavens.'
    ],
    emoji: '✨'
  },
  {
    id: 'eclipse',
    name: 'Solar & Lunar Eclipse',
    category: 'Cosmic Phenomenon',
    image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=1200&q=80',
    soundType: 'celestial_hum',
    soundLabel: 'Cosmic Alignment Tone',
    description: 'An eclipse is a grand cosmic game of shadow-tag between the Sun, Moon, and Earth when they line up in a perfect straight line.',
    kidWonder: 'During a total solar eclipse, day turns into twilight for a few minutes, stars come out, and birds sing evening songs!',
    funFacts: [
      'By pure celestial coincidence, the Sun is 400 times bigger than the Moon, but also 400 times farther away, so they look the exact same size in our sky!',
      'During a lunar eclipse, Earth blocks sunlight from hitting the Moon, turning the Moon a deep rusty "blood red".',
      'Ancient cultures would beat drums during eclipses to encourage the Sun to come back out!'
    ],
    emoji: '🌘'
  },
  {
    id: 'rainbow',
    name: 'Vibrant Rainbows',
    category: 'Natural Phenomenon',
    image: '/images/vibrant_rainbow.jpg',
    soundType: 'aurora_shimmer',
    soundLabel: 'Prismatic Chime',
    description: 'Rainbows appear when golden sunshine shines through thousands of falling raindrops, splitting pure white light into a rainbow arc of 7 colors.',
    kidWonder: 'Remember the magic color song: Red, Orange, Yellow, Green, Blue, Indigo, Violet (ROY G. BIV)!',
    funFacts: [
      'From an airplane or high mountain, you can see that a rainbow is actually a complete, full circle in the sky!',
      'No two people ever see the exact same rainbow, because you are looking through a slightly different set of raindrops than anyone else.',
      'Sometimes you can see a second, fainter rainbow above the first one, with the colors reversed!'
    ],
    emoji: '🌈'
  },
  {
    id: 'lightning',
    name: 'Lightning & Thunder',
    category: 'Natural Phenomenon',
    image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1200&q=80',
    soundType: 'thunder_crack',
    soundLabel: 'Thunder Rumble',
    description: 'Lightning is nature’s giant electric spark! Ice crystals bump inside storm clouds, building up static electricity until a brilliant bolt zaps.',
    kidWonder: 'Thunder is the sound of air exploding with heat! Lightning is five times hotter than the surface of the Sun!',
    funFacts: [
      'Light travels faster than sound. Count the seconds between the flash and thunder boom: every 3 seconds means the storm is 1 kilometer away.',
      'A single bolt of lightning contains enough electrical energy to toast 100,000 slices of bread!',
      'Earth experiences over 8 million lightning strikes every single day.'
    ],
    emoji: '⚡'
  },
  {
    id: 'volcano',
    name: 'Fiery Volcanoes',
    category: 'Natural Phenomenon',
    image: '/images/fiery_volcano.jpg',
    soundType: 'volcano_rumble',
    soundLabel: 'Magma Chamber Rumble',
    description: 'Volcanoes are mountains with an opening down to Earth’s fiery interior. Deep beneath the crust, melted liquid rock called magma bubbles up.',
    kidWonder: 'When liquid rock is under the ground, it is called Magma. When it erupts into the open air, it is called Lava!',
    funFacts: [
      'The Hawaiian islands were formed entirely by underwater volcanic eruptions over millions of years.',
      'Volcanic ash is packed with rich minerals that make the surrounding soil super fertile for farming fruits and vegetables.',
      'The biggest volcano in the solar system is Olympus Mons on Mars — three times higher than Mount Everest!'
    ],
    emoji: '🌋'
  },
  {
    id: 'tides',
    name: 'Ocean Tides',
    category: 'Natural Phenomenon',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80',
    soundType: 'tide_swell',
    soundLabel: 'Tidal Wave Swell',
    description: 'Twice every day, the ocean waters rise up onto sandy beaches (high tide) and then slowly pull back into the sea (low tide).',
    kidWonder: 'The Moon is playing tug-of-war with Earth’s water! The Moon’s gravity gently pulls ocean water towards itself.',
    funFacts: [
      'The Bay of Fundy in Canada has the highest tides in the world — water can rise 16 meters (the height of a 4-story building) in a few hours!',
      'When the tide goes out, it leaves behind tide pools filled with starfish, crabs, and sea anemones for kids to discover.',
      'Sun gravity also pulls on tides: when Sun and Moon line up, we get extra high "Spring Tides".'
    ],
    emoji: '🌊'
  },
  {
    id: 'shooting-star',
    name: 'Shooting Stars (Meteors)',
    category: 'Cosmic Phenomenon',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    soundType: 'meteor_whoosh',
    soundLabel: 'Meteor Streak Whoosh',
    description: 'Shooting stars aren’t real stars at all! They are tiny bits of space dust or rock that burn up brightly as they enter Earth’s atmosphere.',
    kidWonder: 'Make a wish! Most shooting stars that streak across the night sky are no bigger than a single grain of sand or pebble!',
    funFacts: [
      'When Earth passes through dust trails left by comets, we see meteor showers with dozens of shooting stars every hour.',
      'Meteors enter our atmosphere traveling at up to 70 kilometers per second (over 250,000 km/h)!',
      'If a space rock survives the fiery trip and lands on the ground, it is called a "Meteorite".'
    ],
    emoji: '🌠'
  }
];
