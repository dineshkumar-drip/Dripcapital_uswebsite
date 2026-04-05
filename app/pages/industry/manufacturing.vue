<template>
  <div>
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Industry: Manufacturing</span>
        <h1>Working capital for<br><em>manufacturers</em></h1>
        <p>Manufacturing businesses face long production cycles, large raw material costs, and slow customer payments. Drip Capital provides the capital to keep your production line moving.</p>
        <div class="hero-actions">
          <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Talk to Us →</NuxtLink>
          <NuxtLink to="/products/vendor-financing" class="btn btn-outline-white btn-lg">View Vendor Financing</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Industry Image -->
    <div class="industry-img-wrap">
      <img
        src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80"
        alt="Manufacturing facility"
        class="industry-img"
      />
    </div>

    <!-- Challenges -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">The Challenge</span>
          <h2 class="section-title">Pain points manufacturers face every day.</h2>
        </div>
        <div class="grid-3">
          <div class="challenge-card reveal" v-for="(c, i) in challenges" :key="i" :class="`reveal-delay-${i}`">
            <div class="challenge-icon">
              <AppIcon :name="c.icon" :size="22" color="var(--green)" />
            </div>
            <h3 class="challenge-title">{{ c.title }}</h3>
            <p class="challenge-desc">{{ c.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How Drip Helps -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">How We Help</span>
          <h2 class="section-title">Drip Capital products built for manufacturers.</h2>
        </div>
        <div class="grid-3">
          <div class="product-link-card reveal" v-for="(p, i) in products" :key="i" :class="`reveal-delay-${i}`">
            <div class="plc-badge">{{ p.badge }}</div>
            <h3 class="plc-title">{{ p.name }}</h3>
            <p class="plc-desc">{{ p.desc }}</p>
            <NuxtLink :to="p.link" class="plc-cta">Learn more →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section section-bg">
      <div class="container">
        <div class="stats-row reveal">
          <div class="stat-block" v-for="(s, i) in stats" :key="i">
            <div class="stat-block-value">
              <AnimatedCounter :target="s.value" :suffix="s.suffix" :prefix="s.prefix" />
            </div>
            <div class="stat-block-label">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="section">
      <div class="container">
        <div class="testimonial-featured reveal">
          <div class="stars">★★★★★</div>
          <p class="testimonial-featured-quote">
            "Drip Capital changed how we manage our production cycles. We used to have to delay orders when cash was tight. Now we have Float to pay our material suppliers while we wait for payment from our distributors. Production never stops."
          </p>
          <div class="testimonial-person">
            <div class="testimonial-avatar">AS</div>
            <div>
              <div class="testimonial-name">Amir Singh</div>
              <div class="testimonial-role">Owner, Apex Manufacturing LLC, Phoenix, AZ</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-bg">
      <div class="container">
        <div class="cta-simple reveal">
          <h2 class="cta-simple-title">Keep your production line moving.</h2>
          <p class="cta-simple-desc">Apply today and get a credit decision in 48 hours. No collateral, no bank deposit required.</p>
          <div class="cta-simple-actions">
            <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Apply Now →</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Manufacturing Working Capital | Drip Capital' })

const challenges = [
  { icon: 'clock', title: 'Long Production Cycles', desc: 'Raw materials must be purchased weeks before goods can be sold. This cash gap strains working capital and limits production throughput.' },
  { icon: 'dollar', title: 'Slow Customer Payments', desc: 'Large B2B customers often have net-60 or net-90 payment terms. Waiting months for payment while covering ongoing production costs is a constant challenge.' },
  { icon: 'box', title: 'Bulk Material Procurement', desc: 'Buying raw materials in bulk reduces unit costs, but requires significant upfront capital that ties up cash and limits operational flexibility.' }
]

const products = [
  { badge: 'Vendor Financing', name: 'Vendor Financing', desc: 'Pay your raw material and component suppliers on time. Drip pays them now, you repay on up to 120-day terms.', link: '/products/vendor-financing' },
  { badge: 'Receivables Financing', name: 'Receivables Financing', desc: 'Convert your outstanding customer invoices into same-day cash. Stop waiting 60–90 days for payment.', link: '/products/receivable-financing' },
  { badge: 'Line of Credit', name: 'Line of Credit', desc: 'A revolving credit facility to fund operations, cover payroll, or capitalize on bulk purchase opportunities.', link: '/products/line-of-credit' }
]

const stats = [
  { value: 500, suffix: '+', prefix: '', label: 'Manufacturers funded' },
  { value: 48, suffix: ' hrs', prefix: '', label: 'Average credit decision' },
  { value: 120, suffix: ' days', prefix: '', label: 'Max repayment terms' },
  { value: 10, suffix: 'M+', prefix: '$', label: 'Max credit facility' }
]
</script>

<style scoped>
.hero-actions {
  display: flex;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.industry-img-wrap {
  height: 320px;
  overflow: hidden;
}

.industry-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.challenge-card {
  padding: 28px;
  border: 1px solid var(--border);
  background: var(--white);
  border-radius: var(--radius);
}

.challenge-icon {
  font-size: 28px;
  margin-bottom: 12px;
}

.challenge-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 8px;
}

.challenge-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
}

.product-link-card {
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: box-shadow 0.2s, transform 0.2s;
}

.product-link-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.plc-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--green);
  background: rgba(0,194,124,0.1);
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.plc-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 10px;
}

.plc-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
  margin-bottom: 16px;
}

.plc-cta {
  font-size: 13px;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
}

.plc-cta:hover { color: var(--green-d); }

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
}

.stat-block {
  background: var(--white);
  padding: 32px 24px;
  text-align: center;
}

.stat-block-value {
  font-size: 36px;
  font-weight: 900;
  color: var(--navy);
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-block-label {
  font-size: 13px;
  color: var(--mid);
}

.testimonial-featured {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.testimonial-featured-quote {
  font-size: 18px;
  color: var(--body);
  line-height: 1.8;
  font-style: italic;
  margin: 16px 0 24px;
}

.testimonial-person {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
}

.testimonial-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--navy);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  flex-shrink: 0;
}

.testimonial-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
}

.testimonial-role {
  font-size: 12px;
  color: var(--mid);
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
}

@media (max-width: 768px) {
  .stats-row {
    grid-template-columns: 1fr 1fr;
  }

  .cta-simple {
    padding: 36px 24px;
  }
}
</style>
