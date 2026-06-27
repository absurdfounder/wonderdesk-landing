'use client';

import {
  PRODUCT_COL_W,
  PRODUCT_VISUAL_H,
  ProductFeaturesVisualRow,
} from './PrDocsProductCards';

export const PR_DOCS_PRODUCT_W = 1119;
export const PR_DOCS_PRODUCT_H = 560;

const COL_W = PRODUCT_COL_W;
const TEXT_H = 168;

const FONT = 'var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif';

const COLUMNS = [
  {
    boldLead: 'Help center analytics',
    rest: 'show which articles get traffic, which searches fail, and where content needs work.',
  },
  {
    boldLead: 'A fast built-in editor',
    rest: 'for writing and updating documentation without leaving Wonderdesk.',
  },
  {
    boldLead: 'Reader feedback tools',
    rest: 'so you can learn which articles help users and which ones need a rewrite.',
  },
];

export default function PrDocsProductFeaturesSection() {
  return (
    <div
      style={{
        width: PR_DOCS_PRODUCT_W,
        height: PR_DOCS_PRODUCT_H,
        position: 'relative',
        fontFamily: FONT,
        borderTop: '1px solid #ECECEC',
      }}
    >
      <div style={{ display: 'flex', height: TEXT_H }}>
        {COLUMNS.map((col, index) => (
          <div
            key={col.boldLead}
            style={{
              width: COL_W,
              height: TEXT_H,
              background: '#ffffff',
              padding: '28px 28px 24px',
              borderRight: index < COLUMNS.length - 1 ? '1px solid #F0F0F0' : 'none',
              flexShrink: 0,
            }}
          >
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: '#666666' }}>
              <strong style={{ fontWeight: 600, color: '#111111' }}>{col.boldLead}</strong> {col.rest}
            </p>
          </div>
        ))}
      </div>

      <ProductFeaturesVisualRow landscapeId="product-features-sky" />
    </div>
  );
}
