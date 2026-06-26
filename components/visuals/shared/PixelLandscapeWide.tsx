'use client';

type PixelLandscapeWideProps = {
  width: number;
  height: number;
  gradientId?: string;
};

export default function PixelLandscapeWide({
  width: W,
  height: H,
  gradientId = 'pixel-landscape-sky',
}: PixelLandscapeWideProps) {
  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      style={{ display: 'block', imageRendering: 'pixelated' }}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8ec8ff" />
          <stop offset="55%" stopColor="#b9ddff" />
          <stop offset="100%" stopColor="#d8ecff" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#${gradientId})`} />
      {[
        [42, 42, 54, 18],
        [168, 28, 48, 16],
        [420, 46, 62, 20],
        [700, 34, 44, 14],
        [920, 40, 58, 18],
      ].map(([x, y, w, h], i) => (
        <g key={i} fill="#f8fcff" opacity="0.95">
          <rect x={x} y={y + 4} width={w} height={h - 8} />
          <rect x={x + 8} y={y} width={w - 16} height={h} />
          <rect x={x + 16} y={y + 2} width={w - 32} height={h - 4} />
        </g>
      ))}
      <polygon
        points={`0,${H - 88} 180,${H - 168} 360,${H - 108} 540,${H - 196} 720,${H - 124} 900,${H - 180} ${W},${H - 124} ${W},${H} 0,${H}`}
        fill="#6f84a8"
      />
      <polygon
        points={`0,${H - 64} 140,${H - 132} 320,${H - 84} 500,${H - 148} 680,${H - 92} 860,${H - 136} ${W},${H - 92} ${W},${H} 0,${H}`}
        fill="#8aa0c4"
      />
      {Array.from({ length: Math.ceil(W / 25) }).map((_, i) => {
        const x = 6 + i * 25;
        const h = 34 + (i % 3) * 8;
        return (
          <g key={i}>
            <rect x={x + 8} y={H - h - 10} width={8} height={h} fill="#4f6d43" />
            <polygon
              points={`${x},${H - h - 8} ${x + 12},${H - h - 34} ${x + 24},${H - h - 8}`}
              fill="#2f5d35"
            />
          </g>
        );
      })}
      <rect x={0} y={H - 18} width={W} height={18} fill="#3f6d3f" />
    </svg>
  );
}
