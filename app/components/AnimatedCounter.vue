<template>
  <span ref="counterEl" class="animated-counter">{{ prefix }}{{ displayValue }}{{ suffix }}</span>
</template>

<script setup lang="ts">
interface Props {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  suffix: '',
  prefix: '',
  duration: 2000
})

const counterEl = ref<HTMLElement | null>(null)
const displayValue = ref(0)
let animationFrame: number | null = null
let hasAnimated = false

function animateCount() {
  if (hasAnimated) return
  hasAnimated = true

  const startTime = performance.now()
  const startValue = 0
  const endValue = props.target

  function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3)
  }

  function step(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    const easedProgress = easeOutCubic(progress)

    displayValue.value = Math.round(startValue + (endValue - startValue) * easedProgress)

    if (progress < 1) {
      animationFrame = requestAnimationFrame(step)
    } else {
      displayValue.value = endValue
    }
  }

  animationFrame = requestAnimationFrame(step)
}

onMounted(() => {
  if (!counterEl.value || typeof IntersectionObserver === 'undefined') {
    displayValue.value = props.target
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount()
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  observer.observe(counterEl.value)

  onUnmounted(() => {
    observer.disconnect()
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame)
    }
  })
})
</script>
