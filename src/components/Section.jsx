// Reusable section wrapper with consistent spacing and heading styles.
export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container-page">
        <div className="max-w-3xl mb-12 reveal">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-600/60 dark:bg-brand-400/60" />
              {eyebrow}
            </p>
          )}
          <h2 className="section-title mt-3">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
