<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Resources</span>
        <h1>Use Cases &amp; Case Studies</h1>
        <p>Real stories from real businesses that used Drip Capital to unlock growth, manage cash flow, and scale their operations.</p>
      </div>
    </section>

    <!-- Stats Banner -->
    <section class="stats-banner section-bg">
      <div class="container">
        <div class="stats-banner-grid reveal">
          <div class="sb-stat" v-for="s in stats" :key="s.label">
            <div class="sb-value">
              <AnimatedCounter :target="s.value" :suffix="s.suffix" :prefix="s.prefix" />
            </div>
            <div class="sb-label">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Filter -->
    <section class="section">
      <div class="container">
        <div class="industry-filter reveal">
          <button
            v-for="ind in industries"
            :key="ind"
            class="filter-btn"
            :class="{ active: activeIndustry === ind }"
            @click="activeIndustry = ind"
          >
            {{ ind }}
          </button>
        </div>

        <div class="cases-grid">
          <div class="case-study-card reveal" v-for="(cs, i) in filteredCases" :key="i" :class="`reveal-delay-${i % 3}`">
            <div class="csc-img">
              <img :src="cs.img" :alt="cs.company" loading="lazy" />
              <div class="csc-industry-tag">{{ cs.industry }}</div>
            </div>
            <div class="csc-body">
              <div class="csc-product">Product used: <strong>{{ cs.product }}</strong></div>
              <h3 class="csc-title">{{ cs.title }}</h3>
              <p class="csc-desc">{{ cs.desc }}</p>
              <div class="csc-metrics">
                <div class="csc-metric" v-for="m in cs.metrics" :key="m.label">
                  <span class="csc-metric-value">{{ m.value }}</span>
                  <span class="csc-metric-label">{{ m.label }}</span>
                </div>
              </div>
              <a href="#" class="btn btn-outline btn-sm mt-20">Read Full Story →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-bg">
      <div class="container">
        <div class="cta-simple reveal">
          <h2 class="cta-simple-title">Ready to write your success story?</h2>
          <p class="cta-simple-desc">Join thousands of businesses that trust Drip Capital for their working capital needs.</p>
          <div class="cta-simple-actions">
            <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Apply Today →</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Use Cases & Case Studies | Drip Capital' })

const activeIndustry = ref('All Industries')

const industries = ['All Industries', 'Seafood', 'Consumer Goods', 'Manufacturing', 'Wholesale', 'Agri-Food']

const stats = [
  { value: 11000, suffix: '+', prefix: '', label: 'Businesses funded' },
  { value: 9, suffix: 'B+', prefix: '$', label: 'Total capital deployed' },
  { value: 40, suffix: '%', prefix: '', label: 'Average revenue growth' },
  { value: 24, suffix: ' hrs', prefix: '', label: 'Avg time to funding' }
]

const allCases = [
  {
    img: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80',
    industry: 'Seafood',
    company: 'SunCoast Seafood Imports',
    product: 'Vendor Financing',
    title: 'SunCoast Seafood grew import volume 80% in 18 months',
    desc: 'A Miami-based shrimp importer needed to pay Southeast Asian suppliers before goods arrived in the US. Drip Capital\'s Float product enabled them to fund each shipment and scale volumes significantly.',
    metrics: [{ value: '$3M+', label: 'Capital Unlocked' }, { value: '80%+', label: 'Volume Growth' }, { value: '18 mo', label: 'Timeline' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    industry: 'Consumer Goods',
    company: 'NaturalCare Brands',
    product: 'Vendor Financing',
    title: 'NaturalCare fulfilled a major retailer order that would have been impossible without Drip',
    desc: 'After landing a Target order for their natural skincare line, NaturalCare needed to 10x their production run. Float paid their overseas manufacturers while they waited for Target\'s net-90 payment.',
    metrics: [{ value: '$1.2M', label: 'Order Value' }, { value: '2×', label: 'Revenue Growth' }, { value: '90 days', label: 'Payment Terms Bridged' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80',
    industry: 'Manufacturing',
    company: 'Apex Manufacturing LLC',
    product: 'Receivables Financing',
    title: 'Apex Manufacturing cut DSO from 75 days to under 5',
    desc: 'This Phoenix-based manufacturer was waiting 60–90 days for payment from large distributors. Drip Capital\'s Advance product transformed their cash cycle, funding each invoice within 24 hours.',
    metrics: [{ value: '75→5', label: 'DSO Reduction (days)' }, { value: '$500K', label: 'Monthly Invoices Accelerated' }, { value: '40%', label: 'Production Increase' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    industry: 'Wholesale',
    company: 'Pacific Wholesale Distributors',
    product: 'Line of Credit',
    title: 'Pacific Wholesale scaled to 200+ retail customers with Line of Credit',
    desc: 'A Los Angeles wholesale distributor used Drip Capital\'s Flex line of credit to fund rapid expansion. Drawing on the line for each new retail customer, they tripled their distribution network in 2 years.',
    metrics: [{ value: '200+', label: 'Retail Customers' }, { value: '3×', label: 'Network Growth' }, { value: '$5M', label: 'Credit Facility' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    industry: 'Agri-Food',
    company: 'Midwest Grain Trading Co.',
    product: 'Line of Credit',
    title: 'Midwest Grain Trading doubled purchasing volume in harvest season',
    desc: 'With just 8 weeks of peak grain purchasing season, this Iowa-based grain trader needed capital fast. Drip\'s Flex line let them draw $3M in 3 days, doubling their purchasing volume at peak price.',
    metrics: [{ value: '$3M', label: 'Drawn in Peak Season' }, { value: '2×', label: 'Purchase Volume' }, { value: '3 days', label: 'Time to Fund' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80',
    industry: 'Seafood',
    company: 'Atlantic Fish Co.',
    product: 'Receivables Financing',
    title: 'Atlantic Fish Co. stopped waiting on restaurant clients to fund next week\'s catch',
    desc: 'A Boston seafood distributor serving upscale restaurants faced net-30/60 payment terms. Advance on their invoices freed up constant capital to fund weekly catch purchases without cash gaps.',
    metrics: [{ value: '45 days', label: 'DSO Eliminated' }, { value: '30%', label: 'Revenue Growth' }, { value: '$800K', label: 'Annual Capital Unlocked' }]
  }
]

const filteredCases = computed(() => {
  if (activeIndustry.value === 'All Industries') return allCases
  return allCases.filter(c => c.industry === activeIndustry.value)
})
</script>

<style scoped>
.stats-banner { padding: 40px 0; }

.stats-banner-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
}

.sb-stat { background: var(--white); padding: 28px 24px; text-align: center; }
.sb-value { font-size: 32px; font-weight: 900; color: var(--navy); letter-spacing: -0.03em; line-height: 1; margin-bottom: 6px; }
.sb-label { font-size: 13px; color: var(--mid); }

.industry-filter {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.filter-btn {
  padding: 8px 16px;
  border: 1.5px solid var(--border);
  border-radius: 100px;
  background: var(--white);
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: var(--body);
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover { border-color: var(--green); color: var(--green); }
.filter-btn.active { background: var(--navy); border-color: var(--navy); color: var(--white); }

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.case-study-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
}

.case-study-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-3px);
}

.csc-img {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.csc-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.case-study-card:hover .csc-img img { transform: scale(1.05); }

.csc-industry-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--green);
  color: var(--white);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 4px;
}

.csc-body { padding: 24px; }

.csc-product {
  font-size: 12px;
  color: var(--mid);
  margin-bottom: 8px;
}

.csc-product strong { color: var(--green); }

.csc-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.4;
  margin-bottom: 10px;
}

.csc-desc {
  font-size: 13px;
  color: var(--body);
  line-height: 1.6;
  margin-bottom: 16px;
}

.csc-metrics {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-top: 1px solid var(--border);
}

.csc-metric-value {
  display: block;
  font-size: 18px;
  font-weight: 800;
  color: var(--green);
  letter-spacing: -0.02em;
}

.csc-metric-label {
  font-size: 11px;
  color: var(--mid);
}

.cta-simple { background: var(--navy); border-radius: 16px; padding: 56px; text-align: center; position: relative; overflow: hidden; }
.cta-simple::before { content: ''; position: absolute; top: -50%; right: -10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(0,194,124,0.15) 0%, transparent 70%); pointer-events: none; }
.cta-simple-title { font-size: 32px; font-weight: 700; color: var(--white); margin-bottom: 12px; }
.cta-simple-desc { font-size: 16px; color: rgba(255,255,255,0.64); max-width: 480px; margin: 0 auto 32px; line-height: 1.7; }
.cta-simple-actions { display: flex; gap: 12px; justify-content: center; }

@media (max-width: 768px) {
  .stats-banner-grid { grid-template-columns: 1fr 1fr; }
  .cases-grid { grid-template-columns: 1fr; }
  .cta-simple { padding: 36px 24px; }
}
</style>
