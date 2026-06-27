'use client';

import { PlatformColumnVisual, type PlatformCardId } from '@/components/visuals/PrDocsPlatformCards';
import { ProductColumnVisual, type ProductCardId } from '@/components/visuals/PrDocsProductCards';

type PlatformFeaturesVisualProps =
  | { kind: 'platform'; visual: PlatformCardId }
  | { kind: 'product'; visual: ProductCardId };

export default function PlatformFeaturesVisual({ kind, visual }: PlatformFeaturesVisualProps) {
  return (
    <div className="platform-feature-visual-panel">
      {kind === 'platform' ? (
        <PlatformColumnVisual id={visual} variant="photo" />
      ) : (
        <ProductColumnVisual id={visual} variant="photo" />
      )}
    </div>
  );
}
