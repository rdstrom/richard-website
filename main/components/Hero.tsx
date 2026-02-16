import React from 'react';
import { ArrowDown, Linkedin } from 'lucide-react';
import { USER_INFO } from '../constants';
import ImageWithFallback from './ImageWithFallback';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">{USER_INFO.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 font-light mb-6">
            {USER_INFO.title}
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {USER_INFO.about}
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <a href={`mailto:${USER_INFO.email}`} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25">
              Contact Me
            </a>
            <div className="flex items-center gap-4 ml-4 border-l border-slate-700 pl-4">
              <a href={`https://${USER_INFO.linkedin}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-96 md:h-96 group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-70 blur-md"></div>
            <div className="absolute inset-0 bg-slate-800 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-300 border border-slate-700"></div>
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-slate-700 shadow-2xl">
              <ImageWithFallback 
                src={USER_INFO.profileImage}
                alt={USER_INFO.name} 
                fallbackType="person"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;