<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import wp from '@/api/wp'
import NotFound from '@/views/NotFound.vue'
import WpBlockRenderer from '@/components/WpBlockRenderer.vue'

const route = useRoute()
const page = ref<any>(null)
const loading = ref(true)

async function loadPage() {
  loading.value = true
  const { data } = await wp.get(`/wp/v2/pages?slug=${route.params.slug}`)
  page.value = data?.[0] ?? null
  loading.value = false
}

onMounted(loadPage)
watch(() => route.params.slug, loadPage)
</script>

<template>
  <div v-if="loading" class="p-12">Loading…</div>
  <NotFound v-else-if="!page" />
  <WpBlockRenderer :page="page" />
</template>
