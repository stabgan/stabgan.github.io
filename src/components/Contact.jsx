import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { personal } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          <span className="gradient-text">Let's Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 mb-10 text-sm leading-relaxed"
        >
          Always open to discussing ML engineering, research collaborations, or interesting problems.
          Drop me a line or connect on socials.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-colors duration-200"
          >
            <Mail size={16} />
            Say Hello
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass text-sm text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all duration-200"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass text-sm text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all duration-200"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={personal.huggingface}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass text-sm text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all duration-200"
          >
            <span>🤗</span>
            HuggingFace
          </a>
        </motion.div>
      </div>
    </section>
  );
}