import { ReactNode } from 'react';

type LandingSectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  variant?: 'default' | 'dot-grid' | 'rule-grid' | 'sky-wash';
};

const variantClasses = {
  default: 'bg-white',
  'dot-grid': 'landing-dot-grid',
  'rule-grid': 'landing-rule-grid',
  'sky-wash': 'bg-sky-50/40',
};

export default function LandingSection({
  children,
  className = '',
  innerClassName = '',
  id,
  variant = 'default',
}: LandingSectionProps) {
  return (
    <section
      id={id}
      className={`landing-section ${variantClasses[variant]} ${className}`}
    >
      <div className={`landing-grid-frame ${innerClassName}`}>{children}</div>
    </section>
  );
}
