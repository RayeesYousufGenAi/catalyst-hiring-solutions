---
name: seo-mastery
description: "Enterprise-grade SEO optimization skill for Next.js, React, and modern web apps: Complete technical SEO audits, Schema.org JSON-LD structured data (Organization, WebSite, BreadcrumbList, JobPosting, Article, FAQPage, LocalBusiness, EmploymentAgency), programmatic SEO architecture, metadata management, dynamic XML sitemaps, robots.txt, Open Graph, Twitter Cards, canonicalization, and Core Web Vitals optimization."
argument-hint: "[audit | optimize | schema | programmatic-seo | metadata]"
license: MIT
metadata:
  author: catalyst-seo
  version: "2.0.0"
---

# SEO Mastery & Enterprise Search Engine Optimization

Comprehensive framework for achieving 100/100 SEO health, maximum organic visibility, Google Rich Results qualification, and high-converting programmatic search presence.

---

## 1. Core SEO Audit & 100% Score Checklist

Every page in a production web application must satisfy this checklist:

### A. Technical & Crawlability (Foundations)
- [ ] **Valid `robots.txt`**: Clear `User-agent: *`, disallowed admin/internal paths, and explicit `Sitemap: https://.../sitemap.xml` reference.
- [ ] **Dynamic `sitemap.xml`**: Automatically includes all static pages, programmatic dynamic routes (cities, jobs, articles, categories), with accurate `lastModified`, `changeFrequency`, and `priority`.
- [ ] **Canonical URLs**: Every single route explicitly specifies its self-referential canonical URL to eliminate duplicate content penalties.
- [ ] **Clean URL Slugs**: Semantic, lowercase, hyphen-separated, keyword-rich slugs without query parameter clutter.
- [ ] **HTTP Status & Redirects**: Correct 200 OK, 301 Permanent Redirects for legacy links, and clean 404 handler with navigation options.
- [ ] **Server-Side Rendering (SSR/SSG)**: Critical metadata and initial HTML rendered on the server for instant crawler indexing.

### B. On-Page & Semantic Architecture
- [ ] **Single `<h1>` per page**: Highly targeted primary keyword and strong value proposition.
- [ ] **Strict Heading Hierarchy**: H1 -> H2 -> H3 logical progression without skipped levels.
- [ ] **Title Tags**: 50–60 characters, primary keyword first, brand suffix (`Primary Keyword | Brand Name`).
- [ ] **Meta Descriptions**: 140–160 characters, persuasive call-to-action, high search intent match.
- [ ] **Image Optimization**: Descriptive `alt` tags on all images, WebP/AVIF formats, width/height attributes to prevent Layout Shifts (CLS).
- [ ] **Internal Linking**: Rich contextual cross-links connecting city hubs, service pages, job listings, and related insights with descriptive anchor texts.

### C. Structured Data (Schema.org JSON-LD)
- [ ] **Organization / EmploymentAgency**: Legal name, logo, contact points, geo coordinates, operating hours, and areaServed.
- [ ] **WebSite with SearchAction**: Google Sitelinks Searchbox integration.
- [ ] **BreadcrumbList**: Hierarchical navigational trail on all detail and subpages.
- [ ] **JobPosting**: For all active job postings (`title`, `description`, `datePosted`, `validThrough`, `employmentType`, `hiringOrganization`, `jobLocation`, `baseSalary`, `applicantLocationRequirements`).
- [ ] **Article / BlogPosting**: Author, publisher, datePublished, dateModified, headline, featured image.
- [ ] **FAQPage**: Collapsible or visible FAQ accordions mapped to Google Rich Results FAQ schema.
- [ ] **Service / OfferCatalog**: Detailed breakdown of commercial services offered.

### D. Social Graph & Rich Previews
- [ ] **OpenGraph**: `og:title`, `og:description`, `og:url`, `og:image` (1200x630px), `og:type`, `og:site_name`, `og:locale`.
- [ ] **Twitter Cards**: `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`.
