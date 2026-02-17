<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import wp from '@/api/wp'
import NotFound from '@/views/NotFound.vue'
import WpBlockRenderer from '@/components/WpBlockRenderer.vue'

const route = useRoute()
const page = ref<any>(null)
const loading = ref(true)
const cache = new Map<string, any>()

async function loadPage() {
  const slug = route.params.slug as string
  if (cache.has(slug)) {
    page.value = cache.get(slug)
    return
  }
  loading.value = true
  const { data } = await wp.get(`/wp/v2/pages?slug=${slug}`)
  const result = data?.[0] ?? null
  page.value = result
  if (result) cache.set(slug, result)
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
