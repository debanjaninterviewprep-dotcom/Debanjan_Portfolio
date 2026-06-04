import Section from './Section.jsx';
import { profile } from '../data/portfolio.js';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card p-7">
          <p className="text-slate-700 leading-relaxed">
            I'm a Full Stack Software Developer at <strong>Wipro</strong> with hands-on experience
            building enterprise-grade applications using <strong>.NET, C#, Web API,</strong> and{' '}
            <strong>Angular</strong>. I enjoy taking ownership end-to-end — from understanding the
            business need, to designing the solution, shipping it reliably, and supporting it in
            production.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I've led delivery on the <strong>INPAT</strong> application, automated a{' '}
            <strong>10,200+ record migration</strong> with <strong>zero downtime</strong>, and
            mentored teams through structured Knowledge Transfer. Outside delivery work, I'm
            actively upskilling in <strong>React</strong> to broaden my modern frontend toolkit —
            this site is part of that journey.
          </p>
        </div>

        <div className="card p-7">
          <h3 className="font-semibold text-slate-900">Quick facts</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>
              <span className="text-slate-500">Role:</span> {profile.role}
            </li>
            <li>
              <span className="text-slate-500">Company:</span> Wipro
            </li>
            <li>
              <span className="text-slate-500">Stack:</span> .NET • C# • Angular • Web API
            </li>
            <li>
              <span className="text-slate-500">Learning:</span> React
            </li>
            <li>
              <span className="text-slate-500">Location:</span> {profile.location}
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
