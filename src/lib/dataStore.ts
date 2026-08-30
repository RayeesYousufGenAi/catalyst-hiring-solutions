import { Job, Application, EmployerLead, BlogPost, CityHub, RecruiterAnalytics } from './types';
import { supabase } from './supabase';

export const INITIAL_JOBS: Job[] = [
  {
    id: 'job-wfh-1',
    title: 'International Non-Voice / Email & Chat Support Executive (Work From Home)',
    slug: 'wfh-international-chat-email-support-executive',
    companyName: 'Global ITES Partner',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: 'Freshers & Experienced (0-2 Years)',
    salaryRange: '₹28,000 - ₹36,000 / Month',
    description: `We are hiring Customer Support Executives for an International Non-Voice Process (100% Work From Home).

Key Highlights:
• Process: International Chat & Email Support
• Work Location: Permanent Remote / Work From Home
• Working Days: 5 Days working with 2 consecutive rotational off
• Equipment: Laptop / Desktop & Headset provided by company
• Wi-Fi Allowance provided monthly

Candidate Profile:
• Excellent written English communication & grammar
• Typing speed minimum 35 WPM with 90% accuracy
• Freshers and experienced candidates both eligible
• Immediate joiners preferred`,
    requirements: [
      'Graduation or Undergraduate in any discipline',
      'Excellent Written English Communication',
      'Typing Speed: 35+ WPM',
      'Stable Broadband Internet Connection at home (Min 50 Mbps)',
      'Availability for rotational shifts'
    ],
    responsibilities: [
      'Handle customer inquiries via live web chat and email tickets',
      'Resolve billing, order tracking, and product queries within SLAs',
      'Maintain first-contact resolution (FCR) and customer satisfaction (CSAT) scores',
      'Document interaction notes accurately in CRM systems'
    ],
    benefits: [
      'Company Provided Laptop',
      'Wi-Fi Reimbursement (₹1,000/mo)',
      'Performance Incentives up to ₹8,000/mo',
      'Health Insurance for Self & Family',
      '5 Days Working'
    ],
    postedAt: '2026-08-30T10:00:00Z',
    isActive: true,
    featured: true,
    matchScore: 98,
  },
  {
    id: 'job-wfh-2',
    title: 'International Voice Customer Support Executive - US Process (WFH)',
    slug: 'wfh-international-voice-customer-support-executive',
    companyName: 'Fortune 500 BPO Partner',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: 'Minimum 1 Year International BPO Experience',
    salaryRange: '₹35,000 - ₹45,000 / Month + Night Allowances',
    description: `Hiring experienced International Voice Support Executives for a prestigious US e-commerce and retail campaign.

Role Details:
• Work Mode: Work From Home (Pan-India)
• Shift: US Rotational Shifts (Night Shifts)
• Shift Allowance: ₹500/night + Overtime perks
• Fast-track virtual interview process (HR -> Voice Assessment -> Ops Round)`,
    requirements: [
      'Minimum 1 Year experience in International Voice Process',
      'Fluent verbal English communication with neutral accent',
      'Active listening and empathetic problem-solving skills',
      'Quiet dedicated workspace at home'
    ],
    responsibilities: [
      'Handle inbound calls from international customers across the US & UK',
      'Troubleshoot order cancellations, returns, refunds, and delivery inquiries',
      'De-escalate challenging customer situations professionally',
      'Ensure compliance with quality and security standards'
    ],
    benefits: [
      'Company Provided System with UPS backup',
      'Night Shift Allowance (₹8,000 - ₹12,000/mo extra)',
      'Medical & Accidental Insurance',
      'Quarterly Performance Bonus'
    ],
    postedAt: '2026-08-29T11:00:00Z',
    isActive: true,
    featured: true,
    matchScore: 96,
  },
  {
    id: 'job-wfh-3',
    title: 'E-Commerce Inbound Customer Care Executive (Work From Home - Freshers Eligible)',
    slug: 'wfh-ecommerce-customer-support-associate-fresher',
    companyName: 'Leading E-Commerce Brand',
    location: 'Work From Home (India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: 'Freshers & 0-1 Year Experience',
    salaryRange: '₹22,000 - ₹28,000 / Month',
    description: `Great opportunity for fresh graduates and customer service aspirants to start a career with a top Indian E-Commerce marketplace.

Process Overview:
• Inbound Voice & Blended Customer Support
• Helping online shoppers with order tracking, returns, replacement, and payment queries
• Comprehensive 15-day paid virtual training provided`,
    requirements: [
      '12th Pass or Any Graduate (Freshers warmly welcome)',
      'Good communication skills in Hindi & basic English',
      'Own Laptop / Desktop (Core i3+, 8GB RAM, Windows 10/11)',
      'Broadband Wi-Fi connection',
      'Customer-centric attitude and patience'
    ],
    responsibilities: [
      'Answer incoming customer calls regarding online orders and deliveries',
      'Assist customers with app navigation and refund statuses',
      'Coordinate with delivery logistics teams for priority dispatches',
      'Maintain average handle time (AHT) within guidelines'
    ],
    benefits: [
      '100% Remote / WFH from any city in India',
      'Paid Virtual Training with full salary',
      'Monthly Internet Allowance (₹800/mo)',
      'Overtime & Festival Bonuses'
    ],
    postedAt: '2026-08-28T09:30:00Z',
    isActive: true,
    featured: true,
    matchScore: 94,
  },
  {
    id: 'job-wfh-4',
    title: 'Fintech Customer Delight Specialist - KYC & Banking Support (WFH)',
    slug: 'wfh-fintech-customer-delight-officer',
    companyName: 'Leading Digital Payments Platform',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: '1-3 Years Experience',
    salaryRange: '₹30,000 - ₹40,000 / Month',
    description: `Join India's fastest-growing fintech ecosystem as a Customer Delight Specialist managing payment gateways, UPI, wallet, and KYC inquiries.

Work Mode: 100% Remote
Days: 5 Days Working
Shifts: Day Rotational Shifts (7 AM - 4 PM / 1 PM - 10 PM)`,
    requirements: [
      '1+ Years experience in Banking, Fintech, or E-wallet customer care',
      'Knowledge of UPI transactions, chargebacks, and basic KYC guidelines',
      'Strong analytical reasoning and problem breakdown capability',
      'Excellent English & Hindi verbal/written skills'
    ],
    responsibilities: [
      'Investigate and resolve failed UPI transactions and wallet balance issues',
      'Assist enterprise merchants and end-users with payment gateway issues',
      'Verify KYC documents and compliance checks',
      'Collaborate with banking reconciliation squads for dispute closures'
    ],
    benefits: [
      'MacBook / High-end Laptop Provided',
      'Internet & Electricity Allowance (₹1,500/mo)',
      'ESOPs / Employee Stock Grant Options',
      'Comprehensive Wellness & Health Package'
    ],
    postedAt: '2026-08-28T14:00:00Z',
    isActive: true,
    featured: true,
    matchScore: 95,
  },
  {
    id: 'job-wfh-5',
    title: 'Technical Support Executive Tier-1 (Work From Home)',
    slug: 'wfh-technical-support-engineer-tier1',
    companyName: 'Cloud & IT Services MNC',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Technical Support',
    experienceLevel: 'Freshers (B.Tech/BCA/B.Sc IT) or 6+ Months Experience',
    salaryRange: '₹32,000 - ₹42,000 / Month',
    description: `Exciting opening for tech enthusiasts! Provide remote technical assistance, VPN setup, email client configuration, and basic SaaS troubleshooting for global business clients.`,
    requirements: [
      'B.Tech / BCA / B.Sc IT / Diploma in CS or 6+ months Tech Support experience',
      'Understanding of Windows/Mac OS, basic networking, DNS, and email protocols (IMAP/POP/SMTP)',
      'Fluent verbal & written English skills',
      'Analytical mindset for step-by-step diagnostic troubleshooting'
    ],
    responsibilities: [
      'Provide L1 technical troubleshooting via chat, email, and remote screen share',
      'Assist users with password resets, software installations, and VPN configurations',
      'Log tickets accurately in Jira / Zendesk and escalate complex L2 bugs',
      'Contribute to internal knowledge base articles'
    ],
    benefits: [
      'High-performance company laptop provided',
      'Free IT certifications (AWS, CompTIA, Microsoft)',
      '5 Days Working with weekend offs',
      'Annual salary appraisal & fast promotions'
    ],
    postedAt: '2026-08-27T10:00:00Z',
    isActive: true,
    featured: false,
    matchScore: 92,
  },
  {
    id: 'job-wfh-6',
    title: 'Travel & Airline Booking Customer Support Specialist (WFH)',
    slug: 'wfh-travel-airline-reservation-support-specialist',
    companyName: 'International Online Travel Agency (OTA)',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: '6 Months - 3 Years Experience in Travel BPO',
    salaryRange: '₹30,000 - ₹40,000 / Month + Booking Incentives',
    description: `Leading Global Travel Agency hiring Customer Service Agents to assist travelers worldwide with flight re-scheduling, cancellations, hotel bookings, and travel insurance.`,
    requirements: [
      '6+ Months experience in Travel BPO or GDS knowledge (Amadeus / Sabre / Galileo)',
      'Excellent verbal English communication',
      'Ability to handle stressful flight cancellation and reschedule situations with empathy',
      'Rotational shift availability'
    ],
    responsibilities: [
      'Process flight cancellations, schedule changes, and ticket re-issuances',
      'Assist international passengers with baggage allowances and visa guidelines',
      'Handle hotel reservation modifications and refund calculations',
      'Achieve high customer satisfaction (CSAT) ratings'
    ],
    benefits: [
      'Discounts on personal flight and hotel bookings worldwide',
      'Company hardware provided at your doorstep',
      'Monthly performance incentive up to ₹10,000',
      'Medical insurance coverage'
    ],
    postedAt: '2026-08-27T15:30:00Z',
    isActive: true,
    featured: false,
    matchScore: 91,
  },
  {
    id: 'job-wfh-7',
    title: 'US Healthcare Inbound Patient Coordinator (Work From Home)',
    slug: 'wfh-us-healthcare-inbound-patient-support',
    companyName: 'Healthcare RCM & BPM Leader',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: '1-3 Years US Healthcare Voice Experience',
    salaryRange: '₹32,000 - ₹44,000 / Month',
    description: `Support American patients and healthcare providers with appointment scheduling, insurance verification, doctor inquiries, and prescription refill statuses.`,
    requirements: [
      '1+ Years experience in US Healthcare Voice Support / Insurance verification',
      'Knowledge of HIPAA compliance and medical terminologies',
      'Warm, compassionate English speaking tone with clear articulation',
      'Fixed US Night Shifts (Monday to Friday, Fixed Weekend Off)'
    ],
    responsibilities: [
      'Answer patient calls and schedule medical clinic appointments',
      'Verify primary and secondary health insurance coverage',
      'Coordinate prescription refill requests with registered pharmacies',
      'Maintain 100% HIPAA privacy compliance'
    ],
    benefits: [
      'Fixed Saturday & Sunday Off',
      'Company Provided Desktop & Noise Cancelling Headset',
      'Dedicated Night Allowance & Performance Perks',
      'Family Healthcare Insurance'
    ],
    postedAt: '2026-08-26T12:00:00Z',
    isActive: true,
    featured: false,
    matchScore: 93,
  },
  {
    id: 'job-wfh-8',
    title: 'EdTech Student Support & Academic Counselor (Work From Home)',
    slug: 'wfh-edtech-student-support-counselor',
    companyName: 'Premier Online Higher Education Platform',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: 'Freshers & 0-2 Years Experience',
    salaryRange: '₹25,000 - ₹34,000 / Month + Incentives',
    description: `Guide enrolled learners and working professionals through their online degree and certification journeys. Assist with LMS access, assignment submissions, and exam schedules.`,
    requirements: [
      'Graduate in any stream (B.A, B.Com, B.Sc, BBA, B.Tech)',
      'Fluent spoken English & Hindi',
      'Good interpersonal and motivational communication skills',
      'Day shifts: 10:00 AM - 7:00 PM'
    ],
    responsibilities: [
      'Act as dedicated student success partner for assigned student batches',
      'Resolve learning platform (LMS) login and lecture playback queries',
      'Send timely reminders for assignment deadlines and exam portals',
      'Conduct check-in calls to ensure student course completion'
    ],
    benefits: [
      'Day Shift Only (No Night Shifts)',
      'Free Access to certified online courses and Master degrees',
      'Monthly broadband allowance',
      'Quarterly performance bonuses'
    ],
    postedAt: '2026-08-26T16:00:00Z',
    isActive: true,
    featured: false,
    matchScore: 90,
  },
  {
    id: 'job-wfh-9',
    title: 'SaaS Product Customer Success & Support Specialist (Remote)',
    slug: 'wfh-saas-b2b-customer-success-associate',
    companyName: 'B2B SaaS Unicorn',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: '1-4 Years Experience',
    salaryRange: '₹38,000 - ₹52,000 / Month',
    description: `Provide white-glove technical customer success and product support to enterprise business clients using our cloud collaboration software.`,
    requirements: [
      '1+ Years experience in B2B Customer Success or SaaS Support',
      'Familiarity with CRM tools (HubSpot, Salesforce, Zendesk)',
      'Strong written communication for composing professional email summaries',
      'Proactive problem-solver with customer-first orientation'
    ],
    responsibilities: [
      'Onboard new enterprise accounts and conduct product walkthroughs',
      'Troubleshoot integrations (Zapier, Slack, Google Workspace)',
      'Identify feature improvement opportunities from customer feedback',
      'Drive customer retention and product adoption metrics'
    ],
    benefits: [
      'MacBook Air provided',
      '₹20,000 Home Office Setup Allowance (One-time)',
      'Flexible working hours & unlimited paid time off (PTO)',
      'Annual international team retreats'
    ],
    postedAt: '2026-08-25T11:00:00Z',
    isActive: true,
    featured: true,
    matchScore: 97,
  },
  {
    id: 'job-wfh-10',
    title: 'Bilingual Customer Care Associate - Hindi & English (WFH Pan-India)',
    slug: 'wfh-bilingual-hindi-english-customer-care-fresher',
    companyName: 'Top Telecom & Digital Services Provider',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: 'Freshers & Experienced (0-1 Year)',
    salaryRange: '₹20,000 - ₹26,000 / Month',
    description: `Urgent hiring of 50+ Customer Care Executives for domestic telecommunications and broadband support. Open to freshers across India.`,
    requirements: [
      '12th Pass / Diploma / Any Graduate',
      'Fluent spoken Hindi with decent English understanding',
      'Personal Android Smartphone & Laptop or Desktop with Windows',
      'Ready to start immediately after 5 days online training'
    ],
    responsibilities: [
      'Handle inbound customer calls regarding SIM recharge, plan changes, and network queries',
      'Provide accurate plan upgrade information and promotional offers',
      'Log complaints into the customer database with correct status codes',
      'Deliver polite and respectful customer service'
    ],
    benefits: [
      'Immediate offer letter within 24 hours of selection',
      'Work from your home town anywhere in India',
      'Weekly performance incentives',
      'Full training stipend provided'
    ],
    postedAt: '2026-08-25T14:30:00Z',
    isActive: true,
    featured: false,
    matchScore: 89,
  },
  {
    id: 'job-wfh-11',
    title: 'Regional Customer Support - Tamil / Telugu / Kannada (WFH)',
    slug: 'wfh-bilingual-south-indian-languages-customer-support',
    companyName: 'National Banking & Insurance Services',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: 'Freshers & Experienced (0-2 Years)',
    salaryRange: '₹24,000 - ₹32,000 / Month',
    description: `We are hiring regional language customer support specialists. Candidates must be fluent in English + at least one South Indian regional language (Tamil, Telugu, Kannada, or Malayalam).`,
    requirements: [
      'Fluent spoken proficiency in Tamil, Telugu, Kannada, or Malayalam + English',
      '12th pass or Graduate in any field',
      'Good listening and polite customer handling demeanor',
      'Dedicated home workspace with high speed internet'
    ],
    responsibilities: [
      'Assist regional customers with banking services, loans, and policy inquiries',
      'Explain terms and conditions clearly in customer’s preferred language',
      'Update customer account records and contact details in CRM',
      'Ensure high resolution rates on first call'
    ],
    benefits: [
      'Permanent Work From Home',
      'Regional Language Skill Allowance (₹3,000/mo extra)',
      'Standard 6 Days working with fixed Sunday off',
      'Health insurance'
    ],
    postedAt: '2026-08-24T10:00:00Z',
    isActive: true,
    featured: false,
    matchScore: 92,
  },
  {
    id: 'job-wfh-12',
    title: 'Senior Escalations & Quality Specialist - Customer Support (WFH)',
    slug: 'wfh-senior-escalations-quality-lead-customer-support',
    companyName: 'Global Customer Experience Services',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: '3-6 Years Experience in Escalation Handling / QA',
    salaryRange: '₹42,000 - ₹58,000 / Month',
    description: `Looking for seasoned Senior Escalation Specialists to manage Tier-2 customer dispute resolutions, executive escalations, and perform call quality audits.`,
    requirements: [
      '3+ Years in BPO / Customer Service with minimum 1 year in Escalation or QA role',
      'Expertise in conflict management, root cause analysis, and customer retention',
      'Deep understanding of CSAT, NPS, AHT, and FCR quality metrics',
      'Exceptional verbal and written negotiation skills'
    ],
    responsibilities: [
      'Take ownership of escalated customer grievances received via CEO desk and social media',
      'Conduct thorough investigations and negotiate fair settlement resolutions',
      'Audit frontline agent calls and deliver structured coaching feedback',
      'Report repeat defect patterns to operations leadership'
    ],
    benefits: [
      'Leadership career track to Assistant Manager / QA Lead',
      'Company laptop and ergonomic chair allowance',
      'Annual bonus up to 15% of CTC',
      'Comprehensive family medical cover'
    ],
    postedAt: '2026-08-24T15:00:00Z',
    isActive: true,
    featured: true,
    matchScore: 95,
  },
  {
    id: 'job-wfh-13',
    title: 'Customer Support Team Leader - Remote Operations (WFH)',
    slug: 'wfh-customer-support-team-lead-remote',
    companyName: 'Leading Multi-Channel BPM Partner',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Management',
    experienceLevel: '4-8 Years Experience (Min 1.5 Years as Team Leader)',
    salaryRange: '₹50,000 - ₹68,000 / Month',
    description: `Lead and inspire a remote team of 18-22 customer support executives. Monitor real-time shrinkage, SLA delivery, quality scores, and agent motivation.`,
    requirements: [
      'Minimum 1.5 Years documented experience as Team Leader in Voice / Non-Voice BPO',
      'Strong team handling, roster management, and performance coaching ability',
      'Proficiency in Excel / Google Sheets for SLA and attrition reporting',
      'Experience managing distributed work-from-home teams'
    ],
    responsibilities: [
      'Supervise daily floor operations, roster adherence, and call queue management',
      'Conduct weekly 1-on-1 performance coaching sessions with team members',
      'Drive team CSAT, quality audit scores, and minimize team attrition',
      'Present weekly performance dashboards to client operations heads'
    ],
    benefits: [
      'Senior Leadership Growth Opportunity',
      'Laptop + 24/7 Power Backup Reimbursement',
      'Monthly Team Performance Incentives',
      'Executive Health & Wellness Plan'
    ],
    postedAt: '2026-08-23T11:00:00Z',
    isActive: true,
    featured: true,
    matchScore: 98,
  },
  {
    id: 'job-wfh-14',
    title: 'Customer Retention & Loyalty Associate (Work From Home)',
    slug: 'wfh-customer-retention-loyalty-specialist',
    companyName: 'Subscription & OTT Streaming Giant',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: '1-3 Years Experience',
    salaryRange: '₹28,000 - ₹38,000 / Month + Retention Incentives',
    description: `Connect with users requesting subscription cancellations. Understand customer pain points, offer customized value plans, and retain subscribers.`,
    requirements: [
      '1+ Years experience in Outbound / Inbound Retention or Customer Success',
      'Persuasive negotiation and objection-handling capabilities',
      'Target-driven mindset with high emotional intelligence',
      'Fluent English and Hindi communication'
    ],
    responsibilities: [
      'Engage with churn-risk customers through outbound and inbound touchpoints',
      'Identify underlying dissatisfaction factors and pitch suitable discounted renewal plans',
      'Achieve monthly subscriber retention targets (Save Rate > 35%)',
      'Log customer feedback into product insights database'
    ],
    benefits: [
      'Lucrative uncapped retention incentives (earn up to ₹25,000 extra/month)',
      'Free premium subscription packages',
      '5 Days working week',
      'Full WFH equipment package'
    ],
    postedAt: '2026-08-23T14:00:00Z',
    isActive: true,
    featured: false,
    matchScore: 91,
  },
  {
    id: 'job-wfh-15',
    title: 'Live Chat & WhatsApp Customer Support Specialist (WFH)',
    slug: 'wfh-live-chat-whatsapp-support-representative',
    companyName: 'D2C Consumer Brands Hub',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: 'Freshers & 0-2 Years Experience',
    salaryRange: '₹22,000 - ₹30,000 / Month',
    description: `Interact with online shoppers directly via official WhatsApp and live website chat widgets. Handle product recommendations, discount codes, and order modifications.`,
    requirements: [
      'Typing speed of 40+ WPM with high grammatical accuracy',
      'Ability to multitask and manage 3-4 simultaneous chat conversations',
      'Pleasant, enthusiastic texting tone with proper emoji and template usage',
      'Basic knowledge of Shopify or WooCommerce backend is an advantage'
    ],
    responsibilities: [
      'Respond to live customer queries on WhatsApp and website chat within 45 seconds',
      'Recommend matching apparel/beauty products to increase cart value',
      'Process exchange and return requests swiftly in ERP systems',
      'Collect feedback and reviews from happy shoppers'
    ],
    benefits: [
      '100% Non-Voice Process (No Phone Calls)',
      'Free product hampers every quarter',
      'Internet allowance',
      'Comfortable rotational shifts'
    ],
    postedAt: '2026-08-22T10:00:00Z',
    isActive: true,
    featured: false,
    matchScore: 93,
  },
  {
    id: 'job-wfh-16',
    title: 'Banking & Credit Card Inbound Customer Representative (Remote)',
    slug: 'wfh-banking-credit-card-inbound-support',
    companyName: 'Leading Private Sector Bank Partner',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: '6 Months - 3 Years Banking Experience',
    salaryRange: '₹26,000 - ₹35,000 / Month',
    description: `Support premium credit card holders and banking customers with card activations, reward points redemption, billing inquiries, and international usage enabling.`,
    requirements: [
      'Graduate mandatory (B.Com, BBA, B.Sc, B.A, etc.)',
      '6+ Months experience in Banking / Credit Cards customer service',
      'High integrity with zero history of security violations',
      'Fluent Hindi and English communication'
    ],
    responsibilities: [
      'Assist cardholders with statement inquiries, EMI conversion, and limit increase requests',
      'Block lost/stolen cards instantly to prevent fraudulent transactions',
      'Explain card rewards and lounge access benefits to customers',
      'Adhere strictly to RBI security protocols during call verification'
    ],
    benefits: [
      'Stable long-term career with top Indian private bank client',
      'Fixed day shifts for female candidates',
      'PF, ESI, and Medical Coverage',
      'Monthly incentives'
    ],
    postedAt: '2026-08-22T13:00:00Z',
    isActive: true,
    featured: false,
    matchScore: 92,
  },
  {
    id: 'job-wfh-17',
    title: 'Food Delivery & Quick Commerce Partner Support Executive (WFH)',
    slug: 'wfh-quick-commerce-food-delivery-partner-support',
    companyName: 'Leading Hyperlocal Delivery Unicorn',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: 'Freshers & Experienced (0-1 Year)',
    salaryRange: '₹20,000 - ₹26,000 / Month',
    description: `Help resolve real-time order issues, delivery partner routing queries, and merchant store inquiries for India's largest 10-minute grocery and food delivery app.`,
    requirements: [
      '12th Pass or Any Graduate (Freshers welcome)',
      'Quick decision making under fast-paced live situations',
      'Fluent spoken Hindi and conversational English',
      'Willingness to work in rotational evening/night shifts'
    ],
    responsibilities: [
      'Resolve live order delay and item missing queries from customers',
      'Assist delivery riders with location navigation and payout questions',
      'Liaise with merchant dark stores for instant item replacements',
      'Maintain average resolution time under 2 minutes per ticket'
    ],
    benefits: [
      'Work from home anywhere in India',
      'Monthly app coupons and food discounts',
      'Weekly performance incentives',
      'Rapid internal promotion to Quality Coach within 9 months'
    ],
    postedAt: '2026-08-21T09:00:00Z',
    isActive: true,
    featured: false,
    matchScore: 88,
  },
  {
    id: 'job-wfh-18',
    title: 'Logistics & Supply Chain Tracking Executive (Work From Home)',
    slug: 'wfh-logistics-supply-chain-tracking-executive',
    companyName: 'Global Freight & Express Courier MNC',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Operations',
    experienceLevel: 'Freshers & 0-2 Years Experience',
    salaryRange: '₹23,000 - ₹29,000 / Month',
    description: `Track international parcel movements, handle customs clearance updates, and answer recipient shipment queries across India and Southeast Asia.`,
    requirements: [
      'Graduate in any discipline (B.Com / BBA / Logistics preferred)',
      'Good typing skills and basic Excel proficiency',
      'Clear, polite phone and email etiquette',
      'Ability to coordinate between courier hubs and customers'
    ],
    responsibilities: [
      'Track stranded express packages and arrange re-attempted deliveries',
      'Communicate customs documentation requirements to international recipients',
      'Update shipping tracking statuses in internal ERP software',
      'Handle lost shipment claim requests promptly'
    ],
    benefits: [
      'Full work from home flexibility',
      'Comprehensive on-the-job training in international supply chain',
      'Overtime allowance for weekend shifts',
      'Annual bonus'
    ],
    postedAt: '2026-08-21T14:00:00Z',
    isActive: true,
    featured: false,
    matchScore: 90,
  },
  {
    id: 'job-wfh-19',
    title: 'Broadband & Wi-Fi Technical Support Associate (WFH)',
    slug: 'wfh-broadband-telecom-technical-support-associate',
    companyName: 'National Fiber Broadband Network',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Technical Support',
    experienceLevel: 'Freshers & 0-2 Years (IT / Electronics / BCA / Diploma)',
    salaryRange: '₹24,000 - ₹32,000 / Month',
    description: `Troubleshoot home fiber broadband, Wi-Fi router configurations, slow internet complaints, and IPTV setup for residential and corporate subscribers remotely.`,
    requirements: [
      'Diploma / BCA / B.Sc / B.Tech or 6+ months experience in ISP / Telecom support',
      'Basic knowledge of IP addresses, Gateway, DNS, and Router admin panels',
      'Good communication in Hindi & English',
      'Strong logical step-by-step diagnostic skills'
    ],
    responsibilities: [
      'Guide subscribers through router restart, channel switching, and speed tests',
      'Diagnose fiber optic cable link status via remote line diagnostic tools',
      'Book on-site field technician visits for broken fiber lines',
      'Verify resolution with customer before closing trouble tickets'
    ],
    benefits: [
      'Free 300 Mbps Fiber Internet connection provided at your home',
      'Shift allowance for evening shifts',
      'Technical certifications sponsorship',
      'Full health insurance coverage'
    ],
    postedAt: '2026-08-20T10:00:00Z',
    isActive: true,
    featured: false,
    matchScore: 91,
  },
  {
    id: 'job-wfh-20',
    title: 'Insurance Claims Customer Service Representative (Work From Home)',
    slug: 'wfh-insurance-claims-customer-service-executive',
    companyName: 'Leading General & Health Insurance Company',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: '1-3 Years Experience in Insurance Domain',
    salaryRange: '₹28,000 - ₹37,000 / Month',
    description: `Assist policyholders with cashless hospital claims, motor vehicle repair reimbursements, document upload assistance, and claim settlement status tracking.`,
    requirements: [
      'Graduate mandatory with 1+ years experience in Health/Motor Insurance customer care',
      'Knowledge of cashless claims process, TPA approvals, and deductibles',
      'Empathic communication when dealing with hospitalized patient families',
      'Proficiency in Hindi and English'
    ],
    responsibilities: [
      'Guide policyholders on required hospital/garage documents for claim processing',
      'Coordinate with Third Party Administrators (TPA) for cashless pre-authorizations',
      'Explain claim settlement deductions clearly and transparently to customers',
      'Maintain strict turnaround times on claim query resolutions'
    ],
    benefits: [
      '100% Remote / WFH from anywhere in India',
      'Fixed Sunday Off + Alternate Saturday Off',
      'Comprehensive Group Health Insurance (₹5 Lakhs)',
      'Gratuity and PF benefits'
    ],
    postedAt: '2026-08-20T15:00:00Z',
    isActive: true,
    featured: false,
    matchScore: 93,
  },
  {
    id: 'job-wfh-21',
    title: 'Social Media & Brand Reputation Support Executive (WFH)',
    slug: 'wfh-social-media-community-support-specialist',
    companyName: 'Digital Agency & Brand Management',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: 'Freshers & 0-2 Years Experience',
    salaryRange: '₹25,000 - ₹34,000 / Month',
    description: `Monitor and respond to customer tweets, Facebook comments, Instagram DMs, and Google Play Store reviews for top lifestyle and tech brands.`,
    requirements: [
      'Excellent creative English writing skills with trendy, polite tone',
      'Active social media user familiar with Twitter/X, Instagram, and Reddit',
      'Ability to calm unhappy customers publicly and transition to private DM resolutions',
      'Fast response time under 10 minutes'
    ],
    responsibilities: [
      'Monitor brand mentions using social listening tools (Sprout Social / Hootsuite)',
      'Acknowledge and resolve public grievances before they escalate into PR crises',
      'Engage with positive community comments and user-generated content',
      'Tag product issues and bug reports for software development teams'
    ],
    benefits: [
      'Creative, fun non-voice role',
      'Company provided laptop and internet allowance',
      'Flexible rotational shifts',
      'Performance incentives'
    ],
    postedAt: '2026-08-19T11:00:00Z',
    isActive: true,
    featured: true,
    matchScore: 94,
  },
  {
    id: 'job-wfh-22',
    title: 'US Night Shift Customer Care Associate - Permanent Remote (WFH)',
    slug: 'wfh-us-night-shift-customer-care-associate',
    companyName: 'Global Customer Experience Services',
    location: 'Work From Home (Pan-India)',
    jobType: 'Full-time',
    category: 'Customer Support',
    experienceLevel: '1-3 Years Experience in US Process',
    salaryRange: '₹36,000 - ₹46,000 / Month + High Night Allowances',
    description: `Dedicated night-shift role for energetic professionals. Support US retail and banking clients from the comfort of your home during US business hours.`,
    requirements: [
      '1+ Years of international voice support experience (US or UK campaign)',
      'Excellent verbal fluency in English with neutral accent',
      'Comfortable with permanent night shift timings (6:30 PM - 3:30 AM / 9:30 PM - 6:30 AM IST)',
      'Uninterrupted high-speed Wi-Fi and power backup at home'
    ],
    responsibilities: [
      'Answer incoming customer calls and provide first-class service',
      'Manage order modifications, billing inquiries, and service renewals',
      'Maintain high call quality ratings (>90%) and low handle time',
      'Complete end-of-shift handover notes for day team leads'
    ],
    benefits: [
      'Highest Night Shift Allowances in Industry (up to ₹12,000/mo extra)',
      'Doorstep Delivery of Premium PC Setup with 2 Monitors & Headset',
      '5 Days Working (Fixed Saturday & Sunday Off)',
      'Free annual health checkup'
    ],
    postedAt: '2026-08-19T16:00:00Z',
    isActive: true,
    featured: true,
    matchScore: 96,
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
    author: { name: 'Catalyst Operations Squad', role: 'Volume Staffing' },
    publishedAt: '2026-07-18T00:00:00Z',
    content: `Volume recruitment drives are high-stakes operations. Sourcing 100 to 500 candidates simultaneously requires structured pipeline management and automated filtering.`
  }
];

// Helper Functions
export async function getJobs(): Promise<Job[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('is_active', true)
        .order('posted_at', { ascending: false });

      if (!error && data && data.length > 0) {
        return data.map((j: any) => ({
          id: j.id,
          title: j.title,
          slug: j.slug,
          companyName: j.company_name,
          location: j.location,
          jobType: j.job_type,
          category: j.category,
          experienceLevel: j.experience_level,
          salaryRange: j.salary_range,
          description: j.description,
          requirements: j.requirements || [],
          responsibilities: j.responsibilities || [],
          benefits: j.benefits || [],
          postedAt: j.posted_at,
          isActive: j.is_active,
          featured: j.featured,
        }));
      }
    } catch (e) {}
  }

  if (typeof window !== 'undefined') {
    const local = localStorage.getItem('catalyst_jobs');
    if (local) return JSON.parse(local);
  }

  return INITIAL_JOBS;
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const jobs = await getJobs();
  return jobs.find((j) => j.slug === slug) || null;
}

export async function saveApplication(appData: {
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
}): Promise<{ success: boolean; id: string }> {
  const newId = 'app-' + Date.now();
  const application: Application = {
    ...appData,
    id: newId,
    appliedAt: new Date().toISOString(),
    status: 'Pending',
    atsScore: 92,
  };

  if (supabase) {
    try {
      const { data, error } = await supabase.from('applications').insert({
        job_id: appData.jobId !== 'general' && appData.jobId.length === 36 ? appData.jobId : null,
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
      jobId: 'job-wfh-1',
      jobTitle: 'International Non-Voice / Email & Chat Support Executive (Work From Home)',
      fullName: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      phone: '+91 9876543210',
      currentLocation: 'Delhi NCR',
      experienceYears: '2',
      resumeFileName: 'Rahul_Sharma_Customer_Support.pdf',
      appliedAt: '2026-08-30T12:00:00Z',
      status: 'Shortlisted',
      atsScore: 94,
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
      companyName: 'Amazon / Tech Support Client',
      contactPerson: 'Aditi Deshmukh (Talent Director)',
      email: 'aditi.d@client.com',
      phone: '+91 9820011223',
      rolesNeeded: '50 Customer Support Executives (WFH)',
      teamSize: '20-100+ Hires',
      message: 'Looking for urgent bulk customer support hiring with immediate onboarding.',
      submittedAt: '2026-08-30T14:30:00Z',
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
    location: job.location || 'Work From Home (Pan-India)',
    jobType: job.jobType || 'Full-time',
    category: job.category || 'Customer Support',
    experienceLevel: job.experienceLevel || 'Freshers / Experienced',
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
