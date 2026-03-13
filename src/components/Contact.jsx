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
    <section id="contact" className="section-border py-28 sm:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-text-muted font-mono mb-12"
        >
          Contact
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium text-text leading-[1.05]">
              Let&rsquo;s build<br />something<br />together.
            </h2>
            <p className="text-[17px] text-text-secondary mt-8 leading-relaxed max-w-[400px]">
              Open to ML engineering roles, research collaborations, and interesting problems worth solving.
            </p>
            <a href={`mailto:${personal.email}`} className="btn-primary inline-block mt-8">
              Send an email
            </a>
          </motion.div>

          {/* Right — links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 border-t border-border-light hover:border-border-bold transition-colors"
              >
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-[0.15em] mb-1.5">{link.label}</p>
                  <p className="text-[15px] text-text group-hover:text-accent transition-colors">{link.text}</p>
                </div>
                <ArrowUpRight size={16} className="text-text-muted group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
