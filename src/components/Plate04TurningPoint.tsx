import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowUpRight, 
  Calendar, 
  FileText, 
  Share2, 
  Sparkles, 
  Layers, 
  Maximize2
} from 'lucide-react';
import { ASSET_IMAGES, CASE_STUDY_PLATES } from '../data/portfolioData';
import { CaseStudyPlate, SectionId } from '../types';

interface Plate04TurningPointProps {
  onOpenWorkModal: (plateId?: string) => void;
  onOpenContact: () => void;
}

export const Plate04TurningPoint: React.FC<Plate04TurningPointProps> = ({
  onOpenWorkModal,
  onOpenContact
}) => {
  const [selectedDeliverable, setSelectedDeliverable] = useState<CaseStudyPlate | null>(null);

  const deliverables = [
    {
      id: 'plate-04-social',
      title: 'Social Media',
      subtitle: 'Instagram Carousels & Broadside Posts',
      badge: 'DELIVERABLE 01',
      outputCount: '15+ Layouts',
      image: ASSET_IMAGES.socialDeliverable,
      caption: 'Grid feeds engineered to halt the thumb scroll with bold woodblock typography and blueprint blues.'
    },
    {
      id: 'plate-04-event',
      title: 'Event Comm.',
      subtitle: 'Physical Agenda & Speaker Broadsheets',
      badge: 'DELIVERABLE 02',
      outputCount: 'Bi-Weekly Print',
      image: ASSET_IMAGES.eventDeliverable,
      caption: 'Tangible printed agendas distributed to 60+ attendees every fortnight, becoming collector artifacts.'
    },
    {
      id: 'plate-04-posters',
      title: 'Posters',
      subtitle: 'Speech Marathon Broadside Editions',
      badge: 'DELIVERABLE 03',
      outputCount: '10 Key Editions',
      image: ASSET_IMAGES.posterDeliverable,
      caption: 'Exhibition-scale 18×24" posters celebrating the tension, stakes, and courage of public oratory.'
    }
  ];

  return (
    <section id="plate-04" className="relative py-20 px-4 sm:px-8 lg:px-12 bg-[#f0eee7] border-b-2 border-[#1c1c18] overflow-hidden">
      {/* Grid Guide Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-hatch-pattern" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Ledger Registry Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between border-b-2 border-[#1c1c18] pb-3 text-xs font-['Space_Grotesk'] font-bold text-[#464742]">
          <div className="flex items-center gap-3">
            <span className="bg-[#355e9e] text-[#ffffff] px-2.5 py-0.5 uppercase tracking-widest font-mono">
              ARCHIVE FILE 04/12
            </span>
            <span className="text-[#1c1c18] uppercase tracking-wider hidden sm:inline">
              CHRONOLOGY: ATELIER EPOCH
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#fabc4d]" />
            <span className="font-mono text-[#1c1c18]">MADRAS CHAPTER DESK</span>
          </div>
        </div>

        {/* Section Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3 bg-[#1c1c18] text-[#ffffff] px-3 py-1 font-['Space_Grotesk'] text-xs uppercase tracking-widest font-bold shadow-ink-sm">
            <Users className="w-3.5 h-3.5 text-[#fabc4d]" />
            THE TURNING POINT // PUBLIC UTILITY
          </div>

          <h2 className="font-['Anton'] text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#1c1c18] leading-[0.95] mt-2">
            THEN I GOT THE{' '}
            <motion.span 
              whileHover={{ rotate: 2, scale: 1.05 }}
              className="relative inline-block bg-[#fabc4d] text-[#1c1c18] px-2.5 py-0.5 border-2 border-[#1c1c18] shadow-ink-sm rotate-[-1deg] cursor-pointer transition-transform"
            >
              CHANCE
            </motion.span>
            <br />
            TO DESIGN FOR PEOPLE.
          </h2>

          {/* Toastmasters Officer Badges & Field Metrics with Hover Lift */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <motion.div 
              whileHover={{ y: -3, scale: 1.04 }}
              className="bg-[#355e9e] text-[#ffffff] px-3.5 py-1.5 border-2 border-[#1c1c18] shadow-ink-sm font-['Space_Grotesk'] text-xs uppercase font-bold flex items-center gap-1.5 cursor-default"
            >
              <Award className="w-4 h-4 text-[#fabc4d]" />
              TOASTMASTERS VPPR
            </motion.div>

            <motion.div 
              whileHover={{ y: -3, scale: 1.04 }}
              className="bg-[#ffffff] text-[#1c1c18] px-3 py-1.5 border-2 border-[#1c1c18] shadow-ink-sm font-['Space_Grotesk'] text-xs font-bold cursor-default"
            >
              OUTPUT: ~10 DESIGNS
            </motion.div>

            <motion.div 
              whileHover={{ y: -3, scale: 1.04 }}
              className="bg-[#ffffff] text-[#1c1c18] px-3 py-1.5 border-2 border-[#1c1c18] shadow-ink-sm font-['Space_Grotesk'] text-xs font-bold cursor-default"
            >
              TENURE: 6 MONTHS
            </motion.div>

            <motion.div 
              whileHover={{ y: -3, scale: 1.04 }}
              className="bg-[#ffdead] text-[#281900] px-3 py-1.5 border-2 border-[#1c1c18] shadow-ink-sm font-['Space_Grotesk'] text-xs font-bold cursor-default"
            >
              ROLE: VPPR OFFICER
            </motion.div>
          </div>

          <p className="font-['Epilogue'] text-base sm:text-lg text-[#464742] leading-relaxed mt-6 max-w-3xl">
            Serving as Vice President Public Relations meant shifting from solitary experiments to public responsibility. Every design was an invitation: to attend a speech, to overcome stage fright, or to celebrate someone's voice.
          </p>
        </motion.div>

        {/* 3 Deliverables in the Wild (Image 8 Exact Triad) */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <div className="flex items-center justify-between mb-4 border-b-2 border-[#1c1c18] pb-2">
            <span className="font-['Space_Grotesk'] text-xs uppercase font-bold text-[#767872] tracking-wider">
              DELIVERABLES IN THE WILD // PHYSICAL & DIGITAL COLLATERAL
            </span>
            <span className="font-['Space_Grotesk'] text-[11px] text-[#355e9e] font-semibold">
              TAP CARD TO EXPAND
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: '8px 8px 0px 0px #1c1c18',
                  transition: { type: 'spring', stiffness: 350, damping: 18 }
                }}
                whileTap={{ scale: 0.98 }}
                data-cursor="EXPAND"
                onClick={() => onOpenWorkModal(item.id)}
                className="bg-[#ffffff] p-4 border-2 border-[#1c1c18] shadow-ink-lg flex flex-col justify-between cursor-pointer group select-none relative transition-all"
              >
                {/* Masking tape on top center that wiggles on hover */}
                <div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#ffdead] border border-[#fabc4d]/60 rotate-[1deg] group-hover:rotate-[-2deg] shadow-xs pointer-events-none z-10 transition-transform duration-300"
                  style={{ clipPath: 'polygon(0% 0%, 98% 3%, 95% 97%, 2% 94%)' }}
                />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1c1c18]/20 font-['Space_Grotesk'] text-[11px] font-bold">
                    <span className="text-[#355e9e] group-hover:text-[#fabc4d] transition-colors">{item.badge}</span>
                    <span className="bg-[#f0eee7] px-2 py-0.5 border border-[#1c1c18]/30">
                      {item.outputCount}
                    </span>
                  </div>

                  {/* Thumbnail Frame with zoom */}
                  <div className="relative aspect-[4/3] bg-[#f6f3ec] border-2 border-[#1c1c18] overflow-hidden mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#1c1c18]/5 group-hover:opacity-0 transition-opacity" />
                    <div className="absolute bottom-2 right-2 p-1.5 bg-[#ffffff] border border-[#1c1c18] shadow-ink-sm text-[#1c1c18] group-hover:bg-[#fabc4d] transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-['Anton'] text-2xl uppercase tracking-wider text-[#1c1c18] mb-1 group-hover:text-[#355e9e] transition-colors">
                    {item.title}
                  </h3>
                  <div className="font-['Space_Grotesk'] text-xs font-bold text-[#767872] uppercase mb-2">
                    {item.subtitle}
                  </div>
                  <p className="font-['Epilogue'] text-xs text-[#464742] leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1c1c18]/20 flex items-center justify-between text-xs font-['Space_Grotesk'] font-bold text-[#1c1c18]">
                  <span className="group-hover:text-[#355e9e] transition-colors">EXAMINE PLATE</span>
                  <ArrowUpRight className="w-4 h-4 text-[#355e9e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Translation of Practice Quote Callout Block with 3D Tilt Hover */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ y: -3, rotate: 0.2 }}
          transition={{ duration: 0.4 }}
          data-cursor="THE DUAL CRAFT"
          className="bg-[#ffffff] p-6 sm:p-8 border-2 border-[#1c1c18] shadow-ink-lg mb-12 relative group"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-['Space_Grotesk'] text-xs uppercase font-bold text-[#355e9e] tracking-widest block mb-2">
                TRANSLATION OF PRACTICE // THE DUAL CRAFT
              </span>
              <p className="font-['Anton'] text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide text-[#1c1c18] leading-tight group-hover:text-[#1c1c18] transition-colors">
                “PUBLIC SPEAKING TAUGHT ME HOW TO COMMUNICATE WITH WORDS.
                <br />
                <span className="text-[#355e9e] group-hover:text-[#fabc4d] transition-colors">
                  DESIGN TAUGHT ME HOW TO COMMUNICATE WITHOUT THEM.”
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-2 min-w-[200px] border-l-2 md:border-l-2 border-[#1c1c18]/20 pl-0 md:pl-6">
              <span className="font-['Space_Grotesk'] text-xs uppercase font-bold text-[#767872]">
                SYNTHESIS METRIC:
              </span>
              <div className="font-['Anton'] text-xl text-[#1c1c18]">
                VOICE × VISUALS
              </div>
              <span className="font-['Epilogue'] text-xs text-[#464742]">
                Every deck, every poster, every interface treated as an oratorical performance on paper.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Anchored Climax Banner: "THAT'S WHERE DESIGN STARTED FEELING REAL." */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1c1c18] text-[#ffffff] p-8 sm:p-12 border-2 border-[#1c1c18] shadow-ink-xl text-center relative overflow-hidden"
        >
          {/* Subtle Paper Grain Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-hatch-pattern" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="font-['Space_Grotesk'] text-xs uppercase font-bold tracking-widest text-[#fabc4d] mb-3">
              ARCHIVAL CONCLUSION • PLATE 04-FINAL
            </span>

            <h3 className="font-['Anton'] text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#ffffff] leading-[0.95] mb-6">
              THAT'S WHERE DESIGN STARTED FEELING REAL.
            </h3>

            <p className="font-['Epilogue'] text-sm sm:text-base text-[#dcdad3] max-w-xl mb-8 leading-relaxed">
              When design leaves the isolation of software and enters physical circulation, it ceases to be an aesthetic exercise. It becomes culture.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenWorkModal()}
                data-cursor="PORTFOLIO"
                className="group relative overflow-hidden inline-flex items-center gap-2 font-['Space_Grotesk'] text-xs sm:text-sm uppercase font-bold tracking-wider px-6 py-3.5 bg-[#fabc4d] text-[#1c1c18] border-2 border-[#1c1c18] shadow-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-ink-lg active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
                <Layers className="w-4 h-4 group-hover:rotate-6 transition-transform" />
                Examine All Folio Plates (14)
              </button>

              <button
                onClick={onOpenContact}
                data-cursor="COMMISSION"
                className="group inline-flex items-center gap-2 font-['Space_Grotesk'] text-xs sm:text-sm uppercase font-bold tracking-wider px-6 py-3.5 bg-[#ffffff] text-[#1c1c18] border-2 border-[#1c1c18] shadow-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-ink-lg hover:border-[#355e9e] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              >
                Commission Studio Project
                <ArrowUpRight className="w-4 h-4 text-[#355e9e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
