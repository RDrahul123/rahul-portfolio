"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-8"
      >
        05 — Get in touch
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl border border-line bg-surface p-10 sm:p-14"
      >
        <div className="pointer-events-none absolute inset-0 bg-grad-glow opacity-60" />
        <p className="relative font-mono text-xs uppercase tracking-widest text-accent2">
          &gt; contact --send
        </p>
        <h2 className="relative mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-text sm:text-4xl">
          Have a project, a role, or a question? I read every message.
        </h2>

        <div className="relative mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-opacity hover:opacity-85"
          >
            <Mail size={15} />
            Email me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-accent2 hover:text-accent2"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-accent2 hover:text-accent2"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </div>
      </motion.div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-2 font-mono text-[11px] text-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </footer>
    </section>
  );
}
