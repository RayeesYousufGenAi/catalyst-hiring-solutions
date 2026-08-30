"use client";

import React, { useState } from 'react';
import { Job } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, CheckCircle2 } from 'lucide-react';

interface ApplyModalProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ job, isOpen, onClose }: ApplyModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
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
                    <p className="text-slate-600 mb-8 max-w-sm">
                      Thank you for applying to {job.companyName}. We will review your application and get back to you soon.
                    </p>
                    <button
                      onClick={handleClose}
                      className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">First Name <span className="text-red-500">*</span></label>
                        <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-corp-500 focus:border-transparent transition-all" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Last Name <span className="text-red-500">*</span></label>
                        <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-corp-500 focus:border-transparent transition-all" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                      <input required type="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-corp-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                      <input required type="tel" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-corp-500 focus:border-transparent transition-all" placeholder="+91 98765 43210" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Resume/CV <span className="text-red-500">*</span></label>
                      <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer group">
                        <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-corp-500 transition-colors mb-3" />
                        <p className="text-sm font-medium text-slate-700 mb-1">Click to upload or drag and drop</p>
                        <p className="text-xs text-slate-500">PDF, DOCX up to 10MB</p>
                        <input required type="file" className="hidden" accept=".pdf,.doc,.docx" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Cover Letter (Optional)</label>
                      <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-corp-500 focus:border-transparent transition-all resize-none" placeholder="Tell us why you're a great fit for this role..."></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 bg-corp-600 hover:bg-corp-700 text-white font-bold rounded-xl shadow-lg shadow-corp-600/25 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
