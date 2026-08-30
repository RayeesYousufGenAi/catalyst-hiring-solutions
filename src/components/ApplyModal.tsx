"use client";

import React, { useState } from 'react';
import { Job } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, CheckCircle2, Loader2 } from 'lucide-react';

interface ApplyModalProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ job, isOpen, onClose }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentLocation: '',
    experienceYears: '1-3 Years',
    coverNote: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.phone) {
      setErrorMsg('Please fill in all required fields marked with *');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const data = new FormData();
      data.append('jobId', job.id || job.slug);
      data.append('jobTitle', job.title);
      data.append('fullName', `${formData.firstName} ${formData.lastName}`.trim());
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('currentLocation', formData.currentLocation || job.location);
      data.append('experienceYears', formData.experienceYears);
      data.append('coverNote', formData.coverNote);
      if (resumeFile) {
        data.append('resume', resumeFile);
      }

      const res = await fetch('/api/apply', {
        method: 'POST',
        body: data,
      });

      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(json.error || 'Failed to submit application. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg('An unexpected network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setErrorMsg('');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    Apply for {job.title}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    {job.companyName} • {job.location}
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {submitted ? (
                  <div className="py-12 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Application Submitted!
                    </h3>
                    <p className="text-slate-600 mb-8 max-w-sm text-xs leading-relaxed font-medium">
                      Thank you for applying to {job.companyName}. Our recruitment advisory team has received your application and will review your profile shortly.
                    </p>
                    <button
                      onClick={handleClose}
                      className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">First Name <span className="text-red-500">*</span></label>
                        <input
                          required
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-corp-500 focus:border-transparent transition-all"
                          placeholder="Ramesh"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Last Name <span className="text-red-500">*</span></label>
                        <input
                          required
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-corp-500 focus:border-transparent transition-all"
                          placeholder="Verma"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-corp-500 focus:border-transparent transition-all"
                          placeholder="ramesh@example.com"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-corp-500 focus:border-transparent transition-all"
                          placeholder="+91 97977 13791"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Current City</label>
                        <input
                          type="text"
                          value={formData.currentLocation}
                          onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-corp-500 focus:border-transparent transition-all"
                          placeholder="e.g. Dewas / Gurugram"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Experience</label>
                        <select
                          value={formData.experienceYears}
                          onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-corp-500 focus:border-transparent transition-all"
                        >
                          <option value="Fresher / 0-1 Years">Fresher / 0-1 Years</option>
                          <option value="1-3 Years">1-3 Years</option>
                          <option value="3-5 Years">3-5 Years</option>
                          <option value="5-10 Years">5-10 Years</option>
                          <option value="10+ Years">10+ Years (Leadership)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Resume / CV</label>
                      <label className="border-2 border-dashed border-slate-200 rounded-xl p-5 flex flex-col items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer group">
                        <UploadCloud className="w-6 h-6 text-slate-400 group-hover:text-corp-500 transition-colors mb-1.5" />
                        <p className="text-xs font-medium text-slate-700">
                          {resumeFile ? resumeFile.name : 'Click to select Resume (PDF, DOCX)'}
                        </p>
                        <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                      </label>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Cover Note / Message (Optional)</label>
                      <textarea
                        rows={3}
                        value={formData.coverNote}
                        onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-corp-500 focus:border-transparent transition-all resize-none"
                        placeholder="Key skills, notice period, or salary expectations..."
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 bg-corp-600 hover:bg-corp-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-corp-600/25 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>Submitting Application...</span>
                          </>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
