import { useState } from "react";
import { motion } from "framer-motion";
import { skills, certifications, testScores, honors } from "../data";
import Collapsible from "./Collapsible";

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  const VISIBLE_COUNT = 6;
  const featuredCerts = certifications.filter((c) => c.featured);
  const remainingCerts = certifications.filter((c) => !c.featured);
  const visibleCerts = featuredCerts.length >= VISIBLE_COUNT
    ? featuredCerts.slice(0, VISIBLE_COUNT)
    : [...featuredCerts, ...remainingCerts.slice(0, VISIBLE_COUNT - featuredCerts.length)];
  const hiddenCerts = certifications.filter((c) => !visibleCerts.includes(c));

  return (
    <section id="skills" className="section-border py-28 sm:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-text-muted font-mono mb-12"
        >
          Expertise
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {Object.entries(skills).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <h3 className="text-sm font-serif font-medium text-text mb-4 pb-3 border-b border-border-light">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="text-[13px] px-3 py-1.5 border border-border text-text-secondary hover:border-border-bold hover:text-text transition-all duration-200 cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Test Scores */}
        <div className="border-t-2 border-border-bold mt-20 pt-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] text-text-muted font-mono mb-8"
          >
            Test Scores & Competitive
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {testScores.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <p className="text-xl font-serif font-medium text-text">{t.score}</p>
                <p className="text-xs text-text-muted mt-2">{t.name}</p>
                <p className="text-[10px] text-text-muted font-mono">{t.year}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-border-light mt-16 pt-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-baseline justify-between mb-8"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted font-mono">Certifications</p>
            <span className="text-xs text-text-muted font-mono">{certifications.length}</span>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-x-16">
            {visibleCerts.map((c, i) => (
              <div key={i} className="flex items-baseline justify-between gap-4 py-2.5 border-b border-border-light">
                <p className="text-[13px] text-text-secondary truncate">{c.name}</p>
                <p className="text-[10px] text-text-muted shrink-0 font-mono">{c.year}</p>
              </div>
            ))}
          </div>

          <Collapsible isExpanded={showAll}>
            <div className="grid sm:grid-cols-2 gap-x-16">
              {hiddenCerts.map((c, i) => (
                <div key={i} className="flex items-baseline justify-between gap-4 py-2.5 border-b border-border-light">
                  <p className="text-[13px] text-text-secondary truncate">{c.name}</p>
                  <p className="text-[10px] text-text-muted shrink-0 font-mono">{c.year}</p>
                </div>
              ))}
            </div>
          </Collapsible>

          {hiddenCerts.length > 0 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-xs text-accent font-mono mt-4 hover:underline"
            >
              {showAll ? "Show less" : `Show all ${certifications.length}`}
            </button>
          )}
        </div>

        {/* Honors */}
        <div className="border-t border-border-light mt-12 pt-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] text-text-muted font-mono mb-6"
          >
            Honors & Awards
          </motion.p>
          <ul className="space-y-3">
            {honors.map((h, i) => (
              <li key={i} className="text-[15px] text-text-secondary pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-3 before:h-[2px] before:bg-accent">
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
