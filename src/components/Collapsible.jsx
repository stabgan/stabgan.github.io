import { AnimatePresence, motion } from "framer-motion";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Collapsible({ children, isExpanded, duration = 0.4 }) {
  const effectiveDuration = prefersReducedMotion ? 0 : duration;

  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: effectiveDuration,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ overflow: "hidden" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
