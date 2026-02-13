import React from 'react';
import { SKILLS, EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const SkillsGrid: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Skills Column */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-emerald-500/30 transition-all group">
                <div className="p-2 rounded-lg bg-slate-900 group-hover:text-emerald-400 text-slate-400 transition-colors">
                  <skill.icon size={24} />
                </div>
                <span className="font-medium text-slate-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
            <GraduationCap className="text-emerald-500" size={32} />
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>
          
          <div className="space-y-6">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-emerald-400">{edu.degree}</h3>
                  <span className="text-slate-500 text-sm font-mono">{edu.year}</span>
                </div>
                <div className="text-slate-300 font-medium mb-2">{edu.institution}</div>
                <p className="text-sm text-slate-400">Focus: <span className="text-slate-300">{edu.focus}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
