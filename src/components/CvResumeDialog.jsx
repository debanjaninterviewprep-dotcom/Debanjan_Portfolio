import React, { useState, useEffect } from 'react';
import { profile } from '../data/portfolio';

// Assumes we have profile.cvUrl and profile.resumeUrl

export default function CvResumeDialog({ isOpen, onClose }) {
  // Prevent scrolling on body when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Dialog box */}
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md overflow-hidden animate-fade-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30 mb-4">
                <svg className="h-6 w-6 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
             </div>
             <h3 className="text-xl font-bold text-slate-900 dark:text-white">View Document</h3>
             <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
               Which document would you like to view?
             </p>
          </div>

          <div className="flex flex-col gap-3">
             <a 
               href={profile.resumeUrl} 
               target="_blank" 
               rel="noreferrer"
               className="group flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:bg-brand-50 hover:border-brand-200 dark:hover:bg-brand-900/20 dark:hover:border-brand-800/50 transition-all text-center"
               onClick={onClose}
             >
                <strong className="text-brand-700 dark:text-brand-400 font-semibold mb-1 group-hover:text-brand-800 dark:group-hover:text-brand-300">Resume (One Pager)</strong>
                <span className="text-xs text-slate-500 dark:text-slate-400">Concise overview of skills and top experience.</span>
             </a>

             <a 
               href={profile.cvUrl} 
               target="_blank" 
               rel="noreferrer"
               className="group flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:bg-brand-50 hover:border-brand-200 dark:hover:bg-brand-900/20 dark:hover:border-brand-800/50 transition-all text-center"
               onClick={onClose}
             >
                <strong className="text-brand-700 dark:text-brand-400 font-semibold mb-1 group-hover:text-brand-800 dark:group-hover:text-brand-300">Detailed CV</strong>
                <span className="text-xs text-slate-500 dark:text-slate-400">Comprehensive history, education, and all projects.</span>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}
