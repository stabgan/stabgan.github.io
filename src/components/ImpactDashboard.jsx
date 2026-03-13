import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { impact } from "../data";

const colorMap = {
  cyan: { text: "text-cyan", ring: "border-cyan/30", bg: "bg-cyan/5" },
  violet: { text: "text-violet", ring: "border-violet/30", bg: "bg-violet/5" },
  amber: { text: "text-amber", ring: "border-amber/30", bg: "bg-amber/5" },
  emerald: { text: "text-emerald", ring: "border-emerald/30", bg: "bg-emerald/5" },
};

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
    <section id="impact" className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl sm:text-3xl font-bold text-center mb-16 gradient-text"
        >
          Impact
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {impact.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-2xl border ${c.ring} ${c.bg} p-5 sm:p-6 transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className={`font-display text-2xl sm:text-3xl font-bold ${c.text} font-mono`}>
                  <CountUp value={item.value} inView={inView} />
                </div>
                <p className="text-sm text-text mt-2 font-medium">{item.label}</p>
                <p className="text-xs text-text-muted mt-1">{item.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}