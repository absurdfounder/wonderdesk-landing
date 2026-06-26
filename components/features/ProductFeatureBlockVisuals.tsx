'use client';

import FeatureVisualStage from '../ui/FeatureVisualStage';
import {
  HOME_FEATURE_PLAIN_BG,
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
      style={{
        aspectRatio: `${PRODUCT_COL_W} / ${PRODUCT_VISUAL_H}`,
        background: HOME_FEATURE_PLAIN_BG,
      }}
    >
      <FeatureVisualStage
        stageWidth={PRODUCT_COL_W}
        stageHeight={PRODUCT_VISUAL_H}
        className="absolute inset-0"
        fit="width"
      >
        <ProductColumnVisual id={id} variant="plain" />
      </FeatureVisualStage>
    </div>
  );
}
