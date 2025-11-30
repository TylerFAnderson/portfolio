import type { Skill } from "@/types";

/**
 * Skills data organized by category
 */
export const skills: Skill[] = [
  // Design Skills
  {
    name: "User Interface Design",
    category: "design",
    proficiency: "expert",
  },
  {
    name: "User Experience Design",
    category: "design",
    proficiency: "expert",
  },
  {
    name: "Interaction Design",
    category: "design",
    proficiency: "expert",
  },
  {
    name: "Visual Design",
    category: "design",
    proficiency: "expert",
  },
  {
    name: "Design Systems",
    category: "design",
    proficiency: "advanced",
  },
  {
    name: "Responsive Design",
    category: "design",
    proficiency: "expert",
  },

  // Prototyping & Tools
  {
    name: "Figma",
    category: "prototyping",
    proficiency: "expert",
  },
  {
    name: "Sketch",
    category: "prototyping",
    proficiency: "advanced",
  },
  {
    name: "Adobe Creative Suite",
    category: "tools",
    proficiency: "advanced",
  },
  {
    name: "Principle",
    category: "prototyping",
    proficiency: "intermediate",
  },
  {
    name: "Framer",
    category: "prototyping",
    proficiency: "intermediate",
  },

  // Research
  {
    name: "User Research",
    category: "research",
    proficiency: "advanced",
  },
  {
    name: "Usability Testing",
    category: "research",
    proficiency: "advanced",
  },
  {
    name: "A/B Testing",
    category: "research",
    proficiency: "intermediate",
  },
  {
    name: "Data Analysis",
    category: "research",
    proficiency: "intermediate",
  },

  // Development (Your learning journey!)
  {
    name: "HTML/CSS",
    category: "development",
    proficiency: "intermediate",
  },
  {
    name: "JavaScript",
    category: "development",
    proficiency: "beginner",
  },
  {
    name: "TypeScript",
    category: "development",
    proficiency: "beginner",
  },
  {
    name: "React",
    category: "development",
    proficiency: "beginner",
  },

  // Soft Skills
  {
    name: "Communication",
    category: "soft-skills",
    proficiency: "expert",
  },
  {
    name: "Collaboration",
    category: "soft-skills",
    proficiency: "expert",
  },
  {
    name: "Problem Solving",
    category: "soft-skills",
    proficiency: "expert",
  },
  {
    name: "Attention to Detail",
    category: "soft-skills",
    proficiency: "expert",
  },
];

// Helper to get skills by category
export function getSkillsByCategory(category: Skill["category"]): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

