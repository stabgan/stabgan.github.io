import { motion } from "framer-motion";
import { personal } from "../data";

export default function Manifesto() {
  return (
    <section id="about" className="section-border py-28 sm:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-text-muted font-mono mb-12"
        >
          About
        </motion.p>

        <div className="max-w-[720px]">
          {personal.bio.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={
                i === 0
                  ? "font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.15] text-text mb-10"
                  : "text-[17px] text-text-secondary leading-[1.75] mb-6"
              }
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
