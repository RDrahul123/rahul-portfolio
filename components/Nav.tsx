"use client";

import { profile } from "@/data/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-grid bg-paper/85 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          rahul<span className="text-signal">.dodke</span>
        </a>
        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-signal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumeUrl}
          className="rounded-full border border-ink px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-signal hover:text-signal"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
