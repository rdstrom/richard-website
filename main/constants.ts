import { Experience, Education, Project } from './types';
import { Brain, Factory, TrendingUp, Cpu, Server, BarChart3, ShieldCheck, GraduationCap } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Richard Strom",
  title: "Senior Manager Digital Transformation",
  company: "Komatsu",
  tagline: "Bridging the gap between Manufacturing Physicality and Data Science Abstraction.",
  about: "I am currently the Senior Manager of Digital Transformation for Komatsu, passionate about manufacturing and data science. My academic background is in stochastic optimization and quantitative risk analysis, leveraging LLMs and ML models to solve complex industrial problems.",
  location: "Chicago, IL",
  email: "richard.strom@example.com",
  linkedin: "linkedin.com/in/richardstrom",
  profileImage: "/profile.jpg"
};

export const EXPERIENCES: Experience[] = [
  {
    id: '0',
    role: "Senior Manager Digital Transformation",
    company: "Komatsu",
    period: "Feb 2025 – Current",
    summary: "Leading enterprise-wide digital transformation initiatives, bridging the gap between legacy manufacturing systems and modern data architectures to drive operational efficiency and innovation.",
    achievements: [
      "Defined and executed the strategic roadmap for digital manufacturing, overseeing a portfolio of high-impact projects focused on predictive maintenance and process automation.",
      "Established a Digital Center of Excellence (CoE) to standardize data practices and accelerate the adoption of GenAI and ML technologies across global operations.",
      "Partnered with executive leadership to align digital initiatives with broader business goals, resulting in a 20% increase in data-driven decision-making capabilities within the first year."
    ],
    skills: ["Digital Strategy", "Executive Leadership", "Change Management", "Industry 4.0"]
  },
  {
    id: '1',
    role: "Sr. Data Solutions Engineer",
    company: "Komatsu",
    period: "Jun 2024 – Feb 2025",
    summary: "Spearheading digital transformation initiatives by designing and deploying advanced analytic frameworks and LLM-powered solutions to solve complex operational challenges in manufacturing.",
    achievements: [
      "Led the design, development, and deployment of an LLM-powered, stochastic clustering-based recommendation system to match surface mining product failure cases with known issues, generate new product issue reports, and provide severity scoring, reducing issue identification time by 33% and cutting annual warranty costs by $2M.",
      "Led the design, development, and deployment of a construction equipment quality analytic system combining multiple source systems into enterprise data products, utilizing ML models to cluster common failures and building quality specific LLMs allowing engineers to gather critical information in record time.",
      "Developed analytic product framework abstracting away unit specific business processes yielding a 90% reduction in development time compared to historic process.",
      "Worked cross-functionally with advanced manufacturing org. to develop inventory management strategies and define metrics to evaluate operations health."
    ],
    skills: ["LLM", "Stochastic Clustering", "Product Strategy", "Advanced Manufacturing"]
  },
  {
    id: '2',
    role: "Data Scientist – Manufacturing",
    company: "John Deere",
    period: "Mar 2019 – Jun 2024",
    summary: "Served as a key Data Scientist optimizing enterprise inventory and manufacturing processes through the development of stochastic models, emulators, and automated authoring tools.",
    achievements: [
      "Designed, developed, and deployed a stochastic inventory optimization model capable of optimizing an enterprise's inventory parameters in hours and driving a measured 4 million dollars in inventory reduction, with 20+ million dollars in further reduction opportunity identified.",
      "Developed a python based SAP MRP emulator, enabling users in the enterprise to evaluate MRP parameters out of system.",
      "Designed, developed, and deployed automated work instruction authoring model capable of predicting 75 percent of work instructions leading to a 1.25 million dollar reduction in work instruction authoring costs.",
      "Worked cross-functionally with manufacturing, material flow, and supply management to develop a time-series data portfolio enabling sophisticated modeling, delivering 60+ data products to the enterprise consumed by 13,000+ users."
    ],
    skills: ["Stochastic Optimization", "Python", "SAP MRP", "Time-Series Modeling"]
  },
  {
    id: '3',
    role: "Data Analyst – Warranty",
    company: "John Deere",
    period: "Nov 2017 – Mar 2019",
    summary: "Led data-driven initiatives to streamline warranty processes and reporting, utilizing simulation models and automated auditing tools to enhance operational efficiency.",
    achievements: [
      "Developed warranty claim simulations and models, revising warranty policies leading to a 10% reduction in manually reviewed claims while remaining cost neutral.",
      "Developed automated python based audits and reporting tools, reducing 30 min. per day of reporting work and increasing audit participation by 50%.",
      "Developed R Shiny and Tableau report, resulting in a reduction in reporting times, easier access for field teams to gather insights, and fostering a positive culture around data-driven decision-making."
    ],
    skills: ["Warranty Simulation", "Python", "R Shiny", "Tableau"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    degree: "Master of Science Industrial Engineering",
    institution: "Purdue University",
    year: "2022 – 2024",
    focus: "Operations Research"
  },
  {
    id: '2',
    degree: "Bachelor of Science Management",
    institution: "Purdue University",
    year: "2008 – 2012",
    focus: "Operations, M.I.S"
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "Autonomous Fleet Optimization",
    category: "Optimization",
    description: "A stochastic programming model to optimize the routing of autonomous haulage systems in mining environments under uncertainty.",
    technologies: ["Python", "Gurobi", "C++"]
  },
  {
    id: '2',
    title: "Predictive Maintenance Dashboard",
    category: "Manufacturing",
    description: "Real-time dashboard visualizing sensor data from heavy machinery to predict component failure before it occurs.",
    technologies: ["React", "D3.js", "Azure IoT"]
  },
  {
    id: '3',
    title: "Supply Chain Risk Quantifier",
    category: "Data Science",
    description: "An engine using Bayesian networks to quantify and visualize systemic risks across a multi-tier supply chain.",
    technologies: ["R", "Shiny", "Bayesian Networks"]
  }
];

export const SKILLS = [
  { name: "Stochastic Optimization", icon: TrendingUp },
  { name: "Manufacturing Digitalization", icon: Factory },
  { name: "Machine Learning", icon: Brain },
  { name: "IoT & Edge Computing", icon: Cpu },
  { name: "Big Data Architecture", icon: Server },
  { name: "Quantitative Risk Analysis", icon: ShieldCheck },
];