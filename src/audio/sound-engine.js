/* ???????????????????????????????????????????????????????
   Twitero v15 ? src/audio/sound-engine.js
   Sintetizador Web Audio API realista (card flip con ruido blanco filtrado, dados, clics)
   ??????????????????????????????????????????????????????? */

class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  _go() {
    try {
      if (!this.ctx) {
        const A = window.AudioContext || window.webkitAudioContext;
        this.ctx = A ? new A() : null;
      }
      if (this.ctx?.state === "suspended") {
        this.ctx.resume().catch(() => {});
      }
    } catch(e) {}
  }

  _note(f, type, dur, vol=0.13, d=0) {
    if(!this.ctx) return;
    if (this.sfxEnabled === false) return;
    const effectiveVol = vol * (this.sfxVolume !== undefined ? this.sfxVolume : 0.8);
    try {
      const t = this.ctx.currentTime + d;
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(effectiveVol, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g);
      g.connect(this.ctx.destination);
      o.start(t);
      o.stop(t + dur);
    } catch(e) {}
  }

  click() {
    this._go();
    this._note(750, "sine", 0.04, 0.08);
  }

  cardFlip(i = 0) {
    this._go();
    if (!this.ctx) return;
    if (this.sfxEnabled === false) return;
    try {
      const t = this.ctx.currentTime;
      // Buffer de ruido blanco
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.07); // 70ms
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let j = 0; j < bufferSize; j++) {
        data[j] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      // Filtro paso banda para darle textura de papel/cartulina deslizándose
      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1400 + i * 180, t);
      filter.Q.setValueAtTime(2.2, t);

      const effectiveVol = 0.18 * (this.sfxVolume !== undefined ? this.sfxVolume : 0.8);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(effectiveVol, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.065);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(t);

      // Micro chasquido sutil de naipe
      this._note(520 + i * 50, "sine", 0.03, 0.04, 0.01);
    } catch(e) {
      // Fallback armónico si el buffer falla
      this._note(480 + i * 60, "triangle", 0.05, 0.07);
    }
  }

  roll() {
    this._go();
    for (let i = 0; i < 5; i++) {
      this._note(120 + i * 30, "triangle", 0.05, 0.09, i * 0.06);
    }
  }

  success() {
    this._go();
    [524, 659, 784, 1046].forEach((f, i) => this._note(f, "sine", 0.28, 0.16, i * 0.08));
  }

  fail() {
    this._go();
    this._note(220, "sawtooth", 0.16, 0.18);
    this._note(145, "sawtooth", 0.14, 0.14, 0.15);
  }

  alert() {
    this._go();
    [660, 880, 1100].forEach((f, i) => this._note(f, "square", 0.11, 0.14, i * 0.09));
  }

  boost() {
    this._go();
    [330, 440, 550, 660, 880].forEach((f, i) => this._note(f, "sine", 0.14, 0.16, i * 0.045));
  }

  legend() {
    this._go();
    [440, 554, 659, 880, 1108, 1318].forEach((f, i) => this._note(f, "triangle", 0.38, 0.20, i * 0.08));
  }

  // Alias — keeps compatibility with older calls to snd.legendary()
  legendary() { this.legend(); }

  // ── Fanfarria triunfal de trompetas sintetizadas (Final del juego) ──
  fanfare() {
    this._go();
    if (!this.ctx) return;
    // Secuencia heróica: C4, E4, G4, C5 con doble golpe y acorde sostenido final brillante
    const notes = [
      { f: 523.25, d: 0.00, dur: 0.15, vol: 0.20 }, // C5
      { f: 659.25, d: 0.14, dur: 0.15, vol: 0.20 }, // E5
      { f: 783.99, d: 0.28, dur: 0.18, vol: 0.22 }, // G5
      { f: 1046.50, d: 0.46, dur: 0.65, vol: 0.25 }, // C6 (brillante triunfal)
      { f: 783.99, d: 0.46, dur: 0.60, vol: 0.18 }, // Armónico G5
      { f: 523.25, d: 0.46, dur: 0.60, vol: 0.18 }, // Armónico C5
    ];
    notes.forEach(n => {
      this._note(n.f, "triangle", n.dur, n.vol, n.d);
      this._note(n.f * 1.002, "sawtooth", n.dur * 0.7, n.vol * 0.35, n.d); // textura metálica de bronce
    });
  }

  // ── Feed scroll sound (Opción 2: Soft Air Whoosh) ──
  tick(speed = 1) {
    this._go();
    if (!this.ctx) return;
    if (this.sfxEnabled === false) return;
    try {
      const c = this.ctx;
      const t = c.currentTime;
      const bSize = Math.floor(c.sampleRate * 0.04);
      const buf = c.createBuffer(1, bSize, c.sampleRate);
      const data = buf.getChannelData(0);
      for (let j = 0; j < bSize; j++) data[j] = Math.random() * 2 - 1;
      const noise = c.createBufferSource();
      noise.buffer = buf;

      const flt = c.createBiquadFilter();
      flt.type = "bandpass";
      flt.frequency.setValueAtTime(1800 + Math.random() * 400, t);
      flt.Q.setValueAtTime(1.4, t);

      const effectiveVol = 0.13 * (this.sfxVolume !== undefined ? this.sfxVolume : 0.8);
      const g = c.createGain();
      g.gain.setValueAtTime(effectiveVol, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.038);

      noise.connect(flt);
      flt.connect(g);
      g.connect(c.destination);
      noise.start(t);
    } catch(e) {}
  }

  clunk() {
    this._go();
    this._note(140, "triangle", 0.08, 0.18);
    this._note(80, "sine", 0.12, 0.22, 0.02);
  }

  ding(index = 0) {
    this._go();
    const freqs = [587.33, 739.99, 880.00]; // D5, F#5, A5 (major triad)
    const f = freqs[index % freqs.length] || 880;
    this._note(f, "sine", 0.25, 0.18);
    this._note(f * 2, "sine", 0.18, 0.06, 0.02); // shimmer
  }

  metricFail(index = 0) {
    this._go();
    const freqs = [220, 196, 164]; // descending minor
    const f = freqs[index % freqs.length] || 180;
    this._note(f, "sawtooth", 0.12, 0.12);
  }

  // ─── LATIDO BIOLÓGICO (LUB-DUB) ──────────────────────────────
  heartbeatPulse(baseFreq = 55, vol = 0.35, bpm = 65) {
    this._go();
    if (!this.ctx) return;
    if (this.sfxEnabled === false) return;
    try {
      const now = this.ctx.currentTime;
      const effectiveBaseVol = vol * (this.sfxVolume !== undefined ? this.sfxVolume : 0.8);
      const playSinglePulse = (time, freq, dur, peakGain) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, time);
        osc.frequency.exponentialRampToValueAtTime(Math.max(25, freq * 0.5), time + dur);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(140, time);

        gain.gain.setValueAtTime(0.0001, time);
        gain.gain.exponentialRampToValueAtTime(Math.max(0.001, peakGain), time + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(time);
        osc.stop(time + dur + 0.05);
      };

      // 1. "Lub"
      playSinglePulse(now, baseFreq, 0.12, effectiveBaseVol);
      // 2. "Dub" (retraso según BPM)
      const dubDelay = Math.max(0.10, Math.min(0.16, (60 / bpm) * 0.18));
      playSinglePulse(now + dubDelay, baseFreq * 1.25, 0.09, effectiveBaseVol * 0.85);
    } catch(e) {}
  }

  // ─── IMPACTO DRAMÁTICO ("BRAAM" CINEMATOGRÁFICO) ────────────
  dramaticBraam() {
    this._go();
    if (!this.ctx) return;
    if (this.sfxEnabled === false) return;
    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc1.type = "sawtooth";
      osc1.frequency.setValueAtTime(110, now);
      osc1.frequency.exponentialRampToValueAtTime(32, now + 1.8);

      osc2.type = "sine";
      osc2.frequency.setValueAtTime(65, now);
      osc2.frequency.exponentialRampToValueAtTime(28, now + 2.0);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, now);
      filter.frequency.exponentialRampToValueAtTime(80, now + 1.6);

      const effectivePeak = 0.7 * (this.sfxVolume !== undefined ? this.sfxVolume : 0.8);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(effectivePeak, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 2.3);
      osc2.stop(now + 2.3);
    } catch(e) {}
  }

  // ─── TENSE ATMOSPHERIC CUE (PISTA NARRATIVA DESCUBIERTA) ────
  storyClueCue() {
    this._go();
    if (!this.ctx || this.sfxEnabled === false) return;
    try {
      const now = this.ctx.currentTime;
      const vol = 0.28 * (this.sfxVolume !== undefined ? this.sfxVolume : 0.8);

      // Acorde cinematográfico tenso: D3 (146.8 Hz), F#3 (185 Hz), C#4 (277.2 Hz)
      const freqs = [146.83, 185.00, 277.18];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.98, now + 1.2);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(320, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(vol * (idx === 0 ? 1.0 : 0.7), now + 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 1.25);
      });
    } catch(e) {}
  }
  // ─── MÚSICA PROCEDURAL BALATRO (SUITE 4 FASES) ─────────────
  initMusic() {
    if (this._musicInitialized) return;
    this._musicInitialized = true;
    this.musicEnabled = localStorage.getItem("twitero_music_enabled") !== "false";
    this.musicVolume = parseFloat(localStorage.getItem("twitero_music_vol") || "0.35");
    this.sfxEnabled = localStorage.getItem("twitero_sfx_enabled") !== "false";
    this.sfxVolume = parseFloat(localStorage.getItem("twitero_sfx_vol") || "0.8");
    this.currentPhase = 1;
    this._musicStep = 0;
    this._musicTimer = null;
  }

  setPhase(fase) {
    if (this.currentPhase !== fase) {
      this.currentPhase = fase;
      if (this._musicPlaying) {
        this.stopMusic();
        this.startMusic();
      }
    }
  }

  setMusicVolume(v) {
    this.musicVolume = Math.max(0, Math.min(1, v));
    localStorage.setItem("twitero_music_vol", this.musicVolume);
    if (this._musicMasterGain && this.ctx) {
      this._musicMasterGain.gain.setValueAtTime(this.musicEnabled ? this.musicVolume * 0.45 : 0, this.ctx.currentTime);
    }
  }

  setMusicEnabled(on) {
    this.musicEnabled = !!on;
    localStorage.setItem("twitero_music_enabled", this.musicEnabled);
    if (this.musicEnabled) {
      if (!this._musicPlaying) this.startMusic();
      else if (this._musicMasterGain && this.ctx) {
        this._musicMasterGain.gain.setValueAtTime(this.musicVolume * 0.45, this.ctx.currentTime);
      }
    } else {
      if (this._musicMasterGain && this.ctx) {
        this._musicMasterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      }
    }
  }

  setSfxEnabled(on) {
    this.sfxEnabled = !!on;
    localStorage.setItem("twitero_sfx_enabled", this.sfxEnabled);
  }

  setSfxVolume(v) {
    this.sfxVolume = Math.max(0, Math.min(1, v));
    localStorage.setItem("twitero_sfx_vol", this.sfxVolume);
  }

  startMusic() {
    this.initMusic();
    if (!this.musicEnabled) return;
    this._go();
    if (!this.ctx) return;
    if (this._musicPlaying) return;
    this._musicPlaying = true;
    this._musicStep = 0;

    if (!this._musicMasterGain) {
      this._musicMasterGain = this.ctx.createGain();
      this._musicMasterGain.gain.setValueAtTime(this.musicVolume * 0.45, this.ctx.currentTime);

      this._musicFilter = this.ctx.createBiquadFilter();
      this._musicFilter.type = "lowpass";
      this._musicFilter.frequency.setValueAtTime(800, this.ctx.currentTime);

      // Tremolo MUY SUTIL (profundidad 0.25 en vez de 0.7) para que no rompa en parlantes chicos
      this._tremoloLFO = this.ctx.createOscillator();
      this._tremoloLFO.frequency.setValueAtTime(3.8, this.ctx.currentTime);
      this._tremoloGain = this.ctx.createGain();
      this._tremoloGain.gain.setValueAtTime(0.35, this.ctx.currentTime);

      const tremoloDepth = this.ctx.createGain();
      tremoloDepth.gain.setValueAtTime(0.22, this.ctx.currentTime); // Trémolo suave

      this._tremoloLFO.connect(tremoloDepth);
      tremoloDepth.connect(this._tremoloGain.gain);
      this._tremoloLFO.start();

      this._musicMasterGain.connect(this._musicFilter);
      this._musicFilter.connect(this._tremoloGain);
      this._tremoloGain.connect(this.ctx.destination);
    } else {
      this._musicMasterGain.gain.setValueAtTime(this.musicVolume * 0.45, this.ctx.currentTime);
    }

    // Variaciones armónicas por fase (F1 a F4)
    const suite = {
      1: {
        bpm: 70, filter: 880,
        chords: [
          [130.81, 196.00, 233.08, 293.66, 392.00], // Cm9
          [116.54, 174.61, 233.08, 293.66, 349.23], // Bb6
          [103.83, 155.56, 207.65, 261.63, 311.13], // Abmaj7
          [98.00, 155.56, 196.00, 246.94, 311.13]   // Eb/G
        ],
        melody: [
          392.00, 0, 349.23, 0, 293.66, 0, 349.23, 392.00,
          0, 293.66, 0, 349.23, 0, 440.00, 349.23, 0,
          311.13, 0, 261.63, 0, 311.13, 0, 392.00, 0,
          293.66, 0, 246.94, 0, 293.66, 0, 349.23, 0
        ],
        bass: [
          65.41, 0, 0, 65.41, 0, 0, 77.78, 0,
          58.27, 0, 0, 58.27, 0, 0, 69.30, 0,
          51.91, 0, 0, 51.91, 0, 0, 65.41, 0,
          49.00, 0, 0, 49.00, 0, 0, 58.27, 0
        ]
      },
      2: {
        bpm: 66, filter: 750,
        chords: [
          [146.83, 220.00, 261.63, 329.63, 392.00], // Dm11
          [138.59, 207.65, 246.94, 293.66, 369.99], // C#dim7
          [130.81, 196.00, 246.94, 293.66, 369.99], // Cmaj7#11
          [123.47, 185.00, 220.00, 261.63, 329.63]  // Bm7b5
        ],
        melody: [
          0, 293.66, 0, 329.63, 293.66, 0, 261.63, 0,
          220.00, 0, 0, 246.94, 277.18, 0, 220.00, 0,
          0, 246.94, 0, 293.66, 0, 329.63, 293.66, 0,
          261.63, 0, 220.00, 0, 185.00, 0, 220.00, 0
        ],
        bass: [
          73.42, 0, 0, 0, 73.42, 0, 65.41, 0,
          69.30, 0, 0, 0, 69.30, 0, 61.74, 0,
          65.41, 0, 0, 0, 65.41, 0, 58.27, 0,
          61.74, 0, 0, 0, 61.74, 0, 55.00, 0
        ]
      },
      3: {
        bpm: 68, filter: 700,
        chords: [
          [130.81, 196.00, 233.08, 293.66, 349.23], // Cm9
          [174.61, 261.63, 311.13, 392.00, 466.16], // Fm9
          [207.65, 261.63, 311.13, 392.00, 587.33], // Abmaj7
          [196.00, 246.94, 311.13, 369.99, 415.30]  // G7alt
        ],
        melody: [
          523.25, 0, 466.16, 0, 392.00, 0, 349.23, 392.00,
          0, 466.16, 0, 523.25, 0, 622.25, 523.25, 0,
          587.33, 0, 466.16, 0, 392.00, 0, 349.23, 0,
          415.30, 0, 369.99, 0, 311.13, 0, 246.94, 0
        ],
        bass: [
          65.41, 0, 0, 65.41, 0, 0, 77.78, 0,
          87.31, 0, 0, 87.31, 0, 0, 103.83, 0,
          103.83, 0, 0, 103.83, 0, 0, 98.00, 0,
          98.00, 0, 0, 98.00, 0, 0, 82.41, 0
        ]
      },
      4: {
        bpm: 60, filter: 620,
        chords: [
          [220.00, 277.18, 329.63, 415.30], // Amaj7
          [185.00, 246.94, 311.13, 369.99], // F#m7
          [146.83, 220.00, 261.63, 329.63], // Dmaj7
          [164.81, 220.00, 293.66, 329.63]  // E7sus4
        ],
        melody: [
          415.30, 0, 369.99, 0, 329.63, 0, 277.18, 329.63,
          0, 369.99, 0, 415.30, 0, 329.63, 0, 0,
          369.99, 0, 329.63, 0, 293.66, 0, 261.63, 0,
          277.18, 0, 293.66, 0, 329.63, 0, 220.00, 0
        ],
        bass: [
          55.00, 0, 0, 0, 55.00, 0, 65.41, 0,
          46.25, 0, 0, 0, 46.25, 0, 55.00, 0,
          73.42, 0, 0, 0, 73.42, 0, 82.41, 0,
          82.41, 0, 0, 0, 82.41, 0, 73.42, 0
        ]
      }
    };

    const currentTrack = suite[this.currentPhase] || suite[1];
    if (this._musicFilter) this._musicFilter.frequency.setValueAtTime(currentTrack.filter, this.ctx.currentTime);

    const playRhodesNote = (freq, dur, vel) => {
      if (!this.ctx || freq <= 0) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      const g2 = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t);

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(freq * 3.98, t);

      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(vel, t + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

      g2.gain.setValueAtTime(vel * 0.3, t);
      g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);

      osc.connect(g);
      osc2.connect(g2);
      g.connect(this._musicMasterGain);
      g2.connect(this._musicMasterGain);

      osc.start(t);
      osc2.start(t);
      osc.stop(t + dur + 0.05);
      osc2.stop(t + 0.1);
    };

    const playSub = (freq, dur) => {
      if (!this.ctx || freq <= 0) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0.001, t);
      g.gain.linearRampToValueAtTime(0.18, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      osc.connect(g);
      g.connect(this._musicMasterGain);
      osc.start(t);
      osc.stop(t + dur + 0.05);
    };

    const playCard = () => {
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const bSize = Math.floor(this.ctx.sampleRate * 0.018);
      const b = this.ctx.createBuffer(1, bSize, this.ctx.sampleRate);
      const data = b.getChannelData(0);
      for (let i = 0; i < bSize; i++) data[i] = Math.random() * 2 - 1;
      const src = this.ctx.createBufferSource();
      src.buffer = b;
      const bp = this.ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.setValueAtTime(2200, t);
      bp.Q.setValueAtTime(1.8, t);
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.035, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.016);
      src.connect(bp);
      bp.connect(g);
      g.connect(this._musicMasterGain);
      src.start(t);
    };

    const onStep = () => {
      if (!this._musicPlaying) return;
      const bar = Math.floor(this._musicStep / 8);

      if (this._musicStep % 8 === 0) {
        const chord = currentTrack.chords[bar] || [];
        chord.forEach((f, idx) => {
          setTimeout(() => playRhodesNote(f, 2.4, 0.055), idx * 20);
        });
      }

      const mel = currentTrack.melody[this._musicStep];
      if (mel > 0) playRhodesNote(mel, 1.2, 0.11);

      const bass = currentTrack.bass[this._musicStep];
      if (bass > 0) playSub(bass, 0.75);

      if (this._musicStep % 2 === 0) playCard();

      this._musicStep = (this._musicStep + 1) % 32;
    };

    const stepMs = (60 / currentTrack.bpm / 2) * 1000;
    onStep();
    this._musicTimer = setInterval(onStep, stepMs);
  }

  stopMusic() {
    this._musicPlaying = false;
    if (this._musicTimer) {
      clearInterval(this._musicTimer);
      this._musicTimer = null;
    }
  }
}

const snd = new SoundEngine();
