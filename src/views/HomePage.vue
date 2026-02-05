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
  const { data } = await wp.get(`/wp/v2/pages?slug=home`)
  page.value = data?.[0] ?? null
  loading.value = false
}

onMounted(loadPage)
watch(() => route.params.slug, loadPage)
</script>

<template>
  <main class="bg-brand-dark text-brand-light">
    <WpBlockRenderer :page="page" />
  </main>
</template>
