import React from 'react';
import { ACCOMPLISHMENTS } from '../constants';
import { TrendingDown, ShieldCheck, Zap, Users, Trophy, Mic } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "TrendingDown": <TrendingDown size={32} className="text-white" />,
  "ShieldCheck": <ShieldCheck size={32} className="text-white" />,
  "Zap": <Zap size={32} className="text-white" />,
  "Users": <Users size={32} className="text-white" />,
  "Mic": <Mic size={32} className="text-white" />
};

const Accomplishments: React.FC = () => {
  return (
    <section id="accomplishments" className="py-24 bg-gradient-to-br from-indigo-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Accomplishments</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Tangible results delivered through data-driven innovation and strategic leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACCOMPLISHMENTS.map((item) => (
            <div 
              key={item.id} 
              className="relative group bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy size={64} />
              </div>

              <div className="flex flex-col h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[item.icon] || <Trophy size={32} className="text-white" />}
                </div>

                <div className="mb-2">
                  <h3 className="text-4xl font-bold text-white tracking-tight mb-1">{item.metric}</h3>
                  <h4 className="text-indigo-400 font-medium text-sm uppercase tracking-wider">{item.title}</h4>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mt-auto border-t border-slate-700/50 pt-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;