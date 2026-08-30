import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITY_HUBS, getJobs } from '@/lib/dataStore';
import { MapPin, Users, Building2, CheckCircle2, Sparkles, ArrowRight, Briefcase } from 'lucide-react';
import JsonLd, { getCityLocalBusinessSchema, getBreadcrumbSchema } from '@/components/JsonLd';

interface CityPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return CITY_HUBS.map((city) => ({
    slug: city.slug,
  }));
}

export function generateMetadata({ params }: CityPageProps): Metadata {
  const hub = CITY_HUBS.find((c) => c.slug === params.slug);
  if (!hub) return { title: 'Page Not Found | Catalyst Hiring Solutions' };

  const title = `Recruitment Agency in ${hub.cityName} | ${hub.heroHeadline}`;
  const description = `${hub.description} Top staffing, executive search, and volume hiring solutions in ${hub.cityName}, ${hub.state} with 21-day placement cycle.`;

  return {
    title,
    description,
    keywords: [
      `Recruitment Agency ${hub.cityName}`,
      `Staffing Solutions ${hub.cityName}`,
      `Executive Search ${hub.cityName}`,
      `Jobs in ${hub.cityName}`,
      `Placement Agency ${hub.cityName}`,
      `Hiring Consultants ${hub.cityName}`,
      'Catalyst Hiring Solutions',
    ],
    alternates: {
      canonical: `/${hub.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.catalysthiringsolutions.in/${hub.slug}`,
      siteName: 'Catalyst Hiring Solutions',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `Catalyst Hiring Solutions - ${hub.cityName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function CityHubPage({ params }: CityPageProps) {
  const hub = CITY_HUBS.find((c) => c.slug === params.slug);

  if (!hub) {
    notFound();
  }

  const allJobs = await getJobs();
  const localJobs = allJobs.filter((j) =>
    j.location.toLowerCase().includes(hub.cityName.toLowerCase()) ||
    j.location.toLowerCase().includes(hub.state.toLowerCase())
  );

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: `${hub.cityName} Recruitment Hub`, url: `/${hub.slug}` },
  ];

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 bg-hero-light">
      <JsonLd data={getCityLocalBusinessSchema(hub)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-corp-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">{hub.cityName} Hub</span>
      </nav>

      {/* Hero */}
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-corp-600 inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-corp-50 rounded-full border border-corp-200">
          <MapPin className="w-4 h-4 text-corp-600" /> {hub.cityName}, {hub.state} Recruitment Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {hub.heroHeadline}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
          {hub.description}
        </p>
      </header>

      {/* Metrics Bar */}
      <section aria-label="City Hub Metrics" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-3xl bg-white border border-slate-200 text-center shadow-sm">
          <div className="text-3xl font-extrabold text-corp-600 font-mono">{hub.activeCandidates.toLocaleString()}</div>
          <div className="text-xs text-slate-600 font-semibold mt-1">Active Local Candidates</div>
        </div>
        <div className="p-6 rounded-3xl bg-white border border-slate-200 text-center shadow-sm">
          <div className="text-3xl font-extrabold text-corp-600 font-mono">{hub.partnerCompanies}+</div>
          <div className="text-xs text-slate-600 font-semibold mt-1">Enterprise Clients in {hub.cityName}</div>
        </div>
        <div className="p-6 rounded-3xl bg-white border border-slate-200 text-center shadow-sm">
          <div className="text-3xl font-extrabold text-corp-600 font-mono">21 Days</div>
          <div className="text-xs text-slate-600 font-semibold mt-1">Average Time-to-Hire</div>
        </div>
        <div className="p-6 rounded-3xl bg-white border border-slate-200 text-center shadow-sm">
          <div className="text-3xl font-extrabold text-corp-600 font-mono">90 Days</div>
          <div className="text-xs text-slate-600 font-semibold mt-1">Placement Replacement Guarantee</div>
        </div>
      </section>

      {/* Sectors & Roles */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Key Sectors Served in {hub.cityName}</h2>
          <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
            {hub.keyIndustries.map((ind, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-corp-600 shrink-0" />
                <span>{ind}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
          <h2 className="text-xl font-bold text-slate-900">High Demand Positions in {hub.cityName}</h2>
          <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
            {hub.topRoles.map((role, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-corp-600 shrink-0" />
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Localized Jobs */}
      {localJobs.length > 0 ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Active Job Openings in {hub.cityName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localJobs.map((job) => (
              <article key={job.id} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{job.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{job.companyName} • {job.location}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-corp-600 font-bold">{job.salaryRange || 'Competitive'}</span>
                  <Link href={`/careers/${job.slug}`} className="px-4 py-2 rounded-xl bg-corp-600 text-white text-xs font-bold shadow-md shadow-corp-600/20">
                    View Position
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-2">
          <h3 className="font-bold text-slate-900 text-sm">Hiring in {hub.cityName}?</h3>
          <p className="text-xs text-slate-500">Submit your mandate to access our pre-vetted candidate database in {hub.cityName}.</p>
        </div>
      )}

      {/* CTA Box */}
      <section className="p-8 rounded-3xl bg-gradient-to-r from-corp-600 to-corp-500 text-white text-center space-y-4 shadow-xl">
        <h2 className="text-2xl font-bold">Need Recruitment Services in {hub.cityName}?</h2>
        <p className="text-xs text-corp-100 max-w-lg mx-auto font-medium">
          Contact Catalyst Hiring Solutions to discuss Executive Search, Volume Recruitment, or Tech GCC talent acquisition in {hub.cityName}.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Link href="/hire" className="px-6 py-3 rounded-xl bg-white text-corp-700 font-bold text-xs shadow-md">
            Request Talent Brief
          </Link>
          <Link href="/contact" className="px-6 py-3 rounded-xl bg-corp-800 text-white font-semibold text-xs">
            Contact Local Advisor
          </Link>
        </div>
      </section>
    </div>
  );
}
