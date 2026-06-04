import Section from './Section.jsx';
import { profile } from '../data/portfolio.js';

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's connect"
      subtitle="Open to interesting roles, collaborations, and conversations."
    >
      <div className="card p-8 grid sm:grid-cols-3 gap-6 text-center reveal">
        <a
          href={`mailto:${profile.email}`}
          className="group rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Email</p>
          <p className="mt-1 font-medium text-slate-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 break-all">
            {profile.email}
          </p>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">LinkedIn</p>
          <p className="mt-1 font-medium text-slate-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 break-all">
            /in/debanjan-mukherjee-773a3221a
          </p>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">GitHub</p>
          <p className="mt-1 font-medium text-slate-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 break-all">
            @debanjaninterviewprep-dotcom
          </p>
        </a>
      </div>
    </Section>
  );
}
