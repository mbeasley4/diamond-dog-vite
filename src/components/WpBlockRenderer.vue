<script setup lang="ts">
import { getMediaUrl } from '@/utils/mediaUrl'

import HomeHeroBlock from '@/components/blocks/HomeHeroBlock.vue'
import InteriorHeroBlock from '@/components/blocks/InteriorHeroBlock.vue'
import TwoColumnBlock from './blocks/TwoColumnBlock.vue'
import FeatureSectionBlock from '@/components/blocks/FeatureSectionBlock.vue'
import SingleColumnTextBlock from './blocks/SingleColumnTextBlock.vue'
import CtaBlock from '@/components/blocks/CtaBlock.vue'
import { ref, watch } from 'vue'

const props = defineProps<{
  page: any
}>()

const sections = ref<any[]>([])

const componentMap: Record<string, any> = {
  home_hero: HomeHeroBlock,
  interior_hero: InteriorHeroBlock,
  feature_section: FeatureSectionBlock,
  two_column: TwoColumnBlock,
  single_column_text: SingleColumnTextBlock,
  cta: CtaBlock,  
}

async function loadSections() {
  if (!props.page?.acf?.flexible_content) {
    sections.value = []
    return
  }

  const flexible = props.page.acf.flexible_content

  // Load images for sections that have them
  for (const section of flexible) {
    if (section.image) {
      section.imageUrl = await getMediaUrl(section.image)
    }
  }

  sections.value = flexible
}

// Watch for page changes
watch(() => props.page, loadSections, { immediate: true })
</script>

<template>
  <component
    v-for="(section, i) in sections"
    :key="i"
    :is="componentMap[section.acf_fc_layout]"
    :data="section"
  />
</template>