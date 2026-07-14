"use client";

import { motion } from "framer-motion";
import { about, education, profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-8"
      >
        01 — About
      </motion.p>

      <div className="grid gap-12 sm:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-lg leading-relaxed text-ledger/85"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-fit rounded-2xl border border-grid bg-white/40 p-6 font-mono text-xs text-ledger"
        >
          <dl className="space-y-4">
            <div>
              <dt className="uppercase tracking-widest text-muted">Based in</dt>
              <dd className="mt-1 text-sm">{profile.location}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-widest text-muted">Education</dt>
              <dd className="mt-1 text-sm">
                {education.degree}, {education.institution}
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-widest text-muted">Focus</dt>
              <dd className="mt-1 text-sm">
                Applied ML, data analytics, financial data
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
