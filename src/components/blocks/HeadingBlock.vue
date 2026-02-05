<script setup lang="ts">
defineProps<{ block: any }>()
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-6">
    <div v-html="block.innerHTML" class="text-3xl font-bold" />
  </div>
</template>
