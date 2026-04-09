<template>
  <div>
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Product: Receivables Financing</span>
        <h1>Get paid on your invoices<br><em>today.</em></h1>
        <p>Stop waiting 60–90 days for customer payments. Access cash against your receivables immediately and put it to work in your business.</p>
        <div class="hero-actions">
          <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Apply Now →</NuxtLink>
          <NuxtLink to="/products/vendor-financing" class="btn btn-outline-white btn-lg">View Vendor Financing</NuxtLink>
        </div>
      </div>
    </section>

    <!-- How Receivables Financing Works — Visual -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="max-width: 720px;">
          <span class="eyebrow">How Receivables Financing Works</span>
          <h2 class="section-title">Drip pays you today against your invoice <em>and collects directly from your buyer on the due date.</em></h2>
        </div>

        <div class="rf-visual-layout">
          <!-- Triangle flow diagram -->
          <div class="rf-diagram reveal">
            <svg class="rf-svg" viewBox="0 0 580 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- 1: YOU → BUYER (top, horizontal right) -->
              <path d="M170 60 L400 60" stroke="var(--green)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrowGreenRF)" />
              <!-- 2: DRIP → YOU (bottom-left, up) -->
              <path d="M260 310 L140 120" stroke="var(--green)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrowGreenRF)" />
              <!-- 3: BUYER → DRIP (bottom-right, down-left) -->
              <path d="M440 120 L330 300" stroke="var(--green)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrowGreenRF)" />
              <defs>
                <marker id="arrowGreenRF" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <path d="M0 0 L8 3 L0 6" fill="var(--green)" />
                </marker>
              </defs>
            </svg>

            <!-- Nodes -->
            <div class="rf-node rf-node-you">
              <div class="rf-node-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/>
                </svg>
              </div>
              <span class="rf-node-label">YOU</span>
            </div>

            <div class="rf-node rf-node-buyer">
              <div class="rf-node-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span class="rf-node-label">BUYER</span>
            </div>

            <div class="rf-node rf-node-drip">
              <div class="rf-node-icon rf-node-icon-drip">
                <img src="/drip-logo-icon.svg" alt="Drip Capital" width="28" height="28" onerror="this.style.display='none'" />
              </div>
              <span class="rf-node-label">DRIP CAPITAL</span>
            </div>

            <!-- Step badges -->
            <div class="rf-step rf-step-1">
              <span class="rf-step-num">1</span>
              <span class="rf-step-text">Upload<br>invoice</span>
            </div>
            <div class="rf-step rf-step-2">
              <span class="rf-step-num">2</span>
              <span class="rf-step-text">Pays today<br>basis invoice</span>
            </div>
            <div class="rf-step rf-step-3">
              <span class="rf-step-num">3</span>
              <span class="rf-step-text">Makes payment<br>on due date</span>
            </div>
          </div>

          <!-- Example Transaction card -->
          <div class="rf-example reveal reveal-delay-1">
            <h3 class="rf-example-title">Example Transaction</h3>

            <div class="rf-example-step">
              <div class="rf-example-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/>
                </svg>
              </div>
              <div>
                <strong class="rf-example-who">US Vendor: Electronics Distributor</strong>
                <p class="rf-example-what">Uploads $200,000 Buyer Invoice</p>
              </div>
            </div>

            <div class="rf-example-divider"></div>

            <div class="rf-example-step">
              <div class="rf-example-icon rf-example-icon-drip">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>
                <strong class="rf-example-who">Drip Capital</strong>
                <p class="rf-example-what">Pays US Vendor: $160,000 (80%)</p>
              </div>
            </div>

            <div class="rf-example-divider"></div>

            <div class="rf-example-step">
              <div class="rf-example-icon rf-example-icon-drip">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>
                <strong class="rf-example-who">Drip Capital</strong>
                <p class="rf-example-what">Receives $200,000 on due date and releases reserve ($40,000) to US Vendor</p>
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
          <span class="eyebrow">How Receivables Financing Works</span>
          <h2 class="section-title">Three simple steps.</h2>
        </div>
        <div class="steps-row">
          <div class="step-item reveal">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">Submit Your Invoices</h3>
              <p class="step-desc">Upload outstanding customer invoices through our platform. We review your receivables portfolio and verify the invoices.</p>
            </div>
          </div>
          <div class="step-connector reveal reveal-delay-1"></div>
          <div class="step-item reveal reveal-delay-1">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">Get Funded in 24–48 Hours</h3>
              <p class="step-desc">Once approved, funds are transferred directly to your business bank account within 24–48 hours. No weeks of waiting.</p>
            </div>
          </div>
          <div class="step-connector reveal reveal-delay-2"></div>
          <div class="step-item reveal reveal-delay-2">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">Collect from Customers</h3>
              <p class="step-desc">Continue your normal collection process. When customers pay, Drip Capital is repaid, with no changes to your customer relationships.</p>
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
          <h2 class="section-title">Why businesses choose Receivables Financing.</h2>
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
          <h2 class="section-title">When Receivables Financing makes sense.</h2>
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
          <h2 class="section-title">How Receivables Financing compares.</h2>
          <p class="section-subtitle" style="margin: 0 auto;">Get paid on your invoices faster than any alternative.</p>
        </div>
        <div class="comparison-wrapper reveal">
          <div class="comparison-scroll">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th style="width: 30%;">Feature</th>
                  <th class="col-drip">Drip Capital</th>
                  <th>Traditional Factoring</th>
                  <th>Bank Line of Credit</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Funding Speed</td><td class="col-drip"><span class="check-yes">24–48 Hours</span></td><td><span class="check-mid">2–5 Days</span></td><td><span class="check-no">4–8 Weeks</span></td></tr>
                <tr><td>Collateral Required</td><td class="col-drip"><span class="check-yes">None</span></td><td><span class="check-mid">Invoices assigned</span></td><td><span class="check-no">Yes (Assets)</span></td></tr>
                <tr><td>Customer Notification</td><td class="col-drip"><span class="check-yes">Not required</span></td><td><span class="check-no">Usually required</span></td><td><span class="check-yes">No</span></td></tr>
                <tr><td>Repayment Structure</td><td class="col-drip"><span class="check-yes">Flexible, invoice-based</span></td><td><span class="check-mid">Invoice collection</span></td><td><span class="check-no">Fixed monthly</span></td></tr>
                <tr><td>Non-Dilutive</td><td class="col-drip"><span class="check-yes">Yes</span></td><td><span class="check-yes">Yes</span></td><td><span class="check-yes">Yes</span></td></tr>
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
          <h2 class="cta-simple-title">Stop waiting on your customers to pay.</h2>
          <p class="cta-simple-desc">Access the cash you've already earned. Apply for Receivables Financing today and get funded in 24 hours.</p>
          <div class="cta-simple-actions">
            <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Apply for Receivables Financing →</NuxtLink>
            <NuxtLink to="/products/line-of-credit" class="btn btn-outline btn-lg">Compare Products</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Receivables Financing | Drip Capital' })

const benefits = [
  {
    icon: 'chart',
    title: 'Improve Days Sales Outstanding',
    desc: 'Cut your DSO from 60–90 days to near zero. Better DSO means better cash flow, better planning, and more capacity to grow.'
  },
  {
    icon: 'unlock',
    title: 'No Collateral Required',
    desc: 'Your invoices are the collateral. No need to pledge real estate, equipment, or other business assets to access working capital.'
  },
  {
    icon: 'lightning',
    title: 'Fast Funding',
    desc: 'Approved invoices are funded within 24–48 hours, not the weeks you\'d wait for a bank to process a traditional loan.'
  },
  {
    icon: 'shield',
    title: 'Non-Dilutive',
    desc: 'Unlike equity financing, Receivables Financing doesn\'t require you to give up any ownership in your business. You keep 100% of your equity while accessing the capital you need.'
  }
]

const useCases = [
  {
    title: 'Fund Operations While Waiting on Payments',
    desc: 'You shipped goods, completed work, and sent invoices, but customers take 60–90 days. Receivables Financing puts that cash to work immediately.'
  },
  {
    title: 'Take on a New Large Client',
    desc: 'When a major customer wants a large order, you need cash to produce it. Receivables Financing frees up capital for the new contract.'
  },
  {
    title: 'Avoid Cash Crunches During Growth',
    desc: 'Fast-growing businesses often face cash shortfalls even when profitable. Receivables Financing smooths cash flow so growth doesn\'t create a crisis.'
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

/* ── RF Visual Flow Diagram ── */
.rf-visual-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 48px;
}

.rf-diagram {
  position: relative;
  width: 100%;
  aspect-ratio: 580 / 380;
  max-width: 580px;
}

.rf-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.rf-node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.rf-node-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: var(--white);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
}

.rf-node-icon-drip {
  background: var(--navy);
  border-color: var(--navy);
}

.rf-node-label {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--navy);
}

.rf-node-you { top: 2%; left: 12%; }
.rf-node-buyer { top: 2%; right: 12%; }
.rf-node-drip { bottom: 6%; left: 50%; transform: translateX(-50%); }

.rf-step {
  position: absolute;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.rf-step-num {
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

.rf-step-text {
  font-size: 13px;
  font-weight: 600;
  color: var(--green);
  line-height: 1.3;
}

.rf-step-1 { top: 28%; left: 32%; }
.rf-step-2 { bottom: 28%; left: 2%; }
.rf-step-3 { top: 28%; right: 6%; }

/* Example Transaction Card */
.rf-example {
  background: var(--white);
  border: 2px solid var(--border);
  border-radius: 16px;
  padding: 32px 28px;
}

.rf-example-title {
  font-size: 20px;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.rf-example-step {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.rf-example-icon {
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

.rf-example-icon-drip {
  background: rgba(0,194,124,0.08);
  border-color: rgba(0,194,124,0.2);
}

.rf-example-who {
  font-size: 12px;
  font-weight: 800;
  color: var(--navy);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 2px;
}

.rf-example-what {
  font-size: 14px;
  color: var(--body);
  line-height: 1.5;
}

.rf-example-divider {
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

.step-content {
  max-width: 240px;
}

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
  .rf-visual-layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .rf-diagram {
    max-width: 100%;
  }

  .rf-step-text {
    font-size: 11px;
  }

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

  .step-connector {
    display: none;
  }

  .step-content {
    max-width: none;
  }

  .cta-simple {
    padding: 36px 24px;
  }
}
</style>
