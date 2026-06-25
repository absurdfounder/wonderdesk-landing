type WonderLogoProps = {
  className?: string;
  characterClassName?: string;
  textClassName?: string;
  asLink?: boolean;
  priority?: boolean;
  theme?: 'light' | 'dark';
};

export default function WonderLogo({
  className = '',
  characterClassName = 'h-10 w-10 sm:h-11 sm:w-11 object-contain rounded-md',
  textClassName = 'text-lg sm:text-xl',
  asLink = false,
  priority = false,
  theme = 'light',
}: WonderLogoProps) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/images/wonder-logomark.png"
        alt=""
        width={64}
        height={64}
        className={`bg-transparent ${characterClassName}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        aria-hidden
      />
      <span className={`font-brand lowercase leading-none tracking-tight ${textColor} ${textClassName}`}>
        wonder
      </span>
    </span>
  );

  if (asLink) {
    return (
      <a href="/" className="shrink-0" aria-label="Wonder">
        {content}
      </a>
    );
  }

  return content;
}
