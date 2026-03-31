<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Industry — Agri-Products</span>
        <h1>Working capital for<br><em>agriculture & food businesses</em></h1>
        <p>Agriculture and food supply chains operate on seasonal rhythms and thin margins. Drip Capital provides flexible capital solutions tailored to the unique needs of agri-food businesses.</p>
        <div class="hero-actions">
          <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Talk to Us →</NuxtLink>
          <NuxtLink to="/products/vendor-financing" class="btn btn-outline-white btn-lg">View Float Product</NuxtLink>
        </div>
      </div>
    </section>

    <div class="industry-img-wrap">
      <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80" alt="Agriculture fields" class="industry-img" />
    </div>

    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">The Challenge</span>
          <h2 class="section-title">Unique challenges in agri-food financing.</h2>
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
          <h2 class="section-title">Drip Capital products built for agri-food.</h2>
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
            "Our grain purchasing season is just 8 weeks. Without Drip Capital's Flex line of credit, we couldn't buy enough volume in time. Now we draw what we need in the season, repay over the following months. It changed our business model entirely."
          </p>
          <div class="testimonial-person">
            <div class="testimonial-avatar">RK</div>
            <div>
              <div class="testimonial-name">Robert Kowalski</div>
              <div class="testimonial-role">CEO, Midwest Grain Trading Co. — Des Moines, IA</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-bg">
      <div class="container">
        <div class="cta-simple reveal">
          <h2 class="cta-simple-title">Grow your agri-food business.</h2>
          <p class="cta-simple-desc">We understand agricultural seasonality. Get capital that works with your business cycle, not against it.</p>
          <div class="cta-simple-actions">
            <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Apply Now →</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Agriculture & Food Working Capital | Drip Capital' })

const challenges = [
  { icon: 'leaf', title: 'Seasonal Cash Flow', desc: 'Agricultural businesses face extreme seasonal cash flow swings. Capital is needed intensely during planting/harvest but revenue comes later.' },
  { icon: 'clock', title: 'Perishable Goods Risk', desc: 'Food products have short shelf lives. Delays in financing can mean expired inventory and significant losses.' },
  { icon: 'map-pin', title: 'Global Supply Chain Complexity', desc: 'Many agri-food businesses import or export across borders, adding currency risk, shipping complexity, and long payment cycles.' }
]

const products = [
  { badge: 'Float', name: 'Vendor Financing', desc: 'Pay farmers, growers, and food producers on time. Drip Capital fronts payment while you process and sell the goods.', link: '/products/vendor-financing' },
  { badge: 'Advance', name: 'Receivables Financing', desc: 'Convert outstanding invoices from grocery chains and food distributors into immediate cash.', link: '/products/receivable-financing' },
  { badge: 'Flex', name: 'Line of Credit', desc: 'Draw down during peak purchasing seasons, repay over the following months as inventory sells.', link: '/products/line-of-credit' }
]

const stats = [
  { value: 300, suffix: '+', prefix: '', label: 'Agri-food businesses funded' },
  { value: 48, suffix: ' hrs', prefix: '', label: 'Average credit decision' },
  { value: 120, suffix: ' days', prefix: '', label: 'Max repayment terms' },
  { value: 1, suffix: 'B+', prefix: '$', label: 'Agri-food capital deployed' }
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

@media (max-width: 768px) {
  .stats-row { grid-template-columns: 1fr 1fr; }
  .cta-simple { padding: 36px 24px; }
}
</style>
