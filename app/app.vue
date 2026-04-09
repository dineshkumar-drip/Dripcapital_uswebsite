<template>
  <div>
    <AppTopBar />
    <AppNav />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

const route = useRoute()
const { init, refresh, destroy } = useScrollReveal()

onMounted(() => {
  nextTick(() => {
    init()
  })
})

// Re-observe new .reveal elements after every route change
watch(() => route.fullPath, () => {
  nextTick(() => {
    refresh()
  })
})

onUnmounted(() => {
  destroy()
})
</script>
