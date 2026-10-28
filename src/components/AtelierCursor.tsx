import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const AtelierCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState<string>('');
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if pointer is fine (mouse/trackpad, not touch)
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasPointer) return;
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check for interactive targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        'button, a, input, textarea, select, [role="button"], [data-cursor], .interactive-card'
      );

      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute('data-cursor');
        if (customText) {
          setHoverText(customText);
        } else if (interactiveEl.tagName === 'BUTTON' || interactiveEl.tagName === 'A') {
          setHoverText('PRESS');
        } else if (interactiveEl.classList.contains('interactive-card')) {
          setHoverText('INSPECT');
        } else {
          setHoverText('');
        }
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Outer Reticle Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#1c1c18] flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 14),
          y: mousePosition.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          scale: isClicked ? 0.85 : 1,
          borderColor: isHovered ? '#355e9e' : '#1c1c18',
          backgroundColor: isHovered ? 'rgba(53, 94, 158, 0.08)' : 'rgba(28, 28, 24, 0.02)',
          borderWidth: isHovered ? '2px' : '1px'
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          mass: 0.5
        }}
      >
        {/* Subtle crosshair ticks when hovering */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 90 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full relative"
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-[#355e9e]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-[#355e9e]" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 w-0.5 bg-[#355e9e]" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1.5 w-0.5 bg-[#355e9e]" />
          </motion.div>
        )}
      </motion.div>

      {/* Center Precision Ink Point */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#1c1c18] pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicked ? 1.5 : isHovered ? 0.6 : 1,
          backgroundColor: isHovered ? '#355e9e' : '#1c1c18'
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 600,
          mass: 0.1
        }}
      />

      {/* Dynamic Hover Text Badge */}
      {hoverText && (
        <motion.div
          initial={{ opacity: 0, y: 5, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 5, scale: 0.9 }}
          className="fixed top-0 left-0 font-['Space_Grotesk'] text-[9px] font-bold uppercase tracking-widest text-[#ffffff] bg-[#1c1c18] px-1.5 py-0.5 shadow-ink-sm border border-[#355e9e] pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x + 18}px, ${mousePosition.y + 18}px)`
          }}
        >
          {hoverText}
        </motion.div>
      )}
    </div>
  );
};
