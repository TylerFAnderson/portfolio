import type { Experience } from "@/types";

/**
 * Work experience data - Replace with your actual experience
 */
export const experience: Experience[] = [
  {
    company: "Datadog",
    role: "Senior Product Designer",
    period: "2022 - Present",
    location: "Remote",
    current: true,
    description: [
      "Led design initiatives for core platform features serving 20,000+ customers",
      "Established design systems and patterns that improved design-to-development efficiency by 40%",
      "Collaborated with cross-functional teams to ship pixel-perfect, accessible experiences",
      "Mentored junior designers on UX best practices and interaction design principles",
    ],
    technologies: [
      "Figma",
      "Design Systems",
      "Prototyping",
      "User Research",
      "A/B Testing",
    ],
  },
  {
    company: "Previous Company",
    role: "Product Designer",
    period: "2020 - 2022",
    location: "San Francisco, CA",
    description: [
      "Designed user-centered experiences for B2B SaaS products",
      "Conducted user research and usability testing with 100+ participants",
      "Created high-fidelity prototypes and interactive mockups",
      "Collaborated with engineering teams to ensure design quality in production",
    ],
    technologies: [
      "Sketch",
      "Figma",
      "Principle",
      "User Testing",
      "InVision",
    ],
  },
  {
    company: "Startup Name",
    role: "UI/UX Designer",
    period: "2018 - 2020",
    location: "New York, NY",
    description: [
      "Designed mobile and web applications from concept to launch",
      "Created branding and visual identity guidelines",
      "Worked closely with developers to implement designs using HTML/CSS",
      "Conducted competitive analysis and market research",
    ],
    technologies: ["Adobe XD", "Illustrator", "Photoshop", "HTML/CSS"],
  },
];

