
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './components/views/Home';
import About from './components/views/About';
import Portfolio from './components/views/Portfolio';
import Blog from './components/views/Blog';
import Students from './components/views/Students';
import Productivity from './components/views/Productivity';
import Contact from './components/views/Contact';
import { View } from './types';
import { NAV_ITEMS } from './constants';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(NAV_ITEMS[0].id);

  const navigateTo = useCallback((view: View) => {
    setActiveView(view);
  }, []);

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'blog':
        return <Blog />;
      case 'students':
        return <Students />;
      case 'productivity':
        return <Productivity />;
      case 'contact':
        return <Contact />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans antialiased relative">
       <div 
        className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.2] z-0" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(100, 116, 139, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      ></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header activeView={activeView} navigateTo={navigateTo} />
        <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8">
          {renderView()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
