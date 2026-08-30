'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MATCHES = [
  { role: 'Voice Process Manager', city: 'Gurugram', score: 99 },
  { role: 'Customer Support Lead', city: 'Gurugram', score: 98 },
  { role: 'Tech Support Exec', city: 'Noida', score: 96 },
  { role: 'Volume Hiring Drive', city: 'Dewas', score: 95 },
];

const HUBS = [
  { name: 'Bangalore', x: 48, y: 72 },
  { name: 'Hyderabad', x: 46, y: 62 },
  { name: 'Pune', x: 32, y: 58 },
  { name: 'Mumbai', x: 28, y: 52 },
  { name: 'Delhi', x: 42, y: 28 },
  { name: 'Dewas', x: 40, y: 48 },
  { name: 'Chennai', x: 50, y: 78 },
];

export default function HeroDashboard() {
  const [active, setActive] = useState(0);
  const [liveCount, setLiveCount] = useState(18294);

  useEffect(() => {
    const matchTimer = setInterval(() => {
      setActive((prev) => (prev + 1) % MATCHES.length);
    }, 2800);
    const countTimer = setInterval(() => {
      setLiveCount((n) => n + Math.floor(Math.random() * 3));
    }, 3200);
    return () => {
      clearInterval(matchTimer);
      clearInterval(countTimer);
    };
  }, []);

  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-square max-h-[560px]">
      {/* Ambient glow behind visual */}
      <div className="absolute inset-8 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute inset-16 rounded-full bg-teal-400/15 blur-2xl animate-pulse-soft" />

      {/* India network SVG */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e99d4" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#13a295" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Soft map silhouette approximation */}
        <motion.path
          d="M42 18 C48 16 54 20 56 28 C58 34 62 36 64 42 C66 50 62 56 58 62 C54 70 52 78 48 84 C44 88 40 86 38 80 C34 72 30 66 28 58 C26 50 28 42 32 36 C36 28 38 22 42 18 Z"
          fill="none"
          stroke="#0b1f3a"
          strokeOpacity="0.08"
          strokeWidth="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />

        {/* Connection lines from Dewas hub */}
        {HUBS.filter((h) => h.name !== 'Dewas').map((hub, i) => (
          <line
            key={hub.name}
            x1={40}
            y1={48}
            x2={hub.x}
            y2={hub.y}
            stroke="url(#lineGrad)"
            strokeWidth="0.35"
            className="network-line"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}

        {HUBS.map((hub, i) => (
          <g key={hub.name}>
            <circle
              cx={hub.x}
              cy={hub.y}
              r={hub.name === 'Dewas' ? 4.5 : 2.8}
              fill="url(#hubGlow)"
              className="animate-pulse-soft"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
            <circle
              cx={hub.x}
              cy={hub.y}
              r={hub.name === 'Dewas' ? 1.4 : 0.9}
              fill={hub.name === 'Dewas' ? '#c9a227' : '#2563eb'}
            />
          </g>
        ))}
      </svg>

      {/* Floating live metrics — integrated into visual, not detached promo chips */}
      <motion.div
        className="absolute top-[8%] left-[4%] sm:left-[8%]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-[10px] uppercase tracking-[0.2em] text-navy-400 font-semibold mb-1">
          Jobs Live
        </div>
        <div className="font-display text-3xl sm:text-4xl text-navy-950 tabular-nums tracking-tight">
          {liveCount.toLocaleString()}
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[18%] right-[2%] sm:right-[6%] text-right"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="text-[10px] uppercase tracking-[0.2em] text-navy-400 font-semibold mb-1">
          Companies Hiring
        </div>
        <div className="font-display text-3xl sm:text-4xl text-navy-950 tabular-nums tracking-tight">
          327
        </div>
      </motion.div>

      {/* Match feed — bottom glass strip, part of the composition */}
      <div className="absolute bottom-[6%] left-[4%] right-[4%] sm:left-[8%] sm:right-[8%]">
        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-soft px-4 py-3.5 overflow-hidden">
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-[10px] uppercase tracking-[0.18em] text-corp-600 font-bold">
              Live Match Stream
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-navy-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-corp-500 animate-pulse" />
              AI Core
            </span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="flex items-end justify-between gap-3"
            >
              <div>
                <div className="font-semibold text-navy-950 text-sm sm:text-base leading-tight">
                  {MATCHES[active].role}
                </div>
                <div className="text-xs text-navy-400 mt-0.5">{MATCHES[active].city}</div>
              </div>
              <div className="font-display text-2xl text-corp-600 tabular-nums shrink-0">
                {MATCHES[active].score}%
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pipeline bar */}
          <div className="mt-3 h-1 rounded-full bg-navy-100 overflow-hidden flex">
            <motion.div
              className="h-full bg-corp-700"
              initial={{ width: '0%' }}
              animate={{ width: '33%' }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
            <motion.div
              className="h-full bg-corp-500"
              initial={{ width: '0%' }}
              animate={{ width: '34%' }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />
            <motion.div
              className="h-full bg-teal-500"
              initial={{ width: '0%' }}
              animate={{ width: '33%' }}
              transition={{ duration: 1.2, delay: 0.9 }}
            />
          </div>
          <div className="mt-1.5 flex justify-between text-[9px] tracking-wide text-navy-400 uppercase font-semibold">
            <span>Source</span>
            <span>Vet</span>
            <span>Place</span>
          </div>
        </div>
      </div>
    </div>
  );
}
