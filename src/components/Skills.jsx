import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { skills, certifications } from "../data";

const catColors = {
  "ML & AI": { border: "border-cyan/20", bg: "bg-cyan/5", text: "text-cyan", label: "text-cyan/70" },
  "NLP & LLMs": { border: "border-violet/20", bg: "bg-violet/5", text: "text-violet", label: "text-violet/70" },
  "Data Engineering": { border: "border-emerald/20", bg: "bg-emerald/5", text: "text-emerald", label: "text-emerald/70" },
  "Languages": { border: "border-amber/20", bg: "bg-amber/5", text: "text-amber", label: "text-amber/70" },
  "Cloud & Infra": { border: "border-blue-400/20", bg: "bg-blue-400/5", text: "text-blue-400", label: "text-blue-400/70" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl sm:text-3xl font-bold text-center mb-16 gradient-text"
        >
          Tech Arsenal
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([cat, items], i) => {
            const c = catColors[cat];
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-xl border ${c.border} bg-surface p-5`}
              >
                <h3 className={`text-xs uppercase tracking-widest ${c.label} mb-3`}>{cat}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span key={s} className={`text-xs px-2.5 py-1 rounded-md ${c.bg} ${c.text} border ${c.border} hover:scale-105 transition-transform cursor-default`}>
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 rounded-xl border border-amber/10 bg-surface p-5"
        >
          <h3 className="text-xs uppercase tracking-widest text-amber/70 mb-3 flex items-center gap-2">
            <Award size={14} className="text-amber" />
            Certifications & Courses
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {certifications.map((cert, i) => (
              <span key={i} className="text-[11px] px-2.5 py-1 rounded-md border border-amber/10 bg-amber/5 text-amber/70">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}