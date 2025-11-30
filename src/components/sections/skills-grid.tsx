"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Skill, SkillCategory } from "@/types";
import {
  Palette,
  Users,
  Code,
  Wrench,
  Search,
  Lightbulb,
} from "lucide-react";

interface SkillsGridProps {
  skills: Skill[];
}

const categoryIcons: Record<SkillCategory, React.ElementType> = {
  design: Palette,
  prototyping: Lightbulb,
  research: Search,
  development: Code,
  tools: Wrench,
  "soft-skills": Users,
};

const categoryLabels: Record<SkillCategory, string> = {
  design: "Design",
  prototyping: "Prototyping",
  research: "Research",
  development: "Development",
  tools: "Tools",
  "soft-skills": "Soft Skills",
};

export function SkillsGrid({ skills }: SkillsGridProps) {
  // Group skills by category
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<SkillCategory, Skill[]>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(groupedSkills).map(([category, categorySkills], index) => {
        const Icon = categoryIcons[category as SkillCategory];
        return (
          <FadeIn key={category} delay={index * 0.1}>
            <Card className="h-full border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">
                    {categoryLabels[category as SkillCategory]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant={
                        skill.proficiency === "expert"
                          ? "default"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        );
      })}
    </div>
  );
}

