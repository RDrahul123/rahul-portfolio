export const profile = {
  name: "Rahul Dodke",
  title: "Data Science Analyst",
  tagline:
    "I turn messy, real-world data into models and dashboards that hold up in production — not just in a notebook.",
  location: "Indore, India",
  email: "rahul@example.com", // TODO: replace with your real contact email
  github: "https://github.com/RDrahul123",
  linkedin: "https://in.linkedin.com/in/rahul-dodke",
  resumeUrl: "#", // TODO: link to your hosted resume PDF
};

export const about = {
  paragraphs: [
    "I'm a Data Science Analyst at Samatrix Consulting, where I build AI and analytics solutions for clients in finance and healthcare — the kind of work where a wrong number costs someone real money or a missed diagnosis, not just a bad demo.",
    "Before this, I built blockchain software at TCS iON, running an Ethereum project on AWS with Docker — early exposure to shipping things that have to actually stay up. I also started out as a C Developer Associate at The Entrepreneurship Network, which is where the fundamentals got beaten into me.",
    "I hold a B.Tech from Acropolis Institute, and outside of client work I spend a lot of time in financial markets — active trading, technical indicators, and building my own tools to analyze them.",
  ],
};

export const skills = [
  {
    category: "Data Science & ML",
    items: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "R"],
  },
  {
    category: "Data & Databases",
    items: ["SQL", "Power BI", "Data Visualization", "ETL"],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS", "Docker", "Firebase", "Azure"],
  },
  {
    category: "Engineering",
    items: ["FastAPI", "React", "Git", "REST APIs"],
  },
];

export const proficiency = [
  { label: "Python", value: 90 },
  { label: "Machine Learning", value: 85 },
  { label: "SQL", value: 82 },
  { label: "Power BI", value: 78 },
  { label: "Cloud (AWS/Docker)", value: 72 },
  { label: "Full-Stack", value: 68 },
];

export const projects = [
  {
    title: "The Stock",
    description:
      "A stock market analysis and portfolio management application with technical indicators and interactive visualizations for investors and analysts.",
    tags: ["Python", "Data Visualization", "Finance"],
    href: "https://github.com/RDrahul123/The-Stock",
  },
  {
    title: "Stock Analysis",
    description:
      "Data-driven analysis of stock market trends from historical price data — collection, cleaning, visualization, and statistical analysis to surface patterns across stocks.",
    tags: ["Python", "Statistics", "Finance"],
    href: "https://github.com/RDrahul123/Stock-Analysis",
  },
  {
    title: "E-commerce Sales Dashboard",
    description:
      "An interactive dashboard analyzing e-commerce sales data — key performance metrics, customer behavior, sales trends, and payment modes across categories and regions.",
    tags: ["Power BI", "Data Analysis", "Dashboards"],
    href: "https://github.com/RDrahul123/Ecommerce-Sales-Dashboard",
  },
  {
    title: "DRONA",
    description:
      "An unmanned aerial vehicle concept built on AI/ML for bomb detection and neutralization — applied computer vision and decision systems for a defense use case.",
    tags: ["AI/ML", "Computer Vision"],
    href: "https://github.com/RDrahul123/DRONA",
  },
];

export const experience = [
  {
    role: "Data Science Analyst",
    org: "Samatrix Consulting Pvt. Ltd.",
    period: "Current",
    description:
      "Building AI and analytics solutions for clients in finance and healthcare — from data pipelines to models to the dashboards stakeholders actually read.",
  },
  {
    role: "Blockchain Software Developer",
    org: "TCS iON",
    period: "Previous",
    description:
      "Built an Ethereum project deployed on AWS using Docker Hub — hands-on with cloud infrastructure and containerized deployment.",
  },
  {
    role: "C Developer Associate",
    org: "The Entrepreneurship Network",
    period: "Earlier",
    description: "Early career role focused on core C development fundamentals.",
  },
];

export const education = {
  degree: "B.Tech",
  institution: "Acropolis Institute of Technology and Research",
};
