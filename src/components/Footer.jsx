import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with React, Vite & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
