"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  /**
   * Unique key to trigger re-animation when changed
   */
  animationKey: string | number;
  /**
   * Duration of the animation in seconds
   * @default 0.2
   */
  duration?: number;
  /**
   * Amount of blur during transition (in pixels)
   * @default 4
   */
  blurAmount?: number;
  /**
   * Scale factor during transition
   * @default 0.8
   */
  scale?: number;
  /**
   * Easing function
   * @default "easeOut"
   */
  ease?: "easeIn" | "easeOut" | "easeInOut" | "linear";
  /**
   * Additional className for the wrapper
   */
  className?: string;
}

/**
 * BlurFade - Smooth blur crossfade animation component
 * 
 * Based on the principle: "Blur bridges the visual gap between states,
 * making transitions feel more natural by blending old and new together."
 * 
 * @example
 * ```tsx
 * <BlurFade animationKey={isActive ? "active" : "inactive"}>
 *   {isActive ? <CheckIcon /> : <MailIcon />}
 * </BlurFade>
 * ```
 */
export function BlurFade({
  children,
  animationKey,
  duration = 0.2,
  blurAmount = 4,
  scale = 0.8,
  ease = "easeOut",
  className,
}: BlurFadeProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={animationKey}
        initial={{
          opacity: 0,
          scale,
          filter: `blur(${blurAmount}px)`,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          scale,
          filter: `blur(${blurAmount}px)`,
        }}
        transition={{ duration, ease }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

