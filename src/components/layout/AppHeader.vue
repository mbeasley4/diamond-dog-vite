<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
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
const route = useRoute()

const isOpen = ref(false)

onMounted(async () => {
  menu.value = await fetch(`${import.meta.env.VITE_WP_API}/theme/v1/menu`).then(res => res.json())
  site.value = await fetch(`${import.meta.env.VITE_WP_API}/theme/v1/site`).then(res => res.json())
})

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-brand-dark/90 backdrop-blur border-b border-brand-gold/20">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-3 group">
        <img
          v-if="site.logo"
          :src="site.logo"
          alt="Logo"
          class="h-14 md:h-20 w-auto transition group-hover:scale-105"
        />
        <span v-if="site.name" class="sr-only">{{ site.name }}</span>
      </RouterLink>

      <!-- Desktop Menu -->
      <nav class="hidden md:block">
        <ul class="flex items-center gap-8">
          <li v-for="item in menu" :key="item.ID">
            <RouterLink
              :to="toRoute(item.url)"
              class="relative text-sm uppercase tracking-wide text-brand-light/80 hover:text-brand-gold transition"
              :class="{
                'text-brand-gold font-semibold after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-brand-gold after:rounded-full':
                  route.path === toRoute(item.url)
              }"
            >
              {{ item.title }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Mobile Toggle -->
      <button
        @click="isOpen = true"
        class="md:hidden inline-flex items-center justify-center rounded-xl border border-brand-gold/40 p-2 text-brand-gold hover:bg-brand-gold/10 transition"
        aria-label="Open menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

   <!-- Portal drawer above everything -->
  <Teleport to="body">
    <!-- Overlay -->
    <div
      v-show="isOpen"
      class="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-md"
      @click="closeMenu"
    />

    <!-- Drawer -->
    <aside
      class="fixed top-0 right-0 z-[9999] h-full w-[88%] max-w-sm bg-brand-dark
             border-l border-brand-gold/20 transform-gpu will-change-transform
             transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]
             shadow-[0_0_80px_rgba(0,0,0,0.9)]"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div class="flex items-center justify-between px-6 py-5 border-b border-brand-gold/20">
        <span class="text-brand-gold font-extrabold tracking-wide">Menu</span>
        <button
          @click="closeMenu"
          class="rounded-lg p-2 text-brand-gold hover:bg-brand-gold/10 transition"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      <nav class="px-6 py-8">
        <ul class="flex flex-col gap-6">
          <li v-for="item in menu" :key="item.ID">
            <RouterLink
              @click="closeMenu"
              :to="toRoute(item.url)"
              class="block text-lg font-semibold tracking-wide text-brand-light/90 hover:text-brand-gold transition"
              :class="{ 'text-brand-gold': route.path === toRoute(item.url) }"
            >
              {{ item.title }}
            </RouterLink>
          </li>
        </ul>

        <!-- Mobile CTA -->
        <RouterLink
          to="/get-started"
          @click="closeMenu"
          class="mt-10 block w-full text-center bg-brand-gold text-black font-extrabold px-6 py-4 rounded-xl
                 shadow-[0_0_30px_rgba(252,211,77,0.6)]
                 hover:shadow-[0_0_50px_rgba(252,211,77,0.9)] transition"
        >
          Get Started
        </RouterLink>
      </nav>
    </aside>
  </Teleport>
  </header>
</template>
