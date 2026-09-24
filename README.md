<div align="center">
<img width="1200" height="475" alt="Nature & Wonder Kids Explorer Banner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />

# 🌍 Nature & Wonder — Kids Explorer
**An interactive, multilingual educational world for children to discover animals, nature elements, cosmic wonders, geometry, and taste sensations.**

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38b2ac?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-API-8e75ff?style=flat-square&logo=google)](https://ai.google.dev)
[![Express](https://img.shields.io/badge/Express-4.21-000000?style=flat-square&logo=express)](https://expressjs.com)

[View in Google AI Studio](https://ai.studio/apps/cec44758-5818-4c7d-a942-3adfc9d3d39f)
</div>

---

## 📖 Overview

**Nature & Wonder** is an engaging discovery platform designed for young minds, parents, and educators. It combines rich scientific facts with tactile interactive visuals, high-fidelity bioacoustic synthesizers, server-side AI narration, and a personal recording studio where children and caregivers can record their own real voices for animals and concepts.

---

## ✨ Key Features & Explorers

### 🦁 Animals Explorer
- **1,000+ Species Catalog**: Explore mammals, birds, reptiles, amphibians, sea creatures, and insects with high-resolution imagery and multi-angle perspectives.
- **Biologically Modeled Audio Synthesizer**: Custom Web Audio API algorithms accurately model animal acoustics:
  - **Bengal Tiger**: Low-frequency rumble, raspy snarl, and resonant chest roar.
  - **Giant Panda**: Melodic high-pitched bleats, squeaks, and low contentment grunts.
  - **Bottlenose Dolphin**: 12-pulse echolocation sonar click train and ultrasonic frequency whistle sweeps.
  - **Humpback Whale**: Blowhole blow, sub-bass pulse, and ethereal harmonic ocean songs.
  - **Emperor Penguin**: Two-voice syringeal acoustic beating (~35–45 Hz) and ecstatic colony trumpet displays.
  - **Polar & Grizzly Bear**: Explosive nasal air huffs, diaphragmatic chest thumps, and 20 Hz epiglottal throat rattles.
  - **Giraffe**: Authentic nocturnal harmonic hum (~92–108 Hz) resonating through a 2-meter trachea pipe and savannah air snorts.
  - **Domestic Cat**: Multi-vowel "Mee-oooww" formant articulation, friendly greeting trill, and 26 Hz dual-stroke respiratory purr.
  - Plus elephants, lions, wolves, eagles, frogs, horses, owls, bees, and dozens more.
- **YouTube Shorts & Sound Clips**: Direct access to curated educational wildlife clips.
- **Habitat & Diet Categorization**: Filter by savannah, rainforest, polar arctic, ocean, woodland, and dietary classifications.

### 🌿 Nature Elements
- Interactive exploration of fundamental forces and natural phenomena: Water, Fire, Earth, Air, Rainbows, Lightning, Volcanoes, and Oceans.
- Visual simulations paired with soothing, authentic ambient nature audio.

### 🪐 Universe Explorer
- Celestial discovery dashboard spanning the Solar System, planets, moons, nebulas, and black holes.
- Atmospheric cosmic audio synthesis and planetary comparison cards.

### 🔷 Shapes & Geometry Explorer
- **Plane (2D) Shapes**: Circles, Triangles, Squares, Rectangles, Pentagons, Hexagons, and more with interactive edge/vertex counters and coloring canvas.
- **Solid (3D) Shapes**: Spheres, Cubes, Cylinders, Cones, and Pyramids with perspective rotations, faces, edges, and real-world object comparisons.
- **Interactive Sorting & Matching Games**: Reinforce spatial cognition through tactile challenges.

### 🍓 Sensations & Taste Explorer
- Educational tasting lab breaking down the 5 primary taste sensations: Sweet, Salty, Sour, Bitter, and Umami.
- Science breakdowns of taste buds, tongue biology, and interactive food pairing explorers.

### 🧩 Kids Picture Puzzle Game
- **Interactive Picture Jigsaw & Sliding Tiles**: Assemble vibrant pictures of animals, natural wonders, and cosmic marvels piece-by-piece.
- **Dual Play Modes**:
  - **Piece Swap Mode**: Tap two tiles to swap their positions with satisfying tactile click and snap sounds.
  - **Sliding Tiles Mode**: Classic 8-puzzle / 15-puzzle sliding mechanics with algorithmic solvability guarantees.
- **Multiple Difficulty Levels**: Choose between 2×2 (4 pieces for young kids), 3×3 (9 pieces), or 4×4 (16 pieces for master explorers).
- **Assistance Tools**: Toggle ghost reference image overlay ("Hint") or tile numbers for cognitive guidance.
- **Rich Victory Celebrations**: Confetti animations, star ratings, voice congratulations, move and time counters, and direct audio replay.
- **Deep Integration**: Jump directly into a puzzle for any animal from the Animal Explorer cards or modal.

### 🔤 Numbers & Alphabet Explorer
- **Interactive Alphabet (A-Z / А-Я)**:
  - Complete localized alphabets in Azerbaijani (32 letters including Ə, Ğ, Ş, Ç, Ö, Ü, I, İ), Turkish (29 letters), Russian (33 letters), and English (26 letters).
  - Letter pronunciation audio with phonetics and sample words with high-definition illustrations.
  - Interactive **Letter Tracing Canvas** where kids can trace and write letters with cheerful multi-colored digital crayons and eraser tools.
- **Numbers & Counting Playground (1 to 100)**:
  - Visual counting board where children tap animated objects (stars, strawberries, balloons, diamonds, coins) to count them with cheerful chime bells and spoken numbers.
  - Neighbor numbers exploration with quick `+1` and `-1` math buttons.
  - Kid-friendly math facts for each number.
- **Interactive Letter & Number Quiz Game**:
  - Educational quizzes challenging kids to identify starting letters and count clusters of items.
  - Star score tracker, audio praise, instant feedback, and victory animations.

---

## 🎙️ Voiceover Studio & Audio Recording

Children, parents, and teachers can personalize their learning experience by recording their own voices directly into the app:
- **Direct Microphone Recording**: Built with the HTML5 `MediaRecorder` API with live waveform animation, timer, and preview playback.
- **Quick-Record Per Item**: Click the microphone icon on any animal card or modal to immediately record that item's voiceover.
- **Audio File Upload**: Upload existing sound files (`.mp3`, `.wav`, `.webm`, `.ogg`, `.m4a`).
- **Offline Persistence via IndexedDB**: Recordings are stored locally inside the browser (`NatureWonderKids_Voiceovers_v1`), persisting across reloads without requiring server storage.
- **Export & Import Voice Packs**: Export customized voice recordings as JSON backups to share across tablets, classrooms, or devices.
- **Priority Playback**: Seamlessly switches between the custom recorded voice, Gemini AI TTS, and browser speech synthesis.

---

## 🔊 Sound Architecture & AI Speech

The application utilizes a multi-tiered audio pipeline:
1. **Custom Web Audio Synthesizer** (`src/utils/animalSynthesizer.ts`):
   - Zero external audio files required for synthesized voices; procedural oscillators, biquad filters, and noise generators run in real-time.
2. **Server-Side Google Gemini AI Text-to-Speech** (`server.ts`):
   - Express route `/api/tts` uses the `@google/genai` SDK (`gemini-3.1-flash-tts-preview`).
   - Generates PCM audio, converted to WAV on-the-fly, with in-memory caching and automatic rate-limit safeguards.
3. **Browser Speech Synthesis Fallback**:
   - Native Web Speech API gracefully handles audio narration when offline or when AI limits are reached.

---

## 🌐 Multilingual Support (i18n)

Full localization support with native translations across the entire application:
- 🇦🇿 **Azerbaijani (Azərbaycan dili)** — Default
- 🇹🇷 **Turkish (Türkçe)**
- 🇷🇺 **Russian (Русский)**
- 🇬🇧 **English (English)**

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Tooling** | [Vite 6](https://vite.dev/) & [TSX](https://github.com/privatenumber/tsx) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite` |
| **Animations** | [Motion](https://motion.dev/) (`motion/react`) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Backend / API** | [Express 4](https://expressjs.com/) with ESBuild CJS bundling |
| **AI Integration** | [Google GenAI SDK](https://github.com/google-gemini/deprecations) (`@google/genai`) |
| **Audio Engine** | Web Audio API (Synthesizers) + MediaRecorder API (Studio) |
| **Client Storage** | IndexedDB (`custom_voiceovers`) & `localStorage` |
| **Database & Auth** | [Firebase](https://firebase.google.com/) Firestore & Auth integration |
| **Celebrations** | `canvas-confetti` |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 18.0.0 or higher recommended)
- **npm** (included with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nature-wonder-kids-explorer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env` (or `.env.local`):
   ```bash
   cp .env.example .env
   ```
   Provide your Gemini API key:
   ```env
   GEMINI_API_KEY="your-gemini-api-key-here"
   ```
   *(Note: The application operates completely even without a Gemini API key by automatically falling back to the Web Audio synthesizer and browser Speech Synthesis).*

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

---

## 📦 Build & Deployment

To compile the application for production:

```bash
npm run build
```

This command:
1. Builds the static React client files into `dist/`.
2. Bundles the Express server into `dist/server.cjs` via `esbuild`.

To start the production server:
```bash
npm start
```

---

## 🛡️ Frame Permissions & Hardware Access

The app declares the following browser permission in `metadata.json`:
- **`microphone`**: Required for recording real animal voiceovers and student narration in the Voiceover Studio.

---

## 📜 License

Distributed under the MIT License. Created with care for curious young explorers everywhere! 🌿✨
