import React from 'react';
import { ConsonantCard } from './ConsonantCard';
import { ConsonantIllustration } from '../data/consonants';
import { Volume2, CheckCircle2, Star, Sparkles, MapPin } from 'lucide-react';
import { soundSystem } from '../utils/audio';

export const ConsonantGrid = ({
  consonants,
  masteredIds,
  starredIds,
  onToggleMastered,
  onToggleStar,
  onOpenTracing,
  viewMode
}) => {
  if (consonants.length === 0) {
    return (
      <div className="max-w-xl p-8 mx-auto my-12 text-center bg-white border-3 border-dashed border-slate-300 rounded-3xl shadow-cartoon">
        <div className="text-5xl mb-3">🔍</div>
        <h3 className="text-xl font-bold text-slate-700 mb-1">No Consonants Found</h3>
        <p className="text-sm text-slate-500">
          Try clearing your search query or choosing a different class filter!
        </p>
      </div>
    );
  }

  // Flashcard Grid Mode
  if (viewMode === 'grid') {
    return (
      <div className="max-w-6xl px-4 mx-auto mb-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {consonants.map((consonant) => (
            <ConsonantCard
              key={consonant.id}
              consonant={consonant}
              isMastered={masteredIds.includes(consonant.id)}
              isStarred={starredIds.includes(consonant.id)}
              onToggleMastered={onToggleMastered}
              onToggleStar={onToggleStar}
              onOpenTracing={onOpenTracing}
            />
          ))}
        </div>
      </div>
    );
  }

  // Journey Map Mode
  return (
    <div className="max-w-5xl px-4 mx-auto mb-16">
      <div className="relative p-6 sm:p-10 bg-white/90 backdrop-blur border-3 border-emerald-300 rounded-3xl shadow-cartoon">
        
        <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-dashed border-emerald-200">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-800">
                Thai Alphabet Journey Map
              </h3>
              <p className="text-xs font-semibold text-slate-500">
                Follow the path from ก (Gor Kai) to ฮ (Hor Nok-huk)!
              </p>
            </div>
          </div>
          <span className="px-3 py-1 text-xs font-black text-emerald-800 bg-emerald-100 rounded-full border border-emerald-300">
            {consonants.length} Nodes Path
          </span>
        </div>

        {/* Winding Map Path */}
        <div className="relative space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {consonants.map((item, idx) => {
              const isMastered = masteredIds.includes(item.id);
              const isStarred = starredIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    soundSystem.speakThai(`${item.char} ${item.vocabThai}`, item.id);
                    onOpenTracing(item);
                  }}
                  className={`relative flex flex-col items-center justify-between p-3.5 bg-white rounded-2xl border-2 transition-all cursor-pointer shadow-cartoon-sm hover:-translate-y-1 hover:shadow-cartoon ${
                    isMastered
                      ? 'border-emerald-400 bg-emerald-50/50'
                      : 'border-slate-200 hover:border-sky-300'
                  }`}
                >
                  {/* Top Badges */}
                  <div className="flex items-center justify-between w-full mb-1 text-[10px] font-black">
                    <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded-md">
                      #{item.id}
                    </span>
                    {isMastered && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-100" />
                    )}
                  </div>

                  {/* Symbol & Cartoon Illustration */}
                  <span className="text-3xl font-black font-thai text-slate-800 mb-1">
                    {item.char}
                  </span>

                  <div className="w-12 h-12 mb-2 p-1 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center">
                    <ConsonantIllustration id={item.id} className="w-10 h-10" />
                  </div>

                  <span className="text-xs font-bold text-slate-700 text-center truncate w-full">
                    {item.phonetic}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 font-thai text-center truncate w-full">
                    {item.vocabEng}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
