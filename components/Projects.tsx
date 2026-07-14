"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-8"
      >
        03 — Selected work
      </motion.p>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/60"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-grad-glow" />
            <div className="relative flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-text">
                {project.title}
              </h3>
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent2"
              />
            </div>
            <p className="relative mt-3 flex-1 text-sm leading-relaxed text-text/70">
              {project.description}
            </p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
