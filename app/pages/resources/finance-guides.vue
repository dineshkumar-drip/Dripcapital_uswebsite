<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Resources</span>
        <h1>Finance Guides</h1>
        <p>Educational resources to help you understand working capital, trade finance, and how to fuel your business growth.</p>
      </div>
    </section>

    <!-- Categories -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">Browse by Topic</span>
          <h2 class="section-title">Working capital education<br>for growing businesses.</h2>
        </div>

        <div class="categories-grid">
          <div class="category-card reveal" v-for="(cat, i) in categories" :key="i" :class="`reveal-delay-${i % 3}`">
            <div class="cat-icon">
              <AppIcon :name="cat.icon" :size="22" color="var(--green)" />
            </div>
            <h3 class="cat-title">{{ cat.title }}</h3>
            <p class="cat-desc">{{ cat.desc }}</p>
            <div class="cat-articles">
              <a href="#" class="cat-article-link" v-for="a in cat.articles" :key="a">{{ a }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Guides -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Featured Guides</span>
          <h2 class="section-title">Start here.</h2>
        </div>
        <div class="guides-grid">
          <div class="guide-card reveal" v-for="(g, i) in guides" :key="i" :class="`reveal-delay-${i % 2}`">
            <div class="guide-tag">{{ g.tag }}</div>
            <h3 class="guide-title">{{ g.title }}</h3>
            <p class="guide-desc">{{ g.desc }}</p>
            <div class="guide-meta">
              <span class="guide-read-time">{{ g.readTime }} read</span>
              <a href="#" class="guide-cta">Read Guide →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-simple reveal">
          <h2 class="cta-simple-title">Have questions about working capital?</h2>
          <p class="cta-simple-desc">Our team of finance specialists is available to answer any questions and help you find the right solution for your business.</p>
          <div class="cta-simple-actions">
            <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Talk to a Specialist →</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Finance Guides | Drip Capital' })

const categories = [
  {
    icon: 'dollar',
    title: 'Working Capital Basics',
    desc: 'Understand the fundamentals of working capital and why it\'s the lifeblood of any growing business.',
    articles: ['What is Working Capital?', 'Working Capital Ratio Explained', 'How to Calculate Your Working Capital Needs', 'The Cash Conversion Cycle Guide']
  },
  {
    icon: 'building',
    title: 'Trade Finance',
    desc: 'Deep dives into supplier financing, receivables, and the tools that keep international trade flowing.',
    articles: ['Introduction to Trade Finance', 'Supplier Financing vs. Factoring', 'Understanding Invoice Financing', 'Cross-Border Trade Finance Guide']
  },
  {
    icon: 'chart',
    title: 'Business Finance',
    desc: 'Practical guides on cash flow management, financial planning, and growth financing strategies.',
    articles: ['Cash Flow Forecasting for SMBs', 'Debt vs. Equity: What\'s Right for You?', 'How to Prepare for a Financing Application', 'Managing Seasonal Cash Flow']
  },
  {
    icon: 'trending',
    title: 'Growth Strategies',
    desc: 'How high-growth businesses use working capital to seize market opportunities and scale efficiently.',
    articles: ['Scaling a Distribution Business', 'Financing a Major Retail Partnership', 'Building Supplier Relationships with Extended Terms', 'Using Credit to Capture Market Share']
  },
  {
    icon: 'map-pin',
    title: 'Import & Export',
    desc: 'Navigate the complexities of international trade with guides on documentation, compliance, and financing.',
    articles: ['US Import Finance 101', 'Letters of Credit Explained', 'Managing Currency Risk in Trade', 'Customs and Compliance Basics']
  },
  {
    icon: 'zap',
    title: 'Financial Metrics',
    desc: 'Key metrics every business owner should track to monitor financial health and optimize capital efficiency.',
    articles: ['DSO: Days Sales Outstanding', 'DPO: Days Payable Outstanding', 'Cash Conversion Cycle Calculator', 'Working Capital Efficiency Benchmarks']
  }
]

const guides = [
  { tag: 'Beginner', title: 'The Complete Guide to Working Capital Financing', desc: 'Everything you need to know about working capital covering what it is, why it matters, and the different ways to finance it for your business.', readTime: '12 min' },
  { tag: 'Intermediate', title: 'Supplier Financing vs. Invoice Factoring: Which is Right for You?', desc: 'A detailed comparison of two popular working capital solutions: when each makes sense and how to evaluate which fits your business model.', readTime: '8 min' },
  { tag: 'Advanced', title: 'Optimizing Your Cash Conversion Cycle', desc: 'Advanced strategies to shrink the time between cash outflows (paying suppliers) and cash inflows (collecting from customers).', readTime: '15 min' },
  { tag: 'Industry', title: 'Working Capital for Importers: A Practical Guide', desc: 'Specific guidance for businesses that import goods: navigating supplier terms, customs, logistics financing, and US customer payment cycles.', readTime: '10 min' }
]
</script>

<style scoped>
.categories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.category-card {
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: box-shadow 0.2s, transform 0.2s;
}

.category-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.cat-icon { font-size: 28px; margin-bottom: 12px; }
.cat-title { font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
.cat-desc { font-size: 13px; color: var(--body); line-height: 1.6; margin-bottom: 16px; }

.cat-articles {
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-top: 1px solid var(--border);
  padding-top: 16px;
}

.cat-article-link {
  font-size: 13px;
  color: var(--green);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
}

.cat-article-link::before { content: '→'; font-size: 11px; }
.cat-article-link:hover { color: var(--green-d); }

.guides-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.guide-card {
  padding: 28px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: box-shadow 0.2s, transform 0.2s;
}

.guide-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.guide-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--navy);
  background: var(--off2);
  padding: 3px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.guide-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 10px;
  line-height: 1.3;
}

.guide-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
  margin-bottom: 20px;
}

.guide-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.guide-read-time {
  font-size: 12px;
  color: var(--mid);
  font-weight: 500;
}

.guide-cta {
  font-size: 13px;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
}

.guide-cta:hover { color: var(--green-d); }

.cta-simple { background: var(--navy); border-radius: 16px; padding: 56px; text-align: center; position: relative; overflow: hidden; }
.cta-simple::before { content: ''; position: absolute; top: -50%; right: -10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(0,194,124,0.15) 0%, transparent 70%); pointer-events: none; }
.cta-simple-title { font-size: 32px; font-weight: 700; color: var(--white); margin-bottom: 12px; }
.cta-simple-desc { font-size: 16px; color: rgba(255,255,255,0.64); max-width: 480px; margin: 0 auto 32px; line-height: 1.7; }
.cta-simple-actions { display: flex; gap: 12px; justify-content: center; }

@media (max-width: 768px) {
  .categories-grid { grid-template-columns: 1fr; }
  .guides-grid { grid-template-columns: 1fr; }
  .cta-simple { padding: 36px 24px; }
}
</style>
