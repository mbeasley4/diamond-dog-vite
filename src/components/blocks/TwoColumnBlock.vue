<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { toRoute } from '@/utils/toRoute'

const props = defineProps<{
  data: {
    title: string
    text: string
    imageUrl?: string
    layout?: 'image-left' | 'image-right'
    image_option?: 'diamond' | 'hexagon' | 'square'
    cta_primary?: { title: string; url: string }
    cta_secondary?: { title: string; url: string }
  }
}>()
console.log(props.data.image_option)
</script>

<template>
  <section class="relative py-20 md:py-28 bg-brand-dark overflow-hidden">
    <!-- Subtle dot pattern -->
    <div class="absolute inset-0 opacity-[0.06]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,211,77,0.4)_1px,transparent_1px)]
                  bg-[size:24px_24px]" />
    </div>

    <!-- Ambient glow orbs -->
    <div class="pointer-events-none absolute top-0 left-1/4 h-96 w-96 
                rounded-full bg-brand-gold blur-[140px] opacity-20" />
    <div class="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 
                rounded-full bg-brand-green blur-[140px] opacity-15" />

    <div
      class="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
      :class="props.data.layout === 'image-left' ? 'lg:flex-row' : 'lg:flex-row-reverse'"
    >
      <!-- Image Column -->
      <div class="w-full lg:w-1/2 flex justify-center">
        
        <!-- Diamond Shape -->
        <div v-if="data.image_option === 'diamond'" class="relative group w-full max-w-lg">
          <!-- Outer glow effect -->
          <div class="absolute inset-0 bg-brand-gold/20 blur-[80px] 
                      group-hover:bg-brand-gold/35 transition-all duration-500 scale-110" />
          
          <!-- Diamond container -->
          <div class="relative w-full aspect-square">
            <img
              v-if="data.imageUrl"
              :src="data.imageUrl"
              :alt="data.title"
              class="relative w-full h-full object-cover
                     shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                     border-4 border-brand-gold/40
                     group-hover:border-brand-gold group-hover:scale-105 group-hover:rotate-6
                     transition-all duration-700"
              style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);"
            />
          </div>

          <!-- Corner sparkles -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 
                      w-3 h-3 bg-brand-gold rounded-full blur-sm
                      shadow-[0_0_20px_rgba(252,211,77,1)] animate-pulse" />
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 
                      w-3 h-3 bg-brand-gold rounded-full blur-sm
                      shadow-[0_0_20px_rgba(252,211,77,1)] animate-pulse"
                      style="animation-delay: 0.5s" />
          <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 
                      w-2 h-2 bg-brand-blue rounded-full blur-sm
                      shadow-[0_0_15px_rgba(147,197,253,1)] animate-pulse"
                      style="animation-delay: 1s" />
          <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 
                      w-2 h-2 bg-brand-blue rounded-full blur-sm
                      shadow-[0_0_15px_rgba(147,197,253,1)] animate-pulse"
                      style="animation-delay: 1.5s" />
        </div>

        <!-- Hexagon Shape -->
        <div v-else-if="data.image_option === 'hexagon'" class="relative group w-full max-w-lg">
          <!-- Outer glow effect -->
          <div class="absolute -inset-8 bg-brand-gold/20 blur-[80px] 
                      group-hover:bg-brand-gold/35 transition-all duration-500" />
          
          <!-- Hexagon container -->
          <div class="relative w-full aspect-square">
            <img
              v-if="data.imageUrl"
              :src="data.imageUrl"
              :alt="data.title"
              class="relative w-full h-full object-cover
                     shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                     border-4 border-brand-gold/40
                     group-hover:border-brand-gold group-hover:scale-[1.08]
                     transition-all duration-700"
              style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);"
            />
          </div>

          <!-- Hexagon decorative corners -->
          <div class="absolute top-0 left-1/4 -translate-y-2 
                      w-3 h-3 bg-brand-gold rounded-full blur-sm
                      shadow-[0_0_20px_rgba(252,211,77,1)] animate-pulse" />
          <div class="absolute top-0 right-1/4 -translate-y-2 
                      w-3 h-3 bg-brand-gold rounded-full blur-sm
                      shadow-[0_0_20px_rgba(252,211,77,1)] animate-pulse"
                      style="animation-delay: 0.3s" />
          <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 
                      w-2 h-2 bg-brand-blue rounded-full blur-sm
                      shadow-[0_0_15px_rgba(147,197,253,1)] animate-pulse"
                      style="animation-delay: 0.6s" />
          <div class="absolute bottom-0 right-1/4 translate-y-2 
                      w-3 h-3 bg-brand-gold rounded-full blur-sm
                      shadow-[0_0_20px_rgba(252,211,77,1)] animate-pulse"
                      style="animation-delay: 0.9s" />
          <div class="absolute bottom-0 left-1/4 translate-y-2 
                      w-3 h-3 bg-brand-gold rounded-full blur-sm
                      shadow-[0_0_20px_rgba(252,211,77,1)] animate-pulse"
                      style="animation-delay: 1.2s" />
          <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 
                      w-2 h-2 bg-brand-blue rounded-full blur-sm
                      shadow-[0_0_15px_rgba(147,197,253,1)] animate-pulse"
                      style="animation-delay: 1.5s" />
        </div>

        <!-- Square Shape -->
        <div v-else-if="data.image_option === 'square'" class="relative group w-full max-w-lg">
          <!-- Outer glow effect -->
          <div class="absolute -inset-8 bg-brand-gold/20 blur-[80px] 
                      group-hover:bg-brand-gold/35 transition-all duration-500" />
          
          <!-- Square container -->
          <div class="relative w-full aspect-square">
            <img
              v-if="data.imageUrl"
              :src="data.imageUrl"
              :alt="data.title"
              class="relative w-full h-full object-cover
                     shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                     border-4 border-brand-gold/40 rounded-2xl
                     group-hover:border-brand-gold group-hover:scale-105 group-hover:rotate-3
                     transition-all duration-700"
            />
          </div>

          <!-- Square corner sparkles (at 4 corners) -->
          <div class="absolute -top-2 -left-2 
                      w-3 h-3 bg-brand-gold rounded-full blur-sm
                      shadow-[0_0_20px_rgba(252,211,77,1)] animate-pulse" />
          <div class="absolute -top-2 -right-2 
                      w-3 h-3 bg-brand-gold rounded-full blur-sm
                      shadow-[0_0_20px_rgba(252,211,77,1)] animate-pulse"
                      style="animation-delay: 0.5s" />
          <div class="absolute -bottom-2 -left-2 
                      w-3 h-3 bg-brand-blue rounded-full blur-sm
                      shadow-[0_0_15px_rgba(147,197,253,1)] animate-pulse"
                      style="animation-delay: 1s" />
          <div class="absolute -bottom-2 -right-2 
                      w-3 h-3 bg-brand-blue rounded-full blur-sm
                      shadow-[0_0_15px_rgba(147,197,253,1)] animate-pulse"
                      style="animation-delay: 1.5s" />
        </div>

        <!-- Default Rectangle Shape -->
        <div v-else class="relative group w-full">
          <!-- Glow effect behind image -->
          <div class="absolute -inset-6 bg-brand-gold/20 rounded-3xl blur-[60px] 
                      group-hover:bg-brand-gold/30 transition-all duration-500" />
          
          <img
            v-if="data.imageUrl"
            :src="data.imageUrl"
            :alt="data.title"
            class="relative w-full h-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                   border-4 border-brand-gold/30
                   group-hover:border-brand-gold/60 group-hover:scale-[1.02]
                   transition-all duration-500"
          />

          <!-- Decorative corner accents -->
          <div class="absolute -top-4 -right-4 w-16 h-16 border-4 border-brand-gold/40 rounded-full
                      group-hover:scale-110 group-hover:border-brand-gold/70 transition-all duration-500" />
          <div class="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-brand-blue/30 rounded-full
                      group-hover:scale-110 group-hover:border-brand-blue/50 transition-all duration-500" />
        </div>
      </div>

      <!-- Content Column -->
      <div class="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <!-- Title -->
        <h2 class="text-4xl md:text-5xl font-black leading-tight tracking-tight
                   bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold 
                   bg-clip-text text-transparent
                   drop-shadow-[0_0_30px_rgba(252,211,77,0.3)]"
                   style="font-family: 'Impact', 'Anton', 'Bebas Neue', sans-serif;">
          {{ data.title }}
        </h2>

        <!-- Decorative line under title -->
        <div class="h-1 w-20 mx-auto lg:mx-0 bg-gradient-to-r from-brand-gold to-transparent rounded-full
                    shadow-[0_0_15px_rgba(252,211,77,0.6)]" />

        <!-- Text -->
        <div class="text-lg md:text-xl leading-relaxed text-brand-blue/90 font-medium"
             v-html="data.text">
        </div>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <!-- Primary CTA -->
          <RouterLink
            v-if="data.cta_primary"
            :to="toRoute(data.cta_primary.url)"
            class="group relative overflow-hidden"
          >
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-brand-gold rounded-xl blur-xl opacity-50 
                        group-hover:opacity-80 transition-opacity duration-300 scale-110" />
            
            <div class="relative inline-block px-8 py-4 
                        bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold
                        text-brand-dark font-black text-base rounded-xl
                        shadow-[0_0_40px_rgba(252,211,77,0.5),inset_0_2px_15px_rgba(255,255,255,0.3)]
                        border-3 border-yellow-200/50
                        group-hover:scale-105 group-hover:shadow-[0_0_60px_rgba(252,211,77,0.8)]
                        transition-all duration-300
                        uppercase tracking-wide">
              {{ data.cta_primary.title }}
              
              <!-- Shine effect -->
              <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full
                          bg-gradient-to-r from-transparent via-white/30 to-transparent
                          transition-transform duration-700 skew-x-12" />
            </div>
          </RouterLink>

          <!-- Secondary CTA -->
          <RouterLink
            v-if="data.cta_secondary"
            :to="toRoute(data.cta_secondary.url)"
            class="group relative inline-block px-8 py-4 
                   border-3 border-brand-gold/60 text-brand-gold
                   bg-brand-gold/5 backdrop-blur-sm font-bold text-base rounded-xl
                   hover:bg-brand-gold/15 hover:border-brand-gold
                   hover:shadow-[0_0_30px_rgba(252,211,77,0.4)]
                   hover:scale-105
                   transition-all duration-300
                   uppercase tracking-wide
                   shadow-[0_0_15px_rgba(252,211,77,0.2)]"
          >
            {{ data.cta_secondary.title }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>