import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { WorkWithMe } from './views/WorkWithMe';
import { Qigong } from './views/Qigong';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { StickyCTA } from './components/StickyCTA';

const VALID_VIEWS: ViewState[] = ['home', 'work-with-me', 'qigong', 'about', 'contact'];

const pathToView = (path: string): ViewState => {
  const clean = path.replace(/^\//, '') || 'home';
  return VALID_VIEWS.includes(clean as ViewState) ? (clean as ViewState) : 'home';
};

const viewToPath = (view: ViewState): string => {
  return view === 'home' ? '/' : `/${view}`;
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(() => pathToView(window.location.pathname));

  // Sync URL when view changes
  useEffect(() => {
    const path = viewToPath(currentView);
    if (window.location.pathname !== path) {
      window.history.pushState({ view: currentView }, '', path);
    }
    window.scrollTo(0, 0);
  }, [currentView]);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (e.state?.view) {
        setCurrentView(e.state.view);
      } else {
        setCurrentView(pathToView(window.location.pathname));
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home setView={setCurrentView} />;
      case 'work-with-me': return <WorkWithMe setView={setCurrentView} />;
      case 'qigong': return <Qigong />;
      case 'about': return <About setView={setCurrentView} />;
      case 'contact': return <Contact />;
      default: return <Home setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-clay-200 selection:text-clay-900">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-sand-900">
        Skip to main content
      </a>
      <Navigation currentView={currentView} setView={setCurrentView} />

      <main id="main-content" className="flex-grow">
        {renderView()}
      </main>

      <StickyCTA />
      <Footer setView={setCurrentView} />
    </div>
  );
};

export default App;
