import { motion } from "framer-motion";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import type { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  threshold?: number;
  direction?: "up" | "down" | "left" | "right";
}

/**
 * Wrapper component that applies scroll animations to its children
 * Elements fade in and slide into view when they become visible
 */
export function ScrollAnimation({
  children,
  className = "",
  duration = 0.6,
  delay = 0,
  threshold = 0.2,
  direction = "up",
}: ScrollAnimationProps) {
  const { ref, isInView } = useScrollAnimation({ threshold });

  const directionVariants = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionVariants[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionVariants[direction] }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Cubic bezier matching existing animations
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  staggerChildren?: boolean;
  containerDelay?: number;
}

/**
 * Container component for animating multiple child elements with stagger effect
 * Perfect for sections with multiple items that should animate in sequence
 */
export function ScrollSection({
  children,
  className = "",
  staggerChildren = true,
  containerDelay = 0,
}: ScrollSectionProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerChildren ? 0.1 : 0,
            delayChildren: containerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * Individual item component to be used within ScrollSection
 * Automatically inherits stagger timing from parent
 */
export function ScrollItem({ children, className = "" }: ScrollItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
