<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
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

type TickerItem = {
  symbol: string
  price: number
  change: number
}

const SYMBOLS = ['GE', 'PG', 'GOOGL', 'KR', 'AFG', 'CTAS', 'FITB']
const FINNHUB_KEY = import.meta.env.VITE_FINNHUB_API_KEY

const menu = ref<MenuItem[]>([])
const site = ref<SiteInfo>({})
const tickers = ref<TickerItem[]>([])
const route = useRoute()

const isOpen = ref(false)
let tickerInterval: ReturnType<typeof setInterval> | null = null

async function fetchTickers() {
  if (!FINNHUB_KEY) return
  const results = await Promise.allSettled(
    SYMBOLS.map(symbol =>
      fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_KEY}`)
        .then(res => res.json())
        .then(data => ({
          symbol,
          price: data.c as number,
          change: data.c && data.pc ? ((data.c - data.pc) / data.pc) * 100 : 0,
        }))
    )
  )
  const items = results
    .filter((r): r is PromiseFulfilledResult<TickerItem> => r.status === 'fulfilled' && r.value.price > 0)
    .map(r => r.value)
  if (items.length) tickers.value = items
}

onMounted(async () => {
  menu.value = await fetch(`${import.meta.env.VITE_WP_API}/theme/v1/menu`).then(res => res.json())
  site.value = await fetch(`${import.meta.env.VITE_WP_API}/theme/v1/site`).then(res => res.json())
  fetchTickers()
  tickerInterval = setInterval(fetchTickers, 60_000)
})

onUnmounted(() => {
  if (tickerInterval) clearInterval(tickerInterval)
})

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-brand-dark/90 backdrop-blur border-b border-brand-gold/20">

    <!-- Stock Ticker Eyebrow -->
    <div v-if="tickers.length" class="ticker-eyebrow bg-brand-gold text-brand-dark overflow-hidden">
      <div class="ticker-track">
        <span v-for="(item, i) in [...tickers, ...tickers]" :key="i" class="ticker-item">
          <span class="font-bold">{{ item.symbol }}</span>
          <span class="ml-1">${{ item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</span>
          <span class="ml-1" :class="item.change >= 0 ? 'text-brand-green' : 'text-red-700'">
            {{ item.change >= 0 ? '▲' : '▼' }} {{ Math.abs(item.change).toFixed(2) }}%
          </span>
        </span>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-3 group">
        <img
          v-if="site.logo"
          :src="site.logo"
          alt="Diamond Dog Capital Investments"
          class="h-12 md:h-14 w-auto transition group-hover:scale-105"
        />
        <span v-if="site.name" class="sr-only">{{ site.name }}</span>
      </RouterLink>

      <!-- Desktop Menu -->
      <nav class="hidden md:block">
        <ul class="flex items-center gap-8">
          <li v-for="item in menu" :key="item.ID">
            <RouterLink
              :to="toRoute(item.url)"
              class="relative text-lg uppercase tracking-wide text-brand-light/80 hover:text-brand-gold transition"
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

<style scoped>
.ticker-eyebrow {
  height: 28px;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  letter-spacing: 0.025em;
}

.ticker-track {
  display: flex;
  white-space: nowrap;
  animation: ticker-scroll 30s linear infinite;
}

.ticker-item {
  padding: 0 1.5rem;
}

@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
