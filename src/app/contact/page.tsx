import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/fade-in";
import { ContactForm } from "@/components/sections/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { socialLinks } from "@/lib/data/social";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.author.name}. Let's discuss your next project or collaboration opportunity.`,
};

export const dynamic = "force-dynamic";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Header */}
      <FadeIn>
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Let's Work Together
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <FadeIn delay={0.2}>
            <Card className="border-2">
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4">Contact Info</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Email
                      </div>
                      <Link
                        href={`mailto:${siteConfig.author.email}`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {siteConfig.author.email}
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Location
                      </div>
                      <div className="text-sm">Remote / San Francisco</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="border-2">
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4">Follow Me</h2>
                <div className="space-y-3">
                  {socialLinks.slice(0, 4).map((social) => {
                    const Icon = iconMap[social.icon];
                    if (!Icon) return null;

                    return (
                      <Link
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm hover:text-primary transition-colors group"
                      >
                        <Icon className="h-5 w-5 flex-shrink-0" />
                        <span className="group-hover:underline">
                          {social.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Card className="border-2 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24-48 hours during business days.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

