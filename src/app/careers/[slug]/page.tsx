import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getJobBySlug, getJobs } from '@/lib/dataStore';
import JsonLd, { getJobPostingSchema, getBreadcrumbSchema } from '@/components/JsonLd';
import JobDetailClient from '@/components/JobDetailClient';

interface JobDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const jobs = await getJobs();
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const job = await getJobBySlug(params.slug);
  if (!job) {
    return {
      title: 'Job Not Found | Catalyst Careers',
      description: 'The requested job posting could not be found or has been closed.',
    };
  }

  const title = `${job.title} Job in ${job.location} | Catalyst Hiring Solutions`;
  const description = `Apply for ${job.title} at ${job.companyName || 'Leading Enterprise'} in ${job.location}. Experience: ${job.experienceLevel}. Package: ${job.salaryRange || 'Competitive'}. Quick direct application.`;

  return {
    title,
    description,
    keywords: [
      job.title,
      `${job.title} ${job.location}`,
      `${job.category} jobs in ${job.location}`,
      `${job.jobType} jobs in ${job.location}`,
      'Catalyst Hiring Solutions Careers',
      'Immediate Hiring',
    ],
    alternates: {
      canonical: `/careers/${job.slug}`,
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: `https://www.catalysthiringsolutions.in/careers/${job.slug}`,
      siteName: 'Catalyst Hiring Solutions',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${job.title} - Catalyst Hiring Solutions`,
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

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const job = await getJobBySlug(params.slug);

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Job Posting Not Found</h1>
        <p className="text-xs text-slate-500">This position may have been filled or deactivated.</p>
        <Link href="/careers" className="inline-block px-4 py-2 bg-corp-600 text-white rounded-xl text-xs font-bold">
          View All Current Openings
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Careers', url: '/careers' },
    { name: job.title, url: `/careers/${job.slug}` },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 bg-hero-light">
      <JsonLd data={getJobPostingSchema(job)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <JobDetailClient job={job} />
    </div>
  );
}
