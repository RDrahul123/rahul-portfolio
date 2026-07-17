"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { profile } from "@/data/content";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

function Portrait() {
  const [failed, setFailed] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  if (failed) {
    return (
      <div className="relative flex h-full w-full items-center justify-center rounded-full border border-line bg-surface">
        <span className="font-display text-5xl font-semibold text-text/40">
          {initials}
        </span>
        <p className="absolute bottom-4 px-4 text-center font-mono text-[9px] uppercase tracking-widest text-muted">
          Add photo at /public/portrait.jpg
        </p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/portrait.jpg"
      alt={profile.name}
      onError={() => setFailed(true)}
      className="h-full w-full rounded-full border border-line object-cover"
    />
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grad-glow" />
      <div className="absolute inset-0 opacity-90">
        <Scene3D />
      </div>

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-10 sm:grid-cols-[1.15fr_0.85fr]">
        <div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label mb-6"
        >
          {"//"} sys.profile — {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grad-text font-display text-6xl font-bold leading-[0.98] tracking-tight sm:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 font-mono text-sm uppercase tracking-widest text-accent2"
        >
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-opacity hover:opacity-85"
          >
            View work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-text transition-colors hover:border-accent2 hover:text-accent2"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-text transition-colors hover:border-accent2 hover:text-accent2"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-[300px] sm:block"
        >
          <div className="absolute -inset-3 rounded-full bg-grad-glow blur-xl" />
          <Portrait />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative mx-auto mt-16 hidden flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted sm:flex"
      >
        Scroll
        <ArrowDown size={14} className="animate-float" />
      </motion.a>
    </section>
  );
}
