import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Check, 
  ArrowRight, 
  ArrowUpRight, 
  Terminal, 
  Compass, 
  PenTool, 
  Sliders, 
  Eye
} from 'lucide-react';
import { ASSET_IMAGES, CHRONOLOGY_NODES, PRIMARY_ATTRIBUTES } from '../data/portfolioData';
import { SectionId } from '../types';

interface Plate02IntroductionProps {
  onNavigate: (section: SectionId) => void;
  onOpenAbout: () => void;
}

export const Plate02Introduction: React.FC<Plate02IntroductionProps> = ({
  onNavigate,
  onOpenAbout
}) => {
  const [activeNode, setActiveNode] = useState<string>('node-04');
  const [selectedAttribute, setSelectedAttribute] = useState<string | null>(null);

  return (
    <section id="plate-02" className="relative py-20 px-4 sm:px-8 lg:px-12 bg-[#f0eee7] border-b-2 border-[#1c1c18] overflow-hidden">
      {/* Archival Grid Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-hatch-pattern" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Technical Registry Top Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between border-b-2 border-[#1c1c18] pb-3 text-xs font-['Space_Grotesk'] font-bold text-[#464742]">
          <div className="flex items-center gap-3">
            <span className="bg-[#1c1c18] text-[#ffffff] px-2.5 py-0.5 uppercase tracking-widest font-mono">
              FRAME 02 / INTRODUCTION
            </span>
            <span className="text-[#1c1c18] uppercase tracking-wider hidden sm:inline">
              LOG: ACTIVE STUDIO DISPATCH
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#355e9e] animate-pulse" />
            <span className="font-mono text-[#1c1c18] font-bold">STATION NO. 02</span>
          </div>
        </div>

        {/* 2-Column Dossier Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Framed Studio Drafting Portrait + Process Memo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Studio Photo in Technical Drafting Frame */}
            <motion.div 
              whileHover={{ scale: 1.02, rotate: 0, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              data-cursor="DRAFTING"
              className="relative bg-[#ffffff] p-4 border-2 border-[#1c1c18] shadow-ink-lg hover:shadow-ink-xl rotate-[-0.5deg] group transition-all"
            >
              {/* Corner Drafting Masking Tape */}
              <div 
                className="absolute -top-3 left-10 w-28 h-6 bg-[#ffdead] opacity-90 border border-[#fabc4d]/60 rotate-[-3deg] group-hover:rotate-[-5deg] shadow-xs pointer-events-none z-20 transition-transform"
                style={{ clipPath: 'polygon(2% 0%, 98% 3%, 95% 97%, 0% 93%)' }}
              />

              {/* Photo Caption Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1c1c18]/20 font-['Space_Grotesk'] text-[11px] font-bold text-[#464742]">
                <span>FIG. 02A • PROTOTYPE STUDIO</span>
                <span className="text-[#355e9e] group-hover:text-[#fabc4d] transition-colors">INK DRAFT • CODEX</span>
              </div>

              {/* Studio Desk Photo */}
              <div className="relative overflow-hidden border-2 border-[#1c1c18] bg-[#1c1c18] aspect-[4/3]">
                <img
                  src={ASSET_IMAGES.studioPortrait}
                  alt="Gowrish Chandran S at drafting desk"
                  className="w-full h-full object-cover filter contrast-105 saturate-95 group-hover:scale-108 transition-transform duration-700"
                />
                {/* Live Status Stamp Overlay */}
                <div className="absolute bottom-3 left-3 bg-[#1c1c18]/90 text-[#ffffff] px-2.5 py-1 text-[10px] font-mono uppercase font-bold border border-[#ffffff]/30 backdrop-blur-xs flex items-center gap-1.5 group-hover:border-[#fabc4d] transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#fabc4d] animate-ping" />
                  ONLINE IN ATELIER // CHENNAI
                </div>
              </div>

              {/* Photo Footer Metas */}
              <div className="mt-3 pt-2 border-t border-[#1c1c18]/20 flex items-center justify-between text-[10px] font-['Space_Grotesk'] font-bold text-[#767872]">
                <span>LIGHTING: 4000K WARM TUNGSTEN</span>
                <span>DESK: SOLID TEAK GRAPH</span>
              </div>
            </motion.div>

            {/* Process Methodology Notepad with 3D Tilt Hover */}
            <motion.div 
              whileHover={{ y: -3, rotate: 0.5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              data-cursor="MEMO"
              className="bg-[#fcf9f2] p-5 border-2 border-[#1c1c18] shadow-ink hover:shadow-ink-lg relative group"
            >
              <div className="flex items-center gap-2 mb-2 pb-1 border-b border-[#1c1c18]/20 text-[#1c1c18]">
                <PenTool className="w-4 h-4 text-[#355e9e] group-hover:rotate-12 transition-transform" />
                <span className="font-['Space_Grotesk'] text-xs uppercase font-bold tracking-wider">
                  Tactile Graph Friction Principle
                </span>
              </div>
              <p className="font-['Epilogue'] text-xs sm:text-sm text-[#464742] leading-relaxed italic">
                “Every interface starts as tactile graph friction. Before pixels hit the screen, structural grids are tested on 300 GSM cotton rag. Working in permanent ink forces rigorous intentionality because there is no undo button.”
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] font-['Space_Grotesk'] font-bold text-[#355e9e]">
                <span>— Atelier Rule No. 01</span>
                <button
                  onClick={onOpenAbout}
                  className="hover:underline text-[#1c1c18] flex items-center gap-1 font-bold cursor-pointer"
                >
                  Read Manifesto <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Introduction Headline + Attributes + Chronology */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 self-start mb-3 bg-[#1c1c18] text-[#ffffff] px-3 py-1 font-['Space_Grotesk'] text-xs uppercase tracking-widest font-bold shadow-ink-sm">
              <Terminal className="w-3 h-3 text-[#fabc4d]" />
              ATELIER DOSSIER
            </div>

            {/* Headline "I'M GOWRISH." with denim blue brush stroke highlight */}
            <div className="relative mb-2">
              <h2 className="font-['Anton'] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#1c1c18] leading-[0.95]">
                I'M GOWRISH.
              </h2>
              {/* Highlight Underline Accent */}
              <div className="h-3 w-44 bg-[#355e9e] -mt-2 -ml-1 opacity-90 shadow-sm" />
            </div>

            <h3 className="font-['Anton'] text-2xl sm:text-3xl uppercase tracking-wide text-[#355e9e] mt-2 mb-3">
              A designer who loves turning ideas into visuals.
            </h3>

            <p className="font-['Epilogue'] text-sm sm:text-base text-[#464742] leading-relaxed max-w-2xl mb-6">
              Working at the intersection of creative direction, visual storytelling, and tactile design systems. I believe good design doesn't whisper; it communicates with relentless conviction, whether through an oratorical keynote or a high-impact typographic poster.
            </p>

            {/* 4 Primary Personality Attributes (Dynamic Grid) */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3 text-xs font-['Space_Grotesk'] font-bold text-[#767872]">
                <span>PRIMARY ATTRIBUTES // CORE PILLARS</span>
                <span className="text-[#355e9e]">TAP CARD TO SELECT</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PRIMARY_ATTRIBUTES.map((attr) => (
                  <motion.div
                    key={attr.title}
                    whileHover={{ 
                      y: -6, 
                      scale: 1.03,
                      boxShadow: '6px 6px 0px 0px #1c1c18',
                      transition: { type: 'spring', stiffness: 400, damping: 18 } 
                    }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor={attr.title}
                    onClick={() => setSelectedAttribute(selectedAttribute === attr.title ? null : attr.title)}
                    className={`p-4 border-2 border-[#1c1c18] ${attr.bg} ${attr.textColor} ${attr.shadow} ${attr.rotate} transition-all cursor-pointer relative select-none group`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-['Space_Grotesk'] text-xs font-bold tracking-widest opacity-80">
                        {attr.number}
                      </span>
                      {selectedAttribute === attr.title ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <div className="font-['Anton'] text-xl uppercase tracking-wider">
                      {attr.title}
                    </div>
                    <p className="font-['Epilogue'] text-xs mt-1 leading-snug opacity-90 font-medium">
                      {attr.tagline}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CHRONOLOGY OF CRAFT & ACCRETION (Exact card from Image 6) */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="bg-[#ffffff] p-5 sm:p-6 border-2 border-[#1c1c18] shadow-ink-lg relative"
            >
              {/* Tape Accent */}
              <div 
                className="absolute -top-3 right-8 w-24 h-5 bg-[#ffdead] border border-[#fabc4d]/60 rotate-[2deg] shadow-xs pointer-events-none"
                style={{ clipPath: 'polygon(0% 0%, 96% 4%, 100% 95%, 4% 98%)' }}
              />

              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#1c1c18]">
                <div>
                  <h4 className="font-['Anton'] text-xl uppercase tracking-wide text-[#1c1c18]">
                    CHRONOLOGY OF CRAFT & ACCRETION
                  </h4>
                  <span className="font-['Space_Grotesk'] text-xs text-[#767872]">
                    Progressive Development Timeline
                  </span>
                </div>
                <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold bg-[#f0eee7] px-2 py-1 border border-[#1c1c18]">
                  4 STAGES
                </span>
              </div>

              {/* 4 Interactive Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CHRONOLOGY_NODES.map((node) => {
                  const isCurrent = node.tagType === 'current';
                  const isSelected = activeNode === node.id;
                  return (
                    <motion.div
                      key={node.id}
                      onClick={() => setActiveNode(node.id)}
                      whileHover={{ 
                        scale: 1.025, 
                        y: -3,
                        borderColor: '#355e9e'
                      }}
                      whileTap={{ scale: 0.98 }}
                      data-cursor={node.nodeNumber}
                      className={`p-3.5 border-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#fcf9f2] border-[#1c1c18] shadow-ink'
                          : 'bg-[#f6f3ec] border-[#1c1c18]/40 hover:border-[#1c1c18] hover:shadow-ink-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-['Space_Grotesk'] text-[10px] font-bold text-[#767872]">
                          {node.nodeNumber}
                        </span>
                        <span className={`font-['Space_Grotesk'] text-[9px] uppercase font-bold px-1.5 py-0.5 border ${
                          isCurrent 
                            ? 'bg-[#355e9e] text-[#ffffff] border-[#355e9e]' 
                            : 'bg-[#ffdead] text-[#1c1c18] border-[#1c1c18]'
                        }`}>
                          {node.date}
                        </span>
                      </div>
                      <div className="font-['Anton'] text-sm uppercase text-[#1c1c18] leading-tight mb-1">
                        {node.title}
                      </div>
                      <p className="font-['Epilogue'] text-[11px] text-[#464742] leading-relaxed">
                        {node.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Instruments Caliper Legend Bar */}
              <div className="mt-4 pt-3 border-t border-[#1c1c18]/20 flex flex-wrap items-center justify-between gap-2 text-xs font-['Space_Grotesk'] font-bold text-[#464742]">
                <div className="flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-[#355e9e]" />
                  <span>INSTRUMENTS:</span>
                  <span className="text-[#1c1c18] hover:text-[#355e9e] transition-colors">FIGMA</span>
                  <span className="text-[#767872]">•</span>
                  <span className="text-[#1c1c18] hover:text-[#355e9e] transition-colors">PHOTOSHOP</span>
                  <span className="text-[#767872]">•</span>
                  <span className="text-[#1c1c18] hover:text-[#355e9e] transition-colors">CARBON INK</span>
                </div>
                <button
                  onClick={() => onNavigate('plate-03')}
                  data-cursor="ASCENT"
                  className="inline-flex items-center gap-1.5 text-[#355e9e] hover:text-[#1c1c18] hover:underline font-bold cursor-pointer transition-colors"
                >
                  Inspect Vector Ascent <ArrowRight className="w-3.5 h-3.5 hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
