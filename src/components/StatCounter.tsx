'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  sublabel?: string;
}

export default function StatCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2,
  label,
  sublabel,
}: StatCounterProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center sm:text-left py-2">
      <div className="font-display text-4xl sm:text-5xl tracking-tight text-navy-950 tabular-nums">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold text-navy-950">{label}</div>
      {sublabel && <div className="mt-1 text-xs text-navy-400">{sublabel}</div>}
    </div>
  );
}
