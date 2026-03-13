import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { recommendations } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl sm:text-3xl font-bold text-center mb-4 gradient-text"
        >
          Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-text-muted mb-14"
        >
          What colleagues and managers say
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4">
          {recommendations.map((rec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-xl border border-border bg-surface p-5 flex flex-col ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <Quote size={16} className="text-violet/40 mb-3 shrink-0" />
              <p className="text-sm text-text-secondary leading-relaxed flex-1 italic">
                "{rec.quote}"
              </p>
              <div className="mt-4 pt-3 border-t border-border/50">
                <p className="text-sm font-medium text-text">{rec.name}</p>
                <p className="text-xs text-text-muted">{rec.role} · {rec.relation} · {rec.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}