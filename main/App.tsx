import React from 'react';
import StochasticBackground from './components/StochasticBackground';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import SkillsGrid from './components/SkillsGrid';
import Projects from './components/Projects';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const initials = PERSONAL_INFO.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="relative text-slate-200 font-sans selection:bg-emerald-500/30">
      {/* Background Animation Layer - Fixed Position */}
      <StochasticBackground />

      {/* Main Scrollable Content - Elevated Z-Index */}
      <main className="relative z-10">
        
        {/* Navigation / Header (Simple) */}
        <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-slate-900/90 to-transparent pointer-events-none">
          <div className="text-xl font-bold tracking-tighter text-emerald-500 pointer-events-auto cursor-pointer">
            {initials}.
          </div>
        </nav>

        <Hero />
        
        <div className="bg-slate-900/80 backdrop-blur-sm shadow-2xl border-t border-slate-800">
          <div className="max-w-4xl mx-auto py-20 px-4 text-center">
             <h3 className="text-2xl font-light text-white mb-6">"Digital Transformation isn't just about technology; it's about translating physical complexity into data-driven clarity."</h3>
             <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
               {PERSONAL_INFO.about}
             </p>
          </div>
        </div>

        <Timeline />
        <SkillsGrid />
        <Projects />

        <footer className="py-12 text-center text-slate-600 text-sm bg-slate-950">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React and Tailwind.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;