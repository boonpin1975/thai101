import React from 'react';
import { X, Award, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { CONSONANTS } from '../data/consonants';
import { soundSystem } from '../utils/audio';

export const AchievementsModal = ({ isOpen, onClose, masteredIds, starredIds }) => {
  if (!isOpen) return null;

  const midIds = CONSONANTS.filter(c => c.class === 'mid').map(c => c.id);
  const highIds = CONSONANTS.filter(c => c.class === 'high').map(c => c.id);
  const lowIds = CONSONANTS.filter(c => c.class === 'low').map(c => c.id);

  const achievements = [
    {
      id: 'first_step',
      title: 'First Step!',
      desc: 'Master your very first Thai consonant',
      icon: '🌱',
      unlocked: masteredIds.length >= 1,
      progress: `${Math.min(masteredIds.length, 1)} / 1`
    },
    {
      id: 'mid_master',
      title: 'Mid Class Hero',
      desc: 'Master all 9 Mid-class consonants (กลาง)',
      icon: '🌊',
      unlocked: midIds.every(id => masteredIds.includes(id)),
      progress: `${midIds.filter(id => masteredIds.includes(id)).length} / 9`
    },
    {
      id: 'high_master',
      title: 'High Class Conqueror',
      desc: 'Master all 11 High-class consonants (สูง)',
      icon: '⛰️',
      unlocked: highIds.every(id => masteredIds.includes(id)),
      progress: `${highIds.filter(id => masteredIds.includes(id)).length} / 11`
    },
    {
      id: 'low_master',
      title: 'Low Class Voyager',
      desc: 'Master all 24 Low-class consonants (ต่ำ)',
      icon: '🌴',
      unlocked: lowIds.every(id => masteredIds.includes(id)),
      progress: `${lowIds.filter(id => masteredIds.includes(id)).length} / 24`
    },
    {
      id: 'alphabet_champ',
      title: 'Thai Alphabet Champion!',
      desc: 'Master all 44 Thai consonants!',
      icon: '👑',
      unlocked: masteredIds.length >= 44,
      progress: `${masteredIds.length} / 44`
    },
    {
      id: 'star_collector',
      title: 'Star Collector',
      desc: 'Save 10 or more favorite flashcards',
      icon: '⭐',
      unlocked: starredIds.length >= 10,
      progress: `${starredIds.length} / 10`
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg p-6 bg-white border-3 border-amber-300 rounded-3xl shadow-cartoon max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b-2 border-slate-100 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-800">
                Your Learning Achievements
              </h3>
              <p className="text-xs font-semibold text-slate-500">
                Unlock badges as you learn the 44 Thai consonants!
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundSystem.playSfx('pop');
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-2xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Badges List */}
        <div className="space-y-3">
          {achievements.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-3.5 border-2 rounded-2xl transition-all ${
                item.unlocked
                  ? 'bg-amber-50/80 border-amber-300 shadow-cartoon-sm'
                  : 'bg-slate-50 border-slate-200 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl p-2 bg-white border border-slate-200 rounded-xl shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5">
                    {item.title}
                    {item.unlocked && (
                      <span className="text-[10px] font-black px-1.5 py-0.5 bg-amber-400 text-amber-950 rounded-md">
                        UNLOCKED
                      </span>
                    )}
                  </h4>
                  <p className="text-xs font-medium text-slate-500">{item.desc}</p>
                </div>
              </div>

              <div className="text-right">
                {item.unlocked ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 ml-auto" />
                ) : (
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                    <Lock className="w-3.5 h-3.5" />
                    <span>{item.progress}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
