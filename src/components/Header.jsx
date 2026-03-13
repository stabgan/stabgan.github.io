import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Scroll progress — bold accent bar */}
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[60]"
      />

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-md border-b-2 border-border-bold py-3"
            : "py-5"
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-serif text-base font-medium text-text hover:text-accent transition-colors">
            KG
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline text-[13px] text-text-muted hover:text-text transition-colors duration-200">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-text-secondary"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-surface border-2 border-border-bold mx-4 mt-2 p-4 flex flex-col gap-1"
            >
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm text-text-secondary hover:text-accent py-2 px-3 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
