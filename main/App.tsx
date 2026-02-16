import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import CoreCompetencies from './components/CoreCompetencies';
import Projects from './components/Projects';
import Accomplishments from './components/Accomplishments';
import Footer from './components/Footer';
import StochasticBackground from './components/StochasticBackground';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-indigo-500/30">
      <StochasticBackground />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Education />
        <CoreCompetencies />
        <Projects />
        <Accomplishments />
      </main>
      <Footer />
    </div>
  );
}

export default App;