export interface Job {
  id: string;
  title: string;
  slug: string;
  companyName: string;
  location: string;
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Remote' | 'Hybrid';
  category: 'Customer Support' | 'Engineering' | 'Management' | 'Sales & Marketing' | 'Operations' | 'HR & Admin' | 'Finance' | string;
  experienceLevel: string;
  salaryRange?: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits?: string[];
  postedAt: string;
  isActive: boolean;
  featured?: boolean;
  matchScore?: number; // AI Match percentage (e.g. 98%)
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  currentLocation: string;
  experienceYears: string;
  resumeFileName: string;
  resumeUrl?: string;
  coverNote?: string;
  appliedAt: string;
  status: 'Pending' | 'Reviewed' | 'Shortlisted' | 'Rejected';
  atsScore?: number;
}

export interface EmployerLead {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  rolesNeeded: string;
  teamSize?: string;
  message?: string;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Closed';
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
}

export interface CityHub {
  slug: string;
  cityName: string;
  state: string;
  heroHeadline: string;
  description: string;
  activeCandidates: number;
  partnerCompanies: number;
  keyIndustries: string[];
  topRoles: string[];
  officeAddress?: string;
}

export interface RecruiterAnalytics {
  totalVisitors: number;
  totalApplications: number;
  activeEmployerLeads: number;
  liveJobsCount: number;
  conversionRate: number;
  topCities: { city: string; count: number }[];
}
