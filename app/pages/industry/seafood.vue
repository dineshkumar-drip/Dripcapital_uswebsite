<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Industry — Seafood</span>
        <h1>Working capital for<br><em>seafood importers & distributors</em></h1>
        <p>Seafood businesses face unique challenges — perishable goods, seasonal supply, complex import logistics, and demanding customer payment terms. Drip Capital has specialized experience in seafood trade finance.</p>
        <div class="hero-actions">
          <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Talk to Us →</NuxtLink>
          <NuxtLink to="/products/vendor-financing" class="btn btn-outline-white btn-lg">View Vendor Financing</NuxtLink>
        </div>
      </div>
    </section>

    <div class="industry-img-wrap">
      <img src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80" alt="Seafood market" class="industry-img" />
    </div>

    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">The Challenge</span>
          <h2 class="section-title">Unique challenges in seafood trade finance.</h2>
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

    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">How We Help</span>
          <h2 class="section-title">Built for seafood trade finance.</h2>
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

    <section class="section">
      <div class="container">
        <div class="testimonial-featured reveal">
          <div class="stars">★★★★★</div>
          <p class="testimonial-featured-quote">
            "As a shrimp importer, our suppliers in Southeast Asia need payment before we receive the goods. Drip Capital's Vendor Financing allows us to pay overseas suppliers while we wait for U.S. customer payments. We grew import volume 80% in 18 months."
          </p>
          <div class="testimonial-person">
            <div class="testimonial-avatar">MR</div>
            <div>
              <div class="testimonial-name">Marcus Rodriguez</div>
              <div class="testimonial-role">CEO, SunCoast Seafood Imports — Miami, FL</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-bg">
      <div class="container">
        <div class="cta-simple reveal">
          <h2 class="cta-simple-title">Scale your seafood import business.</h2>
          <p class="cta-simple-desc">We understand the unique dynamics of seafood trade finance. Get a credit decision in 48 hours, no collateral required.</p>
          <div class="cta-simple-actions">
            <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Apply Now →</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Seafood Industry Working Capital | Drip Capital' })

const challenges = [
  { icon: 'fish', title: 'Perishable Goods', desc: 'Seafood has a very short shelf life. Delays in financing or payment can result in expired inventory and significant financial losses.' },
  { icon: 'refresh', title: 'Seasonal Supply Fluctuations', desc: 'Fishing seasons, catch limits, and weather events create unpredictable supply variability that makes cash planning extremely difficult.' },
  { icon: 'map-pin', title: 'Import & Logistics Complexity', desc: 'Seafood importers must pay overseas suppliers before goods arrive, navigate customs, manage cold chain logistics, and then wait on customer payments.' }
]

const products = [
  { badge: 'Vendor Financing', name: 'Vendor Financing', desc: 'Pay overseas seafood suppliers before goods arrive. Drip Capital handles supplier payment while you manage import logistics.', link: '/products/vendor-financing' },
  { badge: 'Receivables Financing', name: 'Receivables Financing', desc: 'Turn outstanding invoices from distributors and retailers into immediate cash to fund your next seafood shipment.', link: '/products/receivable-financing' },
  { badge: 'Line of Credit', name: 'Line of Credit', desc: 'A revolving credit line to capitalize on spot market opportunities and manage cash across fishing seasons.', link: '/products/line-of-credit' }
]

const stats = [
  { value: 200, suffix: '+', prefix: '', label: 'Seafood businesses funded' },
  { value: 80, suffix: '%', prefix: '', label: 'Average volume growth' },
  { value: 3, suffix: 'M+', prefix: '$', label: 'Typical capital unlocked' },
  { value: 48, suffix: ' hrs', prefix: '', label: 'Time to credit decision' }
]
</script>

<style scoped>
.hero-actions { display: flex; gap: 16px; margin-top: 32px; flex-wrap: wrap; }
.industry-img-wrap { height: 320px; overflow: hidden; }
.industry-img { width: 100%; height: 100%; object-fit: cover; }
.challenge-card { padding: 28px; border: 1px solid var(--border); background: var(--white); border-radius: var(--radius); }
.challenge-icon { font-size: 28px; margin-bottom: 12px; }
.challenge-title { font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
.challenge-desc { font-size: 14px; color: var(--body); line-height: 1.7; }
.product-link-card { padding: 28px; border: 1px solid var(--border); border-radius: var(--radius); transition: box-shadow 0.2s, transform 0.2s; }
.product-link-card:hover { box-shadow: var(--shadow); transform: translateY(-2px); }
.plc-badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--green); background: rgba(0,194,124,0.1); padding: 4px 10px; border-radius: 4px; margin-bottom: 12px; }
.plc-title { font-size: 17px; font-weight: 700; color: var(--navy); margin-bottom: 10px; }
.plc-desc { font-size: 14px; color: var(--body); line-height: 1.7; margin-bottom: 16px; }
.plc-cta { font-size: 13px; font-weight: 600; color: var(--green); text-decoration: none; }
.stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); }
.stat-block { background: var(--white); padding: 32px 24px; text-align: center; }
.stat-block-value { font-size: 36px; font-weight: 900; color: var(--navy); letter-spacing: -0.03em; line-height: 1; margin-bottom: 8px; }
.stat-block-label { font-size: 13px; color: var(--mid); }
.testimonial-featured { max-width: 700px; margin: 0 auto; text-align: center; }
.testimonial-featured-quote { font-size: 18px; color: var(--body); line-height: 1.8; font-style: italic; margin: 16px 0 24px; }
.testimonial-person { display: flex; align-items: center; gap: 12px; justify-content: center; }
.testimonial-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--navy); color: var(--white); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; flex-shrink: 0; }
.testimonial-name { font-size: 14px; font-weight: 700; color: var(--navy); }
.testimonial-role { font-size: 12px; color: var(--mid); }
.cta-simple { background: var(--navy); border-radius: 16px; padding: 56px; text-align: center; position: relative; overflow: hidden; }
.cta-simple::before { content: ''; position: absolute; top: -50%; right: -10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(0,194,124,0.15) 0%, transparent 70%); pointer-events: none; }
.cta-simple-title { font-size: 32px; font-weight: 700; color: var(--white); margin-bottom: 12px; }
.cta-simple-desc { font-size: 16px; color: rgba(255,255,255,0.64); max-width: 480px; margin: 0 auto 32px; line-height: 1.7; }
.cta-simple-actions { display: flex; gap: 12px; justify-content: center; }
@media (max-width: 768px) { .stats-row { grid-template-columns: 1fr 1fr; } .cta-simple { padding: 36px 24px; } }
</style>
