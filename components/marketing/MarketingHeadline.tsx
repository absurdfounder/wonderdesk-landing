import type { ReactNode } from 'react';

export type MarketingHeadlinePart = {
  text: string;
  tone?: 'default' | 'brand' | 'muted' | 'strong';
};

export type MarketingHeadlineLine = {
  parts: MarketingHeadlinePart[];
};

export type MarketingHeadlineProps = {
  as?: 'h1' | 'h2' | 'h3';
  size?: 'hero' | 'section' | 'card';
  align?: 'left' | 'center';
  lines: MarketingHeadlineLine[];
  subline?: ReactNode;
  className?: string;
  sublineClassName?: string;
};

const sizeClasses = {
  hero: 'text-[1.75rem] leading-[1.15] sm:text-4xl sm:leading-[1.12] md:text-[2.5rem] lg:text-[2.75rem]',
  section: 'text-2xl sm:text-3xl md:text-4xl leading-[1.15]',
  card: 'text-lg sm:text-2xl lg:text-3xl leading-snug',
} as const;

const sublineSizeClasses = {
  hero: 'text-base sm:text-lg mt-3 sm:mt-4',
  section: 'text-sm sm:text-base mt-3',
  card: 'text-sm mt-3 sm:mt-4',
} as const;

const toneClasses: Record<NonNullable<MarketingHeadlinePart['tone']>, string> = {
  default: 'text-slate-900',
  brand: 'text-wonder',
  muted: 'text-slate-500',
  strong: 'text-slate-950 font-semibold',
};

export default function MarketingHeadline({
  as: Tag = 'h2',
  size = 'section',
  align = 'left',
  lines,
  subline,
  className = '',
  sublineClassName = '',
}: MarketingHeadlineProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={alignClass}>
      <Tag
        className={`max-w-3xl text-balance font-display font-medium tracking-tight ${sizeClasses[size]} ${className}`}
      >
        {lines.map((line, lineIndex) => (
          <span key={`line-${lineIndex}`} className={lineIndex > 0 ? 'mt-0.5 block sm:mt-1' : 'block'}>
            {line.parts.map((part, partIndex) => (
              <span key={`part-${lineIndex}-${partIndex}`}>
                {partIndex > 0 ? ' ' : null}
                <span className={toneClasses[part.tone ?? 'default']}>{part.text}</span>
              </span>
            ))}
          </span>
        ))}
      </Tag>
      {subline ? (
        <p
          className={`max-w-2xl leading-relaxed text-slate-500 ${sublineSizeClasses[size]} ${align === 'center' ? 'mx-auto' : ''} ${sublineClassName}`}
        >
          {subline}
        </p>
      ) : null}
    </div>
  );
}
