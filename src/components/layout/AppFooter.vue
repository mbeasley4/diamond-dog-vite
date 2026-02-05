<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toRoute } from '@/utils/toRoute'

type MenuItem = {
  ID: number
  title: string
  url: string
}

type SiteInfo = {
  name?: string
  logo?: string | null
}

const menu = ref<MenuItem[]>([])
const site = ref<SiteInfo>({})
const currentYear = new Date().getFullYear()

onMounted(async () => {
  menu.value = await fetch(`${import.meta.env.VITE_WP_API}/theme/v1/menu`).then(res => res.json())
  site.value = await fetch(`${import.meta.env.VITE_WP_API}/theme/v1/site`).then(res => res.json())
})

const socialLinks = [
  { name: 'LinkedIn', icon: 'linkedin', url: '#' },
  { name: 'Twitter', icon: 'twitter', url: '#' },
  { name: 'Facebook', icon: 'facebook', url: '#' },
]

const footerSections = [
  {
    title: 'Company',
    links: [
      { title: 'About Us', url: '/about' },
      { title: 'Careers', url: '/careers' },
      { title: 'Press', url: '/press' },
      { title: 'Contact', url: '/contact' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: 'Investment Guide', url: '/guide' },
      { title: 'Market Analysis', url: '/analysis' },
      { title: 'Blog', url: '/blog' },
      { title: 'FAQ', url: '/faq' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { title: 'Privacy Policy', url: '/privacy' },
      { title: 'Terms of Service', url: '/terms' },
      { title: 'Disclaimers', url: '/disclaimers' },
      { title: 'Compliance', url: '/compliance' },
    ]
  }
]
</script>

<template>
  <footer class="relative overflow-hidden bg-black border-t border-brand-gold/20">
    <!-- Subtle dot pattern -->
    <div class="absolute inset-0 opacity-[0.04]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,211,77,0.4)_1px,transparent_1px)]
                  bg-[size:24px_24px]" />
    </div>

    <!-- Ambient bottom glows -->
    <div class="pointer-events-none absolute -bottom-32 left-1/4 h-96 w-96 
                rounded-full bg-brand-gold blur-[140px] opacity-20" />
    <div class="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 
                rounded-full bg-brand-green blur-[140px] opacity-15" />

    <div class="relative max-w-7xl mx-auto px-6">
      
      <!-- Main Footer Content -->
      <div class="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        
        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <!-- Logo -->
          <RouterLink to="/" class="inline-block group mb-6">
            <img
              v-if="site.logo"
              :src="site.logo"
              alt="Diamond Dog Capital"
              class="h-16 md:h-20 w-auto transition group-hover:scale-105 drop-shadow-[0_0_20px_rgba(252,211,77,0.4)]"
            />
          </RouterLink>

          <!-- Tagline -->
          <p class="text-brand-blue/90 leading-relaxed max-w-sm mb-8">
            Premium investment solutions for discerning clients. 
            Building wealth through strategic partnerships and innovative financial strategies.
          </p>

          <!-- Social Links -->
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              class="group relative h-12 w-12 rounded-xl border-2 border-brand-gold/30 
                     flex items-center justify-center
                     hover:border-brand-gold hover:bg-brand-gold/10
                     transition-all duration-300"
            >
              <!-- Glow effect on hover -->
              <div class="absolute inset-0 rounded-xl bg-brand-gold/20 blur-lg 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90" />
              
              <!-- Icons -->
              <svg v-if="social.icon === 'linkedin'" class="relative h-5 w-5 text-brand-gold transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <svg v-else-if="social.icon === 'twitter'" class="relative h-5 w-5 text-brand-gold transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
              <svg v-else-if="social.icon === 'facebook'" class="relative h-5 w-5 text-brand-gold transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Footer Menu Columns -->
        <div
          v-for="section in footerSections"
          :key="section.title"
          class="lg:col-span-1"
        >
          <h3 class="text-brand-gold font-black text-sm uppercase tracking-[0.2em] mb-6">
            {{ section.title }}
          </h3>
          <ul class="flex flex-col gap-4">
            <li v-for="link in section.links" :key="link.title">
              <RouterLink
                :to="toRoute(link.url)"
                class="text-brand-blue/80 hover:text-brand-gold transition-colors duration-300
                       text-sm font-medium inline-flex items-center group"
              >
                <span class="group-hover:translate-x-1 transition-transform duration-300">
                  {{ link.title }}
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider with glow -->
      <div class="relative h-px">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold to-transparent blur-sm" />
      </div>

      <!-- Bottom Bar -->
      <div class="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <!-- Copyright -->
        <p class="text-brand-blue/60 text-sm text-center md:text-left">
          © {{ currentYear }} Diamond Dog Capital Investments. All rights reserved.
        </p>

        <!-- Trust Badges -->
        <div class="flex flex-wrap justify-center md:justify-end gap-6 text-xs uppercase tracking-wider text-brand-blue/50">
          <div class="flex items-center gap-2">
            <div class="h-1.5 w-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(252,211,77,0.8)]" />
            <span>SEC Registered</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="h-1.5 w-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(252,211,77,0.8)]" />
            <span>FDIC Insured</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="h-1.5 w-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(252,211,77,0.8)]" />
            <span>ISO Certified</span>
          </div>
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="pb-8">
        <p class="text-brand-blue/40 text-xs leading-relaxed text-center max-w-5xl mx-auto">
          Investment products are not FDIC insured, may lose value, and are not bank guaranteed. 
          Past performance does not guarantee future results. 
          This is a fictional company for demonstration purposes only.
        </p>
      </div>

    </div>
  </footer>
</template>