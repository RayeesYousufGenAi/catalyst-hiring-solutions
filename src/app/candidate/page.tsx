import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import ResumeAnalyzer from '@/components/ResumeAnalyzer';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import JsonLd, { getBreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Candidate Hub & Free AI Resume Score Checker | Catalyst Hiring Solutions',
  description:
    'Free candidate career tools by Catalyst Hiring Solutions: Instant ATS Resume Score Checker, Application Status Tracker, and Confidential Talent Pool Registration.',
  keywords: [
    'AI Resume Checker',
    'ATS Score Calculator',
    'Candidate Portal India',
    'Submit Resume Dewas',
    'Confidential Talent Pool',
    'Catalyst Hiring Candidate Hub',
  ],
  alternates: {
    canonical: '/candidate',
  },
  openGraph: {
    title: 'Candidate Hub & Free AI Resume Score Checker | Catalyst Hiring',
    description:
      'Check your ATS score and join 100,000+ pre-vetted professionals connected with top employers.',
    url: 'https://www.catalysthiringsolutions.in/candidate',
    siteName: 'Catalyst Hiring Solutions',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Catalyst Candidate Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Candidate Hub | Catalyst Hiring Solutions',
    description: 'Free AI resume analysis and career portal for jobseekers in India.',
    images: ['/og-image.jpg'],
  },
};

export default function CandidatePage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Candidate Hub', url: '/candidate' },
  ];

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 bg-hero-light">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-corp-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">Candidate Hub</span>
      </nav>

      {/* Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-corp-600 inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-corp-50 rounded-full border border-corp-200">
          <Sparkles className="w-3.5 h-3.5" /> Candidate Talent Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          AI Candidate Tools & Career Portal
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
          Check your resume ATS compatibility score, track candidate applications, or join our confidential pool of 100,000+ pre-screened professionals across India.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: AI Resume Analyzer Widget */}
        <div className="lg:col-span-7">
          <ResumeAnalyzer />
        </div>

        {/* Right Column: Candidate Application Tracker & Career Advice */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
            <h2 className="text-xl font-bold text-slate-900">How Our Recruiter Matching Works</h2>
            <ul className="space-y-3 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-corp-600 shrink-0 mt-0.5" />
                <span><strong>Confidential Registration:</strong> Your profile is never published publicly without explicit consent.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-corp-600 shrink-0 mt-0.5" />
                <span><strong>Direct Recruiter Access:</strong> When an enterprise client launches an unadvertised leadership position, our recruiters reach out directly.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-corp-600 shrink-0 mt-0.5" />
                <span><strong>Zero Placement Fees:</strong> Catalyst Hiring Solutions services are 100% free for job candidates.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/careers"
                className="w-full py-3 rounded-xl bg-corp-600 hover:bg-corp-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-corp-600/20"
              >
                <span>Browse All Active Job Openings</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
