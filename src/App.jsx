import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import ImpactDashboard from "./components/ImpactDashboard";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:bg-text focus:text-text-inverse focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <ImpactDashboard />
        <Experience />
        <Skills />
        <Publications />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
