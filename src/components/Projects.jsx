import { motion } from "framer-motion";
import { ArrowUpRight, Leaf } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-text">
            Projects
          </h2>
          <div className="w-12 h-[2px] bg-accent mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-light">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`bg-bg p-8 flex flex-col ${
                p.special ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                {p.special ? (
                  <Leaf size={18} className="text-accent" />
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors"
                    aria-label={`View ${p.name}`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
              <h3 className="text-base font-medium text-text mb-2">{p.name}</h3>
              <p className="text-[14px] text-text-secondary leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] text-text-muted font-mono">
                    {t}
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
