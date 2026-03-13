import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl sm:text-3xl font-bold text-center mb-16 gradient-text"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan/40 via-violet/20 to-transparent" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative pl-10"
              >
                <div className={`absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center ${
                  exp.current
                    ? "border-cyan bg-cyan/10 pulse-glow"
                    : "border-border bg-surface"
                }`}>
                  <Briefcase size={10} className={exp.current ? "text-cyan" : "text-text-muted"} />
                </div>

                <div className="rounded-xl border border-border bg-surface p-5 hover:border-cyan/20 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-base font-semibold text-text">{exp.role}</h3>
                    <span className="text-xs font-mono text-text-muted shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-xs text-text-muted mb-3">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-text-secondary flex gap-2">
                        <span className="text-cyan mt-0.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Education nodes */}
            <div className="pt-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-widest text-text-muted pl-10 mb-4"
              >
                Education
              </motion.p>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative pl-10 mb-4"
                >
                  <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-amber/40 bg-amber/5 flex items-center justify-center">
                    <GraduationCap size={10} className="text-amber" />
                  </div>
                  <div className="rounded-xl border border-amber/10 bg-surface p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-sm font-semibold text-text">{edu.degree}</h3>
                      <span className="text-xs font-mono text-text-muted">{edu.period}</span>
                    </div>
                    <p className="text-xs text-amber/70 mt-1">{edu.school}</p>
                    <p className="text-xs text-text-muted mt-1">{edu.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}