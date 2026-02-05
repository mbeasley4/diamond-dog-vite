<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { toRoute } from '@/utils/toRoute'

const props = defineProps<{
  data: {
    badge?: string
    headline_1: string
    content?: string
    imageUrl?: string
    cta_primary?: { title: string; url: string }
    cta_secondary?: { title: string; url: string }
  }
}>()

</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-green/90 to-brand-dark">
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

    <!-- Glowing orbs - smaller for interior hero -->
    <div class="pointer-events-none absolute -top-32 -left-32 h-[400px] w-[400px] md:h-[500px] md:w-[500px]
                rounded-full bg-brand-gold blur-[160px] opacity-30 animate-pulse" />
    <div class="pointer-events-none absolute -bottom-32 -right-32 h-[350px] w-[350px] md:h-[450px] md:w-[450px]
                rounded-full bg-brand-blue blur-[160px] opacity-25 animate-pulse" 
                style="animation-delay: 1.5s; animation-duration: 4s" />

    <!-- Floating gold particles effect -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="particle absolute top-10 left-[10%] h-2 w-2 rounded-full bg-brand-gold/40 blur-sm" 
           style="animation: float 6s ease-in-out infinite" />
      <div class="particle absolute top-16 right-[15%] h-2 w-2 rounded-full bg-brand-gold/30 blur-sm" 
           style="animation: float 8s ease-in-out infinite; animation-delay: 1s" />
      <div class="particle absolute bottom-12 left-[20%] h-2 w-2 rounded-full bg-brand-blue/40 blur-sm" 
           style="animation: float 7s ease-in-out infinite; animation-delay: 2s" />
    </div>

    <div class="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
      
      <div class="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8 lg:gap-12 items-center">
        
        <!-- Left Column - Content -->
        <div class="text-center lg:text-left">
          <!-- Optional badge -->
          <div v-if="data.badge" class="mb-6 inline-block animate-[fadeInDown_0.8s_ease-out]">
            <div class="relative">
              <div class="absolute inset-0 bg-brand-gold rounded-full blur-xl opacity-60 animate-pulse" />
              <span class="relative inline-block px-5 py-2 rounded-full text-xs md:text-sm tracking-[0.25em] uppercase font-black
                           bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold
                           text-brand-dark
                           shadow-[0_0_40px_rgba(252,211,77,0.8),inset_0_2px_12px_rgba(255,255,255,0.4)]
                           border-2 border-yellow-200/50
                           hover:scale-105 transition-transform duration-300">
                {{ data.badge }}
              </span>
            </div>
          </div>

          <!-- Headline - single line -->
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter mb-6
                     animate-[fadeInUp_0.8s_ease-out_0.2s_backwards]"
                     style="font-family: 'Impact', 'Anton', 'Bebas Neue', sans-serif;">
            <span class="block bg-gradient-to-r from-white via-brand-gold to-white 
                         bg-clip-text text-transparent
                         drop-shadow-[0_0_50px_rgba(252,211,77,0.6)]
                         [text-shadow:0_0_60px_rgba(252,211,77,0.4)]
                         animate-[shimmer_3s_ease-in-out_infinite]">
              {{ data.headline_1 }}
            </span>
          </h1>

          <!-- Optional content text -->
          <div v-if="data.content" 
               class="mt-6 text-base md:text-lg text-brand-blue/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium
                      animate-[fadeInUp_0.8s_ease-out_0.4s_backwards]"
               v-html="data.content" />

          <!-- Optional CTAs -->
          <div v-if="data.cta_primary || data.cta_secondary" 
               class="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-[fadeInUp_0.8s_ease-out_0.6s_backwards]">
            
            <!-- Primary CTA -->
            <RouterLink v-if="data.cta_primary"
                        :to="toRoute(data.cta_primary.url)"
                        class="group relative overflow-hidden">
              <div class="absolute inset-0 bg-brand-gold rounded-2xl blur-2xl opacity-50 
                          group-hover:opacity-80 transition-opacity duration-500 scale-110" />
              
              <div class="relative w-full sm:w-auto text-center 
                          bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold
                          text-brand-dark font-black text-base md:text-lg px-8 py-4 rounded-2xl
                          shadow-[0_0_50px_rgba(252,211,77,0.6),inset_0_2px_20px_rgba(255,255,255,0.3)]
                          border-4 border-yellow-200/50
                          group-hover:scale-105 group-hover:shadow-[0_0_80px_rgba(252,211,77,0.9)]
                          transition-all duration-300
                          uppercase tracking-wider">
                {{ data.cta_primary.title }}
                
                <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full
                            bg-gradient-to-r from-transparent via-white/30 to-transparent
                            transition-transform duration-1000 skew-x-12" />
              </div>
            </RouterLink>

            <!-- Secondary CTA -->
            <RouterLink v-if="data.cta_secondary"
                        :to="toRoute(data.cta_secondary.url)"
                        class="group relative">
              <div class="relative w-full sm:w-auto text-center px-8 py-4 rounded-2xl font-bold text-base md:text-lg
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
        </div>

        <!-- Right Column - Image -->
        <div v-if="data.imageUrl" class="relative mt-10 lg:mt-0 animate-[fadeInRight_1s_ease-out_0.4s_backwards]">
          <!-- Multiple layered glows -->
          <div class="absolute -inset-12 md:-inset-16 rounded-full 
                      bg-gradient-to-br from-brand-gold/30 via-brand-blue/20 to-brand-gold/30 
                      blur-[100px] md:blur-[140px] animate-pulse" />
          <div class="absolute -inset-8 md:-inset-12 rounded-full 
                      bg-brand-gold/40 blur-[80px] opacity-50" />
          
          <!-- Decorative rotating ring -->
          <div class="absolute inset-0 animate-[spin_20s_linear_infinite]">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[110%] h-[110%] rounded-full 
                        border-2 border-dashed border-brand-gold/20" />
          </div>

          <!-- Image container with 3D effect -->
          <div class="relative group">
            <img 
              :src="data.imageUrl"
              :alt="data.headline_1"
              class="relative w-full max-w-80 mx-auto lg:max-w-80
                     drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]
                     group-hover:scale-105 group-hover:rotate-2
                     transition-all duration-700 ease-out
                     filter group-hover:brightness-110 
                     rounded-2xl" />
            
            <!-- Additional decorative frame -->
            <div class="absolute -inset-3 border-4 border-brand-gold/30 rounded-3xl
                        group-hover:border-brand-gold/60 group-hover:scale-105 group-hover:-rotate-3
                        transition-all duration-700 pointer-events-none" />
          </div>

          <!-- Corner accent decorations -->
          <div class="absolute -top-6 -right-6 w-20 h-20 border-4 border-brand-gold/40 rounded-full
                      animate-[ping_3s_ease-in-out_infinite]" />
          <div class="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-brand-blue/30 rounded-full
                      animate-[ping_4s_ease-in-out_infinite]" 
                      style="animation-delay: 1s" />
        </div>

      </div>

      <!-- Decorative bottom line -->
      <div class="mt-16 flex justify-center">
        <div class="h-1 w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent rounded-full
                    shadow-[0_0_20px_rgba(252,211,77,0.7)] animate-pulse" />
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&display=swap');

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