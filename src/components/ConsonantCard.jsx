import React, { useState } from 'react';
import { Volume2, Star, CheckCircle, RotateCw, PenTool, Info, Sparkles } from 'lucide-react';
import { ConsonantIllustration } from '../data/consonants';
import { soundSystem } from '../utils/audio';

export const ConsonantCard = ({
  consonant,
  isMastered,
  isStarred,
  onToggleMastered,
  onToggleStar,
  onOpenTracing
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Determine Class Color Styling
  const classStyles = {
    mid: {
      border: 'border-blue-300 hover:border-blue-400',
      bg: 'bg-blue-50/70',
      badge: 'bg-blue-500 text-white',
      accent: 'text-blue-600',
      tag: 'Mid Class / กลาง'
    },
    high: {
      border: 'border-amber-300 hover:border-amber-400',
      bg: 'bg-amber-50/70',
      badge: 'bg-amber-500 text-white',
      accent: 'text-amber-600',
      tag: 'High Class / สูง'
    },
    low: {
      border: 'border-emerald-300 hover:border-emerald-400',
      bg: 'bg-emerald-50/70',
      badge: 'bg-emerald-500 text-white',
      accent: 'text-emerald-600',
      tag: 'Low Class / ต่ำ'
    }
  }[consonant.class];

  const handlePlayAudio = (e) => {
    e.stopPropagation();
    setIsPlayingAudio(true);
    // Speak both character and vocabulary word: e.g. "ก ไก่"
    soundSystem.speakThai(
      `${consonant.char} ${consonant.vocabThai}`,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
  };

  const handleFlipCard = (e) => {
    e.stopPropagation();
    soundSystem.playSfx('flip');
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-full h-[380px] perspective-1000 group">
      <div
        className={`relative w-full h-full transform-style-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleFlipCard}
      >
        
        {/* ==================== FRONT OF CARD ==================== */}
        <div
          className={`absolute inset-0 flex flex-col justify-between p-4 bg-white border-3 rounded-3xl backface-hidden shadow-cartoon transition-all duration-300 group-hover:-translate-y-1.5 ${
            classStyles.border
          } ${isPlayingAudio ? 'audio-playing-glow' : ''}`}
        >
          {/* Top Header Controls Bar */}
          <div className="flex items-center justify-between gap-2">
            {/* Consonant Class Badge */}
            <span className={`px-2.5 py-1 text-[11px] font-black rounded-full shadow-cartoon-sm ${classStyles.badge}`}>
              {classStyles.tag}
            </span>

            {/* Top Right Action Icons (Star & Mastered) */}
            <div className="flex items-center gap-1">
              {consonant.obsolete && (
                <span className="px-2 py-0.5 text-[10px] font-bold text-rose-700 bg-rose-100 border border-rose-200 rounded-full">
                  Obsolete
                </span>
              )}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  soundSystem.playSfx('pop');
                  onToggleStar(consonant.id);
                }}
                className="p-1.5 text-slate-300 hover:text-amber-400 transition-colors"
                title={isStarred ? 'Remove Favorite' : 'Add to Favorites'}
              >
                <Star
                  className={`w-5 h-5 ${
                    isStarred ? 'fill-amber-400 text-amber-400' : ''
                  }`}
                />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  soundSystem.playSfx('correct');
                  onToggleMastered(consonant.id);
                }}
                className={`p-1.5 rounded-xl transition-all ${
                  isMastered
                    ? 'text-emerald-500 bg-emerald-50'
                    : 'text-slate-300 hover:text-emerald-400'
                }`}
                title={isMastered ? 'Mastered!' : 'Mark as Mastered'}
              >
                <CheckCircle
                  className={`w-5 h-5 ${
                    isMastered ? 'fill-emerald-400 text-white' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Main Visual Center: Consonant & Cartoon Illustration */}
          <div className="flex flex-col items-center justify-center py-1">
            {/* Thai Symbol & Number Badge */}
            <div className="relative flex items-center justify-center mb-1">
              <span className="text-5xl sm:text-6xl font-black text-slate-800 font-thai tracking-tight drop-shadow-sm">
                {consonant.char}
              </span>
              <span className="absolute top-0 right-[-24px] text-[10px] font-bold px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-full">
                #{consonant.id}
              </span>
            </div>

            {/* Cartoon SVG Illustration */}
            <div className="relative flex items-center justify-center p-2 mb-2 bg-slate-50 border-2 border-slate-100 rounded-2xl w-24 h-24 group-hover:scale-105 transition-transform">
              <ConsonantIllustration id={consonant.id} className="w-20 h-20" />
            </div>

            {/* Phonetic RTGS Name & Vocabulary */}
            <h3 className="text-lg font-black text-slate-800 tracking-wide text-center">
              {consonant.phonetic}
            </h3>
            <p className="text-sm font-bold text-slate-500 font-thai text-center">
              {consonant.name} ({consonant.vocabEng})
            </p>
          </div>

          {/* Bottom Card Action Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            {/* Audio Play Button */}
            <button
              onClick={handlePlayAudio}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-sky-800 bg-sky-100 hover:bg-sky-200 border border-sky-300 rounded-2xl shadow-cartoon-sm btn-cartoon-push transition-all ${
                isPlayingAudio ? 'ring-2 ring-sky-400 bg-sky-200' : ''
              }`}
            >
              <Volume2 className={`w-4 h-4 text-sky-600 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
              <span>{isPlayingAudio ? 'Speaking...' : 'Listen'}</span>
              
              {isPlayingAudio && (
                <span className="flex items-center ml-1">
                  <span className="sound-bar" />
                  <span className="sound-bar" />
                  <span className="sound-bar" />
                </span>
              )}
            </button>

            {/* Flip Card Cue */}
            <button
              onClick={handleFlipCard}
              className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-slate-700 transition-colors"
            >
              <span>Details</span>
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ==================== BACK OF CARD ==================== */}
        <div
          className={`absolute inset-0 flex flex-col justify-between p-4 bg-slate-900 text-white border-3 rounded-3xl rotate-y-180 backface-hidden shadow-cartoon ${classStyles.border}`}
        >
          {/* Back Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black font-thai text-sky-400">{consonant.char}</span>
              <div>
                <h4 className="text-sm font-bold text-white">{consonant.name}</h4>
                <p className="text-[11px] text-slate-400">{consonant.vocabEng} ({consonant.vocabThai})</p>
              </div>
            </div>
            <button
              onClick={handleFlipCard}
              className="p-1.5 text-slate-400 hover:text-white rounded-full bg-slate-800"
              title="Flip Back"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>

          {/* Back Content Details */}
          <div className="flex-1 my-2 overflow-y-auto space-y-2.5 text-xs pr-1 scrollbar-thin">
            
            {/* Phonetic Sound Specs */}
            <div className="grid grid-cols-2 gap-2 p-2 bg-slate-800/80 rounded-2xl border border-slate-700">
              <div>
                <span className="block text-[10px] text-slate-400 uppercase font-bold">Initial Sound</span>
                <span className="text-sm font-bold text-teal-300">{consonant.initial}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 uppercase font-bold">Final Sound</span>
                <span className="text-sm font-bold text-amber-300">{consonant.final}</span>
              </div>
            </div>

            {/* Consonant Class & Tone Tip */}
            <div className="p-2.5 bg-slate-800/80 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-1.5 mb-1 text-sky-300 font-bold">
                <Info className="w-3.5 h-3.5" />
                <span>Class: {classStyles.tag}</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {consonant.class === 'mid' && "Mid class consonants can pair with all 5 tones naturally!"}
                {consonant.class === 'high' && "High class consonants start with an inherent RISING tone."}
                {consonant.class === 'low' && "Low class consonants are the largest group with 24 letters."}
              </p>
            </div>

            {/* Fun Mnemonic Fact */}
            <div className="p-2.5 bg-purple-950/60 rounded-2xl border border-purple-800/60 text-purple-200">
              <div className="flex items-center gap-1.5 mb-1 text-purple-300 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fun Fact</span>
              </div>
              <p className="text-[11px] leading-relaxed text-purple-100">
                {consonant.funFact}
              </p>
            </div>

            {/* Tracing Guide Text */}
            <div className="p-2 bg-slate-800/60 rounded-2xl border border-slate-700/60 text-slate-300">
              <span className="block mb-1 text-[10px] font-bold text-slate-400 uppercase">Tracing Guide</span>
              <p className="text-[11px] leading-snug">{consonant.tracingGuide}</p>
            </div>
          </div>

          {/* Back Action Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800 gap-2">
            <button
              onClick={handlePlayAudio}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-bold text-sky-300 bg-sky-900/60 hover:bg-sky-900 border border-sky-700 rounded-xl transition-all"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Audio</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                soundSystem.playSfx('pop');
                onOpenTracing(consonant);
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-bold text-emerald-300 bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-700 rounded-xl transition-all"
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>Trace Letter</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
