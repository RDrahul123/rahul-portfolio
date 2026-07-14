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
        className="rounded-2xl border border-grid bg-ink p-10 text-paper sm:p-14"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-paper/50">
          &gt; contact --send
        </p>
        <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight sm:text-4xl">
          Have a project, a role, or a question? I read every message.
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-pulse hover:text-paper"
          >
            <Mail size={15} />
            Email me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-paper"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-paper"
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
