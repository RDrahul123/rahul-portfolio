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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-text"
        >
          rahul<span className="text-accent">.dodke</span>
        </a>
        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumeUrl}
          className="rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-accent hover:text-accent"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
