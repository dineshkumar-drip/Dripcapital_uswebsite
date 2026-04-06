<template>
  <div class="topbar">
    <div class="container">
      <div class="topbar-inner">

        <!-- Rotating social proof ticker -->
        <div class="topbar-ticker">
          <Transition name="ticker-fade" mode="out-in">
            <span :key="currentIndex" class="ticker-text">
              <span class="ticker-dot" aria-hidden="true">✦</span>
              {{ ticks[currentIndex] }}
            </span>
          </Transition>
        </div>

        <!-- Right: LinkedIn -->
        <nav class="topbar-nav">
          <a
            href="https://www.linkedin.com/company/drip-capital"
            target="_blank"
            rel="noopener noreferrer"
            class="topbar-link topbar-link-external"
          >
            LinkedIn
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2h3v3h-1V3.5l-4.5 4.5-.707-.707L8.5 3H7V2z" fill="currentColor"/>
            </svg>
          </a>
        </nav>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const ticks = [
  '10,000+ businesses funded across the US',
  'Avg. credit decision in 48 hours',
  'Backed by Sequoia, Accel & Y Combinator',
  '$2B+ in capital deployed to growing businesses',
]

const currentIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % ticks.length
  }, 4000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.topbar {
  background: var(--navy);
  height: var(--topbar-height);
  display: flex;
  align-items: center;
  z-index: 100;
  position: relative;
  overflow: hidden;
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
}

/* Ticker */
.topbar-ticker {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  min-height: 20px;
}

.ticker-text {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.72);
  letter-spacing: 0.01em;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
}

.ticker-dot {
  color: var(--green);
  font-size: 10px;
  flex-shrink: 0;
}

/* Transition */
.ticker-fade-enter-active,
.ticker-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.ticker-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.ticker-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Right nav */
.topbar-nav {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}

.topbar-link {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.52);
  text-decoration: none;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}

.topbar-link:hover {
  color: var(--white);
}

.topbar-link-external {
  color: rgba(0, 194, 124, 0.75);
}

.topbar-link-external:hover {
  color: var(--green);
}

@media (max-width: 640px) {
  .topbar-ticker {
    display: none;
  }
  .topbar-nav {
    width: 100%;
    justify-content: center;
  }
}
</style>
