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

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Simple "router" effect to scroll top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

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
    <div className="min-h-screen flex flex-col font-sans selection:bg-stone-200 selection:text-stone-800">
      <Navigation currentView={currentView} setView={setCurrentView} />

      <main className="flex-grow">
        {renderView()}
      </main>

      <StickyCTA />
      <Footer setView={setCurrentView} />
    </div>
  );
};

export default App;
