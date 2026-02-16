export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  logo: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details: string;
  logo?: string;
}

export interface Competency {
  name: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
}

export interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

export interface Accomplishment {
  id: string;
  title: string;
  metric: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}