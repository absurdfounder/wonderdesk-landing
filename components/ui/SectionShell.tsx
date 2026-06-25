import React from 'react';

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  eyebrowNumber?: string;
  className?: string;
  bgClass?: string;
  noBorder?: boolean;
  noBorderBottom?: boolean;
  clearSiteHeader?: boolean;
  children: React.ReactNode;
}

export default function SectionShell({
  id,
  eyebrow,
  eyebrowNumber,
  className = '',
  bgClass = 'bg-canvas',
  noBorder = false,
  noBorderBottom = true,
  clearSiteHeader = false,
  children,
}: SectionShellProps) {
  const sectionClasses = [bgClass || 'bg-canvas', clearSiteHeader ? 'site-header-clear' : '', className]
    .filter(Boolean)
    .join(' ');

  const frameClasses = [
    'mx-auto min-w-0 max-w-7xl overflow-x-hidden border-[var(--color-line)] px-4 sm:px-6',
    bgClass || 'bg-canvas',
    !noBorder ? 'border-l border-r border-t' : 'border-l border-r',
    !noBorderBottom ? 'border-b' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={sectionClasses}>
      <div className={frameClasses}>
        {eyebrow ? (
          <div className="pb-2 pt-4 sm:pt-6 md:pt-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {eyebrow}
            </span>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
