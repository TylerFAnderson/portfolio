import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { getFeaturedProjects } from "@/lib/data/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <HeroSection />
      <FeaturedProjects projects={featuredProjects} />
    </>
  );
}
