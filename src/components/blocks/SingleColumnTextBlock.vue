<script setup lang="ts">
const props = defineProps<{
  data: {
    text: string,
  }
}>()
</script> 
 
<template>
  <section class="relative overflow-hidden bg-brand-light text-brand-dark">
    <div class="relative max-w-5xl mx-auto px-6 py-28 md:py-40">
      <!-- Subcopy with blue accent -->
      <div class="mt-8 text-brand-dark" v-html="data.text"></div>
    </div>
  </section>
</template>