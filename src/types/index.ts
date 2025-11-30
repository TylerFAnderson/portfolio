/**
 * Core type definitions for the portfolio
 * These types ensure type safety throughout the application
 */

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: ProjectCategory;
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  date: string;
  role: string;
  duration?: string;
  team?: string[];
}

export type ProjectCategory =
  | "web-design"
  | "mobile-design"
  | "product-design"
  | "branding"
  | "ui-ux"
  | "case-study";

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
}

export type SkillCategory =
  | "design"
  | "prototyping"
  | "research"
  | "development"
  | "tools"
  | "soft-skills";

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  rating?: number;
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

