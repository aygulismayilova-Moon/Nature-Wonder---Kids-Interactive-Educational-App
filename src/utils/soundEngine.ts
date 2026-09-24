// Web Audio API and Speech Synthesis engine for Kids Explorer
import { voiceoverService } from '../services/voiceoverService';
import { synthesizeAnimalSound } from './animalSynthesizer';

class SoundEngine {
  private ctx: AudioContext | null = null;
  private currentAmbientNodes: { stop: () => void } | null = null;
  private currentAudioElement: HTMLAudioElement | null = null;
  private isMuted: boolean = false;
  private currentLanguage: 'az' | 'tr' | 'ru' | 'en' = 'az';

  public setLanguage(lang: 'az' | 'tr' | 'ru' | 'en'): void {
    this.currentLanguage = lang;
  }

  public getLanguage(): 'az' | 'tr' | 'ru' | 'en' {
    return this.currentLanguage;
  }

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      if (this.currentAmbientNodes) {
        this.stopAmbient();
      }
      if (this.currentAudioElement) {
        this.currentAudioElement.pause();
        this.currentAudioElement = null;
      }
    }
    return this.isMuted;
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (this.isMuted) {
      if (this.currentAmbientNodes) {
        this.stopAmbient();
      }
      if (this.currentAudioElement) {
        this.currentAudioElement.pause();
        this.currentAudioElement = null;
      }
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // --- Play Authentic Audio Recording with Instant Fallback to High-Fidelity Synthesis ---
  public playAudioUrl(url: string, fallbackType?: string, onEnded?: () => void): void {
    if (this.isMuted) return;

    // If it's an external URL (which can fail or lag on mobile/iframe), prioritize instant high-fidelity synthesis
    const isLocal = url && url.startsWith('/');
    if (!isLocal) {
      if (fallbackType) {
        this.playAnimalSound(fallbackType);
      }
      if (onEnded) {
        setTimeout(onEnded, 1500);
      }
      return;
    }

    try {
      if (this.currentAudioElement) {
        this.currentAudioElement.pause();
        this.currentAudioElement = null;
      }

      const audio = new Audio(url);
      audio.volume = 0.95;
      this.currentAudioElement = audio;

      if (onEnded) {
        audio.onended = () => {
          onEnded();
        };
      }

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Real audio recording could not be played, falling back to synthesizer:", err);
          if (fallbackType) {
            this.playAnimalSound(fallbackType);
          }
          if (onEnded) {
            setTimeout(onEnded, 1000);
          }
        });
      }
    } catch (e) {
      console.warn("Failed creating Audio element, falling back:", e);
      if (fallbackType) {
        this.playAnimalSound(fallbackType);
      }
      if (onEnded) {
        onEnded();
      }
    }
  }

  public stopAudio(): void {
    if (this.currentAudioElement) {
      this.currentAudioElement.pause();
      this.currentAudioElement = null;
    }
  }

  // --- Animal Sounds Synthesis ---
  public playAnimalSound(type: string): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      synthesizeAnimalSound(ctx, type);
    } catch (e) {
      console.warn('Animal sound synthesis error:', e);
    }
  }

  // --- Nature Ambient Sounds ---
  public playNatureSound(type: string): void {
    this.stopAmbient();
    if (this.isMuted) return;

    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const duration = 5.0; // Play rich 5-second ambient sound loop

      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      if (type === 'rain' || type === 'waterfall' || type === 'river' || type === 'ocean' || type === 'wind') {
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          // Pink noise filter approximation
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
          b6 = white * 0.115926;
        }

        const source = ctx.createBufferSource();
        source.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        const masterGain = ctx.createGain();

        if (type === 'rain') {
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(1400, now);
          masterGain.gain.setValueAtTime(0.01, now);
          masterGain.gain.linearRampToValueAtTime(0.25, now + 0.5);
          masterGain.gain.linearRampToValueAtTime(0.2, now + 4.0);
          masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        } else if (type === 'ocean') {
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(320, now);
          filter.frequency.linearRampToValueAtTime(750, now + 2.5);
          filter.frequency.linearRampToValueAtTime(280, now + 5.0);

          masterGain.gain.setValueAtTime(0.01, now);
          masterGain.gain.linearRampToValueAtTime(0.3, now + 2.2);
          masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        } else if (type === 'river') {
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(800, now);
          filter.Q.setValueAtTime(1.5, now);
          masterGain.gain.setValueAtTime(0.2, now);
          masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        } else if (type === 'waterfall') {
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(600, now);
          masterGain.gain.setValueAtTime(0.28, now);
          masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        } else if (type === 'wind') {
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(350, now);
          filter.frequency.linearRampToValueAtTime(550, now + 2.0);
          filter.frequency.linearRampToValueAtTime(320, now + 4.5);
          filter.Q.setValueAtTime(3.0, now);
          masterGain.gain.setValueAtTime(0.25, now);
          masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        }

        source.connect(filter);
        filter.connect(masterGain);
        masterGain.connect(ctx.destination);

        source.start(now);
        source.stop(now + duration);

        this.currentAmbientNodes = {
          stop: () => {
            try {
              masterGain.gain.cancelScheduledValues(ctx.currentTime);
              masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
              source.stop(ctx.currentTime + 0.1);
            } catch {}
          }
        };
      } else if (type === 'thunder') {
        // Dramatic rolling thunder rumble
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(85, now);
        osc.frequency.exponentialRampToValueAtTime(35, now + 2.5);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(180, now);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.4, now + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 2.8);
      } else {
        // Gentle winter snow chimes
        this.playStarShimmer();
      }
    } catch {}
  }

  public stopAmbient(): void {
    if (this.currentAmbientNodes) {
      try {
        this.currentAmbientNodes.stop();
      } catch {}
      this.currentAmbientNodes = null;
    }
  }

  // --- Universe & Cosmic Sounds ---
  public playCosmicSound(type: string): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      if (type === 'meteor_whoosh' || type === 'aurora_shimmer') {
        // Shimmering cosmic sweep
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc2.type = 'sine';

        osc1.frequency.setValueAtTime(523.25, now); // C5
        osc1.frequency.exponentialRampToValueAtTime(1046.5, now + 0.8);
        osc2.frequency.setValueAtTime(659.25, now); // E5
        osc2.frequency.exponentialRampToValueAtTime(1318.5, now + 0.8);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.2, now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 1.2);
        osc2.stop(now + 1.2);
      } else if (type === 'volcano_rumble') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(90, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 1.5);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 1.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 1.6);
      } else {
        this.playStarShimmer();
      }
    } catch {}
  }

  public playStarShimmer(): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C E G C
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const t = now + idx * 0.12;
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.55);
      });
    } catch {}
  }

  // --- Food Sensation Sounds ---
  public playSensationSound(sensation: string): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      switch (sensation) {
        case 'sweet': {
          // Sweet happy magical chime (rising pentatonic)
          const notes = [523.25, 659.25, 783.99, 987.77, 1046.5];
          notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            const t = now + i * 0.08;
            osc.frequency.setValueAtTime(freq, t);
            gain.gain.setValueAtTime(0.2, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(t);
            osc.stop(t + 0.45);
          });
          break;
        }

        case 'spicy': {
          // Sizzle / quick upward burst
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(220, now);
          osc.frequency.linearRampToValueAtTime(880, now + 0.25);
          osc.frequency.linearRampToValueAtTime(440, now + 0.5);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.55);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.55);
          break;
        }

        case 'sour': {
          // Playful cartoon boing / pucker sound
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(450, now);
          osc.frequency.exponentialRampToValueAtTime(180, now + 0.15);
          osc.frequency.exponentialRampToValueAtTime(600, now + 0.35);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.42);
          break;
        }

        case 'hot': {
          // Whistling hot kettle / steam blow
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(800, now);
          osc.frequency.linearRampToValueAtTime(1100, now + 0.4);
          gain.gain.setValueAtTime(0.01, now);
          gain.gain.linearRampToValueAtTime(0.2, now + 0.2);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.52);
          break;
        }

        case 'cold': {
          // Frosty ice chatter / bell chimes
          [0, 0.08, 0.16, 0.24].forEach((offset) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            const t = now + offset;
            osc.frequency.setValueAtTime(1200 + (offset * 1000), t);
            gain.gain.setValueAtTime(0.15, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(t);
            osc.stop(t + 0.13);
          });
          break;
        }
      }
    } catch {}
  }

  // --- Interaction / Game Sounds ---
  public playClick(): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.06);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch {}
  }

  public playPop(): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(820, now + 0.05);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    } catch {}
  }

  public playSnap(): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(740, now);
      osc.frequency.exponentialRampToValueAtTime(1280, now + 0.06);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    } catch {}
  }

  public playSuccess(): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      // Arpeggio fanfare
      const notes = [440, 554.37, 659.25, 880]; // A Major
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const t = now + i * 0.09;
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.22, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.38);
      });
    } catch {}
  }

  public playReward(): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const t = now + i * 0.08;
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.38);
      });
    } catch {}
  }

  public playError(): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      // Gentle, supportive low double-tone for kids
      const notes = [293.66, 246.94]; // D4, B3
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        const t = now + i * 0.12;
        osc.frequency.setValueAtTime(freq, t);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.9, t + 0.15);
        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.22);
      });
    } catch {}
  }

  public playWrong(): void {
    this.playError();
  }

  private cachedVoices: SpeechSynthesisVoice[] = [];
  private preferredVoice: string = 'Kore';
  private speechAudioElement: HTMLAudioElement | null = null;
  private isSpeakingSpeech: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const loadVoices = () => {
        this.cachedVoices = window.speechSynthesis.getVoices();
      };
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  public setVoice(voice: string): void {
    this.preferredVoice = voice;
  }

  public getVoice(): string {
    return this.preferredVoice;
  }

  public stopSpeaking(): void {
    if (this.speechAudioElement) {
      this.speechAudioElement.pause();
      this.speechAudioElement = null;
    }
    voiceoverService.stopPlayback();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeakingSpeech = false;
  }

  // --- Kid-Friendly Speech Synthesis with Multi-Language Support ---
  public speak(text: string, customLang?: 'az' | 'tr' | 'ru' | 'en', itemKey?: string): void {
    if (this.isMuted) return;
    this.stopSpeaking();

    const langCode = customLang || this.currentLanguage;
    const cleanText = text.replace(/[\(\)\[\]\{\}\*\_~#]/g, ' ').replace(/\s+/g, ' ').trim();
    if (!cleanText) return;

    // 1. Priority: Check if user has recorded or uploaded their own voiceover
    const targetKey = itemKey || cleanText;
    if (voiceoverService.isVoiceoverActive() && voiceoverService.hasVoiceover(targetKey, langCode)) {
      voiceoverService.playVoiceover(targetKey, langCode);
      return;
    }

    // 2. Fallback: Immediate client-side speech synthesis with native phonetics
    this.speakWithBrowserSynthesis(cleanText, langCode);
  }

  // Optional AI Speech endpoint for testing or dedicated AI voice preview
  public async speakWithAiTts(text: string, customLang?: 'az' | 'tr' | 'ru' | 'en'): Promise<void> {
    if (this.isMuted) return;
    this.stopSpeaking();

    const langCode = customLang || this.currentLanguage;
    const cleanText = text.replace(/[\(\)\[\]\{\}\*\_~#]/g, ' ').replace(/\s+/g, ' ').trim();
    if (!cleanText) return;

    try {
      const endpoint = `/api/tts?text=${encodeURIComponent(cleanText)}&lang=${langCode}&voice=${encodeURIComponent(this.preferredVoice)}`;
      const res = await fetch(endpoint);
      const contentType = res.headers.get('content-type') || '';

      if (res.ok && (contentType.includes('audio') || contentType.includes('wav') || contentType.includes('mpeg'))) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        this.speechAudioElement = audio;
        this.isSpeakingSpeech = true;

        audio.onended = () => {
          this.isSpeakingSpeech = false;
          this.speechAudioElement = null;
          URL.revokeObjectURL(url);
        };

        await audio.play();
        return;
      }
    } catch {
      // Gracefully fall back to browser synthesis on any network/rate limit
    }

    this.speakWithBrowserSynthesis(cleanText, langCode);
  }

  public speakWithBrowserSynthesis(spokenText: string, langCode: 'az' | 'tr' | 'ru' | 'en'): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    try {
      window.speechSynthesis.cancel();

      if (this.cachedVoices.length === 0) {
        this.cachedVoices = window.speechSynthesis.getVoices();
      }
      const voices = this.cachedVoices.length > 0 ? this.cachedVoices : window.speechSynthesis.getVoices();

      let matchingVoice: SpeechSynthesisVoice | undefined;
      let voiceLang = 'en-US';
      let preparedText = spokenText;

      if (langCode === 'az') {
        // 1. Look for native Azerbaijani voice first across all OS/browser naming schemes
        matchingVoice = voices.find(v => {
          const l = v.lang.toLowerCase();
          const n = v.name.toLowerCase();
          return (
            l.startsWith('az') ||
            l.includes('az-') ||
            l.includes('az_') ||
            n.includes('azer') ||
            n.includes('azər') ||
            n.includes('babek') ||
            n.includes('sabina') ||
            n.includes('gunay') ||
            n.includes('elnur')
          );
        });

        if (matchingVoice) {
          voiceLang = matchingVoice.lang;
          preparedText = spokenText;
        } else {
          // 2. Fallback to Turkish voice with high-fidelity phonetic adaptation:
          // In Turkish TTS engines:
          // - 'X' is read as mathematical "iks" -> we adapt to 'H' so "Xoruz" sounds like "Horuz"
          // - 'Q' is read as English "kü" -> we adapt to 'G' so "Qartal" sounds like "Gartal"
          // - 'Ə' is skipped or causes pause -> we adapt to 'E' so "Ərik" sounds like "Erik"
          matchingVoice = voices.find(v => {
            const l = v.lang.toLowerCase();
            const n = v.name.toLowerCase();
            return (
              l.startsWith('tr') ||
              n.includes('turkish') ||
              n.includes('türk') ||
              n.includes('yelda') ||
              n.includes('cem')
            );
          });

          voiceLang = matchingVoice ? matchingVoice.lang : 'az-AZ';

          // Adapt text specifically for Turkish TTS engines
          if (matchingVoice) {
            let adapted = spokenText;

            // Handle letter announcements e.g. "Ə hərfi" -> "Eh hərfi", "X hərfi" -> "He hərfi"
            adapted = adapted
              .replace(/\bƏ\s+hərfi\b/gi, 'Eh hərfi')
              .replace(/\bX\s+hərfi\b/gi, 'He hərfi')
              .replace(/\bQ\s+hərfi\b/gi, 'Ga hərfi')
              .replace(/\bĞ\s+hərfi\b/gi, 'Yumşaq Ge hərfi');

            // Handle single letter cases
            const trimmed = adapted.trim();
            if (trimmed === 'Ə' || trimmed === 'ə') {
              adapted = 'Eh';
            } else if (trimmed === 'X' || trimmed === 'x') {
              adapted = 'He';
            } else if (trimmed === 'Q' || trimmed === 'q') {
              adapted = 'Ga';
            } else if (trimmed === 'Ğ' || trimmed === 'ğ') {
              adapted = 'Ğe';
            } else {
              // Word-level phonetic mappings:
              // Replace letter dot prompts e.g. "Ə. Ərik" -> "Eh. Erik", "X. Xoruz" -> "He. Horuz"
              adapted = adapted
                .replace(/^Ə\./g, 'Eh.')
                .replace(/^ə\./g, 'eh.')
                .replace(/^X\./g, 'He.')
                .replace(/^x\./g, 'he.')
                .replace(/^Q\./g, 'Ga.')
                .replace(/^q\./g, 'ga.')
                .replace(/Q/g, 'G')
                .replace(/q/g, 'g')
                .replace(/X/g, 'H')
                .replace(/x/g, 'h')
                .replace(/Ə/g, 'E')
                .replace(/ə/g, 'e');
            }
            preparedText = adapted;
          } else {
            // Keep original text with az-AZ language tag so platform cloud TTS can synthesize
            preparedText = spokenText;
          }
        }
      } else if (langCode === 'tr') {
        matchingVoice = voices.find(v => v.lang.toLowerCase().startsWith('tr') ||
                        v.name.toLowerCase().includes('turkish') || v.name.toLowerCase().includes('türk'));
        voiceLang = matchingVoice?.lang || 'tr-TR';
      } else if (langCode === 'ru') {
        matchingVoice = voices.find(v => v.lang.toLowerCase().startsWith('ru') ||
                        v.name.toLowerCase().includes('russian') || v.name.toLowerCase().includes('русск'));
        voiceLang = matchingVoice?.lang || 'ru-RU';
      } else {
        matchingVoice = voices.find(v => v.lang.toLowerCase().startsWith('en'));
        voiceLang = matchingVoice?.lang || 'en-US';
      }

      const utterance = new SpeechSynthesisUtterance(preparedText);
      utterance.rate = 0.94;
      utterance.pitch = 1.05;
      utterance.volume = 1.0;
      utterance.lang = voiceLang;

      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }

      // Resume if browser suspended audio context
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      window.speechSynthesis.speak(utterance);
    } catch {
      // Silent catch to prevent UI disruptions
    }
  }
}

export const sound = new SoundEngine();
