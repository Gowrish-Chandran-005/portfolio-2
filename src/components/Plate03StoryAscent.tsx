import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  PenTool, 
  BookOpen, 
  Info,
  ChevronRight
} from 'lucide-react';
import { TOOLCHAIN_STEPS } from '../data/portfolioData';
import { ToolchainStep, SectionId } from '../types';

interface Plate03StoryAscentProps {
  onNavigate: (section: SectionId) => void;
  onOpenWork: () => void;
}

export const Plate03StoryAscent: React.FC<Plate03StoryAscentProps> = ({
  onNavigate,
  onOpenWork
}) => {
  const [activeStep, setActiveStep] = useState<ToolchainStep>(TOOLCHAIN_STEPS[4]); // Default to Apex

  const beats = [
    {
      num: '01',
      title: 'EXPERIMENT',
      subtitle: 'The Genesis',
      description: 'Making movie and sports posters for the sheer love of it. Pure intuition, raw energy, zero formal constraints.',
      accent: 'bg-[#ffdead]',
      border: 'border-[#fabc4d]'
    },
    {
      num: '02',
      title: 'EXPLORE',
      subtitle: 'The Inquiry',
      description: 'Pushing beyond default templates. Asking why certain layouts hold attention while others collapse under visual noise.',
      accent: 'bg-[#ffffff]',
      border: 'border-[#1c1c18]'
    },
    {
      num: '03',
      title: 'LEARN',
      subtitle: 'The Discipline',
      description: 'Mastering Swiss grid systems, typographic scale ratios, kerning tensions, and the mathematical beauty of negative space.',
      accent: 'bg-[#d7e3ff]',
      border: 'border-[#355e9e]'
    },
    {
      num: '04',
      title: 'CREATE',
      subtitle: 'The Calling',
      description: 'Fusing public oratorical storytelling with tactile carbon inking and modern interactive web engineering.',
      accent: 'bg-[#fabc4d]',
      border: 'border-[#1c1c18]'
    }
  ];

  return (
    <section id="plate-03" className="relative py-20 px-4 sm:px-8 lg:px-12 bg-[#fcf9f2] border-b-2 border-[#1c1c18] overflow-hidden">
      {/* Background Archival Paper Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-25 paper-grain" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Frame 03 Top Technical Ledger */}
        <div className="mb-8 flex flex-wrap items-center justify-between border-b-2 border-[#1c1c18] pb-3 text-xs font-['Space_Grotesk'] font-bold text-[#464742]">
          <div className="flex items-center gap-2">
            <span className="bg-[#fabc4d] text-[#1c1c18] px-2.5 py-0.5 uppercase tracking-widest font-mono border border-[#1c1c18]">
              FRAME 03 • FIELD DOSSIER
            </span>
            <span className="text-[#1c1c18] uppercase tracking-wider font-semibold">
              PEDAGOGICAL LOG [ARCHIVE 2019–2024]
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="hidden sm:inline-block">GRID REF: 53.04.B</span>
            <span className="bg-[#f0eee7] px-2 py-0.5 border border-[#1c1c18]">
              LAT: 12°58' N
            </span>
          </div>
        </div>

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-2 bg-[#ffdead] px-3 py-1 border border-[#1c1c18] shadow-ink-sm font-['Space_Grotesk'] text-xs uppercase tracking-widest font-bold rotate-[-1deg]">
            <BookOpen className="w-3.5 h-3.5 text-[#1c1c18]" />
            CHAPTER III // PEDAGOGICAL TRAJECTORY
          </div>

          <h2 className="font-['Anton'] text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#1c1c18] leading-[0.95] mt-3">
            I DIDN'T START AS A DESIGNER.
            <br />
            <span className="relative inline-block mt-1">
              <span className="relative z-10">I LEARNED MY WAY INTO IT.</span>
              <span className="absolute inset-0 bg-[#fabc4d] -rotate-[0.5deg] translate-y-2 -z-0 h-4/5 w-[102%] -left-1" />
            </span>
          </h2>

          <p className="font-['Epilogue'] text-base sm:text-lg text-[#464742] leading-relaxed mt-6 max-w-3xl">
            No formal design school degree or inherited studio lineage. Just obsessive curiosity, thousands of hours of deliberate repetitions, and a passion for turning complex thoughts into commanding visual statements.
          </p>
        </motion.div>

        {/* 4 Stepped Progressive Grid Beats (Genesis -> Inquiry -> Discipline -> Calling) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14"
        >
          <div className="flex items-center justify-between mb-4 border-b border-[#1c1c18]/20 pb-2">
            <span className="font-['Space_Grotesk'] text-xs uppercase font-bold text-[#767872] tracking-wider">
              FOUR CHRONICLED BEATS OF EVOLUTION
            </span>
            <span className="font-['Space_Grotesk'] text-[11px] text-[#355e9e] font-semibold">
              FIELD NOTES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {beats.map((beat, idx) => (
              <motion.div
                key={beat.num}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: '6px 6px 0px 0px #1c1c18',
                  transition: { type: 'spring', stiffness: 350, damping: 18 }
                }}
                data-cursor={beat.title}
                className={`p-5 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink flex flex-col justify-between relative group cursor-default`}
              >
                {/* Top Number Stamp */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-['Anton'] text-2xl text-[#1c1c18] group-hover:text-[#355e9e] transition-colors">
                      {beat.num}.
                    </span>
                    <span className={`font-['Space_Grotesk'] text-[10px] uppercase font-bold px-2 py-0.5 border ${beat.border} ${beat.accent}`}>
                      {beat.subtitle}
                    </span>
                  </div>

                  <h3 className="font-['Anton'] text-2xl uppercase tracking-wider text-[#1c1c18] mb-2 group-hover:text-[#355e9e] transition-colors">
                    {beat.title}
                  </h3>

                  <p className="font-['Epilogue'] text-xs sm:text-sm text-[#464742] leading-relaxed">
                    {beat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1c1c18]/15 flex items-center justify-between text-[11px] font-['Space_Grotesk'] font-bold text-[#767872]">
                  <span className="group-hover:text-[#1c1c18] transition-colors">BEAT 0{idx + 1}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#355e9e] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TECHNICAL VECTOR OF ASCENT (Isometric Stepped Elevation from Image 4) */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="bg-[#ffffff] p-6 sm:p-8 border-2 border-[#1c1c18] shadow-ink-lg relative"
        >
          {/* Header Strip inside card */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-[#1c1c18]">
            <div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#355e9e]" />
                <h3 className="font-['Anton'] text-2xl sm:text-3xl uppercase tracking-wider text-[#1c1c18]">
                  TECHNICAL VECTOR OF ASCENT
                </h3>
              </div>
              <p className="font-['Space_Grotesk'] text-xs text-[#767872] mt-0.5">
                Toolchain Elevation & Conceptual Milestones • Tap any tier to inspect
              </p>
            </div>
            <span className="font-['Space_Grotesk'] text-xs uppercase font-bold bg-[#ffdead] px-3 py-1 border border-[#1c1c18] shadow-ink-sm">
              5 LEVELS TO MASTERY
            </span>
          </div>

          {/* Stepped Elevation Bars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 items-end pt-4 pb-6">
            {TOOLCHAIN_STEPS.map((step) => {
              const isSelected = activeStep.name === step.name;
              return (
                <div key={step.name} className="flex flex-col items-center w-full">
                  {/* Step Level Badge */}
                  <span className="font-['Space_Grotesk'] text-[11px] font-bold text-[#464742] mb-1">
                    {step.year}
                  </span>

                  {/* Step Column Bar with spring hover */}
                  <motion.button
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor={step.name}
                    onClick={() => setActiveStep(step)}
                    className={`w-full ${step.heightClass} border-2 border-[#1c1c18] transition-all flex flex-col justify-between p-3 text-left relative cursor-pointer ${
                      step.isApex 
                        ? 'bg-[#355e9e] text-[#ffffff] shadow-ink hover:shadow-cobalt-lg' 
                        : isSelected
                          ? 'bg-[#fabc4d] text-[#1c1c18] shadow-ink-md'
                          : 'bg-[#f6f3ec] text-[#1c1c18] hover:bg-[#ebe8e1] shadow-ink-sm hover:border-[#355e9e]'
                    }`}
                  >
                    {/* Top Marker */}
                    <div className="flex items-center justify-between w-full">
                      <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold tracking-wider opacity-80">
                        {step.level}
                      </span>
                      {step.isApex && (
                        <span className="bg-[#fabc4d] text-[#1c1c18] text-[9px] uppercase font-bold px-1.5 py-0.5 border border-[#1c1c18]">
                          Apex
                        </span>
                      )}
                    </div>

                    {/* Step Title */}
                    <div>
                      <div className="font-['Anton'] text-lg sm:text-xl uppercase tracking-wider leading-tight">
                        {step.name}
                      </div>
                      <div className={`font-['Space_Grotesk'] text-[10px] uppercase font-bold mt-0.5 ${
                        step.isApex ? 'text-[#d7e3ff]' : 'text-[#464742]'
                      }`}>
                        {step.subtitle}
                      </div>
                    </div>
                  </motion.button>
                </div>
              );
            })}
          </div>

          {/* Active Step Detailed Inspection Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="mt-6 p-5 sm:p-6 bg-[#fcf9f2] border-2 border-[#1c1c18] shadow-ink"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-3 border-b border-[#1c1c18]/20">
                <div className="flex items-center gap-2">
                  <span className="font-['Anton'] text-2xl uppercase tracking-wider text-[#1c1c18]">
                    {activeStep.name} ({activeStep.year})
                  </span>
                  <span className="font-['Space_Grotesk'] text-xs bg-[#ffdead] px-2 py-0.5 border border-[#1c1c18] font-bold">
                    {activeStep.subtitle}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#767872]">
                    STATUS:
                  </span>
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#355e9e]">
                    INTEGRATED IN PRACTICE
                  </span>
                </div>
              </div>

              <p className="font-['Epilogue'] text-sm sm:text-base text-[#1c1c18] leading-relaxed mb-4">
                {activeStep.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-3 bg-[#ffffff] border border-[#1c1c18]">
                  <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#767872] block mb-1">
                    KEY PEDAGOGICAL BREAKTHROUGH
                  </span>
                  <p className="font-['Epilogue'] text-xs sm:text-sm text-[#464742] italic">
                    “{activeStep.breakthrough}”
                  </p>
                </div>

                <div className="p-3 bg-[#ffffff] border border-[#1c1c18]">
                  <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#767872] block mb-1">
                    PRIMARY STACK INSTRUMENTS
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {activeStep.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-['Space_Grotesk'] text-xs bg-[#f0eee7] text-[#1c1c18] px-2 py-0.5 border border-[#1c1c18]/40 font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Companion Callout & Studio Core Rule */}
          <div className="mt-6 pt-4 border-t-2 border-[#1c1c18] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1c1c18] text-[#ffffff] flex items-center justify-center font-['Anton'] text-xl">
                !
              </div>
              <div>
                <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#1c1c18] block">
                  ATELIER CORE RULE: CRAFT OVER COMFORT
                </span>
                <p className="font-['Epilogue'] text-xs text-[#464742]">
                  Tools are merely chisels in an atelier. The hand must outrun the interface.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('plate-04')}
              data-cursor="TURNING POINT"
              className="group relative overflow-hidden inline-flex items-center gap-2 font-['Space_Grotesk'] text-xs uppercase font-bold px-5 py-3 bg-[#355e9e] text-[#ffffff] border-2 border-[#1c1c18] shadow-ink hover:shadow-cobalt-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
              Advance to Plate 04 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
