import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio.js';
import ThemeToggle from './ThemeToggle.jsx';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16">
        <a
          href="#home"
          className="font-bold text-slate-900 dark:text-white tracking-tight"
        >
          {profile.name.split(' ')[0]}
          <span className="text-brand-600 dark:text-brand-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700 dark:text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg ring-1 ring-slate-200 dark:ring-slate-700 bg-white dark:bg-slate-900"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-slate-700 dark:bg-slate-200"></span>
              <span className="block w-5 h-0.5 bg-slate-700 dark:bg-slate-200"></span>
              <span className="block w-5 h-0.5 bg-slate-700 dark:bg-slate-200"></span>
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <ul className="container-page py-3 space-y-1 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block px-2 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
