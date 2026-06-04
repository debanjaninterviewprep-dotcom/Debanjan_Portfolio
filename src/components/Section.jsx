// Reusable section wrapper with consistent spacing and heading styles.
export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container-page">
        <div className="max-w-3xl mb-10 animate-fade-up">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {eyebrow}
            </p>
          )}
          <h2 className="section-title mt-1">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
