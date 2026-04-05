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

    <!-- What is Receivables Financing -->
    <section class="section">
      <div class="container">
        <div class="two-col">
          <div class="reveal">
            <span class="eyebrow">What is Receivables Financing?</span>
            <h2 class="section-title">Your invoices are worth cash.<br>Get them now.</h2>
            <p class="section-subtitle">
              Receivables Financing is Drip Capital's product for converting invoices to cash. Instead of waiting 60–90 days for customer payments, you submit your outstanding invoices and receive funds within 24–48 hours.
            </p>
            <p style="margin-top: 16px; color: var(--body); font-size: 15px; line-height: 1.7;">
              This isn't a loan. It's your money. You earned it. We just get it to you faster so you can reinvest in your business without waiting.
            </p>
            <NuxtLink to="/company/contact" class="btn btn-primary mt-32">Apply for Receivables Financing →</NuxtLink>
          </div>
          <div class="reveal reveal-delay-1">
            <div class="dso-card">
              <div class="dso-header">
                <span class="dso-label">Before</span>
                <span class="dso-value dso-bad">67 days DSO</span>
              </div>
              <div class="dso-bar-outer">
                <div class="dso-bar-fill dso-fill-before"></div>
              </div>
              <div class="dso-divider"></div>
              <div class="dso-header">
                <span class="dso-label">After</span>
                <span class="dso-value dso-good">2 days DSO</span>
              </div>
              <div class="dso-bar-outer">
                <div class="dso-bar-fill dso-fill-after"></div>
              </div>
              <p class="dso-footnote">DSO = Days Sales Outstanding. Lower is better.</p>
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

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-simple reveal">
          <h2 class="cta-simple-title">Stop waiting on your customers to pay.</h2>
          <p class="cta-simple-desc">Access the cash you've already earned. Apply for Receivables Financing today and get funded in 48 hours.</p>
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

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

/* DSO Card */
.dso-card {
  background: var(--off);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
}

.dso-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.dso-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--mid);
}

.dso-value {
  font-size: 15px;
  font-weight: 800;
}

.dso-bad { color: #C0392B; }
.dso-good { color: var(--green); }

.dso-bar-outer {
  width: 100%;
  height: 12px;
  background: var(--border);
  border-radius: 6px;
  overflow: hidden;
}

.dso-bar-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 1s ease;
}

.dso-fill-before {
  width: 85%;
  background: #C0392B;
}

.dso-fill-after {
  width: 5%;
  background: var(--green);
}

.dso-divider {
  height: 1px;
  background: var(--border);
  margin: 20px 0;
}

.dso-footnote {
  font-size: 11px;
  color: var(--mid);
  margin-top: 16px;
  text-align: center;
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
  .two-col {
    grid-template-columns: 1fr;
    gap: 32px;
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
