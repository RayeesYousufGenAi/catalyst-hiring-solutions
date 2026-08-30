'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-xl space-y-6">
      <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
        Send Us a Message
      </h2>

      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-corp-50 text-corp-600 rounded-full flex items-center justify-center mx-auto border border-corp-200">
            <CheckCircle2 className="w-10 h-10 text-corp-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
          <p className="text-slate-600 text-xs max-w-md mx-auto leading-relaxed font-medium">
            Thank you for contacting Catalyst Hiring Solutions. Our team will respond to your inquiry within 2 business hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold hover:bg-slate-200 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1">
                Your Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="e.g. Ramesh Verma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="ramesh@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 mb-1">
                Phone Number *
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                placeholder="+91 9797713791"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600"
              />
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 mb-1">
                Subject
              </label>
              <select
                id="contact-subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600 font-medium"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Employer Hiring Requirement">Employer Hiring Requirement</option>
                <option value="Job Candidate Application">Job Candidate Application</option>
                <option value="HR Advisory & Partnership">HR Advisory & Partnership</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1">
              Your Message *
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              placeholder="How can Catalyst Hiring Solutions assist you today?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-corp-600 to-corp-500 hover:from-corp-700 text-white font-extrabold text-sm transition-all shadow-md shadow-corp-600/20 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4 text-white" />
            <span>Send Message</span>
          </button>
        </form>
      )}
    </div>
  );
}
