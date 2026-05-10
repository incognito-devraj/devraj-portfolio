export interface Stat {
  label: string;
  value: string;
}

export interface SkillGroup {
  category: string;
  featured?: boolean;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
  current: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  color: "blue" | "green" | "orange";
  points: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  status: "In Progress" | "Planning";
  github: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  profile: string;
  stats: Stat[];
  skillGroups: SkillGroup[];
  education: EducationItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
  languages: LanguageItem[];
}

export const portfolioData: PortfolioData = {
  name: "Devraj Mukherjee",
  title: "Core Java Developer & Cybersecurity Enthusiast",
  tagline: "B.Tech CS Student (SGPA 8.48) | Spring Boot | Zero Trust Security | DSA",
  email: "devrajmukherjee.om@gmail.com",
  phone: "+91 6297003575",
  location: "Baruipur, South 24 PGS, West Bengal",
  linkedin: "https://linkedin.com/in/devrajom/",
  github: "https://github.com/devrajom",
  profile: `Driven Computer Science student with a keen interest in cybersecurity, AI,
    and backend development. Skilled in Core Java, Spring Boot, and DSA with a
    problem-solving mindset. Certified in Zero Trust Cloud Security by Zscaler.
    Passionate about securing systems, building scalable solutions, and leveraging
    AI for innovation. Open to TCS NQT and internship opportunities.`,
  stats: [
    { label: "Current SGPA", value: "8.48" },
    { label: "Typing Speed", value: "67 WPM" },
    { label: "Languages", value: "3" },
    { label: "Certifications", value: "4" },
  ],
  skillGroups: [
    {
      category: "Core Programming",
      featured: true,
      skills: ["Java (Core)", "C", "Data Structures & Algorithms", "OOP Principles"],
    },
    {
      category: "Backend & Frameworks",
      skills: [
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Spring Data JPA",
        "Spring AI",
        "RESTful APIs",
        "Docker",
      ],
    },
    {
      category: "Cybersecurity",
      skills: [
        "Zero Trust Architecture",
        "Identity & Access Management",
        "Network Security",
        "Risk Assessment",
        "Threat Analysis",
        "Cloud Security",
      ],
    },
    {
      category: "Web Basics",
      skills: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      category: "Soft Skills",
      skills: [
        "Technical Documentation",
        "Effective Communication",
        "Critical Thinking",
        "Team Collaboration",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Greater Kolkata College of Engineering & Management",
      year: "2023 – 2027",
      score: "Current SGPA: 8.48",
      current: true,
    },
    {
      degree: "Higher Secondary Education (Science)",
      institution: "Baghmundi High School",
      year: "2021 – 2023",
      score: "65.8%",
      current: false,
    },
    {
      degree: "Secondary Education",
      institution: "Baghmundi High School",
      year: "2021",
      score: "84.71%",
      current: false,
    },
  ],
  certifications: [
    {
      title: "Zero Trust Cloud Security Virtual Internship",
      issuer: "Zscaler Academy",
      date: "Oct – Dec 2024",
      color: "blue",
      points: [
        "Gained hands-on experience in Zero Trust Architecture, Cloud Security, and IAM",
        "Developed skills in network security, threat analysis, and security tools for cloud protection",
      ],
    },
    {
      title: "Fundamentals of Cybersecurity (EDU-102)",
      issuer: "Zscaler Cyber Academy",
      date: "Jan 2025",
      color: "blue",
      points: [
        "Developed expertise in network security, risk assessment, and hybrid cloud adoption",
        "Learned cybersecurity best practices to secure digital infrastructures",
      ],
    },
    {
      title: "Java Spring Framework, Spring Boot & Spring AI",
      issuer: "Online Course",
      date: "2024",
      color: "green",
      points: [
        "Mastered Core Java, OOP, and Spring Boot for enterprise applications",
        "Built RESTful APIs, secured apps with Spring Security, integrated Gen AI with Spring AI",
        "Dockerized Spring Boot applications",
      ],
    },
    {
      title: "SIT ICOE Hackathon 2024",
      issuer: "Team \"Smashers\" — Ranked 60 in Round 1",
      date: "Jan 2024",
      color: "orange",
      points: [
        "Collaborated with a team to tackle real-world challenges",
        "Applied strategic and technical thinking to build creative solutions",
        "Demonstrated teamwork, resilience, and adaptability under pressure",
      ],
    },
  ],
  projects: [
    {
      title: "Employee Management REST API",
      description:
        "A CRUD REST API built with Spring Boot, Spring Data JPA, and MySQL. Implements employee lifecycle management with proper exception handling and validation.",
      tech: ["Spring Boot", "Java", "MySQL", "REST API"],
      status: "In Progress",
      github: "#",
    },
    {
      title: "Cybersecurity Threat Dashboard",
      description:
        "A dashboard for visualizing network threat data, built with Spring Security and Bootstrap. Demonstrates Zero Trust principles in a web application.",
      tech: ["Spring Security", "Java", "Spring Boot"],
      status: "Planning",
      github: "#",
    },
    {
      title: "DSA Problem Tracker",
      description:
        "A CLI tool to track and categorize DSA problems solved, with difficulty ratings and time complexity notes. Built in pure Java.",
      tech: ["Java", "CLI", "File I/O"],
      status: "In Progress",
      github: "#",
    },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Intermediate" },
    { name: "Bengali", level: "Native" },
  ],
};
