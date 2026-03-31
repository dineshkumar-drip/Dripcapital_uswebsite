<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Company</span>
        <h1>World-class investors<br>backing <em>our mission</em></h1>
        <p>Drip Capital is backed by some of the most prestigious investors in technology and finance. Their support validates our vision and gives us the resources to keep building.</p>
      </div>
    </section>

    <!-- Investor Grid -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">Our Investors</span>
          <h2 class="section-title">Trusted by leading investors<br>in technology and finance.</h2>
        </div>
        <div class="investors-grid">
          <div class="investor-card reveal" v-for="(inv, i) in investors" :key="i" :class="`reveal-delay-${Math.min(i, 4)}`">
            <div class="investor-logo">{{ inv.initials }}</div>
            <h3 class="investor-name">{{ inv.name }}</h3>
            <div class="investor-type">{{ inv.type }}</div>
            <p class="investor-desc">{{ inv.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Investment Rounds -->
    <section class="section section-bg">
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
    <section class="section">
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
    <section class="section section-bg">
      <div class="container">
        <div class="cta-simple reveal">
          <h2 class="cta-simple-title">Interested in investing in Drip Capital?</h2>
          <p class="cta-simple-desc">We occasionally discuss opportunities with strategic investors and financial institutions. Reach out to learn more.</p>
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

const investors = [
  { initials: 'SEQ', name: 'Sequoia Capital', type: 'Venture Capital', desc: 'One of Silicon Valley\'s most prestigious VC firms. Backed Google, Apple, Oracle, and hundreds of transformative companies.' },
  { initials: 'ACC', name: 'Accel', type: 'Venture Capital', desc: 'Global venture capital firm with 40 years of experience. Backed Facebook, Spotify, Dropbox, and other iconic companies.' },
  { initials: 'YC', name: 'Y Combinator', type: 'Accelerator', desc: 'The world\'s most prestigious startup accelerator. Alumni include Airbnb, Stripe, DoorDash, and Coinbase.' },
  { initials: 'IFC', name: 'IFC / World Bank', type: 'Development Finance', desc: 'International Finance Corporation, a member of the World Bank Group. Focuses on sustainable private sector development in emerging markets.' },
  { initials: 'BAR', name: 'Barclays', type: 'Global Bank', desc: 'British multinational investment bank and financial services company with 330+ years of history and global presence.' },
  { initials: 'SMBC', name: 'SMBC', type: 'Global Bank', desc: 'Sumitomo Mitsui Banking Corporation, one of Japan\'s largest banks with over $2 trillion in assets and a major global trade finance operation.' },
  { initials: 'EWB', name: 'East West Bank', type: 'Commercial Bank', desc: 'Premier bank focused on US-Asia cross-border business. Deep expertise in serving businesses that operate between the two largest economies.' },
  { initials: 'TDB', name: 'TD Bank', type: 'Commercial Bank', desc: 'One of North America\'s largest banks, with particular strength in small business banking and commercial lending.' },
  { initials: 'WIN', name: 'Wing VC', type: 'Venture Capital', desc: 'Early stage VC firm backing founders building transformative B2B technology companies.' }
]

const rounds = [
  { year: '2016', round: 'Seed', amount: 'Undisclosed', desc: 'First institutional funding to build the technology platform and initial team.', investors: ['Y Combinator'] },
  { year: '2017', round: 'Series A', amount: '$8M', desc: 'Expanded team, launched first commercial products, began serving US-India trade corridors.', investors: ['Wing VC', 'Accel'] },
  { year: '2019', round: 'Series B', amount: '$25M', desc: 'Scaled operations, expanded product suite, grew customer base significantly.', investors: ['Sequoia Capital', 'Accel', 'Wing VC'] },
  { year: '2021', round: 'Series C', amount: '$40M', desc: 'Accelerated growth across US and India markets, added bank partnerships.', investors: ['Sequoia Capital', 'East West Bank', 'IFC · World Bank'] },
  { year: '2023', round: 'Debt Facilities', amount: '$700M+', desc: 'Secured major credit facilities from global financial institutions to fund lending operations.', investors: ['Barclays', 'SMBC', 'TD Bank'] }
]

const quotes = [
  { quote: 'Drip Capital is using technology to solve a massive, underserved market. The founders have built a business with real unit economics and an unmatched understanding of trade finance.', name: 'Partner', firm: 'Sequoia Capital', initials: 'SC' },
  { quote: 'What impressed us most was the depth of the founding team\'s understanding of trade finance and their ability to use data to make better credit decisions than anyone else in the market.', name: 'Partner', firm: 'Accel', initials: 'AC' }
]
</script>

<style scoped>
.investors-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.investor-card {
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: box-shadow 0.2s, transform 0.2s;
}

.investor-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.investor-logo {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: var(--navy);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.02em;
  margin-bottom: 16px;
}

.investor-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 4px;
}

.investor-type {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 12px;
}

.investor-desc {
  font-size: 13px;
  color: var(--body);
  line-height: 1.6;
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

@media (max-width: 768px) {
  .investors-grid { grid-template-columns: 1fr 1fr; }
  .cta-simple { padding: 36px 24px; }
}
</style>
