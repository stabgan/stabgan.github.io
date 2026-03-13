import { motion } from "framer-motion";
import { highlights } from "../data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">Highlights</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass rounded-2xl p-6 text-center hover:glow transition-shadow duration-300 group"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text font-mono group-hover:scale-110 transition-transform duration-300 inline-block">
                {h.value}
              </div>
              <div className="text-slate-400 text-sm mt-2">{h.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}