import axios from 'axios'

const wp = axios.create({
  baseURL: import.meta.env.VITE_WP_API.replace(/\/$/, ''),
})

export async function getPageBySlug(slug: string) {
  const { data } = await wp.get(`/wp/v2/pages?slug=${slug}&_embed=1`)
  return data?.[0]
}

export default wp
