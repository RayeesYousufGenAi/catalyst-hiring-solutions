import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import JsonLd, { getBreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About Us | Catalyst Hiring Solutions Dewas & Pan-India',
  description:
    'Learn about Catalyst Hiring Solutions, a leading recruitment and executive search consultancy headquartered in Dewas, Madhya Pradesh serving 500+ corporate clients across India.',
  keywords: [
    'About Catalyst Hiring Solutions',
    'Recruitment Agency Dewas',
    'Executive Search Agency Madhya Pradesh',
    'Recruitment Consultants Indore',
    'Talent Acquisition Partner India',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Catalyst Hiring Solutions | Building India\'s Next Great Teams',
    description:
      'Premier recruitment agency & executive search consultancy in Dewas, Madhya Pradesh with 100,000+ candidate network.',
    url: 'https://www.catalysthiringsolutions.in/about',
    siteName: 'Catalyst Hiring Solutions',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'About Catalyst Hiring' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Catalyst Hiring Solutions',
    description: 'Premier recruitment and executive search agency headquartered in Dewas, MP.',
    images: ['/og-image.jpg'],
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ];

  return (
    <div className="space-y-20 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 bg-hero-light">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-corp-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">About Us</span>
      </nav>

      {/* Header Banner */}
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-corp-600 inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-corp-50 rounded-full border border-corp-200">
          <Sparkles className="w-3.5 h-3.5" /> Our Heritage & Mission
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Pioneering Talent Excellence From Central India
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
          Headquartered in Dewas, Madhya Pradesh, Catalyst Hiring Solutions was built on a simple promise: to bridge the gap between ambitious enterprise leaders and exceptional talent through speed, discretion, and domain expertise.
        </p>
      </header>

      {/* Grid: Company Story & Dewas Hub */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-corp-50 border border-corp-200 text-corp-700 text-xs font-bold">
            <MapPin className="w-4 h-4 text-corp-600" />
            <span>Dewas Industrial Hub Advantage</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Strategic Gateway to Industrial & Tech Excellence
          </h2>
          <p className="text-slate-600 text-xs leading-relaxed font-medium">
            Dewas is one of Madhya Pradesh's premier industrial and manufacturing hubs, neighboring the commercial center of Indore. Operating from this strategic corridor gives Catalyst Hiring Solutions unique access to top manufacturing, engineering, chemical, and technology talent across Central and Pan-India markets.
          </p>
          <p className="text-slate-600 text-xs leading-relaxed font-medium">
            Over the years, we have scaled our operations nationwide—partnering with Global Capability Centers (GCCs) in Bangalore and Mumbai, IT leaders in Pune and Delhi NCR, and heavy industrial conglomerates in Madhya Pradesh, Gujarat, and Maharashtra.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-2xl font-extrabold text-corp-600 font-mono">500+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Enterprise Clients Served</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-2xl font-extrabold text-corp-600 font-mono">100k+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Vetted Candidate Pool</div>
            </div>
          </div>
        </div>

        {/* Feature Box */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Our Operational Guarantees</h3>
          <ul className="space-y-4 text-xs text-slate-600 font-medium">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-corp-600 shrink-0 mt-0.5" />
              <span><strong>Zero Thin Profiles:</strong> Every candidate referred is pre-vetted by industry specialists for technical competence, cultural fit, and compensation expectation alignment.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-corp-600 shrink-0 mt-0.5" />
              <span><strong>21-Day Turnaround Guarantee:</strong> Dedicated recruitment squads assigned per account ensure candidate shortlists are delivered within days.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-corp-600 shrink-0 mt-0.5" />
              <span><strong>90-Day Candidate Replacement Guarantee:</strong> Complete peace of mind for corporate clients on all placed executives and team leads.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Guiding Core Principles</h2>
          <p className="text-slate-600 text-xs font-medium">The foundational values that drive our recruitment practices across India</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Integrity First',
              desc: 'Transparent communication with both hiring managers and jobseekers. No inflated credentials, no hidden terms.',
            },
            {
              title: 'Speed & Agility',
              desc: 'Time is revenue. We combine automated talent matching with aggressive sourcing to compress hiring cycles.',
            },
            {
              title: 'Domain Expertise',
              desc: 'Specialized recruiters dedicated exclusively to Tech, Manufacturing, Leadership, or Volume hiring sectors.',
            },
            {
              title: 'Long-term Partnership',
              desc: 'We measure success by 90-day retention and candidate performance, building lasting corporate relationships.',
            },
          ].map((val) => (
            <div key={val.title} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-corp-600">{val.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Partner with Catalyst Hiring Solutions Today</h2>
        <p className="text-slate-600 text-xs max-w-xl mx-auto font-medium">
          Whether you need an executive C-suite hire, 100+ volume hires for a new facility, or strategic HR consulting, our team is ready.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-corp-600 hover:bg-corp-700 text-white font-bold text-xs transition-colors shadow-md shadow-corp-600/20"
          >
            Contact Our Dewas Team
          </Link>
          <Link
            href="/hire"
            className="px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-corp-600 text-slate-900 font-bold text-xs transition-colors"
          >
            Request Talent Brief
          </Link>
        </div>
      </section>

    </div>
  );
}
