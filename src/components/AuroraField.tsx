'use client';

import React from 'react';

/** Ultra-lightweight, hardware-accelerated ambient background (0 CPU / 60-120fps) */
export default function AuroraField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Top-right sky blue radial ambient */}
      <div
        className="absolute -top-32 -right-32 w-[38rem] h-[38rem] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(56, 189, 248, 0) 70%)',
          transform: 'translate3d(0,0,0)',
        }}
      />
      {/* Bottom-left teal radial ambient */}
      <div
        className="absolute -bottom-32 -left-28 w-[34rem] h-[34rem] rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.4) 0%, rgba(45, 212, 191, 0) 70%)',
          transform: 'translate3d(0,0,0)',
        }}
      />
      {/* Center soft fill */}
      <div
        className="absolute top-1/4 left-1/3 w-[30rem] h-[30rem] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(147, 197, 253, 0.35) 0%, rgba(147, 197, 253, 0) 70%)',
          transform: 'translate3d(0,0,0)',
        }}
      />

      {/* Subtle fine geometric grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0b1b32 1px, transparent 1px), linear-gradient(to bottom, #0b1b32 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
    </div>
  );
}
