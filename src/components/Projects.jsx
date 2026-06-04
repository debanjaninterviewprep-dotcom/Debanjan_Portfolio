import Section from './Section.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="A few projects that highlight the kind of problems I enjoy solving."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="card p-6 flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
            <p className="mt-2 text-slate-700">{p.description}</p>

            {p.achievements?.length > 0 && (
              <ul className="mt-4 space-y-1.5 text-sm text-slate-700 list-disc pl-5">
                {p.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
