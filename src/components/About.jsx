import Section from './Section.jsx';
import { profile } from '../data/portfolio.js';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid md:grid-cols-3 gap-6">
        <div
          className="md:col-span-2 card p-7 reveal"
          style={{ transitionDelay: '0ms' }}
        >
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            I'm a Full Stack Software Developer at <strong>Wipro</strong>, building enterprise-grade
            applications on a <strong>.NET, C#, Web API,</strong> and <strong>Angular</strong> stack.
            I take ownership end-to-end — from architecture and implementation to performance,
            scalability, and production support — and care deeply about delivering software that is
            reliable, maintainable, and accurate.
          </p>
          <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
            I work in an <strong>AI-augmented</strong> way — leveraging
            <strong> GitHub Copilot</strong>, <strong>ChatGPT</strong>, <strong>Gemini</strong>, and
            <strong> Claude</strong> across nearly every daily task. Integrating AI deeply into my
            workflow lets me ship faster, reduce repetitive effort by up to <strong>~90%</strong>,
            and reinvest that time into design, code quality, and business impact — making me a
            more leveraged engineer for the team.
          </p>
          <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
            Alongside core engineering work, I'm actively expanding into{' '}
            <strong>low-code and AI-assisted platforms</strong> — <strong>Power Apps</strong>,{' '}
            <strong>Power Platform</strong>, and <strong>Copilot Studio</strong> — to combine
            system-level development with modern platform tools and deliver business value faster.
          </p>
        </div>

        <div className="card p-7 reveal" style={{ transitionDelay: '120ms' }}>
          <h3 className="font-semibold text-slate-900 dark:text-white">Quick facts</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <span className="text-slate-500 dark:text-slate-400">Role:</span> {profile.role}
            </li>
            <li>
              <span className="text-slate-500 dark:text-slate-400">Company:</span> Wipro
            </li>
            <li>
              <span className="text-slate-500 dark:text-slate-400">Stack:</span> .NET • C# • Angular • Web API
            </li>
            <li>
              <span className="text-slate-500 dark:text-slate-400">Learning:</span> React, Power Apps, Power Platform, Copilot Studio
            </li>
            <li>
              <span className="text-slate-500 dark:text-slate-400">Location:</span> {profile.location}
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
