"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-8"
      >
        04 — Path so far
      </motion.p>

      <div className="relative border-l border-line pl-8">
        {experience.map((role, i) => (
          <motion.div
            key={role.role + role.org}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pb-10 last:pb-0"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(124,92,255,0.6)]" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              {role.period}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-text">
              {role.role}
            </h3>
            <p className="text-sm font-medium text-accent2">{role.org}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-text/70">
              {role.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
