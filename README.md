# Rahul Dodke — Portfolio

Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Design concept

A "quant lab notebook" aesthetic: warm paper background with a faint dot
grid, monospace annotations for structure (section labels, timestamps,
tags), and a deep teal / warm amber accent pair. The hero's signature
element is a hand-drawn convergence line — read at once as a training loss
curve settling into a minimum and as a market chart finding its floor,
tying together the ML work and the trading interest in one image.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Everything — name, bio, skills, projects, experience, links — lives in one
file: `data/content.ts`. Edit that file and the whole site updates. No need
to touch any component unless you want to change layout or add a new
section.

A few placeholders you should fill in before deploying:
- `profile.email` — your real contact email
- `profile.resumeUrl` — a link to your hosted resume PDF

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click Deploy.
4. Every push to `main` auto-deploys.

## Project structure

```
app/
  layout.tsx      — fonts, metadata, root HTML shell
  page.tsx         — assembles all sections
  globals.css       — base styles, dot-grid background
components/
  Nav.tsx           — fixed header
  Hero.tsx          — intro + signature signal-chart SVG
  About.tsx         — bio + quick-facts panel
  Skills.tsx        — toolkit grid
  Projects.tsx       — project cards (pulled from GitHub repos)
  Experience.tsx     — career timeline
  Contact.tsx        — CTA + footer
data/
  content.ts         — all site content (edit this to update the site)
```
