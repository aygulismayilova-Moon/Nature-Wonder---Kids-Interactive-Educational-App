import { NatureElement } from '../types';

export const NATURE_ELEMENTS: NatureElement[] = [
  {
    id: 'mountain',
    name: 'Mountain',
    shortName: 'Mountain',
    category: 'High Peaks & Alpine Horizons',
    image: '/images/mountain.jpg',
    ambientSound: 'wind',
    soundLabel: 'Alpine Wind & Mountain Echoes',
    description: 'Mountains are giant stone towers that rise high into the clouds! Some peaks are so high that snow never melts, even in the middle of summer.',
    funFacts: [
      'Mount Everest is the highest mountain on Earth, standing over 8,848 meters (29,031 feet) tall.',
      'Mountains are formed when huge tectonic plates of Earth’s crust slowly crash into each other over millions of years.',
      'More than half of the fresh drinking water in the whole world starts on snowy mountain tops.'
    ],
    kidActivity: 'Mini Experiment: Squeeze a soft towel from both sides with your hands. Watch how it buckles upward into little mountain ridges!',
    whyItMatters: 'Mountains catch rainclouds and store winter snow, releasing pure fresh water into rivers all year long.',
    emoji: '🏔️'
  },
  {
    id: 'trees',
    name: 'Trees',
    shortName: 'Trees',
    category: 'Living Giants & Ancient Flora',
    image: '/images/trees.jpg',
    ambientSound: 'wind',
    soundLabel: 'Rustling Leaves & Tree Whispers',
    description: 'Trees are Earth’s magnificent living wonders! From gentle birch trees to colossal redwoods that have lived for thousands of years, trees shelter wildlife, blossom with fragrant flowers, and produce the very oxygen we breathe.',
    funFacts: [
      'The oldest living individual tree in the world is a Great Basin bristlecone pine named Methuselah, over 4,850 years old!',
      'Trees drink water from deep underground and pump it all the way up to leaves hundreds of feet high through natural capillary pressure.',
      'A single mature oak tree can support more than 2,300 species of birds, insects, lichens, and fungi!'
    ],
    kidActivity: 'Tree Ring & Bark Hug: Find a tree in your neighborhood. Gently feel the patterns in its bark and wrap your arms around it — how many people does it take to hug it completely?',
    whyItMatters: 'Trees absorb carbon dioxide, cool cities with natural shade, prevent soil erosion with their strong roots, and produce fresh oxygen for all living beings.',
    emoji: '🌳'
  },
  {
    id: 'forests',
    name: 'Forests & Woods',
    shortName: 'Forests',
    category: 'Ecosystems & Green Canopy',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    ambientSound: 'wind',
    soundLabel: 'Rustling Leaves & Forest Wind',
    description: 'Forests are lush worlds filled with thousands of tall trees whose leafy canopies touch the sky. They are the lungs of planet Earth!',
    funFacts: [
      'Trees talk to each other underground using a vast network of friendly mushroom roots called the "Wood Wide Web"!',
      'One large mature tree can produce enough fresh oxygen for four people to breathe for an entire day.',
      'Over 80% of all land animals and insects call forests their cozy home.'
    ],
    kidActivity: 'Nature Detective: Look at the bark on a tree near you. Is it smooth, rough, or covered in soft green moss?',
    whyItMatters: 'Forests clean our air, create rain, and give homes to deer, owls, squirrels, and monkeys.',
    emoji: '🌲'
  },
  {
    id: 'rivers',
    name: 'Flowing Rivers',
    shortName: 'Rivers',
    category: 'Freshwater Pathways',
    image: 'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1200&q=80',
    ambientSound: 'river',
    soundLabel: 'Bubbling River Current',
    description: 'Rivers are freshwater ribbons that dance down from high mountains, carving winding valleys as they travel all the way to the sea.',
    funFacts: [
      'The Nile River in Africa and the Amazon River in South America are the longest rivers on our planet.',
      'Rivers carry tiny pebbles and nutrients that feed plants, fish, otters, and beavers along their shores.',
      'Smooth river stones became round because water rolled them against each other for hundreds of years!'
    ],
    kidActivity: 'Water Float: Next time you see a safe stream, float a small fallen leaf and see how water currents guide it downstream.',
    whyItMatters: 'Rivers provide fresh drinking water, clean hydropower energy, and fertile soil for farming.',
    emoji: '🌊'
  },
  {
    id: 'waterfalls',
    name: 'Cascading Waterfalls',
    shortName: 'Waterfalls',
    category: 'Dramatic Water Cascades',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
    ambientSound: 'waterfall',
    soundLabel: 'Mighty Waterfall Roar',
    description: 'Waterfalls happen when a river plunges over a steep cliff of hard rock, creating sparkling mist, roaring thunder, and magical rainbows.',
    funFacts: [
      'Angel Falls in Venezuela is the highest uninterrupted waterfall on Earth, dropping almost 1 kilometer (979 meters)!',
      'The mist created by big waterfalls creates its own microclimate where rare ferns and mosses thrive.',
      'When sunlight hits the tiny water droplets in the waterfall mist, you can often spot a permanent double rainbow!'
    ],
    kidActivity: 'Rainbow Spotter: On a sunny day, ask an adult to spray a gentle mist with a garden hose to make your own mini rainbow!',
    whyItMatters: 'Waterfalls churn up millions of oxygen bubbles into the water, keeping river ecosystems healthy and lively.',
    emoji: '🏞️'
  },
  {
    id: 'lakes',
    name: 'Peaceful Lakes',
    shortName: 'Lakes',
    category: 'Calm Freshwater Basins',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
    ambientSound: 'river',
    soundLabel: 'Gentle Lake Ripples',
    description: 'Lakes are calm pools of fresh water surrounded by land. Their glassy surfaces reflect fluffy white clouds like a giant outdoor mirror.',
    funFacts: [
      'Lake Baikal in Siberia is the deepest and oldest lake in the world, holding one-fifth of all unfrozen freshwater on Earth.',
      'Some volcanic lakes are created inside the crater of extinct volcanoes and have vibrant turquoise waters.',
      'Ducks, frogs, water lilies, dragonflies, and swans love the still, gentle water of lakes.'
    ],
    kidActivity: 'Mirror Waters: Can you see your reflection in a bowl of calm water? What happens when you tap it with your finger?',
    whyItMatters: 'Lakes hold precious water supplies for communities and serve as resting rest-stops for migrating birds.',
    emoji: '🛶'
  },
  {
    id: 'seas',
    name: 'Coastal Seas',
    shortName: 'Seas',
    category: 'Saltwater Shelves & Reefs',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ambientSound: 'ocean',
    soundLabel: 'Coastal Sea Waves',
    description: 'Seas are large bodies of saltwater connected to oceans, often partially cradled by land and home to colorful coral reefs and sandy beaches.',
    funFacts: [
      'Coral reefs found in warm seas are nicknamed the "rainforests of the sea" because thousands of colorful creatures live there.',
      'The Mediterranean Sea connects three continents: Europe, Asia, and Africa.',
      'Seashells washed up on beaches were once protective little homes made by snails, clams, and mollusks!'
    ],
    kidActivity: 'Sea Shell Wonder: Hold a clean spiral seashell up to your ear — do you hear the gentle whoosh of the sea?',
    whyItMatters: 'Seas buffer coastal communities, nurture young fish nurseries, and generate warm coastal breezes.',
    emoji: '🏖️'
  },
  {
    id: 'oceans',
    name: 'Deep Blue Oceans',
    shortName: 'Oceans',
    category: 'Global Saltwater Expanse',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
    ambientSound: 'ocean',
    soundLabel: 'Deep Ocean Swell & Surf',
    description: 'Oceans cover more than 70% of our entire planet! They are vast, deep, and home to the greatest mysteries and creatures on Earth.',
    funFacts: [
      'The Pacific Ocean is so gigantic that all seven continents could fit inside it with room to spare!',
      'The deepest trench in the ocean, the Mariana Trench, is nearly 11,000 meters deep — deeper than Mount Everest is tall!',
      'Microscopic ocean plants called phytoplankton produce more than 50% of the oxygen we breathe every day.'
    ],
    kidActivity: 'Globe Explorer: Spin a world globe and count how much blue you see compared to green and brown land!',
    whyItMatters: 'Oceans regulate Earth’s climate, absorb extra heat, and are the beating heart of our planetary weather.',
    emoji: '🌊'
  },
  {
    id: 'snow',
    name: 'Sparkling Snow',
    shortName: 'Snow',
    category: 'Frozen Winter Crystals',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=1200&q=80',
    ambientSound: 'snow',
    soundLabel: 'Crisp Snow Shimmer & Footsteps',
    description: 'Snow forms high in cold clouds when water vapor freezes into delicate six-sided ice crystals that float down like soft white feathers.',
    funFacts: [
      'No two snowflakes are ever completely identical — each one grows its own unique six-pointed fractal pattern!',
      'Snow feels quiet because fresh powder absorbs sound waves like a giant, soft acoustic blanket.',
      'Some animals, like the snowshoe hare and ptarmigan bird, change their brown summer coats into pure white winter coats to hide in the snow.'
    ],
    kidActivity: 'Paper Snowflake: Fold a square paper into triangles, snip little shapes along the folds, and unfold to reveal your own unique snowflake!',
    whyItMatters: 'Snow acts as a warm thermal blanket for soil and seeds, and slowly melts in spring to nourish baby plants.',
    emoji: '❄️'
  },
  {
    id: 'rain',
    name: 'Life-Giving Rain',
    shortName: 'Rain',
    category: 'Atmospheric Water Cycle',
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80',
    ambientSound: 'rain',
    soundLabel: 'Gentle Rain on Leaves',
    description: 'Rain is the magical cycle that keeps planet Earth alive! Warm sunshine turns puddle water into invisible vapor, which forms clouds and falls again as rain.',
    funFacts: [
      'That sweet, fresh earthy smell right after it rains has a real scientific name: "Petrichor"!',
      'Raindrops are not shaped like teardrops when falling — they actually look like tiny hamburger buns as air pushes against them!',
      'A single thunderstorm cloud can hold billions of liters of pure fresh water droplets.'
    ],
    kidActivity: 'Raindrop Race: On a rainy day, watch two raindrops slide down a windowpane and guess which one reaches the sill first!',
    whyItMatters: 'Without rain, trees would not grow, rivers would run dry, and animals would have nothing to drink.',
    emoji: '🌧️'
  }
];
