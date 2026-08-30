import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd, { getBreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Privacy Policy | Catalyst Hiring Solutions',
  description:
    'Privacy Policy for Catalyst Hiring Solutions candidate data, resume storage, and employer lead privacy standards.',
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed bg-hero-light">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-corp-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Privacy Policy</h1>
      <p className="text-slate-500 text-xs font-medium">Last updated: August 2026</p>

      <div className="space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm font-medium">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            Catalyst Hiring Solutions ("we", "our", "us"), headquartered in Dewas, Madhya Pradesh 455001, collects information provided directly by job candidates and corporate clients through our website. This includes candidate full names, contact email addresses, phone numbers, work experience, location data, resume attachments, and employer requirement specifications.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. How We Use Candidate & Employer Data</h2>
          <p>
            Candidate data and resumes uploaded to Catalyst Hiring Solutions are strictly utilized for recruitment evaluation, candidate-job matching, and executive search referrals. We do not sell, rent, or lease personal candidate information to unverified third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Data Security & Storage</h2>
          <p>
            We employ industry-standard encryption, secure cloud bucket storage, and strict access controls to safeguard resume documents and personal credentials against unauthorized access.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Contact & Data Deletion Requests</h2>
          <p>
            If you wish to update, modify, or request complete deletion of your candidate record from our database, please contact our data advisory team at{' '}
            <a href="mailto:hr@catalysthiring.com" className="text-corp-600 font-bold underline">
              hr@catalysthiring.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
