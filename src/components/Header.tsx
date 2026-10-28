import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Menu, X, ArrowUpRight, Sparkles, Mail, BookOpen, Fingerprint, Layers } from 'lucide-react';
import { SectionId } from '../types';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: SectionId) => void;
  onOpenContact: () => void;
  onOpenWork: () => void;
  onOpenAbout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenContact,
  onOpenWork,
  onOpenAbout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: SectionId) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-[#fcf9f2]/95 backdrop-blur-md border-b-2 border-[#1c1c18]/15 transition-all">
        {/* Archival Reading Ink Progress Line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-[#e5e2db] overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#1c1c18] via-[#355e9e] to-[#fabc4d]"
            style={{ width: `${scrollProgress}%` }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
          />
        </div>

        <div className="h-20 w-full px-5 sm:px-8 lg:px-12 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo Brand Plate */}
          <button 
            onClick={() => handleNavClick('plate-01')}
            data-cursor="HOME"
            className="group flex flex-col text-left focus:outline-none cursor-pointer"
          >
            <span className="font-['Anton'] text-xl sm:text-2xl uppercase tracking-wider text-[#1c1c18] group-hover:text-[#355e9e] transition-colors flex items-center gap-1.5">
              <span>GOWRISH CHANDRAN S</span>
              <span className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#fabc4d] font-sans text-xs">
                ✦
              </span>
            </span>
            <span className="font-['Space_Grotesk'] text-[10px] sm:text-[11px] uppercase tracking-widest text-[#464742] font-semibold flex items-center gap-1.5 group-hover:text-[#1c1c18] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fabc4d] group-hover:scale-125 transition-transform" />
              Atelier Portfolio • Vol. 04
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4 bg-[#f0eee7] p-1.5 border-2 border-[#1c1c18] shadow-ink-sm">
            <button
              onClick={() => {
                onOpenWork();
                handleNavClick('work');
              }}
              data-cursor="WORK"
              className={`font-['Space_Grotesk'] text-xs uppercase tracking-wider transition-all px-3 py-1 font-bold cursor-pointer relative ${
                activeSection === 'work'
                  ? 'bg-[#1c1c18] text-[#ffffff] shadow-xs'
                  : 'text-[#464742] hover:text-[#1c1c18] hover:bg-[#e5e2db] hover:-translate-y-0.5'
              }`}
            >
              Work
            </button>

            <button
              onClick={() => handleNavClick('plate-03')}
              data-cursor="STORY"
              className={`font-['Space_Grotesk'] text-xs uppercase tracking-wider transition-all px-3 py-1 font-bold cursor-pointer relative ${
                activeSection === 'story' || activeSection === 'plate-03' || activeSection === 'plate-04'
                  ? 'bg-[#1c1c18] text-[#ffffff] shadow-xs'
                  : 'text-[#464742] hover:text-[#1c1c18] hover:bg-[#e5e2db] hover:-translate-y-0.5'
              }`}
            >
              Story
            </button>

            <button
              onClick={() => {
                onOpenAbout();
                handleNavClick('about');
              }}
              data-cursor="ABOUT"
              className={`font-['Space_Grotesk'] text-xs uppercase tracking-wider transition-all px-3 py-1 font-bold cursor-pointer relative ${
                activeSection === 'about'
                  ? 'bg-[#1c1c18] text-[#ffffff] shadow-xs'
                  : 'text-[#464742] hover:text-[#1c1c18] hover:bg-[#e5e2db] hover:-translate-y-0.5'
              }`}
            >
              About
            </button>

            <button
              onClick={() => {
                onOpenContact();
                handleNavClick('contact');
              }}
              data-cursor="DISPATCH"
              className={`font-['Space_Grotesk'] text-xs uppercase tracking-wider transition-all px-3 py-1 font-bold cursor-pointer relative ${
                activeSection === 'contact'
                  ? 'bg-[#1c1c18] text-[#ffffff] shadow-xs'
                  : 'text-[#464742] hover:text-[#1c1c18] hover:bg-[#e5e2db] hover:-translate-y-0.5'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Trigger Buttons */}
          <div className="flex items-center gap-3">
            {/* Initiate Contact CTA */}
            <button
              onClick={onOpenContact}
              data-cursor="WRITE"
              className="group relative overflow-hidden hidden sm:inline-flex items-center justify-center font-['Space_Grotesk'] text-xs uppercase px-4 py-2 bg-[#355e9e] text-[#ffffff] font-bold border-2 border-[#1c1c18] shadow-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-cobalt-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            >
              {/* Subtle Shimmer Ray */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
              <Mail className="w-3.5 h-3.5 mr-1.5 group-hover:rotate-12 transition-transform" />
              Initiate Contact
            </button>

            {/* Profile / Avatar Badge with tooltip */}
            <button
              onClick={onOpenAbout}
              data-cursor="PROFILE"
              title="About Gowrish Chandran S"
              className="w-9 h-9 rounded-full bg-[#1c1c18] border-2 border-[#1c1c18] flex items-center justify-center hover:bg-[#355e9e] hover:scale-110 active:scale-95 transition-all cursor-pointer text-white shadow-ink-sm"
            >
              <User className="w-4 h-4 text-white" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm text-[#1c1c18] active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 w-full z-30 bg-[#fcf9f2] border-b-2 border-[#1c1c18] shadow-ink-lg p-5 md:hidden"
          >
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  onOpenWork();
                  handleNavClick('work');
                }}
                className="flex items-center justify-between p-3 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm text-left font-['Anton'] text-lg uppercase"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#355e9e]" />
                  <span>Work (14 Case Studies)</span>
                </div>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNavClick('plate-03')}
                className="flex items-center justify-between p-3 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm text-left font-['Anton'] text-lg uppercase"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#fabc4d]" />
                  <span>Story & Ascent</span>
                </div>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  onOpenAbout();
                  handleNavClick('about');
                }}
                className="flex items-center justify-between p-3 bg-[#ffffff] border-2 border-[#1c1c18] shadow-ink-sm text-left font-['Anton'] text-lg uppercase"
              >
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-5 h-5 text-[#1c1c18]" />
                  <span>About & Toolkit</span>
                </div>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  onOpenContact();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 p-3 bg-[#355e9e] text-[#ffffff] border-2 border-[#1c1c18] shadow-ink font-['Space_Grotesk'] text-sm uppercase font-bold mt-2"
              >
                <Mail className="w-4 h-4" />
                <span>Initiate Contact</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
