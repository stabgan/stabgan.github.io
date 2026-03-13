import { motion } from "framer-motion";
import { skills } from "../data";

const categoryColors = {
  "ML & AI": "from-indigo-500/20 to-indigo-500/5 border-indigo-500/20 hover:border-indigo-500/40",
  "Data Engineering": "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40",
  "Languages": "from-amber-500/20 to-amber-500/5 border-amber-500/20 hover:border-amber-500/40",
  "Cloud & DevOps": "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 hover:border-cyan-500/40",
  "NLP & LLMs": "from-violet-500/20 to-violet-500/5 border-violet-500/20 hover:border-violet-500/40",
};

const badgeColors = {
  "ML & AI": "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  "Data Engineering": "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "Languages": "bg-amber-500/10 text-amber-300 border-amber-500/20",
  "Cloud & DevOps": "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  "NLP & LLMs": "bg-violet-500/10 text-violet-300 border-violet-500/20",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">Tech Arsenal</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-6 bg-gradient-to-br border transition-all duration-300 ${categoryColors[category]}`}
            >
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-transform duration-200 hover:scale-105 cursor-default ${badgeColors[category]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}