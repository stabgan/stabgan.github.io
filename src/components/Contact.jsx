import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personal } from "../data";

const links = [
  { label: "Email", href: `mailto:${personal.email}`, text: personal.email },
  { label: "GitHub", href: personal.github, text: "github.com/stabgan" },
  { label: "LinkedIn", href: personal.linkedin, text: "linkedin.com/in/stabgan" },
  { label: "HuggingFace", href: personal.huggingface, text: "huggingface.co/stabgan" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-[720px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium text-text leading-tight">
            Let&rsquo;s build something together.
          </h2>
          <p className="text-[17px] text-text-secondary mt-6 leading-relaxed max-w-[500px]">
            Open to ML engineering roles, research collaborations, and interesting problems worth solving.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12 space-y-0"
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 border-b border-border-light hover:border-accent/30 transition-colors"
            >
              <div>
                <p className="text-xs text-text-muted uppercase tracking-[0.15em] mb-1">{link.label}</p>
                <p className="text-[15px] text-text group-hover:text-accent transition-colors">{link.text}</p>
              </div>
              <ArrowUpRight size={16} className="text-text-muted group-hover:text-accent transition-colors" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
