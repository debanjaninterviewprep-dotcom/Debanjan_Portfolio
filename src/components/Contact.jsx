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
      <div className="card p-8 grid sm:grid-cols-3 gap-6 text-center">
        <a
          href={`mailto:${profile.email}`}
          className="group rounded-xl p-4 hover:bg-slate-50 transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-slate-500">Email</p>
          <p className="mt-1 font-medium text-slate-900 group-hover:text-brand-700 break-all">
            {profile.email}
          </p>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group rounded-xl p-4 hover:bg-slate-50 transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-slate-500">LinkedIn</p>
          <p className="mt-1 font-medium text-slate-900 group-hover:text-brand-700">
            /in/debanjan-mukherjee
          </p>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group rounded-xl p-4 hover:bg-slate-50 transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-slate-500">GitHub</p>
          <p className="mt-1 font-medium text-slate-900 group-hover:text-brand-700">
            @debanjan-mukherjee
          </p>
        </a>
      </div>
    </Section>
  );
}
