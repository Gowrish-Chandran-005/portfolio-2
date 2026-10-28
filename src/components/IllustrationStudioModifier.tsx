import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Maximize2, 
  Sparkles, 
  Eye, 
  RotateCcw, 
  Layers, 
  Palette, 
  Check, 
  Info,
  PenTool
} from 'lucide-react';
import { ASSET_IMAGES, ILLUSTRATION_HOTSPOTS } from '../data/portfolioData';
import { IllustrationHotspot, IllustrationMode } from '../types';

interface IllustrationStudioModifierProps {
  onOpenWorkModal?: () => void;
}

export const IllustrationStudioModifier: React.FC<IllustrationStudioModifierProps> = () => {
  const [mode, setMode] = useState<IllustrationMode>('original');
  const [activeHotspot, setActiveHotspot] = useState<IllustrationHotspot | null>(null);
  const [showHotspots, setShowHotspots] = useState(true);
  const [showDoodleLayer, setShowDoodleLayer] = useState(false);
  const [inkDrops, setInkDrops] = useState<{ id: number; x: number; y: number; size: number; color: string }[]>([]);
  const [activeInkColor, setActiveInkColor] = useState<'#1c1c18' | '#355e9e' | '#fabc4d'>('#1c1c18');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!showDoodleLayer) return;
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newDrop = {
      id: Date.now(),
      x,
      y,
      size: Math.floor(Math.random() * 14) + 8,
      color: activeInkColor
    };
    setInkDrops((prev) => [...prev, newDrop]);
  };

  const clearInkDrops = () => {
    setInkDrops([]);
  };

  // Image filter styles based on selected mode
  const getImageFilterStyle = () => {
    switch (mode) {
      case 'blueprint':
        return 'invert(90%) hue-rotate(185deg) contrast(150%) brightness(95%)';
      case 'sepia':
        return 'sepia(85%) contrast(120%) brightness(96%) saturate(140%)';
      case 'studio':
        return 'none';
      default:
        return 'contrast(108%) brightness(101%)';
    }
  };

  const getContainerBg = () => {
    switch (mode) {
      case 'blueprint':
        return 'bg-[#1a3868]';
      case 'sepia':
        return 'bg-[#f4e8d0]';
      case 'studio':
        return 'bg-[#1c1c18]';
      default:
        return 'bg-[#ffffff]';
    }
  };

  return (
    <div className="w-full max-w-[480px] flex flex-col items-center lg:items-end">
      {/* Floating Sketchbook Panel */}
      <motion.div 
        layout
        className="relative w-full bg-[#ffffff] p-3 sm:p-5 border-2 border-[#1c1c18] shadow-ink-xl rotate-[0.6deg] hover:rotate-0 transition-transform duration-300 group"
      >
        {/* Mock Drafting Tape Corner Accents */}
        <div 
          className="absolute -top-3.5 -left-5 w-20 h-7 bg-[#ffdead] opacity-90 shadow-sm rotate-[-18deg] pointer-events-none z-20 border border-[#fabc4d]/50"
          style={{ clipPath: 'polygon(3% 0%, 97% 4%, 93% 96%, 0% 92%)' }}
        />
        <div 
          className="absolute -top-3.5 -right-5 w-20 h-7 bg-[#e5e2db] opacity-90 shadow-sm rotate-[14deg] pointer-events-none z-20 border border-[#c7c7c0]"
          style={{ clipPath: 'polygon(0% 2%, 96% 0%, 100% 94%, 4% 98%)' }}
        />

        {/* Header Strip Inside Folio */}
        <div className="flex items-center justify-between pb-2 mb-2 bg-[#f6f3ec] px-3 py-1.5 border border-[#1c1c18]/20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#355e9e] animate-pulse" />
            <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#1c1c18] font-bold">
              SKETCH REF: GC-07
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-['Space_Grotesk'] text-[10px] uppercase text-[#464742] tracking-wider font-semibold">
              DRAWING DESK VOL. IV
            </span>
          </div>
        </div>

        {/* Interactive Studio Modifier Tool Bar */}
        <div className="mb-2 p-1.5 bg-[#f0eee7] border border-[#1c1c18] flex flex-wrap items-center justify-between gap-1.5">
          <div className="flex items-center gap-1">
            <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#1c1c18] px-1 flex items-center gap-1">
              <Palette className="w-3 h-3 text-[#355e9e]" />
              MODE:
            </span>
            <button
              onClick={() => setMode('original')}
              className={`px-2 py-0.5 text-[10px] font-['Space_Grotesk'] uppercase font-bold tracking-wider transition-all border ${
                mode === 'original'
                  ? 'bg-[#1c1c18] text-[#ffffff] border-[#1c1c18] shadow-ink-sm'
                  : 'bg-[#ffffff] text-[#1c1c18] border-[#1c1c18]/40 hover:bg-[#ebe8e1]'
              }`}
            >
              Ink
            </button>
            <button
              onClick={() => setMode('blueprint')}
              className={`px-2 py-0.5 text-[10px] font-['Space_Grotesk'] uppercase font-bold tracking-wider transition-all border ${
                mode === 'blueprint'
                  ? 'bg-[#355e9e] text-[#ffffff] border-[#355e9e] shadow-ink-sm'
                  : 'bg-[#ffffff] text-[#1c1c18] border-[#1c1c18]/40 hover:bg-[#ebe8e1]'
              }`}
            >
              Blueprint
            </button>
            <button
              onClick={() => setMode('sepia')}
              className={`px-2 py-0.5 text-[10px] font-['Space_Grotesk'] uppercase font-bold tracking-wider transition-all border ${
                mode === 'sepia'
                  ? 'bg-[#fabc4d] text-[#1c1c18] border-[#1c1c18] shadow-ink-sm'
                  : 'bg-[#ffffff] text-[#1c1c18] border-[#1c1c18]/40 hover:bg-[#ebe8e1]'
              }`}
            >
              Ochre
            </button>
            <button
              onClick={() => setMode('studio')}
              className={`px-2 py-0.5 text-[10px] font-['Space_Grotesk'] uppercase font-bold tracking-wider transition-all border ${
                mode === 'studio'
                  ? 'bg-[#1c1c18] text-[#ffffff] border-[#1c1c18] shadow-ink-sm'
                  : 'bg-[#ffffff] text-[#1c1c18] border-[#1c1c18]/40 hover:bg-[#ebe8e1]'
              }`}
            >
              Studio
            </button>
          </div>

          <div className="flex items-center gap-1 ml-auto">
            {/* Hotspots Toggle */}
            <button
              onClick={() => setShowHotspots(!showHotspots)}
              title="Toggle Anatomical Hotspots"
              className={`p-1 border transition-colors ${
                showHotspots 
                  ? 'bg-[#355e9e] text-[#ffffff] border-[#1c1c18]' 
                  : 'bg-[#ffffff] text-[#767872] border-[#1c1c18]/30'
              }`}
            >
              <Eye className="w-3 h-3" />
            </button>
            {/* Draw / Ink stamp toggle */}
            <button
              onClick={() => setShowDoodleLayer(!showDoodleLayer)}
              title="Toggle Drawing & Ink Drops"
              className={`p-1 border transition-colors ${
                showDoodleLayer 
                  ? 'bg-[#fabc4d] text-[#1c1c18] border-[#1c1c18]' 
                  : 'bg-[#ffffff] text-[#767872] border-[#1c1c18]/30'
              }`}
            >
              <PenTool className="w-3 h-3" />
            </button>
            {/* Fullscreen zoom */}
            <button
              onClick={() => setIsFullscreen(true)}
              title="Inspect Hi-Res Ink Plate"
              className="p-1 bg-[#ffffff] hover:bg-[#e5e2db] text-[#1c1c18] border border-[#1c1c18]/40 transition-colors"
            >
              <Maximize2 className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Doodle Layer Controls (Conditional) */}
        {showDoodleLayer && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-2 p-1.5 bg-[#ffdead] border border-[#1c1c18] flex items-center justify-between text-xs"
          >
            <span className="font-['Space_Grotesk'] text-[10px] font-bold text-[#1c1c18] uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#1c1c18]" />
              Tap illustration to stamp ink drops!
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-['Space_Grotesk'] font-bold">Ink:</span>
              <button
                onClick={() => setActiveInkColor('#1c1c18')}
                className={`w-3.5 h-3.5 rounded-full bg-[#1c1c18] border ${activeInkColor === '#1c1c18' ? 'ring-2 ring-[#355e9e]' : ''}`}
              />
              <button
                onClick={() => setActiveInkColor('#355e9e')}
                className={`w-3.5 h-3.5 rounded-full bg-[#355e9e] border ${activeInkColor === '#355e9e' ? 'ring-2 ring-[#1c1c18]' : ''}`}
              />
              <button
                onClick={() => setActiveInkColor('#fabc4d')}
                className={`w-3.5 h-3.5 rounded-full bg-[#fabc4d] border ${activeInkColor === '#fabc4d' ? 'ring-2 ring-[#1c1c18]' : ''}`}
              />
              {inkDrops.length > 0 && (
                <button
                  onClick={clearInkDrops}
                  className="ml-1 px-1.5 py-0.5 bg-[#ffffff] border border-[#1c1c18] text-[9px] font-bold font-['Space_Grotesk'] uppercase flex items-center gap-0.5"
                >
                  <RotateCcw className="w-2.5 h-2.5" /> Clear
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* The Hand-Inked Sketch Image Container with Technical Accents */}
        <div 
          ref={imageContainerRef}
          onClick={handleCanvasClick}
          className={`relative ${getContainerBg()} overflow-hidden flex items-center justify-center p-2 border-2 border-[#1c1c18] shadow-inner select-none transition-colors duration-300 ${
            showDoodleLayer ? 'cursor-crosshair' : 'cursor-default'
          }`}
        >
          {/* Subtle Paper Grain */}
          <div className="absolute inset-0 pointer-events-none opacity-20 paper-grain" />

          {/* Technical Crosshairs in Corners */}
          <div className="absolute top-2 left-2 text-[#464742] pointer-events-none z-10">
            <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 12 12">
              <line x1="6" x2="6" y1="0" y2="12" strokeWidth="1.5" />
              <line x1="0" x2="12" y1="6" y2="6" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="absolute top-2 right-2 text-[#464742] pointer-events-none z-10">
            <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 12 12">
              <line x1="6" x2="6" y1="0" y2="12" strokeWidth="1.5" />
              <line x1="0" x2="12" y1="6" y2="6" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="absolute bottom-2 left-2 text-[#464742] pointer-events-none z-10">
            <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 12 12">
              <line x1="6" x2="6" y1="0" y2="12" strokeWidth="1.5" />
              <line x1="0" x2="12" y1="6" y2="6" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="absolute bottom-2 right-2 text-[#464742] pointer-events-none z-10">
            <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 12 12">
              <line x1="6" x2="6" y1="0" y2="12" strokeWidth="1.5" />
              <line x1="0" x2="12" y1="6" y2="6" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Character Image Switcher */}
          <AnimatePresence mode="wait">
            {mode === 'studio' ? (
              <motion.img
                key="studio-photo"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                alt="Gowrish at Drafting Desk"
                className="max-h-[480px] w-full object-cover p-1 filter contrast-110"
                src={ASSET_IMAGES.studioPortrait}
              />
            ) : (
              <motion.img
                key={`sketch-${mode}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                alt="Gowrish Hand-Inked Sketch"
                className="max-h-[480px] w-full object-contain p-1 rounded-xs transition-all duration-300"
                style={{ filter: getImageFilterStyle() }}
                src={ASSET_IMAGES.gowrishSketch}
              />
            )}
          </AnimatePresence>

          {/* Interactive Hotspot Pins on the Character with Pulsing Radar Rings */}
          {showHotspots && mode !== 'studio' && ILLUSTRATION_HOTSPOTS.map((hotspot) => (
            <div
              key={hotspot.id}
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
            >
              {/* Radar Pulse Wave */}
              <span className="absolute inset-0 rounded-full bg-[#fabc4d] opacity-75 animate-ping pointer-events-none" />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot);
                }}
                data-cursor="PIN"
                className={`relative flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#1c1c18] font-['Space_Grotesk'] text-[10px] font-bold shadow-ink-sm transition-all hover:scale-130 active:scale-95 cursor-pointer ${
                  activeHotspot?.id === hotspot.id
                    ? 'bg-[#fabc4d] text-[#1c1c18] ring-2 ring-[#355e9e] scale-120'
                    : 'bg-[#ffffff] text-[#1c1c18] hover:bg-[#fabc4d]'
                }`}
                title={hotspot.title}
              >
                +
              </button>
            </div>
          ))}

          {/* User's Stamped Ink Drops */}
          {inkDrops.map((drop) => (
            <motion.div
              key={drop.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.85 }}
              style={{
                left: `${drop.x}%`,
                top: `${drop.y}%`,
                width: `${drop.size}px`,
                height: `${drop.size}px`,
                backgroundColor: drop.color
              }}
              className="absolute rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-xs"
            />
          ))}

          {/* Active Hotspot Info Card Overlay */}
          <AnimatePresence>
            {activeHotspot && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-4 left-4 right-4 bg-[#fcf9f2] border-2 border-[#1c1c18] p-3 shadow-ink-md z-30"
              >
                <div className="flex items-center justify-between pb-1 border-b border-[#1c1c18]/30 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-['Anton'] text-sm uppercase text-[#1c1c18]">
                      {activeHotspot.title}
                    </span>
                  </div>
                  <span className="font-['Space_Grotesk'] text-[9px] uppercase font-bold bg-[#ffdead] px-1.5 py-0.5 border border-[#1c1c18]">
                    {activeHotspot.technique}
                  </span>
                </div>
                <p className="font-['Epilogue'] text-xs text-[#464742] leading-relaxed">
                  {activeHotspot.description}
                </p>
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="mt-2 text-[10px] font-['Space_Grotesk'] uppercase font-bold text-[#355e9e] hover:underline block ml-auto"
                >
                  Dismiss Callout ✕
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bold Signature Tag Bar */}
        <div className="mt-3 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-['Anton'] text-2xl uppercase tracking-wider text-[#1c1c18]">
                MEET GOWRISH
              </span>
              {/* Thick Mustard / Denim Blue Hand-Drawn Ink Underline */}
              <div className="h-2 w-36 bg-[#355e9e] mt-1 shadow-[2px_2px_0px_#fabc4d]" />
            </div>
            {/* Hand Stamp Indicator */}
            <div className="bg-[#ffdead] text-[#281900] px-3 py-1 font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold border-2 border-[#1c1c18] shadow-ink-sm rotate-[-2deg]">
              VERIFIED SUBJ.
            </div>
          </div>
          <p className="font-['Epilogue'] text-xs text-[#464742] mt-2 leading-relaxed">
            Hand-inked portrait study rendered in pigment liner on archival hot-press paper. Captured mid-thought.
          </p>
        </div>

        {/* Bottom Meta Ticker inside frame */}
        <div className="mt-3 pt-1.5 flex items-center justify-between bg-[#f0eee7] px-2.5 py-1 border border-[#1c1c18]/20">
          <span className="font-['Space_Grotesk'] text-[10px] uppercase text-[#1c1c18] font-bold">
            PLATE 01 • 896 × 1200 DPI
          </span>
          <div className="flex items-center gap-1 text-[#355e9e]">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
            <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold">INK DRY</span>
          </div>
        </div>
      </motion.div>

      {/* Pinned Atelier Memo Sticky Note */}
      <motion.div 
        whileHover={{ rotate: 0, scale: 1.02 }}
        className="mt-3 self-end lg:-mr-3 bg-[#ffdead] text-[#281900] p-3 border-2 border-[#1c1c18] shadow-ink rotate-[2.5deg] max-w-xs transition-all cursor-default"
      >
        <div className="flex items-center gap-1.5 mb-1 text-[#1c1c18]">
          <span className="w-2 h-2 rounded-full bg-[#1c1c18]" />
          <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-widest">
            ATELIER MEMO
          </span>
        </div>
        <p className="font-['Epilogue'] text-xs leading-snug text-[#281900] font-medium italic">
          “Pen lines don't have an undo button. That's where the conviction comes from.”
        </p>
      </motion.div>

      {/* Fullscreen Inspection Lightbox Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1c1c18]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-[#fcf9f2] border-4 border-[#1c1c18] p-4 sm:p-6 shadow-ink-xl flex flex-col items-center"
            >
              <div className="w-full flex items-center justify-between pb-3 mb-3 border-b-2 border-[#1c1c18]">
                <div>
                  <h3 className="font-['Anton'] text-xl uppercase tracking-wider text-[#1c1c18]">
                    Gowrish Chandran S — Study In Ink
                  </h3>
                  <span className="font-['Space_Grotesk'] text-xs text-[#464742]">
                    High-Fidelity Archival Plate Inspection
                  </span>
                </div>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="px-3 py-1 bg-[#1c1c18] text-[#ffffff] font-['Space_Grotesk'] text-xs uppercase font-bold hover:bg-[#355e9e] transition-colors"
                >
                  Close [ESC]
                </button>
              </div>

              <div className="relative w-full max-h-[70vh] overflow-auto flex items-center justify-center bg-white p-2 border-2 border-[#1c1c18]">
                <img
                  src={mode === 'studio' ? ASSET_IMAGES.studioPortrait : ASSET_IMAGES.gowrishSketch}
                  alt="High Resolution Inspect"
                  className="max-h-[60vh] object-contain"
                  style={{ filter: getImageFilterStyle() }}
                />
              </div>

              <div className="w-full mt-4 flex items-center justify-between text-xs font-['Space_Grotesk'] text-[#464742]">
                <span>ARCHIVAL NO: GC-07-HOTPRESS</span>
                <span className="bg-[#ffdead] px-2 py-0.5 font-bold text-[#1c1c18] border border-[#1c1c18]">
                  COTTON RAG 300 GSM
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
