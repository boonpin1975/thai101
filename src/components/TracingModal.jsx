import React, { useRef, useState, useEffect } from 'react';
import { X, RotateCcw, Volume2, CheckCircle2, Sparkles, PenTool } from 'lucide-react';
import { ConsonantIllustration } from '../data/consonants';
import { soundSystem } from '../utils/audio';

export const TracingModal = ({
  consonant,
  isOpen,
  onClose,
  isMastered,
  onToggleMastered
}) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#38BDF8');
  const [brushSize, setBrushSize] = useState(12);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      clearCanvas();
    }
  }, [isOpen, consonant]);

  if (!isOpen || !consonant) return null;

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    setIsDrawing(true);
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    setHasDrawn(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl p-5 bg-white border-3 border-sky-300 rounded-3xl shadow-cartoon max-h-[92vh] overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b-2 border-slate-100 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-sky-100 text-sky-600 rounded-2xl">
              <PenTool className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-800">
                Trace {consonant.phonetic} ({consonant.char})
              </h3>
              <p className="text-xs font-semibold text-slate-500 font-thai">
                {consonant.name} - {consonant.vocabEng}
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

        {/* Tracing Canvas Area */}
        <div className="relative flex flex-col items-center justify-center p-4 bg-slate-50 border-2 border-slate-200 rounded-3xl mb-4">
          
          {/* Background Reference Symbol Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <span className="text-[180px] font-black font-thai text-sky-900 select-none">
              {consonant.char}
            </span>
          </div>

          <canvas
            ref={canvasRef}
            width={320}
            height={320}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="relative z-10 touch-none bg-transparent cursor-crosshair rounded-2xl"
          />

          {!hasDrawn && (
            <p className="absolute z-0 text-xs font-bold text-slate-400 bottom-3 animate-pulse">
              ✏️ Use your finger or mouse to trace over the letter!
            </p>
          )}
        </div>

        {/* Drawing Tools Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-100 rounded-2xl mb-4">
          
          {/* Color Palette */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Color:</span>
            {['#38BDF8', '#4ADE80', '#FACC15', '#FF76CE', '#A855F7', '#1E293B'].map((color) => (
              <button
                key={color}
                onClick={() => setBrushColor(color)}
                className={`w-6 h-6 rounded-full border-2 transition-transform ${
                  brushColor === color ? 'scale-125 border-white ring-2 ring-sky-400' : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Action Buttons (Clear & Audio) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundSystem.playSfx('pop');
                clearCanvas();
              }}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>

            <button
              onClick={() => soundSystem.speakThai(`${consonant.char} ${consonant.vocabThai}`)}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-sky-700 bg-sky-100 border border-sky-300 rounded-xl hover:bg-sky-200"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Audio</span>
            </button>
          </div>
        </div>

        {/* Tracing Instructions Tip */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl mb-4 text-xs text-amber-900 leading-relaxed">
          <span className="font-bold block mb-0.5">💡 Stroke Guide:</span>
          {consonant.tracingGuide}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => {
              soundSystem.playSfx('correct');
              onToggleMastered(consonant.id);
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-extrabold rounded-2xl border-2 transition-all shadow-cartoon-sm btn-cartoon-push ${
              isMastered
                ? 'bg-emerald-500 text-white border-emerald-600'
                : 'bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>{isMastered ? 'Mastered!' : 'Mark as Mastered'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
