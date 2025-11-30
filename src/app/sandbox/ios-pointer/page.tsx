"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Cursor, useCursorState, useMagneticPull } from "motion-plus/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Link from "next/link";

/**
 * iOS POINTER DEMO - Development Only
 * This page is blocked in production and only accessible during local development
 */

// Block access in production
if (process.env.NODE_ENV === "production") {
  redirect("/");
}

/**
 * iOS Pointer Component - Motion+ Exclusive
 * Uses Motion+ Cursor with magnetic snapping
 * Source: https://motion.dev/examples/react-ios-pointer
 */
function IOSPointer() {
  const ref = useRef<HTMLButtonElement>(null);
  const pull = useMagneticPull(ref, 0.1);
  const { zone } = useCursorState();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh]">
      <motion.button ref={ref} className="ios-button" whileTap="pressed">
        <motion.span
          variants={{ pressed: { scale: 0.95 } }}
          style={pull}
        >
          <Chevron />
          Appearance
        </motion.span>
      </motion.button>
      
      <p className="text-sm text-muted-foreground mt-8 max-w-md text-center">
        Move your cursor around - notice how it transforms into a rounded square
        and magnetically snaps to the button
      </p>

      <Cursor
        magnetic
        className="ios-cursor"
        variants={{
          default: {
            backgroundColor:
              zone === "overlay" ? "#eee" : "#7e7e7e",
          },
          pointer: {
            backgroundColor: zone === "overlay" ? "#fff" : "#ddd",
          },
        }}
        style={{
          borderRadius: 10,
          mixBlendMode:
            zone === "overlay" ? "difference" : "multiply",
        }}
      />
    </div>
  );
}

function Chevron() {
  return (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2L2 10L10 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function IOSPointerDemo() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 hide-default-cursor">
      {/* Back to Sandbox */}
      <div className="mb-8">
        <Link href="/sandbox">
          <Button variant="ghost" className="gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Sandbox
          </Button>
        </Link>
      </div>

      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          🎯 iOS Pointer Animation
        </h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant="outline" className="text-xs">
            Motion+ Exclusive
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Local Only
          </Badge>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience the full iOS-style cursor morphing and magnetic snapping effect.
          This demo page is only accessible during local development.
        </p>
        <a
          href="https://motion.dev/examples/react-ios-pointer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline mt-2 inline-block"
        >
          View original example →
        </a>
      </div>

      {/* Demo Section */}
      <section className="border-4 border-dashed border-primary/20 rounded-lg p-8 mb-8">
        <IOSPointer />
      </section>

      {/* Technical Info */}
      <section className="bg-muted/50 rounded-lg p-6 max-w-2xl mx-auto">
        <h3 className="font-semibold mb-3">💡 What's Happening Here?</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• <strong>Custom Cursor:</strong> Your default cursor is replaced with a rounded square</li>
          <li>• <strong>Magnetic Pull:</strong> The cursor magnetically snaps to interactive elements</li>
          <li>• <strong>Button Animation:</strong> The button content follows your cursor position</li>
          <li>• <strong>Blend Modes:</strong> The cursor uses CSS blend modes for visual effects</li>
          <li>• <strong>Motion+ Only:</strong> These APIs require an active Motion+ subscription</li>
        </ul>
      </section>
    </div>
  );
}

