-- SQL Schema for Catalyst Hiring Solutions (Supabase Postgres)

-- 1. Create Jobs Table
CREATE TABLE IF NOT EXISTS public.jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  company_name TEXT NOT NULL,
  location TEXT NOT NULL,
  job_type TEXT NOT NULL,
  category TEXT NOT NULL,
  experience_level TEXT NOT NULL,
  salary_range TEXT,
  description TEXT NOT NULL,
  requirements TEXT[] DEFAULT '{}',
  responsibilities TEXT[] DEFAULT '{}',
  benefits TEXT[] DEFAULT '{}',
  posted_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  featured BOOLEAN DEFAULT FALSE
);

-- 2. Create Applications Table
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID REFERENCES public.jobs(id) ON DELETE SET NULL,
  job_title TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  current_location TEXT NOT NULL,
  experience_years TEXT NOT NULL,
  resume_file_name TEXT NOT NULL,
  resume_url TEXT,
  cover_note TEXT,
  applied_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'Pending'
);

-- 3. Create Employer Leads Table
CREATE TABLE IF NOT EXISTS public.employer_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  roles_needed TEXT NOT NULL,
  team_size TEXT,
  message TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'New'
);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.employer_leads ENABLE ROW LEVEL SECURITY;

-- Allow Public Read Access for active jobs
CREATE POLICY "Public jobs read" ON public.jobs FOR SELECT USING (is_active = true);
-- Allow Public Insert for applications & employer leads
CREATE POLICY "Public insert applications" ON public.applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert employer_leads" ON public.employer_leads FOR INSERT WITH CHECK (true);

-- 5. Supabase Storage Bucket Setup for Resumes
-- Execute via Supabase Dashboard -> Storage -> Create Bucket named 'resumes' (Public or Authenticated access)
