export async function getMediaUrl(id: number) {
  const res = await fetch(`${import.meta.env.VITE_WP_API}/wp/v2/media/${id}`)
  const media = await res.json()
  return media.source_url
} 