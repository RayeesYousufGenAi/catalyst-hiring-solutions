import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Sparkles } from 'lucide-react';
import JsonLd, { getBreadcrumbSchema } from '@/components/JsonLd';
import HireFormClient from '@/components/HireFormClient';

export const metadata: Metadata = {
  title: 'Hire Top Talent | Employer Recruitment Partner Catalyst Hiring Solutions',
  description:
    'Partner with Catalyst Hiring Solutions to fill executive, technical, and volume positions in 21 days. 100,000+ vetted candidates, 90-day replacement guarantee.',
  keywords: [
    'Hire Talent India',
    'Executive Search Mandate',
    'Bulk Hiring Partner',
    'Tech Staffing Request',
    'Recruitment Agency for Employers',
    'Dewas Staffing Agency',
  ],
  alternates: {
    canonical: '/hire',
  },
  openGraph: {
    title: 'Hire Better Talent 21 Days Faster | Catalyst Hiring Solutions',
    description:
      'Submit your recruitment mandate. Executive search, technology GCC talent, and volume hiring with 90-day replacement guarantee.',
    url: 'https://www.catalysthiringsolutions.in/hire',
    siteName: 'Catalyst Hiring Solutions',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Hire with Catalyst' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Top Talent | Catalyst Hiring Solutions',
    description: 'Recruitment partner for executive search and volume staffing in India.',
    images: ['/og-image.jpg'],
  },
};

export default function HirePage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'For Employers', url: '/hire' },
  ];

  return (
    <div className="space-y-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 bg-hero-light">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-corp-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">For Employers</span>
      </nav>

      {/* Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-corp-600 inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-corp-50 rounded-full border border-corp-200">
          <Building2 className="w-3.5 h-3.5" /> For Employers & HR Leaders
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Hire Better Talent. 21 Days Faster.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
          Backed by a curated database of 100,000+ pre-vetted professionals across Technology, Manufacturing, Executive Leadership, and Operations.
        </p>
      </header>

      <HireFormClient />
    </div>
  );
}
