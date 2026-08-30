import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';
import JsonLd, { getBreadcrumbSchema } from '@/components/JsonLd';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Catalyst Hiring Solutions Dewas & India',
  description:
    'Get in touch with Catalyst Hiring Solutions headquarters in Dewas, Madhya Pradesh. Phone: +91-9797713791. Email: hr@catalysthiringsolutions.in. Fast recruiter assistance.',
  keywords: [
    'Contact Catalyst Hiring Solutions',
    'Recruitment Agency Contact Dewas',
    'Staffing Agency Madhya Pradesh Phone',
    'Catalyst Hiring Office Address',
    'HR Support Phone Number India',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Catalyst Hiring Solutions | Executive & Staffing Advisory',
    description:
      'Connect directly with our recruitment consultants in Dewas, Madhya Pradesh. Rapid response within 2 hours.',
    url: 'https://www.catalysthiringsolutions.in/contact',
    siteName: 'Catalyst Hiring Solutions',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contact Catalyst Hiring' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Catalyst Hiring Solutions',
    description: 'Get in touch with Catalyst Hiring Solutions team in Dewas & pan-India.',
    images: ['/og-image.jpg'],
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ];

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Catalyst Hiring Solutions',
    url: 'https://www.catalysthiringsolutions.in/contact',
    description: 'Contact details and inquiry form for Catalyst Hiring Solutions recruitment agency.',
    mainEntity: {
      '@id': 'https://www.catalysthiringsolutions.in/#organization',
    },
  };

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 bg-hero-light">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={contactPageSchema} />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-corp-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">Contact</span>
      </nav>

      {/* Header */}
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-corp-600 inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-corp-50 rounded-full border border-corp-200">
          <Sparkles className="w-3.5 h-3.5" /> Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Contact Catalyst Hiring Solutions
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
          Headquartered in Dewas, Madhya Pradesh. Partnering with enterprise leaders and ambitious jobseekers across India.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right Column: Local NAP & Embedded Map */}
        <div className="lg:col-span-5 space-y-8">
          {/* NAP Details */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Headquarters Information</h2>

            <div className="space-y-4 text-xs font-medium">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-corp-50 border border-corp-200 text-corp-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Office Address</h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    Catalyst Hiring Solutions<br />
                    Industrial Area Phase 2, Near AB Road<br />
                    Dewas, Madhya Pradesh 455001, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-corp-50 border border-corp-200 text-corp-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Direct Phone & WhatsApp</h3>
                  <a href="tel:+919797713791" className="text-corp-600 font-bold hover:underline mt-0.5 block">
                    +91 9797713791
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-corp-50 border border-corp-200 text-corp-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Address</h3>
                  <a href="mailto:hr@catalysthiringsolutions.in" className="text-corp-600 font-bold hover:underline mt-0.5 block">
                    hr@catalysthiringsolutions.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-corp-50 border border-corp-200 text-corp-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Business Operating Hours</h3>
                  <p className="text-slate-600 mt-0.5">Monday - Saturday: 9:00 AM - 7:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl h-64 relative bg-slate-100">
            <iframe
              title="Catalyst Hiring Solutions Dewas Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58793.42845610815!2d76.023419!3d22.967597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963174249a5b3a1%3A0x6b306b994f26040!2sDewas%2C%20Madhya%20Pradesh%20455001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
