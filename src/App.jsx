import { useEffect } from "react";
import Lenis from "lenis";
import NeuralCanvas from "./components/NeuralCanvas";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import ImpactDashboard from "./components/ImpactDashboard";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text relative">
      <NeuralCanvas />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Manifesto />
        <ImpactDashboard />
        <Experience />
        <Skills />
        <Publications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}