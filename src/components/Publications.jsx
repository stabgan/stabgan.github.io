import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { publications } from "../data";

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">Research & Publications</span>
        </motion.h2>

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-5 hover:glow transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <FileText size={16} className="text-violet-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors leading-snug">
                  {pub.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 font-mono">
                  {pub.venue} · {pub.year}
                </p>
              </div>
              {pub.link && pub.link !== "#" && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-indigo-400 transition-colors shrink-0"
                  aria-label={`Read ${pub.title}`}
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}