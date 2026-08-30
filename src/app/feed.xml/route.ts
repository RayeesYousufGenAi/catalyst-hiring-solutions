import { NextResponse } from 'next/server';
import { getJobs, INITIAL_BLOG_POSTS } from '@/lib/dataStore';

export async function GET() {
  const baseUrl = 'https://www.catalysthiringsolutions.in';
  const jobs = await getJobs();

  const jobItemsXml = jobs
    .slice(0, 20)
    .map(
      (job) => `
    <item>
      <title><![CDATA[${job.title} - ${job.location}]]></title>
      <link>${baseUrl}/careers/${job.slug}</link>
      <guid>${baseUrl}/careers/${job.slug}</guid>
      <pubDate>${new Date(job.postedAt || Date.now()).toUTCString()}</pubDate>
      <description><![CDATA[${job.description} (Compensation: ${job.salaryRange || 'Competitive'})]]></description>
      <category><![CDATA[${job.category}]]></category>
    </item>`
    )
    .join('');

  const blogItemsXml = INITIAL_BLOG_POSTS.map(
    (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      <category><![CDATA[${post.category}]]></category>
      <author>${post.author.name}</author>
    </item>`
  ).join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Catalyst Hiring Solutions - Job Openings &amp; Insights</title>
    <link>${baseUrl}</link>
    <description>Latest career opportunities and talent acquisition insights from Catalyst Hiring Solutions.</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${jobItemsXml}
    ${blogItemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
