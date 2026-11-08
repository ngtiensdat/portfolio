export interface Project {
  id: string;
  title: string;
  category: 'Full-stack' | 'Frontend' | 'Backend' | 'Mobile';
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  type: 'work' | 'education';
}

export interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  score?: string;
  description: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  status: string;
  location: string;
  email: string;
  phone: string;
  birthDate: string;
  github: string;
  linkedin: string;
  twitter: string;
  resumeUrl: string;
  stats: { label: string; value: string }[];
  aboutText: string[];
}

