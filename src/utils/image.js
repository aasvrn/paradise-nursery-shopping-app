// Helper functions to build responsive Unsplash URLs and srcset
export function baseUrl(url) {
  const i = url.indexOf('?');
  return i >= 0 ? url.slice(0, i) : url;
}

export function buildUrl(url, width, quality = 60) {
  const b = baseUrl(url);
  if (b.includes('source.unsplash.com')) {
    // source.unsplash.com already handles optimization and redirects; keep as-is
    return b;
  }
  return `${b}?q=${quality}&w=${width}&auto=format&fit=crop`;
}

export function buildSrcSet(url, widths = [240, 360, 480, 800], quality = 60) {
  const b = baseUrl(url);
  if (b.includes('source.unsplash.com')) return undefined;
  return widths.map((w) => `${buildUrl(url, w, quality)} ${w}w`).join(', ');
}

export function isRemote(url) {
  return /^https?:\/\//.test(url);
}

export function assetUrl(path) {
  const base = import.meta.env.BASE_URL || '/';
  // Ensure single slash between base and path
  const normalized = base.endsWith('/') ? base + path : base + '/' + path;
  return normalized;
}