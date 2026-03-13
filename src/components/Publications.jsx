import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { publications } from "../data";

export default function Publications() {
  return (
    <section id="research" className="py-32 px-6">
      <div className="max-w-[720px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-text">
            Research
          </h2>
          <p className="text-[15px] text-text-muted mt-3">
            5 peer-reviewed publications across Springer, IEEE, and Elsevier.
          </p>
          <div className="w-12 h-[2px] bg-accent mt-4" />
        </motion.div>

        <div className="space-y-0">
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
              className="group flex items-start justify-between gap-4 py-6 border-b border-border-light hover:border-accent/30 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-medium text-text group-hover:text-accent transition-colors leading-snug">
                  {pub.title}
                </h3>
                <p className="text-xs text-text-muted mt-2 font-mono">
                  {pub.venue} · {pub.year}
                </p>
              </div>
              <ArrowUpRight size={16} className="text-text-muted group-hover:text-accent transition-colors shrink-0 mt-1" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
