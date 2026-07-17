"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";
import TiltCard from "./TiltCard";
import ProficiencyRadar from "./ProficiencyRadar";

export default function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-8"
      >
        02 — Toolkit
      </motion.p>

      <div className="grid gap-6 sm:grid-cols-[1fr_1fr]">
        <div className="grid gap-6 sm:grid-rows-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <TiltCard className="group relative rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50">
                <h3 className="relative font-display text-base font-semibold text-text">
                  {group.category}
                </h3>
                <div className="relative mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-surface2 px-3 py-1 font-mono text-xs text-text/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ProficiencyRadar />
        </motion.div>
      </div>
    </section>
  );
}
