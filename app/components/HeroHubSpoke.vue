<template>
  <div class="hub-card">

    <!-- Stage: SVG lines + HTML nodes -->
    <div class="hub-stage">

      <!-- SVG layer: connection lines + animated dots -->
      <svg class="hub-svg" viewBox="0 0 380 300" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="none">
        <defs>
          <!-- Request paths: industry → center -->
          <path id="hp0" d="M 190 32  L 190 150"/>
          <path id="hp1" d="M 299 113 L 190 150"/>
          <path id="hp2" d="M 258 241 L 190 150"/>
          <path id="hp3" d="M 122 241 L 190 150"/>
          <path id="hp4" d="M  81 113 L 190 150"/>
          <!-- Fund paths: center → industry -->
          <path id="hr0" d="M 190 150 L 190 32"/>
          <path id="hr1" d="M 190 150 L 299 113"/>
          <path id="hr2" d="M 190 150 L 258 241"/>
          <path id="hr3" d="M 190 150 L 122 241"/>
          <path id="hr4" d="M 190 150 L  81 113"/>
        </defs>

        <!-- Dashed spoke lines -->
        <line x1="190" y1="150" x2="190" y2="32"  stroke="rgba(0,194,124,0.2)" stroke-width="1.5" stroke-dasharray="5 7"/>
        <line x1="190" y1="150" x2="299" y2="113" stroke="rgba(0,194,124,0.2)" stroke-width="1.5" stroke-dasharray="5 7"/>
        <line x1="190" y1="150" x2="258" y2="241" stroke="rgba(0,194,124,0.2)" stroke-width="1.5" stroke-dasharray="5 7"/>
        <line x1="190" y1="150" x2="122" y2="241" stroke="rgba(0,194,124,0.2)" stroke-width="1.5" stroke-dasharray="5 7"/>
        <line x1="190" y1="150" x2="81"  y2="113" stroke="rgba(0,194,124,0.2)" stroke-width="1.5" stroke-dasharray="5 7"/>

        <!-- Center glow rings -->
        <circle cx="190" cy="150" r="46" fill="rgba(0,194,124,0.06)" stroke="rgba(0,194,124,0.22)" stroke-width="1"/>
        <circle cx="190" cy="150" r="68" fill="none" stroke="rgba(0,194,124,0.08)" stroke-width="1" stroke-dasharray="3 10"/>

        <!-- Request dots (industry → center): small white -->
        <circle r="2.5" fill="rgba(255,255,255,0.65)">
          <animateMotion dur="1.8s" repeatCount="indefinite" begin="0s">
            <mpath :href="'#hp0'"/>
          </animateMotion>
        </circle>
        <circle r="2.5" fill="rgba(255,255,255,0.65)">
          <animateMotion dur="2.0s" repeatCount="indefinite" begin="0.36s">
            <mpath :href="'#hp1'"/>
          </animateMotion>
        </circle>
        <circle r="2.5" fill="rgba(255,255,255,0.65)">
          <animateMotion dur="1.9s" repeatCount="indefinite" begin="0.72s">
            <mpath :href="'#hp2'"/>
          </animateMotion>
        </circle>
        <circle r="2.5" fill="rgba(255,255,255,0.65)">
          <animateMotion dur="1.7s" repeatCount="indefinite" begin="1.08s">
            <mpath :href="'#hp3'"/>
          </animateMotion>
        </circle>
        <circle r="2.5" fill="rgba(255,255,255,0.65)">
          <animateMotion dur="2.1s" repeatCount="indefinite" begin="1.44s">
            <mpath :href="'#hp4'"/>
          </animateMotion>
        </circle>

        <!-- Fund dots (center → industry): larger green -->
        <circle r="3.5" fill="#00C27C">
          <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.9s">
            <mpath :href="'#hr0'"/>
          </animateMotion>
        </circle>
        <circle r="3.5" fill="#00C27C">
          <animateMotion dur="2.0s" repeatCount="indefinite" begin="1.26s">
            <mpath :href="'#hr1'"/>
          </animateMotion>
        </circle>
        <circle r="3.5" fill="#00C27C">
          <animateMotion dur="1.9s" repeatCount="indefinite" begin="1.62s">
            <mpath :href="'#hr2'"/>
          </animateMotion>
        </circle>
        <circle r="3.5" fill="#00C27C">
          <animateMotion dur="1.7s" repeatCount="indefinite" begin="1.98s">
            <mpath :href="'#hr3'"/>
          </animateMotion>
        </circle>
        <circle r="3.5" fill="#00C27C">
          <animateMotion dur="2.1s" repeatCount="indefinite" begin="2.34s">
            <mpath :href="'#hr4'"/>
          </animateMotion>
        </circle>
      </svg>

      <!-- Center: Drip Capital logo -->
      <div class="hub-center">
        <div class="hub-pulse"></div>
        <div class="hub-pulse hub-pulse-2"></div>
        <img src="/logo.png" alt="Drip Capital" class="hub-logo"/>
      </div>

      <!-- Industry nodes (HTML, percentage-positioned to match SVG) -->

      <!-- Manufacturing: top (190,32) → 50%, 10.7% -->
      <div class="hub-node" style="left:50%; top:10.7%;">
        <div class="hub-node-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#00C27C" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
        </div>
        <span class="hub-node-label">Manufacturing</span>
        <span class="hub-node-badge">+165%</span>
      </div>

      <!-- Wholesale: right (299,113) → 78.7%, 37.7% -->
      <div class="hub-node" style="left:78.7%; top:37.7%;">
        <div class="hub-node-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#00C27C" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        </div>
        <span class="hub-node-label">Wholesale</span>
        <span class="hub-node-badge">+142%</span>
      </div>

      <!-- Agri-Food: bottom-right (258,241) → 67.9%, 80.3% -->
      <div class="hub-node" style="left:67.9%; top:80.3%;">
        <div class="hub-node-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#00C27C" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">
            <path d="M12 22V12"/>
            <path d="M12 12c-2-3-6-4-9-2 3 .5 5 3 9 2z"/>
            <path d="M12 12c2-3 6-4 9-2-3 .5-5 3-9 2z"/>
            <path d="M12 17c-2-3-6-4-9-2 3 .5 5 3 9 2z"/>
            <path d="M12 17c2-3 6-4 9-2-3 .5-5 3-9 2z"/>
          </svg>
        </div>
        <span class="hub-node-label">Agri-Food</span>
        <span class="hub-node-badge">+178%</span>
      </div>

      <!-- Seafood: bottom-left (122,241) → 32.1%, 80.3% -->
      <div class="hub-node" style="left:32.1%; top:80.3%;">
        <div class="hub-node-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#00C27C" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">
            <path d="M17 8c0 5-4 9-9 9S1 13 1 8s4-7 7-7c4 0 9 2 9 7z"/>
            <path d="M17 8l4-4v8l-4-4z"/>
            <circle cx="7" cy="8" r="1" fill="#00C27C" stroke="none"/>
          </svg>
        </div>
        <span class="hub-node-label">Seafood</span>
        <span class="hub-node-badge">+156%</span>
      </div>

      <!-- Consumer Goods: left (81,113) → 21.3%, 37.7% -->
      <div class="hub-node" style="left:21.3%; top:37.7%;">
        <div class="hub-node-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#00C27C" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </div>
        <span class="hub-node-label">Consumer Goods</span>
        <span class="hub-node-badge">+189%</span>
      </div>

    </div><!-- /hub-stage -->

    <!-- Footer strip -->
    <div class="hub-footer">
      <div class="hub-footer-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00C27C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="23 6 13 16 8 11 1 18"/><polyline points="17 6 23 6 23 12"/>
        </svg>
        <span>130–190% average annual growth after funding</span>
      </div>
      <span class="hub-footer-biz">Drip Capital customers · 10,000+ businesses funded</span>
    </div>

  </div>
</template>

<script setup lang="ts">
// Pure CSS/SVG animation — no JS needed
</script>

<style scoped>
.hub-card {
  background: rgba(8, 20, 40, 0.82);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  box-shadow: 0 24px 64px rgba(0,0,0,0.45);
}

/* Stage: responsive aspect ratio matches SVG viewBox 380×300 */
.hub-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 380 / 300;
}

.hub-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* Drip Capital center node */
.hub-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(8, 22, 46, 0.98);
  border: 1.5px solid rgba(0,194,124,0.45);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.hub-pulse {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  border: 1.5px solid rgba(0,194,124,0.35);
  animation: hub-pulse 2.6s ease-out infinite;
  pointer-events: none;
}
.hub-pulse-2 { animation-delay: 1.3s; }

@keyframes hub-pulse {
  0%   { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(1.65); opacity: 0; }
}

.hub-logo {
  width: 54px;
  height: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  display: block;
}

/* Industry nodes */
.hub-node {
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  z-index: 2;
}

.hub-node-icon {
  width: 46px;
  height: 46px;
  background: rgba(0,194,124,0.1);
  border: 1.5px solid rgba(0,194,124,0.28);
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.25s, box-shadow 0.25s;
}

.hub-node:hover .hub-node-icon {
  background: rgba(0,194,124,0.2);
  border-color: rgba(0,194,124,0.6);
  box-shadow: 0 0 16px rgba(0,194,124,0.25);
}

.hub-node-label {
  font-size: 8.5px;
  font-weight: 700;
  color: rgba(255,255,255,0.52);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  text-align: center;
}

.hub-node-badge {
  font-size: 9px;
  font-weight: 800;
  color: #00C27C;
  background: rgba(0,194,124,0.15);
  border: 1px solid rgba(0,194,124,0.3);
  border-radius: 6px;
  padding: 2px 6px;
  white-space: nowrap;
  letter-spacing: 0.02em;
}

/* Footer */
.hub-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 20px;
  background: rgba(0,194,124,0.09);
  border-top: 1px solid rgba(0,194,124,0.18);
  gap: 12px;
}

.hub-footer-badge {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 700;
  color: #00C27C;
  white-space: nowrap;
}

.hub-footer-biz {
  font-size: 10px;
  color: rgba(255,255,255,0.32);
  font-weight: 500;
  text-align: right;
}
</style>
