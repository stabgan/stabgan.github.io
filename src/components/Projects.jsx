import { motion } from "framer-motion";
import { ArrowUpRight, Leaf } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section-border py-28 sm:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-text-muted font-mono mb-12"
        >
          Projects
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`border-t-2 border-border-bold p-6 sm:p-8 flex flex-col group hover:bg-bg-alt transition-colors duration-300 ${
                p.special ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  {p.special && <Leaf size={16} className="text-accent" />}
                  <span className="text-xs font-mono text-text-muted">{String(i + 1).padStart(2, "0")}</span>
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-all hover:translate-x-0.5 hover:-translate-y-0.5"
                    aria-label={`View ${p.name}`}>
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
              <h3 className="text-lg font-serif font-medium text-text mb-2 group-hover:text-accent transition-colors">{p.name}</h3>
              <p className="text-[14px] text-text-secondary leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-border-light">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] text-text-muted font-mono uppercase tracking-wider">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
