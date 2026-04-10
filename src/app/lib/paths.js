const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const EXTERNAL_PATTERN = /^(?:[a-z]+:)?\/\//i;

export function withBasePath(path = '') {
  if (!path) return path;
  if (EXTERNAL_PATTERN.test(path)) return path;
  if (path.startsWith('data:') || path.startsWith('mailto:') || path.startsWith('#')) return path;

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  if (!BASE_PATH) return normalizedPath;
  if (normalizedPath.startsWith(`${BASE_PATH}/`) || normalizedPath === BASE_PATH) return normalizedPath;
  return `${BASE_PATH}${normalizedPath}`;
}

export function withBasePathHash(hash = '') {
  if (!hash) return BASE_PATH || '/';
  if (hash.startsWith('#')) {
    return `${BASE_PATH || ''}/${hash}`;
  }
  return withBasePath(hash);
}
