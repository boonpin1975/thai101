import React from 'react';
import { CheckCircle2, Star, Trophy, RefreshCw, Sparkles } from 'lucide-react';
import { soundSystem } from '../utils/audio';

export const ProgressTracker = ({ masteredIds, starredIds, totalConsonants = 44, onResetProgress }) => {
  const masteredCount = masteredIds.length;
  const percentage = Math.round((masteredCount / totalConsonants) * 100);

  return (
    <div className="max-w-6xl px-4 mx-auto mb-6">
      <div className="p-4 sm:p-5 bg-white border-3 border-sky-200 rounded-3xl shadow-cartoon">
        
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-500 animate-bounce-gentle" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              Your Alphabet Mastery
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-black text-sky-800 bg-sky-100 border border-sky-300 rounded-full sm:text-sm">
              {masteredCount} / {totalConsonants} Mastered ({percentage}%)
            </span>

            {masteredCount > 0 && (
              <button
                onClick={() => {
                  soundSystem.playSfx('pop');
                  if (window.confirm("Are you sure you want to reset your learning progress?")) {
                    onResetProgress();
                  }
                }}
                className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                title="Reset Learning Progress"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar Track */}
        <div className="relative w-full h-5 overflow-hidden border-2 bg-slate-100 border-slate-200 rounded-2xl">
          <div
            className="h-full transition-all duration-700 ease-out bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400 rounded-xl"
            style={{ width: `${Math.max(percentage, 3)}%` }}
          >
            <div className="w-full h-full opacity-30 bg-[linear-gradient(45deg,rgba(255,255,255,0.4)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0.4)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[stripe_1s_linear_infinite]" />
          </div>
        </div>

        {/* Quick Stats Chips */}
        <div className="flex flex-wrap gap-2 mt-4 text-xs font-semibold sm:text-sm">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Mastered: {masteredCount}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-xl border border-amber-200">
            <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>Favorites: {starredIds.length}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 text-sky-700 rounded-xl border border-sky-200">
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span>Remaining: {totalConsonants - masteredCount}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
