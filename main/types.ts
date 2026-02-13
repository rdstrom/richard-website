export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  focus: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Data Science' | 'Manufacturing' | 'Optimization';
  description: string;
  technologies: string[];
  link?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
