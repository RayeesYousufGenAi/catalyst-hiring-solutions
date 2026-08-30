import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { INITIAL_BLOG_POSTS } from '@/lib/dataStore';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import JsonLd, { getBreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Hiring Insights & Talent Trends Blog | Catalyst Hiring Solutions',
  description:
    'Recruitment guides, executive search strategies, GCC hiring benchmarks, and talent acquisition insights for enterprise leaders in India.',
  keywords: [
    'Recruitment Blog India',
    'Talent Acquisition Insights',
    'Executive Search Trends',
    'Volume Hiring Guide',
    'GCC Hiring India',
    'Salary Benchmarking India',
    'Catalyst Hiring Solutions Blog',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Recruitment Insights & Talent Strategy | Catalyst Hiring',
    description:
      'Expert guides on executive search, volume recruitment, and scaling talent across Indian enterprises.',
    url: 'https://www.catalysthiringsolutions.in/blog',
    siteName: 'Catalyst Hiring Solutions',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Catalyst Insights' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiring Insights Blog | Catalyst Hiring Solutions',
    description: 'Recruitment guides and talent acquisition insights for leaders in India.',
    images: ['/og-image.jpg'],
  },
};

export default function BlogListPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Catalyst Hiring Solutions Insights',
    description: 'Expert guides on executive search, volume recruitment, and talent strategy.',
    url: 'https://www.catalysthiringsolutions.in/blog',
    publisher: {
      '@id': 'https://www.catalysthiringsolutions.in/#organization',
    },
    blogPost: INITIAL_BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      url: `https://www.catalysthiringsolutions.in/blog/${post.slug}`,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
    })),
  };

  return (
    <div className="space-y-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 bg-hero-light">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={blogSchema} />

      {/* Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-corp-600 inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-corp-50 rounded-full border border-corp-200">
          <Sparkles className="w-4 h-4" /> Catalyst Insights
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Recruitment Insights & Talent Strategy
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
          Expert guides on executive search, volume recruitment, salary benchmarking, and scaling workforce across Indian enterprises.
        </p>
      </header>

      {/* Blog Cards Grid */}
      <section aria-label="Articles" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {INITIAL_BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-corp-600/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] uppercase font-bold text-corp-700 bg-corp-50 px-3 py-1 rounded-full border border-corp-200">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-corp-600 transition-colors leading-tight">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 font-medium">{post.excerpt}</p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">{post.author.name}</div>
                <div className="text-[11px] text-slate-500 font-medium">{post.author.role}</div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-bold text-corp-600 hover:underline flex items-center gap-1.5"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
