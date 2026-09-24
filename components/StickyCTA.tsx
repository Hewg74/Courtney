import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { CalendarHeart } from 'lucide-react';
import { EASE } from './Reveal';
import { CALENDLY_URL, openExternal } from '../constants';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  // Appear once the visitor is past the first screen; hide near the footer, which has its own button.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const nearEnd = y + window.innerHeight > document.documentElement.scrollHeight - 520;
    setIsVisible(y > window.innerHeight * 0.9 && !nearEnd);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          data-sticky-cta
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed z-40 right-4 md:right-6 bottom-[max(1rem,env(safe-area-inset-bottom))] md:bottom-6"
        >
          <button
            onClick={() => openExternal(CALENDLY_URL)}
            className="group flex items-center gap-2.5 min-h-[52px] pl-4 pr-6 rounded-full bg-forest text-mist shadow-lift hover:bg-ink transition-colors duration-feedback"
          >
            <CalendarHeart size={18} strokeWidth={1.5} className="text-clay-glow" aria-hidden="true" />
            <span className="text-[0.9375rem] font-medium">Book a free chat</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
