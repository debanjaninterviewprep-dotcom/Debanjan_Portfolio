import Section from './Section.jsx';
import { achievements } from '../data/portfolio.js';

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Recognition"
      subtitle="Awards and milestones I'm proud of."
    >
      <div className="grid gap-8">
        {achievements.map((a, idx) => (
          <div
            key={a.title}
            className="card p-6 reveal"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              {a.imageUrl && (
                <div className="shrink-0 md:w-1/2">
                  <img
                    src={a.imageUrl}
                    alt={a.title}
                    className="rounded-xl shadow-md w-full object-cover border border-slate-200 dark:border-slate-700"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 flex items-center justify-center text-2xl ring-1 ring-brand-100 dark:ring-brand-900">
                    ★
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{a.title}</h3>
                    <p className="text-sm text-brand-700 dark:text-brand-400 font-medium">{a.issuer}</p>
                    <p className="mt-2 text-slate-700 dark:text-slate-300">{a.description}</p>
                    {a.certificateUrl && (
                      <a
                        href={a.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        View Certificate (PDF)
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
