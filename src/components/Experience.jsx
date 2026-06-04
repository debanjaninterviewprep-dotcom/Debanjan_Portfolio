import Section from './Section.jsx';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      subtitle="Roles and impact across my career so far."
    >
      <ol className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-10">
        {experience.map((job, idx) => (
          <li
            key={job.company + job.role}
            className="ml-6 reveal"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-brand-600 ring-4 ring-white dark:ring-slate-950" />
            <div className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {job.role}{' '}
                  <span className="text-brand-700 dark:text-brand-400">@ {job.company}</span>
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">{job.duration}</span>
              </div>
              {job.location && (
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{job.location}</p>
              )}
              <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
