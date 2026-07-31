import React from 'react';
import { Volume2, VolumeX, Award, Sparkles, HelpCircle } from 'lucide-react';
import { soundSystem } from '../utils/audio';

export const Header = ({ muted, onToggleMute, onOpenAchievements, unlockedCount }) => {
  return (
    <header className="sticky top-0 z-40 w-full px-4 py-3 mb-6 transition-all glass-panel shadow-cartoon-sm rounded-b-3xl">
      <div className="flex flex-wrap items-center justify-between max-w-6xl gap-4 mx-auto">
        
        {/* Brand Logo & Mascot */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center text-3xl font-bold bg-white rounded-2xl w-14 h-14 shadow-cartoon-sm border-3 border-amber-300 animate-bounce-gentle">
            🇹🇭
            <span className="absolute text-xs top-[-4px] right-[-4px]">✨</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500">
                Learn Thai Consonants!
              </h1>
              <span className="hidden px-2 py-0.5 text-xs font-bold text-sky-700 bg-sky-100 border border-sky-300 rounded-full sm:inline-block">
                44 Alphabet Adventure
              </span>
            </div>
            <p className="text-xs font-medium text-slate-500 sm:text-sm">
              Interactive Cartoon Cards, Native Audio & Gamified Quizzes
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Achievements Modal Trigger */}
          <button
            onClick={() => {
              soundSystem.playSfx('pop');
              onOpenAchievements();
            }}
            className="relative flex items-center gap-2 px-3 py-2 text-xs font-bold text-amber-900 transition-all border-2 bg-amber-100 hover:bg-amber-200 border-amber-300 rounded-2xl shadow-cartoon-sm btn-cartoon-push sm:text-sm"
            title="View Achievements"
          >
            <Award className="w-4 h-4 text-amber-600 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Badges</span>
            {unlockedCount > 0 && (
              <span className="px-1.5 py-0.5 text-[10px] font-black text-white bg-amber-500 rounded-full">
                {unlockedCount}
              </span>
            )}
          </button>

          {/* Mute/Unmute Audio Toggle */}
          <button
            onClick={() => {
              soundSystem.playSfx('pop');
              onToggleMute();
            }}
            className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-bold rounded-2xl border-2 transition-all shadow-cartoon-sm btn-cartoon-push ${
              muted
                ? 'bg-rose-100 text-rose-800 border-rose-300 hover:bg-rose-200'
                : 'bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200'
            }`}
            title={muted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {muted ? (
              <>
                <VolumeX className="w-4 h-4 text-rose-600 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Muted</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-600 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Sound ON</span>
              </>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
