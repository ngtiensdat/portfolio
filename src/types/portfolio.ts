export interface ProjectGalleryItem {
  src: string;
  caption: string;
  category?: string;
}

export interface ProjectCodeStructureItem {
  title: string;
  path: string;
  description: string;
  badge?: string;
  children?: {
    path: string;
    description: string;
  }[];
}

export interface ProjectDeepDive {
  title: string;
  challenge: string;
  solution: string;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  keyTakeaways: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: 'Full-stack' | 'Frontend' | 'Backend' | 'Mobile';
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  role?: string;
  timeline?: string;
  organization?: string;
  status?: string;
  teamSize?: string;
  stats?: { label: string; value: string; hint?: string }[];
  techStackByCategory?: { category: string; skills: string[] }[];
  gallery?: ProjectGalleryItem[];
  architectureOverview?: string;
  codeStructure?: ProjectCodeStructureItem[];
  deepDives?: ProjectDeepDive[];
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

