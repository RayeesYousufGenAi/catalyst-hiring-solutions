import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INITIAL_BLOG_POSTS } from '@/lib/dataStore';
import { ArrowLeft, Calendar, Clock, User, Sparkles } from 'lucide-react';
import JsonLd, { getArticleSchema, getBreadcrumbSchema } from '@/components/JsonLd';

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return INITIAL_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogDetailProps): Metadata {
  const post = INITIAL_BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Article Not Found | Catalyst Insights' };

  return {
    title: `${post.title} | Catalyst Insights`,
    description: post.excerpt,
    keywords: [
      post.category,
      post.title,
      'Recruitment Strategy',
      'Hiring Insights',
      'Executive Search India',
      'Catalyst Hiring Solutions',
    ],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `https://www.catalysthiringsolutions.in/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: [post.category, 'Recruitment', 'Hiring Trends'],
      siteName: 'Catalyst Hiring Solutions',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['/og-image.jpg'],
    },
  };
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const post = INITIAL_BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-8 bg-hero-light">
      <JsonLd data={getArticleSchema(post)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-corp-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-corp-600 transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold truncate max-w-xs">{post.title}</span>
      </nav>

      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-bold transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Insights</span>
      </Link>

      {/* Header Info */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase font-bold text-corp-700 bg-corp-50 px-3 py-1 rounded-full border border-corp-200">
            {post.category}
          </span>
          <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pt-2">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-corp-600" />
            <span className="font-bold text-slate-900">{post.author.name}</span> ({post.author.role})
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-slate-400" />
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
        <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed bg-slate-50 p-6 rounded-3xl border border-slate-200">
          {post.excerpt}
        </p>

        <div className="whitespace-pre-line space-y-4 font-medium leading-relaxed">
          {post.content}
        </div>
      </div>

      {/* Footer Advisory Box */}
      <footer className="pt-8 border-t border-slate-200">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-3 shadow-md">
          <h2 className="text-lg font-bold text-slate-900">Need Expert Talent Advisory for Your Organization?</h2>
          <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
            Contact Catalyst Hiring Solutions to discuss custom executive search, volume recruitment, or technical GCC talent acquisition.
          </p>
          <div className="pt-2">
            <Link
              href="/hire"
              className="inline-block px-6 py-2.5 rounded-xl bg-corp-600 hover:bg-corp-700 text-white font-bold text-xs shadow-md shadow-corp-600/20"
            >
              Request Talent Brief Consultation
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}
