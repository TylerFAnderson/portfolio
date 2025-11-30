import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/animations/fade-in";
import { getAllProjects, getProjectBySlug } from "@/lib/data/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Back Button */}
      <FadeIn>
        <Button asChild variant="ghost" className="mb-8 -ml-4">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </FadeIn>

      {/* Project Header */}
      <FadeIn delay={0.1}>
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.featured && <Badge variant="default">Featured</Badge>}
            <Badge variant="outline">{project.category}</Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            {project.description}
          </p>

          {/* Project Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Role</div>
              <div className="font-medium">{project.role}</div>
            </div>
            {project.duration && (
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Duration
                </div>
                <div className="font-medium">{project.duration}</div>
              </div>
            )}
            <div>
              <div className="text-sm text-muted-foreground mb-1">Date</div>
              <div className="font-medium">
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </div>
            </div>
            {project.team && (
              <div>
                <div className="text-sm text-muted-foreground mb-1">Team</div>
                <div className="font-medium">{project.team.join(", ")}</div>
              </div>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild>
                <Link href={project.liveUrl} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Site
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            )}
          </div>
        </div>
      </FadeIn>

      <Separator className="my-12" />

      {/* Project Image Placeholder */}
      <FadeIn delay={0.2}>
        <div className="max-w-5xl mb-12">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">
              Featured Project Image
            </span>
          </div>
        </div>
      </FadeIn>

      {/* Project Details */}
      <FadeIn delay={0.3}>
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">About This Project</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Technologies */}
      <FadeIn delay={0.4}>
        <div className="max-w-4xl mt-12">
          <h3 className="text-2xl font-bold mb-4">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Additional Images Placeholder */}
      {project.images.length > 0 && (
        <FadeIn delay={0.5}>
          <div className="max-w-5xl mt-12">
            <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center"
                >
                  <span className="text-muted-foreground text-sm">
                    Gallery Image {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      {/* Next Project CTA */}
      <FadeIn delay={0.6}>
        <div className="mt-20 pt-12 border-t">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create something amazing
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

