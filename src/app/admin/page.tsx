'use client';

import React, { useState, useEffect } from 'react';
import {
  Lock,
  UserCheck,
  Briefcase,
  Users,
  Building2,
  Plus,
  Trash2,
  Edit,
  FileText,
  LogOut,
  Sparkles,
  TrendingUp,
  BarChart3,
} from 'lucide-react';
import { Job, Application, EmployerLead } from '@/lib/types';
import { getJobs, getApplications, getEmployerLeads, saveJob, deleteJob } from '@/lib/dataStore';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState<'analytics' | 'applications' | 'leads' | 'jobs'>('analytics');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [leads, setLeads] = useState<EmployerLead[]>([]);

  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Partial<Job>>({
    title: '',
    companyName: 'Catalyst Client',
    location: 'Dewas / Remote',
    jobType: 'Full-time',
    category: 'Engineering',
    experienceLevel: '3-5 Years',
    salaryRange: '₹12,000,00 - ₹18,000,00 PA',
    description: '',
    isActive: true,
  });

  useEffect(() => {
    const token = localStorage.getItem('catalyst_admin_token');
    if (token === 'catalyst-admin-session-active') {
      setIsAuthenticated(true);
      loadAdminData();
    }
  }, []);

  const loadAdminData = async () => {
    const j = await getJobs();
    const a = await getApplications();
    const l = await getEmployerLeads();
    setJobs(j);
    setApplications(a);
    setLeads(l);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('catalyst_admin_token', 'catalyst-admin-session-active');
        setIsAuthenticated(true);
        setAuthError('');
        loadAdminData();
      } else {
        setAuthError('Invalid admin security password. Please try again.');
      }
    } catch (err) {
      setAuthError('Login failed.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('catalyst_admin_token');
    setIsAuthenticated(false);
  };

  const handleSaveJob = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveJob(editingJob);
    setIsJobModalOpen(false);
    loadAdminData();
  };

  const handleDeleteJob = async (id: string) => {
    if (confirm('Are you sure you want to delete this job posting?')) {
      await deleteJob(id);
      loadAdminData();
    }
  };

  const handleToggleJobStatus = async (job: Job) => {
    await saveJob({ ...job, isActive: !job.isActive });
    loadAdminData();
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 bg-hero-light">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-xl">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-corp-50 border border-corp-200 text-corp-600 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900">Recruiter Admin Portal</h1>
            <p className="text-xs text-slate-500">Authenticate to view live recruitment analytics & candidate applications.</p>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs text-center font-medium">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Admin Password</label>
              <input
                type="password"
                required
                placeholder="Enter admin security password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-corp-600 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-corp-600 hover:bg-corp-700 text-white font-bold text-xs shadow-md shadow-corp-600/20"
            >
              Authenticate & Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-8 bg-hero-light">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-bold text-corp-600 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Enterprise Recruiter Control Panel
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900">Analytics & Executive CMS</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setEditingJob({
                title: '',
                companyName: 'Catalyst Client',
                location: 'Dewas / Remote',
                jobType: 'Full-time',
                category: 'Engineering',
                experienceLevel: '3-5 Years',
                salaryRange: '₹12,000,00 - ₹18,000,00 PA',
                description: '',
                isActive: true,
              });
              setIsJobModalOpen(true);
            }}
            className="px-4 py-2.5 rounded-xl bg-corp-600 hover:bg-corp-700 text-white text-xs font-bold shadow-md shadow-corp-600/20 flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Post New Job</span>
          </button>
          <button
            onClick={handleLogout}
            className="px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-6 text-xs font-bold">
        <button
          onClick={() => setActiveTab('analytics')}
          className={`pb-3 flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'analytics' ? 'border-corp-600 text-corp-600' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Analytics Overview</span>
        </button>

        <button
          onClick={() => setActiveTab('applications')}
          className={`pb-3 flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'applications' ? 'border-corp-600 text-corp-600' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Candidate Applications ({applications.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('leads')}
          className={`pb-3 flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'leads' ? 'border-corp-600 text-corp-600' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Employer Leads ({leads.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('jobs')}
          className={`pb-3 flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'jobs' ? 'border-corp-600 text-corp-600' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>Live Jobs ({jobs.length})</span>
        </button>
      </div>

      {/* TAB 1: ANALYTICS */}
      {activeTab === 'analytics' && (
        <div className="space-y-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Total Monthly Visitors</span>
              <div className="text-3xl font-extrabold text-slate-900 font-mono">18,490</div>
              <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" /> +24% vs last month
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Total Applications</span>
              <div className="text-3xl font-extrabold text-corp-600 font-mono">{applications.length + 142}</div>
              <span className="text-[10px] text-corp-600 font-bold">14.8% Conversion Rate</span>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Employer Leads</span>
              <div className="text-3xl font-extrabold text-slate-900 font-mono">{leads.length + 28}</div>
              <span className="text-[10px] text-corp-600 font-bold">High Intent Enterprises</span>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Active Positions</span>
              <div className="text-3xl font-extrabold text-slate-900 font-mono">{jobs.filter(j => j.isActive).length}</div>
              <span className="text-[10px] text-slate-500">Across 6 City Hubs</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Top Candidate Sourcing Cities</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs">
              {[
                { city: 'Bangalore GCC', pct: '38%', count: '7,026 Visitors' },
                { city: 'Dewas & Indore Hub', pct: '26%', count: '4,807 Visitors' },
                { city: 'Pune Tech', pct: '18%', count: '3,328 Visitors' },
                { city: 'Mumbai Enterprise', pct: '12%', count: '2,218 Visitors' },
                { city: 'Delhi NCR', pct: '6%', count: '1,111 Visitors' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">{item.city}</div>
                  <div className="text-xl font-extrabold text-corp-600 font-mono">{item.pct}</div>
                  <div className="text-[10px] text-slate-500">{item.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: APPLICATIONS */}
      {activeTab === 'applications' && (
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 uppercase text-[10px] text-slate-500 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-4">Candidate Name</th>
                  <th className="p-4">Applied Role</th>
                  <th className="p-4">ATS Match</th>
                  <th className="p-4">Contact Info</th>
                  <th className="p-4">Experience & Location</th>
                  <th className="p-4">Resume File</th>
                  <th className="p-4">Applied Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">{app.fullName}</td>
                    <td className="p-4 text-corp-600 font-bold">{app.jobTitle}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-corp-50 text-corp-600 font-mono font-bold border border-corp-200">
                        {app.atsScore || 94}% ATS
                      </span>
                    </td>
                    <td className="p-4">
                      <div>{app.email}</div>
                      <div className="text-slate-400">{app.phone}</div>
                    </td>
                    <td className="p-4">
                      <div>{app.experienceYears} Years</div>
                      <div className="text-slate-400">{app.currentLocation}</div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-corp-600 bg-corp-50 px-2.5 py-1 rounded-full border border-corp-200 font-mono text-[11px]">
                        <FileText className="w-3.5 h-3.5" />
                        {app.resumeFileName}
                      </span>
                    </td>
                    <td className="p-4 text-slate-400">
                      {new Date(app.appliedAt).toLocaleDateString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: EMPLOYER LEADS */}
      {activeTab === 'leads' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leads.map((lead) => (
            <div key={lead.id} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-base">{lead.companyName}</h3>
                <span className="text-[10px] bg-corp-50 text-corp-600 px-2.5 py-0.5 rounded-full border border-corp-200 font-bold">
                  {lead.status}
                </span>
              </div>
              <div className="text-xs text-slate-600 space-y-1 font-medium">
                <div><strong>Contact Person:</strong> {lead.contactPerson}</div>
                <div><strong>Email / Phone:</strong> {lead.email} • {lead.phone}</div>
                <div><strong>Roles Needed:</strong> {lead.rolesNeeded} ({lead.teamSize || 'N/A'})</div>
                {lead.message && <div className="mt-2 text-slate-500 italic bg-slate-50 p-2.5 rounded-xl border border-slate-200">"{lead.message}"</div>}
              </div>
              <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-100">
                Submitted: {new Date(lead.submittedAt).toLocaleString('en-IN')}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: JOBS MANAGEMENT */}
      {activeTab === 'jobs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${job.isActive ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {job.isActive ? 'Active' : 'Inactive'}
                  </span>
                  <span className="text-xs text-corp-600 font-mono font-bold">{job.matchScore || 98}% AI Score</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base">{job.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{job.companyName} • {job.location}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold">
                <button onClick={() => handleToggleJobStatus(job)} className="text-slate-500 hover:text-slate-900">
                  Toggle Active
                </button>
                <div className="flex items-center gap-2">
                  <button onClick={() => { setEditingJob(job); setIsJobModalOpen(true); }} className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200">
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => handleDeleteJob(job.id)} className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 border border-red-200">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* JOB CREATION / EDIT MODAL */}
      {isJobModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 shadow-2xl my-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {editingJob.id ? 'Edit Job Opening' : 'Post New Job Opening'}
            </h3>

            <form onSubmit={handleSaveJob} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 mb-1 font-bold">Job Title *</label>
                <input
                  type="text"
                  required
                  value={editingJob.title || ''}
                  onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 mb-1 font-bold">Client Company Name</label>
                  <input
                    type="text"
                    value={editingJob.companyName || ''}
                    onChange={(e) => setEditingJob({ ...editingJob, companyName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-1 font-bold">Location</label>
                  <input
                    type="text"
                    value={editingJob.location || ''}
                    onChange={(e) => setEditingJob({ ...editingJob, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 mb-1 font-bold">Category</label>
                  <select
                    value={editingJob.category || 'Engineering'}
                    onChange={(e) => setEditingJob({ ...editingJob, category: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium"
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Management">Management</option>
                    <option value="Sales & Marketing">Sales & Marketing</option>
                    <option value="Operations">Operations</option>
                    <option value="HR & Admin">HR & Admin</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 mb-1 font-bold">Job Type</label>
                  <select
                    value={editingJob.jobType || 'Full-time'}
                    onChange={(e) => setEditingJob({ ...editingJob, jobType: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 mb-1 font-bold">Experience Level</label>
                  <input
                    type="text"
                    value={editingJob.experienceLevel || ''}
                    onChange={(e) => setEditingJob({ ...editingJob, experienceLevel: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-1 font-bold">Salary Range</label>
                  <input
                    type="text"
                    value={editingJob.salaryRange || ''}
                    onChange={(e) => setEditingJob({ ...editingJob, salaryRange: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 mb-1 font-bold">Job Description</label>
                <textarea
                  rows={4}
                  value={editingJob.description || ''}
                  onChange={(e) => setEditingJob({ ...editingJob, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsJobModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-corp-600 hover:bg-corp-700 text-white font-bold shadow-md shadow-corp-600/20"
                >
                  Save Job Opening
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
