import React, { useState } from 'react';
import { profile } from '../data/portfolio.js';
import CvResumeDialog from './CvResumeDialog.jsx';

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-200 dark:bg-brand-900/40 rounded-full blur-3xl opacity-60 pointer-events-none animate-float" />
      <div className="absolute top-40 -left-24 w-80 h-80 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container-page relative">
        <div className="grid md:grid-cols-[1fr_auto] items-center gap-10 animate-fade-up">
          <div className="max-w-3xl">
            <span className="badge mb-5">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to opportunities
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Hi, I'm{' '}
              <span
                className="bg-gradient-to-r from-brand-600 via-indigo-500 to-brand-600 bg-clip-text text-transparent animate-gradient"
                style={{ backgroundSize: '200% 200%' }}
              >
                {profile.name}
              </span>
              .
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-brand-700 dark:text-brand-400">
              {profile.role}
              <span className="ml-1 inline-block w-0.5 h-6 bg-brand-700 dark:bg-brand-400 align-middle animate-blink" />
            </p>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{profile.tagline}</p>
            <p className="mt-6 text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setIsDialogOpen(true)}
                className="btn-primary"
              >
                View CV / Resume
              </button>
              <a href="#projects" className="btn-ghost">
                View Projects
              </a>
              <a href="#contact" className="btn-ghost">
                Contact Me
              </a>
            </div>
            
            <CvResumeDialog 
              isOpen={isDialogOpen} 
              onClose={() => setIsDialogOpen(false)} 
            />
          </div>

          {profile.photoUrl && (
            <div className="justify-self-center md:justify-self-end">
              <div className="relative animate-float">
                {/* Rotating gradient ring */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-brand-500 via-indigo-500 to-brand-400 opacity-70 blur-md animate-spin-slow" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand-500 via-indigo-500 to-brand-400 animate-spin-slow" />
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full object-cover ring-4 ring-white dark:ring-slate-950 shadow-2xl"
                />
              </div>
            </div>
          )}
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          aria-label="Scroll to About"
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <span className="block w-px h-8 bg-current animate-pulse" />
        </a>
      </div>
    </section>
  );
}
