'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, CheckCircle2, ShieldCheck, Activity, Users, Zap } from 'lucide-react';

const MATCHES = [
  { role: 'International Chat Support (WFH)', city: 'Pan-India Remote', score: 99, salary: '₹36,000/mo' },
  { role: 'US Voice Process Associate', city: 'Gurugram / Remote', score: 98, salary: '₹45,000/mo' },
  { role: 'Fintech Customer Delight Lead', city: 'Bangalore / WFH', score: 97, salary: '₹40,000/mo' },
  { role: 'SaaS Customer Success Specialist', city: 'Remote India', score: 96, salary: '₹52,000/mo' },
  { role: 'Broadband Tech Support Tier-1', city: 'Pan-India Remote', score: 95, salary: '₹32,000/mo' },
];

const HUBS = [
  { name: 'Dewas HQ', state: 'MP Hub', x: 40, y: 48, isHq: true, color: '#f59e0b', pulseColor: 'rgba(245, 158, 11, 0.4)' },
  { name: 'Bangalore', state: 'GCC & Tech', x: 48, y: 72, isHq: false, color: '#38bdf8', pulseColor: 'rgba(56, 189, 248, 0.4)' },
  { name: 'Delhi NCR', state: 'BPO & Corp', x: 42, y: 28, isHq: false, color: '#38bdf8', pulseColor: 'rgba(56, 189, 248, 0.4)' },
  { name: 'Pune', state: 'Operations', x: 32, y: 58, isHq: false, color: '#38bdf8', pulseColor: 'rgba(56, 189, 248, 0.4)' },
  { name: 'Mumbai', state: 'BFSI & Exec', x: 28, y: 52, isHq: false, color: '#38bdf8', pulseColor: 'rgba(56, 189, 248, 0.4)' },
  { name: 'Hyderabad', state: 'Cloud & Tech', x: 46, y: 62, isHq: false, color: '#38bdf8', pulseColor: 'rgba(56, 189, 248, 0.4)' },
  { name: 'Chennai', state: 'Support Hub', x: 50, y: 78, isHq: false, color: '#38bdf8', pulseColor: 'rgba(56, 189, 248, 0.4)' },
];

export default function HeroDashboard() {
  const [active, setActive] = useState(0);
  const [liveCandidates, setLiveCandidates] = useState(104820);
  const [activeHub, setActiveHub] = useState<string | null>('Dewas HQ');
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const matchTimer = setInterval(() => {
      setActive((prev) => (prev + 1) % MATCHES.length);
    }, 3000);

    const countTimer = setInterval(() => {
      setLiveCandidates((n) => n + Math.floor(Math.random() * 2) + 1);
    }, 4000);

    return () => {
      clearInterval(matchTimer);
      clearInterval(countTimer);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setMouseTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateY: mouseTilt.x,
        rotateX: mouseTilt.y,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
      className="relative w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-square max-h-[580px] select-none"
    >
      {/* 3D Ambient Layered Glow Spheres */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-sky-400/25 via-corp-500/20 to-gold-400/20 blur-3xl animate-pulse-soft" />
      <div className="absolute inset-16 rounded-full bg-teal-400/15 blur-2xl animate-spin-reverse-slower" />

      {/* 3D Glass Surface Card */}
      <div
        style={{ transform: 'translateZ(10px)' }}
        className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/90 via-white/80 to-slate-50/90 backdrop-blur-xl border border-white/90 shadow-2xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between"
      >
        {/* Top Header Row with Live Radar Status */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-100/80 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 block leading-none">
                Pan-India Talent Radar
              </span>
              <span className="text-[10px] text-slate-500 font-medium mt-0.5 block">
                Active Sourcing in Real-Time
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold shadow-sm">
            <Activity className="w-3 h-3 text-gold-400 animate-pulse" />
            <span>AI Verified Match</span>
          </div>
        </div>

        {/* Central 3D India Grid & Talent Hub Network */}
        <div className="relative my-auto w-full h-[260px] sm:h-[300px] flex items-center justify-center">
          {/* Circular Radar Scan Grid */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full border border-sky-200/50 absolute" />
            <div className="w-44 h-44 rounded-full border border-sky-300/40 absolute" />
            <div className="w-24 h-24 rounded-full border border-sky-400/30 absolute" />
            
            {/* Animated Radar Sweep */}
            <div
              className="w-64 h-64 rounded-full absolute animate-spin"
              style={{
                animationDuration: '10s',
                background: 'conic-gradient(from 0deg, transparent 75%, rgba(14, 165, 233, 0.15) 100%)',
              }}
            />
          </div>

          {/* Interactive SVG Network */}
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" aria-hidden="true">
            <defs>
              <linearGradient id="hqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Connecting Beams from Dewas Headquarters to Metros */}
            {HUBS.filter((h) => !h.isHq).map((hub, i) => (
              <g key={`line-${hub.name}`}>
                <line
                  x1={40}
                  y1={48}
                  x2={hub.x}
                  y2={hub.y}
                  stroke="url(#lineGlow)"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                  className="animate-pulse"
                />
              </g>
            ))}

            {/* City Hub Nodes */}
            {HUBS.map((hub) => {
              const isSelected = activeHub === hub.name;
              return (
                <g
                  key={hub.name}
                  onClick={() => setActiveHub(hub.name)}
                  className="cursor-pointer transition-transform hover:scale-125"
                >
                  {/* Pulse Rings */}
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r={hub.isHq ? 7 : 4.5}
                    fill={hub.pulseColor}
                    className="animate-ping"
                    style={{ animationDuration: hub.isHq ? '2s' : '3s' }}
                  />
                  {/* Outer Ring */}
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r={hub.isHq ? 4 : 2.5}
                    fill={hub.isHq ? 'url(#hqGrad)' : '#0284c7'}
                    stroke="#ffffff"
                    strokeWidth="0.8"
                  />
                  {/* Hub Label */}
                  <text
                    x={hub.x}
                    y={hub.y + (hub.isHq ? -5.5 : 4.5)}
                    textAnchor="middle"
                    fill={hub.isHq ? '#b45309' : '#0f172a'}
                    fontSize={hub.isHq ? '3.8' : '2.8'}
                    fontWeight={hub.isHq ? '800' : '700'}
                    className="select-none pointer-events-none"
                  >
                    {hub.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Floating 3D Live Metric Badges */}
          <motion.div
            style={{ transform: 'translateZ(30px)' }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-2 left-2 p-3 rounded-2xl bg-white/90 border border-slate-200/80 shadow-lg backdrop-blur-md"
          >
            <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-500">
              <Users className="w-3 h-3 text-corp-600" /> Pre-Vetted Talent
            </div>
            <div className="text-lg font-extrabold text-slate-900 font-mono mt-0.5">
              {liveCandidates.toLocaleString()}+
            </div>
          </motion.div>

          <motion.div
            style={{ transform: 'translateZ(35px)' }}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-4 right-2 p-3 rounded-2xl bg-white/90 border border-slate-200/80 shadow-lg backdrop-blur-md text-right"
          >
            <div className="flex items-center justify-end gap-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
              <Zap className="w-3 h-3 text-amber-500" /> Avg Placement
            </div>
            <div className="text-lg font-extrabold text-corp-600 font-mono mt-0.5">
              21 Days
            </div>
          </motion.div>
        </div>

        {/* Live Stream Match Card (Interactive 3D Bottom Floating Glass) */}
        <div style={{ transform: 'translateZ(25px)' }} className="w-full">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-navy-950 to-slate-900 text-white p-4 shadow-xl border border-slate-800">
            <div className="flex items-center justify-between gap-2 mb-2 text-[10px]">
              <span className="font-bold text-gold-400 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Live Match Dispatched
              </span>
              <span className="text-slate-400 font-mono font-semibold">
                Slot #{active + 1}/5
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-between gap-3"
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {MATCHES[active].role}
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-corp-400" /> {MATCHES[active].city} • <span className="text-emerald-400 font-bold">{MATCHES[active].salary}</span>
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xl font-extrabold text-gold-400 font-mono">
                    {MATCHES[active].score}%
                  </div>
                  <div className="text-[9px] text-emerald-400 font-bold flex items-center gap-0.5 justify-end">
                    <CheckCircle2 className="w-2.5 h-2.5" /> High Match
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
