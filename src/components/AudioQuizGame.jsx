import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, RefreshCw, Trophy, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { CONSONANTS } from '../data/consonants';
import { soundSystem } from '../utils/audio';

export const AudioQuizGame = () => {
  const [targetConsonant, setTargetConsonant] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizStreak, setQuizStreak] = useState(0);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong' | null

  const generateQuestion = () => {
    // Pick 1 target consonant randomly
    const target = CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)];
    
    // Pick 3 distractor consonants
    const distractors = CONSONANTS
      .filter((c) => c.id !== target.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    // Combine and shuffle choices
    const choices = [target, ...distractors].sort(() => 0.5 - Math.random());

    setTargetConsonant(target);
    setOptions(choices);
    setSelectedOption(null);
    setFeedback(null);

    // Play target audio
    setTimeout(() => {
      soundSystem.speakThai(`${target.char} ${target.vocabThai}`, target.id);
    }, 200);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleOptionClick = (option) => {
    if (selectedOption !== null) return; // Prevent double taps

    setSelectedOption(option.id);

    if (option.id === targetConsonant.id) {
      soundSystem.playSfx('correct');
      setFeedback('correct');
      setQuizScore((prev) => prev + 15);
      const newStreak = quizStreak + 1;
      setQuizStreak(newStreak);

      if (newStreak % 5 === 0) {
        soundSystem.playSfx('fanfare');
        confetti({ particleCount: 70, spread: 60 });
      }

      setTimeout(() => {
        generateQuestion();
      }, 1200);
    } else {
      soundSystem.playSfx('wrong');
      setFeedback('wrong');
      setQuizStreak(0);
      setTimeout(() => {
        generateQuestion();
      }, 1400);
    }
  };

  if (!targetConsonant) return null;

  return (
    <section className="max-w-5xl px-4 mx-auto mb-16" id="audio-quiz">
      <div className="p-6 sm:p-8 bg-gradient-to-br from-sky-50 via-purple-50 to-pink-50 border-3 border-sky-300 rounded-3xl shadow-cartoon">
        
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-sky-200">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-sky-400 text-white rounded-2xl shadow-cartoon-sm">
              <Volume2 className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-800">
                Audio Listening Quiz!
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500">
                Listen to the Thai voice & choose the right letter!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-sky-300 rounded-2xl text-xs font-bold text-sky-800">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Score: {quizScore}</span>
            </div>

            {quizStreak > 1 && (
              <div className="flex items-center gap-1 px-3 py-1.5 bg-purple-500 text-white rounded-2xl text-xs font-black animate-bounce">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{quizStreak} Streak!</span>
              </div>
            )}

            <button
              onClick={() => {
                soundSystem.playSfx('pop');
                generateQuestion();
              }}
              className="p-2 text-slate-600 bg-white border border-slate-300 hover:bg-slate-50 rounded-2xl shadow-cartoon-sm"
              title="Next Question"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Audio Replay Trigger Card */}
        <div className="flex flex-col items-center justify-center p-8 bg-white border-2 border-sky-200 rounded-3xl shadow-cartoon mb-8">
          <button
            onClick={() => soundSystem.speakThai(`${targetConsonant.char} ${targetConsonant.vocabThai}`, targetConsonant.id)}
            className="flex items-center gap-3 px-6 py-4 text-base sm:text-lg font-black text-white bg-gradient-to-r from-sky-400 to-indigo-500 border-2 border-sky-600 rounded-2xl shadow-cartoon btn-cartoon-push animate-bounce-gentle"
          >
            <Volume2 className="w-7 h-7" />
            <span>Tap to Play Sound Again 🔊</span>
          </button>
          <p className="mt-3 text-xs font-semibold text-slate-400">
            Which Thai consonant corresponds to this pronunciation?
          </p>
        </div>

        {/* 4 Multiple Choice Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            const isCorrect = opt.id === targetConsonant.id;

            let buttonStyle = 'bg-white border-slate-200 hover:border-sky-300 text-slate-800';

            if (selectedOption !== null) {
              if (isCorrect) {
                buttonStyle = 'bg-emerald-500 border-emerald-600 text-white ring-4 ring-emerald-200';
              } else if (isSelected && !isCorrect) {
                buttonStyle = 'bg-rose-500 border-rose-600 text-white ring-4 ring-rose-200';
              } else {
                buttonStyle = 'bg-white border-slate-200 opacity-50';
              }
            }

            return (
              <button
                key={opt.id}
                disabled={selectedOption !== null}
                onClick={() => handleOptionClick(opt)}
                className={`flex flex-col items-center justify-center p-5 border-3 rounded-3xl transition-all shadow-cartoon-sm ${buttonStyle}`}
              >
                <span className="text-4xl sm:text-5xl font-black font-thai mb-1">
                  {opt.char}
                </span>
                <span className="text-sm font-extrabold">{opt.phonetic}</span>
                <span className="text-xs font-semibold opacity-80 font-thai">
                  {opt.vocabEng}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
