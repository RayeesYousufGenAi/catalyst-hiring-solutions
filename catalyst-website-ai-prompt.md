# AI Build Prompt — Catalyst Hiring Solutions (Full Rebuild)

> Paste this entire document into your AI builder (v0.dev, bolt.new, Claude Code, Cursor, etc.) as the project brief. It is written so an AI coding agent can build the full project end-to-end and you can deploy it on Vercel.

---

## 1. PROJECT CONTEXT

Build a complete, production-ready website for **Catalyst Hiring Solutions**, a recruitment/talent-acquisition agency based in Dewas, Madhya Pradesh, India, serving clients across India.

Current site: https://www.catalysthiringsolutions.in/ — plain HTML/CSS, static, no SEO, no job application system, no backend, no animations. This is a **full rebuild**, not a patch.

**Business info to carry over:**
- Name: Catalyst Hiring Solutions
- Tagline: "Where Talent Meets Opportunity"
- Location: Dewas, Madhya Pradesh 455001, India
- Phone: +91 9797713791
- Email: hr@catalysthiring.com
- Positioning: 500+ companies served, 100,000+ vetted candidates, 21-day average time-to-hire
- Services: Executive Search, Volume Hiring, Tech Recruitment, HR Consulting

**Primary goals:**
1. Premium, modern, top-tier design with smooth motion/animation (feels like a funded startup, not a template)
2. Full SEO setup so the site can rank on Google India for recruitment-related keywords
3. A real, dynamic **"Current Openings" / Careers** system where jobs are listed and candidates can apply online (name, email, phone, resume upload, cover note)
4. A backend + database to store all applicant/lead data, with an admin view to manage job postings and see applications
5. Ready to deploy on **Vercel**

---

## 2. TECH STACK (use exactly this unless there's a strong reason not to)

- **Framework:** Next.js 14+ (App Router, TypeScript) — best for SEO (SSR/SSG) + Vercel-native
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (page transitions, scroll reveals, counters, hover states) — keep it tasteful, not excessive
- **UI components:** shadcn/ui for forms, dialogs, dropdowns, toasts
- **Database:** Supabase (Postgres) — free tier, easy Vercel integration, gives you both DB + file storage for resumes in one place. (Alternative: MongoDB Atlas if preferred.)
- **File storage:** Supabase Storage bucket for resume PDFs
- **Email notifications:** Resend (or Nodemailer + SMTP) — email the admin every time someone applies, and send the candidate a confirmation email
- **Forms/validation:** react-hook-form + zod
- **Admin auth:** Simple protected `/admin` route using NextAuth or Supabase Auth (email/password login for the recruiter, not public sign-up)
- **Deployment:** Vercel (set env vars for Supabase keys, Resend key)
- **Analytics:** Google Analytics 4 + Google Search Console verification + Vercel Analytics

---

## 3. SITE STRUCTURE / PAGES

1. **Home (`/`)**
   - Hero with animated headline, CTA buttons ("Hire Talent" / "Find a Job"), animated stat counters (500+ companies, 100,000+ candidates, 21-day avg hire time, success rate %)
   - "Why Choose Us" section (Precision Matching, Rapid Delivery, Vast Network, Partnership Approach, HR Consulting, Dedicated Support) with icon + scroll-reveal animation
   - Services preview (3 cards linking to `/services`)
   - Featured/latest 3–4 **current openings** pulled live from the database, each with an "Apply Now" button
   - Testimonials carousel
   - Final CTA banner ("Ready to Transform Your Hiring?")
   - Footer with sitemap, social links, contact, NAP (name/address/phone) for local SEO

2. **About (`/about`)** — company story, mission, team, why Dewas/India-based agency, years of experience, values

3. **Services (`/services`)** — detailed breakdown of Executive Search, Volume Hiring, Tech Recruitment, HR Consulting, each with its own section/anchor and schema-friendly descriptive copy (300+ words each, unique, not thin content — important for SEO)

4. **Careers / Current Openings (`/careers` or `/jobs`)** — **this is the key new feature**
   - List of all active job postings (title, company/client name if allowed, location, job type, experience required, salary range if available, posted date) pulled from database
   - Filter/search by keyword, location, category
   - Each job has its own detail page: `/jobs/[slug]` with full JD + an **Apply Now** form (Name, Email, Phone, Current location, Experience, Resume upload (PDF), optional cover message)
   - On submit → save to database, upload resume to storage, send confirmation email to candidate, send notification email to hr@catalysthiring.com
   - Use **JobPosting schema.org structured data** on every job page (critical for Google Jobs visibility in India — this alone can drive huge organic traffic)

5. **For Employers (`/hire`)** — a page targeted at companies wanting to hire, with a "Request Talent" lead form (company name, contact person, email, phone, role needed, message) → saved to DB + emailed to admin

6. **Blog (`/blog`)** — for long-term SEO content (hiring trends, salary guides, interview tips). Even 4–6 starter articles help a lot. Each post server-rendered, with proper meta tags.

7. **Contact (`/contact`)** — contact form, embedded Google Map (Dewas, MP), phone/email/address, business hours

8. **Admin panel (`/admin`, password protected)**
   - Login page
   - Dashboard: list of job applications received (with resume download links), list of employer leads, ability to post/edit/delete job openings (title, description, location, type, salary, active/inactive toggle)

9. **Legal:** `/privacy-policy`, `/terms-of-service`

---

## 4. SEO REQUIREMENTS (this is the most important non-visual part — do NOT skip)

Since the goal is to **rank on top of Google India** for recruitment-related searches, implement all of the following:

### Technical SEO
- Next.js `generateMetadata()` for every page — unique `<title>` and `<meta description>` per page (not repeated)
- Auto-generated `sitemap.xml` (Next.js `app/sitemap.ts`) including all static pages + all dynamic job pages + blog posts
- `robots.txt` allowing all crawlers, pointing to sitemap
- Canonical URLs on every page
- OpenGraph + Twitter Card meta tags with a proper OG image for social sharing
- Fast Core Web Vitals: use `next/image` for all images, lazy loading, font optimization (`next/font`), no layout shift
- Mobile-first responsive design (most Indian job seekers browse on mobile)
- HTTPS (Vercel default), clean URL structure (no query-string job URLs, use slugs)

### Structured Data (Schema.org JSON-LD)
- `Organization` schema on homepage (name, logo, address, phone, sameAs social links)
- `LocalBusiness` schema (Dewas address) for local SEO / Google Maps visibility
- `JobPosting` schema on every individual job page (title, description, datePosted, validThrough, employmentType, hiringOrganization, jobLocation, baseSalary if available) — this is what makes jobs eligible to appear in **Google for Jobs** search carousel, which is huge free traffic in India
- `BreadcrumbList` schema on inner pages
- `FAQPage` schema if you add an FAQ section

### Keyword strategy (target these kinds of terms in content naturally)
- "recruitment agency in Dewas / Madhya Pradesh / India"
- "top recruitment consultancy India"
- "IT recruitment agency India", "executive search firm India"
- "bulk hiring / volume hiring company India"
- "HR consulting services India"
- "[job title] jobs in [city]" for each posted job (this happens automatically once JobPosting schema + individual job pages exist)
- Include location + service combination keywords naturally in headings and body copy, not stuffed

### Content SEO
- Every page needs real, unique, 300+ word body copy (Google penalizes thin/duplicate content)
- Blog section for ongoing fresh content = long-term ranking growth
- Internal linking between services, blog, and job pages

### Off-page / setup steps (tell the user — you should do these after deploy)
- Submit sitemap to Google Search Console
- Create/verify a Google Business Profile for local search + Maps pack
- Get listed on Justdial, Sulekha, IndiaMART style directories with consistent NAP (name/address/phone) — helps local SEO trust signals
- Backlinks from industry directories, LinkedIn company page, press mentions

---

## 5. DESIGN / MOTION DIRECTION

- Premium, confident, modern SaaS/agency aesthetic — think clean typography, generous white space, a strong accent color (keep brand consistency, can refine from current teal/dark palette), subtle gradients
- Framer Motion for:
  - Hero text/CTA fade-and-slide-in on load
  - Animated number counters for stats (count up when scrolled into view)
  - Scroll-triggered reveal for each section (fade up, staggered cards)
  - Smooth hover states on cards/buttons (scale/shadow lift)
  - Page transition animation between routes
- Keep animations fast (150–400ms) and purposeful — no gratuitous flashy effects that hurt load speed or feel gimmicky
- Fully responsive: mobile nav (hamburger with slide-in menu), tablet, desktop breakpoints
- Accessible: proper contrast, focus states, semantic HTML, alt text on all images (also helps SEO)

---

## 6. DATABASE SCHEMA (Supabase / Postgres — suggested tables)

```sql
-- jobs
id, title, slug, description, location, job_type, experience_level,
salary_min, salary_max, category, is_active, posted_at, valid_through

-- applications
id, job_id (fk), name, email, phone, current_location, experience_years,
resume_url, cover_message, created_at

-- employer_leads
id, company_name, contact_person, email, phone, role_needed, message, created_at

-- admin_users
id, email, password_hash
```

---

## 7. DELIVERABLES EXPECTED FROM THE AI BUILD

1. Full Next.js project (TypeScript, App Router, Tailwind, Framer Motion, shadcn/ui)
2. Supabase schema + client setup, `.env.example` with all required keys
3. All pages listed in Section 3, fully responsive and animated
4. Working job application flow: apply form → DB + resume storage → email notifications
5. Admin dashboard to manage jobs and view applications/leads
6. Full SEO implementation per Section 4 (metadata, sitemap, robots.txt, JSON-LD schema on every relevant page)
7. `README.md` with setup + Vercel deployment instructions (env vars needed: Supabase URL/key, Resend API key, NextAuth secret)
8. Clean, componentized, well-commented code so it's maintainable after handoff

---

## 8. NOTE FOR DEPLOYMENT (for you, not the AI)

Jab code ready ho jaye:
1. Vercel pe GitHub repo import karo
2. Environment variables (Supabase keys, Resend key, admin auth secret) Vercel dashboard mein "Environment Variables" section mein daalo
3. Deploy hone ke baad Google Search Console mein property verify karo aur sitemap.xml submit karo
4. Google Business Profile bana lo Dewas address ke saath — local search/Maps ke liye zaroori hai
5. Domain (catalysthiringsolutions.in) ko Vercel se connect karo (DNS records update karke)

