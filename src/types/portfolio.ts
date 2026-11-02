export interface Project {
  id: string;
  featured: boolean;
  role: string;
  technologies: string[];
  visual: 'inventory' | 'classification' | 'hr-management' | 'wood-sales';
  demoUrl?: string;
  githubUrl?: string;
  statusLabel?: string;
  content: {
    en: ProjectContent;
    id: ProjectContent;
  };
}

export interface ProjectContent {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa: string;
  description: string;
}

export interface ApproachPillar {
  number: string;
  title: string;
  description: string;
  highlights?: string[];
  iconName?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconName: 'github' | 'linkedin' | 'mail' | 'file-text';
}

export interface Profile {
  name: string;
  brandName: string;
  greeting?: string;
  role: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  status: string;
  education: {
    major: string;
    university: string;
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
    cvUrl: string;
  };
}
