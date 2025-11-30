export const siteConfig = {
  name: "Tyler Anderson",
  title: "Tyler Anderson - Senior Product Designer",
  description:
    "Senior Product Designer crafting beautiful, user-centered digital experiences with pixel-perfect precision.",
  url: "https://tylerандerson.com", // Update with your actual domain
  author: {
    name: "Tyler Anderson",
    email: "ttyleranderson@gmail.com",
    github: "https://github.com/yourusername", // Update with your GitHub username
    linkedin: "https://linkedin.com/in/yourprofile", // Update with your LinkedIn
    twitter: "https://twitter.com/yourhandle", // Update if you have Twitter
  },
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
} as const;

export type SiteConfig = typeof siteConfig;

