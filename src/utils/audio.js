// Multi-Engine Audio System with Local Offline MP3 Assets + Online TTS & SpeechSynthesis Fallbacks

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
    if (this.currentAudio) {
      this.currentAudio.pause();
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

  speakThai(text, consonantId = null, onStart = null, onEnd = null) {
    // Flexible argument structure
    if (typeof consonantId === 'function') {
      onEnd = onStart;
      onStart = consonantId;
      consonantId = null;
    }

    if (this.muted) {
      if (onEnd) onEnd();
      return;
    }

    this.stopAllAudio();
    this.playSfx('audioPlay');

    if (onStart) onStart();

    let hasHandledEnd = false;
    const done = () => {
      if (!hasHandledEnd) {
        hasHandledEnd = true;
        this.currentAudio = null;
        if (onEnd) onEnd();
      }
    };

    // Strategy 1: Local Offline MP3 File (/audio/${consonantId}.mp3)
    if (consonantId && consonantId >= 1 && consonantId <= 44) {
      const localMp3Url = `/audio/${consonantId}.mp3`;
      const audio = new Audio(localMp3Url);
      this.currentAudio = audio;

      audio.onended = done;

      audio.onerror = () => {
        this.currentAudio = null;
        this.playOnlineFallback(text, done);
      };

      const promise = audio.play();
      if (promise !== undefined) {
        promise.catch(() => {
          audio.onerror();
        });
      }
      return;
    }

    // Strategy 2: Online Stream Fallback
    this.playOnlineFallback(text, done);
  }

  playOnlineFallback(text, done) {
    const encoded = encodeURIComponent(text);
    const primaryUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=th&client=gtx`;

    const audio = new Audio(primaryUrl);
    this.currentAudio = audio;

    audio.onended = done;

    audio.onerror = () => {
      this.currentAudio = null;
      this.speakSpeechSynthesis(text, done);
    };

    const promise = audio.play();
    if (promise !== undefined) {
      promise.catch(() => {
        audio.onerror();
      });
    }
  }

  speakSpeechSynthesis(text, onEnd) {
    if (!('speechSynthesis' in window)) {
      if (onEnd) onEnd();
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

      utterance.onend = () => { if (onEnd) onEnd(); };
      utterance.onerror = () => { if (onEnd) onEnd(); };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      if (onEnd) onEnd();
    }
  }
}

export const soundSystem = new SoundSystem();
