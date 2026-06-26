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
    <div className="relative min-h-[260px] w-full overflow-hidden sm:min-h-[300px] lg:min-h-[360px]">
      <FeatureVisualStage stageWidth={PRODUCT_COL_W} stageHeight={PRODUCT_VISUAL_H}>
        <ProductColumnVisual id={id} landscapeId={`home-product-${id}`} />
      </FeatureVisualStage>
    </div>
  );
}
