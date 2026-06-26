'use client';

import FeatureVisualStage from '../ui/FeatureVisualStage';
import {
  PRODUCT_COL_W,
  PRODUCT_VISUAL_H,
  ProductColumnVisual,
  type ProductCardId,
} from '../visuals/PrDocsProductCards';

export type ProductFeatureVisualId = ProductCardId;

export default function ProductFeatureBlockVisual({ id }: { id: ProductFeatureVisualId }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${PRODUCT_COL_W} / ${PRODUCT_VISUAL_H}` }}
    >
      <FeatureVisualStage
        stageWidth={PRODUCT_COL_W}
        stageHeight={PRODUCT_VISUAL_H}
        className="absolute inset-0"
      >
        <ProductColumnVisual id={id} variant="plain" />
      </FeatureVisualStage>
    </div>
  );
}
