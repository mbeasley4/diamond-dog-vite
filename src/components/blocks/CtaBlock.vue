<script setup lang="ts">
import { toRoute } from '@/utils/toRoute'

const props = defineProps<{
  data: {
    headline: string,
    text: string,
    cta_primary: { title: string; url: string }
  }
}>()
</script> 
 
<template>
  <section class="relative overflow-hidden bg-brand-dark text-brand-light">
    <!-- Subtle dot pattern background -->
    <div class="absolute inset-0 opacity-[0.06]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,211,77,0.4)_1px,transparent_1px)]
                  bg-[size:24px_24px]" />
    </div>

    <!-- MASSIVE glowing orbs for drama -->
    <div class="pointer-events-none absolute -top-48 left-1/4 h-[600px] w-[600px] md:h-[800px] md:w-[800px]
                rounded-full bg-brand-gold blur-[180px] opacity-40 animate-pulse" />
    <div class="pointer-events-none absolute -bottom-48 right-1/4 h-[500px] w-[500px] md:h-[700px] md:w-[700px]
                rounded-full bg-brand-green blur-[160px] opacity-35 animate-pulse" 
                style="animation-delay: 1s; animation-duration: 4s" />
    <div class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                h-[700px] w-[700px] rounded-full bg-brand-gold/30 blur-[200px]" />

    <!-- Animated light rays -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full 
                  bg-gradient-to-b from-brand-gold via-transparent to-transparent
                  animate-[shimmer_3s_ease-in-out_infinite]" />
      <div class="absolute top-0 left-1/3 w-[1px] h-full 
                  bg-gradient-to-b from-brand-gold via-transparent to-transparent
                  animate-[shimmer_3s_ease-in-out_infinite]" 
                  style="animation-delay: 1s" />
      <div class="absolute top-0 left-2/3 w-[1px] h-full 
                  bg-gradient-to-b from-brand-gold via-transparent to-transparent
                  animate-[shimmer_3s_ease-in-out_infinite]" 
                  style="animation-delay: 2s" />
    </div>

    <div class="relative max-w-5xl mx-auto px-6 py-28 md:py-40 text-center">
      
      <!-- Top accent badge -->
      <div class="mb-8 inline-block animate-[fadeInDown_0.8s_ease-out]">
        <div class="relative">
          <div class="absolute inset-0 bg-brand-gold rounded-full blur-xl opacity-50 animate-pulse" />
          <span class="relative inline-block px-5 py-2 rounded-full text-xs tracking-[0.25em] uppercase font-black
                       bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold
                       text-brand-dark
                       shadow-[0_0_30px_rgba(252,211,77,0.7),inset_0_2px_10px_rgba(255,255,255,0.3)]
                       border-2 border-yellow-200/40">
            Limited Time
          </span>
        </div>
      </div>

      <!-- MASSIVE Headline with intense effects -->
      <h2 class="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter mb-10
                 animate-[fadeInUp_0.8s_ease-out_0.2s_backwards]"
                 style="font-family: 'Impact', 'Anton', 'Bebas Neue', sans-serif;">
        <span class="block bg-gradient-to-r from-white via-brand-light to-white 
                     bg-clip-text text-transparent
                     drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
          {{ data.headline }}
        </span>
      </h2>

      <!-- Subcopy with blue accent -->
      <p class="mt-8 text-lg md:text-2xl text-brand-blue/95 max-w-3xl mx-auto leading-relaxed font-medium
                animate-[fadeInUp_0.8s_ease-out_0.4s_backwards]">
        {{ data.text }}
      </p>

      <!-- MEGA CTA Button with all the bells and whistles -->
      <div class="mt-14 md:mt-20 flex justify-center animate-[fadeInUp_0.8s_ease-out_0.6s_backwards]">
        <RouterLink :to="toRoute(data.cta_primary.url)"
                    class="group relative inline-block">
          
          <!-- Outer pulsing glow rings -->
          <div class="absolute inset-0 rounded-3xl bg-brand-gold blur-3xl opacity-40 
                      group-hover:opacity-70 animate-pulse transition-opacity duration-500 scale-110" />
          <div class="absolute inset-0 rounded-3xl bg-brand-gold blur-2xl opacity-30 
                      group-hover:opacity-60 transition-opacity duration-500 scale-105" />
          
          <!-- Main button container -->
          <div class="relative">
            <!-- Animated border glow -->
            <div class="absolute inset-0 rounded-3xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500
                          animate-[slide-horizontal_2s_linear_infinite]" />
            </div>

            <!-- The actual button -->
            <div class="relative inline-flex items-center justify-center
                        bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold
                        text-brand-dark font-black text-xl md:text-2xl
                        px-12 md:px-16 py-5 md:py-7 rounded-3xl
                        shadow-[0_0_60px_rgba(252,211,77,0.8),inset_0_3px_25px_rgba(255,255,255,0.4)]
                        border-4 border-yellow-200/50
                        group-hover:scale-110 group-hover:shadow-[0_0_100px_rgba(252,211,77,1),inset_0_3px_30px_rgba(255,255,255,0.5)]
                        group-hover:border-yellow-100
                        transition-all duration-500
                        uppercase tracking-wider
                        overflow-hidden">
              
              <!-- Button text -->
              <span class="relative z-10 flex items-center gap-3">
                {{ data.cta_primary.title }}
                
                <!-- Arrow icon with animation -->
                <svg class="w-7 h-7 group-hover:translate-x-2 transition-transform duration-500" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24">
                  <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="3" 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>

              <!-- Shine sweep effect -->
              <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full
                          bg-gradient-to-r from-transparent via-white/40 to-transparent
                          transition-transform duration-1000 skew-x-12" />
            </div>
          </div>
        </RouterLink>
      </div>

      <!-- Trust indicators below button -->
      <div class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 text-brand-blue/60 text-sm uppercase tracking-widest
                  animate-[fadeInUp_0.8s_ease-out_0.8s_backwards]">
        <div class="flex items-center gap-2">
          <div class="h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(252,211,77,0.8)] animate-pulse" />
          <span>Secure</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(252,211,77,0.8)] animate-pulse" 
               style="animation-delay: 0.5s" />
          <span>Instant Access</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(252,211,77,0.8)] animate-pulse" 
               style="animation-delay: 1s" />
          <span>No Risk</span>
        </div>
      </div>

      <!-- Decorative bottom accent -->
      <div class="mt-16 flex justify-center">
        <div class="h-1.5 w-48 bg-gradient-to-r from-transparent via-brand-gold to-transparent rounded-full
                    shadow-[0_0_25px_rgba(252,211,77,0.7)] animate-pulse" />
      </div>
    </div>
  </section>
</template>

<style scoped>


@keyframes shimmer {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-horizontal {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>