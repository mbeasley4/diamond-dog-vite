<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  data: {
    text: string,
  }
}>()

const sanitizedHtml = computed(() => {
  return props.data.text
    .replace(/\s*data-start="[\d]+"/g, '')
    .replace(/\s*data-end="[\d]+"/g, '')
    .replace(/\s*rel="noopener"/g, '') // Optional: clean other unwanted attrs
})
</script>
 
<template>
  <section class="relative overflow-hidden bg-brand-light text-brand-dark">
    <div class="relative max-w-5xl mx-auto px-6 py-28 md:py-40">
      <div 
        class="mt-8 text-brand-dark prose prose-lg prose-blue max-w-none" 
        v-html="sanitizedHtml"
      ></div>
    </div>
  </section>
</template>

<style scoped>
.text-brand-dark :deep(h1) {
  @apply text-4xl md:text-5xl font-bold mb-6;
}

.text-brand-dark :deep(h2) {
  @apply text-2xl md:text-3xl font-semibold mt-12 mb-4 border-b border-brand-dark/10 pb-2;
}

.text-brand-dark :deep(p) {
  @apply mb-4 leading-relaxed;
}

.text-brand-dark :deep(ul) {
  @apply ml-6 mb-6 space-y-2;
}

.text-brand-dark :deep(li) {
  @apply list-disc marker:text-brand-dark/60;
}

.text-brand-dark :deep(hr) {
  @apply my-8 border-t-2 border-brand-dark/20;
}

.text-brand-dark :deep(strong) {
  @apply font-semibold text-brand-dark;
}

.text-brand-dark :deep(em) {
  @apply italic text-brand-dark/80;
}

.text-brand-dark :deep(.decorated-link) {
  @apply text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors;
}
</style>