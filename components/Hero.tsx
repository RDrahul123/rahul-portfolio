"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col justify-center px-6 pb-20 pt-36 sm:min-h-screen sm:pt-32"
    >
      <div className="grid items-center gap-12 sm:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label mb-5"
          >
            sys.profile — {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 font-mono text-sm uppercase tracking-widest text-signal"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-ledger/80"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-signal"
            >
              View work
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-grid text-ink transition-colors hover:border-signal hover:text-signal"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-grid text-ink transition-colors hover:border-signal hover:text-signal"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        <SignalChart />
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mx-auto mt-16 hidden flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted sm:flex"
      >
        Scroll
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}

/**
 * Signature element: a hand-drawn "convergence" line — reads as a training
 * loss curve settling into a minimum, and equally as a market chart finding
 * a floor. Both readings are true to the subject: ML work and market trading.
 */
function SignalChart() {
  const path =
    "M0,20 C20,25 35,55 55,70 C75,84 95,92 115,96 C140,101 165,100 190,98 C215,97 240,99 260,98";

  return (
    <div className="relative rounded-2xl border border-grid bg-ink/95 p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
      <p className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
        model_loss.log
      </p>
      <svg
        viewBox="0 0 260 120"
        className="mt-4 w-full"
        aria-hidden="true"
      >
        <line x1="0" y1="110" x2="260" y2="110" stroke="#F6F4EC" strokeOpacity="0.12" />
        <motion.path
          d={path}
          fill="none"
          stroke="#2A6F63"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.circle
          cx="260"
          cy="98"
          r="4.5"
          fill="#E0722D"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="animate-pulse-line"
        />
      </svg>
      <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-paper/50">
        <span>epoch 0</span>
        <span className="text-pulse">converged</span>
      </div>
    </div>
  );
}
