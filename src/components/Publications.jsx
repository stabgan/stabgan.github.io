import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { publications } from "../data";

export default function Publications() {
  return (
    <section id="research" className="section-border py-28 sm:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.2em] text-text-muted font-mono mb-4"
            >
              Research
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-text"
            >
              Publications
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-text-muted"
          >
            5 peer-reviewed · Springer · IEEE · Elsevier
          </motion.p>
        </div>

        <div className="max-w-[800px]">
          {publications.map((pub, i) => (
            <motion.a
              key={i}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-start justify-between gap-6 py-7 border-t border-border-light hover:border-border-bold transition-colors"
            >
              <div className="flex-1 min-w-0">
                <span className="text-xs font-mono text-text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[16px] font-medium text-text group-hover:text-accent transition-colors leading-snug mt-2">
                  {pub.title}
                </h3>
                <p className="text-xs text-text-muted mt-3 font-mono">
                  {pub.venue} · {pub.year}
                </p>
              </div>
              <ArrowUpRight size={18} className="text-text-muted group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
