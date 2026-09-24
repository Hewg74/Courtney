import React, { useState, useEffect, useRef } from 'react';
import { MotionConfig, AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ViewState } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { WorkWithMe } from './views/WorkWithMe';
import { Qigong } from './views/Qigong';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { Testimonials } from './views/Testimonials';
import { Book } from './views/Book';
import { StickyCTA } from './components/StickyCTA';

const VALID_VIEWS: ViewState[] = ['home', 'work-with-me', 'qigong', 'about', 'contact', 'testimonials', 'book'];

const pathToView = (path: string): ViewState => {
  const clean = path.replace(/^\//, '') || 'home';
  return VALID_VIEWS.includes(clean as ViewState) ? (clean as ViewState) : 'home';
};

const viewToPath = (view: ViewState): string => {
  return view === 'home' ? '/' : `/${view}`;
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(() => pathToView(window.location.pathname));
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // Where to land once the incoming page has mounted: the top for a new visit,
  // the saved spot for Back/Forward. While a page change is under way, nothing is saved.
  const pendingScroll = useRef(0);
  const settling = useRef(false);

  // Each history entry carries its own scroll position, so two visits to the same page never collide.
  const saveTimer = useRef<number | undefined>(undefined);
  useMotionValueEvent(scrollY, 'change', (y) => {
    if (settling.current) return;
    window.clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => {
      if (!settling.current) window.history.replaceState({ ...(window.history.state ?? {}), scroll: y }, '');
    }, 150);
  });

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    window.history.replaceState({ ...(window.history.state ?? {}), view: currentView, scroll: window.history.state?.scroll ?? 0 }, '');
  }, []);

  const navigate = (view: ViewState) => {
    if (view === currentView) {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      return;
    }
    window.clearTimeout(saveTimer.current);
    window.history.replaceState({ ...(window.history.state ?? {}), scroll: window.scrollY }, '');
    pendingScroll.current = 0;
    settling.current = true;
    setCurrentView(view);
  };

  // Runs once the old page has gone; wait two frames so the new page has laid out.
  const settleScroll = () => {
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        window.scrollTo(0, pendingScroll.current);
        settling.current = false;
      }),
    );
  };

  // Sync URL when view changes (new visits only; Back/Forward already moved the URL).
  useEffect(() => {
    const path = viewToPath(currentView);
    if (window.location.pathname !== path) {
      window.history.pushState({ view: currentView, scroll: 0 }, '', path);
    }
  }, [currentView]);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const next = (e.state?.view as ViewState | undefined) ?? pathToView(window.location.pathname);
      window.clearTimeout(saveTimer.current);
      pendingScroll.current = e.state?.scroll ?? 0;
      setCurrentView((prev) => {
        if (prev === next) {
          window.scrollTo(0, pendingScroll.current);
          return prev;
        }
        settling.current = true;
        return next;
      });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home setView={navigate} />;
      case 'work-with-me': return <WorkWithMe setView={navigate} />;
      case 'qigong': return <Qigong />;
      case 'about': return <About setView={navigate} />;
      case 'contact': return <Contact />;
      case 'testimonials': return <Testimonials />;
      case 'book': return <Book setView={navigate} />;
      default: return <Home setView={navigate} />;
    }
  };

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-[100dvh] flex flex-col font-sans bg-paper text-ink">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-paper-2 focus:px-4 focus:py-2 focus:rounded-sm focus:shadow-lift focus:text-ink">
        Skip to main content
      </a>
      <Navigation currentView={currentView} setView={navigate} />

      <main id="main-content" className="flex-grow">
        {/* Pages hand over softly: the old one fades out fast, scroll lands (top, or your spot on Back), the new one settles in. */}
        <AnimatePresence mode="wait" initial={false} onExitComplete={settleScroll}>
          <motion.div
            key={currentView}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ opacity: 0, transition: { duration: reduce ? 0 : 0.2 } }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <StickyCTA />
      <Footer setView={navigate} />
    </div>
    </MotionConfig>
  );
};

export default App;
