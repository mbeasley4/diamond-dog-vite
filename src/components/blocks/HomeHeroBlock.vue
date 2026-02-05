<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { toRoute } from '@/utils/toRoute'

const props = defineProps<{
  data: {
    badge: string
    headline_1: string
    headline_2: string
    content: string
    imageUrl?: string
    cta_primary: { title: string; url: string }
    cta_secondary: { title: string; url: string }
  }
}>()

</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-green/90 to-brand-dark min-h-screen flex items-center">
    <!-- Animated grid pattern overlay -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-[linear-gradient(rgba(252,211,77,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(252,211,77,0.3)_1px,transparent_1px)]
                  bg-[size:50px_50px] md:bg-[size:80px_80px]
                  animate-[pulse_8s_ease-in-out_infinite]" />
    </div>

    <!-- Diagonal animated stripes -->
    <div class="absolute inset-0 opacity-[0.07]">
      <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_60px,rgba(252,211,77,0.4)_60px,rgba(252,211,77,0.4)_120px)]
                  animate-[slide_25s_linear_infinite]" />
    </div>

    <!-- MASSIVE glowing orbs -->
    <div class="pointer-events-none absolute -top-64 -left-64 h-[700px] w-[700px] md:h-[900px] md:w-[900px]
                rounded-full bg-brand-gold blur-[200px] opacity-30 animate-pulse" />
    <div class="pointer-events-none absolute -bottom-64 -right-64 h-[600px] w-[600px] md:h-[800px] md:w-[800px]
                rounded-full bg-brand-blue blur-[200px] opacity-25 animate-pulse" 
                style="animation-delay: 1.5s; animation-duration: 4s" />
    <div class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                h-[500px] w-[500px] md:h-[700px] md:w-[700px]
                rounded-full bg-brand-gold/20 blur-[180px]" />

    <!-- Floating gold particles effect -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="particle absolute top-20 left-[10%] h-2 w-2 rounded-full bg-brand-gold/40 blur-sm" 
           style="animation: float 6s ease-in-out infinite" />
      <div class="particle absolute top-40 right-[15%] h-3 w-3 rounded-full bg-brand-gold/30 blur-sm" 
           style="animation: float 8s ease-in-out infinite; animation-delay: 1s" />
      <div class="particle absolute bottom-32 left-[20%] h-2 w-2 rounded-full bg-brand-blue/40 blur-sm" 
           style="animation: float 7s ease-in-out infinite; animation-delay: 2s" />
      <div class="particle absolute bottom-48 right-[25%] h-2 w-2 rounded-full bg-brand-gold/30 blur-sm" 
           style="animation: float 9s ease-in-out infinite; animation-delay: 0.5s" />
    </div>

    <div class="relative max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">

      <div class="relative z-10">
        <!-- Aggressive badge with pulsing glow -->
        <div class="mb-8 inline-block animate-[fadeInUp_0.8s_ease-out]">
          <div class="relative">
            <div class="absolute inset-0 bg-brand-gold rounded-full blur-xl opacity-60 animate-pulse" />
            <span class="relative inline-block px-6 py-2.5 rounded-full text-xs md:text-sm tracking-[0.25em] uppercase font-black
                         bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold
                         text-brand-dark
                         shadow-[0_0_40px_rgba(252,211,77,0.8),inset_0_2px_12px_rgba(255,255,255,0.4)]
                         border-2 border-yellow-200/50
                         hover:scale-105 transition-transform duration-300">
              {{ data.badge }}
            </span>
          </div>
        </div>

        <!-- MASSIVE headline with aggressive styling -->
        <h1 class="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter mb-8
                   animate-[fadeInUp_0.8s_ease-out_0.2s_backwards]"
                   style="font-family: 'Impact', 'Anton', 'Bebas Neue', sans-serif;">
          <span class="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            {{ data.headline_1 }}
          </span>
          <span class="block bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold 
                       bg-clip-text text-transparent
                       drop-shadow-[0_0_60px_rgba(252,211,77,0.8)]
                       [text-shadow:0_0_80px_rgba(252,211,77,0.5)]
                       animate-[shimmer_3s_ease-in-out_infinite]
                       relative">
            {{ data.headline_2 }}
            <!-- Underline accent -->
            <span class="absolute -bottom-2 left-0 right-0 h-2 md:h-3 
                         bg-gradient-to-r from-transparent via-brand-gold to-transparent 
                         rounded-full shadow-[0_0_30px_rgba(252,211,77,0.9)]" />
          </span>
        </h1>

        <!-- Body text with blue accent -->
        <div class="mt-8 text-lg md:text-xl text-brand-blue/90 max-w-xl leading-relaxed font-medium
                    animate-[fadeInUp_0.8s_ease-out_0.4s_backwards]"
             v-html="data.content" />

        <!-- BOLD CTAs -->
        <div class="mt-12 flex flex-col sm:flex-row gap-5 animate-[fadeInUp_0.8s_ease-out_0.6s_backwards]">
          <!-- Primary CTA - MEGA BOLD -->
          <RouterLink :to="toRoute(data.cta_primary.url)"
                      class="group relative overflow-hidden">
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-brand-gold rounded-2xl blur-2xl opacity-50 
                        group-hover:opacity-80 transition-opacity duration-500 scale-110" />
            
            <!-- Button -->
            <div class="relative w-full sm:w-auto text-center 
                        bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold
                        text-brand-dark font-black text-lg px-10 py-5 rounded-2xl
                        shadow-[0_0_50px_rgba(252,211,77,0.6),inset_0_2px_20px_rgba(255,255,255,0.3)]
                        border-4 border-yellow-200/50
                        group-hover:scale-105 group-hover:shadow-[0_0_80px_rgba(252,211,77,0.9)]
                        transition-all duration-300
                        uppercase tracking-wider">
              {{ data.cta_primary.title }}
              
              <!-- Animated shine effect -->
              <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full
                          bg-gradient-to-r from-transparent via-white/30 to-transparent
                          transition-transform duration-1000 skew-x-12" />
            </div>
          </RouterLink>

          <!-- Secondary CTA -->
          <RouterLink :to="toRoute(data.cta_secondary.url)"
                      class="group relative">
            <div class="relative w-full sm:w-auto text-center px-10 py-5 rounded-2xl font-bold text-lg
                        border-4 border-brand-gold/60 text-brand-gold
                        bg-brand-gold/5 backdrop-blur-sm
                        hover:bg-brand-gold/20 hover:border-brand-gold
                        hover:shadow-[0_0_40px_rgba(252,211,77,0.5)]
                        hover:scale-105
                        transition-all duration-300
                        uppercase tracking-wide
                        shadow-[0_0_20px_rgba(252,211,77,0.2)]">
              {{ data.cta_secondary.title }}
            </div>
          </RouterLink>
        </div>

        <!-- Decorative stats or trust indicators (optional) -->
        <div class="mt-16 flex gap-8 text-brand-blue/70 text-sm uppercase tracking-widest
                    animate-[fadeInUp_0.8s_ease-out_0.8s_backwards]">
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(252,211,77,0.8)] animate-pulse" />
            <span>Trusted</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(252,211,77,0.8)] animate-pulse" 
                 style="animation-delay: 0.5s" />
            <span>Secure</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(252,211,77,0.8)] animate-pulse" 
                 style="animation-delay: 1s" />
            <span>Premium</span>
          </div>
        </div>
      </div>

      <!-- Image section with AGGRESSIVE styling -->
      <div class="relative mt-10 lg:mt-0 animate-[fadeInRight_1s_ease-out_0.4s_backwards]">
        <!-- Multiple layered glows -->
        <div class="absolute -inset-16 md:-inset-24 rounded-full 
                    bg-gradient-to-br from-brand-gold/30 via-brand-blue/20 to-brand-gold/30 
                    blur-[120px] md:blur-[160px] animate-pulse" />
        <div class="absolute -inset-12 md:-inset-20 rounded-full 
                    bg-brand-gold/40 blur-[100px] opacity-50" />
        
        <!-- Decorative rotating ring -->
        <div class="absolute inset-0 animate-[spin_20s_linear_infinite]">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[120%] h-[120%] rounded-full 
                      border-2 border-dashed border-brand-gold/20" />
        </div>

        <!-- Image container with 3D effect -->
        <div class="relative group">
          <img v-if="data.imageUrl"
               :src="data.imageUrl"
               alt="Hero visual"
               class="relative w-full max-w-xs sm:max-w-sm md:max-w-lg mx-auto
                      drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]
                      group-hover:scale-105 group-hover:rotate-2
                      transition-all duration-700 ease-out
                      filter group-hover:brightness-110" />
          
          <!-- Additional decorative frame -->
          <div class="absolute -inset-4 border-4 border-brand-gold/30 rounded-3xl
                      group-hover:border-brand-gold/60 group-hover:scale-105 group-hover:-rotate-3
                      transition-all duration-700 pointer-events-none" />
        </div>

        <!-- Corner accent decorations -->
        <div class="absolute -top-8 -right-8 w-24 h-24 border-4 border-brand-gold/40 rounded-full
                    animate-[ping_3s_ease-in-out_infinite]" />
        <div class="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-brand-blue/30 rounded-full
                    animate-[ping_4s_ease-in-out_infinite]" 
                    style="animation-delay: 1s" />
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes slide {
  0% { transform: translateX(0) translateY(0); }
  100% { transform: translateX(120px) translateY(120px); }
}

@keyframes shimmer {
  0%, 100% { filter: brightness(1) saturate(1); }
  50% { filter: brightness(1.2) saturate(1.3); }
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

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(-40px) translateX(-10px); }
  75% { transform: translateY(-20px) translateX(10px); }
}

@keyframes ping {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}
</style>