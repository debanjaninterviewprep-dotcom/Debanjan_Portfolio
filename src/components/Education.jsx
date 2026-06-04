import Section from './Section.jsx';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((e) => (
          <div key={e.degree + e.school} className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{e.degree}</h3>
            <p className="text-brand-700 dark:text-brand-400 font-medium">{e.school}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{e.duration}</p>
            {e.details && <p className="mt-3 text-slate-700 dark:text-slate-300">{e.details}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
