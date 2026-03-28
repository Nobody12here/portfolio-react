import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useIsScrolled, scrollToTop } from "@/lib/useScrollAnimation";

interface ScrollToTopButtonProps {
  className?: string;
}

/**
 * Smooth scroll-to-top button that appears when user scrolls down
 */
export function ScrollToTopButton({ className = "" }: ScrollToTopButtonProps) {
  const isScrolled = useIsScrolled();

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 rounded-full bg-primary/90 p-3 text-foreground transition-colors hover:bg-primary disabled:opacity-50 ${className}`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
