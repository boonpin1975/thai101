import React, { useState, useEffect } from 'react';
import { CONSONANTS } from './data/consonants';
import { Header } from './components/Header';
import { ProgressTracker } from './components/ProgressTracker';
import { FilterBar } from './components/FilterBar';
import { ConsonantGrid } from './components/ConsonantGrid';
import { TracingModal } from './components/TracingModal';
import { MatchingGame } from './components/MatchingGame';
import { AudioQuizGame } from './components/AudioQuizGame';
import { AchievementsModal } from './components/AchievementsModal';
import { soundSystem } from './utils/audio';
import { Sparkles, Gamepad2, Volume2, BookOpen, Heart } from 'lucide-react';

export function App() {
  // LocalStorage Persisted State
  const [masteredIds, setMasteredIds] = useState(() => {
    try {
      const saved = localStorage.getItem('learnthai_mastered');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [starredIds, setStarredIds] = useState(() => {
    try {
      const saved = localStorage.getItem('learnthai_starred');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [muted, setMuted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'map'
  const [activeTab, setActiveTab] = useState('learn'); // 'learn' | 'matching' | 'audioQuiz'
  
  // Modals state
  const [tracingConsonant, setTracingConsonant] = useState(null);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('learnthai_mastered', JSON.stringify(masteredIds));
  }, [masteredIds]);

  useEffect(() => {
    localStorage.setItem('learnthai_starred', JSON.stringify(starredIds));
  }, [starredIds]);

  // Toggle Handlers
  const handleToggleMute = () => {
    const isMuted = soundSystem.toggleMute();
    setMuted(isMuted);
  };

  const handleToggleMastered = (id) => {
    setMasteredIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleStar = (id) => {
    setStarredIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleResetProgress = () => {
    setMasteredIds([]);
    setStarredIds([]);
  };

  // Filter Logic
  const filteredConsonants = CONSONANTS.filter((item) => {
    // Search query check (matches Thai char, RTGS phonetic, or English word)
    const matchesSearch =
      item.char.includes(searchTerm) ||
      item.phonetic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.vocabEng.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.vocabThai.includes(searchTerm) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    // Filter Pill check
    if (activeFilter === 'mid') return item.class === 'mid';
    if (activeFilter === 'high') return item.class === 'high';
    if (activeFilter === 'low') return item.class === 'low';
    if (activeFilter === 'starred') return starredIds.includes(item.id);
    if (activeFilter === 'unmastered') return !masteredIds.includes(item.id);

    return true;
  });

  const counts = {
    all: CONSONANTS.length,
    mid: CONSONANTS.filter((c) => c.class === 'mid').length,
    high: CONSONANTS.filter((c) => c.class === 'high').length,
    low: CONSONANTS.filter((c) => c.class === 'low').length,
    starred: starredIds.length,
    unmastered: CONSONANTS.length - masteredIds.length
  };

  return (
    <div className="min-h-screen pb-16 font-english">
      
      {/* Navigation Header */}
      <Header
        muted={muted}
        onToggleMute={handleToggleMute}
        onOpenAchievements={() => setIsAchievementsOpen(true)}
        unlockedCount={masteredIds.length}
      />

      {/* Main Mode Navigation Tabs */}
      <div className="max-w-6xl px-4 mx-auto mb-6">
        <div className="flex items-center justify-center p-1.5 bg-white/80 backdrop-blur border-3 border-sky-200 rounded-3xl shadow-cartoon-sm max-w-xl mx-auto gap-1">
          <button
            onClick={() => {
              soundSystem.playSfx('pop');
              setActiveTab('learn');
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-extrabold rounded-2xl transition-all ${
              activeTab === 'learn'
                ? 'bg-gradient-to-r from-sky-400 to-indigo-500 text-white shadow-cartoon-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>44 Flashcards</span>
          </button>

          <button
            onClick={() => {
              soundSystem.playSfx('pop');
              setActiveTab('matching');
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-extrabold rounded-2xl transition-all ${
              activeTab === 'matching'
                ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-cartoon-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Matching Game</span>
          </button>

          <button
            onClick={() => {
              soundSystem.playSfx('pop');
              setActiveTab('audioQuiz');
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-extrabold rounded-2xl transition-all ${
              activeTab === 'audioQuiz'
                ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-cartoon-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>Audio Quiz</span>
          </button>
        </div>
      </div>

      {/* TAB 1: LEARN FLASHCARDS & JOURNEY MAP */}
      {activeTab === 'learn' && (
        <>
          <ProgressTracker
            masteredIds={masteredIds}
            starredIds={starredIds}
            totalConsonants={CONSONANTS.length}
            onResetProgress={handleResetProgress}
          />

          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            counts={counts}
          />

          <ConsonantGrid
            consonants={filteredConsonants}
            masteredIds={masteredIds}
            starredIds={starredIds}
            onToggleMastered={handleToggleMastered}
            onToggleStar={handleToggleStar}
            onOpenTracing={(c) => setTracingConsonant(c)}
            viewMode={viewMode}
          />
        </>
      )}

      {/* TAB 2: MATCHING MINI-GAME */}
      {activeTab === 'matching' && <MatchingGame />}

      {/* TAB 3: AUDIO QUIZ MINI-GAME */}
      {activeTab === 'audioQuiz' && <AudioQuizGame />}

      {/* Interactive Letter Tracing Modal */}
      <TracingModal
        consonant={tracingConsonant}
        isOpen={Boolean(tracingConsonant)}
        onClose={() => setTracingConsonant(null)}
        isMastered={tracingConsonant ? masteredIds.includes(tracingConsonant.id) : false}
        onToggleMastered={handleToggleMastered}
      />

      {/* Achievements Modal */}
      <AchievementsModal
        isOpen={isAchievementsOpen}
        onClose={() => setIsAchievementsOpen(false)}
        masteredIds={masteredIds}
        starredIds={starredIds}
      />

      {/* Footer */}
      <footer className="mt-16 text-center text-xs font-semibold text-slate-500">
        <div className="flex items-center justify-center gap-1 mb-1">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>for Thai Language Learners</span>
        </div>
        <p className="opacity-75">
          Learn the 44 Thai Consonants • Kor Kai to Hor Nok-huk
        </p>
      </footer>

    </div>
  );
}

export default App;
