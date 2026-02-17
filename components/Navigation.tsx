import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewState } from '../types';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { CALENDLY_URL, openExternal } from '../constants';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems: { label: string; value: ViewState }[] = [
    { label: 'Work With Me', value: 'work-with-me' },
    { label: 'Qigong', value: 'qigong' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (view: ViewState) => {
    setView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${isMobileMenuOpen
        ? 'duration-0 bg-transparent py-6'
        : `duration-500 ${isScrolled ? 'bg-sand-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand */}
        <button
          onClick={() => handleNavClick('home')}
          aria-label="Return to homepage"
          className="text-2xl font-serif text-sand-900 tracking-tight hover:opacity-80 transition-opacity z-50 relative"
        >
          Courtney Alex
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`text-sm font-sans tracking-wide transition-colors ${currentView === item.value ? 'text-sand-900 font-bold' : 'text-sand-500 hover:text-sand-800'
                }`}
            >
              {item.label}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => openExternal(CALENDLY_URL)}
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-sand-900 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            className="fixed inset-0 bg-[#F9F8F6] z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                onClick={() => handleNavClick(item.value)}
                className="text-3xl font-serif text-sand-800 hover:text-clay-600 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="pt-8"
            >
              <Button
                size="lg"
                onClick={() => openExternal(CALENDLY_URL)}
              >
                Book a Call
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
