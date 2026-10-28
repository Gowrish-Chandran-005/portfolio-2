import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Filter, Maximize2, Sparkles, Check, ArrowUpRight, FileText, Layers } from 'lucide-react';
import { CASE_STUDY_PLATES } from '../data/portfolioData';
import { CaseStudyPlate } from '../types';

interface WorkGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlateId?: string | null;
  onOpenContact: () => void;
}

export const WorkGalleryModal: React.FC<WorkGalleryModalProps> = ({
  isOpen,
  onClose,
  initialPlateId,
  onOpenContact
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedPlate, setSelectedPlate] = useState<CaseStudyPlate | null>(() => {
    if (initialPlateId) {
      return CASE_STUDY_PLATES.find((p) => p.id === initialPlateId) || null;
    }
    return null;
  });

  // Filter plates
  const filteredPlates = CASE_STUDY_PLATES.filter((plate) => {
    if (filter === 'all') return true;
    return plate.category === filter;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1c18]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="relative w-full max-w-6xl bg-[#fcf9f2] border-4 border-[#1c1c18] shadow-ink-xl max-h-[92vh] flex flex-col overflow-hidden"
      >
        {/* Archival Folder Header Strip */}
        <div className="p-4 sm:p-6 bg-[#f0eee7] border-b-2 border-[#1c1c18] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#355e9e] text-[#ffffff] flex items-center justify-center border border-[#1c1c18] font-['Space_Grotesk'] font-bold text-xs">
              14
            </div>
            <div>
              <h2 className="font-['Anton'] text-2xl sm:text-3xl uppercase tracking-wider text-[#1c1c18]">
                ARCHIVE DOSSIER // CURATED PLATES
              </h2>
              <span className="font-['Space_Grotesk'] text-xs text-[#767872] font-semibold">
                Physical Print Runs, Digital Campaigns, and Visual Identity Systems
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-[#ffffff] hover:bg-[#fabc4d] border-2 border-[#1c1c18] shadow-ink-sm text-[#1c1c18] transition-colors cursor-pointer"
            aria-label="Close Archive"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Navigation Strip */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#ffffff] border-b border-[#1c1c18]/20 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#767872] mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> CATEGORY:
            </span>
            {['all', 'posters', 'social', 'event', 'ui', 'identity'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 font-['Space_Grotesk'] text-xs font-bold uppercase transition-all border ${
                  filter === cat
                    ? 'bg-[#1c1c18] text-[#ffffff] border-[#1c1c18] shadow-ink-sm'
                    : 'bg-[#f6f3ec] text-[#464742] border-[#1c1c18]/20 hover:bg-[#e5e2db]'
                }`}
              >
                {cat === 'all' ? 'All Works' : cat}
              </button>
            ))}
          </div>

          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#355e9e]">
            SHOWING {filteredPlates.length} PLATES
          </span>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {selectedPlate ? (
            /* Detailed Plate Inspection View */
            <div className="bg-[#ffffff] p-5 sm:p-8 border-2 border-[#1c1c18] shadow-ink flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2 flex flex-col">
                <div className="relative bg-[#f6f3ec] border-2 border-[#1c1c18] overflow-hidden p-2">
                  <img
                    src={selectedPlate.imageUrl}
                    alt={selectedPlate.title}
                    className="w-full max-h-[460px] object-contain"
                  />
                  <div className="absolute top-4 left-4 bg-[#ffdead] text-[#1c1c18] px-2.5 py-1 font-['Space_Grotesk'] text-xs font-bold border border-[#1c1c18]">
                    {selectedPlate.plateNumber}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPlate(null)}
                  className="mt-3 text-xs font-['Space_Grotesk'] font-bold text-[#355e9e] hover:underline flex items-center gap-1 self-start"
                >
                  ← Back to Plate Grid
                </button>
              </div>

              <div className="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-['Space_Grotesk'] text-xs uppercase font-bold bg-[#355e9e] text-[#ffffff] px-2 py-0.5">
                      {selectedPlate.categoryLabel}
                    </span>
                    <span className="font-['Space_Grotesk'] text-xs text-[#767872] font-bold">
                      {selectedPlate.year}
                    </span>
                  </div>

                  <h3 className="font-['Anton'] text-3xl sm:text-4xl uppercase tracking-wide text-[#1c1c18] mb-2 leading-tight">
                    {selectedPlate.title}
                  </h3>

                  <p className="font-['Space_Grotesk'] text-sm text-[#767872] font-semibold mb-4">
                    {selectedPlate.subtitle}
                  </p>

                  <p className="font-['Epilogue'] text-sm text-[#464742] leading-relaxed mb-6">
                    {selectedPlate.description}
                  </p>

                  {/* Spec Metas */}
                  <div className="grid grid-cols-2 gap-3 p-3 bg-[#fcf9f2] border border-[#1c1c18] mb-6 font-['Space_Grotesk'] text-xs">
                    <div>
                      <span className="text-[#767872] uppercase block font-bold text-[10px]">Medium:</span>
                      <span className="font-bold text-[#1c1c18]">{selectedPlate.medium}</span>
                    </div>
                    <div>
                      <span className="text-[#767872] uppercase block font-bold text-[10px]">Tactility:</span>
                      <span className="font-bold text-[#355e9e]">{selectedPlate.tactility}</span>
                    </div>
                    <div>
                      <span className="text-[#767872] uppercase block font-bold text-[10px]">Dimensions:</span>
                      <span className="font-bold text-[#1c1c18]">{selectedPlate.dimensions}</span>
                    </div>
                    <div>
                      <span className="text-[#767872] uppercase block font-bold text-[10px]">Impact:</span>
                      <span className="font-bold text-[#281900] bg-[#ffdead] px-1">{selectedPlate.takeaway}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#1c1c18]/20">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenContact();
                    }}
                    className="px-4 py-2.5 bg-[#fabc4d] text-[#1c1c18] font-['Space_Grotesk'] text-xs uppercase font-bold border-2 border-[#1c1c18] shadow-ink hover:shadow-ink-md transition-all"
                  >
                    Inquire About Similar Work
                  </button>
                  <button
                    onClick={() => setSelectedPlate(null)}
                    className="px-4 py-2.5 bg-[#f0eee7] text-[#1c1c18] font-['Space_Grotesk'] text-xs uppercase font-bold border border-[#1c1c18] hover:bg-[#e5e2db]"
                  >
                    View All Works
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Multi-Plate Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlates.map((plate) => (
                <motion.div
                  key={plate.id}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedPlate(plate)}
                  className="bg-[#ffffff] p-4 border-2 border-[#1c1c18] shadow-ink flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1c1c18]/20 font-['Space_Grotesk'] text-[10px] font-bold">
                      <span className="text-[#355e9e]">{plate.plateNumber}</span>
                      <span className="bg-[#f0eee7] px-2 py-0.5 border border-[#1c1c18]/20">
                        {plate.year}
                      </span>
                    </div>

                    <div className="relative aspect-[4/3] bg-[#f6f3ec] border border-[#1c1c18] overflow-hidden mb-3">
                      <img
                        src={plate.imageUrl}
                        alt={plate.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#355e9e] tracking-wider block mb-1">
                      {plate.categoryLabel}
                    </span>

                    <h3 className="font-['Anton'] text-xl uppercase tracking-wider text-[#1c1c18] mb-1 group-hover:text-[#355e9e] transition-colors leading-tight">
                      {plate.title}
                    </h3>

                    <p className="font-['Epilogue'] text-xs text-[#464742] line-clamp-2 leading-relaxed">
                      {plate.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-[#1c1c18]/15 flex items-center justify-between text-xs font-['Space_Grotesk'] font-bold text-[#1c1c18]">
                    <span>{plate.tactility}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#355e9e] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Ledger Bar */}
        <div className="p-4 bg-[#f0eee7] border-t-2 border-[#1c1c18] flex flex-wrap items-center justify-between text-xs font-['Space_Grotesk'] text-[#464742]">
          <span className="font-bold">GOWRISH CHANDRAN S ARCHIVE // 2025-2026 EDITION</span>
          <button
            onClick={onClose}
            className="font-bold text-[#1c1c18] hover:underline"
          >
            Close Archive [ESC]
          </button>
        </div>
      </motion.div>
    </div>
  );
};
