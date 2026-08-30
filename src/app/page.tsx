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
} from 'lucide-react';
import StatCounter from '@/components/StatCounter';
import LogoMarquee from '@/components/LogoMarquee';
import HeroDashboard from '@/components/HeroDashboard';
import AuroraField from '@/components/AuroraField';
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

  const handleApplyClick = (job: Job) => {
    const message = `Hello Catalyst Hiring Solutions,\nI would like to apply for the position of ${job.title}.\nPlease share the interview details.`;
    const url = `https://wa.me/919797713791?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="overflow-hidden bg-hero-light">
      {/* ─── 1. CINEMATIC HERO ─── */}
      <section className="relative min-h-[calc(100svh-5rem)] flex items-center py-20 lg:py-28">
        <AuroraField />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-6 space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight text-navy-950 leading-none"
              >
                Catalyst
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12 }}
                className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-navy-950 leading-[1.12] max-w-xl"
              >
                Building India&apos;s{' '}
                <span className="text-gradient-brand">Top BPO & Tech Teams</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="text-navy-400 text-base sm:text-lg leading-relaxed max-w-md"
              >
                Customer Support, Voice Process, and Volume Recruitment — delivered in 21 days from a network of 100,000+ pre-screened candidates.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.32 }}
                className="flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/hire"
                  className="btn-primary-gradient inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all"
                >
                  Start Hiring
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-navy-950 bg-white border border-slate-200/80 shadow-soft hover:shadow-card transition-all"
                >
                  Our Services
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] text-navy-400/80"
              >
                Executive Search · Tech Hiring · GCC Hiring · Volume Recruitment
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <HeroDashboard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 2. TRUSTED BY ─── */}
      <LogoMarquee />

      {/* ─── 3. LIVE METRICS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-12 max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-corp-600 mb-3">
            Hiring at Scale
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Numbers that mean placements, not vanity metrics.
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-navy-100 pt-10">
          <StatCounter end={500} suffix="+" label="Enterprise Clients" sublabel="Pan-India & GCCs" />
          <StatCounter end={100} suffix="k+" label="Vetted Candidates" sublabel="Pre-screened talent" />
          <StatCounter end={21} suffix=" Days" label="Avg Time-to-Hire" sublabel="Brief to shortlist" />
          <StatCounter end={98} suffix="%" label="Client Retention" sublabel="Long-term partners" />
        </div>
      </section>

      {/* ─── 4. HOW HIRING WORKS ─── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-hero-light pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="max-w-2xl mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-corp-600 mb-3">
              The Process
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-950 tracking-tight">
              How we deliver top 1% candidates in 21 days
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-corp-500/0 via-corp-500/40 to-teal-500/0" />
            {[
              {
                step: '01',
                title: 'Precision Sourcing',
                desc: 'AI scans 100,000+ pre-screened profiles against your exact skill matrix.',
              },
              {
                step: '02',
                title: 'Domain Pre-Vet',
                desc: 'Specialist recruiters run technical interviews and background checks.',
              },
              {
                step: '03',
                title: 'Curated Shortlist',
                desc: 'Receive 3–5 interview-ready candidates with comp and notice clarity.',
              },
              {
                step: '04',
                title: 'Place & Guarantee',
                desc: 'Offer support plus a 90-day free replacement guarantee.',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative md:px-4 py-6 md:py-0 border-t md:border-t-0 border-navy-100 first:border-t-0"
              >
                <div className="w-12 h-12 rounded-full border border-corp-200 bg-white flex items-center justify-center font-display text-sm text-corp-600 mb-5 relative z-10 shadow-soft">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-navy-950 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. INDUSTRIES ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-corp-600 mb-3">
              Industry Expertise
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-950 tracking-tight">
              Deep domain hiring across India&apos;s growth sectors
            </h2>
          </motion.div>
          <Link
            href="/services"
            className="text-sm font-semibold text-corp-600 hover:text-corp-700 flex items-center gap-1 shrink-0"
          >
            All practices <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="divide-y divide-navy-100 border-y border-navy-100">
          {[
            { title: 'Technology & GCC', detail: 'Full stack, cloud, AI/ML, DevOps — Bangalore, Pune, Hyderabad' },
            { title: 'Manufacturing & Plants', detail: 'Plant ops, quality, EHS — Dewas, Pithampur, Gujarat, Maharashtra' },
            { title: 'Executive & Leadership', detail: 'CEO, CTO, CFO, MD — confidential retained search pan-India' },
            { title: 'Healthcare & Pharma', detail: 'R&D, QA, supply chain — Hyderabad, Dewas, Ahmedabad' },
            { title: 'BFSI & Enterprise Sales', detail: 'Directors, BD, key accounts — Mumbai, Delhi NCR, Bangalore' },
            { title: 'Volume & Mass Hiring', detail: '100+ operator and associate drives — industrial facilities nationwide' },
          ].map((ind, idx) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 py-5 hover:bg-navy-50/50 px-1 sm:px-3 -mx-1 sm:-mx-3 transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-navy-300 tabular-nums">0{idx + 1}</span>
                <h3 className="text-lg font-semibold text-navy-950 group-hover:text-corp-600 transition-colors">
                  {ind.title}
                </h3>
              </div>
              <p className="text-sm text-navy-400 sm:text-right max-w-md pl-8 sm:pl-0">{ind.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── 6. JOB SEARCH + FEATURED ROLES ─── */}
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

          <div className="flex flex-col sm:flex-row gap-2 p-2 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-soft">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 text-navy-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Role, skill, or keyword"
                value={searchRole}
                onChange={(e) => setSearchRole(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-white border border-slate-200 text-navy-950 text-sm focus:outline-none focus:border-corp-500"
              />
            </div>
            <div className="sm:w-48 relative">
              <MapPin className="w-4 h-4 text-navy-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="City"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-white border border-slate-200 text-navy-950 text-sm focus:outline-none focus:border-corp-500"
              />
            </div>
            <Link
              href={`/careers?q=${encodeURIComponent(searchRole)}&location=${encodeURIComponent(searchCity)}`}
              className="btn-primary-gradient inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold shrink-0"
            >
              Search
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {jobs.slice(0, 3).map((job) => (
              <div
                key={job.id}
                className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between min-h-[240px] rounded-2xl border border-white shadow-soft hover:shadow-card transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-corp-600">
                      {job.matchScore || 98}% match
                    </span>
                    <span className="text-xs text-navy-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-navy-950 group-hover:text-corp-600 transition-colors mb-1">
                    <Link href={`/careers/${job.slug}`}>{job.title}</Link>
                  </h3>
                  <p className="text-xs font-medium text-navy-400 mb-3">{job.companyName}</p>
                  <p className="text-sm text-navy-400 line-clamp-2 leading-relaxed">{job.description}</p>
                </div>
                <div className="pt-6 flex items-center justify-between">
                  <span className="text-xs text-navy-400">{job.jobType} · {job.experienceLevel}</span>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="text-sm font-bold text-corp-600 hover:text-corp-700 flex items-center gap-1"
                  >
                    View & Apply <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. ROI ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <RoiCalculator />
      </section>

      {/* ─── 8. TESTIMONIALS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-24">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-12 max-w-2xl">
          <div className="flex items-center gap-1 text-gold-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold-500" />
            ))}
            <span className="ml-2 text-xs font-semibold text-navy-400">4.9 · 240+ reviews</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Trusted by CXOs and corporate HR leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              quote:
                'Catalyst closed 3 Director of Engineering roles for our Bangalore GCC in 18 days. Their technical pre-screening saved our VP of Engineering 30+ interview hours.',
              author: 'Vikas Agarwal',
              role: 'VP HR, Enterprise Cloud Systems',
            },
            {
              quote:
                'For our Dewas manufacturing expansion, we needed 120+ plant operators and QA leads. Catalyst ran the entire walk-in drive without friction.',
              author: 'Rajesh K. Mehta',
              role: 'Plant Head, Industrial Auto Components',
            },
            {
              quote:
                'As an executive candidate, the confidentiality, salary negotiation support, and guidance from Catalyst directors was exceptional.',
              author: 'Ananya Deshmukh',
              role: 'Head of Operations, Logistics Tech',
            },
          ].map((rev, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="space-y-6"
            >
              <p className="text-navy-950/80 text-sm sm:text-base leading-relaxed font-display italic">
                &ldquo;{rev.quote}&rdquo;
              </p>
              <footer>
                <div className="font-semibold text-sm text-navy-950">{rev.author}</div>
                <div className="text-xs text-navy-400 mt-0.5">{rev.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* ─── 9. CITY HUBS ─── */}
      <section className="relative border-t border-navy-100/50 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-light opacity-70 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-400 mb-6 text-center">
            Recruitment hubs across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { city: 'Bangalore', href: '/recruitment-agency-bangalore' },
              { city: 'Pune', href: '/recruitment-agency-pune' },
              { city: 'Delhi NCR', href: '/recruitment-agency-delhi' },
              { city: 'Hyderabad', href: '/recruitment-agency-hyderabad' },
              { city: 'Dewas', href: '/recruitment-agency-dewas' },
              { city: 'Mumbai', href: '/recruitment-agency-mumbai' },
            ].map((c) => (
              <Link
                key={c.city}
                href={c.href}
                className="text-sm font-medium text-navy-950 hover:text-corp-600 underline-offset-4 hover:underline transition-colors"
              >
                {c.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. FINAL CTA ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-light pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] rounded-full bg-sky-400/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] rounded-full bg-teal-400/25 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-xl space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-navy-950">
              Ready to transform your hiring?
            </h2>
            <p className="text-navy-400 text-sm sm:text-base leading-relaxed">
              Brief us once. Get a curated shortlist in 21 days — leadership, tech teams, or volume hires.
            </p>
          </div>
          <Link
            href="/hire"
            className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold shrink-0"
          >
            <Building2 className="w-5 h-5" />
            Get Free Consultation
          </Link>
        </div>
      </section>


    </div>
  );
}
