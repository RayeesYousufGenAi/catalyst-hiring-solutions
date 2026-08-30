import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { getJobs } from '@/lib/dataStore';
import JsonLd, { getBreadcrumbSchema } from '@/components/JsonLd';
import CareersListClient from '@/components/CareersListClient';

export const metadata: Metadata = {
  title: 'Current Job Openings & Careers | Catalyst Hiring Solutions',
  description:
    'Explore verified job vacancies in Customer Support, Engineering, Operations, Management, and Executive Leadership across Dewas, Indore, Delhi NCR, Bangalore, Pune & Mumbai.',
  keywords: [
    'Job Openings India',
    'Customer Support Jobs',
    'BPO Jobs Gurugram',
    'Tech Hiring India',
    'Immediate Job Vacancies',
    'Work from Home Jobs',
    'Executive Positions India',
    'Catalyst Hiring Careers',
  ],
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Explore Career Opportunities | Catalyst Hiring Solutions',
    description:
      'Verified corporate job openings across top sectors in India. Direct recruiter applications and fast-track interviews.',
    url: 'https://www.catalysthiringsolutions.in/careers',
    siteName: 'Catalyst Hiring Solutions',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Catalyst Careers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers & Job Openings | Catalyst Hiring Solutions',
    description: 'Find verified corporate and technical job openings across India.',
    images: ['/og-image.jpg'],
  },
};

export default async function CareersPage() {
  const jobs = await getJobs();
  const activeJobs = jobs.filter((j) => j.isActive);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Careers', url: '/careers' },
  ];

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Current Job Openings at Catalyst Hiring Solutions',
    description: 'List of active career openings verified by Catalyst Hiring Solutions',
    numberOfItems: activeJobs.length,
    itemListElement: activeJobs.map((job, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: job.title,
      url: `https://www.catalysthiringsolutions.in/careers/${job.slug}`,
    })),
  };

  return (
    <div className="space-y-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 bg-hero-light">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={itemListSchema} />

      {/* Page Title Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-corp-50 border border-corp-200 text-corp-700 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Verified Career Opportunities</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Current Job Openings
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
          Connect directly with leading corporate employers. All positions are pre-screened and managed by Catalyst recruitment specialists.
        </p>
      </div>

      <CareersListClient initialJobs={activeJobs} />
    </div>
  );
}
