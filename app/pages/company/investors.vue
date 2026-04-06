<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Company</span>
        <h1>World-class investors<br>backing <em>our mission</em></h1>
        <p>Drip Capital is backed by leading technology investors and global financial institutions — giving us the capital and credibility to serve thousands of importers and exporters across the US.</p>
      </div>
    </section>

    <!-- Equity Partners -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">Equity Partners</span>
          <h2 class="section-title">Backed by the best in<br>technology and development finance.</h2>
        </div>
        <div class="logo-grid">
          <div class="logo-card reveal" v-for="(inv, i) in equityPartners" :key="i" :class="`reveal-delay-${Math.min(i, 4)}`">
            <div class="logo-wrap">
              <img :src="inv.logo" :alt="inv.name" class="partner-logo" :style="inv.logoStyle || ''" />
            </div>
            <div class="logo-card-body">
              <h3 class="logo-card-name">{{ inv.name }}</h3>
              <div class="logo-card-type">{{ inv.type }}</div>
              <p class="logo-card-desc">{{ inv.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Banking Partners -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">Banking Partners</span>
          <h2 class="section-title">Funded by global financial institutions.</h2>
        </div>
        <div class="logo-grid logo-grid-4">
          <div class="logo-card reveal" v-for="(inv, i) in bankingPartners" :key="i" :class="`reveal-delay-${Math.min(i, 3)}`">
            <div class="logo-wrap">
              <img :src="inv.logo" :alt="inv.name" class="partner-logo" :style="inv.logoStyle || ''" />
            </div>
            <div class="logo-card-body">
              <h3 class="logo-card-name">{{ inv.name }}</h3>
              <div class="logo-card-type">{{ inv.type }}</div>
              <p class="logo-card-desc">{{ inv.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Funding Timeline -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Funding History</span>
          <h2 class="section-title">Our investment journey.</h2>
        </div>
        <div class="timeline">
          <div class="timeline-item reveal" v-for="(round, i) in rounds" :key="i" :class="`reveal-delay-${i}`">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-year">{{ round.year }}</div>
              <div class="timeline-round">{{ round.round }}</div>
              <div class="timeline-amount">{{ round.amount }}</div>
              <p class="timeline-desc">{{ round.desc }}</p>
              <div class="timeline-investors">
                <span v-for="inv in round.investors" :key="inv" class="timeline-investor-tag">{{ inv }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What Investors Say -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">Investor Perspectives</span>
          <h2 class="section-title">Why top investors backed Drip Capital.</h2>
        </div>
        <div class="grid-2">
          <div class="investor-quote reveal" v-for="(q, i) in quotes" :key="i" :class="`reveal-delay-${i}`">
            <p class="iq-text">"{{ q.quote }}"</p>
            <div class="iq-source">
              <div class="iq-avatar">{{ q.initials }}</div>
              <div>
                <div class="iq-name">{{ q.name }}</div>
                <div class="iq-firm">{{ q.firm }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-simple reveal">
          <h2 class="cta-simple-title">Interested in partnering with Drip Capital?</h2>
          <p class="cta-simple-desc">We work with banks, institutional lenders, and strategic investors to expand access to trade finance. Reach out to explore opportunities.</p>
          <div class="cta-simple-actions">
            <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Contact Us →</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Investors | Drip Capital' })

const equityPartners = [
  {
    name: 'Peak XV Partners',
    type: 'Venture Capital',
    logo: '/logos/peak-xv.webp',
    logoStyle: 'max-height: 36px;',
    desc: 'Formerly Sequoia Capital India & SEA. One of the most respected technology investors in Asia, backing companies that define the future of their categories.'
  },
  {
    name: 'Accel',
    type: 'Venture Capital',
    logo: '/logos/accel.png',
    logoStyle: 'max-height: 32px;',
    desc: 'Global venture capital firm with 40+ years of experience. Backed Facebook, Spotify, Dropbox, and hundreds of other iconic technology companies.'
  },
  {
    name: 'Y Combinator',
    type: 'Startup Accelerator',
    logo: '/logos/ycombinator.png',
    logoStyle: 'max-height: 40px;',
    desc: 'The world\'s most prestigious startup accelerator. Drip Capital alumni include a cohort known for building transformative global fintech.'
  },
  {
    name: 'IFC · World Bank Group',
    type: 'Development Finance',
    logo: '/logos/ifc.png',
    logoStyle: 'max-height: 44px;',
    desc: 'International Finance Corporation supports private sector development in emerging markets — validating Drip\'s mission to democratize trade finance globally.'
  },
  {
    name: 'Wing VC',
    type: 'Venture Capital',
    logo: '/logos/wing-vc.svg',
    logoStyle: 'max-height: 28px;',
    desc: 'Early-stage B2B technology investor. Wing backed Drip Capital from the Series A, recognizing the massive opportunity in SME trade finance.'
  }
]

const bankingPartners = [
  {
    name: 'Barclays',
    type: 'Global Bank',
    logo: '/logos/barclays.png',
    logoStyle: 'max-height: 36px;',
    desc: 'British multinational investment bank with 330+ years of history. A major provider of Drip\'s credit facilities for US trade finance operations.'
  },
  {
    name: 'SMBC',
    type: 'Global Bank',
    logo: '/logos/smbc.png',
    logoStyle: 'max-height: 40px;',
    desc: 'Sumitomo Mitsui Banking Corporation — one of Japan\'s largest banks with over $2 trillion in assets and a leading global trade finance franchise.'
  },
  {
    name: 'East West Bank',
    type: 'Commercial Bank',
    logo: '/logos/east-west-bank.png',
    logoStyle: 'max-height: 36px;',
    desc: 'Premier US-Asia cross-border bank with deep expertise in serving businesses that operate between the two largest economies in the world.'
  },
  {
    name: 'TD Bank',
    type: 'Commercial Bank',
    logo: '/logos/td-bank.svg',
    logoStyle: 'max-height: 44px;',
    desc: 'One of North America\'s largest banks, with particular strength in small business banking, commercial lending, and cross-border trade.'
  }
]

const rounds = [
  { year: '2016', round: 'Seed', amount: 'Undisclosed', desc: 'First institutional funding from Y Combinator to build the technology platform and initial team.', investors: ['Y Combinator'] },
  { year: '2017', round: 'Series A', amount: '$8M', desc: 'Expanded team, launched first commercial products, and began serving US-India trade corridors.', investors: ['Wing VC', 'Accel'] },
  { year: '2019', round: 'Series B', amount: '$25M', desc: 'Scaled operations, expanded product suite, and significantly grew the customer base.', investors: ['Peak XV', 'Accel', 'Wing VC'] },
  { year: '2021', round: 'Series C', amount: '$40M', desc: 'Accelerated growth across US and India markets and deepened banking partnerships.', investors: ['Peak XV', 'East West Bank', 'IFC · World Bank'] },
  { year: '2023', round: 'Debt Facilities', amount: '$700M+', desc: 'Secured major credit facilities from global financial institutions to fund lending operations at scale.', investors: ['Barclays', 'SMBC', 'TD Bank'] }
]

const quotes = [
  { quote: 'Drip Capital is using technology to solve a massive, underserved market. The founders have built a business with real unit economics and an unmatched understanding of trade finance.', name: 'Partner', firm: 'Peak XV Partners', initials: 'PX' },
  { quote: 'What impressed us most was the depth of the founding team\'s understanding of trade finance and their ability to use data to make better credit decisions than anyone else in the market.', name: 'Partner', firm: 'Accel', initials: 'AC' }
]
</script>

<style scoped>
/* Logo grid — equity: 3 col */
.logo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Banking: 4 col */
.logo-grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

.logo-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
  background: var(--white);
}

.logo-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.logo-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 24px 20px;
  background: var(--off);
  border-bottom: 1px solid var(--border);
  min-height: 96px;
}

.partner-logo {
  max-width: 140px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

.logo-card-body {
  padding: 20px 22px 24px;
}

.logo-card-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 3px;
}

.logo-card-type {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 10px;
}

.logo-card-desc {
  font-size: 12.5px;
  color: var(--body);
  line-height: 1.65;
}

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: 2px solid var(--border);
  padding-left: 32px;
  margin-left: 16px;
}

.timeline-item {
  position: relative;
  padding-bottom: 40px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -41px;
  top: 4px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--green);
  border: 3px solid var(--white);
  box-shadow: 0 0 0 2px var(--green);
}

.timeline-content {
  padding: 24px 28px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.timeline-year {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mid);
  margin-bottom: 4px;
}

.timeline-round {
  font-size: 20px;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 2px;
}

.timeline-amount {
  font-size: 28px;
  font-weight: 900;
  color: var(--green);
  letter-spacing: -0.03em;
  margin-bottom: 12px;
}

.timeline-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
  margin-bottom: 16px;
}

.timeline-investors {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.timeline-investor-tag {
  font-size: 12px;
  font-weight: 600;
  color: var(--navy);
  background: var(--off2);
  padding: 4px 10px;
  border-radius: 4px;
}

/* Quotes */
.investor-quote {
  padding: 32px;
  background: var(--off);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.iq-text {
  font-size: 16px;
  color: var(--body);
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 20px;
}

.iq-source {
  display: flex;
  align-items: center;
  gap: 12px;
}

.iq-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--navy);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

.iq-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
}

.iq-firm {
  font-size: 12px;
  color: var(--mid);
}

.cta-simple { background: var(--navy); border-radius: 16px; padding: 56px; text-align: center; position: relative; overflow: hidden; }
.cta-simple::before { content: ''; position: absolute; top: -50%; right: -10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(0,194,124,0.15) 0%, transparent 70%); pointer-events: none; }
.cta-simple-title { font-size: 32px; font-weight: 700; color: var(--white); margin-bottom: 12px; }
.cta-simple-desc { font-size: 16px; color: rgba(255,255,255,0.64); max-width: 480px; margin: 0 auto 32px; line-height: 1.7; }
.cta-simple-actions { display: flex; gap: 12px; justify-content: center; }

@media (max-width: 900px) {
  .logo-grid { grid-template-columns: repeat(2, 1fr); }
  .logo-grid-4 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .logo-grid, .logo-grid-4 { grid-template-columns: 1fr; }
  .cta-simple { padding: 36px 24px; }
}
</style>
