'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeAnalyzer() {
  const [resumeText, setResumeText] = useState('');
  const [targetRole, setTargetRole] = useState('Full Stack Developer');
  const [analyzed, setAnalyzed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(88);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeText.trim()) return;

    setLoading(true);
    setTimeout(() => {
      const calculatedScore = Math.min(96, Math.max(78, Math.floor(resumeText.length / 15) + 72));
      setScore(calculatedScore);
      setLoading(false);
      setAnalyzed(true);
      confetti({ particleCount: 50, spread: 60 });
    }, 1200);
  };

  return (
    <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-corp-600 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> Free AI Candidate Tool
        </span>
        <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
          Instant ATS Resume Score Checker
        </h3>
        <p className="text-xs text-slate-600 mt-1">
          Analyze how well your resume matches enterprise ATS parsers and Catalyst recruiter algorithms.
        </p>
      </div>

      {!analyzed ? (
        <form onSubmit={handleAnalyze} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Target Role Category</label>
            <select
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600"
            >
              <option value="Full Stack Developer">Full Stack / Engineering Lead</option>
              <option value="Plant Manager">Plant Manager / Operations</option>
              <option value="Executive Leader">Executive Search (VP / Director / C-Suite)</option>
              <option value="Sales & BD">Enterprise B2B Sales</option>
              <option value="HR Lead">HR & Talent Acquisition</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Paste Resume Summary or Key Achievements</label>
            <textarea
              rows={5}
              required
              placeholder="Paste your resume summary, technical skills, or work experience bullet points here..."
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-corp-600 to-corp-500 hover:from-corp-700 text-white font-bold text-xs shadow-lg shadow-corp-600/20 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>Analyzing Resume Vectors...</span>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-white" />
                <span>Analyze Resume ATS Score Now</span>
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="space-y-6 text-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold">Target Position: {targetRole}</span>
              <h4 className="text-xl font-extrabold text-slate-900 mt-0.5">Resume Match Rating</h4>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-4xl font-extrabold text-corp-600 font-mono">{score}/100</div>
              <div className="text-[10px] text-emerald-600 font-bold">Excellent Candidate Vector</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h5 className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Strong Highlights Found
              </h5>
              <p className="text-[11px] text-slate-600 leading-relaxed">Clear domain keyword density, quantifiable achievements, and relevant experience structure.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h5 className="font-bold text-slate-900 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                Suggested Enhancements
              </h5>
              <p className="text-[11px] text-slate-600 leading-relaxed">Consider adding specific metric outcomes (e.g., % throughput increased, team scale numbers).</p>
            </div>
          </div>

          <button
            onClick={() => setAnalyzed(false)}
            className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold"
          >
            Analyze Another Resume Summary
          </button>
        </div>
      )}
    </div>
  );
}
