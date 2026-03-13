import { motion } from "framer-motion";
import { Folder, ExternalLink, Leaf } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl sm:text-3xl font-bold text-center mb-16 gradient-text"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`group rounded-xl border bg-surface p-5 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                p.special
                  ? "border-emerald/20 sm:col-span-2 lg:col-span-3 hover:border-emerald/40"
                  : p.featured
                  ? "border-cyan/15 sm:col-span-1 hover:border-cyan/30"
                  : "border-border hover:border-cyan/20"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                {p.special ? (
                  <Leaf size={18} className="text-emerald" />
                ) : (
                  <Folder size={18} className="text-cyan/60" />
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-cyan transition-colors"
                    aria-label={`View ${p.name}`}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <h3 className={`text-sm font-semibold mb-2 transition-colors ${
                p.special ? "text-emerald group-hover:text-emerald" : "text-text group-hover:text-cyan"
              }`}>
                {p.name}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((t) => (
                  <span key={t} className={`text-[10px] px-2 py-0.5 rounded-md border ${
                    p.special
                      ? "border-emerald/15 bg-emerald/5 text-emerald/70"
                      : "border-cyan/10 bg-cyan/5 text-cyan/70"
                  }`}>
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