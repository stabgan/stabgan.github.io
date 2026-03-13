import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-surface border-2 border-indigo-500 flex items-center justify-center">
                  <Briefcase size={10} className="text-indigo-400" />
                </div>

                <div className="glass rounded-2xl p-6 hover:glow transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <span className="text-xs font-mono text-indigo-400 shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((d, j) => (
                      <li key={j} className="text-sm text-slate-300 flex gap-2">
                        <span className="text-indigo-400 mt-1 shrink-0">▹</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}