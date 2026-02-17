<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import NotFound from '@/views/NotFound.vue'
import WpBlockRenderer from '@/components/WpBlockRenderer.vue'
import { hasCachedPage, getCachedPage, fetchAndCachePage } from '@/api/wpPageCache'

const route = useRoute()
const page = ref<any>(null)
const loading = ref(true)

async function loadPage() {
  const slug = route.params.slug as string
  if (hasCachedPage(slug)) {
    page.value = getCachedPage(slug)
    return
  }
  loading.value = true
  page.value = await fetchAndCachePage(slug)
  loading.value = false
}

onMounted(loadPage)
watch(() => route.params.slug, loadPage)
</script>

<template>
  <div class="min-h-full">
    <template v-if="loading" />
    <NotFound v-else-if="!page" />
    <WpBlockRenderer v-else :page="page" />
  </div>
</template>
