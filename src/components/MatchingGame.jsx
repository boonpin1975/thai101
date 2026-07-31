import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Gamepad2, RefreshCw, Trophy, Sparkles, CheckCircle, XCircle, Volume2 } from 'lucide-react';
import { CONSONANTS, ConsonantIllustration } from '../data/consonants';
import { soundSystem } from '../utils/audio';

export const MatchingGame = () => {
  const [selectedConsonant, setSelectedConsonant] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [roundConsonants, setRoundConsonants] = useState([]);
  const [matchChoices, setMatchChoices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const startNewRound = () => {
    // Pick 4 random consonants from the dataset
    const shuffled = [...CONSONANTS].sort(() => 0.5 - Math.random());
    const round = shuffled.slice(0, 4);

    // Create matching choices (illustrations / words)
    const choices = [...round].sort(() => 0.5 - Math.random());

    setRoundConsonants(round);
    setMatchChoices(choices);
    setSelectedConsonant(null);
    setSelectedMatch(null);
    setMatchedPairs([]);
    setGameComplete(false);
  };

  useEffect(() => {
    startNewRound();
  }, []);

  const handleSelectConsonant = (item) => {
    if (matchedPairs.includes(item.id)) return;
    soundSystem.playSfx('pop');
    soundSystem.speakThai(`${item.char} ${item.vocabThai}`, item.id);
    setSelectedConsonant(item);
    checkMatch(item, selectedMatch);
  };

  const handleSelectMatch = (item) => {
    if (matchedPairs.includes(item.id)) return;
    soundSystem.playSfx('pop');
    setSelectedMatch(item);
    checkMatch(selectedConsonant, item);
  };

  const checkMatch = (consonant, match) => {
    if (consonant && match) {
      if (consonant.id === match.id) {
        // Correct match!
        soundSystem.playSfx('correct');
        const newMatched = [...matchedPairs, consonant.id];
        setMatchedPairs(newMatched);
        setScore((prev) => prev + 10 + streak * 2);
        setStreak((prev) => prev + 1);

        setSelectedConsonant(null);
        setSelectedMatch(null);

        // Check if round is finished!
        if (newMatched.length === roundConsonants.length) {
          soundSystem.playSfx('fanfare');
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
          setGameComplete(true);
        }
      } else {
        // Incorrect match!
        soundSystem.playSfx('wrong');
        setStreak(0);
        setTimeout(() => {
          setSelectedConsonant(null);
          setSelectedMatch(null);
        }, 600);
      }
    }
  };

  return (
    <section className="max-w-5xl px-4 mx-auto mb-16" id="mini-game">
      <div className="p-6 sm:p-8 bg-gradient-to-br from-amber-50 via-sky-50 to-emerald-50 border-3 border-amber-300 rounded-3xl shadow-cartoon">
        
        {/* Game Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-amber-200">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-400 text-amber-950 rounded-2xl shadow-cartoon-sm">
              <Gamepad2 className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-800">
                Test Your Knowledge: Matching Game!
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500">
                Match the Thai consonant to its cartoon character!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-amber-300 rounded-2xl text-xs font-bold text-amber-800">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Score: {score}</span>
            </div>

            {streak > 1 && (
              <div className="flex items-center gap-1 px-3 py-1.5 bg-orange-500 text-white rounded-2xl text-xs font-black animate-bounce">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{streak}x Streak!</span>
              </div>
            )}

            <button
              onClick={() => {
                soundSystem.playSfx('pop');
                startNewRound();
              }}
              className="p-2 text-slate-600 bg-white border border-slate-300 hover:bg-slate-50 rounded-2xl shadow-cartoon-sm"
              title="New Round"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Game Board */}
        {gameComplete ? (
          <div className="p-8 my-6 text-center bg-white border-2 border-emerald-300 rounded-3xl shadow-cartoon">
            <div className="text-6xl mb-3">🎉</div>
            <h4 className="text-2xl font-extrabold text-slate-800 mb-2">
              Awesome Job! Round Cleared!
            </h4>
            <p className="text-sm font-bold text-slate-500 mb-6">
              You matched all 4 consonants perfectly!
            </p>
            <button
              onClick={() => {
                soundSystem.playSfx('pop');
                startNewRound();
              }}
              className="px-6 py-3 text-base font-extrabold text-white bg-gradient-to-r from-emerald-400 to-teal-500 border-2 border-emerald-600 rounded-2xl shadow-cartoon btn-cartoon-push"
            >
              Play Next Round 🚀
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Column A: Thai Consonants */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">
                1. Select Thai Consonant
              </h4>
              {roundConsonants.map((item) => {
                const isMatched = matchedPairs.includes(item.id);
                const isSelected = selectedConsonant?.id === item.id;

                return (
                  <button
                    key={`consonant-${item.id}`}
                    disabled={isMatched}
                    onClick={() => handleSelectConsonant(item)}
                    className={`w-full flex items-center justify-between p-4 bg-white border-3 rounded-2xl transition-all shadow-cartoon-sm ${
                      isMatched
                        ? 'opacity-40 border-emerald-300 bg-emerald-50'
                        : isSelected
                        ? 'border-sky-500 bg-sky-50 ring-4 ring-sky-200 -translate-y-1'
                        : 'border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-black font-thai text-slate-800">
                        {item.char}
                      </span>
                      <span className="text-sm font-extrabold text-slate-600">
                        {item.phonetic}
                      </span>
                    </div>

                    {isMatched ? (
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Column B: Cartoon Artwork Matches */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">
                2. Match Cartoon Illustration
              </h4>
              {matchChoices.map((item) => {
                const isMatched = matchedPairs.includes(item.id);
                const isSelected = selectedMatch?.id === item.id;

                return (
                  <button
                    key={`match-${item.id}`}
                    disabled={isMatched}
                    onClick={() => handleSelectMatch(item)}
                    className={`w-full flex items-center justify-between p-3 bg-white border-3 rounded-2xl transition-all shadow-cartoon-sm ${
                      isMatched
                        ? 'opacity-40 border-emerald-300 bg-emerald-50'
                        : isSelected
                        ? 'border-amber-500 bg-amber-50 ring-4 ring-amber-200 -translate-y-1'
                        : 'border-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center p-1">
                        <ConsonantIllustration id={item.id} className="w-10 h-10" />
                      </div>
                      <div className="text-left">
                        <span className="block text-sm font-extrabold text-slate-800">
                          {item.vocabEng}
                        </span>
                        <span className="text-xs font-semibold text-slate-400 font-thai">
                          {item.vocabThai}
                        </span>
                      </div>
                    </div>

                    {isMatched && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                  </button>
                );
              })}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
