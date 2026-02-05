export function toRoute(url: string) {
  try {
    const wpUrl = new URL(url)

    let path = wpUrl.pathname
      .replace(/^\/index\.php/, '')   // remove leading /index.php
      .replace(/\/+$/, '')            // trim trailing slash

    return path === '' ? '/' : path
  } catch {
    return '/'
  }
}