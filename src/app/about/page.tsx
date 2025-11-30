import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/fade-in";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { experience } from "@/lib/data/experience";
import { skills } from "@/lib/data/skills";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.author.name} - Senior Product Designer with expertise in UI/UX, interaction design, and design systems.`,
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Header */}
      <FadeIn>
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            I'm a Senior Product Designer passionate about creating beautiful,
            user-centered experiences. With a keen eye for pixel-perfect design
            and smooth animations, I bridge the gap between design and
            development.
          </p>
        </div>
      </FadeIn>

      {/* Introduction */}
      <FadeIn delay={0.1}>
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Journey</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Over the past 5+ years, I've had the privilege of working with
              amazing teams and companies, designing products that serve
              thousands of users. I believe great design is not just about
              aesthetics—it's about solving real problems and creating
              delightful experiences that users love.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Currently, I'm expanding my skillset by learning to code, building
              this very portfolio with Next.js, TypeScript, and modern web
              technologies. This hands-on experience deepens my understanding of
              what's possible and helps me collaborate more effectively with
              engineering teams.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Experience */}
      <div className="mb-20">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Experience</h2>
        </FadeIn>
        <ExperienceTimeline experiences={experience} />
      </div>

      {/* Skills */}
      <div>
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Skills</h2>
        </FadeIn>
        <SkillsGrid skills={skills} />
      </div>
    </div>
  );
}

