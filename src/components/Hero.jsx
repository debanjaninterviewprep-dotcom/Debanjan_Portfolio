import { profile } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
    >
      {/* Decorative blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-100 dark:bg-brand-900/40 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container-page relative">
        <div className="max-w-3xl animate-fade-up">
          <span className="badge mb-5">Open to opportunities</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hi, I'm {profile.name}.
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-brand-700 dark:text-brand-400">
            {profile.role}
          </p>
          <p className="mt-2 text-slate-600 dark:text-slate-400">{profile.tagline}</p>
          <p className="mt-6 text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              View CV
            </a>
            <a href="#projects" className="btn-ghost">
              View Projects
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
