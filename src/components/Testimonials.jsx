import { motion } from "framer-motion";
import { recommendations } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-border py-28 sm:py-32 px-6 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-text-muted font-mono mb-12"
        >
          Testimonials
        </motion.p>

        {/* Featured quote — first recommendation, large */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-[800px]"
        >
          <p className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] font-medium leading-[1.35] text-text">
            &ldquo;{recommendations[0].quote}&rdquo;
          </p>
          <footer className="mt-8 flex items-center gap-4">
            <div className="w-8 h-[2px] bg-accent" />
            <div>
              <p className="text-sm font-medium text-text">{recommendations[0].name}</p>
              <p className="text-xs text-text-muted mt-0.5">{recommendations[0].role}</p>
            </div>
          </footer>
        </motion.blockquote>

        {/* Rest of recommendations in grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {recommendations.slice(1).map((rec, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-t border-border py-8"
            >
              <p className="font-serif text-[17px] leading-[1.6] text-text italic">
                &ldquo;{rec.quote}&rdquo;
              </p>
              <footer className="mt-5">
                <p className="text-sm font-medium text-text">{rec.name}</p>
                <p className="text-xs text-text-muted mt-0.5">{rec.role} · {rec.date}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
