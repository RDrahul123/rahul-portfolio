"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { proficiency } from "@/data/content";

const SIZE = 280;
const CENTER = SIZE / 2;
const MAX_RADIUS = 100;
const LEVELS = 4;

function pointFor(index: number, total: number, radius: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
}

export default function ProficiencyRadar() {
  const [active, setActive] = useState<number | null>(null);
  const total = proficiency.length;

  const dataPoints = proficiency.map((p, i) =>
    pointFor(i, total, (p.value / 100) * MAX_RADIUS)
  );
  const polygonPoints = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="rounded-2xl border border-line bg-surface p-6">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
        Proficiency radar — tap or hover a point
      </p>
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="mx-auto mt-4 w-full max-w-[280px] overflow-visible"
      >
        {/* grid rings */}
        {Array.from({ length: LEVELS }).map((_, ring) => {
          const r = (MAX_RADIUS / LEVELS) * (ring + 1);
          const ringPoints = Array.from({ length: total })
            .map((_, i) => {
              const p = pointFor(i, total, r);
              return `${p.x},${p.y}`;
            })
            .join(" ");
          return (
            <polygon
              key={ring}
              points={ringPoints}
              fill="none"
              stroke="#232330"
              strokeWidth={1}
            />
          );
        })}

        {/* axes */}
        {proficiency.map((_, i) => {
          const edge = pointFor(i, total, MAX_RADIUS);
          return (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={edge.x}
              y2={edge.y}
              stroke="#232330"
              strokeWidth={1}
            />
          );
        })}

        {/* data shape */}
        <motion.polygon
          points={polygonPoints}
          fill="rgba(124,92,255,0.22)"
          stroke="#7C5CFF"
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
        />

        {/* interactive points */}
        {proficiency.map((p, i) => {
          const point = dataPoints[i];
          const labelPoint = pointFor(i, total, MAX_RADIUS + 22);
          const isActive = active === i;
          return (
            <g key={p.label}>
              <circle
                cx={point.x}
                cy={point.y}
                r={isActive ? 7 : 5}
                fill="#22D3EE"
                stroke="#0A0A0F"
                strokeWidth={1.5}
                className="cursor-pointer transition-[r]"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : i)}
              />
              <text
                x={labelPoint.x}
                y={labelPoint.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="select-none font-mono"
                fontSize={9}
                fill="#8B8B9E"
              >
                {p.label}
              </text>
              {isActive && (
                <g>
                  <rect
                    x={point.x - 20}
                    y={point.y - 30}
                    width={40}
                    height={20}
                    rx={6}
                    fill="#131319"
                    stroke="#7C5CFF"
                    strokeWidth={1}
                  />
                  <text
                    x={point.x}
                    y={point.y - 20}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={11}
                    fontWeight={600}
                    fill="#F2F2F6"
                  >
                    {p.value}%
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
