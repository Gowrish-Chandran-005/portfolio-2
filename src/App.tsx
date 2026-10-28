import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Plate01Entrance } from './components/Plate01Entrance';
import { Plate02Introduction } from './components/Plate02Introduction';
import { Plate03StoryAscent } from './components/Plate03StoryAscent';
import { Plate04TurningPoint } from './components/Plate04TurningPoint';
import { Footer } from './components/Footer';
import { WorkGalleryModal } from './components/WorkGalleryModal';
import { AboutManifestoModal } from './components/AboutManifestoModal';
import { ContactModal } from './components/ContactModal';
import { SectionId } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('plate-01');
  const [workModalOpen, setWorkModalOpen] = useState(false);
  const [initialWorkPlateId, setInitialWorkPlateId] = useState<string | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Monitor scroll position to update active plate indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const p1 = document.getElementById('plate-01');
      const p2 = document.getElementById('plate-02');
      const p3 = document.getElementById('plate-03');
      const p4 = document.getElementById('plate-04');

      if (p4 && scrollPosition >= p4.offsetTop) {
        setActiveSection('plate-04');
      } else if (p3 && scrollPosition >= p3.offsetTop) {
        setActiveSection('plate-03');
      } else if (p2 && scrollPosition >= p2.offsetTop) {
        setActiveSection('plate-02');
      } else if (p1) {
        setActiveSection('plate-01');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: SectionId) => {
    if (section === 'work') {
      setWorkModalOpen(true);
      return;
    }
    if (section === 'about') {
      setAboutModalOpen(true);
      return;
    }
    if (section === 'contact') {
      setContactModalOpen(true);
      return;
    }

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWorkWithPlate = (plateId?: string) => {
    setInitialWorkPlateId(plateId || null);
    setWorkModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#1c1c18] relative selection:bg-[#fabc4d] selection:text-[#1c1c18]">
      {/* Fixed Sticky Header Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenWork={() => {
          setInitialWorkPlateId(null);
          setWorkModalOpen(true);
        }}
        onOpenAbout={() => setAboutModalOpen(true)}
      />

      {/* Floating Side Plate Switcher (Desktop) */}
      <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-2 bg-[#fcf9f2] p-2 border-2 border-[#1c1c18] shadow-ink-sm">
        <span className="font-['Space_Grotesk'] text-[9px] uppercase font-bold text-[#767872] text-center pb-1 border-b border-[#1c1c18]/20">
          PLATES
        </span>
        {[
          { id: 'plate-01', label: '01', title: 'Entrance' },
          { id: 'plate-02', label: '02', title: 'Intro' },
          { id: 'plate-03', label: '03', title: 'Ascent' },
          { id: 'plate-04', label: '04', title: 'Public' }
        ].map((plate) => {
          const isActive = activeSection === plate.id;
          return (
            <button
              key={plate.id}
              onClick={() => handleNavigate(plate.id as SectionId)}
              title={`Jump to Plate ${plate.label} - ${plate.title}`}
              className={`w-7 h-7 font-['Space_Grotesk'] text-xs font-bold transition-all border flex items-center justify-center cursor-pointer ${
                isActive
                  ? 'bg-[#1c1c18] text-[#ffffff] border-[#1c1c18] shadow-xs scale-110'
                  : 'bg-[#ffffff] text-[#464742] border-[#1c1c18]/30 hover:bg-[#ffdead] hover:text-[#1c1c18]'
              }`}
            >
              {plate.label}
            </button>
          );
        })}
      </div>

      {/* Main Archival Plates Flow */}
      <main>
        {/* Plate 01: The Entrance */}
        <Plate01Entrance
          onNavigate={handleNavigate}
          onOpenWork={() => handleOpenWorkWithPlate()}
          onOpenAbout={() => setAboutModalOpen(true)}
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* Plate 02: Introduction & Dossier */}
        <Plate02Introduction
          onNavigate={handleNavigate}
          onOpenAbout={() => setAboutModalOpen(true)}
        />

        {/* Plate 03: Story & Technical Vector of Ascent */}
        <Plate03StoryAscent
          onNavigate={handleNavigate}
          onOpenWork={() => handleOpenWorkWithPlate()}
        />

        {/* Plate 04: The Turning Point & Public Utility */}
        <Plate04TurningPoint
          onOpenWorkModal={(id) => handleOpenWorkWithPlate(id)}
          onOpenContact={() => setContactModalOpen(true)}
        />
      </main>

      {/* Atelier Colophon Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenWork={() => handleOpenWorkWithPlate()}
        onOpenAbout={() => setAboutModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Curated Work Gallery Modal */}
      <WorkGalleryModal
        isOpen={workModalOpen}
        onClose={() => setWorkModalOpen(false)}
        initialPlateId={initialWorkPlateId}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* About & Atelier Manifesto Modal */}
      <AboutManifestoModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Contact Requisition Dispatch Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

