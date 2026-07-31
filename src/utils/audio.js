// Robust Fetch-Blob Audio System for Instant Thai Speech Pronunciation

class SoundSystem {
  constructor() {
    this.audioCtx = null;
    this.muted = false;
    this.currentAudio = null;
    this.blobCache = new Map(); // Cache audio blobs for instant re-play
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.muted) {
      this.stopAllAudio();
    }
    return this.muted;
  }

  stopAllAudio() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  playSfx(type) {
    if (this.muted) return;
    try {
      this.initContext();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;

      if (type === 'pop' || type === 'click') {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'flip') {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(250, now);
        osc.frequency.exponentialRampToValueAtTime(550, now + 0.12);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'correct') {
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.2, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.3);
        });
      } else if (type === 'wrong') {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(140, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'fanfare') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.1);
          gain.gain.setValueAtTime(0.25, now + idx * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);
          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(now + idx * 0.1);
          osc.stop(now + idx * 0.1 + 0.4);
        });
      } else if (type === 'audioPlay') {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.15);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
      }
    } catch (e) {
      console.warn("Web Audio API effect error:", e);
    }
  }

  async speakThai(text, arg2, arg3, arg4) {
    let onStart = arg2;
    let onEnd = arg3;

    if (typeof arg2 === 'number' || arg2 === null) {
      onStart = arg3;
      onEnd = arg4;
    }

    if (this.muted) {
      if (onEnd && typeof onEnd === 'function') onEnd();
      return;
    }

    this.stopAllAudio();
    this.playSfx('audioPlay');

    if (onStart && typeof onStart === 'function') onStart();

    let hasHandledEnd = false;
    const done = () => {
      if (!hasHandledEnd) {
        hasHandledEnd = true;
        this.currentAudio = null;
        if (onEnd && typeof onEnd === 'function') onEnd();
      }
    };

    // Check if we have cached blob URL
    if (this.blobCache.has(text)) {
      const blobUrl = this.blobCache.get(text);
      this.playBlobUrl(blobUrl, done, text);
      return;
    }

    const encoded = encodeURIComponent(text);
    const urls = [
      `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=th&client=tw-ob`,
      `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=th&client=gtx`
    ];

    for (const url of urls) {
      try {
        const res = await fetch(url);
        if (res.ok) {
          const blob = await res.blob();
          if (blob.size > 500) {
            const blobUrl = URL.createObjectURL(blob);
            this.blobCache.set(text, blobUrl);
            this.playBlobUrl(blobUrl, done, text);
            return;
          }
        }
      } catch (err) {
        console.warn("Fetch audio blob failed, trying next source:", err);
      }
    }

    // Fallback strategy if fetch fails
    this.speakSpeechSynthesis(text, done);
  }

  playBlobUrl(blobUrl, done, text) {
    try {
      const audio = new Audio(blobUrl);
      this.currentAudio = audio;

      audio.onended = done;
      audio.onerror = () => {
        this.speakSpeechSynthesis(text, done);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Blob audio play error, falling back to speech synthesis:", err);
          this.speakSpeechSynthesis(text, done);
        });
      }
    } catch (e) {
      this.speakSpeechSynthesis(text, done);
    }
  }

  speakSpeechSynthesis(text, onEnd) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onEnd && typeof onEnd === 'function') onEnd();
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'th-TH';
      utterance.rate = 0.85;
      utterance.pitch = 1.0;

      const voices = window.speechSynthesis.getVoices();
      const thaiVoice = voices.find(
        (v) => v.lang === 'th-TH' || v.lang === 'th_TH' || v.lang.startsWith('th')
      );
      if (thaiVoice) {
        utterance.voice = thaiVoice;
      }

      utterance.onend = () => { if (onEnd && typeof onEnd === 'function') onEnd(); };
      utterance.onerror = () => { if (onEnd && typeof onEnd === 'function') onEnd(); };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      if (onEnd && typeof onEnd === 'function') onEnd();
    }
  }
}

export const soundSystem = new SoundSystem();
