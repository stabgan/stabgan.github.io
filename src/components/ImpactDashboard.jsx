import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { impact } from "../data";

function CountUp({ value, inView }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const numericPart = value.replace(/[^0-9.]/g, "");
    const prefix = value.match(/^[^0-9]*/)?.[0] || "";
    const suffix = value.replace(/^[^0-9]*[0-9.]+/, "") || "";
    const target = parseFloat(numericPart);
    if (isNaN(target)) { setDisplay(value); return; }
    const duration = 1400;
    const start = performance.now();
    let rafId;
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(eased * target);
      setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);
      if (p < 1) rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value]);

  return <span>{display}</span>;
}

export default function ImpactDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="section-border py-28 sm:py-32 px-6" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-text-muted font-mono mb-12"
        >
          Impact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-text mb-16"
        >
          By the numbers
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-3">
          {impact.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border-t-2 border-border-bold py-8 pr-8"
            >
              <div className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-medium text-text leading-none">
                <CountUp value={item.value} inView={inView} />
              </div>
              <p className="text-sm font-medium text-text mt-4">{item.label}</p>
              <p className="text-xs text-text-muted mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
