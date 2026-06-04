import Section from './Section.jsx';
import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools & technologies"
      subtitle="A snapshot of what I work with day-to-day, organized by area."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items], idx) => (
          <div
            key={category}
            className="card p-6 reveal"
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <h3 className="font-semibold text-slate-900 dark:text-white">{category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
