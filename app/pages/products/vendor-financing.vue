<template>
  <div>
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Product — Float</span>
        <h1>Extend supplier payment terms —<br><em>keep your cash.</em></h1>
        <p>We pay your suppliers today so you preserve cash and keep orders moving. You repay on up to 120-day terms that work for your business cycle.</p>
        <div class="hero-actions">
          <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Apply Now →</NuxtLink>
          <NuxtLink to="/products/receivable-financing" class="btn btn-outline-white btn-lg">View Advance</NuxtLink>
        </div>
      </div>
    </section>

    <!-- What is Float -->
    <section class="section">
      <div class="container">
        <div class="two-col">
          <div class="reveal">
            <span class="eyebrow">What is Float?</span>
            <h2 class="section-title">Pay suppliers upfront.<br>Repay us later.</h2>
            <p class="section-subtitle">
              Float is Drip Capital's supplier financing product. When you need to pay a supplier but your cash is tied up in receivables or inventory, Drip Capital steps in to pay your supplier directly.
            </p>
            <p style="margin-top: 16px; color: var(--body); font-size: 15px; line-height: 1.7;">
              You get the goods. Your supplier gets paid on time. And you repay Drip Capital over the next 30–120 days — matching your natural cash conversion cycle.
            </p>
            <NuxtLink to="/company/contact" class="btn btn-primary mt-32">Get Started Today</NuxtLink>
          </div>
          <div class="float-visual reveal reveal-delay-1">
            <div class="flow-diagram">
              <div class="flow-node flow-you">Your Business</div>
              <div class="flow-arrow flow-arrow-down">↓ PO / Order</div>
              <div class="flow-node flow-drip">Drip Capital<br><span>Pays Supplier</span></div>
              <div class="flow-arrow flow-arrow-down">↓ Goods</div>
              <div class="flow-node flow-supplier">Your Supplier</div>
              <div class="flow-repay">You repay Drip in 30–120 days</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">How Float Works</span>
          <h2 class="section-title">Three simple steps.</h2>
        </div>
        <div class="steps-row">
          <div class="step-item reveal">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">Apply &amp; Get Approved</h3>
              <p class="step-desc">Submit a brief online application. Our team assesses your business performance — decision in 48 hours. No collateral, no bank deposit required.</p>
            </div>
          </div>
          <div class="step-connector reveal reveal-delay-1"></div>
          <div class="step-item reveal reveal-delay-1">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">Drip Pays Your Supplier</h3>
              <p class="step-desc">Once approved, submit a supplier invoice or PO. Drip Capital pays your supplier directly — same day or within 24 hours. Your supplier is happy. Your orders keep moving.</p>
            </div>
          </div>
          <div class="step-connector reveal reveal-delay-2"></div>
          <div class="step-item reveal reveal-delay-2">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">You Repay Us</h3>
              <p class="step-desc">Repay Drip Capital on your agreed terms — 30, 60, 90, or 120 days — matching when you receive payment from your customers. Revolve and draw again as needed.</p>
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
          <h2 class="section-title">Why businesses choose Float.</h2>
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
          <h2 class="section-title">When Float makes sense.</h2>
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
          <h2 class="cta-simple-title">Ready to extend your supplier terms?</h2>
          <p class="cta-simple-desc">Join thousands of businesses that use Float to preserve cash and scale their supply chain.</p>
          <div class="cta-simple-actions">
            <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Apply for Float →</NuxtLink>
            <NuxtLink to="/products/receivable-financing" class="btn btn-outline btn-lg">Compare Products</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Float — Vendor Financing | Drip Capital' })

const benefits = [
  {
    icon: 'unlock',
    title: 'No Collateral Required',
    desc: 'Unlike traditional bank financing, Float does not require you to pledge real estate, equipment, or other hard assets. Your trade history is enough.'
  },
  {
    icon: 'lightning',
    title: '48-Hour Approval',
    desc: 'Our proprietary underwriting model gives you a credit decision within 48 hours of completing the application — no weeks-long bank review process.'
  },
  {
    icon: 'clock',
    title: 'Up to 120-Day Terms',
    desc: 'Extended repayment terms mean your cash stays in your business longer. Match repayment to when you actually receive payment from your customers.'
  },
  {
    icon: 'users',
    title: 'Dedicated Account Manager',
    desc: 'You get a dedicated Drip Capital account manager who understands your business, your suppliers, and your growth goals — available when you need them.'
  }
]

const useCases = [
  {
    title: 'Bridging the Supplier-Customer Gap',
    desc: 'Your supplier needs payment in 30 days, but your customer pays in 90. Float bridges that gap so you never have to delay orders or strain supplier relationships.'
  },
  {
    title: 'Seasonal Inventory Buildup',
    desc: 'Need to stock up before a peak selling season but don\'t have the cash on hand? Float lets you build inventory now and repay after the season ends.'
  },
  {
    title: 'Capturing Early Pay Discounts',
    desc: 'Some suppliers offer 2–3% discounts for early payment. Float lets you capture those discounts without tying up your own cash.'
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

.flow-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 32px;
  background: var(--off);
  border-radius: 16px;
  border: 1px solid var(--border);
}

.flow-node {
  padding: 16px 28px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  line-height: 1.4;
}

.flow-you {
  background: var(--navy);
  color: var(--white);
  width: 100%;
}

.flow-drip {
  background: var(--green);
  color: var(--white);
  width: 100%;
}

.flow-drip span {
  display: block;
  font-size: 11px;
  font-weight: 500;
  opacity: 0.8;
  margin-top: 2px;
}

.flow-supplier {
  background: var(--off2);
  color: var(--navy);
  border: 1px solid var(--border);
  width: 100%;
}

.flow-arrow {
  font-size: 20px;
  color: var(--mid);
  padding: 2px 0;
}

.flow-repay {
  margin-top: 16px;
  font-size: 12px;
  font-weight: 600;
  color: var(--green);
  text-align: center;
  padding: 8px 16px;
  background: rgba(0,194,124,0.08);
  border-radius: 6px;
  border: 1px dashed rgba(0,194,124,0.3);
  width: 100%;
}

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
