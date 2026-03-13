import { motion } from "framer-motion";
import { experience, education } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-[720px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-text">
            Experience
          </h2>
          <div className="w-12 h-[2px] bg-accent mt-4" />
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-base font-medium text-text">{exp.role}</h3>
                <span className="text-xs text-text-muted font-mono shrink-0">{exp.period}</span>
              </div>
              <p className="text-sm text-accent mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-[15px] text-text-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-[1px] before:bg-text-muted">
                    {b}
                  </li>
                ))}
              </ul>
              {i < experience.length - 1 && (
                <div className="divider mt-12" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="font-serif text-xl font-medium text-text mb-8">Education</h3>
          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h4 className="text-base font-medium text-text">{edu.degree}</h4>
                  <span className="text-xs text-text-muted font-mono">{edu.period}</span>
                </div>
                <p className="text-sm text-accent mt-1">{edu.school}</p>
                <p className="text-sm text-text-muted mt-1">{edu.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
