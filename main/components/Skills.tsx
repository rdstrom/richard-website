import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { SKILLS } from '../constants';

// Helper for responsiveness
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 p-3 rounded-lg shadow-xl">
        <p className="text-white font-medium">{label}</p>
        <p className="text-indigo-400 text-sm">Proficiency: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const Skills: React.FC = () => {
  // Split skills for different views if needed
  const frontendSkills = SKILLS.filter(s => s.category === 'Frontend');
  const backendSkills = SKILLS.filter(s => s.category === 'Backend');
  
  // Transform data for Radar Chart
  const radarData = SKILLS.map(skill => ({
    subject: skill.name,
    A: skill.proficiency,
    fullMark: 100,
  }));

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A visual representation of my technical proficiency and expertise across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Chart 1: Radar Chart for Overview */}
          <div className="h-[400px] w-full bg-slate-800/50 rounded-2xl border border-slate-700/50 p-4">
            <h3 className="text-center text-white mb-4 font-semibold">Skill Distribution</h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#818cf8"
                  strokeWidth={3}
                  fill="#6366f1"
                  fillOpacity={0.4}
                />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 2: Detailed Bar Chart */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white mb-6">Key Proficiencies</h3>
            <div className="space-y-6">
              {SKILLS.slice(0, 6).map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-slate-400 text-sm">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tag Cloud for extras */}
            <div className="pt-6">
              <h4 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-4">Other Tools & Tech</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'Kubernetes', 'Jest', 'Webpack', 'Figma', 'Jira', 'Agile'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-slate-800 text-slate-400 text-sm rounded-lg border border-slate-700 hover:border-slate-500 hover:text-slate-200 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;