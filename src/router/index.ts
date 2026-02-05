import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

/* 
const AboutPage = () => import('@/views/AboutPage.vue')
const ContactPage = () => import('@/views/ContactPage.vue')
const SamplePage = () => import('@/views/SamplePage.vue')
*/
const HomePage = () => import('@/views/HomePage.vue')
const WpPage = () => import('@/views/WpPage.vue')
const NotFound = () => import('@/views/NotFound.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  // Dynamic WordPress page by slug
  // Dynamic WordPress page by slug (catch-all for pages)
  {
    path: '/:slug',
    name: 'wp-page',
    component: WpPage,
  },

  // Hard 404 for truly unknown paths (e.g. /foo/bar)
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
