<template>
  <article class="post-card">
    <h3 class="post-title">{{ post.title?.rendered }}</h3>
    <p
      class="post-excerpt"
      v-html="excerptContent"
    />
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const excerptContent = computed(() => props.post.excerpt?.rendered || '')
</script>

<style scoped>
.post-card {
  padding: 1.5rem;
  border-radius: 8px;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
</style>
