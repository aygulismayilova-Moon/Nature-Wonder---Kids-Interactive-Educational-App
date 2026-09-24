import { FoodItem } from '../types';

export const FOOD_ITEMS: FoodItem[] = [
  // --- 3.1 Sweet ---
  {
    id: 'honey',
    name: 'Golden Honey',
    sensation: 'sweet',
    emoji: '🍯',
    image: '/images/golden_honey.jpg',
    tasteCategory: 'Natural Sweetness',
    description: 'Golden, thick, and wonderfully sweet syrup lovingly gathered by honeybees from fragrant flower petals.',
    mascotReaction: {
      expression: 'happy',
      spokenQuote: 'Mmm! Pure liquid sunshine! It feels smooth, gooey, and deliciously sweet on my tongue!',
      soundEffect: 'sweet_sparkle'
    },
    funTip: 'When you taste honey, say: "This tastes sweet and comforting!"'
  },
  {
    id: 'chocolate',
    name: 'Milk Chocolate',
    sensation: 'sweet',
    emoji: '🍫',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=900&q=80',
    tasteCategory: 'Sweet Treat',
    description: 'Silky smooth cocoa that gently melts on your warm tongue into a rich, sweet chocolate smile.',
    mascotReaction: {
      expression: 'happy',
      spokenQuote: 'Yum! Rich and velvety! It gives me happy energy and makes my sweet tooth dance!',
      soundEffect: 'sweet_sparkle'
    },
    funTip: 'When you taste chocolate, say: "This is rich and sweet!"'
  },
  {
    id: 'jam',
    name: 'Strawberry Jam',
    sensation: 'sweet',
    emoji: '🍓',
    image: '/images/strawberry_jam.jpg',
    tasteCategory: 'Sweet Fruit Spread',
    description: 'Cooked ripe strawberries mashed with a sprinkle of sugar, ready to spread sweetness on warm morning toast.',
    mascotReaction: {
      expression: 'happy',
      spokenQuote: 'Oh delicious! Fruity, sticky, and super sweet! Can I have another spoonful on my toast?',
      soundEffect: 'sweet_sparkle'
    },
    funTip: 'When you taste jam, say: "This fruit spread tastes delightfully sweet!"'
  },
  {
    id: 'strawberry',
    name: 'Fresh Strawberry',
    sensation: 'sweet',
    emoji: '🍓',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80',
    tasteCategory: 'Sweet Berry',
    description: 'Bright red heart-shaped berry picked right from the sunny garden patch, bursting with juicy sweetness.',
    mascotReaction: {
      expression: 'happy',
      spokenQuote: 'Juicy and refreshing! It is nature’s sweet little candy with tiny yellow seed speckles!',
      soundEffect: 'sweet_sparkle'
    },
    funTip: 'When you eat a strawberry, say: "It tastes juicy, fresh, and naturally sweet!"'
  },
  {
    id: 'watermelon',
    name: 'Crisp Watermelon',
    sensation: 'sweet',
    emoji: '🍉',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80',
    tasteCategory: 'Sweet Hydrating Fruit',
    description: 'A giant green striped melon filled with ruby-red, watery sweetness that drips down your chin in summer.',
    mascotReaction: {
      expression: 'happy',
      spokenQuote: 'Slurp! So crisp and sweet! It is like drinking sweet watermelon juice with a big crunch!',
      soundEffect: 'sweet_sparkle'
    },
    funTip: 'When you bite watermelon, say: "It is cool, crunchy, and delightfully sweet!"'
  },

  // --- 3.2 Spicy / Hot (Taste & Pungency) ---
  {
    id: 'pepper',
    name: 'Red Chili Pepper',
    sensation: 'spicy',
    emoji: '🌶️',
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=900&q=80',
    tasteCategory: 'Fiery Capsaicin',
    description: 'Bright crimson pepper packed with capsaicin, a natural compound that makes your tongue feel hot and tingly!',
    mascotReaction: {
      expression: 'spicy_fire',
      spokenQuote: 'Whoosh! Holy smoke! My tongue is tingling like fireworks! Pass a glass of cold milk please!',
      soundEffect: 'spicy_sizzle'
    },
    funTip: 'When food has pepper, say: "This is spicy! My tongue feels tingly and warm!"'
  },
  {
    id: 'black-pepper',
    name: 'Cracked Black Pepper',
    sensation: 'spicy',
    emoji: '🧂',
    image: '/images/black_pepper.jpg',
    tasteCategory: 'Pungent Spice',
    description: 'Tiny black peppercorn flakes ground from dried berries. Adds a zesty zing that tickles your nose and tongue.',
    mascotReaction: {
      expression: 'spicy_fire',
      spokenQuote: 'Achoo! Zing! That has a sharp kick! It makes my nose tickle and my mouth feel awake!',
      soundEffect: 'spicy_sizzle'
    },
    funTip: 'When soup has pepper, say: "This seasoning is peppery and has a kick!"'
  },
  {
    id: 'wasabi',
    name: 'Green Wasabi',
    sensation: 'spicy',
    emoji: '🌿',
    image: '/images/green_wasabi.jpg',
    tasteCategory: 'Nose-Tingling Pungency',
    description: 'Freshly harvested vibrant green wasabi roots (rhizomes) from cold mountain streams that produce a fast, exciting, nose-tingling burst of heat.',
    mascotReaction: {
      expression: 'spicy_fire',
      spokenQuote: 'Whoaaa! It zoomed straight up to my nose! Then poof, the heat is gone! What an adventure!',
      soundEffect: 'spicy_sizzle'
    },
    funTip: 'When you taste wasabi, say: "That is pungent! It shoots a spicy tickle through my nose!"'
  },

  // --- 3.3 Sour ---
  {
    id: 'lemon',
    name: 'Zesty Yellow Lemon',
    sensation: 'sour',
    emoji: '🍋',
    image: '/images/yellow_lemon.jpg',
    tasteCategory: 'Citric Sour',
    description: 'Bright yellow citrus fruit packed with citric acid that makes your saliva rush and your cheeks squeeze together.',
    mascotReaction: {
      expression: 'sour_pucker',
      spokenQuote: 'Ooooh-eeeee! *Pucker pucker!* My lips are wiggling and my cheeks are squeezing together! Super tangy!',
      soundEffect: 'sour_boing'
    },
    funTip: 'When tasting lemon, say: "This is super sour and tart! My mouth is puckering up!"'
  },
  {
    id: 'cherry-plum',
    name: 'Green Sour Cherry Plum (Myrobalan)',
    sensation: 'sour',
    emoji: '🟢',
    iconUrl: '/images/green_sour_cherry_plum_icon.svg',
    image: '/images/sour_cherry_plum.jpg',
    tasteCategory: 'Tart Green Wild Plum',
    description: 'Crisp, firm bright green wild plum (Can Erik) with shiny smooth skin and juicy, crunchy flesh that delivers an exhilarating, mouth-watering sour zing.',
    mascotReaction: {
      expression: 'sour_pucker',
      spokenQuote: 'Crunch! Zing! That crisp green cherry plum woke up every tastebud on the sides of my tongue! Super tart and crunchy!',
      soundEffect: 'sour_boing'
    },
    funTip: 'When eating green sour plums, say: "This green plum is crisp, tangy, and wonderfully sour!"'
  },
  {
    id: 'lime',
    name: 'Bright Green Lime',
    sensation: 'sour',
    emoji: '🍈',
    image: '/images/green_lime.jpg',
    tasteCategory: 'Zingy Citrus',
    description: 'Small emerald citrus fruit with an aromatic peel and electric sour juice that sparkles in drinks.',
    mascotReaction: {
      expression: 'sour_pucker',
      spokenQuote: 'Wink! One eye squints shut! It’s like a little electric shock of citrus wonder!',
      soundEffect: 'sour_boing'
    },
    funTip: 'When you squeeze lime, say: "This lime juice is zesty, sharp, and sour!"'
  },

  // --- 3.4 Hot (Temperature) ---
  {
    id: 'soup',
    name: 'Steaming Vegetable Soup',
    sensation: 'hot',
    emoji: '🍲',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
    tasteCategory: 'Warm Broth',
    description: 'Hearty broth with tender carrots, potatoes, and peas bubbling gently on the stove with clouds of rising steam.',
    mascotReaction: {
      expression: 'hot_steam',
      spokenQuote: 'Oof, watch out for the steam! Blow gently on the spoon first: *Fffff, fffff!* Now it warms my belly nicely!',
      soundEffect: 'hot_blow'
    },
    funTip: 'When soup is served, say: "Careful, it is hot! I will wait and blow on it before tasting!"'
  },
  {
    id: 'tea',
    name: 'Freshly Brewed Tea',
    sensation: 'hot',
    emoji: '🍵',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80',
    tasteCategory: 'Warm Infusion',
    description: 'Warm chamomile or peppermint tea poured freshly from the whistling teapot into a ceramic mug.',
    mascotReaction: {
      expression: 'hot_steam',
      spokenQuote: 'Ahhh! The mug is warm to hold with both hands. Take tiny careful sips while it is hot!',
      soundEffect: 'hot_blow'
    },
    funTip: 'When given tea, say: "The tea is steaming hot, I need to let it cool down slightly."'
  },
  {
    id: 'hot-cocoa',
    name: 'Hot Chocolate Cocoa',
    sensation: 'hot',
    emoji: '☕',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=900&q=80',
    tasteCategory: 'Warm Sweet Drink',
    description: 'Creamy warm chocolate milk topped with melting mini marshmallows, perfect after playing in chilly winter snow.',
    mascotReaction: {
      expression: 'hot_steam',
      spokenQuote: 'Warm and comforting! The mug warms my chilly fingers, but don’t gulp too fast or your tongue gets hot!',
      soundEffect: 'hot_blow'
    },
    funTip: 'When drinking cocoa, say: "It feels hot and cozy in my hands and warms me up!"'
  },

  // --- 3.5 Cold (Temperature) ---
  {
    id: 'ice-cream',
    name: 'Frosty Ice Cream Scoop',
    sensation: 'cold',
    emoji: '🍨',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=80',
    tasteCategory: 'Frozen Cream',
    description: 'Chilled creamy vanilla and strawberry swirls scooped frozen from the icebox onto a cone or bowl.',
    mascotReaction: {
      expression: 'cold_shiver',
      spokenQuote: 'Brrrrr! Chilly chill! It feels super icy on my lips! If I eat too fast I get a silly little brain freeze!',
      soundEffect: 'cold_teeth'
    },
    funTip: 'When eating ice cream, say: "This is frosty and cold! It cools my mouth down instantly!"'
  },
  {
    id: 'ice',
    name: 'Crystal Clear Ice Cube',
    sensation: 'cold',
    emoji: '🧊',
    image: '/images/clear_ice_cube.jpg',
    tasteCategory: 'Freezing Solid',
    description: 'Pure frozen water at zero degrees Celsius. Slippery, numbingly chilly, and clinking inside a cold glass.',
    mascotReaction: {
      expression: 'cold_shiver',
      spokenQuote: 'Whoa, freezing! My fingertips are shivering just touching it! It’s melting into cold drops of water!',
      soundEffect: 'cold_teeth'
    },
    funTip: 'When holding ice, say: "This ice is freezing cold and slippery!"'
  },
  {
    id: 'popsicle',
    name: 'Fruit Juice Popsicle',
    sensation: 'cold',
    emoji: '🍧',
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=900&q=80',
    tasteCategory: 'Frozen Ice Pop',
    description: 'Juicy fruit puree frozen solid around a wooden stick, dripping sweet icy droplets on a sunny day.',
    mascotReaction: {
      expression: 'cold_shiver',
      spokenQuote: 'Ch-ch-chatter! Frosty on my teeth and super icy cold! Gives my tongue blue frost superpowers!',
      soundEffect: 'cold_teeth'
    },
    funTip: 'When eating a popsicle, say: "It is ice-cold and numbs my tongue pleasantly!"'
  }
];
