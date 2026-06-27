'use client';

import { PlatformColumnVisual, type PlatformCardId } from '@/components/visuals/PrDocsPlatformCards';
import { ProductColumnVisual, type ProductCardId } from '@/components/visuals/PrDocsProductCards';

type PlatformFeaturesVisualProps =
  | { kind: 'platform'; visual: PlatformCardId; variant?: 'landscape' | 'plain' | 'photo' }
  | { kind: 'product'; visual: ProductCardId; variant?: 'landscape' | 'plain' | 'photo' };

export default function PlatformFeaturesVisual({ kind, visual, variant = 'photo' }: PlatformFeaturesVisualProps) {
  return (
    <div className="platform-feature-visual-panel">
      {kind === 'platform' ? (
        <PlatformColumnVisual id={visual} variant={variant} />
      ) : (
        <ProductColumnVisual id={visual} variant={variant} />
      )}
    </div>
  );
}
