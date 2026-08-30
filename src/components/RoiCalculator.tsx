'use client';

import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function RoiCalculator() {
  const [hiresCount, setHiresCount] = useState(10);
  const [avgSalaryLakhs, setAvgSalaryLakhs] = useState(15);

  const standardAgencyDays = 65;
  const catalystDays = 21;
  const daysSaved = (standardAgencyDays - catalystDays) * hiresCount;
  
  const monthlyCostPerHire = avgSalaryLakhs / 12;
  const productivityLossSaved = Math.round((daysSaved / 30) * monthlyCostPerHire * 1.5);

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-white border border-navy-100 shadow-card relative overflow-hidden space-y-8">
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-100 pb-6 relative z-10">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-corp-600 flex items-center gap-1.5">
            <Calculator className="w-4 h-4" /> Hiring ROI
          </span>
          <h3 className="font-display text-2xl sm:text-3xl text-navy-950 mt-2 tracking-tight">
            Calculate your time & capital savings
          </h3>
        </div>
        <div className="px-4 py-1.5 rounded-full bg-navy-50 border border-navy-100 text-navy-600 text-xs font-semibold">
          21-day turnaround
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Sliders Area */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-700">Number of Open Positions Required</span>
              <span className="text-corp-600 font-mono text-sm">{hiresCount} Roles</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={hiresCount}
              onChange={(e) => setHiresCount(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-corp-600"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-medium">
              <span>1 Hire (Executive)</span>
              <span>50 Hires (Team)</span>
              <span>100 Hires (Volume Launch)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-700">Average Annual Package per Role (CTC)</span>
              <span className="text-corp-600 font-mono text-sm">₹{avgSalaryLakhs} Lakhs PA</span>
            </div>
            <input
              type="range"
              min="4"
              max="60"
              step="1"
              value={avgSalaryLakhs}
              onChange={(e) => setAvgSalaryLakhs(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-corp-600"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-medium">
              <span>₹4 Lakhs (Associate)</span>
              <span>₹25 Lakhs (Tech Lead)</span>
              <span>₹60 Lakhs (VP/C-Suite)</span>
            </div>
          </div>
        </div>

        {/* Results Box */}
        <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-5 text-center sm:text-left">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
              Projected Capital & Productivity Saved
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-corp-600 font-mono mt-1">
              ₹{productivityLossSaved >= 100 ? (productivityLossSaved / 100).toFixed(2) + ' Cr' : productivityLossSaved + ' Lakhs'}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Prevented vacancy loss & operational downtime
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-slate-500 block text-[10px]">Total Days Saved</span>
              <span className="font-bold text-slate-900 text-sm font-mono">{daysSaved} Days</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Catalyst Target</span>
              <span className="font-bold text-corp-600 text-sm font-mono">21 Days Avg</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
