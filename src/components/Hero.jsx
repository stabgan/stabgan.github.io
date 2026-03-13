import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personal } from "../data";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20">
      <div className="max-w-[900px] mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-text-muted tracking-wide mb-6"
        >
          {personal.title} · {personal.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-[clamp(3rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-tight text-text"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-[600px] mx-auto"
        >
          Building production ML systems, fine-tuning language models, and publishing research at the intersection of AI and real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <a href="#contact" className="btn-primary">
            Get in touch
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-accent transition-colors"
          >
            github/{personal.handle} →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-20"
        >
          <a href="#about" aria-label="Scroll down">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <ArrowDown size={18} className="text-text-muted mx-auto" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
