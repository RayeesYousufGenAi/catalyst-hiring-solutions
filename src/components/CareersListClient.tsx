'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, MapPin, Briefcase, Sparkles, Building2, ChevronRight, Clock } from 'lucide-react';
import { Job } from '@/lib/types';

interface CareersListClientProps {
  initialJobs: Job[];
}

export default function CareersListClient({ initialJobs }: CareersListClientProps) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(initialJobs);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedJobType, setSelectedJobType] = useState<string>('All');

  useEffect(() => {
    let result = jobs;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.companyName.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q) ||
          j.description.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter((j) => j.category === selectedCategory);
    }

    if (selectedJobType !== 'All') {
      result = result.filter((j) => j.jobType === selectedJobType);
    }

    setFilteredJobs(result);
  }, [searchQuery, selectedCategory, selectedJobType, jobs]);

  const handleApplyClick = (job: Job) => {
    const message = `Hello Catalyst Hiring Solutions,\nI would like to apply for the position of ${job.title}.\nPlease share the interview details.`;
    const url = `https://wa.me/919797713791?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const categories = ['All', 'Engineering', 'Management', 'Sales & Marketing', 'Operations', 'HR & Admin', 'Finance'];
  const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Remote', 'Hybrid'];

  return (
    <div className="space-y-10">
      {/* Search & Filter Header Bar */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by job title, skill, company, or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-corp-500 transition-all"
            aria-label="Search Job Openings"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" /> Department:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
                selectedCategory === cat
                  ? 'bg-corp-600 text-white shadow-md shadow-corp-600/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job Type Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-2">
            <Briefcase className="w-3.5 h-3.5" /> Work Mode:
          </span>
          {jobTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedJobType(type)}
              className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-all ${
                selectedJobType === type
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-600 px-2">
        <span className="font-semibold">
          Showing <strong className="text-slate-900">{filteredJobs.length}</strong> active opportunities
        </span>
        {(searchQuery || selectedCategory !== 'All' || selectedJobType !== 'All') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedJobType('All');
            }}
            className="text-corp-600 hover:underline font-bold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <article
            key={job.id}
            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-corp-500/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-corp-700 bg-corp-50 px-2.5 py-0.5 rounded-full border border-corp-200">
                      {job.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {job.jobType}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-corp-600 transition-colors">
                    <Link href={`/careers/${job.slug}`}>{job.title}</Link>
                  </h2>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <Building2 className="w-3.5 h-3.5" /> {job.companyName}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-corp-600 bg-corp-50 px-2.5 py-1 rounded-xl border border-corp-100 shrink-0">
                  {job.salaryRange || 'Competitive'}
                </span>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">
                {job.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 font-medium pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" /> {job.experienceLevel}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />{' '}
                  {new Date(job.postedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                </span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <Link
                href={`/careers/${job.slug}`}
                className="text-xs font-bold text-slate-700 hover:text-corp-600 flex items-center gap-1"
              >
                View Job Specs <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleApplyClick(job)}
                  className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold transition-all"
                >
                  WhatsApp Apply
                </button>
                <Link
                  href={`/careers/${job.slug}`}
                  className="px-3.5 py-1.5 rounded-xl bg-corp-600 hover:bg-corp-700 text-white text-xs font-bold shadow-md shadow-corp-600/20 transition-all"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-3">
          <p className="text-base font-bold text-slate-900">No positions matched your criteria</p>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query or department filter, or submit an open application.
          </p>
          <div className="pt-2">
            <Link
              href="/candidate"
              className="inline-block px-5 py-2.5 rounded-xl bg-corp-600 text-white text-xs font-bold shadow-md"
            >
              Submit Resume for Future Openings
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
