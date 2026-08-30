import React from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Phone, Mail, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 relative overflow-hidden text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand & Local SEO NAP */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-display text-xl tracking-tight text-navy-950">Catalyst</span>
                <span className="text-[9px] uppercase tracking-[0.18em] text-navy-400 font-semibold block -mt-0.5">
                  Hiring Solutions
                </span>
              </div>
            </Link>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              India's trusted recruitment consultancy for Executive Search, Volume Hiring, Tech GCCs, and HR Advisory. Serving 500+ enterprise clients across India from our Dewas, MP headquarters.
            </p>

            <div className="space-y-2 pt-2 text-slate-700 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-corp-600 shrink-0 mt-0.5" />
                <span>Catalyst Hiring Solutions, Dewas Industrial Hub, Dewas, Madhya Pradesh 455001, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-corp-600 shrink-0" />
                <a href="tel:+919797713791" className="hover:text-corp-600 transition-colors">+91 9797713791</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-corp-600 shrink-0" />
                <a href="mailto:hr@catalysthiring.com" className="hover:text-corp-600 transition-colors">hr@catalysthiring.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: Services Sitemap */}
          <div className="space-y-3">
            <h4 className="text-slate-900 text-xs font-bold tracking-wider uppercase">Practices & Services</h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><Link href="/services#executive-search" className="hover:text-corp-600 transition-colors flex items-center gap-1">Executive Search <ArrowUpRight className="w-3 h-3 text-slate-400" /></Link></li>
              <li><Link href="/services#volume-hiring" className="hover:text-corp-600 transition-colors flex items-center gap-1">Volume & Mass Hiring <ArrowUpRight className="w-3 h-3 text-slate-400" /></Link></li>
              <li><Link href="/services#tech-recruitment" className="hover:text-corp-600 transition-colors flex items-center gap-1">Tech & GCC Hiring <ArrowUpRight className="w-3 h-3 text-slate-400" /></Link></li>
              <li><Link href="/services#hr-consulting" className="hover:text-corp-600 transition-colors flex items-center gap-1">HR Advisory Services <ArrowUpRight className="w-3 h-3 text-slate-400" /></Link></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-slate-900 text-xs font-bold tracking-wider uppercase">Platform & Tools</h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><Link href="/careers" className="hover:text-corp-600 transition-colors">Current Openings</Link></li>
              <li><Link href="/candidate" className="hover:text-corp-600 transition-colors text-corp-600 font-bold flex items-center gap-1"><Sparkles className="w-3 h-3" /> AI Resume ATS Checker</Link></li>
              <li><Link href="/hire" className="hover:text-corp-600 transition-colors">Hiring ROI Calculator</Link></li>
              <li><Link href="/about" className="hover:text-corp-600 transition-colors">About Catalyst</Link></li>
              <li><Link href="/blog" className="hover:text-corp-600 transition-colors">Talent Insights Blog</Link></li>
              <li><Link href="/contact" className="hover:text-corp-600 transition-colors">Contact Headquarters</Link></li>
            </ul>
          </div>

          {/* Col 4: City SEO Hub Links */}
          <div className="space-y-3">
            <h4 className="text-slate-900 text-xs font-bold tracking-wider uppercase">Recruitment Hubs</h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><Link href="/recruitment-agency-bangalore" className="hover:text-corp-600 transition-colors">Recruitment Agency Bangalore</Link></li>
              <li><Link href="/recruitment-agency-pune" className="hover:text-corp-600 transition-colors">Recruitment Agency Pune</Link></li>
              <li><Link href="/recruitment-agency-delhi" className="hover:text-corp-600 transition-colors">Recruitment Agency Delhi NCR</Link></li>
              <li><Link href="/recruitment-agency-hyderabad" className="hover:text-corp-600 transition-colors">Recruitment Agency Hyderabad</Link></li>
              <li><Link href="/recruitment-agency-dewas" className="hover:text-corp-600 transition-colors">Recruitment Agency Dewas & MP</Link></li>
              <li><Link href="/recruitment-agency-mumbai" className="hover:text-corp-600 transition-colors">Recruitment Agency Mumbai</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Catalyst Hiring Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-900 transition-colors">XML Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
