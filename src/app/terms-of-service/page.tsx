import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd, { getBreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Terms of Service | Catalyst Hiring Solutions',
  description:
    'Terms of Service for candidate registration and client talent advisory engagement with Catalyst Hiring Solutions.',
  alternates: {
    canonical: '/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms-of-service' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed bg-hero-light">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-corp-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">Terms of Service</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Terms of Service</h1>
      <p className="text-slate-500 text-xs font-medium">Last updated: August 2026</p>

      <div className="space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm font-medium">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Engagement Overview</h2>
          <p>
            By accessing the Catalyst Hiring Solutions platform (www.catalysthiringsolutions.in), submitting resumes, or submitting talent requirement briefs, candidates and clients agree to adhere to these terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Candidate Representation</h2>
          <p>
            Jobseekers warrant that all academic credentials, work histories, compensation numbers, and certifications provided in resume uploads and forms are accurate and true.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Client Talent Advisory</h2>
          <p>
            Corporate engagements for Executive Search, Volume Hiring, and HR Consulting are governed by specific client service agreements signed between Catalyst Hiring Solutions and the client organization.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Jurisdiction</h2>
          <p>
            These terms are governed by the laws of India, under the jurisdiction of courts in Dewas / Indore, Madhya Pradesh.
          </p>
        </section>
      </div>
    </div>
  );
}
