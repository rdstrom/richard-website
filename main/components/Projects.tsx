import React from 'react';
import { PROJECTS } from '../constants';
import { Code, Database, Settings } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-1">
              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/80 backdrop-blur text-xs font-semibold text-emerald-400 rounded-full border border-slate-700 z-10">
                {project.category}
              </div>

              <div className="p-6 h-full flex flex-col">
                <div className="mb-4 text-emerald-500 p-3 bg-slate-900/50 w-fit rounded-lg">
                    {project.category === 'Optimization' && <Settings size={24} />}
                    {project.category === 'Data Science' && <Database size={24} />}
                    {project.category === 'Manufacturing' && <Code size={24} />}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
