import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const cache = new Map<string, string>();

function mimeForPath(relativePath: string) {
  if (relativePath.endsWith('.svg')) return 'image/svg+xml';
  if (relativePath.endsWith('.jpg') || relativePath.endsWith('.jpeg')) return 'image/jpeg';
  return 'image/png';
}

/** Embed public/ assets as data URLs so Satori renders them reliably during prebuild. */
export async function loadOgAssetDataUrl(relativePath: string): Promise<string> {
  const cached = cache.get(relativePath);
  if (cached) return cached;

  const buffer = await readFile(join(process.cwd(), 'public', relativePath));
  const dataUrl = `data:${mimeForPath(relativePath)};base64,${buffer.toString('base64')}`;
  cache.set(relativePath, dataUrl);
  return dataUrl;
}

export type OgRenderAssets = {
  logoUrl: string;
  gridBackgroundUrl: string;
};

export async function loadOgRenderAssets(): Promise<OgRenderAssets> {
  const [logoUrl, gridBackgroundUrl] = await Promise.all([
    loadOgAssetDataUrl('images/logonew-black.png'),
    loadOgAssetDataUrl('og/wonder-sky.png'),
  ]);
  return { logoUrl, gridBackgroundUrl };
}
