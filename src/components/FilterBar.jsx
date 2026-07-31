import React from 'react';
import { Search, Filter, Star, Sparkles, Map, Grid } from 'lucide-react';
import { soundSystem } from '../utils/audio';

export const FilterBar = ({
  searchTerm,
  onSearchChange,
  activeFilter,
  onFilterChange,
  viewMode,
  onViewModeChange,
  counts
}) => {
  return (
    <div className="max-w-6xl px-4 mx-auto mb-6">
      <div className="flex flex-col gap-4 p-4 bg-white/90 backdrop-blur border-3 border-teal-200 rounded-3xl shadow-cartoon-sm sm:p-5">
        
        {/* Search & View Switcher Row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Search Input Box */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute w-5 h-5 -translate-y-1/2 left-3.5 top-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by letter (ก), word (chicken), or sound (gor)..."
              className="w-full py-2.5 pl-11 pr-4 text-sm sm:text-base font-medium text-slate-800 placeholder-slate-400 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-sky-400 focus:bg-white transition-all shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute text-xs font-bold -translate-y-1/2 right-3 top-1/2 text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* View Mode Toggle (Grid vs Journey Map) */}
          <div className="flex items-center p-1 border-2 bg-slate-100 border-slate-200 rounded-2xl">
            <button
              onClick={() => {
                soundSystem.playSfx('pop');
                onViewModeChange('grid');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-sky-700 shadow-cartoon-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => {
                soundSystem.playSfx('pop');
                onViewModeChange('map');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                viewMode === 'map'
                  ? 'bg-white text-emerald-700 shadow-cartoon-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>Journey Map</span>
            </button>
          </div>
        </div>

        {/* Filter Pills Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-bold sm:text-sm">
          <span className="flex items-center gap-1 text-slate-400 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5" /> Class:
          </span>

          <button
            onClick={() => {
              soundSystem.playSfx('pop');
              onFilterChange('all');
            }}
            className={`px-3.5 py-1.5 rounded-2xl border-2 transition-all shrink-0 ${
              activeFilter === 'all'
                ? 'bg-sky-500 text-white border-sky-600 shadow-cartoon-sm'
                : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
            }`}
          >
            All ({counts.all})
          </button>

          <button
            onClick={() => {
              soundSystem.playSfx('pop');
              onFilterChange('mid');
            }}
            className={`px-3.5 py-1.5 rounded-2xl border-2 transition-all shrink-0 ${
              activeFilter === 'mid'
                ? 'bg-blue-500 text-white border-blue-600 shadow-cartoon-sm'
                : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
            }`}
          >
            Mid Class / กลาง ({counts.mid})
          </button>

          <button
            onClick={() => {
              soundSystem.playSfx('pop');
              onFilterChange('high');
            }}
            className={`px-3.5 py-1.5 rounded-2xl border-2 transition-all shrink-0 ${
              activeFilter === 'high'
                ? 'bg-amber-500 text-white border-amber-600 shadow-cartoon-sm'
                : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
            }`}
          >
            High Class / สูง ({counts.high})
          </button>

          <button
            onClick={() => {
              soundSystem.playSfx('pop');
              onFilterChange('low');
            }}
            className={`px-3.5 py-1.5 rounded-2xl border-2 transition-all shrink-0 ${
              activeFilter === 'low'
                ? 'bg-emerald-500 text-white border-emerald-600 shadow-cartoon-sm'
                : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            Low Class / ต่ำ ({counts.low})
          </button>

          <button
            onClick={() => {
              soundSystem.playSfx('pop');
              onFilterChange('starred');
            }}
            className={`flex items-center gap-1 px-3.5 py-1.5 rounded-2xl border-2 transition-all shrink-0 ${
              activeFilter === 'starred'
                ? 'bg-purple-500 text-white border-purple-600 shadow-cartoon-sm'
                : 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-purple-400" />
            <span>Favorites ({counts.starred})</span>
          </button>

          <button
            onClick={() => {
              soundSystem.playSfx('pop');
              onFilterChange('unmastered');
            }}
            className={`flex items-center gap-1 px-3.5 py-1.5 rounded-2xl border-2 transition-all shrink-0 ${
              activeFilter === 'unmastered'
                ? 'bg-rose-500 text-white border-rose-600 shadow-cartoon-sm'
                : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>To Practice ({counts.unmastered})</span>
          </button>
        </div>

      </div>
    </div>
  );
};
