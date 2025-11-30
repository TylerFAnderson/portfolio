import type { Project } from "@/types";

/**
 * Project data - Replace with your actual projects
 * Featured projects will appear on the home page
 */
export const projects: Project[] = [
  {
    slug: "design-system",
    title: "Enterprise Design System",
    description:
      "A comprehensive design system built for scalability and consistency across multiple products.",
    longDescription:
      "Led the creation of a comprehensive design system from the ground up, including component libraries, documentation, and design tokens. Implemented across 5 product teams, resulting in 40% faster design-to-development handoff.",
    tags: ["Design Systems", "UI/UX", "Figma", "Documentation"],
    category: "product-design",
    image: "/images/projects/design-system.jpg", // Replace with actual image
    images: [
      "/images/projects/design-system-1.jpg",
      "/images/projects/design-system-2.jpg",
      "/images/projects/design-system-3.jpg",
    ],
    featured: true,
    date: "2024-06-01",
    role: "Lead Product Designer",
    duration: "6 months",
    team: ["2 Designers", "4 Engineers"],
  },
  {
    slug: "mobile-banking-app",
    title: "Mobile Banking Redesign",
    description:
      "Complete redesign of a mobile banking app focused on improving user experience and accessibility.",
    longDescription:
      "Redesigned the core banking experience for mobile, focusing on simplification and accessibility. Conducted extensive user research with 50+ participants. Increased user satisfaction scores by 35% and reduced support tickets by 25%.",
    tags: ["Mobile Design", "UX Research", "Prototyping", "Accessibility"],
    category: "mobile-design",
    image: "/images/projects/mobile-banking.jpg",
    images: [
      "/images/projects/mobile-banking-1.jpg",
      "/images/projects/mobile-banking-2.jpg",
    ],
    featured: true,
    date: "2024-03-15",
    role: "Senior Product Designer",
    duration: "4 months",
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "Data visualization dashboard for a B2B SaaS platform with complex data relationships.",
    longDescription:
      "Designed an intuitive analytics dashboard that transforms complex data into actionable insights. Focused on information architecture and progressive disclosure patterns to prevent cognitive overload.",
    tags: ["Dashboard Design", "Data Viz", "B2B SaaS", "User Research"],
    category: "web-design",
    image: "/images/projects/dashboard.jpg",
    images: ["/images/projects/dashboard-1.jpg"],
    featured: true,
    date: "2023-11-20",
    role: "Product Designer",
    duration: "3 months",
  },
  {
    slug: "brand-identity",
    title: "Tech Startup Branding",
    description:
      "Complete brand identity design for an AI-powered productivity startup.",
    longDescription:
      "Created a comprehensive brand identity including logo design, color systems, typography, and brand guidelines. Collaborated closely with the founding team to ensure the brand reflected their vision and values.",
    tags: ["Branding", "Visual Design", "Logo Design", "Guidelines"],
    category: "branding",
    image: "/images/projects/branding.jpg",
    images: ["/images/projects/branding-1.jpg", "/images/projects/branding-2.jpg"],
    featured: false,
    date: "2023-09-10",
    role: "Brand Designer",
    duration: "2 months",
  },
];

// Helper functions for data access
export function getAllProjects(): Project[] {
  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(
  category: Project["category"]
): Project[] {
  return projects.filter((project) => project.category === category);
}

