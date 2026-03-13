import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { publications } from "../data";

const venueColor = {
  Springer: "bg-blue-500",
  IEEE: "bg-indigo-600",
  Elsevier: "bg-orange-500",
};

export default function Publications() {
  return (
    <section id="research" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl sm:text-3xl font-bold text-center mb-4 gradient-text"
        >
          Research
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-text-muted mb-14"
        >
          5 peer-reviewed publications in Springer · IEEE · Elsevier
        </motion.p>

        <div className="space-y-3">
          {publications.map((pub, i) => (
            <motion.a
              key={i}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -15, rotate: -0.5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ x: 8, scale: 1.01 }}
              className="group block paper rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <FileText size={18} className="text-slate-500 mt-0.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-slate-800 group-hover:text-indigo-700 transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`w-2 h-2 rounded-full ${venueColor[pub.venue]}`} />
                    <span className="text-xs text-slate-500 font-mono">{pub.venue} · {pub.year}</span>
                  </div>
                </div>
                <ExternalLink size={14} className="text-slate-400 group-hover:text-indigo-600 transition-colors shrink-0 mt-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}