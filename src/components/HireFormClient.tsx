'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Clock, ShieldCheck, Users, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import RoiCalculator from '@/components/RoiCalculator';

export default function HireFormClient() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    rolesNeeded: '',
    teamSize: '1-5 Hires',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone || !formData.rolesNeeded) {
      setErrorMsg('Please fill in all required fields marked with *');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/hire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
        });
      } else {
        setErrorMsg(data.error || 'Failed to submit request. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Employer Mandate Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200 p-8 rounded-3xl shadow-xl space-y-6">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
            Submit Your Talent Acquisition Mandate
          </h2>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-corp-50 text-corp-600 rounded-full flex items-center justify-center mx-auto border border-corp-200">
                <CheckCircle2 className="w-10 h-10 text-corp-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Talent Request Received!</h3>
              <p className="text-slate-600 text-xs max-w-md mx-auto leading-relaxed font-medium">
                Our Senior Recruitment Partner will review your requirements and share an initial candidate mapping within 4 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold hover:bg-slate-200 transition-colors"
              >
                Submit Another Mandate
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyName" className="block text-xs font-bold text-slate-700 mb-1">Company Name *</label>
                  <input
                    id="companyName"
                    type="text"
                    required
                    placeholder="e.g. Acme Technologies Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600"
                  />
                </div>
                <div>
                  <label htmlFor="contactPerson" className="block text-xs font-bold text-slate-700 mb-1">Hiring Manager / HR Name *</label>
                  <input
                    id="contactPerson"
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">Corporate Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="priya@acme.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">Contact Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="rolesNeeded" className="block text-xs font-bold text-slate-700 mb-1">Positions to Fill *</label>
                  <input
                    id="rolesNeeded"
                    type="text"
                    required
                    placeholder="e.g. 5 Senior React Devs, 1 Plant Head"
                    value={formData.rolesNeeded}
                    onChange={(e) => setFormData({ ...formData, rolesNeeded: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600"
                  />
                </div>
                <div>
                  <label htmlFor="teamSize" className="block text-xs font-bold text-slate-700 mb-1">Estimated Hiring Volume</label>
                  <select
                    id="teamSize"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600 font-medium"
                  >
                    <option value="1-5 Hires">1-5 Hires (Specialized / Executive)</option>
                    <option value="6-20 Hires">6-20 Hires (Team Ramp-up)</option>
                    <option value="20-100+ Hires">20-100+ Hires (Volume / Turnkey)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">Specific Mandate Details & Locations</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Target cities, required experience, budget range, and timeline expectations..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-corp-600 to-corp-500 hover:from-corp-700 text-white font-extrabold text-sm transition-all shadow-md shadow-corp-600/20 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Processing Brief...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Request Candidate Profiles</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Employer Trust Badges & ROI */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Why 500+ Enterprises Choose Catalyst</h3>

            <div className="space-y-4 text-xs font-medium">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-corp-50 border border-corp-200 text-corp-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">21-Day Turnaround</h4>
                  <p className="text-slate-600 mt-0.5">Average time from mandate signoff to final candidate selection.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-corp-50 border border-corp-200 text-corp-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">90-Day Free Replacement</h4>
                  <p className="text-slate-600 mt-0.5">Complete hiring risk mitigation with guaranteed replacement.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-corp-50 border border-corp-200 text-corp-600 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">100,000+ Pre-screened Talent</h4>
                  <p className="text-slate-600 mt-0.5">Direct access to verified passive talent across India.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-corp-50 border border-corp-200">
            <h4 className="text-xs font-bold text-corp-800 mb-1">Direct Recruitment Line</h4>
            <p className="text-xs text-slate-600">Need immediate C-level search assistance?</p>
            <a href="tel:+919797713791" className="text-sm font-bold text-corp-600 hover:underline mt-1 block">
              Call +91 9797713791
            </a>
          </div>
        </div>
      </div>

      {/* ROI Calculator Section */}
      <section className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Calculate Your Hiring Cost Savings</h2>
          <p className="text-slate-600 text-xs font-medium">Compare internal recruitment costs vs Catalyst 21-day turnkey delivery</p>
        </div>
        <RoiCalculator />
      </section>
    </div>
  );
}
