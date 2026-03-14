import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personal } from "../data";
import { useIsMobile } from "../hooks/useIsMobile";

function useCharVariants(isMobile) {
  return useMemo(() => {
    const charDelay = isMobile ? 0.02 : 0.035;
    return {
      hidden: { opacity: 0, y: isMobile ? 20 : 40 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: isMobile ? 0.35 : 0.5,
          delay: 0.3 + i * charDelay,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }),
    };
  }, [isMobile]);
}

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  const isMobile = useIsMobile();
  const charVariants = useCharVariants(isMobile);
  const nameChars = personal.name.split("");

  return (
    <section className="relative min-h-[92vh] flex items-end pb-20 sm:pb-28 px-6 pt-24">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.2em] text-text-muted mb-8 font-mono"
        >
          {personal.title}
        </motion.p>

        {/* Name — character stagger */}
        <h1 className="font-serif text-[clamp(3.2rem,9vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.02em] text-text">
          {nameChars.map((ch, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={charVariants}
              className="inline-block"
              style={{ marginRight: ch === " " ? "0.22em" : "0" }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </h1>

        {/* Accent line */}
        <motion.div
          variants={lineReveal}
          initial="hidden"
          animate="visible"
          className="hr-accent mt-8 origin-left"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 text-lg sm:text-[21px] text-text-secondary leading-[1.65] max-w-[560px]"
        >
          Building production ML systems, fine-tuning language models, and publishing research at the intersection of AI and real-world impact.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-10 flex items-center gap-4 flex-wrap"
        >
          <a href="#contact" className="btn-primary">Get in touch</a>
        </motion.div>

        {/* Bottom info row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="mt-16 pt-6 border-t border-border-light flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-xs text-text-muted"
        >
          <span>{personal.company}</span>
          <span className="hidden sm:inline">·</span>
          <span>{personal.location}</span>
          <span className="hidden sm:inline">·</span>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-text transition-colors">
            github/{personal.handle}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-6 right-6 hover:opacity-80 transition-opacity hidden sm:block"
          aria-label="Scroll down"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
            <ArrowDown size={16} className="text-text-muted" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
