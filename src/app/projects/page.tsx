"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, childVariants } from "@/components/animations/stagger-children";
import { getAllProjects } from "@/lib/data/projects";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project, ProjectCategory } from "@/types";

const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "product-design", label: "Product Design" },
  { value: "web-design", label: "Web Design" },
  { value: "mobile-design", label: "Mobile Design" },
  { value: "branding", label: "Branding" },
  { value: "ui-ux", label: "UI/UX" },
];

export default function ProjectsPage() {
  const allProjects = getAllProjects();
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | "all"
  >("all");

  const filteredProjects =
    selectedCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Header */}
      <FadeIn>
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Projects
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            A collection of my design work, case studies, and product
            experiences.
          </p>
        </div>
      </FadeIn>

      {/* Category Filters */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={
                selectedCategory === category.value ? "default" : "outline"
              }
              onClick={() => setSelectedCategory(category.value)}
              className="transition-all"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </FadeIn>

      {/* Projects Grid */}
      <StaggerChildren
        key={selectedCategory}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.slug} variants={childVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </StaggerChildren>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <FadeIn>
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        </FadeIn>
      )}
    </div>
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
          
          {/* Featured badge */}
          {project.featured && (
            <Badge className="absolute top-4 right-4">Featured</Badge>
          )}
        </div>

        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>

          <p className="text-sm text-muted-foreground mb-2">{project.role}</p>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

