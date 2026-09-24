import { PlaneShape, SolidShape } from '../types';

export const PLANE_SHAPES: PlaneShape[] = [
  {
    id: 'triangle',
    name: 'Triangle',
    category: 'plane',
    subcategory: 'triangle',
    sides: 3,
    vertices: 3,
    description: 'A 2D flat shape with 3 straight sides and 3 sharp corners (vertices). The word "tri" means three!',
    funFact: 'Triangles are the strongest shape in architecture — engineers use them to build massive bridges and tall towers!',
    color: 'bg-emerald-500',
    borderColor: 'border-emerald-600',
    realWorldExamples: [
      { label: 'Slice of Pizza', emoji: '🍕', hint: 'A yummy triangular slice from a round pizza pie!' },
      { label: 'Party Hat', emoji: '🎉', hint: 'Worn on your head at birthday celebrations!' },
      { label: 'Tortilla Chip', emoji: '🌮', hint: 'Crispy crunchy snack dipped in salsa!' },
      { label: 'House Roof', emoji: '🏠', hint: 'Slanted sides help rain and snow slide down easily!' }
    ]
  },
  {
    id: 'square',
    name: 'Square (Quadrilateral)',
    category: 'plane',
    subcategory: 'quadrilateral',
    sides: 4,
    vertices: 4,
    description: 'A special quadrilateral with 4 straight sides that are all exactly equal in length, and 4 right-angle corners.',
    funFact: 'Every square is also a rectangle and a rhombus, but not every rectangle is a square!',
    color: 'bg-amber-500',
    borderColor: 'border-amber-600',
    realWorldExamples: [
      { label: 'Chess Board Tile', emoji: '♟️', hint: 'Black and white square squares for knight and queen!' },
      { label: 'Sticky Note Pad', emoji: '📝', hint: 'Square paper for writing cheerful reminder notes!' },
      { label: 'Square Window', emoji: '🪟', hint: 'Lets warm sunshine into your bedroom!' },
      { label: 'Alphabet Block', emoji: '🧱', hint: 'Toy wood block with letters A-B-C!' }
    ]
  },
  {
    id: 'rectangle',
    name: 'Rectangle (Quadrilateral)',
    category: 'plane',
    subcategory: 'quadrilateral',
    sides: 4,
    vertices: 4,
    description: 'A quadrilateral with 4 straight sides and 4 right corners. Opposite sides are parallel and equal in length.',
    funFact: 'Your classroom doors, computer screens, books, and dollar bills are almost always rectangles!',
    color: 'bg-blue-500',
    borderColor: 'border-blue-600',
    realWorldExamples: [
      { label: 'Front Door', emoji: '🚪', hint: 'A tall rectangle that swings open to welcome friends!' },
      { label: 'Chocolate Bar', emoji: '🍫', hint: 'Sweet rectangular treat broken into smaller squares!' },
      { label: 'Favorite Book', emoji: '📖', hint: 'Pages filled with bedtime stories and adventures!' },
      { label: 'Smartphone / Tablet', emoji: '📱', hint: 'A pocket-sized rectangular screen for games and learning!' }
    ]
  },
  {
    id: 'rhombus',
    name: 'Rhombus / Diamond (Quadrilateral)',
    category: 'plane',
    subcategory: 'quadrilateral',
    sides: 4,
    vertices: 4,
    description: 'A quadrilateral with 4 equal sides, tilted so its opposite angles are equal. Often called a sparkling diamond!',
    funFact: 'When you fly a diamond kite high on a breezy day, you are flying a true aerodynamic rhombus!',
    color: 'bg-purple-500',
    borderColor: 'border-purple-600',
    realWorldExamples: [
      { label: 'Flying Kite', emoji: '🪁', hint: 'Soaring high above the park on a windy afternoon!' },
      { label: 'Playing Card Diamond', emoji: '♦️', hint: 'The red diamond suit on classic card games!' },
      { label: 'Road Warning Sign', emoji: '⚠️', hint: 'Yellow diamond sign warning drivers to slow down!' },
      { label: 'Argyle Sweater Pattern', emoji: '🧶', hint: 'Cozy knitted diamond crisscross patterns!' }
    ]
  },
  {
    id: 'trapezoid',
    name: 'Trapezoid (Quadrilateral)',
    category: 'plane',
    subcategory: 'quadrilateral',
    sides: 4,
    vertices: 4,
    description: 'A 4-sided quadrilateral with only one pair of parallel sides (a shorter top side and a wider bottom base).',
    funFact: 'Many flower pots, popcorn buckets, and bridge trusses have a sturdy trapezoid shape so they do not tip over!',
    color: 'bg-rose-500',
    borderColor: 'border-rose-600',
    realWorldExamples: [
      { label: 'Garden Flower Pot', emoji: '🪴', hint: 'Wider at the top so plant leaves have plenty of space!' },
      { label: 'Popcorn Bucket', emoji: '🍿', hint: 'Crisp buttery movie snack container!' },
      { label: 'Bridge Truss', emoji: '🌉', hint: 'Sturdy steel beams holding up heavy cars and trains!' },
      { label: 'Handbag Purse', emoji: '👜', hint: 'Cute accessory with a wide sturdy base!' }
    ]
  },
  {
    id: 'circle',
    name: 'Circle',
    category: 'plane',
    subcategory: 'curved',
    sides: 0,
    vertices: 0,
    description: 'A perfectly round 2D shape with no straight sides and no sharp corners! Every point on the edge is the exact same distance from the center.',
    funFact: 'The wheel is considered one of humankind’s greatest inventions — and it is a pure circle!',
    color: 'bg-teal-500',
    borderColor: 'border-teal-600',
    realWorldExamples: [
      { label: 'Bicycle Wheel', emoji: '🚲', hint: 'Spins smoothly so you can zoom down the sidewalk!' },
      { label: 'Wall Clock', emoji: '⏰', hint: 'Ticking hands tell you when it’s playtime and lunchtime!' },
      { label: 'Fresh Baked Cookie', emoji: '🍪', hint: 'Delicious round treat with chocolate chips!' },
      { label: 'Shiny Coin', emoji: '🪙', hint: 'Round metallic money jingling in your piggy bank!' }
    ]
  },
  {
    id: 'pentagon',
    name: 'Pentagon',
    category: 'plane',
    subcategory: 'polygon',
    sides: 5,
    vertices: 5,
    description: 'A flat polygon with 5 straight sides and 5 vertices. The prefix "penta" means five!',
    funFact: 'The black patches on a classic soccer ball are pentagons surrounded by white hexagons!',
    color: 'bg-indigo-500',
    borderColor: 'border-indigo-600',
    realWorldExamples: [
      { label: 'Soccer Ball Patch', emoji: '⚽', hint: 'Black leather pentagons stitched to make a ball!' },
      { label: 'School Crossing Sign', emoji: '🚸', hint: 'Five-sided sign showing kids walking safely!' },
      { label: 'Birdhouse Front', emoji: '🐦', hint: 'Wooden birdhouse with peak roof and four walls!' }
    ]
  },
  {
    id: 'hexagon',
    name: 'Hexagon',
    category: 'plane',
    subcategory: 'polygon',
    sides: 6,
    vertices: 6,
    description: 'A flat polygon with 6 straight sides and 6 vertices. "Hexa" comes from Greek for six!',
    funFact: 'Honeybees build their hives out of hexagons because hexagons fit together with zero wasted wax!',
    color: 'bg-orange-500',
    borderColor: 'border-orange-600',
    realWorldExamples: [
      { label: 'Bee Honeycomb', emoji: '🍯', hint: 'Sweet golden chambers filled with sticky honey!' },
      { label: 'Hardware Nut', emoji: '🔩', hint: 'Metal hexagon that wrenches can grip securely!' },
      { label: 'Hexagonal Tile', emoji: '🧱', hint: 'Pretty mosaic patterns in kitchen and bathroom floors!' }
    ]
  }
];

export const SOLID_SHAPES: SolidShape[] = [
  {
    id: 'cube',
    name: 'Cube',
    category: 'solid',
    faces: 6,
    edges: 12,
    vertices: 8,
    description: 'A 3D solid shape where all 6 faces are identical squares! It has 12 straight edges and 8 sharp corner vertices.',
    funFact: 'Wombats in Australia are the only animals in the world that produce cube-shaped droppings so they don’t roll away!',
    color: 'from-amber-400 to-amber-600',
    realWorldExamples: [
      { label: 'Playing Dice', emoji: '🎲', hint: 'Numbered dots 1 through 6 for board game fun!' },
      { label: 'Ice Cube', emoji: '🧊', hint: 'Frosty cube floating in your cold lemonade!' },
      { label: 'Rubik’s Cube', emoji: '🧩', hint: 'Colorful twisty puzzle with 54 little squares!' },
      { label: 'Gift Box', emoji: '🎁', hint: 'Wrapped with a shiny ribbon for your birthday!' }
    ]
  },
  {
    id: 'cone',
    name: 'Cone',
    category: 'solid',
    faces: 2, // 1 flat circular face + 1 curved face
    edges: 1, // 1 circular edge
    vertices: 1, // 1 apex
    description: 'A 3D solid shape with a flat circular base that smoothly tapers up to a single pointed tip called the apex.',
    funFact: 'Pine trees grow wooden pinecones that have the exact same shape to protect their seeds from freezing winter frost!',
    color: 'from-rose-400 to-rose-600',
    realWorldExamples: [
      { label: 'Ice Cream Waffle Cone', emoji: '🍦', hint: 'Crispy crunchy cone holding delicious scoops!' },
      { label: 'Traffic Safety Cone', emoji: '🦺', hint: 'Bright orange cone keeping road workers safe!' },
      { label: 'Party Birthday Hat', emoji: '🥳', hint: 'Pointy hat with an elastic strap for celebrations!' },
      { label: 'Volcano Peak', emoji: '🌋', hint: 'Conical mountain with a crater at the very tip!' }
    ]
  },
  {
    id: 'cylinder',
    name: 'Cylinder',
    category: 'solid',
    faces: 3, // 2 flat circular faces + 1 curved surface
    edges: 2,
    vertices: 0,
    description: 'A 3D solid shape with two identical flat circular faces at top and bottom, connected by a smooth curved tube.',
    funFact: 'Cylinders are everywhere in kitchens because their round shape holds maximum liquid and stacks easily!',
    color: 'from-cyan-400 to-blue-600',
    realWorldExamples: [
      { label: 'Soup Can', emoji: '🥫', hint: 'Metal container storing delicious tomato or noodle soup!' },
      { label: 'Battery Cell', emoji: '🔋', hint: 'Powers your flashlight and remote control cars!' },
      { label: 'Drinking Glass', emoji: '🥛', hint: 'Smooth glass filled with cool fresh water or milk!' },
      { label: 'Tree Trunk Log', emoji: '🪵', hint: 'Round wooden log for campfire warmth!' }
    ]
  },
  {
    id: 'sphere',
    name: 'Sphere',
    category: 'solid',
    faces: 0, // completely curved surface
    edges: 0,
    vertices: 0,
    description: 'A completely round 3D solid shape where every single point on the outside is the exact same distance from the middle center.',
    funFact: 'In zero-gravity space, water naturally floats in the air as perfect little shimmering spheres!',
    color: 'from-emerald-400 to-teal-600',
    realWorldExamples: [
      { label: 'Soccer Ball / Basketball', emoji: '⚽', hint: 'Bounces and rolls smoothly across playgrounds!' },
      { label: 'Planet Earth Globe', emoji: '🌍', hint: 'Our round home floating peacefully in space!' },
      { label: 'Juicy Orange Fruit', emoji: '🍊', hint: 'Sweet vitamin C fruit you peel and enjoy!' },
      { label: 'Glass Marble', emoji: '🔮', hint: 'Swirled shiny glass toy for aiming and rolling!' }
    ]
  },
  {
    id: 'pyramid',
    name: 'Square Pyramid',
    category: 'solid',
    faces: 5, // 1 square base + 4 triangular faces
    edges: 8,
    vertices: 5, // 4 base corners + 1 apex
    description: 'A 3D solid shape with a flat square base and four triangular sides that meet together at one top point (apex).',
    funFact: 'The Great Pyramid of Giza in Egypt was the tallest man-made structure on Earth for over 3,800 years!',
    color: 'from-purple-400 to-indigo-600',
    realWorldExamples: [
      { label: 'Egyptian Pyramid', emoji: '🏛️', hint: 'Ancient wonder built thousands of years ago in the desert!' },
      { label: 'Camping Tent', emoji: '⛺', hint: 'Cozy outdoor shelter for sleeping under starry skies!' },
      { label: 'Music Metronome', emoji: '🎵', hint: 'Ticks back and forth to keep rhythm for piano players!' }
    ]
  },
  {
    id: 'rectangular-prism',
    name: 'Rectangular Prism',
    category: 'solid',
    faces: 6,
    edges: 12,
    vertices: 8,
    description: 'A 3D solid shape shaped like a box, where all 6 faces are rectangles. Opposite faces are identical.',
    funFact: 'Almost all shipping boxes and delivery packages are rectangular prisms because they pack neatly together in trucks!',
    color: 'from-amber-400 to-orange-600',
    realWorldExamples: [
      { label: 'Cereal Box', emoji: '🥣', hint: 'Bright cardboard box filled with crispy breakfast flakes!' },
      { label: 'Red Brick', emoji: '🧱', hint: 'Heavy clay blocks used to build sturdy houses and schools!' },
      { label: 'Storybook', emoji: '📚', hint: 'Thick adventure book resting on your bedside table!' }
    ]
  }
];
