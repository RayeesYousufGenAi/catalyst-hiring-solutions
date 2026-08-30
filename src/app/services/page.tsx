import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Users, Code, LineChart, ArrowRight, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import JsonLd, { getServiceSchema, getBreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Recruitment & HR Services | Executive Search & Volume Hiring India',
  description:
    'Comprehensive recruitment services by Catalyst Hiring Solutions: Retained Executive Search, Volume Staffing, Tech GCC Recruitment, and HR Advisory across India.',
  keywords: [
    'Recruitment Services India',
    'Executive Search Agency',
    'Bulk Hiring Services',
    'Tech Recruitment Firm',
    'Volume Staffing Solutions',
    'HR Consulting Dewas',
    'Corporate Staffing India',
    'Catalyst Hiring Services',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Recruitment & HR Services | Catalyst Hiring Solutions',
    description:
      'Executive Search, Volume Staffing, Tech Recruitment, and Strategic HR Advisory across India with 21-day time-to-hire.',
    url: 'https://www.catalysthiringsolutions.in/services',
    siteName: 'Catalyst Hiring Solutions',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Catalyst Hiring Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recruitment Services | Catalyst Hiring Solutions',
    description: 'Executive search, volume staffing, and tech recruitment solutions in India.',
    images: ['/og-image.jpg'],
  },
};

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ];

  return (
    <div className="space-y-20 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 bg-hero-light">
      <JsonLd data={getServiceSchema()} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-corp-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">Services</span>
      </nav>

      {/* Services Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-corp-600 inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-corp-50 rounded-full border border-corp-200">
          <Sparkles className="w-3.5 h-3.5" /> Our Practice Areas
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Comprehensive Talent Acquisition Services
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
          From C-suite executive search to 100+ volume hires and strategic HR advisory, Catalyst Hiring Solutions delivers tailored recruitment practices designed for speed, precision, and retention.
        </p>
      </header>

      {/* Quick Jump Navigation */}
      <div className="flex flex-wrap justify-center gap-3">
        <a href="#executive-search" className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-700 hover:text-corp-600 hover:border-corp-600 transition-colors">
          Executive Search
        </a>
        <a href="#volume-hiring" className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-700 hover:text-corp-600 hover:border-corp-600 transition-colors">
          Volume Hiring
        </a>
        <a href="#tech-recruitment" className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-700 hover:text-corp-600 hover:border-corp-600 transition-colors">
          Tech & Engineering
        </a>
        <a href="#hr-consulting" className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-700 hover:text-corp-600 hover:border-corp-600 transition-colors">
          HR Consulting
        </a>
      </div>

      {/* 1. Executive Search */}
      <section id="executive-search" className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8 scroll-mt-28">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-corp-50 border border-corp-200 text-corp-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-corp-600">Leadership Practice</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Executive Search & Retained Advisory</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs text-slate-600 leading-relaxed">
          <div className="space-y-4 font-medium">
            <p>
              Securing leadership talent demands a strategic, discreet, and research-intensive approach. Catalyst Hiring Solutions' Executive Search practice partners with enterprise boards, CEOs, and private equity investors across India to identify, evaluate, and recruit senior leaders who drive transformational growth.
            </p>
            <p>
              Unlike mass recruitment, executive search involves deep market mapping. Our dedicated search consultants map passive leadership talent across competing enterprises, discreetly reaching out to top-tier C-suite, Vice President, and Managing Director candidates who are not actively browsing job boards.
            </p>
            <p>
              We conduct thorough competency-based behavioral interviews, leadership track record assessments, and extensive 360-degree background verification prior to presentation.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-sm">Roles Typically Handled:</h3>
            <ul className="space-y-2 text-slate-700 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> Chief Executive Officer (CEO) & Managing Director</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> Chief Technology Officer (CTO) & VPs of Engineering</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> Plant Heads & Vice Presidents of Operations</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> Chief Financial Officer (CFO) & Head of Legal/Secretarial</li>
            </ul>
            <div className="pt-2">
              <Link href="/hire" className="inline-flex items-center gap-2 text-corp-600 font-bold hover:underline">
                <span>Initiate Executive Search Brief</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Volume Hiring */}
      <section id="volume-hiring" className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8 scroll-mt-28">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-corp-50 border border-corp-200 text-corp-600 flex items-center justify-center shrink-0">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-corp-600">Turnkey Workforce</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Volume & Bulk Recruitment</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs text-slate-600 leading-relaxed">
          <div className="space-y-4 font-medium">
            <p>
              When opening new manufacturing facilities in industrial corridors like Dewas, Pithampur, or expanding operational teams in major cities, organizations face the daunting task of onboarding dozens or hundreds of qualified staff simultaneously.
            </p>
            <p>
              Catalyst Hiring Solutions specializes in turnkey volume recruitment drives. We organize structured walk-in recruitment drives, leverage deep regional talent networks across Madhya Pradesh and Pan-India, and utilize automated initial filtering to manage high applicant volumes efficiently.
            </p>
            <p>
              Our process ensures that even at scale, every candidate meets minimum quality benchmarks, holds verified technical certifications, and undergoes structured background checks.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-sm">Key Volume Hiring Capabilities:</h3>
            <ul className="space-y-2 text-slate-700 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> 50 to 500+ Hires in 30-Day Window</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> Industrial Plant Operators & Quality Technicians</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> Inside Sales & Customer Experience Associates</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> Campus Recruitment Drives & Diploma Sourcing</li>
            </ul>
            <div className="pt-2">
              <Link href="/hire" className="inline-flex items-center gap-2 text-corp-600 font-bold hover:underline">
                <span>Request Volume Hiring Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tech Recruitment */}
      <section id="tech-recruitment" className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8 scroll-mt-28">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-corp-50 border border-corp-200 text-corp-600 flex items-center justify-center shrink-0">
            <Code className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-corp-600">Engineering & IT</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Tech & Software Recruitment</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs text-slate-600 leading-relaxed">
          <div className="space-y-4 font-medium">
            <p>
              Hiring software engineers, cloud architects, and data scientists requires recruiters who speak the language of code. Generic keyword search results in mismatched interviews and high drop-out rates.
            </p>
            <p>
              Our specialized Tech Recruitment Practice comprises technical recruiters who evaluate candidate GitHub portfolios, technical project histories, stack expertise (Next.js, Node.js, Python, AWS, Kubernetes), and system design capabilities.
            </p>
            <p>
              We serve product startups, enterprise software houses, and Global Capability Centers (GCCs) across India, delivering top 5% tech talent who hit the ground running.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-sm">Tech Domains Covered:</h3>
            <ul className="space-y-2 text-slate-700 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> Full Stack Engineers (Next.js, React, Node, Python)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> Cloud Native & DevOps Engineers (AWS, Docker, K8s)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> AI / ML & Data Platform Specialists</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> Engineering Managers & Product Leads</li>
            </ul>
            <div className="pt-2">
              <Link href="/hire" className="inline-flex items-center gap-2 text-corp-600 font-bold hover:underline">
                <span>Hire Tech Talent</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HR Consulting */}
      <section id="hr-consulting" className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8 scroll-mt-28">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-corp-50 border border-corp-200 text-corp-600 flex items-center justify-center shrink-0">
            <LineChart className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-corp-600">Advisory Practice</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">HR Advisory & Policy Design</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs text-slate-600 leading-relaxed">
          <div className="space-y-4 font-medium">
            <p>
              Fast-growing companies frequently struggle with retention, employee policy structuring, and competitive compensation design. Catalyst Hiring Solutions provides strategic HR consulting to transform your internal HR framework into a competitive talent magnet.
            </p>
            <p>
              We assist companies with market salary benchmarking across Indian Tier 1 and Tier 2 hubs, drafting comprehensive employee handbooks, setting up performance management systems (OKRs/KPIs), and ensuring full compliance with Indian labor laws.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-sm">Advisory Solutions Include:</h3>
            <ul className="space-y-2 text-slate-700 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> Compensation & Benefits Market Benchmarking</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> Organizational Hierarchy & Job Architecture</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> Retention Strategy & Attrition Reduction Audits</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-corp-600" /> HR Compliance & Policy Frameworks</li>
            </ul>
            <div className="pt-2">
              <Link href="/contact" className="inline-flex items-center gap-2 text-corp-600 font-bold hover:underline">
                <span>Book HR Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
