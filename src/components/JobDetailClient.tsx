'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Calendar,
  CheckCircle2,
  Share2,
  ArrowLeft,
  Sparkles,
  Building2,
  Briefcase,
} from 'lucide-react';
import ApplyModal from '@/components/ApplyModal';
import { Job } from '@/lib/types';

interface JobDetailClientProps {
  job: Job;
}

export default function JobDetailClient({ job }: JobDetailClientProps) {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsAppApply = () => {
    const message = `Hello Catalyst Hiring Solutions,\nI would like to apply for the position of "${job.title}" (${job.companyName || 'Ref: ' + job.id}) in ${job.location}.\nPlease find my application details.`;
    const url = `https://wa.me/919797713791?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-8">
      {/* Back to Openings Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link
          href="/"
          className="hover:text-corp-600 transition-colors"
        >
          Home
        </Link>
        <span>/</span>
        <Link
          href="/careers"
          className="hover:text-corp-600 transition-colors"
        >
          Careers
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold truncate max-w-[240px] sm:max-w-md">{job.title}</span>
      </nav>

      {/* Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-corp-700 bg-corp-50 px-3 py-1 rounded-full border border-corp-200">
                {job.category}
              </span>
              <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                {job.jobType}
              </span>
              {job.salaryRange && (
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {job.salaryRange}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
              <span className="font-bold text-corp-600 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-slate-400" />
                {job.companyName}
              </span>
              <span className="flex items-center gap-1.5 text-slate-500">
                <MapPin className="w-4 h-4 text-slate-400" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5 text-slate-500">
                <Calendar className="w-4 h-4 text-slate-400" />
                Posted {new Date(job.postedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={handleShare}
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              aria-label="Share Job Link"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Link Copied!' : 'Share Position'}</span>
            </button>
            <button
              onClick={() => setIsApplyOpen(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-corp-600 to-corp-500 hover:from-corp-700 text-white font-extrabold text-xs transition-all shadow-md shadow-corp-600/20 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Apply For Position</span>
            </button>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-5 border-t border-slate-100 text-xs">
          <div>
            <span className="text-slate-500 block text-[11px] font-medium">Required Experience</span>
            <span className="font-bold text-slate-900">{job.experienceLevel}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[11px] font-medium">Compensation Package</span>
            <span className="font-bold text-corp-600">{job.salaryRange || 'Competitive Industry Standard'}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[11px] font-medium">Recruiter</span>
            <span className="font-bold text-slate-900">Catalyst Hiring Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">Role Overview</h2>
            <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line font-medium">
              {job.description}
            </p>
          </section>

          {job.responsibilities && job.responsibilities.length > 0 && (
            <section className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">Key Responsibilities</h2>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-corp-600 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {job.requirements && job.requirements.length > 0 && (
            <section className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">Qualifications & Skills Required</h2>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-corp-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {job.benefits && job.benefits.length > 0 && (
            <section className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">Benefits & Perks</h2>
              <div className="flex flex-wrap gap-2">
                {job.benefits.map((b, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs text-corp-600 font-bold">
                    {b}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900">Direct Recruiter Contact</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Catalyst Hiring Solutions facilitates priority interviews. Connect directly with our placement team for fast-track processing.
            </p>
            <div className="space-y-2 pt-2">
              <button
                onClick={() => setIsApplyOpen(true)}
                className="w-full py-3 rounded-xl bg-corp-600 hover:bg-corp-700 text-white font-bold text-xs shadow-md shadow-corp-600/20"
              >
                Apply Online Now
              </button>
              <button
                onClick={handleWhatsAppApply}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5"
              >
                Apply via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      <ApplyModal
        job={job}
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </div>
  );
}
