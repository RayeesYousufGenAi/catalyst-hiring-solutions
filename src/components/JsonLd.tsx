import React from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.catalysthiringsolutions.in/#organization',
    name: 'Catalyst Hiring Solutions',
    alternateName: ['Catalyst Hiring', 'Catalyst Recruitment'],
    url: 'https://www.catalysthiringsolutions.in',
    logo: 'https://www.catalysthiringsolutions.in/logo.png',
    image: 'https://www.catalysthiringsolutions.in/og-image.jpg',
    description:
      'Premier recruitment agency & executive search consultancy in Dewas, Madhya Pradesh, serving 500+ corporate clients pan-India with a pre-vetted database of 100,000+ candidates.',
    email: 'hr@catalysthiringsolutions.in',
    telephone: '+91-9797713791',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Industrial Area Phase 2, Near AB Road',
      addressLocality: 'Dewas',
      addressRegion: 'Madhya Pradesh',
      postalCode: '455001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.9676,
      longitude: 76.0534,
    },
    sameAs: [
      'https://www.linkedin.com/company/catalysthiringsolutions',
      'https://wa.me/919797713791',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9797713791',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-9797713791',
        contactType: 'recruitment support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.catalysthiringsolutions.in/#website',
    url: 'https://www.catalysthiringsolutions.in',
    name: 'Catalyst Hiring Solutions',
    publisher: {
      '@id': 'https://www.catalysthiringsolutions.in/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.catalysthiringsolutions.in/careers?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EmploymentAgency',
    '@id': 'https://www.catalysthiringsolutions.in/#localbusiness',
    name: 'Catalyst Hiring Solutions',
    image: 'https://www.catalysthiringsolutions.in/og-image.jpg',
    url: 'https://www.catalysthiringsolutions.in',
    telephone: '+919797713791',
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Industrial Area Phase 2, Near AB Road',
      addressLocality: 'Dewas',
      addressRegion: 'Madhya Pradesh',
      postalCode: '455001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.9676,
      longitude: 76.0534,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    areaServed: [
      'Dewas',
      'Indore',
      'Bhopal',
      'Delhi NCR',
      'Gurugram',
      'Noida',
      'Bangalore',
      'Mumbai',
      'Pune',
      'Hyderabad',
      'Chennai',
      'India',
    ],
  };
}

export function getCityLocalBusinessSchema(city: {
  cityName: string;
  state: string;
  slug: string;
  description: string;
  coordinates?: { lat: number; lng: number };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EmploymentAgency',
    name: `Catalyst Hiring Solutions - ${city.cityName} Recruitment Hub`,
    description: city.description,
    url: `https://www.catalysthiringsolutions.in/${city.slug}`,
    telephone: '+919797713791',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.cityName,
      addressRegion: city.state,
      addressCountry: 'IN',
    },
    parentOrganization: {
      '@id': 'https://www.catalysthiringsolutions.in/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: city.cityName,
    },
  };
}

export function getJobPostingSchema(job: any) {
  const postedDate = job.postedAt ? new Date(job.postedAt).toISOString() : new Date().toISOString();
  const validThroughDate = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString();

  let employmentTypeFormatted = 'FULL_TIME';
  if (job.jobType?.toLowerCase().includes('contract')) employmentTypeFormatted = 'CONTRACTOR';
  else if (job.jobType?.toLowerCase().includes('part')) employmentTypeFormatted = 'PART_TIME';
  else if (job.jobType?.toLowerCase().includes('intern')) employmentTypeFormatted = 'INTERN';

  const isRemote = job.jobType?.toLowerCase().includes('remote') || job.location?.toLowerCase().includes('remote');

  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: 'Catalyst Hiring Solutions',
      value: job.id || job.slug,
    },
    datePosted: postedDate,
    validThrough: validThroughDate,
    employmentType: employmentTypeFormatted,
    hiringOrganization: {
      '@type': 'Organization',
      name: job.companyName || 'Catalyst Hiring Solutions Client',
      sameAs: 'https://www.catalysthiringsolutions.in',
      logo: 'https://www.catalysthiringsolutions.in/logo.png',
    },
    jobLocation: isRemote
      ? undefined
      : {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: job.location || 'India',
            addressCountry: 'IN',
          },
        },
    jobLocationType: isRemote ? 'TELECOMMUTE' : undefined,
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'India',
    },
    baseSalary: job.salaryRange
      ? {
          '@type': 'MonetaryAmount',
          currency: 'INR',
          value: {
            '@type': 'QuantitativeValue',
            value: job.salaryRange,
            unitText: 'YEAR',
          },
        }
      : undefined,
    experienceRequirements: job.experienceLevel
      ? {
          '@type': 'OccupationalExperienceRequirements',
          monthsOfExperience: 12,
        }
      : undefined,
    occupationalCategory: job.category || 'Recruitment',
    directApply: true,
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://www.catalysthiringsolutions.in${item.url}`,
    })),
  };
}

export function getArticleSchema(post: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'Catalyst Hiring Editorial Team',
      jobTitle: post.author?.role || 'Talent Acquisition Expert',
    },
    publisher: {
      '@id': 'https://www.catalysthiringsolutions.in/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.catalysthiringsolutions.in/blog/${post.slug}`,
    },
    articleSection: post.category,
    wordCount: post.content ? post.content.split(/\s+/).length : 500,
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Recruitment & Executive Search Services',
    provider: {
      '@id': 'https://www.catalysthiringsolutions.in/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Recruitment Solutions Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Executive & C-Suite Search',
            description: 'Retained executive search for CXO, Director, and VP leadership mandates.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technology & GCC Hiring',
            description: 'Specialized hiring for AI, Cloud, Cybersecurity, and IT engineering centers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Volume & BPO Recruitment',
            description: 'Turnkey bulk hiring for customer support, tele-sales, and operations with rapid 21-day turnaround.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Industrial & Manufacturing Staffing',
            description: 'Plant management, operations, quality assurance, and engineering hiring across central India.',
          },
        },
      ],
    },
  };
}
