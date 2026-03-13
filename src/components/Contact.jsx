import { motion } from "framer-motion";
import { personal } from "../data";

const lines = [
  { text: 'echo "Let\'s build something together"', delay: 0 },
  { text: `mail ${personal.email}`, href: `mailto:${personal.email}`, delay: 0.3 },
  { text: `open github.com/stabgan`, href: personal.github, delay: 0.5 },
  { text: `open linkedin.com/in/stabgan`, href: personal.linkedin, delay: 0.7 },
  { text: `open huggingface.co/stabgan`, href: personal.huggingface, delay: 0.9 },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl sm:text-3xl font-bold text-center mb-4 gradient-text"
        >
          Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-text-muted mb-10"
        >
          Open to ML engineering roles, research collaborations, or interesting problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="terminal rounded-xl overflow-hidden"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="text-[10px] text-text-muted ml-2 font-mono">stabgan@connect:~</span>
          </div>

          <div className="p-5 space-y-3">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: line.delay }}
              >
                {line.href ? (
                  <a
                    href={line.href}
                    target={line.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm font-mono"
                  >
                    <span className="text-cyan/50">$</span>
                    <span className="text-text-secondary group-hover:text-cyan transition-colors">{line.text}</span>
                    <span className="text-text-muted group-hover:text-cyan transition-colors ml-auto">→</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <span className="text-cyan/50">$</span>
                    <span className="text-emerald/80">{line.text}</span>
                  </div>
                )}
              </motion.div>
            ))}

            <div className="flex items-center gap-2 text-sm font-mono pt-2">
              <span className="text-cyan/50">$</span>
              <span className="animate-pulse text-text-muted">▌</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}