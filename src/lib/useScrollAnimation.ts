import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface UseScrollAnimationProps {
  threshold?: number;
  margin?: string;
}

/**
 * Custom hook for scroll animations
 * Returns refs and state for animating elements on scroll
 */
export function useScrollAnimation({ threshold = 0.2, margin = "0px" }: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    amount: threshold,
  });

  return { ref, isInView };
}

/**
 * Hook to detect if an element is at the top of the viewport
 * Useful for showing/hiding scroll-to-top buttons
 */
export function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
}

/**
 * Function to smoothly scroll to an element or position
 * Uses the native scroll-behavior: smooth combined with smooth timing
 */
export function smoothScroll(target: string | number) {
  if (typeof target === "string") {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } else {
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  }
}

/**
 * Function to smoothly scroll to the top of the page
 */
export function scrollToTop() {
  smoothScroll(0);
}
