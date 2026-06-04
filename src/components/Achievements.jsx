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
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((a) => (
          <div key={a.title} className="card p-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center text-2xl ring-1 ring-brand-100">
                ★
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{a.title}</h3>
                <p className="text-sm text-brand-700 font-medium">{a.issuer}</p>
                <p className="mt-2 text-slate-700">{a.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
