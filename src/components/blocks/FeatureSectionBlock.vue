<script setup lang="ts">
import { getMediaUrl } from '@/utils/mediaUrl';
import { ref } from 'vue';

const props = defineProps<{
  data: {
    title: string,
    content: string,
    features: {
      title: string
      text: string,
      icon: number,
    }[]
  }
}>()
const iconUrls = ref<Record<number, string>>({});
props.data.features.forEach(async (item) => {
  if (item.icon) {
    iconUrls.value[item.icon] = await getMediaUrl(item.icon);
  }
});
</script>

<template>
  <section class="relative overflow-hidden bg-brand-dark">
    <!-- Subtle dot pattern -->
    <div class="absolute inset-0 opacity-[0.08]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,211,77,0.4)_1px,transparent_1px)]
                  bg-[size:24px_24px]" />
    </div>

    <!-- Intense glowing orbs - more dramatic on dark -->
    <div class="pointer-events-none absolute -top-48 -left-48 h-96 w-96 rounded-full 
                bg-brand-gold blur-[140px] opacity-50 animate-pulse" />
    <div class="pointer-events-none absolute -bottom-48 -right-48 h-96 w-96 rounded-full 
                bg-brand-green blur-[140px] opacity-40 animate-pulse" 
                style="animation-delay: 1s" />
    <div class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] 
                rounded-full bg-brand-gold/25 blur-[180px]" />

    <!-- Additional accent glows -->
    <div class="pointer-events-none absolute top-1/4 right-1/4 h-64 w-64 rounded-full 
                bg-brand-blue blur-[120px] opacity-30 animate-pulse" 
                style="animation-delay: 2s; animation-duration: 5s" />

    <div class="relative max-w-7xl mx-auto px-6 py-32">
      <!-- Aggressive title with gold accent -->
      <div class="text-center mb-20">
        <div class="inline-block mb-6 px-6 py-2.5 bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold 
                    text-brand-dark font-black text-sm tracking-[0.3em] 
                    uppercase rounded-full shadow-[0_0_50px_rgba(252,211,77,0.8),inset_0_2px_15px_rgba(255,255,255,0.4)] 
                    border-2 border-yellow-200/50 animate-pulse">
          Premium Features
        </div>
        <h2 class="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold 
                   bg-clip-text text-transparent leading-tight tracking-tight
                   drop-shadow-[0_0_40px_rgba(252,211,77,0.5)]
                   animate-[shimmer_3s_ease-in-out_infinite]"
                   style="font-family: 'Impact', 'Anton', 'Bebas Neue', sans-serif; letter-spacing: -0.02em;">
          {{ data.title }}
        </h2>
        <div class="h-2 w-40 mx-auto bg-gradient-to-r from-transparent via-brand-gold to-transparent rounded-full
                    shadow-[0_0_30px_rgba(252,211,77,0.9)] animate-pulse" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(item, i) in data.features"
          :key="i"
          class="group relative"
          :style="{ animationDelay: `${i * 150}ms` }"
        >
          <!-- Card with VERY dark background and intense gold borders -->
          <div class="relative h-full p-8 rounded-2xl 
                      bg-gradient-to-br from-black/98 via-brand-dark/95 to-black/98
                      border-4 border-brand-gold/40
                      shadow-[0_0_0_1px_rgba(252,211,77,0.3),0_25px_70px_rgba(0,0,0,0.8)]
                      hover:shadow-[0_0_0_4px_rgba(252,211,77,0.8),0_35px_90px_rgba(252,211,77,0.4),0_0_80px_rgba(252,211,77,0.5)]
                      hover:border-brand-gold
                      hover:-translate-y-4 hover:scale-[1.03]
                      transition-all duration-500 ease-out
                      backdrop-blur-sm
                      overflow-hidden">
            
            <!-- Animated corner accent - brighter on dark -->
            <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-gold/30 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
            
            <!-- Glowing top border - more intense -->
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent
                        opacity-60 group-hover:opacity-100 transition-opacity duration-500
                        shadow-[0_0_15px_rgba(252,211,77,0.8)]" />

            <!-- Side glow accent -->
            <div class="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-brand-gold to-transparent
                        opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

            <!-- Icon container with MASSIVE glow on dark background -->
            <div class="relative mb-6 inline-block">
              <div class="absolute inset-0 bg-brand-gold rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 
                          transition-opacity duration-500 scale-125" />
              <div class="absolute inset-0 bg-brand-gold rounded-2xl blur-xl opacity-40 group-hover:opacity-70 
                          transition-opacity duration-500 scale-110" />
              <div class="relative h-20 w-20 p-4 rounded-2xl 
                          bg-gradient-to-br from-brand-gold via-yellow-300 to-brand-gold
                          flex items-center justify-center
                          shadow-[0_0_50px_rgba(252,211,77,1),inset_0_3px_25px_rgba(255,255,255,0.4)]
                          border-3 border-yellow-100/60
                          group-hover:scale-110 group-hover:rotate-12
                          transition-all duration-500">
                <img
                  v-if="item.icon"
                  :src="iconUrls[item.icon]"
                  :alt="item.title"
                  class="relative h-12 w-12 object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]
                         group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <!-- Title with brighter gold gradient on dark -->
            <h3 class="text-2xl font-black mb-4 bg-gradient-to-r from-yellow-200 via-brand-gold to-yellow-200
                       bg-clip-text text-transparent
                       leading-tight tracking-tight 
                       group-hover:from-brand-gold group-hover:to-yellow-200
                       drop-shadow-[0_0_20px_rgba(252,211,77,0.4)]
                       transition-all duration-500"
                       style="font-family: 'Impact', 'Anton', 'Bebas Neue', sans-serif;">
              {{ item.title }}
            </h3>

            <!-- Description with brighter blue on dark background -->
            <p class="text-brand-blue leading-relaxed font-medium text-base
                      group-hover:text-brand-light/90 transition-colors duration-500">
              {{ item.text }}
            </p>

            <!-- Decorative bottom accent - glowing -->
            <div class="absolute bottom-4 right-4 w-20 h-20 border-4 border-brand-gold/30 rounded-full
                        group-hover:border-brand-gold/70 group-hover:scale-125 group-hover:rotate-45
                        shadow-[0_0_20px_rgba(252,211,77,0.3)]
                        group-hover:shadow-[0_0_40px_rgba(252,211,77,0.7)]
                        transition-all duration-700" />

            <!-- Corner sparkle effect -->
            <div class="absolute top-4 left-4 w-2 h-2 bg-brand-gold rounded-full
                        opacity-0 group-hover:opacity-100 
                        shadow-[0_0_10px_rgba(252,211,77,1)]
                        transition-opacity duration-300" />
            <div class="absolute top-6 left-8 w-1 h-1 bg-brand-gold rounded-full
                        opacity-0 group-hover:opacity-100 
                        shadow-[0_0_8px_rgba(252,211,77,1)]
                        transition-opacity duration-300 delay-75" />
          </div>

          <!-- Outer glow effect - more intense -->
          <div class="absolute inset-0 -z-10 bg-gradient-to-br from-brand-gold/0 via-brand-gold/15 to-brand-gold/0 
                      rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                      scale-90 group-hover:scale-110" />
        </div>
      </div>

      <!-- Bottom decorative line with extra glow -->
      <div class="mt-24 flex justify-center">
        <div class="h-1.5 w-72 bg-gradient-to-r from-transparent via-brand-gold to-transparent rounded-full
                    shadow-[0_0_30px_rgba(252,211,77,0.8)] animate-pulse" />
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes shimmer {
  0%, 100% { 
    filter: brightness(1) saturate(1); 
  }
  50% { 
    filter: brightness(1.3) saturate(1.4); 
  }
}

</style>