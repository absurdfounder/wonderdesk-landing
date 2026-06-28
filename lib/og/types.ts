export type OgKind =
  | 'home'
  | 'hub'
  | 'page'
  | 'feature'
  | 'compare'
  | 'showcase'
  | 'legacy-integration';

export type OgBadgeIcon = {
  label: string;
  iconUrl: string;
};

export type OgHeroContent = {
  kind: OgKind;
  eyebrowIndex: string;
  eyebrowLabel: string;
  headlinePrimary: string;
  headlineAccent?: string;
  /** When true (default), primary + accent render on one line. */
  singleLineHeadline?: boolean;
  description: string;
  showSetup?: boolean;
  iconUrl?: string;
  badgeIcons?: OgBadgeIcon[];
  pageUrl?: string;
  watermark?: string;
};
