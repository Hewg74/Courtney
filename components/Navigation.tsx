import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform, useReducedMotion } from 'framer-motion';
import { ViewState } from '../types';
import { Button } from './Button';
import { Rings } from './Rings';
import { EASE } from './Reveal';
import { Menu, X } from 'lucide-react';
import { BOOKING_URL, openExternal } from '../constants';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const NAV_ITEMS: { label: string; value: ViewState }[] = [
  { label: 'Workshops & Coaching', value: 'work-with-me' },
  { label: 'Qigong', value: 'qigong' },
  { label: 'Testimonials', value: 'testimonials' },
  { label: 'About', value: 'about' },
  { label: 'Books', value: 'book' },
  { label: 'Contact', value: 'contact' },
];

export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  // The logo's overlap fills with clay as you read down the page.
  const lens = useTransform(scrollYProgress, [0, 1], [0.08, 0.95]);
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, 'change', (y) => setIsScrolled(y > 24));

  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // While the menu is open it is modal: page scroll locked, the page behind made inert
  // (unfocusable, hidden from screen readers), focus moved in, and returned on close.
  useEffect(() => {
    if (!isOpen) return;
    const behind = Array.from(document.querySelectorAll<HTMLElement>('#main-content, footer, [data-sticky-cta]'));
    document.body.style.overflow = 'hidden';
    behind.forEach((el) => el.setAttribute('inert', ''));
    const first = menuRef.current?.querySelector<HTMLElement>('button, a');
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key !== 'Tab' || !menuRef.current || !toggleRef.current) return;
      // Cycle focus between the close button and the menu's own controls.
      const items = [toggleRef.current, ...Array.from(menuRef.current.querySelectorAll<HTMLElement>('button, a'))];
      const i = items.indexOf(document.activeElement as HTMLElement);
      const next = e.shiftKey ? (i <= 0 ? items.length - 1 : i - 1) : i === items.length - 1 ? 0 : i + 1;
      e.preventDefault();
      items[next].focus();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      behind.forEach((el) => el.removeAttribute('inert'));
      window.removeEventListener('keydown', onKey);
      toggleRef.current?.focus();
    };
  }, [isOpen]);

  const go = (view: ViewState) => {
    setView(view);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main"
        className={`relative z-50 transition-[background-color,box-shadow,padding] duration-500 ease-calm ${
          isScrolled && !isOpen
            ? 'bg-paper/85 backdrop-blur-xl shadow-[0_1px_0_rgba(43,42,36,0.08)] py-3'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-5 md:px-8 flex items-center justify-between gap-6">
          <button
            onClick={() => go('home')}
            aria-label="Courtney Alex, home"
            className="group flex items-center gap-3 text-ink"
          >
            <Rings className="w-10 h-6 text-clay transition-transform duration-500 ease-calm group-hover:scale-110" strokeWidth={1.5} glow="#B8674F" lens={reduce ? undefined : lens} />
            <span className="font-serif text-[1.55rem] leading-none tracking-[-0.01em]">Courtney Alex</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = currentView === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => go(item.value)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-3.5 py-2 text-[0.9375rem] transition-colors duration-feedback ${
                    active ? 'text-ink' : 'text-ink-2 hover:text-ink'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute left-1/2 -bottom-0.5 w-1.5 h-1.5 -ml-[3px] rounded-full bg-clay"
                      transition={{ duration: 0.45, ease: EASE }}
                    />
                  )}
                </button>
              );
            })}
            <Button size="sm" className="ml-4" onClick={() => openExternal(BOOKING_URL)}>
              Book a Call
            </Button>
          </div>

          <button
            ref={toggleRef}
            className="lg:hidden -mr-2 p-3 rounded-full text-ink hover:bg-paper-3 transition-colors duration-feedback"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ duration: 0.4, ease: EASE }}
            className="lg:hidden fixed inset-0 z-40 bg-paper grain overflow-y-auto overflow-x-hidden"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
              <Rings className="absolute -right-24 bottom-24 w-[420px] text-clay/25" strokeWidth={1} breathe />
            </div>
            <div className="relative min-h-full flex flex-col justify-between px-6 pt-28 pb-[max(2rem,env(safe-area-inset-bottom))]">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.value}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.5, ease: EASE }}
                  >
                    <button
                      onClick={() => go(item.value)}
                      aria-current={currentView === item.value ? 'page' : undefined}
                      className={`block w-full text-left py-2.5 font-serif text-[2.35rem] leading-tight ${
                        currentView === item.value ? 'text-clay-deep italic' : 'text-ink'
                      }`}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
                className="pt-10 space-y-5"
              >
                <Button size="lg" arrow className="w-full" onClick={() => openExternal(BOOKING_URL)}>
                  Book a free 15-min chat
                </Button>
                <a href="mailto:hello@courtneyalex.com" className="block text-center text-ink-2">
                  hello@courtneyalex.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
