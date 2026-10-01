import Section from './Section.jsx';
import { certifications } from '../data/portfolio.js';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Professional Credentials"
      subtitle="Industry-recognized certifications validating my expertise."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, idx) => (
          <div
            key={cert.title}
            className="card p-6 reveal"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 flex items-center justify-center text-2xl ring-1 ring-brand-100 dark:ring-brand-900">
                ✓
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cert.title}</h3>
                <p className="text-sm text-brand-700 dark:text-brand-400 font-medium">
                  {cert.issuer}
                  {cert.certification && ` — ${cert.certification}`}
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300">{cert.description}</p>
                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Credential
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
