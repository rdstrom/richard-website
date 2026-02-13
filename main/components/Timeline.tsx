import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-emerald-500" size={32} />
          <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
        </div>

        <div className="relative border-l border-slate-700 ml-4 space-y-16">
          {EXPERIENCES.map((job) => (
            <div key={job.id} className="relative pl-8 group">
              {/* Dot */}
              <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-slate-600 group-hover:bg-emerald-500 transition-colors duration-300 ring-4 ring-slate-900"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {job.role}
                  </h3>
                  <div className="text-lg text-slate-300 font-medium">
                    {job.company}
                  </div>
                </div>
                <div className="text-sm font-mono text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full whitespace-nowrap border border-slate-700">
                  {job.period}
                </div>
              </div>

              {/* Summary */}
              <p className="text-slate-300 mb-6 leading-relaxed font-medium">
                {job.summary}
              </p>

              {/* Achievements Bullet Points */}
              <ul className="list-disc list-outside ml-4 mb-6 space-y-3">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="text-slate-400 leading-relaxed pl-1 marker:text-emerald-500/50">
                    {achievement}
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {job.skills.map(skill => (
                  <span key={skill} className="text-xs font-medium text-emerald-300 bg-emerald-950/30 px-2 py-1 rounded border border-emerald-900/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
