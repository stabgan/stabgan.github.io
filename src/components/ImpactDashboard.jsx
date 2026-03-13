import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { impact } from "../data";

function CountUp({ value, inView }) {
  const [display, setDisplay] = useState("0");
  const numericPart = value.replace(/[^0-9.]/g, "");
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffix = value.replace(/^[^0-9]*[0-9.]+/, "") || "";

  useEffect(() => {
    if (!inView) return;
    const target = parseFloat(numericPart);
    if (isNaN(target)) { setDisplay(value); return; }
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(eased * target);
      setDisplay(`${prefix}${current}${suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value, numericPart, prefix, suffix]);

  return <span>{display}</span>;
}

export default function ImpactDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-32 px-6" ref={ref}>
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-text">
            By the numbers
          </h2>
          <div className="w-12 h-[2px] bg-accent mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border-light">
          {impact.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-bg p-8 sm:p-10"
            >
              <div className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-text">
                <CountUp value={item.value} inView={inView} />
              </div>
              <p className="text-sm text-text-secondary mt-2">{item.label}</p>
              <p className="text-xs text-text-muted mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
