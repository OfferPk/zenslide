/**
 * ZenSlide - Synthesized Web Audio & Haptics Engine
 * 100% offline procedural audio using standard Web Audio API.
 */

class ZenSlideAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    try {
      const saved = localStorage.getItem('zenslide_sound_enabled');
      if (saved !== null) {
        this.enabled = saved === 'true';
      }
    } catch (e) {
      this.enabled = true;
    }
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    try {
      localStorage.setItem('zenslide_sound_enabled', String(this.enabled));
    } catch (e) {}
    if (this.enabled) {
      this.playTap();
    }
    return this.enabled;
  }

  vibrate(ms = 15) {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(ms);
      } catch (e) {}
    }
  }

  /**
   * Tactile wooden/thud slide click
   */
  playSlide(isKey = false) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const freq = isKey ? 420 : 280 + Math.random() * 40;
      osc.type = isKey ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, now + 0.06);

      gain.gain.setValueAtTime(isKey ? 0.15 : 0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
      this.vibrate(isKey ? 20 : 12);
    } catch (e) {}
  }

  /**
   * Subtle button tap
   */
  playTap() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.04);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
      this.vibrate(10);
    } catch (e) {}
  }

  /**
   * Hint chime
   */
  playHint() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [587.33, 880.00, 1174.66].forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = now + idx * 0.07;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, t);

        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + 0.3);
      });
      this.vibrate(25);
    } catch (e) {}
  }

  /**
   * Victory Fanfare
   */
  playVictory(isPerfect = true) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [
        [392.00, 0.00], // G4
        [523.25, 0.12], // C5
        [659.25, 0.24], // E5
        [783.99, 0.36], // G5
        [1046.50, 0.48] // C6
      ];

      notes.forEach(([f, delay]) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = now + delay;

        osc.type = isPerfect ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f, t);

        const dur = delay >= 0.48 ? 0.7 : 0.25;
        gain.gain.setValueAtTime(0.14, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + dur);
      });

      this.vibrate(isPerfect ? [50, 40, 70, 50, 120] : [40, 40, 80]);
    } catch (e) {}
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ZenSlideAudio };
}
if (typeof window !== 'undefined') {
  window.ZenSlideAudio = ZenSlideAudio;
}
