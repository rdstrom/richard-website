import React from 'react';
import { CORE_COMPETENCIES } from '../constants';
import { 
  TrendingUp, 
  Factory, 
  Settings2, 
  BrainCircuit, 
  Database, 
  Activity 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "Stochastic Optimization": <TrendingUp size={32} className="text-indigo-400" />,
  "Manufacturing Digitalization": <Factory size={32} className="text-indigo-400" />,
  "Process Optimization": <Settings2 size={32} className="text-indigo-400" />,
  "Machine Learning": <BrainCircuit size={32} className="text-indigo-400" />,
  "Big Data Architecture": <Database size={32} className="text-indigo-400" />,
  "Quantitative Risk Analysis": <Activity size={32} className="text-indigo-400" />,
};

const CoreCompetencies: React.FC = () => {
  return (
    <section id="competencies" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Competencies</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Specialized areas of expertise combining advanced analytics with industrial strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_COMPETENCIES.map((comp) => (
            <div 
              key={comp.name} 
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 group"
            >
              <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-indigo-500/30 transition-colors">
                {iconMap[comp.name] || <Activity size={32} className="text-indigo-400" />}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {comp.name}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;