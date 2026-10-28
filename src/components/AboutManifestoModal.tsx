import React from 'react';
import { motion } from 'motion/react';
import { X, PenTool, Award, Compass, Sparkles, Check, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { ASSET_IMAGES } from '../data/portfolioData';

interface AboutManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutManifestoModal: React.FC<AboutManifestoModalProps> = ({
  isOpen,
  onClose,
  onOpenContact
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1c18]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="relative w-full max-w-4xl bg-[#fcf9f2] border-4 border-[#1c1c18] shadow-ink-xl max-h-[92vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#f0eee7] border-b-2 border-[#1c1c18] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#fabc4d] border border-[#1c1c18]" />
            <div>
              <h2 className="font-['Anton'] text-2xl sm:text-3xl uppercase tracking-wider text-[#1c1c18]">
                ATELIER MANIFESTO & TOOLKIT
              </h2>
              <span className="font-['Space_Grotesk'] text-xs text-[#767872] font-semibold">
                Gowrish Chandran S // Persona, Principles, and Instruments
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-[#ffffff] hover:bg-[#fabc4d] border-2 border-[#1c1c18] shadow-ink-sm text-[#1c1c18] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-8">
          {/* Studio Profile Narrative */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3 bg-[#ffffff] p-3 border-2 border-[#1c1c18] shadow-ink">
              <img
                src={ASSET_IMAGES.studioPortrait}
                alt="Gowrish Chandran S"
                className="w-full aspect-[4/5] object-cover filter contrast-105"
              />
              <div className="mt-2 text-center">
                <span className="font-['Anton'] text-lg uppercase text-[#1c1c18] block">
                  Gowrish Chandran S
                </span>
                <span className="font-['Space_Grotesk'] text-xs text-[#767872]">
                  Designer & Public Speaker
                </span>
              </div>
            </div>

            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-2 bg-[#ffdead] px-2.5 py-0.5 border border-[#1c1c18] font-['Space_Grotesk'] text-xs font-bold uppercase self-start">
                Atelier Dossier GC-2025
              </div>
              <h3 className="font-['Anton'] text-3xl uppercase tracking-wide text-[#1c1c18] mb-3">
                “Telling stories through design, with the conviction of a live stage.”
              </h3>
              <p className="font-['Epilogue'] text-sm text-[#464742] leading-relaxed mb-4">
                I began as a public speaker, learning how pauses, vocal cadence, and concise emotional hooks capture rooms. When I transitioned into visual design, I brought that exact stage discipline with me.
              </p>
              <p className="font-['Epilogue'] text-sm text-[#464742] leading-relaxed">
                Design isn't decorative wallpaper; it's non-verbal oratory. Every contrast ratio, typeface weight, and margin breath either earns attention or loses it.
              </p>
            </div>
          </div>

          {/* 4 Core Atelier Commandments */}
          <div>
            <h4 className="font-['Anton'] text-xl uppercase tracking-wider text-[#1c1c18] mb-3 pb-2 border-b-2 border-[#1c1c18]">
              FOUR CORE ATELIER PRINCIPLES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#355e9e] block mb-1">
                  PRINCIPLE 01
                </span>
                <h5 className="font-['Anton'] text-lg uppercase text-[#1c1c18] mb-1">
                  CRAFT OVER COMFORT
                </h5>
                <p className="font-['Epilogue'] text-xs text-[#464742] leading-relaxed">
                  Never accept the default software template. Build from intentional bones, whether it takes 5 minutes or 5 days.
                </p>
              </div>

              <div className="p-4 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#355e9e] block mb-1">
                  PRINCIPLE 02
                </span>
                <h5 className="font-['Anton'] text-lg uppercase text-[#1c1c18] mb-1">
                  NO UNDO BUTTON CONVICTION
                </h5>
                <p className="font-['Epilogue'] text-xs text-[#464742] leading-relaxed">
                  Working with physical pigment ink teaches you to plan lines before laying the nib down. Carry that decisive conviction into digital design systems.
                </p>
              </div>

              <div className="p-4 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#355e9e] block mb-1">
                  PRINCIPLE 03
                </span>
                <h5 className="font-['Anton'] text-lg uppercase text-[#1c1c18] mb-1">
                  TACTILE GRAPH FRICTION
                </h5>
                <p className="font-['Epilogue'] text-xs text-[#464742] leading-relaxed">
                  Interfaces must feel tangible. Offset hard shadows, deckled edges, and typographic tension give digital artifacts physical presence.
                </p>
              </div>

              <div className="p-4 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#355e9e] block mb-1">
                  PRINCIPLE 04
                </span>
                <h5 className="font-['Anton'] text-lg uppercase text-[#1c1c18] mb-1">
                  PUBLIC UTILITY & IMPACT
                </h5>
                <p className="font-['Epilogue'] text-xs text-[#464742] leading-relaxed">
                  Great design serves people. As Toastmasters VPPR, design drove real attendance, invited hesitant voices to the stage, and forged enduring memories.
                </p>
              </div>
            </div>
          </div>

          {/* Studio Instruments & Toolchain Inventory */}
          <div>
            <h4 className="font-['Anton'] text-xl uppercase tracking-wider text-[#1c1c18] mb-3 pb-2 border-b-2 border-[#1c1c18]">
              INSTRUMENTS OF THE DRAFTING DESK
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-['Space_Grotesk'] text-xs">
              <div className="p-3 bg-[#ffffff] border border-[#1c1c18]">
                <span className="text-[#767872] uppercase font-bold text-[10px] block mb-1">Physical Inking</span>
                <ul className="space-y-1 text-[#1c1c18]">
                  <li>• Sakura Pigma Micron 0.05 - 0.8mm</li>
                  <li>• Kuretake Brush Pen No. 8</li>
                  <li>• 300 GSM Hot-Press Cotton Rag</li>
                  <li>• Architectural Graph Calipers</li>
                </ul>
              </div>

              <div className="p-3 bg-[#ffffff] border border-[#1c1c18]">
                <span className="text-[#767872] uppercase font-bold text-[10px] block mb-1">Digital Vector & Raster</span>
                <ul className="space-y-1 text-[#1c1c18]">
                  <li>• Figma Component Architecture</li>
                  <li>• Adobe Photoshop & Camera Raw</li>
                  <li>• Adobe Illustrator Vector Curves</li>
                  <li>• Generative Synthesis Pipelines</li>
                </ul>
              </div>

              <div className="p-3 bg-[#ffffff] border border-[#1c1c18]">
                <span className="text-[#767872] uppercase font-bold text-[10px] block mb-1">Creative Code</span>
                <ul className="space-y-1 text-[#1c1c18]">
                  <li>• TypeScript & Modern React 19</li>
                  <li>• Tailwind CSS Design Tokens</li>
                  <li>• Motion Kinetic Physics</li>
                  <li>• Responsive Viewport Grid Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="p-4 bg-[#f0eee7] border-t-2 border-[#1c1c18] flex flex-wrap items-center justify-between gap-3">
          <span className="font-['Space_Grotesk'] text-xs text-[#464742] font-semibold">
            BASED IN CHENNAI & BENGALURU • AVAILABLE GLOBALLY
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-2 bg-[#355e9e] text-[#ffffff] font-['Space_Grotesk'] text-xs uppercase font-bold border-2 border-[#1c1c18] shadow-ink hover:shadow-cobalt-lg transition-all cursor-pointer"
            >
              Initiate Collaboration
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#ffffff] text-[#1c1c18] font-['Space_Grotesk'] text-xs uppercase font-bold border border-[#1c1c18] hover:bg-[#e5e2db]"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
