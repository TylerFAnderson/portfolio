"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, childVariants } from "@/components/animations/stagger-children";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

/**
 * SANDBOX PAGE - Development Only
 * This page is blocked in production and only accessible during local development
 */

// Block access in production
if (process.env.NODE_ENV === "production") {
  redirect("/");
}

/**
 * 3D Carousel Component - Mux.com Style
 * Uses CSS 3D transforms to create rotating testimonial carousel
 */
function Carousel3D() {
  const [rotation, setRotation] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      company: "Patreon",
      logo: "PATREON",
      text: "An evolution from embedded video to native video, Patreon chose Mux to enable creators to build community through video with their biggest fans.",
    },
    {
      company: "Substack",
      logo: "SUBSTACK",
      text: "A DIY video experiment turned to scalable video, Substack chose Mux to provide creators with the tools to tell stories with video.",
    },
    {
      company: "HubSpot",
      logo: "HUBSPOT",
      text: "Migration from a video platform to Mux-enabled native video made it easier for Hubspot customers to share video content via websites and emails.",
    },
    {
      company: "Typeform",
      logo: "TYPEFORM",
      text: "Rebuilt a homegrown video system to scalable video with Mux to enable customers to share video in survey questions and responses.",
    },
  ];

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 90);
    }, 4000); // 4 seconds like Mux

    return () => clearInterval(interval);
  }, []);

  // Distance from center to card (apothem of the square)
  // This needs to be roughly half the height of the card + gap
  const offset = 120; 

  return (
    <div className="relative">
      {/* 3D Carousel Wrapper */}
      <div
        className="relative w-full h-[240px] flex items-center justify-center overflow-hidden"
        style={{
          perspective: "1000px",
        }}
      >
        {/* Rotating Container 
            Mux Logic: translateZ(calc(var(--3d-offset) * -1)) rotateX(...) 
            This pushes the rotation axis BACK so the front card stays at Z=0
        */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(-${offset}px) rotateX(${rotation}deg)`,
            transition: "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Mux's snappy ease
          }}
        >
          {/* Cards */}
          {testimonials.map((testimonial, index) => {
            const angle = index * 90;

            return (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  // Push card OUT from center
                  transform: `rotateX(${angle}deg) translateZ(${offset}px)`,
                  // Mux uses backface-visibility hidden to cleaner rotation
                  backfaceVisibility: "hidden", 
                }}
              >
                <Card className="w-full max-w-xl bg-transparent border-none shadow-none h-[280px] flex flex-col justify-center">
                  <CardContent className="p-0">
                    {/* Logo */}
                    <div className="mb-6">
                      <div className="text-2xl font-bold font-mono tracking-tight">
                        {testimonial.logo}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="text-base leading-relaxed text-foreground/80 mb-4 line-clamp-3">
                      {testimonial.text}
                    </div>

                    {/* Badge */}
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="font-mono text-[10px] uppercase">
                        Case Study
                      </Badge>
                      <span className="text-sm font-semibold text-muted-foreground">
                        {testimonial.company}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Simple Manual Controls (just for debugging/testing if needed) */}
      <div className="flex justify-center gap-4 mt-8">
        <Button variant="outline" onClick={() => setRotation(r => r - 90)}>Previous</Button>
        <Button variant="outline" onClick={() => setRotation(r => r + 90)}>Next</Button>
      </div>
    </div>
  );
}

/**
 * SANDBOX PAGE - Safe playground for testing styles and components
 * 
 * This page is NOT linked anywhere on the site.
 * Access it directly at: http://localhost:3000/sandbox
 * 
 * Feel free to:
 * - Test any Tailwind classes
 * - Experiment with shadcn/ui components
 * - Try new animations
 * - Break things (won't affect other pages!)
 * - Learn by doing
 * 
 * When done testing, just delete what you don't need.
 * This page won't appear in production unless you link to it.
 */

export default function SandboxPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          🎨 Design Sandbox
        </h1>
        <p className="text-lg text-muted-foreground">
          Safe playground for testing styles, components, and animations
        </p>
      </div>

      {/* Example: Button Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          {/* Lifted button with shadow effect */}
          <div className="bg-purple-950 dark:bg-purple-950 border-[1.5px] border-purple-800 relative top-[2px] rounded-[6px] w-auto inline-block">
            <button className="relative bg-purple-600 text-white hover:text-white dark:text-white dark:hover:text-white rounded-[6px] text-[14px] font-bold px-4 py-2 translate-y-[-2px] hover:translate-y-[-4px] active:translate-y-[-1px] border-[1.5px] border-purple-500 mx-[-1.5px] block active:transition-all active:duration-100 select-none transition-transform">
              Default
            </button>
          </div>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Example: Cards */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Card Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Basic Card</h3>
              <p className="text-sm text-muted-foreground">
                Test different card styles here
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-primary">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Highlighted Card</h3>
              <p className="text-sm text-muted-foreground">
                With custom border color
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Inverted Card</h3>
              <p className="text-sm opacity-90">
                With primary background
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Example: Badges */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      {/* Example: Animations */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Animation Tests</h2>
        <div className="space-y-8">
          <FadeIn direction="up">
            <Card>
              <CardContent className="p-6">
                <p>This card fades in from below when you scroll</p>
              </CardContent>
            </Card>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div variants={childVariants}>
              <Card>
                <CardContent className="p-6">Item 1</CardContent>
              </Card>
            </motion.div>
            <motion.div variants={childVariants}>
              <Card>
                <CardContent className="p-6">Item 2</CardContent>
              </Card>
            </motion.div>
            <motion.div variants={childVariants}>
              <Card>
                <CardContent className="p-6">Item 3</CardContent>
              </Card>
            </motion.div>
          </StaggerChildren>
        </div>
      </section>

      {/* Example: Color Palette Testing */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-background border rounded" />
            <p className="text-xs">background</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-foreground rounded" />
            <p className="text-xs">foreground</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-primary rounded" />
            <p className="text-xs">primary</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-secondary rounded" />
            <p className="text-xs">secondary</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-muted rounded" />
            <p className="text-xs">muted</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-accent rounded" />
            <p className="text-xs">accent</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-destructive rounded" />
            <p className="text-xs">destructive</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-card border rounded" />
            <p className="text-xs">card</p>
          </div>
        </div>
      </section>

      {/* 3D Rotating Testimonial Carousel - Mux Style */}
      <section className="mb-16 border-4 border-dashed border-primary/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">
          🎪 3D Experiments
        </h2>
        <p className="text-muted-foreground mb-6">
          Advanced CSS 3D transforms and interactions
        </p>

        <div className="space-y-16">
          {/* Mux Carousel */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <a 
                href="https://www.mux.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline decoration-muted-foreground/30 hover:decoration-primary"
              >
                Mux Carousel Clone
              </a>
            </h3>
            <Carousel3D />
          </div>

          {/* Zed Style Button */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <a 
                href="https://zed.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline decoration-muted-foreground/30 hover:decoration-primary"
              >
                Zed-style 3D Button
              </a>
            </h3>
            <div className="flex items-center gap-4 p-8 bg-muted/20 rounded-xl border border-border/50">
              
              {/* The Button - Zed/Linear Style (True Inset) */}
              <button 
                type="button"
                className="
                  group select-none text-sm font-medium tracking-tight rounded-md flex gap-2 items-center justify-center text-nowrap 
                  bg-blue-600 text-white 
                  border border-transparent
                  
                  /* 
                    The Secret: INSET Shadow creates the 'lip' inside the button 
                    hsl(219, 93%, 30%) is the dark blue lip color
                  */
                  shadow-[inset_0_-2px_0_0_hsl(219,93%,30%),0_1px_3px_0_rgba(0,0,0,0.1)]
                  
                  /* Top Highlight Border */
                  border-t-white/20
                  
                  /* Hover State - Darker BG, No Shadow (Flat look) */
                  hover:bg-[hsl(219,93%,35%)] 
                  hover:shadow-none
                  hover:translate-y-0
                  
                  /* Active/Pressed State - Squish slightly */
                  active:translate-y-[1px]
                  active:shadow-none
                  
                  h-8 px-3 /* Smaller, tighter height like screenshot */
                  transition-all duration-100 ease-out
                "
              >
                Download
                
                {/* Keyboard Shortcut Badge */}
                <kbd className="
                  h-6 w-6 rounded flex items-center justify-center text-[11px] font-bold 
                  border border-white/20 bg-black/10 text-white/90
                  shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]
                ">
                  D
                </kbd>
              </button>

            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Uses inset box-shadow for 3D depth + active state transforms
            </p>
          </div>

          {/* iOS Pointer Demo Link */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              iOS Pointer Animation
              <Badge variant="outline" className="ml-2 text-[10px]">
                Motion+ Exclusive
              </Badge>
            </h3>
            <div className="flex flex-col items-start gap-4 p-8 bg-muted/20 rounded-xl border border-border/50">
              <p className="text-sm text-muted-foreground">
                Experience the full iOS-style cursor morphing and magnetic snapping effect on a dedicated demo page.
              </p>
              <Link href="/sandbox/ios-pointer">
                <Button variant="outline" className="gap-2">
                  View iOS Pointer Demo
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Opens dedicated demo page with custom cursor - local development only
            </p>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="bg-muted/50 rounded-lg p-6">
        <h3 className="font-semibold mb-3">💡 Quick Tips</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Save often - see changes at localhost:3000/sandbox</li>
          <li>• Try different Tailwind classes (hover, dark:, md:, etc.)</li>
          <li>• Import any component from @/components/ui/</li>
          <li>• Test animations with FadeIn or motion components</li>
          <li>• This page won't show in production unless you link to it</li>
        </ul>
      </section>
    </div>
  );
}

