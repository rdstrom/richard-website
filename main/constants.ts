import { Experience, Education, Competency, Project, Skill, Accomplishment } from './types';

export const USER_INFO = {
  name: "Richard Strom",
  title: "Senior Manager Digital Transformation",
  tagline: "Bridging the gap between legacy systems and modern data architectures.",
  about: "I am a Senior Manager of Digital Transformation with a strong background in Data Science and Engineering. I specialize in driving operational efficiency through GenAI, ML, and stochastic optimization bringing AI and advanced analytics into the heart of manufacturing operations to modernize legacy systems and unlock measurable business value.",
  location: "San Francisco, CA",
  email: "rstrom1990@gmail.com",
  github: "github.com/richardstrom",
  linkedin: "www.linkedin.com/in/richard-d-strom/",
  // Standardized to absolute path from root including public directory
  profileImage: "/images/profile.jpg"
};

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: "Senior Manager Digital Transformation",
    company: "Komatsu",
    period: "Feb 2026 – Current",
    description: "Owns and drives the global Digital Transformation roadmap, overseeing applications, technology systems, data product architecture, and AI-enabled solutions across platforms and translates strategic manufacturing and supply chain objectives into scalable, data driven solutions\n• Design and scale enterprise data architecture and innovation\n• Own and execute the global Digital Transformation roadmap\n• Drive organizational change and capability building\n• Champion AI and advanced analytics adoption",
    technologies: ["Digital Strategy", "Data Architecture", "Digital Transformation", "Advanced Mfg."],
    logo: "/images/companies/komatsu.png"
  },
  {
    id: '2',
    role: "Sr. Data Solutions Engineer",
    company: "Komatsu",
    period: "Jan 2025 – Feb 2026",
    description: "Spearheading digital transformation initiatives by designing and deploying advanced analytic frameworks and LLM-powered solutions to solve complex operational challenges in manufacturing.\n• Led the design, development, and deployment of an LLM-powered, stochastic clustering-based recommendation system to match surface mining product failure cases with known issues, generate new product issue reports, and provide severity scoring, reducing issue identification time by 33% and cutting annual warranty costs by $2M.\n• Led the design, development, and deployment of a construction equipment quality analytic system combining multiple source systems into enterprise data products, utilizing ML models to cluster common failures and building quality specific LLMs allowing engineers to gather critical information in record time.\n• Developed analytic product framework abstracting away unit specific business processes yielding a 90% reduction in development time compared to historic process.\n• Worked cross-functionally with advanced manufacturing org. to develop inventory management strategies and define metrics to evaluate operations health.",
    technologies: ["LLM", "Stochastic Clustering", "Product Strategy", "Advanced Manufacturing"],
    logo: "/images/companies/komatsu.png"
  },
  {
    id: '3',
    role: "Data Scientist – Manufacturing",
    company: "John Deere",
    period: "Mar 2019 – Jun 2024",
    description: "Served as a key Data Scientist optimizing enterprise inventory and manufacturing processes through the development of stochastic models, emulators, and automated authoring tools.\n• Designed, developed, and deployed a stochastic inventory optimization model capable of optimizing an enterprise's inventory parameters in hours and driving a measured 4 million dollars in inventory reduction, with 20+ million dollars in further reduction opportunity identified.\n• Developed a python based SAP MRP emulator, enabling users in the enterprise to evaluate MRP parameters out of system.\n• Designed, developed, and deployed automated work instruction authoring model capable of predicting 75 percent of work instructions leading to a 1.25 million dollar reduction in work instruction authoring costs.\n• Worked cross-functionally with manufacturing, material flow, and supply management to develop a time-series data portfolio enabling sophisticated modeling, delivering 60+ data products to the enterprise consumed by 13,000+ users.",
    technologies: ["Stochastic Optimization", "Python", "SAP MRP", "Time-Series Modeling"],
    logo: "/images/companies/john-deere.png"
  },
  {
    id: '4',
    role: "Data Analyst – Warranty",
    company: "John Deere",
    period: "Nov 2017 – Mar 2019",
    description: "Led data-driven initiatives to streamline warranty processes and reporting, utilizing simulation models and automated auditing tools to enhance operational efficiency.\n• Developed warranty claim simulations and models, revising warranty policies leading to a 10% reduction in manually reviewed claims while remaining cost neutral.\n• Developed automated python based audits and reporting tools, reducing 30 min. per day of reporting work and increasing audit participation by 50%.\n• Developed R Shiny and Tableau report, resulting in a reduction in reporting times, easier access for field teams to gather insights, and fostering a positive culture around data-driven decision-making.",
    technologies: ["Warranty Simulation", "Python", "R Shiny", "Tableau"],
    logo: "/images/companies/john-deere.png"
  },
  {
    id: '5',
    role: "Data Analyst Roles – Logistics, Material Flow, Operations",
    company: "John Deere",
    period: "Jan 2013 – Mar 2019",
    description: "Led development and deployment of advanced analytics solutions across logistics and material flow at John Deere, delivering data-driven tools that improved inventory management, transportation cost efficiency, and factory responsiveness.\n• Replaced multiple legacy Access databases and Excel reports with an MSSQL solution, reducing reporting and data maintenance time from 60 to 15 hours per week.\n• Developed a mobile inventory alerting tool that eliminated 400 minutes of unproductive labor per day; solution was later adopted and deployed enterprise-wide.\n• Built a Python-based service parts scheduling optimization model, improving asset utilization and factory responsiveness to customer demand.\n• Designed specialized transportation cost models generating $125K in annual savings and led deployment of parameter optimization tools across manufacturing stakeholders.",
    technologies: ["Network Optimization", "Python", "R Shiny", "Tableau"],
    logo: "/images/companies/john-deere.png"
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    degree: "Master of Science Industrial Engineering",
    institution: "Purdue University",
    year: "2022 – 2024",
    details: "Focus: Operations Research",
    logo: "/images/education/purdue.png"
  },
  {
    id: '2',
    degree: "Bachelor of Science Management",
    institution: "Purdue University",
    year: "2008 – 2012",
    details: "Focus: Operations, M.I.S",
    logo: "/images/education/purdue.png"
  }
];

export const CORE_COMPETENCIES: Competency[] = [
  { 
    name: "Stochastic Optimization", 
    description: "Applying advanced probabilistic models to complex decision-making processes under uncertainty."
  },
  { 
    name: "Manufacturing Digitalization", 
    description: "Bridging the gap between legacy systems and modern digital architectures to drive Industry 4.0 adoption."
  },
  { 
    name: "Process Optimization", 
    description: "Streamlining workflows and enhancing operational efficiency through data-driven insights and automation."
  },
  { 
    name: "Machine Learning", 
    description: "Designing and deploying ML models and GenAI solutions to solve critical business challenges."
  },
  { 
    name: "Big Data Architecture", 
    description: "Building scalable data pipelines and analytic frameworks to support enterprise-wide intelligence."
  },
  { 
    name: "Quantitative Risk Analysis", 
    description: "Utilizing statistical methods to evaluate and mitigate operational and financial risks."
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", proficiency: 98, category: "Backend" },
  { name: "Machine Learning", proficiency: 95, category: "Data" },
  { name: "Stochastic Optimization", proficiency: 92, category: "Data" },
  { name: "SQL / Databases", proficiency: 88, category: "Backend" },
  { name: "React / Frontend", proficiency: 75, category: "Frontend" },
  { name: "Data Visualization", proficiency: 90, category: "Data" },
  { name: "Cloud Architecture", proficiency: 80, category: "Backend" },
  { name: "LLM / GenAI", proficiency: 94, category: "Data" },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "Stochastic Inventory Optimization",
    description: "A stochastic inventory optimization model using Bayesian inference to quantify demand, supplier and internal uncertainty and dynamically update reorder policies, reducing stockouts and excess holding costs through data driven decision making.",
    image: "/images/projects/project2.jpg",
    tags: ["Pyspark", "Databricks", "Bayesian Inference", "Convex Optimization"]
  },
  {
    id: 'p2',
    title: "Machine Failure Case Clustering",
    description: "A probabilistic failure clustering system that combines traditional clustering techniques with structured LLM models enabling quality groups to identify and resolve product issues at record speed",
    image: "/images/projects/project3.jpg",
    tags: ["Palantir Foundry", "Density Based Clustering", "LLM Embeddings"]
  },
  {
    id: 'p3',
    title: "Quality Issue Detection and Resolution Application",
    description: "a Product Issue Identification tool that clusters failure signals to detect emerging quality trends, incorporates a custom internal LLM for root-cause analysis, and automatically generates structured, LLM-driven quality reports to accelerate investigation and resolution workflows",
    image: "/images/projects/project1.jpg",
    tags: ["Palantir Foundry", "Density Based Clustering", "Agentic Agents", "Ontology"]
  }
];

export const ACCOMPLISHMENTS: Accomplishment[] = [
  {
    id: 'a1',
    title: "MINExxpo Conference",
    metric: "2026",
    description: "Presentation accepted for innovative methods of combining LLM's and traditional ML to detect systemic quality issues faster.",
    icon: "Mic"
  },
  {
    id: 'a2',
    title: "Warranty Savings",
    metric: "$2M/Year",
    description: "Created Quality Analytic Framework that detects product quality issues 33% faster.",
    icon: "ShieldCheck"
  },
  {
    id: 'a3',
    title: "Inventory Reduction",
    metric: "$6M",
    description: "Leveraged Stochastic Optimization Models to drive inventory reduction and reduce manufacturing volatility.",
    icon: "TrendingDown"
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are an AI assistant for ${USER_INFO.name}'s portfolio website. 
Your role is to represent ${USER_INFO.name} and answer questions about their professional background, skills, and experience in a friendly and professional manner.
Use the following context to answer questions:

Name: ${USER_INFO.name}
Title: ${USER_INFO.title}
Tagline: ${USER_INFO.tagline}
About: ${USER_INFO.about}
Contact: ${USER_INFO.email}

Accomplishments:
${ACCOMPLISHMENTS.map(a => `- ${a.title}: ${a.metric} - ${a.description}`).join('\n')}

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}. Tech stack: ${e.technologies.join(', ')}`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} from ${e.institution} (${e.year}). ${e.details}`).join('\n')}

Core Competencies:
${CORE_COMPETENCIES.map(c => `- ${c.name}: ${c.description}`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.proficiency}%)`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

Guidelines:
- Be polite, concise, and professional.
- If asked about something not in the context (like personal address, political views), politely decline.
- Emphasize John's expertise in Digital Transformation and Data Science.
- Encourage the user to contact John via email if they have a job opportunity.
`;
