"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/types";
import { Briefcase } from "lucide-react";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <FadeIn key={index} delay={index * 0.1}>
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
            {/* Timeline line */}
            <div className="absolute left-8 top-14 bottom-0 w-0.5 bg-border" />

            <CardContent className="p-6 sm:p-8">
              <div className="flex gap-6">
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Briefcase className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <Badge variant="secondary">{exp.period}</Badge>
                      {exp.location && (
                        <span className="text-sm text-muted-foreground">
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}

