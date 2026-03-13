import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { personal } from "../data";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

function useDecodeText(target, speed = 40) {
  const [text, setText] = useState(target.replace(/./g, " "));
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame = 0;
    const maxFrames = target.length * 3;
    const interval = setInterval(() => {
      frame++;
      setText(
        target
          .split("")
          .map((ch, i) => {
            if (frame / 3 > i) return ch;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (frame >= maxFrames) {
        clearInterval(interval);
        setText(target);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [target, speed]);

  return { text, done };
}

function useTokenTyping(strings, wordDelay = 200, pause = 3000) {
  const [lineIdx, setLineIdx] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const words = strings[lineIdx].split(" ");
    if (wordIdx <= words.length) {
      const timer = setTimeout(() => {
        setDisplay(words.slice(0, wordIdx).join(" "));
        setWordIdx((w) => w + 1);
      }, wordIdx === 0 ? pause : wordDelay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setWordIdx(0);
        setLineIdx((l) => (l + 1) % strings.length);
      }, pause);
      return () => clearTimeout(timer);
    }
  }, [lineIdx, wordIdx, strings, wordDelay, pause]);

  return display;
}

export default function Hero() {
  const { text: decoded, done } = useDecodeText("stabgan");
  const tagline = useTokenTyping(personal.taglines);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-display font-bold tracking-tighter leading-none text-[clamp(3.5rem,10vw,8rem)] gradient-text"
        >
          {decoded}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 15 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl text-text-secondary mt-3 font-light"
        >
          {personal.name}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: done ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-sm text-text-muted mt-1 font-mono"
        >
          {personal.title} @ {personal.company}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: done ? 1 : 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 h-7"
        >
          <span className="font-mono text-sm text-cyan">
            {"> "}{tagline}<span className="animate-pulse">▌</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex items-center justify-center gap-3 flex-wrap"
        >
          {[
            { href: personal.github, icon: <Github size={16} />, label: "GitHub" },
            { href: personal.linkedin, icon: <Linkedin size={16} />, label: "LinkedIn" },
            { href: personal.huggingface, icon: <span className="text-sm">🤗</span>, label: "HuggingFace" },
            { href: `mailto:${personal.email}`, icon: <Mail size={16} />, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs text-text-secondary hover:text-cyan hover:border-cyan/30 transition-all duration-200"
              aria-label={s.label}
            >
              {s.icon}
              <span className="hidden sm:inline">{s.label}</span>
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: done ? 0.4 : 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hover:opacity-80 transition-opacity"
          aria-label="Scroll down"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown size={20} className="text-text-muted" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}