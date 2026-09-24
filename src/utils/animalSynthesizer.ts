// High-Fidelity Web Audio Synthesizer for Authentic Animal Voices & Calls

export function synthesizeAnimalSound(ctx: AudioContext, type: string): void {
  const now = ctx.currentTime;

  // Helper to generate shaped white/pink noise buffer
  const createNoiseSource = (duration: number): AudioBufferSourceNode => {
    const bufferSize = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    return src;
  };

  switch (type) {
    case 'roar': {
      // Mighty Lion King-of-the-Jungle Roar: Deep chest sub-bass + throat formant + guttural rasp + breath roar
      const oscSaw = ctx.createOscillator();
      const oscSub = ctx.createOscillator();
      const gainSaw = ctx.createGain();
      const gainSub = ctx.createGain();
      const filterLow = ctx.createBiquadFilter();
      const filterPeak = ctx.createBiquadFilter();

      oscSaw.type = 'sawtooth';
      oscSaw.frequency.setValueAtTime(130, now);
      oscSaw.frequency.linearRampToValueAtTime(165, now + 0.25);
      oscSaw.frequency.exponentialRampToValueAtTime(55, now + 1.4);

      oscSub.type = 'triangle';
      oscSub.frequency.setValueAtTime(65, now);
      oscSub.frequency.exponentialRampToValueAtTime(32, now + 1.4);

      // Lion throat resonance
      filterLow.type = 'lowpass';
      filterLow.frequency.setValueAtTime(450, now);
      filterLow.frequency.linearRampToValueAtTime(620, now + 0.3);
      filterLow.frequency.exponentialRampToValueAtTime(140, now + 1.4);

      filterPeak.type = 'peaking';
      filterPeak.frequency.setValueAtTime(320, now);
      filterPeak.gain.setValueAtTime(6, now);
      filterPeak.Q.setValueAtTime(2.0, now);

      // 16Hz Tremolo for guttural throat rasps
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(16, now);
      lfoGain.gain.setValueAtTime(0.08, now);
      lfo.connect(lfoGain.gain);

      // Roaring breath friction
      const noise = createNoiseSource(1.4);
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(360, now);
      noiseFilter.Q.setValueAtTime(2.2, now);
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, now);
      noiseGain.gain.linearRampToValueAtTime(0.28, now + 0.2);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      gainSaw.gain.setValueAtTime(0.01, now);
      gainSaw.gain.linearRampToValueAtTime(0.38, now + 0.2);
      gainSaw.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

      gainSub.gain.setValueAtTime(0.01, now);
      gainSub.gain.linearRampToValueAtTime(0.3, now + 0.2);
      gainSub.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

      oscSaw.connect(filterLow);
      filterLow.connect(filterPeak);
      filterPeak.connect(gainSaw);
      gainSaw.connect(ctx.destination);

      oscSub.connect(gainSub);
      gainSub.connect(ctx.destination);

      lfo.start(now);
      oscSaw.start(now);
      oscSub.start(now);
      noise.start(now);
      lfo.stop(now + 1.45);
      oscSaw.stop(now + 1.45);
      oscSub.stop(now + 1.45);
      noise.stop(now + 1.45);
      break;
    }

    case 'tiger_growl': {
      // Royal Bengal Tiger: Predatory Low Snarl erupting into a Thunderous Jungle Roar
      // Phase 1 (0 to 0.45s): Menacing low guttural throat growl with 28Hz vocal flutter
      // Phase 2 (0.45 to 1.85s): Full-force explosive Bengal roar with jaws open, teeth chuff, and vocal tract formants
      // Phase 3 (1.85 to 2.3s): Low breathy guttural expulsion and fading infrasonic rumble
      const tigerDur = 2.25;

      // 1. Multi-layered vocal oscillators (Sawtooth raw buzz + Square throat rasp + Triangle body)
      const oscSaw = ctx.createOscillator();
      const oscSquare = ctx.createOscillator();
      const oscTri = ctx.createOscillator();
      const tigerGain = ctx.createGain();

      oscSaw.type = 'sawtooth';
      oscSquare.type = 'square';
      oscTri.type = 'triangle';

      // Pitch contour: Threatening growl (78Hz) -> explosive roar surge (up to 195Hz) -> deep descending decay (55Hz)
      oscSaw.frequency.setValueAtTime(78, now);
      oscSaw.frequency.linearRampToValueAtTime(84, now + 0.42);
      oscSaw.frequency.exponentialRampToValueAtTime(195, now + 0.85);
      oscSaw.frequency.linearRampToValueAtTime(180, now + 1.35);
      oscSaw.frequency.exponentialRampToValueAtTime(55, now + tigerDur);

      oscSquare.frequency.setValueAtTime(78, now);
      oscSquare.frequency.linearRampToValueAtTime(84, now + 0.42);
      oscSquare.frequency.exponentialRampToValueAtTime(195, now + 0.85);
      oscSquare.frequency.linearRampToValueAtTime(180, now + 1.35);
      oscSquare.frequency.exponentialRampToValueAtTime(55, now + tigerDur);

      oscTri.frequency.setValueAtTime(156, now);
      oscTri.frequency.linearRampToValueAtTime(168, now + 0.42);
      oscTri.frequency.exponentialRampToValueAtTime(390, now + 0.85);
      oscTri.frequency.linearRampToValueAtTime(360, now + 1.35);
      oscTri.frequency.exponentialRampToValueAtTime(110, now + tigerDur);

      // Square wave gain (throat bite and tooth rasp)
      const squareGain = ctx.createGain();
      squareGain.gain.setValueAtTime(0.18, now);
      oscSquare.connect(squareGain);

      // 2. Epiglottal Snarl Flutter LFO (28 Hz rapid snarling tremolo & frequency flutter)
      const flutter = ctx.createOscillator();
      const flutterFreqGain = ctx.createGain();
      const flutterAmpGain = ctx.createGain();

      flutter.frequency.setValueAtTime(28, now);
      flutter.frequency.linearRampToValueAtTime(32, now + 0.85);
      flutter.frequency.linearRampToValueAtTime(24, now + 1.7);

      flutterFreqGain.gain.setValueAtTime(26, now);
      flutter.connect(flutterFreqGain);
      flutterFreqGain.connect(oscSaw.frequency);
      flutterFreqGain.connect(oscSquare.frequency);
      flutterFreqGain.connect(oscTri.frequency);

      flutterAmpGain.gain.setValueAtTime(0.08, now);
      flutter.connect(flutterAmpGain.gain);

      // 3. Dual Tiger Pharyngeal & Oral Formant Filters
      const filterLow = ctx.createBiquadFilter();
      filterLow.type = 'lowpass';
      filterLow.frequency.setValueAtTime(380, now);
      filterLow.frequency.linearRampToValueAtTime(950, now + 0.85);
      filterLow.frequency.linearRampToValueAtTime(820, now + 1.35);
      filterLow.frequency.exponentialRampToValueAtTime(220, now + tigerDur);
      filterLow.Q.setValueAtTime(2.2, now);

      const filterPeak = ctx.createBiquadFilter();
      filterPeak.type = 'peaking';
      filterPeak.frequency.setValueAtTime(1250, now);
      filterPeak.gain.setValueAtTime(7.5, now);
      filterPeak.Q.setValueAtTime(2.4, now);

      // Main amplitude envelope: Initial menacing growl -> roar crescendo -> breathy decay
      tigerGain.gain.setValueAtTime(0.01, now);
      tigerGain.gain.linearRampToValueAtTime(0.25, now + 0.15);
      tigerGain.gain.linearRampToValueAtTime(0.28, now + 0.45);
      tigerGain.gain.linearRampToValueAtTime(0.44, now + 0.85);
      tigerGain.gain.linearRampToValueAtTime(0.40, now + 1.4);
      tigerGain.gain.exponentialRampToValueAtTime(0.001, now + tigerDur);

      oscSaw.connect(filterLow);
      oscTri.connect(filterLow);
      squareGain.connect(filterLow);
      filterLow.connect(filterPeak);
      filterPeak.connect(tigerGain);
      tigerGain.connect(ctx.destination);

      // 4. Paralyzing Infrasonic Sub-Bass Tremor (32 Hz)
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(52, now);
      subOsc.frequency.linearRampToValueAtTime(45, now + 0.85);
      subOsc.frequency.exponentialRampToValueAtTime(28, now + tigerDur);

      subGain.gain.setValueAtTime(0.01, now);
      subGain.gain.linearRampToValueAtTime(0.35, now + 0.2);
      subGain.gain.linearRampToValueAtTime(0.38, now + 0.9);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + tigerDur);

      subOsc.connect(subGain);
      subGain.connect(ctx.destination);

      // 5. Airflow Friction & Snarl Breath Turbulence
      const breathNoise = createNoiseSource(tigerDur);
      const breathFilter = ctx.createBiquadFilter();
      breathFilter.type = 'bandpass';
      breathFilter.frequency.setValueAtTime(650, now);
      breathFilter.frequency.linearRampToValueAtTime(1450, now + 0.85);
      breathFilter.frequency.linearRampToValueAtTime(500, now + 1.8);
      breathFilter.Q.setValueAtTime(2.0, now);

      const breathGain = ctx.createGain();
      breathGain.gain.setValueAtTime(0.01, now);
      breathGain.gain.linearRampToValueAtTime(0.22, now + 0.3);
      breathGain.gain.linearRampToValueAtTime(0.34, now + 0.85);
      breathGain.gain.linearRampToValueAtTime(0.26, now + 1.4);
      breathGain.gain.exponentialRampToValueAtTime(0.001, now + tigerDur);

      breathNoise.connect(breathFilter);
      breathFilter.connect(breathGain);
      breathGain.connect(ctx.destination);

      // Start and schedule stop
      flutter.start(now);
      oscSaw.start(now);
      oscSquare.start(now);
      oscTri.start(now);
      subOsc.start(now);
      breathNoise.start(now);

      const stopTime = now + tigerDur + 0.05;
      flutter.stop(stopTime);
      oscSaw.stop(stopTime);
      oscSquare.stop(stopTime);
      oscTri.stop(stopTime);
      subOsc.stop(stopTime);
      breathNoise.stop(stopTime);
      break;
    }

    case 'trumpet': {
      // African Elephant Majestic Trumpet Call & Savannah Sub-Bass Rumble
      // Phase 1 (0 to 0.22s): Preparatory short trunk horn chuff
      // Phase 2 (0.24 to 1.85s): Soaring, triumphant brass trumpet + pressurized trunk airflow + deep infrasonic chest rumble

      // --- Part 1: Preparatory Short Trumpet Horn ---
      const preOsc = ctx.createOscillator();
      const preGain = ctx.createGain();
      const preFilter = ctx.createBiquadFilter();

      preOsc.type = 'sawtooth';
      preOsc.frequency.setValueAtTime(210, now);
      preOsc.frequency.linearRampToValueAtTime(390, now + 0.12);
      preOsc.frequency.exponentialRampToValueAtTime(240, now + 0.22);

      preFilter.type = 'bandpass';
      preFilter.frequency.setValueAtTime(750, now);
      preFilter.frequency.linearRampToValueAtTime(1200, now + 0.12);
      preFilter.Q.setValueAtTime(2.6, now);

      preGain.gain.setValueAtTime(0.01, now);
      preGain.gain.linearRampToValueAtTime(0.24, now + 0.05);
      preGain.gain.exponentialRampToValueAtTime(0.001, now + 0.23);

      preOsc.connect(preFilter);
      preFilter.connect(preGain);
      preGain.connect(ctx.destination);

      preOsc.start(now);
      preOsc.stop(now + 0.24);

      // --- Part 2: Mighty Main Trumpet Call (now + 0.24s to now + 1.85s) ---
      const tMain = now + 0.24;
      const mainDur = 1.6;

      // 1. Multi-harmonic brass oscillators (Sawtooth fundamental + Triangle 2nd harmonic + Square bite)
      const oscSaw = ctx.createOscillator();
      const oscTri = ctx.createOscillator();
      const oscBite = ctx.createOscillator();
      const brassGain = ctx.createGain();

      oscSaw.type = 'sawtooth';
      oscTri.type = 'triangle';
      oscBite.type = 'square';

      // Pitch contour: explosive rise -> triumphant held vibrato peak -> graceful descending trunk decay
      oscSaw.frequency.setValueAtTime(220, tMain);
      oscSaw.frequency.exponentialRampToValueAtTime(590, tMain + 0.24);
      oscSaw.frequency.linearRampToValueAtTime(630, tMain + 0.7);
      oscSaw.frequency.linearRampToValueAtTime(560, tMain + 1.05);
      oscSaw.frequency.exponentialRampToValueAtTime(240, tMain + mainDur);

      oscTri.frequency.setValueAtTime(440, tMain);
      oscTri.frequency.exponentialRampToValueAtTime(1180, tMain + 0.24);
      oscTri.frequency.linearRampToValueAtTime(1260, tMain + 0.7);
      oscTri.frequency.linearRampToValueAtTime(1120, tMain + 1.05);
      oscTri.frequency.exponentialRampToValueAtTime(480, tMain + mainDur);

      // Bite oscillator (adds brassy throat bite)
      oscBite.frequency.setValueAtTime(330, tMain);
      oscBite.frequency.exponentialRampToValueAtTime(885, tMain + 0.24);
      oscBite.frequency.linearRampToValueAtTime(945, tMain + 0.7);
      oscBite.frequency.exponentialRampToValueAtTime(360, tMain + mainDur);

      const biteGain = ctx.createGain();
      biteGain.gain.setValueAtTime(0.12, tMain);
      oscBite.connect(biteGain);

      // 2. Trunk vibrato flutter LFO (12 Hz trunk shake)
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(12, tMain);
      lfoGain.gain.setValueAtTime(24, tMain);
      lfo.connect(lfoGain);
      lfoGain.connect(oscSaw.frequency);
      lfoGain.connect(oscTri.frequency);
      lfoGain.connect(oscBite.frequency);

      // 3. Trunk acoustic formant filters (simulating 2-meter acoustic trunk tube)
      const filterBand = ctx.createBiquadFilter();
      filterBand.type = 'bandpass';
      filterBand.frequency.setValueAtTime(800, tMain);
      filterBand.frequency.exponentialRampToValueAtTime(2100, tMain + 0.26);
      filterBand.frequency.linearRampToValueAtTime(2300, tMain + 0.75);
      filterBand.frequency.exponentialRampToValueAtTime(700, tMain + mainDur);
      filterBand.Q.setValueAtTime(3.2, tMain);

      const filterPeak = ctx.createBiquadFilter();
      filterPeak.type = 'peaking';
      filterPeak.frequency.setValueAtTime(1800, tMain);
      filterPeak.gain.setValueAtTime(6.0, tMain);
      filterPeak.Q.setValueAtTime(1.8, tMain);

      brassGain.gain.setValueAtTime(0.01, tMain);
      brassGain.gain.linearRampToValueAtTime(0.38, tMain + 0.12);
      brassGain.gain.linearRampToValueAtTime(0.35, tMain + 0.85);
      brassGain.gain.exponentialRampToValueAtTime(0.001, tMain + mainDur);

      oscSaw.connect(filterBand);
      oscTri.connect(filterBand);
      biteGain.connect(filterBand);
      filterBand.connect(filterPeak);
      filterPeak.connect(brassGain);
      brassGain.connect(ctx.destination);

      // 4. Pressurized Trunk Air Turbulence (breath noise blast)
      const breathNoise = createNoiseSource(mainDur);
      const breathFilter = ctx.createBiquadFilter();
      breathFilter.type = 'bandpass';
      breathFilter.frequency.setValueAtTime(950, tMain);
      breathFilter.frequency.exponentialRampToValueAtTime(2400, tMain + 0.24);
      breathFilter.frequency.linearRampToValueAtTime(2100, tMain + 0.7);
      breathFilter.frequency.exponentialRampToValueAtTime(600, tMain + mainDur);
      breathFilter.Q.setValueAtTime(2.2, tMain);

      const breathGain = ctx.createGain();
      breathGain.gain.setValueAtTime(0.01, tMain);
      breathGain.gain.linearRampToValueAtTime(0.26, tMain + 0.14);
      breathGain.gain.linearRampToValueAtTime(0.2, tMain + 0.75);
      breathGain.gain.exponentialRampToValueAtTime(0.001, tMain + mainDur);

      breathNoise.connect(breathFilter);
      breathFilter.connect(breathGain);
      breathGain.connect(ctx.destination);

      // 5. Deep Savannah Infrasonic Chest Rumble (Sub-Bass 52Hz)
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      const subFilter = ctx.createBiquadFilter();

      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(62, tMain);
      subOsc.frequency.linearRampToValueAtTime(52, tMain + 0.6);
      subOsc.frequency.exponentialRampToValueAtTime(36, tMain + mainDur);

      // Deep body resonance low-pass
      subFilter.type = 'lowpass';
      subFilter.frequency.setValueAtTime(140, tMain);

      // 16Hz chest rumble flutter
      const subLfo = ctx.createOscillator();
      const subLfoGain = ctx.createGain();
      subLfo.frequency.setValueAtTime(16, tMain);
      subLfoGain.gain.setValueAtTime(0.08, tMain);
      subLfo.connect(subLfoGain.gain);

      subGain.gain.setValueAtTime(0.01, tMain);
      subGain.gain.linearRampToValueAtTime(0.32, tMain + 0.18);
      subGain.gain.linearRampToValueAtTime(0.3, tMain + 0.9);
      subGain.gain.exponentialRampToValueAtTime(0.001, tMain + mainDur);

      subOsc.connect(subFilter);
      subFilter.connect(subGain);
      subGain.connect(ctx.destination);

      // Trigger all nodes for Part 2
      lfo.start(tMain);
      subLfo.start(tMain);
      oscSaw.start(tMain);
      oscTri.start(tMain);
      oscBite.start(tMain);
      breathNoise.start(tMain);
      subOsc.start(tMain);

      const stopTime = tMain + mainDur + 0.05;
      lfo.stop(stopTime);
      subLfo.stop(stopTime);
      oscSaw.stop(stopTime);
      oscTri.stop(stopTime);
      oscBite.stop(stopTime);
      breathNoise.stop(stopTime);
      subOsc.stop(stopTime);
      break;
    }

    case 'dolphin': {
      // Bottlenose Dolphin (Tursiops truncatus): Authentic Marine Bioacoustics
      // Phase 1 (0 to 0.35s): Rapid Echolocation Click Train & High-Frequency Sonar Buzz
      // Phase 2 (0.38 to 1.62s): Signature Whistle with Melodic Arpeggiation, Harmonics & 16Hz Vibrato
      // Phase 3 (1.68 to 2.25s): Excited Dolphin "Laugh" / Burst-Pulse Chortle & Water Plop

      // --- Phase 1: Echolocation Sonar Click Train (12 micro-pulses) ---
      let clickOffset = 0;
      for (let i = 0; i < 12; i++) {
        const clickTime = now + clickOffset;
        const clickOsc = ctx.createOscillator();
        const clickGain = ctx.createGain();
        const clickFilter = ctx.createBiquadFilter();

        clickOsc.type = 'sine';
        // Biosonar clicks sweep from high ultrasonic down rapidly in 10ms
        clickOsc.frequency.setValueAtTime(5200 + (i % 3) * 600, clickTime);
        clickOsc.frequency.exponentialRampToValueAtTime(2400, clickTime + 0.01);

        clickFilter.type = 'highpass';
        clickFilter.frequency.setValueAtTime(2200, clickTime);

        clickGain.gain.setValueAtTime(0.22, clickTime);
        clickGain.gain.exponentialRampToValueAtTime(0.001, clickTime + 0.012);

        clickOsc.connect(clickFilter);
        clickFilter.connect(clickGain);
        clickGain.connect(ctx.destination);

        clickOsc.start(clickTime);
        clickOsc.stop(clickTime + 0.014);

        // Accelerated click repetition (creak / scan buzz)
        clickOffset += Math.max(0.018, 0.038 - i * 0.0018);
      }

      // --- Phase 2: Majestic Signature Whistle (now + 0.38s to now + 1.62s) ---
      const wStart = now + 0.38;
      const wDur = 1.24;

      const wOsc1 = ctx.createOscillator();
      const wOsc2 = ctx.createOscillator();
      const wGain = ctx.createGain();
      const wHarmGain = ctx.createGain();

      wOsc1.type = 'sine';
      wOsc2.type = 'sine';

      // Fundamental frequency: rising flourish (2800 -> 6200Hz) -> melodic dip (4600Hz) -> soaring peak (7100Hz) -> resolution (3400Hz)
      wOsc1.frequency.setValueAtTime(2800, wStart);
      wOsc1.frequency.exponentialRampToValueAtTime(6200, wStart + 0.28);
      wOsc1.frequency.linearRampToValueAtTime(4600, wStart + 0.58);
      wOsc1.frequency.exponentialRampToValueAtTime(7100, wStart + 0.88);
      wOsc1.frequency.exponentialRampToValueAtTime(3400, wStart + wDur);

      // 2nd Harmonic (crystal ocean overtone sheen)
      wOsc2.frequency.setValueAtTime(5600, wStart);
      wOsc2.frequency.exponentialRampToValueAtTime(12400, wStart + 0.28);
      wOsc2.frequency.linearRampToValueAtTime(9200, wStart + 0.58);
      wOsc2.frequency.exponentialRampToValueAtTime(14200, wStart + 0.88);
      wOsc2.frequency.exponentialRampToValueAtTime(6800, wStart + wDur);

      wHarmGain.gain.setValueAtTime(0.12, wStart);
      wOsc2.connect(wHarmGain);

      // 16 Hz frequency vibrato modulation (natural vocal flutter)
      const wLfo = ctx.createOscillator();
      const wLfoGain = ctx.createGain();
      wLfo.frequency.setValueAtTime(16, wStart);
      wLfoGain.gain.setValueAtTime(65, wStart);
      wLfo.connect(wLfoGain);
      wLfoGain.connect(wOsc1.frequency);
      wLfoGain.connect(wOsc2.frequency);

      // Whistle envelope
      wGain.gain.setValueAtTime(0.01, wStart);
      wGain.gain.linearRampToValueAtTime(0.28, wStart + 0.08);
      wGain.gain.linearRampToValueAtTime(0.32, wStart + 0.88);
      wGain.gain.exponentialRampToValueAtTime(0.001, wStart + wDur);

      wOsc1.connect(wGain);
      wHarmGain.connect(wGain);
      wGain.connect(ctx.destination);

      wLfo.start(wStart);
      wOsc1.start(wStart);
      wOsc2.start(wStart);
      wLfo.stop(wStart + wDur + 0.02);
      wOsc1.stop(wStart + wDur + 0.02);
      wOsc2.stop(wStart + wDur + 0.02);

      // --- Phase 3: Excited Dolphin "Laugh" & Chortle Burst (now + 1.68s to now + 2.25s) ---
      const laughTimes = [1.68, 1.78, 1.88, 1.98, 2.08];
      laughTimes.forEach((relTime, idx) => {
        const pulseTime = now + relTime;
        const pOsc = ctx.createOscillator();
        const pGain = ctx.createGain();
        const pFilter = ctx.createBiquadFilter();

        pOsc.type = 'triangle';
        // Chirpy laughter burst sweeping from high to low
        const baseFreq = 4400 - idx * 180;
        pOsc.frequency.setValueAtTime(baseFreq, pulseTime);
        pOsc.frequency.exponentialRampToValueAtTime(2200, pulseTime + 0.065);

        pFilter.type = 'bandpass';
        pFilter.frequency.setValueAtTime(3200, pulseTime);
        pFilter.Q.setValueAtTime(2.0, pulseTime);

        pGain.gain.setValueAtTime(0.01, pulseTime);
        pGain.gain.linearRampToValueAtTime(0.22, pulseTime + 0.015);
        pGain.gain.exponentialRampToValueAtTime(0.001, pulseTime + 0.07);

        pOsc.connect(pFilter);
        pFilter.connect(pGain);
        pGain.connect(ctx.destination);

        pOsc.start(pulseTime);
        pOsc.stop(pulseTime + 0.075);
      });

      // Subtle water droplet plop at the end
      const waterTime = now + 2.15;
      const waterOsc = ctx.createOscillator();
      const waterGain = ctx.createGain();
      waterOsc.type = 'sine';
      waterOsc.frequency.setValueAtTime(1400, waterTime);
      waterOsc.frequency.exponentialRampToValueAtTime(700, waterTime + 0.08);

      waterGain.gain.setValueAtTime(0.12, waterTime);
      waterGain.gain.exponentialRampToValueAtTime(0.001, waterTime + 0.09);

      waterOsc.connect(waterGain);
      waterGain.connect(ctx.destination);
      waterOsc.start(waterTime);
      waterOsc.stop(waterTime + 0.1);
      break;
    }

    case 'whale': {
      // Blue Whale & Humpback Whale (Balaenoptera musculus & Megaptera novaeangliae):
      // Majestic Deep Oceanic Infrasonic Song & Ethereal Humpback Harmonic Wails
      // Phase 1 (0 to 0.75s): Surface blowhole exhalation mist & deep ocean water surge
      // Phase 2 (0.35 to 1.75s): Deep oceanic moan rising into a resonant underwater whale cry
      // Phase 3 (1.75 to 3.55s): Soaring ethereal Humpback singing song with 5.2Hz marine vibrato & fading abyssal tail
      const whaleDur = 3.6;

      // 1. Infrasonic Deep Ocean Sub-Bass (Blue Whale 36Hz -> 78Hz -> 32Hz)
      const oscSub = ctx.createOscillator();
      const gainSub = ctx.createGain();
      const filterSub = ctx.createBiquadFilter();

      oscSub.type = 'sine';
      oscSub.frequency.setValueAtTime(42, now);
      oscSub.frequency.linearRampToValueAtTime(78, now + 1.2);
      oscSub.frequency.linearRampToValueAtTime(62, now + 2.1);
      oscSub.frequency.exponentialRampToValueAtTime(32, now + whaleDur);

      filterSub.type = 'lowpass';
      filterSub.frequency.setValueAtTime(120, now);

      gainSub.gain.setValueAtTime(0.01, now);
      gainSub.gain.linearRampToValueAtTime(0.38, now + 0.6);
      gainSub.gain.linearRampToValueAtTime(0.35, now + 2.2);
      gainSub.gain.exponentialRampToValueAtTime(0.001, now + whaleDur);

      oscSub.connect(filterSub);
      filterSub.connect(gainSub);
      gainSub.connect(ctx.destination);

      // 2. Melodic Singing Harmonic Waves (Humpback Ethereal Vocal Glissando)
      const oscMelody = ctx.createOscillator();
      const oscOvertone = ctx.createOscillator();
      const gainMelody = ctx.createGain();
      const waterFilter = ctx.createBiquadFilter();
      const vocalFormant = ctx.createBiquadFilter();

      oscMelody.type = 'sine';
      oscOvertone.type = 'triangle';

      // Pitch contour:
      // Phrase 1 (0.35 to 1.7s): Moan from 115Hz sweeping up to 340Hz and settling at 260Hz
      // Phrase 2 (1.7 to 3.5s): Majestic soaring sweep from 320Hz up to 680Hz, holding with vibrato, cascading to 140Hz
      oscMelody.frequency.setValueAtTime(115, now + 0.35);
      oscMelody.frequency.exponentialRampToValueAtTime(340, now + 1.15);
      oscMelody.frequency.linearRampToValueAtTime(260, now + 1.65);
      oscMelody.frequency.exponentialRampToValueAtTime(680, now + 2.35);
      oscMelody.frequency.linearRampToValueAtTime(620, now + 2.85);
      oscMelody.frequency.exponentialRampToValueAtTime(140, now + whaleDur);

      // Octave harmonic overtone
      oscOvertone.frequency.setValueAtTime(230, now + 0.35);
      oscOvertone.frequency.exponentialRampToValueAtTime(680, now + 1.15);
      oscOvertone.frequency.linearRampToValueAtTime(520, now + 1.65);
      oscOvertone.frequency.exponentialRampToValueAtTime(1360, now + 2.35);
      oscOvertone.frequency.linearRampToValueAtTime(1240, now + 2.85);
      oscOvertone.frequency.exponentialRampToValueAtTime(280, now + whaleDur);

      // 5.2 Hz Marine Vibrato LFO (haunting whale vocal modulation)
      const vibratoLfo = ctx.createOscillator();
      const vibratoGain = ctx.createGain();
      vibratoLfo.frequency.setValueAtTime(5.2, now);
      vibratoGain.gain.setValueAtTime(0, now);
      vibratoGain.gain.linearRampToValueAtTime(14, now + 1.0);
      vibratoGain.gain.linearRampToValueAtTime(26, now + 2.4);
      vibratoGain.gain.linearRampToValueAtTime(8, now + whaleDur);
      vibratoLfo.connect(vibratoGain);
      vibratoGain.connect(oscMelody.frequency);
      vibratoGain.connect(oscOvertone.frequency);

      // Deep water acoustic low-pass filter (simulates miles of deep seawater sound absorption)
      waterFilter.type = 'lowpass';
      waterFilter.frequency.setValueAtTime(360, now);
      waterFilter.frequency.exponentialRampToValueAtTime(980, now + 2.4);
      waterFilter.frequency.exponentialRampToValueAtTime(320, now + whaleDur);
      waterFilter.Q.setValueAtTime(3.2, now);

      // Formant peaking filter (hollow underwater cavernous cry resonance)
      vocalFormant.type = 'peaking';
      vocalFormant.frequency.setValueAtTime(520, now);
      vocalFormant.gain.setValueAtTime(6.5, now);
      vocalFormant.Q.setValueAtTime(2.2, now);

      gainMelody.gain.setValueAtTime(0.01, now);
      gainMelody.gain.linearRampToValueAtTime(0.32, now + 1.15);
      gainMelody.gain.linearRampToValueAtTime(0.38, now + 2.4);
      gainMelody.gain.exponentialRampToValueAtTime(0.001, now + whaleDur);

      oscMelody.connect(waterFilter);
      oscOvertone.connect(waterFilter);
      waterFilter.connect(vocalFormant);
      vocalFormant.connect(gainMelody);
      gainMelody.connect(ctx.destination);

      // 3. Surface Blowhole Exhalation & Ocean Mist Whoosh (0 to 0.75s)
      const blowNoise = createNoiseSource(0.75);
      const blowFilter = ctx.createBiquadFilter();
      blowFilter.type = 'bandpass';
      blowFilter.frequency.setValueAtTime(550, now);
      blowFilter.frequency.linearRampToValueAtTime(820, now + 0.3);
      blowFilter.frequency.exponentialRampToValueAtTime(280, now + 0.75);
      blowFilter.Q.setValueAtTime(1.8, now);

      const blowGain = ctx.createGain();
      blowGain.gain.setValueAtTime(0.01, now);
      blowGain.gain.linearRampToValueAtTime(0.18, now + 0.15);
      blowGain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

      blowNoise.connect(blowFilter);
      blowFilter.connect(blowGain);
      blowGain.connect(ctx.destination);

      // Start all audio generators
      oscSub.start(now);
      oscMelody.start(now);
      oscOvertone.start(now);
      vibratoLfo.start(now);
      blowNoise.start(now);

      const stopTime = now + whaleDur + 0.05;
      oscSub.stop(stopTime);
      oscMelody.stop(stopTime);
      oscOvertone.stop(stopTime);
      vibratoLfo.stop(stopTime);
      blowNoise.stop(now + 0.78);
      break;
    }

    case 'monkey': {
      // Playful Chimpanzee / Monkey: "Ooh-ooh! Aah-aah!" rhythmic vocal chatter
      const calls = [
        { time: 0, dur: 0.16, startFreq: 340, endFreq: 420, formant: 650, isAah: false },
        { time: 0.22, dur: 0.18, startFreq: 360, endFreq: 460, formant: 700, isAah: false },
        { time: 0.48, dur: 0.22, startFreq: 680, endFreq: 880, formant: 1300, isAah: true },
        { time: 0.76, dur: 0.26, startFreq: 720, endFreq: 940, formant: 1400, isAah: true }
      ];

      calls.forEach(({ time, dur, startFreq, endFreq, formant, isAah }) => {
        const t = now + time;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = isAah ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(startFreq, t);
        osc.frequency.exponentialRampToValueAtTime(endFreq, t + dur * 0.5);
        osc.frequency.exponentialRampToValueAtTime(startFreq * 0.9, t + dur);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(formant, t);
        filter.Q.setValueAtTime(2.5, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(isAah ? 0.32 : 0.28, t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + dur + 0.02);
      });
      break;
    }

    case 'howl': {
      // Gray Wolf Atmospheric Pack Howl: Haunting crescendo & multi-harmonic pack call
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(280, now);
      osc1.frequency.linearRampToValueAtTime(540, now + 0.6);
      osc1.frequency.linearRampToValueAtTime(600, now + 1.1);
      osc1.frequency.exponentialRampToValueAtTime(280, now + 2.1);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(560, now);
      osc2.frequency.linearRampToValueAtTime(1080, now + 0.6);
      osc2.frequency.linearRampToValueAtTime(1200, now + 1.1);
      osc2.frequency.exponentialRampToValueAtTime(560, now + 2.1);

      // Subtle gentle pack vibrato
      const vib = ctx.createOscillator();
      const vibGain = ctx.createGain();
      vib.frequency.setValueAtTime(5.5, now);
      vibGain.gain.setValueAtTime(12, now);
      vib.connect(osc1.frequency);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(950, now);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.5);
      gain.gain.linearRampToValueAtTime(0.28, now + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      vib.start(now);
      osc1.start(now);
      osc2.start(now);
      vib.stop(now + 2.25);
      osc1.stop(now + 2.25);
      osc2.stop(now + 2.25);
      break;
    }

    case 'bark': {
      // Playful Dog Bark: Double crisp "Woof! Woof!" with canine throat resonance
      [0, 0.26].forEach((offset) => {
        const t = now + offset;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, t);
        osc.frequency.exponentialRampToValueAtTime(130, t + 0.14);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(480, t);
        filter.Q.setValueAtTime(1.9, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.34, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.18);
      });
      break;
    }

    case 'purr': {
      // Domestic Cat (Felis catus): Authentic Three-Phase Feline Vocalization
      // Phase 1 (0 to 1.12s): Expressive, melodic "Mee-ee-ooww" with vocal tract vowel formants & vibrato
      // Phase 2 (1.10 to 1.42s): Affectionate greeting trill / purr-chirp ("Prrrt!")
      // Phase 3 (1.38 to 2.85s): Soothing 26Hz dual-stroke respiratory laryngeal motor purr

      // --- Phase 1: Expressive Sweet Meow ("Mee-ee-ooww") (0 to 1.12s) ---
      const meowOsc1 = ctx.createOscillator();
      const meowOsc2 = ctx.createOscillator();
      const meowFilter = ctx.createBiquadFilter();
      const meowPeaking = ctx.createBiquadFilter();
      const meowGain = ctx.createGain();

      meowOsc1.type = 'sawtooth';
      meowOsc2.type = 'triangle';

      // Pitch trajectory: "Mmm" (390Hz) -> "EE" rise & arch (760Hz) -> "OWW" descend (340Hz)
      meowOsc1.frequency.setValueAtTime(390, now);
      meowOsc1.frequency.linearRampToValueAtTime(450, now + 0.12);
      meowOsc1.frequency.exponentialRampToValueAtTime(760, now + 0.40);
      meowOsc1.frequency.linearRampToValueAtTime(680, now + 0.65);
      meowOsc1.frequency.exponentialRampToValueAtTime(340, now + 1.08);

      meowOsc2.frequency.setValueAtTime(780, now);
      meowOsc2.frequency.linearRampToValueAtTime(900, now + 0.12);
      meowOsc2.frequency.exponentialRampToValueAtTime(1520, now + 0.40);
      meowOsc2.frequency.linearRampToValueAtTime(1360, now + 0.65);
      meowOsc2.frequency.exponentialRampToValueAtTime(680, now + 1.08);

      // Sweet feline vocal vibrato (6.2 Hz) on the extended vowel
      const meowVib = ctx.createOscillator();
      const meowVibGain = ctx.createGain();
      meowVib.frequency.setValueAtTime(6.2, now);
      meowVibGain.gain.setValueAtTime(0, now);
      meowVibGain.gain.linearRampToValueAtTime(18, now + 0.32);
      meowVibGain.gain.linearRampToValueAtTime(12, now + 0.70);
      meowVibGain.gain.exponentialRampToValueAtTime(0.001, now + 1.08);
      meowVib.connect(meowVibGain);
      meowVibGain.connect(meowOsc1.frequency);
      meowVibGain.connect(meowOsc2.frequency);

      // Dynamic mouth cavity formant filter (opening wide to 'ee', then rounding to 'oww')
      meowFilter.type = 'bandpass';
      meowFilter.frequency.setValueAtTime(950, now);
      meowFilter.frequency.linearRampToValueAtTime(2100, now + 0.42);
      meowFilter.frequency.exponentialRampToValueAtTime(620, now + 1.08);
      meowFilter.Q.setValueAtTime(2.2, now);

      // High oral cavity resonance peaking
      meowPeaking.type = 'peaking';
      meowPeaking.frequency.setValueAtTime(2400, now);
      meowPeaking.gain.setValueAtTime(6.0, now);
      meowPeaking.Q.setValueAtTime(1.8, now);

      meowGain.gain.setValueAtTime(0.01, now);
      meowGain.gain.linearRampToValueAtTime(0.28, now + 0.15);
      meowGain.gain.linearRampToValueAtTime(0.32, now + 0.42);
      meowGain.gain.exponentialRampToValueAtTime(0.001, now + 1.10);

      meowOsc1.connect(meowFilter);
      meowOsc2.connect(meowFilter);
      meowFilter.connect(meowPeaking);
      meowPeaking.connect(meowGain);
      meowGain.connect(ctx.destination);

      meowOsc1.start(now);
      meowOsc2.start(now);
      meowVib.start(now);

      meowOsc1.stop(now + 1.12);
      meowOsc2.stop(now + 1.12);
      meowVib.stop(now + 1.12);

      // --- Phase 2: Affectionate Greeting Trill ("Prrrt!") (1.08 to 1.42s) ---
      const tTrill = now + 1.05;
      const trillDur = 0.35;
      const trillOsc = ctx.createOscillator();
      const trillFilter = ctx.createBiquadFilter();
      const trillGain = ctx.createGain();

      trillOsc.type = 'triangle';
      trillOsc.frequency.setValueAtTime(510, tTrill);
      trillOsc.frequency.exponentialRampToValueAtTime(740, tTrill + 0.18);
      trillOsc.frequency.linearRampToValueAtTime(580, tTrill + trillDur);

      // 28 Hz rapid laryngeal flutter (feline greeting roll)
      const trillLfo = ctx.createOscillator();
      const trillLfoGain = ctx.createGain();
      trillLfo.frequency.setValueAtTime(28, tTrill);
      trillLfoGain.gain.setValueAtTime(45, tTrill);
      trillLfo.connect(trillLfoGain);
      trillLfoGain.connect(trillOsc.frequency);

      trillFilter.type = 'bandpass';
      trillFilter.frequency.setValueAtTime(1200, tTrill);
      trillFilter.Q.setValueAtTime(2.0, tTrill);

      trillGain.gain.setValueAtTime(0.01, tTrill);
      trillGain.gain.linearRampToValueAtTime(0.24, tTrill + 0.08);
      trillGain.gain.exponentialRampToValueAtTime(0.001, tTrill + trillDur);

      trillOsc.connect(trillFilter);
      trillFilter.connect(trillGain);
      trillGain.connect(ctx.destination);

      trillOsc.start(tTrill);
      trillLfo.start(tTrill);
      trillOsc.stop(tTrill + trillDur + 0.02);
      trillLfo.stop(tTrill + trillDur + 0.02);

      // --- Phase 3: Soothing 26Hz Dual-Stroke Respiratory Motor Purr (1.35 to 2.85s) ---
      const tPurr = now + 1.35;
      const purrDur = 1.50;

      const purrOsc = ctx.createOscillator();
      const purrHarm = ctx.createOscillator();
      const purrFilter = ctx.createBiquadFilter();
      const purrGain = ctx.createGain();

      purrOsc.type = 'sawtooth';
      purrHarm.type = 'triangle';

      // 26 Hz neural laryngeal oscillator
      purrOsc.frequency.setValueAtTime(26, tPurr);
      purrHarm.frequency.setValueAtTime(52, tPurr);

      purrFilter.type = 'lowpass';
      purrFilter.frequency.setValueAtTime(140, tPurr);
      purrFilter.Q.setValueAtTime(2.8, tPurr);

      // Two-phase respiratory breath swell (Inhale: 1.4-1.9s, Exhale: 1.95-2.8s)
      purrGain.gain.setValueAtTime(0.01, tPurr);
      purrGain.gain.linearRampToValueAtTime(0.26, tPurr + 0.25);
      purrGain.gain.linearRampToValueAtTime(0.18, tPurr + 0.65); // Inhale-exhale dip
      purrGain.gain.linearRampToValueAtTime(0.30, tPurr + 0.95); // Exhale peak
      purrGain.gain.exponentialRampToValueAtTime(0.001, tPurr + purrDur);

      // Soft breath turbulence friction layer
      const purrNoise = createNoiseSource(purrDur);
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'lowpass';
      noiseFilter.frequency.setValueAtTime(180, tPurr);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, tPurr);
      noiseGain.gain.linearRampToValueAtTime(0.12, tPurr + 0.25);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, tPurr + purrDur);

      purrNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      purrOsc.connect(purrFilter);
      purrHarm.connect(purrFilter);
      purrFilter.connect(purrGain);
      purrGain.connect(ctx.destination);

      purrOsc.start(tPurr);
      purrHarm.start(tPurr);
      purrNoise.start(tPurr);

      const tPurrStop = tPurr + purrDur + 0.05;
      purrOsc.stop(tPurrStop);
      purrHarm.stop(tPurrStop);
      purrNoise.stop(tPurrStop);
      break;
    }

    case 'screech': {
      // Bald & Golden Eagle: Piercing alpine raptor scream
      const osc = ctx.createOscillator();
      const oscHarm = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(3200, now);
      osc.frequency.exponentialRampToValueAtTime(1600, now + 0.65);

      oscHarm.type = 'sine';
      oscHarm.frequency.setValueAtTime(6400, now);
      oscHarm.frequency.exponentialRampToValueAtTime(3200, now + 0.65);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2400, now);
      filter.Q.setValueAtTime(3.5, now);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.32, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

      osc.connect(filter);
      oscHarm.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      oscHarm.start(now);
      osc.stop(now + 0.72);
      oscHarm.stop(now + 0.72);
      break;
    }

    case 'peacock': {
      // Indian Peacock: Dazzling trumpet-like "May-awe! May-awe!" bugle
      [0, 0.45].forEach((offset) => {
        const t = now + offset;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(740, t);
        osc.frequency.exponentialRampToValueAtTime(460, t + 0.35);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1100, t);
        filter.Q.setValueAtTime(2.5, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.3, t + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.4);
      });
      break;
    }

    case 'seal': {
      // Harbor Seal: Playful water barking honk ("Arf! Arf-honk!")
      [0, 0.28].forEach((offset, idx) => {
        const t = now + offset;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        const baseFreq = idx === 0 ? 280 : 340;
        osc.frequency.setValueAtTime(baseFreq, t);
        osc.frequency.exponentialRampToValueAtTime(170, t + 0.18);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(580, t);
        filter.Q.setValueAtTime(3.0, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.32, t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.22);
      });
      break;
    }

    case 'panda_grunt': {
      // Giant Panda (Ailuropoda melanoleuca): Authentic Friendly Bleat & Woodland Squeak-Grunt
      // In nature, pandas are famous for their unique, sweet "bleat" (a 14.5Hz fluttering friendly call)
      // followed by an endearing bamboo-munching snort and gentle cub grunt.

      // --- Part 1: The Iconic Giant Panda Bleat ("Meh-eh-eh-eh") ---
      const bleatOsc = ctx.createOscillator();
      const bleatHarm = ctx.createOscillator();
      const bleatGain = ctx.createGain();
      const bleatFilter = ctx.createBiquadFilter();

      bleatOsc.type = 'sawtooth';
      bleatHarm.type = 'triangle';

      // Pitch contour: Gentle rise from 330Hz to 380Hz, holding with flutter, then slight dip to 310Hz
      bleatOsc.frequency.setValueAtTime(330, now);
      bleatOsc.frequency.linearRampToValueAtTime(380, now + 0.12);
      bleatOsc.frequency.linearRampToValueAtTime(370, now + 0.52);
      bleatOsc.frequency.exponentialRampToValueAtTime(300, now + 0.68);

      bleatHarm.frequency.setValueAtTime(660, now);
      bleatHarm.frequency.linearRampToValueAtTime(760, now + 0.12);
      bleatHarm.frequency.linearRampToValueAtTime(740, now + 0.52);
      bleatHarm.frequency.exponentialRampToValueAtTime(600, now + 0.68);

      // 14.5 Hz laryngeal flutter (the unmistakable panda bleat vibrato)
      const bleatLfo = ctx.createOscillator();
      const bleatLfoGain = ctx.createGain();
      bleatLfo.frequency.setValueAtTime(14.5, now);
      bleatLfoGain.gain.setValueAtTime(24, now);
      bleatLfo.connect(bleatLfoGain);
      bleatLfoGain.connect(bleatOsc.frequency);
      bleatLfoGain.connect(bleatHarm.frequency);

      // Warm panda vocal tract formant filter (low-pass + bandpass)
      bleatFilter.type = 'bandpass';
      bleatFilter.frequency.setValueAtTime(620, now);
      bleatFilter.frequency.linearRampToValueAtTime(780, now + 0.15);
      bleatFilter.frequency.exponentialRampToValueAtTime(450, now + 0.68);
      bleatFilter.Q.setValueAtTime(2.4, now);

      bleatGain.gain.setValueAtTime(0.01, now);
      bleatGain.gain.linearRampToValueAtTime(0.32, now + 0.08);
      bleatGain.gain.linearRampToValueAtTime(0.28, now + 0.48);
      bleatGain.gain.exponentialRampToValueAtTime(0.001, now + 0.70);

      bleatOsc.connect(bleatFilter);
      bleatHarm.connect(bleatFilter);
      bleatFilter.connect(bleatGain);
      bleatGain.connect(ctx.destination);

      bleatLfo.start(now);
      bleatOsc.start(now);
      bleatHarm.start(now);
      bleatLfo.stop(now + 0.72);
      bleatOsc.stop(now + 0.72);
      bleatHarm.stop(now + 0.72);

      // --- Part 2: Playful Bamboo Snuff & Squeak-Grunt (now + 0.74s to now + 1.22s) ---
      const tGrunt = now + 0.74;
      const gruntDur = 0.45;

      const gruntOsc = ctx.createOscillator();
      const gruntGain = ctx.createGain();
      const gruntFilter = ctx.createBiquadFilter();

      gruntOsc.type = 'triangle';
      gruntOsc.frequency.setValueAtTime(460, tGrunt);
      gruntOsc.frequency.exponentialRampToValueAtTime(540, tGrunt + 0.08);
      gruntOsc.frequency.exponentialRampToValueAtTime(220, tGrunt + gruntDur);

      gruntFilter.type = 'lowpass';
      gruntFilter.frequency.setValueAtTime(720, tGrunt);
      gruntFilter.frequency.exponentialRampToValueAtTime(320, tGrunt + gruntDur);

      gruntGain.gain.setValueAtTime(0.01, tGrunt);
      gruntGain.gain.linearRampToValueAtTime(0.26, tGrunt + 0.05);
      gruntGain.gain.exponentialRampToValueAtTime(0.001, tGrunt + gruntDur);

      gruntOsc.connect(gruntFilter);
      gruntFilter.connect(gruntGain);
      gruntGain.connect(ctx.destination);

      // Soft breathy snout air puff
      const puffNoise = createNoiseSource(gruntDur);
      const puffFilter = ctx.createBiquadFilter();
      puffFilter.type = 'bandpass';
      puffFilter.frequency.setValueAtTime(850, tGrunt);
      puffFilter.Q.setValueAtTime(1.8, tGrunt);

      const puffGain = ctx.createGain();
      puffGain.gain.setValueAtTime(0.01, tGrunt);
      puffGain.gain.linearRampToValueAtTime(0.14, tGrunt + 0.04);
      puffGain.gain.exponentialRampToValueAtTime(0.001, tGrunt + gruntDur);

      puffNoise.connect(puffFilter);
      puffFilter.connect(puffGain);
      puffGain.connect(ctx.destination);

      gruntOsc.start(tGrunt);
      puffNoise.start(tGrunt);
      gruntOsc.stop(tGrunt + gruntDur + 0.02);
      puffNoise.stop(tGrunt + gruntDur + 0.02);
      break;
    }

    case 'moo': {
      // Friendly Dairy Cow & Calf: "Moooo-oo" with warm chest resonance
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(360, now);
      filter.frequency.linearRampToValueAtTime(240, now + 1.2);

      osc.frequency.setValueAtTime(130, now);
      osc.frequency.linearRampToValueAtTime(118, now + 0.4);
      osc.frequency.linearRampToValueAtTime(95, now + 1.3);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.28, now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 1.45);
      break;
    }

    case 'baa': {
      // Sweet Sheep & Lamb: "Baaa-aa-aa" with 11Hz vocal flutter vibrato
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(290, now);
      osc.frequency.linearRampToValueAtTime(250, now + 0.85);

      lfo.frequency.setValueAtTime(11, now);
      lfoGain.gain.setValueAtTime(24, now);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(780, now);
      filter.Q.setValueAtTime(3.2, now);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.28, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      lfo.start(now);
      osc.start(now);
      lfo.stop(now + 1.05);
      osc.stop(now + 1.05);
      break;
    }

    case 'bleat': {
      // Playful Goat & Llama: "Meh-eh-eh" with high 14Hz rapid tremolo
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(360, now);
      osc.frequency.linearRampToValueAtTime(320, now + 0.7);

      lfo.frequency.setValueAtTime(14, now);
      lfoGain.gain.setValueAtTime(28, now);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(920, now);
      filter.Q.setValueAtTime(3.0, now);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.26, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      lfo.start(now);
      osc.start(now);
      lfo.stop(now + 0.9);
      osc.stop(now + 0.9);
      break;
    }

    case 'giraffe': {
      // Giraffe (Giraffa camelopardalis): Authentic Nocturnal Harmonic Hum & Savannah Snort
      // Biologically, giraffes produce a rich nocturnal harmonic hum (~92-108 Hz) that resonates
      // through their extraordinary 2-meter trachea, alongside warm savannah breath snorts.

      // --- Part 1: Savannah Air Snort & Alert Nasal Puff (0 to 0.40s) ---
      const snortNoise = createNoiseSource(0.40);
      const snortFilter = ctx.createBiquadFilter();
      snortFilter.type = 'bandpass';
      snortFilter.frequency.setValueAtTime(380, now);
      snortFilter.frequency.linearRampToValueAtTime(520, now + 0.1);
      snortFilter.frequency.exponentialRampToValueAtTime(190, now + 0.38);
      snortFilter.Q.setValueAtTime(2.2, now);

      const snortGain = ctx.createGain();
      snortGain.gain.setValueAtTime(0.01, now);
      snortGain.gain.linearRampToValueAtTime(0.24, now + 0.06);
      snortGain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

      snortNoise.connect(snortFilter);
      snortFilter.connect(snortGain);
      snortGain.connect(ctx.destination);

      const chestPulse = ctx.createOscillator();
      const pulseGain = ctx.createGain();
      chestPulse.type = 'sine';
      chestPulse.frequency.setValueAtTime(65, now);
      chestPulse.frequency.exponentialRampToValueAtTime(42, now + 0.32);

      pulseGain.gain.setValueAtTime(0.01, now);
      pulseGain.gain.linearRampToValueAtTime(0.22, now + 0.04);
      pulseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      chestPulse.connect(pulseGain);
      pulseGain.connect(ctx.destination);

      snortNoise.start(now);
      chestPulse.start(now);
      snortNoise.stop(now + 0.40);
      chestPulse.stop(now + 0.38);

      // --- Part 2: Nocturnal Long-Neck Resonant Harmonic Hum (0.35 to 2.45s) ---
      const tHum = now + 0.35;
      const humDur = 2.1;

      // 4-Stage harmonic organ pipe overtones created by the elongated 2-meter trachea
      const oscF0 = ctx.createOscillator();
      const oscF1 = ctx.createOscillator();
      const oscF2 = ctx.createOscillator();
      const oscF3 = ctx.createOscillator();

      oscF0.type = 'sine';
      oscF1.type = 'triangle';
      oscF2.type = 'sine';
      oscF3.type = 'sine';

      // Pitch contour: gentle swelling rise from 94Hz to 106Hz, subtle wave, resolving at 88Hz
      oscF0.frequency.setValueAtTime(94, tHum);
      oscF0.frequency.linearRampToValueAtTime(106, tHum + 0.6);
      oscF0.frequency.linearRampToValueAtTime(102, tHum + 1.2);
      oscF0.frequency.exponentialRampToValueAtTime(88, tHum + humDur);

      oscF1.frequency.setValueAtTime(188, tHum);
      oscF1.frequency.linearRampToValueAtTime(212, tHum + 0.6);
      oscF1.frequency.linearRampToValueAtTime(204, tHum + 1.2);
      oscF1.frequency.exponentialRampToValueAtTime(176, tHum + humDur);

      oscF2.frequency.setValueAtTime(282, tHum);
      oscF2.frequency.linearRampToValueAtTime(318, tHum + 0.6);
      oscF2.frequency.exponentialRampToValueAtTime(264, tHum + humDur);

      oscF3.frequency.setValueAtTime(376, tHum);
      oscF3.frequency.linearRampToValueAtTime(424, tHum + 0.6);
      oscF3.frequency.exponentialRampToValueAtTime(352, tHum + humDur);

      // Slow 3.8 Hz gentle respiratory wave LFO
      const humLfo = ctx.createOscillator();
      const humLfoGain = ctx.createGain();
      humLfo.frequency.setValueAtTime(3.8, tHum);
      humLfoGain.gain.setValueAtTime(3.5, tHum);
      humLfo.connect(humLfoGain);
      humLfoGain.connect(oscF0.frequency);
      humLfoGain.connect(oscF1.frequency);

      // Trachea pipe resonance filters (simulates the long acoustic air column)
      const pipeFilter = ctx.createBiquadFilter();
      pipeFilter.type = 'lowpass';
      pipeFilter.frequency.setValueAtTime(340, tHum);
      pipeFilter.Q.setValueAtTime(3.2, tHum);

      const pharynxFilter = ctx.createBiquadFilter();
      pharynxFilter.type = 'peaking';
      pharynxFilter.frequency.setValueAtTime(195, tHum);
      pharynxFilter.gain.setValueAtTime(6.5, tHum);
      pharynxFilter.Q.setValueAtTime(2.0, tHum);

      const humGain = ctx.createGain();
      humGain.gain.setValueAtTime(0.01, tHum);
      humGain.gain.linearRampToValueAtTime(0.34, tHum + 0.35);
      humGain.gain.linearRampToValueAtTime(0.36, tHum + 1.2);
      humGain.gain.exponentialRampToValueAtTime(0.001, tHum + humDur);

      // Gain balancing for partials
      const gF0 = ctx.createGain();
      const gF1 = ctx.createGain();
      const gF2 = ctx.createGain();
      const gF3 = ctx.createGain();

      gF0.gain.setValueAtTime(0.55, tHum);
      gF1.gain.setValueAtTime(0.35, tHum);
      gF2.gain.setValueAtTime(0.18, tHum);
      gF3.gain.setValueAtTime(0.10, tHum);

      oscF0.connect(gF0);
      oscF1.connect(gF1);
      oscF2.connect(gF2);
      oscF3.connect(gF3);

      gF0.connect(pipeFilter);
      gF1.connect(pipeFilter);
      gF2.connect(pipeFilter);
      gF3.connect(pipeFilter);

      pipeFilter.connect(pharynxFilter);
      pharynxFilter.connect(humGain);
      humGain.connect(ctx.destination);

      // Trailing night air whisper
      const breathNoise = createNoiseSource(0.55);
      const breathFilter = ctx.createBiquadFilter();
      breathFilter.type = 'lowpass';
      breathFilter.frequency.setValueAtTime(220, tHum + 1.4);

      const breathGain = ctx.createGain();
      breathGain.gain.setValueAtTime(0.001, tHum + 1.4);
      breathGain.gain.linearRampToValueAtTime(0.10, tHum + 1.7);
      breathGain.gain.exponentialRampToValueAtTime(0.001, tHum + humDur + 0.1);

      breathNoise.connect(breathFilter);
      breathFilter.connect(breathGain);
      breathGain.connect(ctx.destination);

      oscF0.start(tHum);
      oscF1.start(tHum);
      oscF2.start(tHum);
      oscF3.start(tHum);
      humLfo.start(tHum);
      breathNoise.start(tHum + 1.4);

      const tHumStop = tHum + humDur + 0.05;
      oscF0.stop(tHumStop);
      oscF1.stop(tHumStop);
      oscF2.stop(tHumStop);
      oscF3.stop(tHumStop);
      humLfo.stop(tHumStop);
      breathNoise.stop(tHumStop + 0.1);
      break;
    }

    case 'neigh': {
      // Domestic Horse & Zebra: Galloping whinny with 14Hz flutter and trailing breath snort
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(620, now);
      osc.frequency.linearRampToValueAtTime(780, now + 0.28);
      osc.frequency.exponentialRampToValueAtTime(380, now + 1.15);

      lfo.frequency.setValueAtTime(14, now);
      lfoGain.gain.setValueAtTime(36, now);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1250, now);
      filter.Q.setValueAtTime(2.4, now);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.34, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      lfo.start(now);
      osc.start(now);
      lfo.stop(now + 1.25);
      osc.stop(now + 1.25);
      break;
    }

    case 'croak': {
      // Rainforest Tree Frog & Bullfrog: Deep resonant "Ribbit... Ribbit!"
      [0, 0.22].forEach((offset) => {
        const t = now + offset;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(175, t);
        osc.frequency.linearRampToValueAtTime(120, t + 0.14);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(360, t);
        filter.Q.setValueAtTime(2.2, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.28, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.18);
      });
      break;
    }

    case 'quack': {
      // Mallard Duck: Resonant nasal double "Quack... Quack!"
      [0, 0.24].forEach((offset) => {
        const t = now + offset;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(390, t);
        osc.frequency.linearRampToValueAtTime(260, t + 0.16);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(820, t);
        filter.Q.setValueAtTime(2.8, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.28, t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.2);
      });
      break;
    }

    case 'crow': {
      // Rooster "Cock-a-Doodle-Doo!" or Crow "Caw-Caw"
      const notes = [
        { t: 0, dur: 0.18, fStart: 390, fEnd: 470 },
        { t: 0.22, dur: 0.22, fStart: 550, fEnd: 630 },
        { t: 0.48, dur: 0.25, fStart: 490, fEnd: 570 },
        { t: 0.76, dur: 0.95, fStart: 730, fEnd: 540 }
      ];

      notes.forEach(({ t, dur, fStart, fEnd }) => {
        const noteTime = now + t;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(fStart, noteTime);
        osc.frequency.exponentialRampToValueAtTime(fEnd, noteTime + dur);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1100, noteTime);
        filter.Q.setValueAtTime(2.0, noteTime);

        gain.gain.setValueAtTime(0.01, noteTime);
        gain.gain.linearRampToValueAtTime(0.28, noteTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, noteTime + dur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(noteTime);
        osc.stop(noteTime + dur + 0.02);
      });
      break;
    }

    case 'cluck': {
      // Domestic Hen: Rhythmic "bawk... bawk-bawk!"
      [0, 0.24, 0.42].forEach((offset, idx) => {
        const t = now + offset;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        const baseFreq = idx === 0 ? 530 : 490;
        osc.frequency.setValueAtTime(baseFreq, t);
        osc.frequency.exponentialRampToValueAtTime(320, t + 0.14);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(820, t);
        filter.Q.setValueAtTime(2.6, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.25, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.16);
      });
      break;
    }

    case 'penguin': {
      // Emperor Penguin (Aptenodytes forsteri): Antarctic Colony Syringeal "Two-Voice" Trumpet & Bray
      // Emperor penguins vocalize using a unique two-voice system (dual syrinx membranes producing
      // beating acoustic interference at ~35-45 Hz), creating an unmistakable brassy, metallic trumpet bray.

      // --- Part 1: Introductory Contact Call "Awk!" (now to now + 0.30s) ---
      const introVoice1 = ctx.createOscillator();
      const introVoice2 = ctx.createOscillator();
      const introFilter = ctx.createBiquadFilter();
      const introGain = ctx.createGain();

      introVoice1.type = 'sawtooth';
      introVoice2.type = 'triangle';

      introVoice1.frequency.setValueAtTime(390, now);
      introVoice1.frequency.exponentialRampToValueAtTime(510, now + 0.12);
      introVoice1.frequency.exponentialRampToValueAtTime(360, now + 0.28);

      introVoice2.frequency.setValueAtTime(435, now);
      introVoice2.frequency.exponentialRampToValueAtTime(560, now + 0.12);
      introVoice2.frequency.exponentialRampToValueAtTime(405, now + 0.28);

      introFilter.type = 'bandpass';
      introFilter.frequency.setValueAtTime(840, now);
      introFilter.Q.setValueAtTime(2.8, now);

      introGain.gain.setValueAtTime(0.01, now);
      introGain.gain.linearRampToValueAtTime(0.26, now + 0.05);
      introGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      introVoice1.connect(introFilter);
      introVoice2.connect(introFilter);
      introFilter.connect(introGain);
      introGain.connect(ctx.destination);

      introVoice1.start(now);
      introVoice2.start(now);
      introVoice1.stop(now + 0.30);
      introVoice2.stop(now + 0.30);

      // --- Part 2: Ecstatic Display Trumpet Bray (now + 0.36s to now + 1.65s) ---
      const tMain = now + 0.36;
      const mainDur = 1.25;

      // Two-voice bifurcated syrinx fundamentals (Voice A & Voice B create natural acoustic beating)
      const syrinxA = ctx.createOscillator();
      const syrinxB = ctx.createOscillator();
      const overtoneHarm = ctx.createOscillator();

      syrinxA.type = 'sawtooth';
      syrinxB.type = 'sawtooth';
      overtoneHarm.type = 'triangle';

      // Pitch trajectory: soaring bray up to peak, undulating hold, dramatic Antarctic squawk resolution
      syrinxA.frequency.setValueAtTime(420, tMain);
      syrinxA.frequency.exponentialRampToValueAtTime(540, tMain + 0.32);
      syrinxA.frequency.linearRampToValueAtTime(505, tMain + 0.72);
      syrinxA.frequency.exponentialRampToValueAtTime(565, tMain + 0.95);
      syrinxA.frequency.exponentialRampToValueAtTime(320, tMain + mainDur);

      // Syringeal Voice B offset by ~42 Hz for acoustic interference beating
      syrinxB.frequency.setValueAtTime(462, tMain);
      syrinxB.frequency.exponentialRampToValueAtTime(584, tMain + 0.32);
      syrinxB.frequency.linearRampToValueAtTime(548, tMain + 0.72);
      syrinxB.frequency.exponentialRampToValueAtTime(608, tMain + 0.95);
      syrinxB.frequency.exponentialRampToValueAtTime(355, tMain + mainDur);

      // Octave harmonic sheen
      overtoneHarm.frequency.setValueAtTime(920, tMain);
      overtoneHarm.frequency.exponentialRampToValueAtTime(1120, tMain + 0.32);
      overtoneHarm.frequency.linearRampToValueAtTime(1050, tMain + 0.72);
      overtoneHarm.frequency.exponentialRampToValueAtTime(680, tMain + mainDur);

      // 32 Hz syringeal amplitude flutter modulation (braying tremolo)
      const brayLfo = ctx.createOscillator();
      const brayLfoGain = ctx.createGain();
      brayLfo.frequency.setValueAtTime(32, tMain);
      brayLfoGain.gain.setValueAtTime(18, tMain);
      brayLfo.connect(brayLfoGain);
      brayLfoGain.connect(syrinxA.frequency);
      brayLfoGain.connect(syrinxB.frequency);

      // Dual vocal cavity filters:
      // 1. Pharyngeal bandpass filter (throat horn resonance)
      const pharynxFilter = ctx.createBiquadFilter();
      pharynxFilter.type = 'bandpass';
      pharynxFilter.frequency.setValueAtTime(920, tMain);
      pharynxFilter.frequency.linearRampToValueAtTime(1150, tMain + 0.4);
      pharynxFilter.frequency.exponentialRampToValueAtTime(740, tMain + mainDur);
      pharynxFilter.Q.setValueAtTime(2.6, tMain);

      // 2. Beak peaking filter (metallic horn timbre that cuts through polar blizzards)
      const beakFilter = ctx.createBiquadFilter();
      beakFilter.type = 'peaking';
      beakFilter.frequency.setValueAtTime(1850, tMain);
      beakFilter.gain.setValueAtTime(7.5, tMain);
      beakFilter.Q.setValueAtTime(2.0, tMain);

      const mainGain = ctx.createGain();
      mainGain.gain.setValueAtTime(0.01, tMain);
      mainGain.gain.linearRampToValueAtTime(0.32, tMain + 0.12);
      mainGain.gain.linearRampToValueAtTime(0.35, tMain + 0.95);
      mainGain.gain.exponentialRampToValueAtTime(0.001, tMain + mainDur);

      syrinxA.connect(pharynxFilter);
      syrinxB.connect(pharynxFilter);
      overtoneHarm.connect(pharynxFilter);
      pharynxFilter.connect(beakFilter);
      beakFilter.connect(mainGain);
      mainGain.connect(ctx.destination);

      // Breath and ice wind hiss as the penguin finishes the ecstatic display
      const breathNoise = createNoiseSource(0.5);
      const breathFilter = ctx.createBiquadFilter();
      breathFilter.type = 'bandpass';
      breathFilter.frequency.setValueAtTime(1400, tMain + 0.8);
      breathFilter.Q.setValueAtTime(1.5, tMain + 0.8);

      const breathGain = ctx.createGain();
      breathGain.gain.setValueAtTime(0.001, tMain + 0.8);
      breathGain.gain.linearRampToValueAtTime(0.12, tMain + 1.0);
      breathGain.gain.exponentialRampToValueAtTime(0.001, tMain + mainDur + 0.1);

      breathNoise.connect(breathFilter);
      breathFilter.connect(breathGain);
      breathGain.connect(ctx.destination);

      syrinxA.start(tMain);
      syrinxB.start(tMain);
      overtoneHarm.start(tMain);
      brayLfo.start(tMain);
      breathNoise.start(tMain + 0.8);

      const tStop = tMain + mainDur + 0.05;
      syrinxA.stop(tStop);
      syrinxB.stop(tStop);
      overtoneHarm.stop(tStop);
      brayLfo.stop(tStop);
      breathNoise.stop(tStop + 0.08);
      break;
    }

    case 'honk': {
      // Goose & Penguin: Resonant double-honk
      [0, 0.28].forEach((offset) => {
        const t = now + offset;
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc1.type = 'sawtooth';
        osc2.type = 'triangle';

        osc1.frequency.setValueAtTime(410, t);
        osc1.frequency.linearRampToValueAtTime(320, t + 0.22);
        osc2.frequency.setValueAtTime(820, t);
        osc2.frequency.linearRampToValueAtTime(640, t + 0.22);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(860, t);
        filter.Q.setValueAtTime(3.0, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.28, t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(t);
        osc2.start(t);
        osc1.stop(t + 0.24);
        osc2.stop(t + 0.24);
      });
      break;
    }

    case 'hoot': {
      // Night Owl: "Hoo... Hoo-hoooo"
      const notes = [
        { start: 0, dur: 0.24, freq: 360 },
        { start: 0.34, dur: 0.18, freq: 330 },
        { start: 0.56, dur: 0.48, freq: 380 }
      ];

      notes.forEach(({ start, dur, freq }) => {
        const t = now + start;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);
        osc.frequency.exponentialRampToValueAtTime(freq - 25, t + dur);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.26, t + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + dur + 0.05);
      });
      break;
    }

    case 'chirp': {
      // Cheerful Songbird Melodic Trill
      [0, 0.12, 0.26, 0.38].forEach((offset, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const t = now + offset;
        const freqs = [2100, 3100, 2400, 3400];
        osc.frequency.setValueAtTime(freqs[idx % freqs.length], t);
        osc.frequency.exponentialRampToValueAtTime(freqs[idx % freqs.length] + 600, t + 0.04);
        osc.frequency.exponentialRampToValueAtTime(freqs[idx % freqs.length] - 200, t + 0.09);

        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.11);
      });
      break;
    }

    case 'buzz': {
      // Busy Honeybee: Modulated wing hum
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(235, now);
      osc.frequency.linearRampToValueAtTime(265, now + 0.3);
      osc.frequency.linearRampToValueAtTime(215, now + 0.7);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.85);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.85);
      break;
    }

    case 'hiss': {
      // Snake & Reptile Sibilant Hiss with tongue flick
      const noise = createNoiseSource(0.9);
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(3900, now);
      filter.Q.setValueAtTime(2.6, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.24, now + 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now);
      noise.stop(now + 0.9);
      break;
    }

    case 'growl': {
      // Polar Bear & Grizzly Bear (Ursidae): Massive Guttural Chest Growl, Snout Chuff & Laryngeal Snarl
      // Phase 1 (0 to 0.42s): Explosive nasal air huff & diaphragmatic chest punch
      // Phase 2 (0.35 to 1.85s): Deep guttural throat growl with 20Hz epiglottal rattle & 36Hz sub-bass
      // Phase 3 (1.75 to 2.30s): Heavy aggressive breath expulsion & menacing snout release

      const growlDur = 2.25;

      // --- 1. Initial Explosive Nasal Huff / Chuff (0 to 0.42s) ---
      const huffNoise = createNoiseSource(0.42);
      const huffFilter = ctx.createBiquadFilter();
      huffFilter.type = 'bandpass';
      huffFilter.frequency.setValueAtTime(320, now);
      huffFilter.frequency.linearRampToValueAtTime(640, now + 0.12);
      huffFilter.frequency.exponentialRampToValueAtTime(240, now + 0.42);
      huffFilter.Q.setValueAtTime(2.2, now);

      const huffGain = ctx.createGain();
      huffGain.gain.setValueAtTime(0.01, now);
      huffGain.gain.linearRampToValueAtTime(0.32, now + 0.08);
      huffGain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);

      huffNoise.connect(huffFilter);
      huffFilter.connect(huffGain);
      huffGain.connect(ctx.destination);

      const chestThump = ctx.createOscillator();
      const thumpGain = ctx.createGain();
      chestThump.type = 'sine';
      chestThump.frequency.setValueAtTime(85, now);
      chestThump.frequency.exponentialRampToValueAtTime(42, now + 0.35);

      thumpGain.gain.setValueAtTime(0.01, now);
      thumpGain.gain.linearRampToValueAtTime(0.35, now + 0.04);
      thumpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

      chestThump.connect(thumpGain);
      thumpGain.connect(ctx.destination);

      chestThump.start(now);
      huffNoise.start(now);
      chestThump.stop(now + 0.40);
      huffNoise.stop(now + 0.44);

      // --- 2. Deep Guttural Throat Growl & Sub-Bass (0.35 to 1.85s) ---
      const tGrowl = now + 0.35;
      const gDur = 1.55;

      // Fundamental vocal folds (Sawtooth for rich raspiness)
      const oscVocal = ctx.createOscillator();
      const oscThroat = ctx.createOscillator();
      const oscSub = ctx.createOscillator();

      oscVocal.type = 'sawtooth';
      oscThroat.type = 'triangle';
      oscSub.type = 'sine';

      // Pitch arc: low chest grunt (64Hz) surging into menacing growl (88Hz) and settling deep (48Hz)
      oscVocal.frequency.setValueAtTime(64, tGrowl);
      oscVocal.frequency.linearRampToValueAtTime(88, tGrowl + 0.35);
      oscVocal.frequency.linearRampToValueAtTime(82, tGrowl + 0.95);
      oscVocal.frequency.exponentialRampToValueAtTime(48, tGrowl + gDur);

      oscThroat.frequency.setValueAtTime(128, tGrowl);
      oscThroat.frequency.linearRampToValueAtTime(176, tGrowl + 0.35);
      oscThroat.frequency.linearRampToValueAtTime(164, tGrowl + 0.95);
      oscThroat.frequency.exponentialRampToValueAtTime(96, tGrowl + gDur);

      // Sub-bass body mass vibration (36Hz)
      oscSub.frequency.setValueAtTime(36, tGrowl);
      oscSub.frequency.linearRampToValueAtTime(44, tGrowl + 0.4);
      oscSub.frequency.exponentialRampToValueAtTime(28, tGrowl + gDur);

      // 20 Hz epiglottal throat flutter (vocal cord raspy rattle)
      const flutterLfo = ctx.createOscillator();
      const flutterGain = ctx.createGain();
      flutterLfo.frequency.setValueAtTime(20, tGrowl);
      flutterGain.gain.setValueAtTime(14, tGrowl);
      flutterLfo.connect(flutterGain);
      flutterGain.connect(oscVocal.frequency);
      flutterGain.connect(oscThroat.frequency);

      // Resonant throat and chest cavity filter
      const chestFilter = ctx.createBiquadFilter();
      chestFilter.type = 'lowpass';
      chestFilter.frequency.setValueAtTime(260, tGrowl);
      chestFilter.frequency.linearRampToValueAtTime(420, tGrowl + 0.45);
      chestFilter.frequency.exponentialRampToValueAtTime(180, tGrowl + gDur);
      chestFilter.Q.setValueAtTime(2.4, tGrowl);

      // Snarl presence filter (aggressive teeth & palate resonance)
      const snarlFilter = ctx.createBiquadFilter();
      snarlFilter.type = 'peaking';
      snarlFilter.frequency.setValueAtTime(680, tGrowl);
      snarlFilter.gain.setValueAtTime(6.0, tGrowl);
      snarlFilter.Q.setValueAtTime(1.8, tGrowl);

      const mainGrowlGain = ctx.createGain();
      mainGrowlGain.gain.setValueAtTime(0.01, tGrowl);
      mainGrowlGain.gain.linearRampToValueAtTime(0.38, tGrowl + 0.22);
      mainGrowlGain.gain.linearRampToValueAtTime(0.35, tGrowl + 0.95);
      mainGrowlGain.gain.exponentialRampToValueAtTime(0.001, tGrowl + gDur);

      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(0.01, tGrowl);
      subGain.gain.linearRampToValueAtTime(0.28, tGrowl + 0.25);
      subGain.gain.exponentialRampToValueAtTime(0.001, tGrowl + gDur);

      oscVocal.connect(chestFilter);
      oscThroat.connect(chestFilter);
      chestFilter.connect(snarlFilter);
      snarlFilter.connect(mainGrowlGain);
      mainGrowlGain.connect(ctx.destination);

      oscSub.connect(subGain);
      subGain.connect(ctx.destination);

      // --- 3. Rough Throat Turbulence Noise Layer ---
      const throatNoise = createNoiseSource(gDur);
      const throatNoiseFilter = ctx.createBiquadFilter();
      throatNoiseFilter.type = 'bandpass';
      throatNoiseFilter.frequency.setValueAtTime(280, tGrowl);
      throatNoiseFilter.Q.setValueAtTime(2.0, tGrowl);

      const throatNoiseGain = ctx.createGain();
      throatNoiseGain.gain.setValueAtTime(0.01, tGrowl);
      throatNoiseGain.gain.linearRampToValueAtTime(0.18, tGrowl + 0.3);
      throatNoiseGain.gain.exponentialRampToValueAtTime(0.001, tGrowl + gDur);

      throatNoise.connect(throatNoiseFilter);
      throatNoiseFilter.connect(throatNoiseGain);
      throatNoiseGain.connect(ctx.destination);

      oscVocal.start(tGrowl);
      oscThroat.start(tGrowl);
      oscSub.start(tGrowl);
      flutterLfo.start(tGrowl);
      throatNoise.start(tGrowl);

      const tGrowlStop = tGrowl + gDur + 0.05;
      oscVocal.stop(tGrowlStop);
      oscThroat.stop(tGrowlStop);
      oscSub.stop(tGrowlStop);
      flutterLfo.stop(tGrowlStop);
      throatNoise.stop(tGrowlStop);

      // --- 4. Final Threat Exhalation / Snout Chuff (1.75 to 2.25s) ---
      const tEnd = now + 1.75;
      const endNoise = createNoiseSource(0.5);
      const endFilter = ctx.createBiquadFilter();
      endFilter.type = 'lowpass';
      endFilter.frequency.setValueAtTime(320, tEnd);
      endFilter.frequency.exponentialRampToValueAtTime(90, tEnd + 0.5);

      const endGain = ctx.createGain();
      endGain.gain.setValueAtTime(0.01, tEnd);
      endGain.gain.linearRampToValueAtTime(0.16, tEnd + 0.1);
      endGain.gain.exponentialRampToValueAtTime(0.001, tEnd + 0.5);

      endNoise.connect(endFilter);
      endFilter.connect(endGain);
      endGain.connect(ctx.destination);

      endNoise.start(tEnd);
      endNoise.stop(tEnd + 0.52);
      break;
    }

    case 'bray': {
      // Domestic Donkey: "Hee-Haw... Hee-Haw!"
      const brays = [
        { start: 0, dur: 0.28, freq: 580, high: true },
        { start: 0.32, dur: 0.45, freq: 240, high: false },
        { start: 0.82, dur: 0.28, freq: 610, high: true },
        { start: 1.14, dur: 0.55, freq: 220, high: false }
      ];

      brays.forEach(({ start, dur, freq, high }) => {
        const t = now + start;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, t);
        osc.frequency.linearRampToValueAtTime(high ? freq + 60 : freq - 40, t + dur);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(high ? 1300 : 650, t);
        filter.Q.setValueAtTime(3.0, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(high ? 0.3 : 0.35, t + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + dur + 0.02);
      });
      break;
    }

    case 'oink': {
      // Playful Farm Pig: Double resonant grunt "Oink... Oink!"
      [0, 0.24].forEach((offset) => {
        const t = now + offset;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(260, t);
        osc.frequency.exponentialRampToValueAtTime(155, t + 0.16);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(430, t);
        filter.Q.setValueAtTime(2.8, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.3, t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.2);
      });
      break;
    }

    case 'snort': {
      // Rhino / Gazelle / Buffalo: Deep breathy snort & puff
      const noise = createNoiseSource(0.48);
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(460, now);
      filter.frequency.linearRampToValueAtTime(180, now + 0.4);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.32, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now);
      noise.stop(now + 0.48);
      break;
    }

    case 'splash': {
      // Aquatic & Turtle: Gentle water droplet plop & bubble
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.18);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
      break;
    }

    case 'squeak':
    default: {
      // Playful Baby Chick / Mouse squeak
      [0, 0.14].forEach((offset) => {
        const t = now + offset;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(2200, t);
        osc.frequency.exponentialRampToValueAtTime(3200, t + 0.04);
        osc.frequency.exponentialRampToValueAtTime(1800, t + 0.09);

        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.11);
      });
      break;
    }
  }
}
