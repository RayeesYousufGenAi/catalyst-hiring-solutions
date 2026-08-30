'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Building2,
  ChevronRight,
  Search,
  Star,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import StatCounter from '@/components/StatCounter';
import LogoMarquee from '@/components/LogoMarquee';
import HeroDashboard from '@/components/HeroDashboard';
import AuroraField from '@/components/AuroraField';
import Canvas3DField from '@/components/Canvas3DField';
import Tilt3DCard from '@/components/Tilt3DCard';
import RoiCalculator from '@/components/RoiCalculator';

import { Job } from '@/lib/types';
import { getJobs } from '@/lib/dataStore';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchRole, setSearchRole] = useState('');
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    getJobs().then((data) => setJobs(data.filter((j) => j.isActive)));
  }, []);

  return (
    <div className="overflow-hidden bg-hero-light">
      {/* ─── 1. CINEMATIC 3D HERO ─── */}
      <section className="relative min-h-[calc(100svh-5rem)] flex items-center py-20 lg:py-28">
        <AuroraField />
        <Canvas3DField />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-6 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-gold-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800 tracking-wide">
                  Top Work From Home & Tech Recruitment Agency
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-navy-950 leading-[1.12] max-w-xl"
              >
                Building India&apos;s{' '}
                <span className="text-gradient-brand">Top BPO & Tech Teams</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.24 }}
                className="text-base sm:text-lg text-navy-400 font-sans leading-relaxed max-w-lg"
              >
                From our Dewas, MP headquarters, we partner with 500+ enterprises across Bangalore,
                Gurugram, Pune, and Mumbai. 21-day average time-to-hire with 100,000+ pre-vetted candidates.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.36 }}
                className="flex flex-col sm:flex-row gap-3 sm:items-center pt-2"
              >
                <Link
                  href="/hire"
                  className="btn-primary-gradient inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold shadow-soft"
                >
                  Hire Top Talent
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-navy-950 bg-white/80 hover:bg-white border border-slate-200 shadow-sm transition-all"
                >
                  Explore 20+ WFH Jobs
                </Link>
              </motion.div>

              {/* Micro proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-xs text-navy-400"
              >
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-corp-600" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Zap className="w-4 h-4 text-gold-500" />
                  <span>21-Day Turnaround</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
                  <span>4.9/5 Employer Rating</span>
                </div>
              </motion.div>
            </div>

            {/* 3D Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-6 flex justify-center"
            >
              <HeroDashboard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 2. SOCIAL PROOF ─── */}
      <section className="border-y border-navy-100/60 py-10 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-400">
            Trusted by 500+ fast-scaling enterprises and Fortune 500 GCCs
          </p>
          <LogoMarquee />
        </div>
      </section>

      {/* ─── 3. STATS STRIP ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <Tilt3DCard className="p-6 rounded-3xl bg-white/70 backdrop-blur-sm border border-white shadow-soft">
            <StatCounter end={100} suffix="k+" label="Pre-screened Candidates" />
          </Tilt3DCard>
          <Tilt3DCard className="p-6 rounded-3xl bg-white/70 backdrop-blur-sm border border-white shadow-soft">
            <StatCounter end={21} suffix=" Days" label="Avg Time-to-Hire" />
          </Tilt3DCard>
          <Tilt3DCard className="p-6 rounded-3xl bg-white/70 backdrop-blur-sm border border-white shadow-soft">
            <StatCounter end={94} suffix="%" label="90-Day Retention" />
          </Tilt3DCard>
          <Tilt3DCard className="p-6 rounded-3xl bg-white/70 backdrop-blur-sm border border-white shadow-soft">
            <StatCounter end={500} suffix="+" label="Enterprise Clients" />
          </Tilt3DCard>
        </motion.div>
      </section>

      {/* ─── 4. PRACTICES (SERVICES) ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-corp-600 mb-3">
            Recruitment Practices
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Specialized search for every tier of growth.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: 'executive-search',
              tag: 'Leadership',
              title: 'Executive Search',
              desc: 'C-Suite, VP, and Director-level placements with structured competency vetting.',
              href: '/services#executive-search',
            },
            {
              id: 'volume-hiring',
              tag: 'Scale',
              title: 'Volume & Mass Hiring',
              desc: 'Turnkey recruitment drives for customer support, BPOs, and operations at 100+ hires/month.',
              href: '/services#volume-hiring',
            },
            {
              id: 'tech-recruitment',
              tag: 'Engineering',
              title: 'Tech & GCC Recruitment',
              desc: 'Full-stack, cloud, AI/ML, and product leads for Silicon Valley & Indian tech hubs.',
              href: '/services#tech-recruitment',
            },
            {
              id: 'hr-consulting',
              tag: 'Strategy',
              title: 'HR Advisory Services',
              desc: 'Compensation benchmarking, org design, and talent retention consulting.',
              href: '/services#hr-consulting',
            },
          ].map((svc, i) => (
            <Tilt3DCard
              key={svc.id}
              className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between min-h-[280px] rounded-3xl border border-white shadow-soft hover:shadow-xl transition-all group"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-corp-600 mb-3 block">
                  {svc.tag}
                </span>
                <h3 className="font-display text-xl text-navy-950 group-hover:text-corp-600 transition-colors mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm text-navy-400 leading-relaxed font-medium">{svc.desc}</p>
              </div>
              <Link
                href={svc.href}
                className="text-xs font-bold text-slate-800 group-hover:text-corp-600 flex items-center gap-1.5 pt-6 transition-colors"
              >
                Explore Practice <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Tilt3DCard>
          ))}
        </div>
      </section>

      {/* ─── 5. INDUSTRIES ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-12">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-corp-600 mb-3">
            Industry Focus
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Deep domain expertise across India&apos;s fastest growing verticals.
          </h2>
        </motion.div>

        <div className="divide-y divide-navy-100/60 border-y border-navy-100/60">
          {[
            {
              num: '01',
              title: 'Customer Support & International BPO',
              detail: 'Voice & Non-Voice, Email/Chat support, 24/7 US/UK shifts, and remote WFH staffing.',
            },
            {
              num: '02',
              title: 'Technology & Global Capability Centers (GCCs)',
              detail: 'Software engineering, cloud infrastructure, cybersecurity, and data platforms in Bangalore & Pune.',
            },
            {
              num: '03',
              title: 'Heavy Manufacturing & Industrial Engineering',
              detail: 'Plant heads, QA/QC leads, and EHS managers rooted in Dewas, Pithampur & Indore hubs.',
            },
            {
              num: '04',
              title: 'Fintech, BFSI & Digital Payments',
              detail: 'Risk analysts, compliance officers, and sales leaders for Mumbai & Delhi financial ecosystems.',
            },
          ].map((ind, i) => (
            <motion.div
              key={ind.num}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-display text-sm text-corp-600 tabular-nums font-bold">{ind.num}</span>
                <h3 className="text-lg font-bold text-navy-950 group-hover:text-corp-600 transition-colors">
                  {ind.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-navy-400 sm:text-right max-w-md pl-8 sm:pl-0 font-medium leading-relaxed">
                {ind.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── 6. 3D FEATURED ROLES + SEARCH ─── */}
      <section className="relative border-y border-navy-100/60 py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-light opacity-80 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-corp-600 mb-3">
                Live Openings
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-950 tracking-tight">
                Search roles. Apply in one click.
              </h2>
            </div>
            <Link
              href="/careers"
              className="text-sm font-semibold text-corp-600 hover:text-corp-700 flex items-center gap-1"
            >
              Browse all {jobs.length} positions <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Search */}
          <div className="flex flex-col sm:flex-row gap-2 p-2 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-soft">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 text-navy-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Role, skill, or keyword (e.g. WFH Chat Support)"
                value={searchRole}
                onChange={(e) => setSearchRole(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-white border border-slate-200 text-navy-950 text-sm focus:outline-none focus:border-corp-500"
              />
            </div>
            <div className="sm:w-48 relative">
              <MapPin className="w-4 h-4 text-navy-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="City (e.g. Work From Home)"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-white border border-slate-200 text-navy-950 text-sm focus:outline-none focus:border-corp-500"
              />
            </div>
            <Link
              href={`/careers?q=${encodeURIComponent(searchRole)}&location=${encodeURIComponent(searchCity)}`}
              className="btn-primary-gradient inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold shrink-0"
            >
              Search Openings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3D Tilt Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.slice(0, 3).map((job) => (
              <Tilt3DCard
                key={job.id}
                className="bg-white/90 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between min-h-[260px] rounded-3xl border border-white shadow-soft hover:shadow-2xl transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-corp-700 bg-corp-50 px-2.5 py-0.5 rounded-full border border-corp-200">
                      {job.category}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {job.location}
                    </span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl text-navy-950 group-hover:text-corp-600 transition-colors mb-1 font-bold leading-snug">
                    <Link href={`/careers/${job.slug}`}>{job.title}</Link>
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mb-3">{job.companyName}</p>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">{job.description}</p>
                </div>
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-4">
                  <span className="text-xs font-bold text-corp-600">{job.salaryRange || 'Competitive'}</span>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="text-xs font-extrabold text-white bg-corp-600 hover:bg-corp-700 px-4 py-2 rounded-xl shadow-sm transition-all flex items-center gap-1"
                  >
                    View & Apply <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </Tilt3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. ROI ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <RoiCalculator />
      </section>
    </div>
  );
}
