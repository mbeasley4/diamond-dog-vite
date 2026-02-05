<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import wp from '@/api/wp'
import NotFound from '@/views/NotFound.vue'
import WpBlockRenderer from '@/components/WpBlockRenderer.vue'

const route = useRoute()
const page = ref<any>(null)

async function loadPage() {  
  const { data } = await wp.get(`/wp/v2/pages?slug=${route.params.slug}`)
  page.value = data?.[0] ?? null

}

onMounted(loadPage)
watch(() => route.params.slug, loadPage)
</script>

<template>
  <NotFound v-if="!page" />
  <WpBlockRenderer :page="page" />
</template>
