<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="app-icon"
    aria-hidden="true"
  >
    <!-- Apply/Clipboard -->
    <template v-if="name === 'clipboard'">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
      <rect x="9" y="3" width="6" height="4" rx="1"/>
      <path d="M9 12h6M9 16h4"/>
    </template>
    <!-- Lightning/Fast -->
    <template v-else-if="name === 'lightning'">
      <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2z"/>
    </template>
    <!-- Handshake/Partner -->
    <template v-else-if="name === 'handshake'">
      <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65l.77.78L12 21l7.65-7.99.77-.78a5.4 5.4 0 000-7.65z"/>
    </template>
    <!-- Actually use a proper handshake -->
    <template v-else-if="name === 'partner'">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </template>
    <!-- Gear/Manufacturing -->
    <template v-else-if="name === 'gear'">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
    </template>
    <!-- Box/Wholesale -->
    <template v-else-if="name === 'box'">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </template>
    <!-- Leaf/Agri -->
    <template v-else-if="name === 'leaf'">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.5c-1.17 1.94-.34 3.27 1.04 2.36.8-.52 2.4-1.62 3.3-2.47.65-.61 1.24-1.35 1.64-2.14C11.06 14.86 12.43 13 17 8z"/>
      <path d="M3 21c2-3 4-7 8-9"/>
    </template>
    <!-- Shopping bag/Consumer goods -->
    <template v-else-if="name === 'bag'">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </template>
    <!-- Fish/Seafood -->
    <template v-else-if="name === 'fish'">
      <path d="M6.5 12C6.5 12 3 9 3 6c0 0 4 1 6.5 4.5"/>
      <path d="M6.5 12C6.5 12 3 15 3 18c0 0 4-1 6.5-4.5"/>
      <path d="M6.5 12h11"/>
      <path d="M18 9l3 3-3 3"/>
      <circle cx="9" cy="12" r="0.5" fill="currentColor"/>
    </template>
    <!-- Check/Success -->
    <template v-else-if="name === 'check'">
      <polyline points="20 6 9 17 4 12"/>
    </template>
    <!-- Check circle -->
    <template v-else-if="name === 'check-circle'">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </template>
    <!-- Dollar/Finance -->
    <template v-else-if="name === 'dollar'">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
    </template>
    <!-- Chart/Growth -->
    <template v-else-if="name === 'chart'">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </template>
    <!-- Trending up -->
    <template v-else-if="name === 'trending'">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </template>
    <!-- Lock/Secure -->
    <template v-else-if="name === 'lock'">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </template>
    <!-- Unlock -->
    <template v-else-if="name === 'unlock'">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 019.9-1"/>
    </template>
    <!-- Clock/Time -->
    <template v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </template>
    <!-- Refresh/Revolving -->
    <template v-else-if="name === 'refresh'">
      <polyline points="23 4 23 10 17 10"/>
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
    </template>
    <!-- Users/Team -->
    <template v-else-if="name === 'users'">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </template>
    <!-- Map pin/Location -->
    <template v-else-if="name === 'map-pin'">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </template>
    <!-- Mail -->
    <template v-else-if="name === 'mail'">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </template>
    <!-- Phone -->
    <template v-else-if="name === 'phone'">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.13 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 013.04 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </template>
    <!-- Arrow right -->
    <template v-else-if="name === 'arrow-right'">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </template>
    <!-- Building/Company -->
    <template v-else-if="name === 'building'">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
      <path d="M3 17h7v4H3z"/>
    </template>
    <!-- Star/Rating -->
    <template v-else-if="name === 'star'">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </template>
    <!-- Zap/Fast approval -->
    <template v-else-if="name === 'zap'">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </template>
    <!-- Shield/Security -->
    <template v-else-if="name === 'shield'">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </template>
    <!-- default fallback -->
    <template v-else>
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </template>
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  size?: number
  color?: string
}>(), {
  size: 24,
  color: 'currentColor'
})
</script>

<style scoped>
.app-icon {
  display: inline-block;
  flex-shrink: 0;
  vertical-align: middle;
}
</style>
