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
    try {
      const t = this.ctx.currentTime + d;
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(vol, t);
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

  // ?? SONIDO DE NAIPE / PAPEL REALISTA (Ruido blanco breve con filtro paso banda) ??
  cardFlip(i = 0) {
    this._go();
    if (!this.ctx) return;
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

      // Filtro paso banda para darle textura de papel/cartulina desliz?ndose
      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1400 + i * 180, t);
      filter.Q.setValueAtTime(2.2, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.065);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(t);

      // Micro chasquido sutil de naipe
      this._note(520 + i * 50, "sine", 0.03, 0.04, 0.01);
    } catch(e) {
      // Fallback arm?nico si el buffer falla
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

  // ── Feed scroll sound (Opción 2: Soft Air Whoosh) ──
  tick(speed = 1) {
    this._go();
    if (!this.ctx) return;
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

      const g = c.createGain();
      g.gain.setValueAtTime(0.13, t);
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
}

const snd = new SoundEngine();
