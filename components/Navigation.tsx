import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-sand-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand */}
        <button
          onClick={() => handleNavClick('home')}
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
            onClick={() => window.open('https://calendly.com/courtneyalex-int/15min', '_blank')}
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-sand-900 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#F9F8F6] z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className="text-3xl font-serif text-sand-800 hover:text-clay-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-8">
            <Button
              size="lg"
              onClick={() => window.open('https://calendly.com/courtneyalex-int/15min', '_blank')}
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
