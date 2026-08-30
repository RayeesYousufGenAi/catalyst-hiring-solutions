# Catalyst Hiring Solutions — Next.js 14 Full Rebuild

A production-grade, search-engine optimized (SEO) website and recruitment system for **Catalyst Hiring Solutions**, headquartered in Dewas, Madhya Pradesh, India.

---

## 🚀 Key Features

1. **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.
2. **Current Openings & Careers System**: Dynamic job listings with search, category filtering, individual Job Detail pages, and Google for Jobs `JobPosting` JSON-LD schema.
3. **Candidate Job Application System**: Online application modal supporting candidate credentials, experience breakdown, resume file upload (PDF/DOCX), and submission feedback with celebratory confetti.
4. **For Employers / Request Talent**: Lead capture portal with a 4-stage process timeline for enterprise clients and GCCs seeking executive search or volume recruitment.
5. **Recruiter Admin Dashboard (`/admin`)**: Password-protected portal to manage job postings (add/edit/delete/toggle active), review candidate applications, and review employer leads.
6. **SEO Architecture**: Dynamic `sitemap.xml`, `robots.txt`, schema.org structured data (`Organization`, `LocalBusiness`, `JobPosting`), unique page metadata, and 300+ word detailed content sections.
7. **Dual Data Engine**: Runs out-of-the-box locally with instant mock store fallbacks, and seamlessly connects to **Supabase Postgres** and **Resend** when environment variables are supplied.

---

## 🛠️ Local Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Local Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Recruiter Admin Portal**:
   - URL: `http://localhost:3000/admin`
   - Default Password: `admin123`

---

## 📦 Supabase & Vercel Deployment Instructions

When ready to deploy live to Vercel:

1. **Supabase Database Setup**:
   - Create a free project at [Supabase.com](https://supabase.com).
   - Go to the SQL Editor and execute the schema script located in `supabase/schema.sql`.
   - Create a Storage Bucket named `resumes`.

2. **Vercel Deployment**:
   - Import your repository on [Vercel](https://vercel.com).
   - Configure environment variables in Vercel:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `RESEND_API_KEY`
     - `ADMIN_PASSWORD`

3. **Google Search Console**:
   - Submit `https://www.catalysthiringsolutions.in/sitemap.xml` after domain connection.
