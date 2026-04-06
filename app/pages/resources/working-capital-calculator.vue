<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="calc-hero">
      <div class="container">
        <div class="calc-hero-inner">
          <span class="eyebrow">Free Tool</span>
          <h1 class="calc-h1">Working Capital<br><em>Calculator</em></h1>
          <p class="calc-sub">Find out how much working capital your business needs — and which Drip Capital product is right for you. Takes 60 seconds.</p>
        </div>
      </div>
    </section>

    <!-- ===== CALCULATOR ===== -->
    <section class="section">
      <div class="container">
        <div class="calc-layout">

          <!-- ── Inputs ── -->
          <div class="calc-inputs-col">
            <div class="calc-card">
              <h2 class="calc-section-label">Your Business Financials</h2>
              <p class="calc-section-sub">Adjust the sliders or type values directly. All figures are approximate — we just need ballpark numbers.</p>

              <!-- Monthly Revenue -->
              <div class="calc-field">
                <div class="calc-field-header">
                  <label class="calc-label">Monthly Revenue</label>
                  <div class="calc-value-display">${{ formatNum(inputs.monthlyRevenue) }}</div>
                </div>
                <input
                  type="range"
                  v-model.number="inputs.monthlyRevenue"
                  :min="50000"
                  :max="5000000"
                  :step="50000"
                  class="calc-slider"
                />
                <div class="calc-range-labels">
                  <span>$50K</span><span>$5M</span>
                </div>
              </div>

              <!-- Outstanding Receivables -->
              <div class="calc-field">
                <div class="calc-field-header">
                  <label class="calc-label">Outstanding Receivables (AR)</label>
                  <div class="calc-value-display">${{ formatNum(inputs.receivables) }}</div>
                </div>
                <input
                  type="range"
                  v-model.number="inputs.receivables"
                  :min="0"
                  :max="3000000"
                  :step="25000"
                  class="calc-slider"
                />
                <div class="calc-range-labels">
                  <span>$0</span><span>$3M</span>
                </div>
                <div class="calc-field-hint">Invoices sent but not yet collected from customers</div>
              </div>

              <!-- Inventory Value -->
              <div class="calc-field">
                <div class="calc-field-header">
                  <label class="calc-label">Current Inventory Value</label>
                  <div class="calc-value-display">${{ formatNum(inputs.inventory) }}</div>
                </div>
                <input
                  type="range"
                  v-model.number="inputs.inventory"
                  :min="0"
                  :max="3000000"
                  :step="25000"
                  class="calc-slider"
                />
                <div class="calc-range-labels">
                  <span>$0</span><span>$3M</span>
                </div>
                <div class="calc-field-hint">Value of goods on hand or in transit</div>
              </div>

              <!-- Accounts Payable -->
              <div class="calc-field">
                <div class="calc-field-header">
                  <label class="calc-label">Accounts Payable (AP)</label>
                  <div class="calc-value-display">${{ formatNum(inputs.payables) }}</div>
                </div>
                <input
                  type="range"
                  v-model.number="inputs.payables"
                  :min="0"
                  :max="2000000"
                  :step="25000"
                  class="calc-slider"
                />
                <div class="calc-range-labels">
                  <span>$0</span><span>$2M</span>
                </div>
                <div class="calc-field-hint">Amount owed to suppliers you haven't paid yet</div>
              </div>

              <!-- Payment Terms -->
              <div class="calc-field">
                <div class="calc-field-header">
                  <label class="calc-label">Average Customer Payment Terms</label>
                  <div class="calc-value-display">Net {{ inputs.paymentDays }}</div>
                </div>
                <input
                  type="range"
                  v-model.number="inputs.paymentDays"
                  :min="15"
                  :max="120"
                  :step="15"
                  class="calc-slider"
                />
                <div class="calc-range-labels">
                  <span>Net 15</span><span>Net 120</span>
                </div>
                <div class="calc-field-hint">How long your customers take to pay you</div>
              </div>

              <!-- Industry -->
              <div class="calc-field">
                <label class="calc-label">Your Industry</label>
                <div class="industry-pills">
                  <button
                    v-for="ind in industries"
                    :key="ind"
                    class="industry-pill"
                    :class="{ active: inputs.industry === ind }"
                    @click="inputs.industry = ind"
                  >{{ ind }}</button>
                </div>
              </div>
            </div>
          </div>

          <!-- ── Results ── -->
          <div class="calc-results-col">

            <!-- Working Capital Gap -->
            <div class="result-card result-primary">
              <div class="result-label">Your Working Capital Gap</div>
              <div class="result-amount">{{ formatDollar(results.wcGap) }}</div>
              <div class="result-desc">This is the estimated cash shortfall your business is carrying based on your receivables, inventory, and payables cycle.</div>
            </div>

            <!-- Recommended Facility -->
            <div class="result-card result-secondary">
              <div class="result-label">Recommended Facility Size</div>
              <div class="result-amount result-green">{{ formatDollar(results.facilitySize) }}</div>
              <div class="result-desc">Based on your revenue and working capital gap, this is the financing facility size we'd typically recommend for your business.</div>
            </div>

            <!-- Cash Cycle -->
            <div class="result-card result-metrics">
              <div class="result-metrics-title">Your Cash Cycle Analysis</div>
              <div class="metric-row" v-for="m in results.metrics" :key="m.label">
                <span class="metric-label">{{ m.label }}</span>
                <span class="metric-value" :class="m.type">{{ m.value }}</span>
              </div>
            </div>

            <!-- Recommended Product -->
            <div class="rec-card">
              <div class="rec-label">Recommended Product</div>
              <div class="rec-product">
                <div class="rec-product-badge">{{ results.product.badge }}</div>
                <div class="rec-product-name">{{ results.product.name }}</div>
              </div>
              <p class="rec-product-why">{{ results.product.why }}</p>
              <NuxtLink :to="results.product.link" class="btn btn-primary" style="margin-top:16px; display:inline-block;">
                Learn More →
              </NuxtLink>
            </div>

            <!-- Monthly Benefit -->
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C27C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="23 6 13 16 8 11 1 18"/><polyline points="17 6 23 6 23 12"/>
                </svg>
              </div>
              <div>
                <div class="benefit-title">Potential Monthly Revenue Gain</div>
                <div class="benefit-amount">+{{ formatDollar(results.revGain) }}</div>
                <div class="benefit-note">If your cash gap is closed and reinvested at your current revenue rate</div>
              </div>
            </div>

            <!-- CTA -->
            <div class="calc-cta">
              <NuxtLink to="/apply" class="btn btn-primary btn-lg" style="width:100%; text-align:center; display:block;">
                Apply Now — Get a Real Offer in 48 Hours →
              </NuxtLink>
              <p class="calc-cta-note">No application fee · No collateral · Soft pull only</p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ===== HOW IT WORKS ===== -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align:center; max-width:560px; margin:0 auto 48px;">
          <span class="eyebrow">How the Calculator Works</span>
          <h2 class="section-title">Understanding your working capital gap.</h2>
        </div>
        <div class="formula-grid reveal">
          <div class="formula-card">
            <div class="formula-step">Step 1</div>
            <h3 class="formula-title">Cash Conversion Cycle</h3>
            <p class="formula-desc">We calculate how many days your cash is tied up: from paying suppliers to collecting from customers.</p>
            <div class="formula-box">DIO + DSO − DPO = CCC</div>
            <p class="formula-legend">DIO = Days Inventory Outstanding · DSO = Days Sales Outstanding · DPO = Days Payable Outstanding</p>
          </div>
          <div class="formula-card">
            <div class="formula-step">Step 2</div>
            <h3 class="formula-title">Working Capital Gap</h3>
            <p class="formula-desc">Your gap is the cash shortfall caused by timing mismatches between inflows and outflows.</p>
            <div class="formula-box">AR + Inventory − AP = WC Gap</div>
            <p class="formula-legend">Receivables + Inventory you've paid for, minus what you still owe suppliers</p>
          </div>
          <div class="formula-card">
            <div class="formula-step">Step 3</div>
            <h3 class="formula-title">Recommended Facility</h3>
            <p class="formula-desc">We recommend a facility sized to comfortably cover your gap with room for growth and seasonal variability.</p>
            <div class="formula-box">WC Gap × 1.3 = Facility Size</div>
            <p class="formula-legend">A 30% buffer above your gap ensures you're never caught short during peak periods</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PRODUCTS ===== -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Our Solutions</span>
          <h2 class="section-title">Products designed to close your working capital gap.</h2>
        </div>
        <div class="grid-3">
          <div class="product-card reveal" v-for="(p, i) in products" :key="i" :class="`reveal-delay-${i}`">
            <div class="product-badge">{{ p.badge }}</div>
            <h3 class="product-name">{{ p.name }}</h3>
            <p class="product-desc">{{ p.desc }}</p>
            <div class="product-stats">
              <div class="product-stat" v-for="s in p.stats" :key="s.label">
                <div class="product-stat-val">{{ s.val }}</div>
                <div class="product-stat-label">{{ s.label }}</div>
              </div>
            </div>
            <NuxtLink :to="p.link" class="product-link">Learn more →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="section section-bg">
      <div class="container">
        <div class="cta-simple reveal">
          <h2 class="cta-simple-title">Ready to close your working capital gap?</h2>
          <p class="cta-simple-desc">Get a real credit decision in 48 hours. No collateral, no hidden fees, no delays.</p>
          <div class="cta-simple-actions">
            <NuxtLink to="/apply" class="btn btn-primary btn-lg">Apply Now →</NuxtLink>
            <a href="tel:+16504370150" class="btn btn-outline-white btn-lg">Call +1 (650) 437-0150</a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Working Capital Calculator | Drip Capital — Free Tool' })

const inputs = reactive({
  monthlyRevenue: 500000,
  receivables: 300000,
  inventory: 200000,
  payables: 150000,
  paymentDays: 60,
  industry: 'Wholesale'
})

const industries = ['Manufacturing', 'Wholesale', 'Agri-Food', 'Seafood', 'Consumer Goods']

function formatNum(n: number) {
  if (n >= 1000000) return (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 0) + 'K'
  return n.toString()
}

function formatDollar(n: number) {
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return '$' + Math.round(n / 1000) + 'K'
  return '$' + n.toString()
}

const results = computed(() => {
  const { monthlyRevenue, receivables, inventory, payables, paymentDays } = inputs

  // Working capital gap: AR + inventory - AP
  const wcGap = Math.max(receivables + inventory - payables, 0)

  // Facility size: gap * 1.3, min $100K
  const facilitySize = Math.max(Math.round((wcGap * 1.3) / 25000) * 25000, 100000)

  // Cash cycle days
  const dailyRevenue = monthlyRevenue / 30
  const dso = dailyRevenue > 0 ? Math.round(receivables / dailyRevenue) : paymentDays
  const dio = dailyRevenue > 0 ? Math.round(inventory / dailyRevenue) : 30
  const dpo = dailyRevenue > 0 ? Math.round(payables / dailyRevenue) : 20
  const ccc = dso + dio - dpo

  // Monthly revenue gain potential (gap / monthly rev * monthly rev)
  const revGain = Math.round((wcGap / Math.max(monthlyRevenue, 1)) * monthlyRevenue * 0.15)

  // Product recommendation
  let product = {
    badge: 'Vendor Financing',
    name: 'Vendor Financing',
    why: 'Your payables are a significant burden. Drip Capital can pay your suppliers directly and give you up to 120 days to repay — freeing cash for growth.',
    link: '/products/vendor-financing'
  }

  if (receivables > payables && receivables > inventory) {
    product = {
      badge: 'Receivables Financing',
      name: 'Receivables Financing',
      why: 'Most of your capital is locked in outstanding invoices. We can convert your AR to same-day cash so you can reinvest immediately without waiting on customers.',
      link: '/products/receivable-financing'
    }
  } else if (inventory > receivables && inventory > payables) {
    product = {
      badge: 'Vendor Financing',
      name: 'Vendor Financing',
      why: 'Your inventory cycle is your biggest cash drain. Vendor Financing lets Drip pay your suppliers upfront while you sell through inventory at your own pace.',
      link: '/products/vendor-financing'
    }
  } else if (wcGap < 200000) {
    product = {
      badge: 'Line of Credit',
      name: 'Line of Credit',
      why: 'Your gap is manageable but unpredictable. A revolving Line of Credit gives you on-demand access to capital for opportunistic buys and seasonal swings.',
      link: '/products/line-of-credit'
    }
  }

  const metrics = [
    { label: 'Days Sales Outstanding (DSO)', value: dso + ' days', type: dso > 60 ? 'metric-bad' : 'metric-ok' },
    { label: 'Days Inventory Outstanding (DIO)', value: dio + ' days', type: dio > 45 ? 'metric-bad' : 'metric-ok' },
    { label: 'Days Payable Outstanding (DPO)', value: dpo + ' days', type: 'metric-ok' },
    { label: 'Cash Conversion Cycle', value: ccc + ' days', type: ccc > 60 ? 'metric-bad' : 'metric-ok' },
  ]

  return { wcGap, facilitySize, ccc, revGain, product, metrics }
})

const products = [
  {
    badge: 'Vendor Financing',
    name: 'Vendor Financing',
    desc: 'Drip pays your suppliers immediately. You repay in up to 120 days. Preserve cash and keep ordering without gaps.',
    stats: [
      { val: '120 days', label: 'Repayment terms' },
      { val: '48 hrs', label: 'To approval' }
    ],
    link: '/products/vendor-financing'
  },
  {
    badge: 'Receivables Financing',
    name: 'Receivables Financing',
    desc: 'Turn outstanding invoices into same-day cash. Stop waiting on net-30/60/90 customers to pay.',
    stats: [
      { val: '24–48 hrs', label: 'To cash' },
      { val: '90%+', label: 'Advance rate' }
    ],
    link: '/products/receivable-financing'
  },
  {
    badge: 'Line of Credit',
    name: 'Line of Credit',
    desc: 'Flexible revolving credit up to $10M. Draw what you need, repay as revenue comes in.',
    stats: [
      { val: 'On demand', label: 'Draw access' },
      { val: '$100K–$10M', label: 'Facility size' }
    ],
    link: '/products/line-of-credit'
  }
]
</script>

<style scoped>
/* ===== HERO ===== */
.calc-hero {
  background: var(--navy);
  padding: 80px 0 56px;
  position: relative;
  overflow: hidden;
}

.calc-hero::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0,194,124,0.12) 0%, transparent 65%);
  pointer-events: none;
}

.calc-hero-inner { position: relative; z-index: 1; max-width: 640px; }

.calc-h1 {
  font-size: clamp(36px, 5vw, 54px);
  font-weight: 300;
  color: var(--white);
  line-height: 1.12;
  letter-spacing: -0.03em;
  margin: 14px 0 16px;
}

.calc-h1 em { font-style: italic; color: var(--green); font-weight: 400; }

.calc-sub {
  font-size: 17px;
  color: rgba(255,255,255,0.68);
  line-height: 1.7;
  max-width: 480px;
}

/* ===== LAYOUT ===== */
.calc-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  align-items: flex-start;
}

/* ===== INPUTS ===== */
.calc-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
}

.calc-section-label {
  font-size: 18px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 6px;
}

.calc-section-sub {
  font-size: 13px;
  color: var(--mid);
  margin-bottom: 28px;
}

.calc-field {
  margin-bottom: 28px;
}

.calc-field-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calc-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--navy);
}

.calc-value-display {
  font-size: 16px;
  font-weight: 800;
  color: var(--green);
  letter-spacing: -0.02em;
  background: rgba(0,194,124,0.08);
  padding: 3px 10px;
  border-radius: 6px;
}

/* Slider */
.calc-slider {
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 5px;
  border-radius: 4px;
  background: linear-gradient(
    to right,
    var(--green) 0%,
    var(--green) calc(var(--pct, 50%)),
    var(--border) calc(var(--pct, 50%)),
    var(--border) 100%
  );
  outline: none;
  cursor: pointer;
}

.calc-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--white);
  border: 2.5px solid var(--green);
  box-shadow: 0 2px 8px rgba(0,194,124,0.3);
  cursor: pointer;
}

.calc-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--white);
  border: 2.5px solid var(--green);
  box-shadow: 0 2px 8px rgba(0,194,124,0.3);
  cursor: pointer;
}

.calc-range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: var(--mid);
  margin-top: 4px;
}

.calc-field-hint {
  font-size: 11px;
  color: var(--mid);
  margin-top: 6px;
}

/* Industry pills */
.industry-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.industry-pill {
  padding: 6px 14px;
  border: 1.5px solid var(--border);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: var(--mid);
  background: var(--white);
  cursor: pointer;
  transition: all 0.15s;
  font-family: inherit;
}

.industry-pill:hover { border-color: var(--green); color: var(--green-d); }
.industry-pill.active { border-color: var(--green); background: rgba(0,194,124,0.08); color: var(--green-d); }

/* ===== RESULTS ===== */
.calc-results-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 100px;
}

.result-card {
  border-radius: 14px;
  padding: 22px;
}

.result-primary {
  background: var(--navy);
  color: white;
}

.result-secondary {
  background: var(--white);
  border: 1px solid var(--border);
}

.result-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.55);
  margin-bottom: 6px;
}

.result-secondary .result-label { color: var(--mid); }

.result-amount {
  font-size: 40px;
  font-weight: 900;
  color: var(--white);
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 10px;
}

.result-secondary .result-amount { color: var(--navy); }
.result-green { color: var(--green) !important; }

.result-desc {
  font-size: 12px;
  color: rgba(255,255,255,0.55);
  line-height: 1.55;
}

.result-secondary .result-desc { color: var(--mid); }

/* Metrics */
.result-metrics {
  background: var(--off);
  border: 1px solid var(--border);
}

.result-metrics-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--navy);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 14px;
}

.metric-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  border-bottom: 1px solid var(--border);
  font-size: 12px;
}

.metric-row:last-child { border-bottom: none; }

.metric-label { color: var(--body); }
.metric-value { font-weight: 700; }
.metric-ok { color: var(--green-d); }
.metric-bad { color: #DC2626; }

/* Recommendation */
.rec-card {
  background: var(--white);
  border: 1.5px solid var(--green);
  border-radius: 14px;
  padding: 22px;
}

.rec-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--mid);
  margin-bottom: 10px;
}

.rec-product { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }

.rec-product-badge {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--green);
  background: rgba(0,194,124,0.1);
  padding: 3px 8px;
  border-radius: 4px;
}

.rec-product-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--navy);
}

.rec-product-why {
  font-size: 13px;
  color: var(--body);
  line-height: 1.6;
}

/* Benefit card */
.benefit-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: rgba(0,194,124,0.06);
  border: 1px solid rgba(0,194,124,0.2);
  border-radius: 12px;
  padding: 18px;
}

.benefit-icon {
  width: 36px;
  height: 36px;
  background: rgba(0,194,124,0.12);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.benefit-title { font-size: 11px; font-weight: 700; color: var(--mid); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px; }
.benefit-amount { font-size: 24px; font-weight: 900; color: var(--green); letter-spacing: -0.03em; }
.benefit-note { font-size: 11px; color: var(--mid); margin-top: 4px; line-height: 1.4; }

/* CTA */
.calc-cta { text-align: center; }
.calc-cta-note { font-size: 12px; color: var(--mid); margin-top: 10px; }

/* ===== FORMULA SECTION ===== */
.formula-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.formula-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
}

.formula-step {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--green);
  margin-bottom: 10px;
}

.formula-title { font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 10px; }
.formula-desc { font-size: 13px; color: var(--body); line-height: 1.6; margin-bottom: 16px; }

.formula-box {
  background: var(--navy);
  color: #00C27C;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  letter-spacing: 0.02em;
}

.formula-legend { font-size: 11px; color: var(--mid); line-height: 1.5; }

/* ===== PRODUCTS ===== */
.product-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.product-card:hover { box-shadow: var(--shadow); transform: translateY(-2px); }

.product-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--green);
  background: rgba(0,194,124,0.1);
  padding: 3px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.product-name { font-size: 17px; font-weight: 700; color: var(--navy); margin-bottom: 10px; }
.product-desc { font-size: 14px; color: var(--body); line-height: 1.7; margin-bottom: 20px; }

.product-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border-radius: 8px; overflow: hidden; border: 1px solid var(--border); margin-bottom: 20px; }
.product-stat { background: var(--off); padding: 14px; text-align: center; }
.product-stat-val { font-size: 15px; font-weight: 800; color: var(--navy); }
.product-stat-label { font-size: 11px; color: var(--mid); margin-top: 2px; }

.product-link { font-size: 13px; font-weight: 600; color: var(--green); text-decoration: none; }

/* ===== CTA ===== */
.cta-simple { background: var(--navy); border-radius: 16px; padding: 56px; text-align: center; position: relative; overflow: hidden; }
.cta-simple::before { content: ''; position: absolute; top: -50%; right: -10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(0,194,124,0.15) 0%, transparent 70%); pointer-events: none; }
.cta-simple-title { font-size: 32px; font-weight: 700; color: var(--white); margin-bottom: 12px; }
.cta-simple-desc { font-size: 16px; color: rgba(255,255,255,0.64); max-width: 480px; margin: 0 auto 32px; line-height: 1.7; }
.cta-simple-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .calc-layout { grid-template-columns: 1fr; }
  .calc-results-col { position: static; }
  .formula-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .calc-card { padding: 20px; }
  .cta-simple { padding: 36px 24px; }
  .result-amount { font-size: 32px; }
}
</style>
