<template>
  <div class="topbar">
    <div class="container">
      <div class="topbar-inner">
        <div class="topbar-left">
          <span class="topbar-text">Working capital from $100K to $10M — fast approval, no collateral.</span>
        </div>
        <nav class="topbar-nav">
          <NuxtLink to="/resources/use-cases" class="topbar-link">Case Studies</NuxtLink>
          <NuxtLink to="/company/about" class="topbar-link">About Us</NuxtLink>
          <a
            href="https://www.linkedin.com/company/drip-capital"
            target="_blank"
            rel="noopener noreferrer"
            class="topbar-link topbar-link-external"
          >
            LinkedIn
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2h4v1H3.5l5 5-.707.707-5-5V5H2V2z" fill="currentColor"/>
              <path d="M2 10h8v1H2v-1z" fill="currentColor" opacity="0"/>
              <path d="M7 2h3v3h-1V3.5l-4.5 4.5-.707-.707L8.5 3H7V2z" fill="currentColor"/>
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.topbar {
  background: var(--navy);
  height: var(--topbar-height);
  display: flex;
  align-items: center;
  z-index: 100;
  position: relative;
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.topbar-text {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.52);
  letter-spacing: 0.01em;
}

.topbar-nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.topbar-link {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.64);
  text-decoration: none;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 4px;
}

.topbar-link:hover {
  color: var(--white);
}

.topbar-link-external {
  color: rgba(0, 194, 124, 0.8);
}

.topbar-link-external:hover {
  color: var(--green);
}

@media (max-width: 768px) {
  .topbar-left {
    display: none;
  }

  .topbar-nav {
    gap: 16px;
  }
}
</style>
