<template>
  <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-brand-dark">
    <!-- Glowing chaos background -->
    <div class="pointer-events-none absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full bg-brand-gold blur-[180px] opacity-30 animate-pulse"></div>
    <div class="pointer-events-none absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-brand-blue blur-[180px] opacity-20 animate-pulse"></div>
    <div class="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,rgba(252,211,77,0.4)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

    <div class="relative z-10 max-w-3xl mx-auto text-center px-6">
      <!-- Badge -->
      <div class="mb-6 inline-block">
        <span
          class="inline-block px-5 py-2 rounded-full text-xs tracking-[0.25em] uppercase font-black
                 bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold text-brand-dark
                 shadow-[0_0_40px_rgba(252,211,77,0.8),inset_0_2px_12px_rgba(255,255,255,0.4)]
                 border-2 border-yellow-200/50 animate-pulse"
        >
          Error 404
        </span>
      </div>

      <!-- Headline -->
      <h1
        class="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8
               bg-gradient-to-r from-white via-brand-light to-white bg-clip-text text-transparent
               drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]"
        style="font-family: Impact, Anton, 'Bebas Neue', sans-serif;"
      >
        This Page Got Bit.
      </h1>

      <!-- Copy -->
      <p class="text-brand-blue/90 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
        Whatever you were looking for wandered into the market without a strategy.
        It did not survive. The page does not exist. The dog does not fetch broken links.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-5 justify-center">
        <RouterLink
          to="/"
          class="group relative inline-block"
        >
          <div class="absolute inset-0 rounded-2xl bg-brand-gold blur-2xl opacity-50 group-hover:opacity-80 transition-opacity scale-110"></div>
          <div
            class="relative bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold text-brand-dark
                   font-black px-10 py-5 rounded-2xl shadow-[0_0_50px_rgba(252,211,77,0.6),inset_0_2px_20px_rgba(255,255,255,0.3)]
                   border-4 border-yellow-200/50 group-hover:scale-105 transition-all duration-300 uppercase tracking-wider"
          >
            Back to Safety
          </div>
        </RouterLink>

        <RouterLink
          to="/get-started"
          class="relative px-10 py-5 rounded-2xl font-bold border-4 border-brand-gold/60 text-brand-gold
                 bg-brand-gold/5 backdrop-blur-sm hover:bg-brand-gold/20 hover:border-brand-gold
                 hover:shadow-[0_0_40px_rgba(252,211,77,0.5)] hover:scale-105 transition-all duration-300 uppercase tracking-wide"
        >
          Run With the Pack
        </RouterLink>
      </div>

      <!-- Snarky footer -->
      <p class="mt-12 text-xs uppercase tracking-widest text-brand-blue/50">
        Diamond Dog Capital Investments does not provide directions to pages that don’t exist.
      </p>
    </div>
  </section>
</template>
<script lang="ts" setup>  </script>