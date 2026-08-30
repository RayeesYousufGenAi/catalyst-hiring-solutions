'use client';

import React from 'react';
import { motion } from 'framer-motion';

/** Soft sky-blue + mint mesh blobs matching the live Catalyst site */
export default function AuroraField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Top-right sky blue — like live site */}
      <div className="aurora-blob w-[46rem] h-[46rem] -top-48 -right-40 bg-sky-400/35 animate-aurora" />
      {/* Bottom-left mint / teal */}
      <div
        className="aurora-blob w-[42rem] h-[42rem] -bottom-40 -left-32 bg-teal-400/30 animate-aurora"
        style={{ animationDelay: '-6s' }}
      />
      {/* Soft center lavender-blue wash */}
      <div
        className="aurora-blob w-[36rem] h-[36rem] top-1/3 left-1/3 bg-corp-300/25 animate-aurora"
        style={{ animationDelay: '-12s' }}
      />
      <div
        className="aurora-blob w-[28rem] h-[28rem] bottom-1/4 right-1/4 bg-cyan-200/40 animate-aurora"
        style={{ animationDelay: '-4s' }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0b1b32 1px, transparent 1px), linear-gradient(to bottom, #0b1b32 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 72%)',
        }}
      />

      {[
        { x: '14%', y: '26%', s: 4, d: 0 },
        { x: '24%', y: '64%', s: 3, d: 0.4 },
        { x: '52%', y: '18%', s: 5, d: 0.8 },
        { x: '72%', y: '44%', s: 3, d: 1.2 },
        { x: '82%', y: '24%', s: 4, d: 1.6 },
        { x: '88%', y: '70%', s: 3, d: 2 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-corp-500/50"
          style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
          animate={{ y: [0, -14, 0], opacity: [0.25, 0.8, 0.25] }}
          transition={{ duration: 5 + i, delay: p.d, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
