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

    <!-- What is Line of Credit -->
    <section class="section">
      <div class="container">
        <div class="two-col">
          <div class="reveal">
            <span class="eyebrow">What is Line of Credit?</span>
            <h2 class="section-title">Capital that revolves<br>with your business.</h2>
            <p class="section-subtitle">
              Our revolving Line of Credit gives you flexible, on-demand access to capital. Unlike a term loan, you don't take it all at once. You draw what you need, repay, and draw again. Interest only accrues on what you actually use.
            </p>
            <p style="margin-top: 16px; color: var(--body); font-size: 15px; line-height: 1.7;">
              Perfect for businesses with variable cash needs: seasonal businesses, fast-growing companies, and anyone who wants capital on standby.
            </p>
            <NuxtLink to="/company/contact" class="btn btn-primary mt-32">Apply for Line of Credit →</NuxtLink>
          </div>
          <div class="reveal reveal-delay-1">
            <div class="flex-visual">
              <div class="credit-meter">
                <div class="credit-meter-header">
                  <span class="credit-label">Available Credit</span>
                  <span class="credit-amount">$500,000</span>
                </div>
                <div class="credit-bar-outer">
                  <div class="credit-bar-available"></div>
                  <div class="credit-bar-drawn"></div>
                </div>
                <div class="credit-legend">
                  <span class="legend-item">
                    <span class="legend-dot legend-green"></span>Available
                  </span>
                  <span class="legend-item">
                    <span class="legend-dot legend-navy"></span>Drawn
                  </span>
                </div>
                <div class="credit-actions-demo">
                  <div class="credit-action-row">
                    <span class="credit-action-label">Draw $100K for supplier payment</span>
                    <span class="credit-action-tag draw">Draw</span>
                  </div>
                  <div class="credit-action-row">
                    <span class="credit-action-label">Repay $100K after customer pays</span>
                    <span class="credit-action-tag repay">Repay</span>
                  </div>
                  <div class="credit-action-row">
                    <span class="credit-action-label">Draw $200K for seasonal inventory</span>
                    <span class="credit-action-tag draw">Draw</span>
                  </div>
                </div>
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
              <p class="step-desc">Apply online and receive your approved credit limit within 48 hours. Your limit is based on your business performance, not your personal credit.</p>
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
    desc: 'When a supplier offers a bulk discount or a competitor exits, have capital ready to act fast without waiting for a bank approval.'
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

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

/* Flex Visual */
.flex-visual {
  padding: 32px;
  background: var(--off);
  border: 1px solid var(--border);
  border-radius: 16px;
}

.credit-meter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.credit-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mid);
}

.credit-amount {
  font-size: 20px;
  font-weight: 800;
  color: var(--navy);
}

.credit-bar-outer {
  width: 100%;
  height: 16px;
  background: var(--navy);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  margin-bottom: 12px;
}

.credit-bar-available {
  height: 100%;
  width: 60%;
  background: var(--green);
}

.credit-bar-drawn {
  height: 100%;
  width: 40%;
  background: rgba(255,255,255,0.2);
}

.credit-legend {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--mid);
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.legend-green { background: var(--green); }
.legend-navy  { background: var(--navy); }

.credit-actions-demo {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid var(--border);
  padding-top: 16px;
}

.credit-action-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: var(--white);
  border-radius: 8px;
}

.credit-action-label {
  font-size: 13px;
  color: var(--body);
}

.credit-action-tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 4px;
}

.credit-action-tag.draw {
  background: rgba(0,194,124,0.12);
  color: var(--green-d);
}

.credit-action-tag.repay {
  background: rgba(11,31,58,0.08);
  color: var(--navy);
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

  .step-connector { display: none; }
  .step-content { max-width: none; }

  .cta-simple { padding: 36px 24px; }
}
</style>
