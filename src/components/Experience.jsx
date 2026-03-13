import { motion } from "framer-motion";
import { experience, education } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section-border py-28 sm:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-text-muted font-mono mb-12"
        >
          Experience
        </motion.p>

        <div className="max-w-[800px]">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-t border-border-light py-8 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-lg font-serif font-medium text-text">{exp.role}</h3>
                <span className="text-xs text-text-muted font-mono shrink-0">{exp.period}</span>
              </div>
              <p className="text-sm text-accent font-medium mb-5">{exp.company}</p>
              <ul className="space-y-2.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-[15px] text-text-secondary leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-text-muted before:text-xs">
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Education */}
          <div className="border-t-2 border-border-bold mt-8 pt-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.2em] text-text-muted font-mono mb-8"
            >
              Education
            </motion.p>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-t border-border-light py-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h4 className="text-base font-serif font-medium text-text">{edu.degree}</h4>
                  <span className="text-xs text-text-muted font-mono">{edu.period}</span>
                </div>
                <p className="text-sm text-accent mt-1">{edu.school}</p>
                <p className="text-sm text-text-muted mt-1">{edu.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
