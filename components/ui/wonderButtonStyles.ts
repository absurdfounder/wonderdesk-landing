export type WonderButtonVariant = 'primary' | 'secondary' | 'outline';
export type WonderButtonSize = 'sm' | 'md' | 'lg';

const variantClasses: Record<WonderButtonVariant, string> = {
  primary:
    'border border-transparent bg-wonder text-white shadow-sm hover:bg-[var(--wonder-brand-600)]',
  secondary:
    'border border-slate-800 bg-white text-slate-900 hover:bg-slate-800 hover:text-white',
  outline:
    'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
};

const sizeClasses: Record<WonderButtonSize, string> = {
  sm: 'min-h-10 px-4 py-2 text-sm',
  md: 'min-h-12 px-6 py-3 text-sm sm:text-base',
  lg: 'min-h-[52px] px-8 py-3.5 text-base',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wonder/40 focus-visible:ring-offset-2';

export function wonderButtonClassName({
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  variant?: WonderButtonVariant;
  size?: WonderButtonSize;
  className?: string;
}) {
  return [baseClasses, sizeClasses[size], variantClasses[variant], className].filter(Boolean).join(' ');
}
