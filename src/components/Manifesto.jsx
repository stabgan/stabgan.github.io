import { motion } from "framer-motion";
import { personal } from "../data";

export default function Manifesto() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        {personal.bio.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={
              i === 0
                ? "font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight gradient-text mb-8"
                : "text-base sm:text-lg text-text-secondary leading-relaxed mb-6"
            }
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}