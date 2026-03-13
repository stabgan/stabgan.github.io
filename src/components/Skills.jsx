import { motion } from "framer-motion";
import { skills, certifications, testScores, honors } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-text">
            Expertise
          </h2>
          <div className="w-12 h-[2px] bg-accent mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <h3 className="text-xs uppercase tracking-[0.15em] text-text-muted mb-4">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="text-[13px] px-3 py-1.5 rounded-sm bg-surface border border-border-light text-text-secondary hover:border-accent/30 hover:text-accent transition-colors cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Test Scores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="font-serif text-xl font-medium text-text mb-8">Test Scores</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {testScores.map((t, i) => (
              <div key={i}>
                <p className="text-lg font-mono font-medium text-text">{t.score}</p>
                <p className="text-xs text-text-muted mt-1">{t.name} · {t.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="font-serif text-xl font-medium text-text mb-2">Certifications</h3>
          <p className="text-sm text-text-muted mb-8">{certifications.length} professional certifications</p>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
            {certifications.map((c, i) => (
              <div key={i} className="flex items-baseline justify-between gap-3 py-2 border-b border-border-light">
                <p className="text-[13px] text-text-secondary truncate">{c.name}</p>
                <p className="text-[11px] text-text-muted shrink-0 font-mono">{c.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Honors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="font-serif text-xl font-medium text-text mb-6">Honors</h3>
          <ul className="space-y-2">
            {honors.map((h, i) => (
              <li key={i} className="text-[15px] text-text-secondary pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-[1px] before:bg-accent">
                {h}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
