<template>
  <div>
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Product: Line of Credit</span>
        <h1>Flexible capital.<br><em>Draw when you need it.</em></h1>
        <p>A revolving credit line for any business need. Draw what you need, repay when you can, and draw again on your terms.</p>
        <div class="hero-actions">
          <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Apply Now →</NuxtLink>
          <NuxtLink to="/products/vendor-financing" class="btn btn-outline-white btn-lg">View Vendor Financing</NuxtLink>
        </div>
      </div>
    </section>

    <!-- How Line of Credit Works — Visual -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="max-width: 660px;">
          <span class="eyebrow">How Line of Credit Works</span>
          <h2 class="section-title">Flexible working capital line <em>that can be drawn and repaid via 6 EMIs.</em></h2>
        </div>

        <div class="loc-visual-layout">
          <!-- Flow diagram -->
          <div class="loc-diagram reveal">
            <svg class="loc-svg" viewBox="0 0 580 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- 1: DRIP → YOU (draw, left arrow) -->
              <path d="M400 130 L220 250" stroke="var(--green)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrowGreenLOC)" />
              <!-- 2: YOU → BUSINESS (use, right-down) -->
              <path d="M250 320 L400 350" stroke="var(--green)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrowGreenLOC)" />
              <!-- 3: DRIP → YOU repay (right arrow, going back up) -->
              <path d="M350 210 L220 280" stroke="var(--green)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrowGreenLOC)" opacity="0.5" />
              <defs>
                <marker id="arrowGreenLOC" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <path d="M0 0 L8 3 L0 6" fill="var(--green)" />
                </marker>
              </defs>
            </svg>

            <!-- Nodes -->
            <div class="loc-node loc-node-you">
              <div class="loc-node-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/>
                </svg>
              </div>
              <span class="loc-node-label">YOU</span>
            </div>

            <div class="loc-node loc-node-drip">
              <div class="loc-node-icon loc-node-icon-drip">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
              </div>
              <span class="loc-node-label">DRIP CAPITAL</span>
            </div>

            <div class="loc-node loc-node-biz">
              <div class="loc-node-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/><path d="M6 8h.01M10 8h.01"/>
                </svg>
              </div>
              <span class="loc-node-label" style="font-size: 9px;">BUSINESS NEEDS</span>
            </div>

            <!-- Step badges -->
            <div class="loc-step loc-step-1">
              <span class="loc-step-num">1</span>
              <span class="loc-step-text">Draw from credit line<br>as needed</span>
            </div>
            <div class="loc-step loc-step-2">
              <span class="loc-step-num">2</span>
              <span class="loc-step-text">Use for business<br>needs</span>
            </div>
            <div class="loc-step loc-step-3">
              <span class="loc-step-num">3</span>
              <span class="loc-step-text">Repay in 6 EMIs</span>
            </div>
          </div>

          <!-- Example Transaction card -->
          <div class="loc-example reveal reveal-delay-1">
            <h3 class="loc-example-title">Example Transaction</h3>

            <div class="loc-example-step">
              <div class="loc-example-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/>
                </svg>
              </div>
              <div>
                <strong class="loc-example-who">US Business: Electronics Distributor</strong>
                <p class="loc-example-what">Draws $50,000 from $200,000 credit line.</p>
              </div>
            </div>

            <div class="loc-example-divider"></div>

            <div class="loc-example-step">
              <div class="loc-example-icon loc-example-icon-drip">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>
                <strong class="loc-example-who">Drip Capital</strong>
                <p class="loc-example-what">Disburses $50,000 within 24 hours</p>
              </div>
            </div>

            <div class="loc-example-divider"></div>

            <div class="loc-example-step">
              <div class="loc-example-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/>
                </svg>
              </div>
              <div>
                <strong class="loc-example-who">US Business: Electronics Distributor</strong>
                <p class="loc-example-what">Repay $50,000 in 6 equal EMIs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">How Line of Credit Works</span>
          <h2 class="section-title">Three simple steps.</h2>
        </div>
        <div class="steps-row">
          <div class="step-item reveal">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">Get Approved</h3>
              <p class="step-desc">Apply online and receive your approved credit limit within 24 hours. Your limit is based on your business performance, not your personal credit.</p>
            </div>
          </div>
          <div class="step-connector reveal reveal-delay-1"></div>
          <div class="step-item reveal reveal-delay-1">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">Draw as Needed</h3>
              <p class="step-desc">Draw from your credit line anytime through our portal or by contacting your account manager. Funds arrive same day or next business day.</p>
            </div>
          </div>
          <div class="step-connector reveal reveal-delay-2"></div>
          <div class="step-item reveal reveal-delay-2">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">Repay and Revolve</h3>
              <p class="step-desc">Repay on your schedule. As you repay, your available credit is restored and you can draw again immediately. No fixed monthly payments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Benefits</span>
          <h2 class="section-title">Why businesses choose Line of Credit.</h2>
        </div>
        <div class="grid-2">
          <div class="benefit-card reveal" v-for="(b, i) in benefits" :key="i" :class="`reveal-delay-${i}`">
            <div class="feature-icon">
              <AppIcon :name="b.icon" :size="22" color="var(--green)" />
            </div>
            <h3 class="benefit-title">{{ b.title }}</h3>
            <p class="benefit-desc">{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Use Cases</span>
          <h2 class="section-title">When Line of Credit makes sense.</h2>
        </div>
        <div class="grid-3">
          <div class="usecase-simple reveal" v-for="(uc, i) in useCases" :key="i" :class="`reveal-delay-${i}`">
            <div class="usecase-num">{{ String(i + 1).padStart(2, '0') }}</div>
            <h3 class="usecase-simple-title">{{ uc.title }}</h3>
            <p class="usecase-simple-desc">{{ uc.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 600px; margin: 0 auto 48px;">
          <span class="eyebrow">Why Drip Capital</span>
          <h2 class="section-title">How our Line of Credit compares.</h2>
          <p class="section-subtitle" style="margin: 0 auto;">Flexible capital that grows with your business.</p>
        </div>
        <div class="comparison-wrapper reveal">
          <div class="comparison-scroll">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th style="width: 30%;">Feature</th>
                  <th class="col-drip">Drip Capital</th>
                  <th>Bank Credit Line</th>
                  <th>MCA / Alt Lender</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Approval Speed</td><td class="col-drip"><span class="check-yes">24 Hours</span></td><td><span class="check-no">4–8 Weeks</span></td><td><span class="check-mid">1–3 Days</span></td></tr>
                <tr><td>Collateral Required</td><td class="col-drip"><span class="check-yes">None</span></td><td><span class="check-no">Yes (Assets)</span></td><td><span class="check-mid">Sometimes</span></td></tr>
                <tr><td>Draw Flexibility</td><td class="col-drip"><span class="check-yes">On demand, any amount</span></td><td><span class="check-mid">Subject to review</span></td><td><span class="check-no">Fixed advances</span></td></tr>
                <tr><td>Bank Deposit Required</td><td class="col-drip"><span class="check-yes">No</span></td><td><span class="check-no">Yes</span></td><td><span class="check-yes">No</span></td></tr>
                <tr><td>Facility Growth</td><td class="col-drip"><span class="check-yes">Grows with you</span></td><td><span class="check-mid">Annual review</span></td><td><span class="check-no">Transaction-based</span></td></tr>
                <tr><td>Dedicated Account Manager</td><td class="col-drip"><span class="check-yes">Yes</span></td><td><span class="check-mid">Sometimes</span></td><td><span class="check-no">Rarely</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-simple reveal">
          <h2 class="cta-simple-title">Capital ready when you need it.</h2>
          <p class="cta-simple-desc">Get approved for a Line of Credit and have working capital on standby. Draw only when you need it, pay only for what you use.</p>
          <div class="cta-simple-actions">
            <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Apply for Line of Credit →</NuxtLink>
            <NuxtLink to="/products/vendor-financing" class="btn btn-outline btn-lg">Compare Products</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Line of Credit | Drip Capital' })

const benefits = [
  {
    icon: 'unlock',
    title: 'On-Demand Access',
    desc: 'Your credit line is always available. Draw funds anytime through our portal, with no need to reapply every time you need capital.'
  },
  {
    icon: 'dollar',
    title: 'Only Pay for What You Use',
    desc: 'Interest only accrues on your outstanding drawn balance. If you don\'t draw, you don\'t pay. No commitment fees on unused credit.'
  },
  {
    icon: 'trending',
    title: 'Grows with Your Business',
    desc: 'Your credit limit isn\'t static. As your business grows and your trade history with Drip Capital builds, your limit grows with you.'
  },
  {
    icon: 'refresh',
    title: 'No Fixed Repayment Schedule',
    desc: 'Repay when it makes sense for your business: when customers pay you, when seasonal cash flow returns, or on any schedule you prefer.'
  }
]

const useCases = [
  {
    title: 'Seasonal Inventory Financing',
    desc: 'Draw down in Q3 to build holiday inventory, then repay in Q1 after peak season. The credit line revolves year after year.'
  },
  {
    title: 'Opportunistic Purchasing',
    desc: 'When a vendor offers a bulk discount or a competitor exits, have capital ready to act fast without waiting for a bank approval.'
  },
  {
    title: 'Bridge Operating Expenses',
    desc: 'Payroll, rent, and operating costs don\'t pause when customers pay late. Line of Credit ensures you can always cover your obligations on time.'
  }
]
</script>

<style scoped>
.hero-actions {
  display: flex;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
}

/* ── LOC Visual Flow Diagram ── */
.loc-visual-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 48px;
}

.loc-diagram {
  position: relative;
  width: 100%;
  aspect-ratio: 580 / 400;
  max-width: 580px;
}

.loc-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.loc-node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.loc-node-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: var(--white);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loc-node-icon-drip {
  background: var(--navy);
  border-color: var(--navy);
}

.loc-node-label {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--navy);
}

.loc-node-you { bottom: 18%; left: 10%; }
.loc-node-drip { top: 6%; right: 14%; }
.loc-node-biz { bottom: 6%; right: 14%; }

.loc-step {
  position: absolute;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.loc-step-num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--navy);
  color: white;
  font-size: 12px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.loc-step-text {
  font-size: 13px;
  font-weight: 600;
  color: var(--green);
  line-height: 1.3;
}

.loc-step-1 { top: 18%; left: 30%; }
.loc-step-2 { bottom: 14%; left: 35%; }
.loc-step-3 { top: 42%; left: 38%; }

/* Example Transaction Card */
.loc-example {
  background: var(--white);
  border: 2px solid var(--border);
  border-radius: 16px;
  padding: 32px 28px;
}

.loc-example-title {
  font-size: 20px;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.loc-example-step {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.loc-example-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--off);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.loc-example-icon-drip {
  background: rgba(0,194,124,0.08);
  border-color: rgba(0,194,124,0.2);
}

.loc-example-who {
  font-size: 12px;
  font-weight: 800;
  color: var(--navy);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 2px;
}

.loc-example-what {
  font-size: 14px;
  color: var(--body);
  line-height: 1.5;
}

.loc-example-divider {
  height: 1px;
  background: var(--border);
  margin: 16px 0;
}

/* Steps */
.steps-row {
  display: flex;
  align-items: flex-start;
  gap: 0;
}

.step-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
}

.step-connector {
  width: 80px;
  height: 2px;
  background: var(--border);
  margin-top: 20px;
  flex-shrink: 0;
  position: relative;
}

.step-connector::after {
  content: '';
  position: absolute;
  right: -5px;
  top: -4px;
  width: 8px;
  height: 8px;
  border-top: 2px solid var(--border);
  border-right: 2px solid var(--border);
  transform: rotate(45deg);
}

.step-content { max-width: 240px; }

.step-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 8px;
}

.step-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.6;
}

/* Benefits */
.benefit-card {
  display: flex;
  flex-direction: column;
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: box-shadow 0.2s, transform 0.2s;
}

.benefit-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.benefit-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 10px;
}

.benefit-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
}

.usecase-simple {
  padding: 28px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.usecase-num {
  font-size: 40px;
  font-weight: 900;
  color: var(--border);
  line-height: 1;
  margin-bottom: 12px;
}

.usecase-simple-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 10px;
}

.usecase-simple-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
}

.cta-simple {
  background: var(--navy);
  border-radius: 16px;
  padding: 56px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-simple::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0,194,124,0.15) 0%, transparent 70%);
  pointer-events: none;
}

.cta-simple-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.cta-simple-desc {
  font-size: 16px;
  color: rgba(255,255,255,0.64);
  max-width: 480px;
  margin: 0 auto 32px;
  line-height: 1.7;
}

.cta-simple-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .loc-visual-layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .loc-diagram { max-width: 100%; }
  .loc-step-text { font-size: 11px; }

  .steps-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .step-item {
    align-items: flex-start;
    text-align: left;
    flex-direction: row;
    gap: 16px;
  }

  .step-connector { display: none; }
  .step-content { max-width: none; }

  .cta-simple { padding: 36px 24px; }
}
</style>
