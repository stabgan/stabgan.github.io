import { motion } from "framer-motion";
import { recommendations } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-bg-alt">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-text">
            What people say
          </h2>
          <div className="w-12 h-[2px] bg-accent mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {recommendations.map((rec, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <p className={`font-serif leading-[1.6] text-text ${
                i === 0 ? "text-xl sm:text-2xl" : "text-[17px]"
              }`}>
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
