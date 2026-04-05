<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Company</span>
        <h1>About<br><em>Drip Capital</em></h1>
        <p>We're on a mission to make working capital accessible to every growing business, without the friction of traditional banking.</p>
      </div>
    </section>

    <!-- Story -->
    <section class="section">
      <div class="container">
        <div class="story-layout reveal">
          <div class="story-text">
            <span class="eyebrow">Our Story</span>
            <h2 class="section-title">Founded in 2015 to fix<br>a broken system.</h2>
            <p class="story-p">
              Drip Capital was founded in 2015 by Pushkar Mukewar and Neil Kothari, two entrepreneurs who saw firsthand how traditional banks failed growing businesses. SMBs doing $5M–$500M in revenue were being turned away or stuck in 6-week approval processes for products that didn't fit their needs.
            </p>
            <p class="story-p">
              The founders built Drip Capital to solve this problem at scale: using technology and data to underwrite trade finance faster and more accurately than any bank could, while delivering capital in 48 hours rather than 6 weeks.
            </p>
            <p class="story-p">
              Today, Drip Capital has funded over $9B in trade for 10,000+ businesses across the US and India, backed by some of the world's most prestigious investors including Sequoia Capital, Accel, Y Combinator, and IFC/World Bank.
            </p>
          </div>
          <div class="story-stats">
            <div class="story-stat">
              <div class="story-stat-year">2015</div>
              <div class="story-stat-label">Founded in Palo Alto, CA</div>
            </div>
            <div class="story-stat">
              <div class="story-stat-year">$9B+</div>
              <div class="story-stat-label">Total capital deployed</div>
            </div>
            <div class="story-stat">
              <div class="story-stat-year">10K+</div>
              <div class="story-stat-label">Businesses funded</div>
            </div>
            <div class="story-stat">
              <div class="story-stat-year">30+</div>
              <div class="story-stat-label">Countries served</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">Our Values</span>
          <h2 class="section-title">What guides everything we do.</h2>
        </div>
        <div class="grid-3">
          <div class="value-card reveal" v-for="(v, i) in values" :key="i" :class="`reveal-delay-${i}`">
            <div class="value-icon">
              <AppIcon :name="v.icon" :size="22" color="var(--green)" />
            </div>
            <h3 class="value-title">{{ v.title }}</h3>
            <p class="value-desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Leadership</span>
          <h2 class="section-title">The team behind Drip Capital.</h2>
        </div>
        <div class="grid-3">
          <div class="team-card reveal" v-for="(t, i) in team" :key="i" :class="`reveal-delay-${i}`">
            <div class="team-avatar">{{ t.initials }}</div>
            <h3 class="team-name">{{ t.name }}</h3>
            <div class="team-role">{{ t.role }}</div>
            <p class="team-bio">{{ t.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Offices -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Our Offices</span>
          <h2 class="section-title">Where we work.</h2>
        </div>
        <div class="grid-2">
          <div class="office-card reveal" v-for="(o, i) in offices" :key="i" :class="`reveal-delay-${i}`">
            <div class="office-flag">{{ o.flag }}</div>
            <h3 class="office-city">{{ o.city }}</h3>
            <div class="office-badge">{{ o.type }}</div>
            <p class="office-address">{{ o.address }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-simple reveal">
          <h2 class="cta-simple-title">Join the Drip Capital family.</h2>
          <p class="cta-simple-desc">Whether you're a business looking for capital, an investor, or a talented professional looking to join our team, we'd love to hear from you.</p>
          <div class="cta-simple-actions">
            <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Get in Touch →</NuxtLink>
            <NuxtLink to="/company/investors" class="btn btn-outline btn-lg">View Investors</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'About Us | Drip Capital' })

const values = [
  { icon: 'zap', title: 'Speed as a Feature', desc: 'Every business decision has a time value. We obsess over reducing time-to-capital so our customers can seize opportunities before they pass.' },
  { icon: 'partner', title: 'Partnership Mindset', desc: 'We\'re not just lenders. We\'re partners in your growth. Your success is our success. We grow our facilities as our customers grow.' },
  { icon: 'shield', title: 'Data-Driven Trust', desc: 'We use technology and data to see what traditional banks miss: the full picture of a business\'s health and potential, not just a credit score.' },
  { icon: 'dollar', title: 'Customer Obsession', desc: 'Everything we build starts with the customer. Simpler applications, faster approvals, better service, all driven by listening to the businesses we serve.' },
  { icon: 'map-pin', title: 'Global Perspective', desc: 'Trade is global. Our products and team reflect that. We serve businesses across the US and India, with a deep understanding of cross-border commerce.' },
  { icon: 'unlock', title: 'Radical Transparency', desc: 'We believe in clear, honest communication: no hidden fees, no confusing terms. What you see is what you get with Drip Capital.' }
]

const team = [
  { initials: 'PM', name: 'Pushkar Mukewar', role: 'Co-Founder & Co-CEO', bio: 'Previously at Deutsche Bank and Barclays in structured finance. Stanford MBA. Built Drip Capital to give SMBs access to the same quality of capital as large corporations.' },
  { initials: 'NK', name: 'Neil Kothari', role: 'Co-Founder & Co-CEO', bio: 'Previously at McKinsey & Company and GE Capital. Stanford MBA. Leads product, technology, and expansion at Drip Capital.' },
  { initials: 'SV', name: 'Shiv Verma', role: 'Chief Risk Officer', bio: '20+ years in trade finance risk management. Former VP at JPMorgan. Designed Drip Capital\'s proprietary underwriting model.' }
]

const offices = [
  { flag: '🇺🇸', city: 'Palo Alto, California', type: 'Global Headquarters', address: '228 Hamilton Ave, 3rd Floor\nPalo Alto, CA 94301\nUnited States' },
  { flag: '🇮🇳', city: 'Mumbai, India', type: 'India Operations', address: 'Unit 501, Empire Building\nChurchgate, Mumbai 400020\nIndia' }
]
</script>

<style scoped>
.story-layout {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 64px;
  align-items: start;
}

.story-p {
  font-size: 15px;
  color: var(--body);
  line-height: 1.8;
  margin-bottom: 16px;
}

.story-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  align-self: flex-start;
}

.story-stat {
  background: var(--off);
  padding: 28px 20px;
  text-align: center;
}

.story-stat-year {
  font-size: 28px;
  font-weight: 900;
  color: var(--navy);
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 6px;
}

.story-stat-label {
  font-size: 12px;
  color: var(--mid);
}

.value-card {
  padding: 28px;
  border: 1px solid var(--border);
  background: var(--white);
  border-radius: var(--radius);
}

.value-icon { font-size: 28px; margin-bottom: 12px; }
.value-title { font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 10px; }
.value-desc { font-size: 14px; color: var(--body); line-height: 1.7; }

.team-card {
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
}

.team-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.team-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--navy);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto 16px;
}

.team-name {
  font-size: 17px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 4px;
}

.team-role {
  font-size: 13px;
  font-weight: 600;
  color: var(--green);
  margin-bottom: 12px;
}

.team-bio {
  font-size: 13px;
  color: var(--body);
  line-height: 1.7;
}

.office-card {
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--white);
}

.office-flag { font-size: 32px; margin-bottom: 12px; }
.office-city { font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
.office-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--green);
  background: rgba(0,194,124,0.1);
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 16px;
}
.office-address { font-size: 14px; color: var(--body); line-height: 1.8; white-space: pre-line; }

.cta-simple { background: var(--navy); border-radius: 16px; padding: 56px; text-align: center; position: relative; overflow: hidden; }
.cta-simple::before { content: ''; position: absolute; top: -50%; right: -10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(0,194,124,0.15) 0%, transparent 70%); pointer-events: none; }
.cta-simple-title { font-size: 32px; font-weight: 700; color: var(--white); margin-bottom: 12px; }
.cta-simple-desc { font-size: 16px; color: rgba(255,255,255,0.64); max-width: 480px; margin: 0 auto 32px; line-height: 1.7; }
.cta-simple-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

@media (max-width: 768px) {
  .story-layout { grid-template-columns: 1fr; gap: 40px; }
  .cta-simple { padding: 36px 24px; }
}
</style>
