import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-6 hover:glow transition-shadow duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                  <GraduationCap size={20} className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="text-sm text-indigo-400 mt-1">{edu.school}</p>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    {edu.period} · {edu.gpa}
                  </p>
                  {edu.thesis && (
                    <p className="text-xs text-slate-400 mt-3 italic">
                      Thesis: {edu.thesis}
                    </p>
                  )}
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">{edu.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}