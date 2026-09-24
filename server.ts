import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Modality } from '@google/genai';

const app = express();
const PORT = 3000;

// Helper to convert 16-bit PCM (24000Hz, 1 channel) into standard WAV buffer
function pcmToWav(pcmBuffer: Buffer, sampleRate = 24000, numChannels = 1): Buffer {
  const byteRate = sampleRate * numChannels * 2;
  const blockAlign = numChannels * 2;
  const dataLength = pcmBuffer.length;
  const buffer = Buffer.alloc(44 + dataLength);

  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataLength, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20); // Linear PCM
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(16, 34); // 16-bit
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataLength, 40);

  pcmBuffer.copy(buffer, 44);
  return buffer;
}

// In-memory cache for generated TTS audio
const ttsCache = new Map<string, { buffer: Buffer; contentType: string }>();

// Rate-limiting safeguards for Gemini API (Free tier: max 3 req/min)
let geminiCooldownUntil = 0;
let recentGeminiCalls: number[] = [];
const MAX_GEMINI_CALLS_PER_MINUTE = 2;

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getAI(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

app.use(express.json());

// API health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', hasGeminiKey: !!process.env.GEMINI_API_KEY });
});

// High-fidelity AI Text-to-Speech API
app.get('/api/tts', async (req, res) => {
  const text = typeof req.query.text === 'string' ? req.query.text.trim() : '';
  const lang = typeof req.query.lang === 'string' ? req.query.lang.trim().toLowerCase() : 'az';
  const voice = typeof req.query.voice === 'string' ? req.query.voice.trim() : 'Kore';

  if (!text) {
    res.status(400).json({ error: 'Text parameter is required' });
    return;
  }

  // Limit text length for responsive speech
  const safeText = text.slice(0, 300);
  const cacheKey = `${lang}:${voice}:${safeText}`;

  if (ttsCache.has(cacheKey)) {
    const cached = ttsCache.get(cacheKey)!;
    res.setHeader('Content-Type', cached.contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(cached.buffer);
    return;
  }

  const now = Date.now();
  // Filter calls in the last 60 seconds
  recentGeminiCalls = recentGeminiCalls.filter((timestamp) => now - timestamp < 60000);

  // Check rate limit safety before making any call
  const ai = getAI();
  if (ai && now >= geminiCooldownUntil && recentGeminiCalls.length < MAX_GEMINI_CALLS_PER_MINUTE) {
    try {
      recentGeminiCalls.push(now);
      const validVoices = ['Kore', 'Zephyr', 'Puck', 'Fenrir', 'Charon'];
      const chosenVoice = validVoices.includes(voice) ? voice : 'Kore';

      let promptText = safeText;
      if (lang === 'az') {
        promptText = `Read clearly in natural, warm Azerbaijani: ${safeText}`;
      } else if (lang === 'tr') {
        promptText = `Read clearly in natural Turkish: ${safeText}`;
      } else if (lang === 'ru') {
        promptText = `Read clearly in friendly Russian: ${safeText}`;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-tts-preview',
        contents: [{ parts: [{ text: promptText }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: chosenVoice }
            }
          }
        }
      });

      const audioBase64 = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (audioBase64) {
        const rawPcm = Buffer.from(audioBase64, 'base64');
        const wavBuffer = pcmToWav(rawPcm, 24000, 1);

        ttsCache.set(cacheKey, { buffer: wavBuffer, contentType: 'audio/wav' });
        res.setHeader('Content-Type', 'audio/wav');
        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.send(wavBuffer);
        return;
      }
    } catch (err: any) {
      // Cooldown if rate limit or quota exceeded, without logging polluting errors
      if (err?.status === 429 || err?.message?.includes('429') || err?.message?.includes('quota') || err?.message?.includes('RESOURCE_EXHAUSTED')) {
        geminiCooldownUntil = Date.now() + 65000;
      }
    }
  }

  // Gracefully inform client to use browser speech synthesis
  res.status(200).json({ status: 'fallback', message: 'Use browser speech synthesis' });
});

// AI Animal Novel Generation Endpoint
app.post('/api/generate-novel', async (req, res) => {
  const {
    protagonistSpecies = 'Lion',
    protagonistName = 'Leo',
    companionSpecies = 'Meerkat',
    genre = 'magical_adventure',
    setting = 'Sunlit African Savannah',
    language = 'en',
    readingLevel = 'explorer',
    specialWish = '',
    continueFrom = null
  } = req.body || {};

  const ai = getAI();
  if (!ai) {
    res.status(503).json({
      error: 'GEMINI_API_KEY is not configured on server',
      fallbackAvailable: true
    });
    return;
  }

  try {
    let languageInstruction = 'Write the entire response in English.';
    if (language === 'az') {
      languageInstruction = 'BÜTÜN cavabı, başlıqları, fəsilləri və sualları təbii, axıcı, zəngin və ədəbi Azərbaycan dilində yaz. Azərbaycan əlifbasının bütün xüsusi hərflərindən (ə, ı, ö, ü, ç, ş, ğ) düzgün istifadə et.';
    } else if (language === 'tr') {
      languageInstruction = 'TÜM yanıtı, başlıkları, bölümleri ve soruları akıcı, sıcak ve edebi Türkçe ile yaz. Çocuklar için ilgi çekici ve samimi bir dil kullan.';
    } else if (language === 'ru') {
      languageInstruction = 'Напиши ВЕСЬ ответ, названия, главы и вопросы на красивом, живом и выразительном русском языке в стиле доброй детской сказки-повести.';
    }

    let lengthInstruction = '3 engaging chapters. Each chapter should have 3 to 4 vivid paragraphs.';
    if (readingLevel === 'early') {
      lengthInstruction = '3 short, whimsical chapters. Simple rhythmic sentences, playful sounds, and clear emotional arc for young readers (ages 4-6).';
    } else if (readingLevel === 'master') {
      lengthInstruction = '4 detailed, rich chapters with nuanced world-building, clever dialogue, and vivid sensory descriptions for ages 8-12.';
    }

    const systemPrompt = `You are a world-renowned children's author and animal zoologist who crafts inspiring, heartwarming, educational animal novels for kids.
${languageInstruction}

Always output strictly valid JSON matching this exact structure:
{
  "title": "A catchy, imaginative novel title with an animal emoji",
  "subtitle": "An evocative one-sentence subtitle",
  "moral": "A heartwarming, positive life lesson taught naturally by the animals' adventure",
  "protagonist": {
    "name": "${protagonistName || 'Hero'}",
    "species": "${protagonistSpecies}",
    "emoji": "emoji of this animal",
    "trait": "2-3 personality traits (e.g. Brave, loyal, curious)",
    "superSkill": "A unique real-life animal ability used heroically in the story"
  },
  "companion": {
    "name": "Companion name",
    "species": "${companionSpecies || 'Friend'}",
    "emoji": "emoji",
    "trait": "Helpful trait"
  },
  "setting": "${setting}",
  "genre": "${genre}",
  "chapters": [
    {
      "chapterNumber": 1,
      "title": "Creative chapter title",
      "content": "Story paragraphs for chapter 1...",
      "animalFact": "An authentic, fascinating real science fact about this animal or its environment",
      "discussionQuestion": "A fun thought question for parents/teachers and kids to talk about"
    }
  ],
  "nextAdventureOptions": [
    "Exciting option 1 for what our animal heroes could explore next",
    "Exciting option 2 for what our animal heroes could explore next",
    "Exciting option 3 for what our animal heroes could explore next"
  ]
}`;

    let userPrompt = `Write an educational, heartwarming children's animal novel.
Protagonist Animal: ${protagonistSpecies} named ${protagonistName || 'our hero'}
Companion/Friend Animal: ${companionSpecies || 'a helpful forest friend'}
Adventure Genre / Theme: ${genre}
Setting / Habitat: ${setting}
Target Reading Level: ${readingLevel} (${lengthInstruction})
Special Wish / Idea from the Child: ${specialWish ? `"${specialWish}"` : 'A wonderful discovery that brings the animal community together'}
Language: ${language}
${continueFrom ? `NOTE: This is a continuation of the previous story "${continueFrom.title}". Continue seamlessly from the chosen adventure choice: "${continueFrom.choice}".` : ''}

Remember to weave real zoological animal behaviors and ecology into the plot so kids learn authentic animal facts while enjoying a page-turning adventure!`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
        temperature: 0.85
      }
    });

    const responseText = response.text || '';
    let parsedNovel;
    try {
      parsedNovel = JSON.parse(responseText);
    } catch {
      // Clean markdown code blocks if present
      const cleaned = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      parsedNovel = JSON.parse(cleaned);
    }

    res.json({
      success: true,
      novel: parsedNovel
    });
  } catch (err: any) {
    console.error('Error generating novel with Gemini:', err);
    res.status(500).json({
      error: err?.message || 'Failed to generate novel',
      status: err?.status || 500,
      fallbackAvailable: true
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
