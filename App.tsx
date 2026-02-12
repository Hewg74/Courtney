import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { HowIHelp } from './views/HowIHelp';
import { About } from './views/About';
import { Results } from './views/Results';
import { Workshops } from './views/Workshops';
import { Resources } from './views/Resources';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Simple "router" effect to scroll top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home setView={setCurrentView} />;
      case 'how-i-help': return <HowIHelp />;
      case 'about': return <About />;
      case 'results': return <Results />;
      case 'workshops': return <Workshops />;
      case 'resources': return <Resources />;
      default: return <Home setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-stone-200 selection:text-stone-800">
      <Navigation currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer setView={setCurrentView} />
    </div>
  );
};

export default App;
