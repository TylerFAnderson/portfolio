"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, childVariants } from "@/components/animations/stagger-children";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/types";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my most recent and impactful design work
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <motion.div key={project.slug} variants={childVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card className="group h-full overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg">
        {/* Project Image Placeholder */}
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <span className="text-sm">Project Image</span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

