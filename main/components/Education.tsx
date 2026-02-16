import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATION } from '../constants';
import ImageWithFallback from './ImageWithFallback';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors overflow-hidden">
                 {edu.logo ? (
                   <ImageWithFallback 
                    src={edu.logo} 
                    alt={edu.institution} 
                    fallbackType="logo"
                    className="w-full h-full object-contain p-1" 
                  />
                 ) : (
                   <GraduationCap className="text-indigo-400" size={24} />
                 )}
              </div>
              
              <span className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium mb-3 bg-indigo-500/10 px-3 py-1 rounded-full">
                <Calendar size={14} />
                {edu.year}
              </span>
              
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <h4 className="text-lg text-slate-400 mb-4">{edu.institution}</h4>
              
              <p className="text-slate-500 text-sm border-t border-slate-800 pt-4">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;