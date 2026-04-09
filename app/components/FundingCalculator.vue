<template>
  <section class="calc-section">
    <div class="container">
      <div class="calc-layout">
        <!-- Left copy -->
        <div class="calc-left reveal">
          <span class="eyebrow">Funding Estimate</span>
          <h2 class="calc-h2">Get a funding<br>estimate in seconds</h2>
          <p class="calc-sub">
            We offer flexible financing from $5K to $20M. We'll provide tailored offers upon reviewing your application, but here's a quick estimate.
          </p>
          <NuxtLink
            v-if="!isEnterprise"
            to="/apply"
            class="btn btn-outline calc-cta"
          >Apply Now →</NuxtLink>
          <NuxtLink
            v-else
            to="/company/contact"
            class="btn btn-outline calc-cta"
          >Talk to Us →</NuxtLink>
        </div>

        <!-- Right calculator card -->
        <div class="calc-card reveal reveal-delay-1">
          <span class="calc-card-label">CALCULATOR</span>

          <!-- Revenue display -->
          <div class="calc-revenue-block">
            <span class="calc-revenue-label">Your annual revenue</span>
            <span class="calc-revenue-value">{{ formattedRevenue }}</span>
          </div>

          <!-- Slider -->
          <div class="calc-slider-wrap">
            <input
              type="range"
              class="calc-slider"
              :min="0"
              :max="steps.length - 1"
              :value="stepIndex"
              @input="onSlide"
              :style="sliderBg"
            />
            <div class="calc-slider-labels">
              <span>$500K</span>
              <span>$100M+</span>
            </div>
          </div>

          <!-- Funding estimate -->
          <div class="calc-estimate-block">
            <span class="calc-estimate-label">Your funding estimate</span>
            <span v-if="!isEnterprise" class="calc-estimate-value">
              {{ formattedFundingLow }} – {{ formattedFundingHigh }}
            </span>
            <span v-else class="calc-estimate-custom">
              Custom solution
            </span>
            <p v-if="isEnterprise" class="calc-estimate-note-enterprise">
              For businesses over $100M in annual revenue, we curate a custom financing solution tailored to your needs.
            </p>
          </div>

          <!-- Disclaimer -->
          <p class="calc-disclaimer">
            *Typical funding range is 1.5%–2.5% of annual revenue, subject to underwriting.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Discrete revenue steps for smooth feel
const steps = [
  500_000,
  750_000,
  1_000_000,
  1_500_000,
  2_000_000,
  3_000_000,
  5_000_000,
  7_500_000,
  10_000_000,
  15_000_000,
  20_000_000,
  30_000_000,
  50_000_000,
  75_000_000,
  100_000_000,
  150_000_000, // 100M+ bucket
]

const stepIndex = ref(4) // default $2M
const revenue = computed(() => steps[stepIndex.value])
const isEnterprise = computed(() => revenue.value > 100_000_000)

function onSlide(e: Event) {
  stepIndex.value = parseInt((e.target as HTMLInputElement).value)
}

// Slider fill %
const sliderBg = computed(() => {
  const pct = (stepIndex.value / (steps.length - 1)) * 100
  return {
    '--pct': `${pct}%`
  }
})

// Formatting helpers
function formatCurrency(val: number): string {
  if (val >= 1_000_000_000) return `$${(val / 1_000_000_000).toFixed(1)}B`
  if (val >= 1_000_000) {
    const m = val / 1_000_000
    return m === Math.floor(m) ? `$${m}M` : `$${m.toFixed(1)}M`
  }
  if (val >= 1_000) return `$${(val / 1_000).toFixed(0)}K`
  return `$${val.toLocaleString()}`
}

const formattedRevenue = computed(() => {
  if (revenue.value > 100_000_000) return '$100M+'
  return formatCurrency(revenue.value)
})

// Funding: 1.5% low, 2.5% high
const fundingLow = computed(() => Math.round(revenue.value * 0.015))
const fundingHigh = computed(() => Math.round(revenue.value * 0.025))
const formattedFundingLow = computed(() => formatCurrency(fundingLow.value))
const formattedFundingHigh = computed(() => formatCurrency(fundingHigh.value))
</script>

<style scoped>
.calc-section {
  padding: 88px 0;
  background: var(--white);
}

.calc-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

/* ── Left ── */
.calc-left {
  max-width: 460px;
}

.calc-h2 {
  font-size: clamp(32px, 4vw, 46px);
  font-weight: 900;
  color: var(--navy);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 12px 0 18px;
}

.calc-sub {
  font-size: 16px;
  color: var(--body);
  line-height: 1.7;
}

.calc-cta {
  margin-top: 28px;
}

/* ── Card ── */
.calc-card {
  background: var(--navy);
  border-radius: 20px;
  padding: 36px 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.calc-card-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.4);
  margin-bottom: 8px;
}

/* ── Revenue ── */
.calc-revenue-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 4px;
}

.calc-revenue-label {
  font-size: 14px;
  font-weight: 600;
  color: rgba(255,255,255,0.65);
}

.calc-revenue-value {
  font-size: clamp(36px, 4vw, 52px);
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.04em;
  line-height: 1.15;
}

/* ── Slider ── */
.calc-slider-wrap {
  padding: 12px 0 8px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.calc-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: linear-gradient(
    to right,
    var(--green) 0%,
    var(--green) var(--pct),
    rgba(255,255,255,0.15) var(--pct),
    rgba(255,255,255,0.15) 100%
  );
  margin: 12px 0 6px;
}

.calc-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--green);
  border: 3px solid var(--navy);
  box-shadow: 0 0 0 3px var(--green), 0 2px 8px rgba(0,0,0,0.3);
  cursor: pointer;
  transition: transform 0.15s;
}

.calc-slider::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}

.calc-slider::-moz-range-thumb {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--green);
  border: 3px solid var(--navy);
  box-shadow: 0 0 0 3px var(--green), 0 2px 8px rgba(0,0,0,0.3);
  cursor: pointer;
}

.calc-slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-weight: 600;
  color: rgba(255,255,255,0.35);
}

/* ── Estimate ── */
.calc-estimate-block {
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.calc-estimate-label {
  font-size: 14px;
  font-weight: 600;
  color: rgba(255,255,255,0.65);
}

.calc-estimate-value {
  font-size: clamp(30px, 3.5vw, 44px);
  font-weight: 900;
  color: var(--green);
  letter-spacing: -0.03em;
  line-height: 1.2;
}

.calc-estimate-custom {
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 900;
  background: linear-gradient(135deg, var(--green), #60E6B0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
  line-height: 1.2;
}

.calc-estimate-note-enterprise {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  line-height: 1.6;
  margin-top: 4px;
}

/* ── Disclaimer ── */
.calc-disclaimer {
  font-size: 11px;
  color: rgba(255,255,255,0.3);
  margin-top: 20px;
  line-height: 1.5;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .calc-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .calc-left {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .calc-card {
    padding: 28px 20px 22px;
  }
}
</style>
