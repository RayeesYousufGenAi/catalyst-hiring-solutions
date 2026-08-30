'use client';

import React from 'react';

const LOGOS = [
  'Amazon',
  'TCS',
  'Infosys',
  'Accenture',
  'HCL',
  'Wipro',
  'Capgemini',
  'Tata Motors',
  'Reliance',
  'Mahindra',
];

export default function LogoMarquee() {
  const row = [...LOGOS, ...LOGOS];

  return (
    <section className="relative py-14 overflow-hidden border-y border-white/60 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-400">
          Trusted by 500+ enterprises & GCCs across India
        </p>
      </div>

      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex items-center gap-12 sm:gap-16 shrink-0 animate-marquee whitespace-nowrap py-2">
          {row.map((name, idx) => (
            <span
              key={`${name}-${idx}`}
              className="text-xl sm:text-2xl font-display tracking-tight text-navy-950/25 hover:text-navy-950/70 transition-colors cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
