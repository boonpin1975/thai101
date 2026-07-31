// Multi-Engine Audio System with ResponsiveVoice + Google TTS + Web Speech Fallbacks

class SoundSystem {
  constructor() {
    this.audioCtx = null;
    this.muted = false;
    this.currentAudio = null;
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
    if (window.responsiveVoice && typeof window.responsiveVoice.cancel === 'function') {
      window.responsiveVoice.cancel();
    }
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }
    if ('speechSynthesis' in window) {
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

  speakThai(text, onStart, onEnd) {
    if (this.muted) {
      if (onEnd) onEnd();
      return;
    }

    this.stopAllAudio();
    this.playSfx('audioPlay');

    let finished = false;
    const handleEnd = () => {
      if (!finished) {
        finished = true;
        this.currentAudio = null;
        if (onEnd) onEnd();
      }
    };

    if (onStart) onStart();

    // Strategy 1: ResponsiveVoice Engine (Guaranteed Thai Female Voice across all devices)
    if (window.responsiveVoice && typeof window.responsiveVoice.speak === 'function') {
      try {
        window.responsiveVoice.speak(text, "Thai Female", {
          rate: 0.85,
          pitch: 1.0,
          onstart: () => {},
          onend: handleEnd,
          onerror: () => this.fallbackAudioStream(text, handleEnd)
        });
        return;
      } catch (err) {
        console.warn("ResponsiveVoice failed, trying fallbacks...", err);
      }
    }

    // Fallback Strategies
    this.fallbackAudioStream(text, handleEnd);
  }

  fallbackAudioStream(text, handleEnd) {
    // Strategy 2: Google Translate Audio MP3 Stream
    const encodedText = encodeURIComponent(text);
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=th&client=tw-ob`;

    const audio = new Audio(audioUrl);
    this.currentAudio = audio;

    audio.onended = handleEnd;

    audio.onerror = () => {
      // Strategy 3: Web Speech Synthesis API (SpeechSynthesisUtterance)
      if ('speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'th-TH';
          utterance.rate = 0.85;
          utterance.pitch = 1.1;

          const voices = window.speechSynthesis.getVoices();
          const thaiVoice = voices.find(v => v.lang.includes('th') || v.lang.includes('TH'));
          if (thaiVoice) {
            utterance.voice = thaiVoice;
          }

          utterance.onend = handleEnd;
          utterance.onerror = handleEnd;

          window.speechSynthesis.speak(utterance);
        } catch (e) {
          handleEnd();
        }
      } else {
        handleEnd();
      }
    };

    audio.play().catch(() => {
      audio.onerror();
    });
  }
}

export const soundSystem = new SoundSystem();
