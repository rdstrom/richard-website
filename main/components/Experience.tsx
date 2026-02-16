import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { EXPERIENCES } from '../constants';
import ImageWithFallback from './ImageWithFallback';

const Experience: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="experience" className="py-24 bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const lines = exp.description.split('\n');
              const summary = lines[0];
              const details = lines.slice(1);
              const isExpanded = !!expandedItems[exp.id];

              return (
                <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Company Logo on Timeline */}
                  <div className="absolute left-8 md:left-1/2 top-0 w-12 h-12 md:w-16 md:h-16 bg-slate-900 border-4 border-slate-800 rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center overflow-hidden shadow-lg shadow-indigo-500/10">
                    <ImageWithFallback 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      fallbackType="logo"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 ml-20 md:ml-0">
                    <div className={`p-6 bg-slate-800/90 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className={`flex flex-col mb-4 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                        <span className="text-indigo-400 font-semibold tracking-wide text-sm mb-1">{exp.period}</span>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          {exp.role}
                        </h3>
                        <h4 className="text-lg text-slate-400">{exp.company}</h4>
                      </div>
                      
                      {/* Summary */}
                      <p className="text-slate-400 mb-4 leading-relaxed">{summary}</p>

                      {/* Expandable Details */}
                      {details.length > 0 && (
                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                          <button 
                            onClick={() => toggleExpand(exp.id)}
                            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors mb-4 focus:outline-none"
                          >
                            {isExpanded ? (
                              <>Hide Key Achievements <ChevronUp size={16} /></>
                            ) : (
                              <>View Key Achievements <ChevronDown size={16} /></>
                            )}
                          </button>

                          <div 
                            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
                              isExpanded ? 'max-h-[1000px] opacity-100 mb-4' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="pt-2 border-t border-slate-700/50">
                              {details.map((line, i) => (
                                line.trim().startsWith('•') ? (
                                  <div key={i} className={`flex items-start gap-2 mb-2 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse md:text-right'}`}>
                                    {index % 2 === 0 && <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />}
                                    <span className="flex-1 text-slate-400">{line.trim().substring(1).trim()}</span>
                                    {index % 2 !== 0 && <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />}
                                  </div>
                                ) : (
                                  <p key={i} className="mb-3 text-slate-400">{line}</p>
                                )
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;