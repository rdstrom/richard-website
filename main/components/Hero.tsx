import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Content Container */}
      <div className="z-10 max-w-4xl w-full flex flex-col items-center animate-in fade-in zoom-in duration-1000">
        
        {/* Profile Image with Glowing Border */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-48 h-48 rounded-full p-1 bg-slate-900 ring-2 ring-slate-700 overflow-hidden">
            <img 
              src={PERSONAL_INFO.profileImage} 
              alt={PERSONAL_INFO.name} 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src = "https://picsum.photos/400/400";
              }}
              className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
          {PERSONAL_INFO.name}
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-emerald-400 mb-6">
          {PERSONAL_INFO.title} @ {PERSONAL_INFO.company}
        </h2>
        
        <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <a href="#" className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-110 transition-all border border-slate-700">
            <Linkedin size={24} />
          </a>
          <a href="#" className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-110 transition-all border border-slate-700">
            <Github size={24} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-110 transition-all border border-slate-700">
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce text-slate-500">
        <ArrowDown size={24} />
      </div>
    </div>
  );
};

export default Hero;
