type LandingMissionTagProps = {
  index: string;
  label: string;
  className?: string;
};

export default function LandingMissionTag({ index, label, className = '' }: LandingMissionTagProps) {
  return (
    <span className={`landing-mission-tag ${className}`}>
      <span className="landing-mission-tag__index">[{index}]</span>
      {label}
    </span>
  );
}
