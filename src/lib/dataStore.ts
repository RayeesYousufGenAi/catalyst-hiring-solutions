import { Job, Application, EmployerLead, BlogPost, CityHub, RecruiterAnalytics } from './types';
import { supabase } from './supabase';

export const INITIAL_JOBS: Job[] = [
  {
    id: 'job-1',
    title: 'International Non-Voice Customer Support Executive',
    slug: 'international-non-voice-customer-support-executive-gurugram',
    companyName: 'Catalyst Hiring Solutions',
    location: 'Gurugram',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: 'Minimum 1 Year Travel Industry Experience',
    salaryRange: 'Up to ₹32,000 CTC',
    description: 'We are currently hiring for an International Non-Voice Customer Support Executive in Gurugram.\n\nMode: Work From Office\nWorking Days: 5 Days',
    requirements: [
      'Minimum 1 Year Travel Industry Experience'
    ],
    responsibilities: [],
    benefits: ['Both Side Cab (Hiring Zone)'],
    postedAt: '2026-07-30T10:00:00Z',
    isActive: true,
    featured: true,
    matchScore: 98,
  },
  {
    id: 'job-2',
    title: 'International Voice Customer Support Executive',
    slug: 'international-voice-customer-support-executive-gurugram',
    companyName: 'Catalyst Hiring Solutions',
    location: 'Gurugram',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: 'Minimum 1 Year Travel Industry Experience',
    salaryRange: 'Up to ₹35,000 CTC',
    description: 'We are currently hiring for an International Voice Customer Support Executive in Gurugram.\n\nMode: Work From Office\nWorking Days: 5 Days',
    requirements: [
      'Minimum 1 Year Travel Industry Experience'
    ],
    responsibilities: [],
    benefits: ['Both Side Cab'],
    postedAt: '2026-07-29T10:00:00Z',
    isActive: true,
    featured: true,
    matchScore: 95,
  },
  {
    id: 'job-3',
    title: 'Customer Support Executive',
    slug: 'customer-support-executive-gurugram',
    companyName: 'Catalyst Hiring Solutions',
    location: 'Gurugram',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: 'Minimum 6 Months Customer Support Experience',
    salaryRange: 'Up to ₹25,000 CTC',
    description: 'We are currently hiring for a Customer Support Executive in Gurugram.\n\nMode: Work From Office\nWorking Days: 6 Days\nShift: Rotational',
    requirements: [
      'Minimum 6 Months Customer Support Experience',
      'Graduate Mandatory'
    ],
    responsibilities: [],
    benefits: [],
    postedAt: '2026-07-28T10:00:00Z',
    isActive: true,
    featured: true,
    matchScore: 92,
  },
  {
    id: 'job-4',
    title: 'Technical Customer Support Executive',
    slug: 'technical-customer-support-executive-gurugram',
    companyName: 'Catalyst Hiring Solutions',
    location: 'Gurugram',
    jobType: 'Full-time',
    category: 'Technical Support',
    experienceLevel: 'Minimum 6 Months Customer Support Experience',
    salaryRange: 'Up to ₹34,000 CTC',
    description: 'We are currently hiring for a Technical Customer Support Executive in Gurugram.\n\nWorking Days: 5 Days',
    requirements: [
      'Minimum 6 Months Customer Support Experience',
      'Basic Technical Troubleshooting Skills'
    ],
    responsibilities: [],
    benefits: ['Both Side Cab'],
    postedAt: '2026-07-27T10:00:00Z',
    isActive: true,
    featured: false,
    matchScore: 90,
  },
  {
    id: 'job-5',
    title: 'Motor Insurance Customer Support Executive',
    slug: 'motor-insurance-customer-support-executive-gurugram',
    companyName: 'Catalyst Hiring Solutions',
    location: 'Gurugram',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: 'Minimum 6 Months BPO Experience',
    salaryRange: 'Up to ₹25,000 CTC',
    description: 'We are currently hiring for a Motor Insurance Customer Support Executive in Gurugram.\n\nMode: Work From Office\nWorking Days: 6 Days\nShift: Rotational\nBatch: Immediate Hiring\nPriority: Walk-in Candidates Preferred',
    requirements: [
      'Minimum 6 Months BPO Experience',
      'Graduate Mandatory'
    ],
    responsibilities: [],
    benefits: [],
    postedAt: '2026-07-26T10:00:00Z',
    isActive: true,
    featured: false,
    matchScore: 89,
  }
];

export const CITY_HUBS: CityHub[] = [
  {
    slug: 'recruitment-agency-bangalore',
    cityName: 'Bangalore',
    state: 'Karnataka',
    heroHeadline: 'Premier IT & GCC Recruitment Agency in Bangalore',
    description: 'Catalyst Hiring Solutions connects top Silicon Valley-backed startups, Global Capability Centers (GCCs), and enterprises in Bangalore with top 1% tech leads and C-Suite executives.',
    activeCandidates: 38400,
    partnerCompanies: 185,
    keyIndustries: ['GCC & Tech Hubs', 'SaaS & Fintech', 'AI & Machine Learning', 'Product Management'],
    topRoles: ['Senior Full Stack Engineer', 'VP of Engineering', 'Product Lead', 'Data Platform Architect'],
  },
  {
    slug: 'recruitment-agency-pune',
    cityName: 'Pune',
    state: 'Maharashtra',
    heroHeadline: 'Top Executive & Tech Recruitment Agency in Pune',
    description: 'Empowering automotive giants, IT ITES enterprises, and manufacturing leaders across Hinjewadi and Kharadi with pre-vetted senior talent.',
    activeCandidates: 24200,
    partnerCompanies: 120,
    keyIndustries: ['Automotive & Manufacturing', 'IT & Cloud Services', 'GCC Operations', 'Pharma'],
    topRoles: ['Plant Operations Manager', 'DevOps Architect', 'QA Manager', 'Talent Lead'],
  },
  {
    slug: 'recruitment-agency-delhi',
    cityName: 'Delhi NCR',
    state: 'Delhi / Gurgaon / Noida',
    heroHeadline: 'Leading Recruitment Consultancy in Delhi NCR & Gurgaon',
    description: 'Specialized executive search, volume recruitment drives, and corporate HR advisory for Cyber City Gurgaon, Noida Sector 62, and Delhi NCR business parks.',
    activeCandidates: 31900,
    partnerCompanies: 150,
    keyIndustries: ['Fintech & E-Commerce', 'BPO & Shared Services', 'Enterprise Consulting', 'FMCG'],
    topRoles: ['Enterprise Sales Director', 'Head of Customer Success', 'Finance Controller', 'HR Director'],
  },
  {
    slug: 'recruitment-agency-hyderabad',
    cityName: 'Hyderabad',
    state: 'Telangana',
    heroHeadline: 'Top Recruitment Partner in HITEC City Hyderabad',
    description: 'Sourcing specialized cloud engineers, biotech specialists, and operational leaders across HITEC City and Gachibowli.',
    activeCandidates: 21500,
    partnerCompanies: 95,
    keyIndustries: ['Pharmaceuticals & Biotech', 'Cloud Infrastructure', 'GCC Expansion', 'Cybersecurity'],
    topRoles: ['Cloud Architect', 'Biotech R&D Lead', 'Security Specialist', 'Full Stack Developer'],
  },
  {
    slug: 'recruitment-agency-dewas',
    cityName: 'Dewas & Indore',
    state: 'Madhya Pradesh',
    heroHeadline: 'Headquarters & Top Manufacturing Recruitment Agency in Dewas',
    description: 'Rooted in Dewas Industrial Corridor. The preferred recruitment partner for heavy industrial manufacturing, chemical processing, and MP tech expansions.',
    activeCandidates: 19800,
    partnerCompanies: 110,
    keyIndustries: ['Heavy Industrial Manufacturing', 'Chemical & Process Engineering', 'Precision Auto Components', 'Operations'],
    topRoles: ['Vice President Plant Head', 'QA/QC Manager', 'Substation Engineer', 'EHS Head'],
    officeAddress: 'Catalyst Hiring Solutions, Dewas Industrial Area, Dewas, Madhya Pradesh 455001, India',
  },
  {
    slug: 'recruitment-agency-mumbai',
    cityName: 'Mumbai',
    state: 'Maharashtra',
    heroHeadline: 'Executive Search & Leadership Hiring Agency in Mumbai',
    description: 'Strategic leadership headhunting for BFSI, investment banking, media, and enterprise corporations across BKC and Lower Parel.',
    activeCandidates: 27600,
    partnerCompanies: 140,
    keyIndustries: ['BFSI & Financial Services', 'Media & Entertainment', 'Logistics', 'Retail & FMCG'],
    topRoles: ['Chief Financial Officer', 'Investment Lead', 'Head of Supply Chain', 'Brand Director'],
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'future-of-executive-search-in-india-2026',
    title: 'The Future of Executive Search in India: Navigating Leadership Hiring in 2026',
    excerpt: 'How Indian enterprises and GCCs are adapting executive recruitment strategies to secure top leadership talent amidst rapid tech integration.',
    category: 'Executive Search',
    readTime: '6 min read',
    author: { name: 'Catalyst Talent Advisory', role: 'Executive Practice' },
    publishedAt: '2026-07-15T00:00:00Z',
    content: `Executive recruitment in India has undergone a seismic shift. As Global Capability Centers (GCCs) expand rapidly across Tier 1 and Tier 2 hubs like Dewas, Indore, Pune, and Bangalore, the demand for visionary leadership with international experience has skyrocketed.`
  },
  {
    slug: 'mastering-volume-hiring-without-sacrificing-quality',
    title: 'Mastering Volume Hiring in Manufacturing & Tech: Speed vs Quality',
    excerpt: 'Proven strategies for scaling workforce recruitment by 100+ positions per month while maintaining strict candidate quality.',
    category: 'Volume Hiring',
    readTime: '5 min read',
    author: { name: 'Operations Advisory', role: 'Catalyst Hiring Solutions' },
    publishedAt: '2026-07-10T00:00:00Z',
    content: `When growing industrial units or customer success centers require 50 to 500 hires within a tight window, standard recruitment channels fail. Volume hiring requires an engineered pipeline.`
  }
];

// Helper Functions
export async function getJobs(): Promise<Job[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('jobs').select('*').order('posted_at', { ascending: false });
      if (!error && data && data.length > 0) {
        return data.map((item: any) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          companyName: item.company_name,
          location: item.location,
          jobType: item.job_type,
          category: item.category,
          experienceLevel: item.experience_level,
          salaryRange: item.salary_range,
          description: item.description,
          requirements: item.requirements || [],
          responsibilities: item.responsibilities || [],
          benefits: item.benefits || [],
          postedAt: item.posted_at,
          isActive: item.is_active,
          featured: item.featured,
          matchScore: item.match_score || 95,
        }));
      }
    } catch (e) {
      // local fallback
    }
  }

  if (typeof window !== 'undefined') {
    const local = localStorage.getItem('catalyst_jobs');
    if (local) {
      try { return JSON.parse(local); } catch (e) {}
    }
  }
  return INITIAL_JOBS;
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const jobs = await getJobs();
  return jobs.find((j) => j.slug === slug || j.id === slug) || null;
}

export async function saveApplication(appData: Omit<Application, 'id' | 'appliedAt' | 'status'>): Promise<{ success: boolean; id: string }> {
  const newId = 'app-' + Date.now();
  const application: Application = {
    ...appData,
    id: newId,
    appliedAt: new Date().toISOString(),
    status: 'Pending',
    atsScore: Math.floor(Math.random() * 15) + 85, // Simulated ATS Score 85-99
  };

  if (supabase) {
    try {
      const { data, error } = await supabase.from('applications').insert({
        job_id: appData.jobId !== 'general' ? appData.jobId : null,
        job_title: appData.jobTitle,
        full_name: appData.fullName,
        email: appData.email,
        phone: appData.phone,
        current_location: appData.currentLocation,
        experience_years: appData.experienceYears,
        resume_file_name: appData.resumeFileName,
        resume_url: appData.resumeUrl || null,
        cover_note: appData.coverNote || null,
      }).select();

      if (!error && data && data.length > 0) return { success: true, id: data[0].id };
    } catch (e) {}
  }

  if (typeof window !== 'undefined') {
    const existing = JSON.parse(localStorage.getItem('catalyst_applications') || '[]');
    existing.unshift(application);
    localStorage.setItem('catalyst_applications', JSON.stringify(existing));
  }

  return { success: true, id: newId };
}

export async function saveEmployerLead(leadData: Omit<EmployerLead, 'id' | 'submittedAt' | 'status'>): Promise<{ success: boolean; id: string }> {
  const newId = 'lead-' + Date.now();
  const lead: EmployerLead = {
    ...leadData,
    id: newId,
    submittedAt: new Date().toISOString(),
    status: 'New',
  };

  if (supabase) {
    try {
      const { data, error } = await supabase.from('employer_leads').insert({
        company_name: leadData.companyName,
        contact_person: leadData.contactPerson,
        email: leadData.email,
        phone: leadData.phone,
        roles_needed: leadData.rolesNeeded,
        team_size: leadData.teamSize || null,
        message: leadData.message || null,
      }).select();

      if (!error && data && data.length > 0) return { success: true, id: data[0].id };
    } catch (e) {}
  }

  if (typeof window !== 'undefined') {
    const existing = JSON.parse(localStorage.getItem('catalyst_leads') || '[]');
    existing.unshift(lead);
    localStorage.setItem('catalyst_leads', JSON.stringify(existing));
  }

  return { success: true, id: newId };
}

export async function getApplications(): Promise<Application[]> {
  if (typeof window !== 'undefined') {
    const local = localStorage.getItem('catalyst_applications');
    if (local) return JSON.parse(local);
  }
  return [
    {
      id: 'app-sample-1',
      jobId: 'job-1',
      jobTitle: 'Senior Full Stack Developer',
      fullName: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      phone: '+91 9876543210',
      currentLocation: 'Bangalore',
      experienceYears: '5',
      resumeFileName: 'Rahul_Sharma_Senior_Fullstack.pdf',
      appliedAt: '2026-07-24T12:00:00Z',
      status: 'Shortlisted',
      atsScore: 94,
    },
    {
      id: 'app-sample-2',
      jobId: 'job-2',
      jobTitle: 'Vice President - Plant Operations',
      fullName: 'Vikramaditya Singh',
      email: 'vikram.singh@industrial.com',
      phone: '+91 9797713791',
      currentLocation: 'Dewas / Indore',
      experienceYears: '12',
      resumeFileName: 'Vikram_Singh_Plant_Operations.pdf',
      appliedAt: '2026-07-24T09:15:00Z',
      status: 'Reviewed',
      atsScore: 97,
    }
  ];
}

export async function getEmployerLeads(): Promise<EmployerLead[]> {
  if (typeof window !== 'undefined') {
    const local = localStorage.getItem('catalyst_leads');
    if (local) return JSON.parse(local);
  }
  return [
    {
      id: 'lead-sample-1',
      companyName: 'Reliance GCC Tech',
      contactPerson: 'Aditi Deshmukh (Talent Director)',
      email: 'aditi.d@reliance.com',
      phone: '+91 9820011223',
      rolesNeeded: '20 Senior Tech Leads (React / Python)',
      teamSize: '20-50 Hires',
      message: 'Looking for turnkey recruitment partner in Bangalore & Pune.',
      submittedAt: '2026-07-24T14:30:00Z',
      status: 'New',
    }
  ];
}

export async function saveJob(job: Partial<Job>): Promise<{ success: boolean; job: Job }> {
  const isNew = !job.id;
  const id = job.id || 'job-' + Date.now();
  const slug = job.slug || (job.title ? job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : 'job-' + Date.now());

  const fullJob: Job = {
    id,
    title: job.title || 'New Position',
    slug,
    companyName: job.companyName || 'Catalyst Partner Client',
    location: job.location || 'Dewas / Remote',
    jobType: job.jobType || 'Full-time',
    category: job.category || 'Engineering',
    experienceLevel: job.experienceLevel || '3-5 Years',
    salaryRange: job.salaryRange || 'As per industry standards',
    description: job.description || '',
    requirements: job.requirements || [],
    responsibilities: job.responsibilities || [],
    benefits: job.benefits || [],
    postedAt: job.postedAt || new Date().toISOString(),
    isActive: job.isActive !== undefined ? job.isActive : true,
    featured: job.featured || false,
    matchScore: job.matchScore || 95,
  };

  if (typeof window !== 'undefined') {
    const currentJobs = await getJobs();
    let updated: Job[];
    if (isNew) {
      updated = [fullJob, ...currentJobs];
    } else {
      updated = currentJobs.map((j) => (j.id === id ? fullJob : j));
    }
    localStorage.setItem('catalyst_jobs', JSON.stringify(updated));
  }

  return { success: true, job: fullJob };
}

export async function deleteJob(id: string): Promise<{ success: boolean }> {
  if (typeof window !== 'undefined') {
    const currentJobs = await getJobs();
    const filtered = currentJobs.filter((j) => j.id !== id);
    localStorage.setItem('catalyst_jobs', JSON.stringify(filtered));
  }
  return { success: true };
}
