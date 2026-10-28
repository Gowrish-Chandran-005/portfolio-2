import React from 'react';
import { ArrowUp, Heart, Sparkles, Terminal, Mail, Layers, Compass } from 'lucide-react';
import { SectionId } from '../types';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
  onOpenWork: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenWork,
  onOpenAbout,
  onOpenContact
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1c1c18] text-[#ffffff] pt-16 pb-12 px-4 sm:px-8 lg:px-12 border-t-4 border-[#1c1c18] overflow-hidden">
      {/* Archival Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-hatch-pattern" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Colophon Bar */}
        <div className="flex flex-wrap items-center justify-between pb-8 mb-10 border-b border-[#ffffff]/20 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#fabc4d]" />
            <span className="font-['Space_Grotesk'] text-xs uppercase font-bold tracking-widest text-[#dcdad3]">
              ATELIER COLOPHON // VOL. 04
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-['Space_Grotesk'] text-xs uppercase font-bold text-[#ffffff] hover:text-[#fabc4d] transition-colors cursor-pointer"
          >
            <span>Back to Plate 01</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="font-['Anton'] text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#ffffff] leading-none mb-3">
                GOWRISH CHANDRAN S
              </h2>
              <p className="font-['Epilogue'] text-sm sm:text-base text-[#dcdad3] max-w-md leading-relaxed">
                A public speaker who can tell stories through design too. Drafting high-contrast editorial illustrations and tactile interactive systems.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="bg-[#355e9e] text-[#ffffff] px-2.5 py-1 text-xs font-['Space_Grotesk'] font-bold uppercase border border-[#ffffff]/30">
                Chennai / Bengaluru
              </span>
              <span className="bg-[#fabc4d] text-[#1c1c18] px-2.5 py-1 text-xs font-['Space_Grotesk'] font-bold uppercase border border-[#1c1c18]">
                Open for Commissions
              </span>
            </div>
          </div>

          {/* Quick Plates Navigation */}
          <div className="md:col-span-3">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#fabc4d] block mb-4">
              CHRONICLE PLATES
            </span>
            <ul className="space-y-2.5 font-['Space_Grotesk'] text-xs">
              <li>
                <button
                  onClick={() => onNavigate('plate-01')}
                  className="hover:text-[#fabc4d] text-[#dcdad3] transition-colors flex items-center gap-2"
                >
                  <span>Plate 01 // The Entrance</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('plate-02')}
                  className="hover:text-[#fabc4d] text-[#dcdad3] transition-colors flex items-center gap-2"
                >
                  <span>Plate 02 // Introduction</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('plate-03')}
                  className="hover:text-[#fabc4d] text-[#dcdad3] transition-colors flex items-center gap-2"
                >
                  <span>Plate 03 // Pedagogical Log</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('plate-04')}
                  className="hover:text-[#fabc4d] text-[#dcdad3] transition-colors flex items-center gap-2"
                >
                  <span>Plate 04 // Turning Point</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Dossiers & Connect */}
          <div className="md:col-span-3">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#fabc4d] block mb-4">
              ATELIER DOSSIERS
            </span>
            <ul className="space-y-2.5 font-['Space_Grotesk'] text-xs">
              <li>
                <button
                  onClick={onOpenWork}
                  className="hover:text-[#fabc4d] text-[#dcdad3] transition-colors"
                >
                  Curated Works (14 Plates)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-[#fabc4d] text-[#dcdad3] transition-colors"
                >
                  Manifesto & Toolchain
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#fabc4d] text-[#dcdad3] transition-colors"
                >
                  Initiate Dispatch Requisition
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#ffffff]/20">
              <span className="font-['Space_Grotesk'] text-[11px] text-[#767872] block mb-2 font-bold">
                COMMISSION HOTLINE:
              </span>
              <button
                onClick={onOpenContact}
                className="w-full py-2 bg-[#ffffff] text-[#1c1c18] font-['Space_Grotesk'] text-xs uppercase font-bold hover:bg-[#fabc4d] transition-colors"
              >
                Send Direct Dispatch
              </button>
            </div>
          </div>
        </div>

        {/* Technical Ledger Strip */}
        <div className="pt-8 border-t border-[#ffffff]/20 flex flex-wrap items-center justify-between gap-4 font-['Space_Grotesk'] text-xs text-[#767872]">
          <div className="flex flex-wrap items-center gap-4">
            <span>STOCK: 300 GSM COTTON RAG</span>
            <span>•</span>
            <span>INK: CARBON DENSE</span>
            <span>•</span>
            <span>GRID: ASYMMETRIC 12-COL</span>
          </div>

          <div>
            © 2025–2026 GOWRISH CHANDRAN S. DRAFTED WITH PHYSICAL INK PRECISION.
          </div>
        </div>
      </div>
    </footer>
  );
};
