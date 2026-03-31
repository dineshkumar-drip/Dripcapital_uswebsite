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

const { init } = useScrollReveal()

onMounted(() => {
  init()
})
</script>
