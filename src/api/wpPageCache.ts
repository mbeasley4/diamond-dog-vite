import wp from '@/api/wp'

const cache = new Map<string, any>()

export function getCachedPage(slug: string) {
  return cache.get(slug) ?? null
}

export function hasCachedPage(slug: string) {
  return cache.has(slug)
}

export async function fetchAndCachePage(slug: string) {
  if (cache.has(slug)) return cache.get(slug)
  const { data } = await wp.get(`/wp/v2/pages?slug=${slug}`)
  const page = data?.[0] ?? null
  if (page) cache.set(slug, page)
  return page
}

export async function prefetchPages(slugs: string[]) {
  await Promise.allSettled(slugs.map(fetchAndCachePage))
}
