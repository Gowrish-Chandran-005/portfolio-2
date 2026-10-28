import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Sparkles, 
  BookOpen, 
  FolderOpen, 
  Layers, 
  Compass, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { IllustrationStudioModifier } from './IllustrationStudioModifier';
import { SectionId } from '../types';

interface Plate01EntranceProps {
  onNavigate: (section: SectionId) => void;
  onOpenWork: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const Plate01Entrance: React.FC<Plate01EntranceProps> = ({
  onNavigate,
  onOpenWork,
  onOpenAbout,
  onOpenContact
}) => {
  const letters = ['G', 'O', 'W', 'R', 'I', 'S', 'H'];

  return (
    <section id="plate-01" className="relative pt-24 sm:pt-28 pb-16 px-4 sm:px-8 lg:px-12 bg-[#fcf9f2] overflow-hidden">
      {/* Background Archival Paper Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-25 paper-grain" />

      {/* Grid Guide Watermarks */}
      <div className="absolute top-28 left-6 hidden xl:block pointer-events-none opacity-20 font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#1c1c18]">
        + GRID REF: 01.00.A // ARCHIVE ENTRANCE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Technical Metadata Ledger Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#1c1c18] pb-3 text-xs font-['Space_Grotesk'] font-bold text-[#464742]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#355e9e] animate-ping" />
            <span className="text-[#1c1c18] uppercase tracking-wider">
              GOWRISH CHANDRAN S — DESIGN PORTFOLIO • 2025–2026
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden sm:inline-block bg-[#f0eee7] px-2 py-0.5 border border-[#1c1c18]/30">
              FOLIO ARCHIVE NO. 01
            </span>
            <span className="bg-[#ffdead] text-[#281900] px-2.5 py-0.5 border border-[#1c1c18] flex items-center gap-1 shadow-xs">
              <CheckCircle2 className="w-3 h-3 text-[#1c1c18]" />
              STATUS: INK DRY / VERIFIED
            </span>
          </div>
        </div>

        {/* Main 2-Column Hero Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Bold Typography & Editorial Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Overline Tape Badge */}
            <div className="inline-flex items-center gap-2 self-start mb-4 bg-[#ffdead] border border-[#1c1c18] px-3 py-1 shadow-ink-sm rotate-[-1deg]">
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#1c1c18]">
                THE ENTRANCE • PLATE 01
              </span>
            </div>

            {/* Main Staggered Letter Animated Headline "GOWRISH" */}
            <div className="relative mb-2">
              <h1 className="font-['Anton'] text-7xl sm:text-8xl md:text-9xl tracking-tight uppercase text-[#1c1c18] leading-[0.88] select-none flex flex-wrap">
                {letters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -4 : 4 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.06,
                      ease: [0.2, 0.65, 0.3, 0.9]
                    }}
                    whileHover={{
                      y: -14,
                      scale: 1.15,
                      color: index % 2 === 0 ? '#355e9e' : '#fabc4d',
                      rotate: index % 2 === 0 ? 6 : -6,
                      transition: { type: 'spring', stiffness: 450, damping: 15 }
                    }}
                    data-cursor={char}
                    className="inline-block cursor-pointer transition-colors"
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>

              {/* Animated Ink Brush Underline SVG */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                whileHover={{ scaleY: 1.3, stroke: '#fabc4d' }}
                transition={{ duration: 0.9, delay: 0.6 }}
                viewBox="0 0 400 24"
                className="w-64 sm:w-80 h-6 text-[#355e9e] fill-none stroke-current stroke-[6] stroke-linecap-round stroke-linejoin-round mt-2 cursor-pointer transition-all"
              >
                <path d="M 4 14 Q 90 22 200 12 T 396 16" />
              </motion.svg>
            </div>

            {/* Subheading Badges with hard offset shadows & hover lift */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 my-4"
            >
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider bg-[#1c1c18] text-[#ffffff] px-3 py-1 border-2 border-[#1c1c18] shadow-ink-sm hover:-translate-y-1 hover:shadow-ink hover:bg-[#355e9e] transition-all cursor-default">
                Designer
              </span>
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider bg-[#355e9e] text-[#ffffff] px-3 py-1 border-2 border-[#1c1c18] shadow-ink-sm hover:-translate-y-1 hover:shadow-ink hover:bg-[#1c1c18] transition-all cursor-default">
                Visual Storyteller
              </span>
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider bg-[#fabc4d] text-[#1c1c18] px-3 py-1 border-2 border-[#1c1c18] shadow-ink-sm hover:-translate-y-1 hover:shadow-ink hover:bg-[#ffdead] transition-all cursor-default">
                Creative Technologist
              </span>
            </motion.div>

            {/* Statement Box with Realistic Drafting Tape Overlay & 3D Tilt Hover */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ 
                x: -3, 
                y: -3, 
                rotate: -0.5,
                transition: { type: 'spring', stiffness: 300 } 
              }}
              data-cursor="MANIFESTO"
              className="relative my-4 p-5 sm:p-6 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-lg hover:shadow-ink-xl max-w-xl group transition-shadow duration-300"
            >
              {/* Tape Strips on Statement Box that wiggle on group hover */}
              <div 
                className="absolute -top-3.5 left-8 w-24 h-6 bg-[#ffdead]/90 border border-[#fabc4d]/70 rotate-[-2deg] group-hover:rotate-[-5deg] group-hover:scale-105 shadow-xs pointer-events-none transition-transform duration-300"
                style={{ clipPath: 'polygon(0% 0%, 98% 3%, 95% 97%, 2% 94%)' }}
              />

              <h2 className="font-['Anton'] text-2xl sm:text-3xl uppercase tracking-wide text-[#1c1c18] leading-tight mb-2 group-hover:text-[#355e9e] transition-colors">
                “A public speaker who can tell stories through design too.”
              </h2>
              <p className="font-['Epilogue'] text-sm sm:text-base text-[#464742] leading-relaxed">
                Working at the intersection of editorial illustration, creative direction, and tactile design systems. Every layout drafted with physical ink precision, intentional negative space, and relentless clarity.
              </p>
            </motion.div>

            {/* Action Buttons with Tactile Press & Shimmer Effects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 mb-6"
            >
              <button
                onClick={onOpenWork}
                data-cursor="PORTFOLIO"
                className="group relative overflow-hidden inline-flex items-center gap-2 font-['Space_Grotesk'] text-xs sm:text-sm uppercase font-bold tracking-wider px-6 py-3.5 bg-[#fabc4d] text-[#1c1c18] border-2 border-[#1c1c18] shadow-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-ink-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              >
                {/* Shimmer sweep */}
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
                <FolderOpen className="w-4 h-4 group-hover:rotate-6 transition-transform" />
                Explore Selected Work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('plate-03')}
                data-cursor="ASCENT"
                className="group inline-flex items-center gap-2 font-['Space_Grotesk'] text-xs sm:text-sm uppercase font-bold tracking-wider px-5 py-3.5 bg-[#ffffff] text-[#1c1c18] border-2 border-[#1c1c18] shadow-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-ink-lg hover:border-[#355e9e] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#355e9e] group-hover:scale-110 transition-transform" />
                Read The Story
              </button>

              <div className="font-['Space_Grotesk'] text-[11px] text-[#767872] px-2 py-1 font-semibold border-l-2 border-[#1c1c18]/20 hidden sm:block">
                EDITION 04 • 100% COTTON RAG
              </div>
            </motion.div>

            {/* Spec Index Bar with interactive hover cards */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-2 border-2 border-[#1c1c18] p-3 mt-2 bg-[#f0eee7]/80 shadow-ink-sm max-w-xl"
            >
              <div className="hover:bg-[#ffffff] p-2 border border-transparent hover:border-[#1c1c18] transition-all cursor-default group">
                <span className="block font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#767872] group-hover:text-[#1c1c18]">
                  Medium
                </span>
                <span className="font-['Anton'] text-sm sm:text-base uppercase tracking-wider text-[#1c1c18] group-hover:text-[#355e9e] transition-colors">
                  INK • CODE
                </span>
              </div>
              <div className="border-l border-[#1c1c18]/20 hover:bg-[#ffffff] p-2 border border-transparent hover:border-[#1c1c18] transition-all cursor-default group">
                <span className="block font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#767872] group-hover:text-[#1c1c18]">
                  Location
                </span>
                <span className="font-['Anton'] text-sm sm:text-base uppercase tracking-wider text-[#1c1c18] group-hover:text-[#355e9e] transition-colors">
                  GLOBAL / IN
                </span>
              </div>
              <div className="border-l border-[#1c1c18]/20 hover:bg-[#ffffff] p-2 border border-transparent hover:border-[#1c1c18] transition-all cursor-default group">
                <span className="block font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#767872] group-hover:text-[#1c1c18]">
                  Tactility
                </span>
                <span className="font-['Anton'] text-sm sm:text-base uppercase tracking-wider text-[#355e9e] group-hover:text-[#fabc4d] transition-colors">
                  300 GSM
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Illustration Studio Modifier */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <IllustrationStudioModifier onOpenWorkModal={onOpenWork} />
          </div>
        </div>

        {/* Section Broad-Nav Quick Jumps (From Image 2 bottom bar) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-14 pt-8 border-t-2 border-[#1c1c18]"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-['Space_Grotesk'] text-xs uppercase font-bold text-[#767872] tracking-widest flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#355e9e] animate-spin" style={{ animationDuration: '10s' }} />
              ATELIER STATIONS // QUICK JUMP
            </span>
            <span className="font-['Space_Grotesk'] text-[11px] text-[#464742] font-semibold">
              4 CHRONICLE PLATES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              onClick={onOpenWork}
              data-cursor="GALLERY"
              className="p-3.5 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink hover:shadow-cobalt-lg hover:border-[#355e9e] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] font-bold text-[#767872] mb-1">
                <span className="group-hover:text-[#355e9e] transition-colors">SEC 01</span>
                <ArrowUpRight className="w-4 h-4 text-[#355e9e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div className="font-['Anton'] text-lg uppercase text-[#1c1c18] group-hover:text-[#355e9e] transition-colors">
                WORK ARCHIVE
              </div>
              <div className="font-['Epilogue'] text-xs text-[#464742]">
                14 Curated Case Studies
              </div>
            </button>

            <button
              onClick={() => onNavigate('plate-03')}
              data-cursor="JOURNEY"
              className="p-3.5 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink hover:shadow-ochre hover:border-[#fabc4d] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] font-bold text-[#767872] mb-1">
                <span className="group-hover:text-[#fabc4d] transition-colors">SEC 02</span>
                <ArrowUpRight className="w-4 h-4 text-[#fabc4d] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div className="font-['Anton'] text-lg uppercase text-[#1c1c18] group-hover:text-[#355e9e] transition-colors">
                STORY & ASCENT
              </div>
              <div className="font-['Epilogue'] text-xs text-[#464742]">
                Narrative & 5-Step Vector
              </div>
            </button>

            <button
              onClick={onOpenAbout}
              data-cursor="PHILOSOPHY"
              className="p-3.5 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink hover:shadow-cobalt-lg hover:border-[#355e9e] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] font-bold text-[#767872] mb-1">
                <span className="group-hover:text-[#355e9e] transition-colors">SEC 03</span>
                <ArrowUpRight className="w-4 h-4 text-[#355e9e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div className="font-['Anton'] text-lg uppercase text-[#1c1c18] group-hover:text-[#355e9e] transition-colors">
                ABOUT & ATELIER
              </div>
              <div className="font-['Epilogue'] text-xs text-[#464742]">
                Manifesto & Toolkit
              </div>
            </button>

            <button
              onClick={onOpenContact}
              data-cursor="TELEGRAPH"
              className="p-3.5 bg-[#ffdead] border-2 border-[#1c1c18] shadow-ink hover:shadow-ink-lg hover:bg-[#fabc4d] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] font-bold text-[#281900] mb-1">
                <span>SEC 04</span>
                <ArrowUpRight className="w-4 h-4 text-[#1c1c18] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div className="font-['Anton'] text-lg uppercase text-[#1c1c18]">
                INITIATE CONTACT
              </div>
              <div className="font-['Epilogue'] text-xs text-[#281900]">
                Commissions & Keynotes
              </div>
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator with Bouncing Pen Stroke */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <button
            onClick={() => onNavigate('plate-02')}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#464742] font-bold group-hover:text-[#355e9e] transition-colors">
              SCROLL TO START THE RIDE
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-8 h-8 rounded-full bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm flex items-center justify-center"
            >
              <ArrowDown className="w-4 h-4 text-[#1c1c18]" />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Hand-Torn Deckled Jagged Edge Divider transitioning into Plate 02 */}
      <div className="absolute -bottom-1 left-0 right-0 h-4 bg-[#f0eee7] deckle-torn-bottom pointer-events-none" />
    </section>
  );
};
