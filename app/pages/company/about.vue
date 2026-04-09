<template>
  <div>

    <!-- ── 1. Hero ─────────────────────────────────────────────────── -->
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow reveal reveal-delay-0">Our Story</span>
        <h1 class="reveal reveal-delay-1">Built to fund<br><em>America's growth engine.</em></h1>
        <p class="hero-sub reveal reveal-delay-2">
          Founded in 2015 by two Stanford MBAs who watched traditional banks turn away thousands
          of thriving SMBs. We built a better way.
        </p>
      </div>
    </section>

    <!-- ── 2. Mission Strip ──────────────────────────────────────────── -->
    <section class="mission-strip">
      <div class="container">
        <div class="mission-pillars">
          <div
            v-for="(pillar, i) in missionPillars"
            :key="pillar.label"
            class="mission-pillar reveal"
            :class="`reveal-delay-${i}`"
          >
            <div class="mission-icon">
              <AppIcon :name="pillar.icon" :size="24" color="var(--green)" />
            </div>
            <div class="mission-content">
              <div class="mission-label">{{ pillar.label }}</div>
              <div class="mission-detail">{{ pillar.detail }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 3. Our Story ──────────────────────────────────────────────── -->
    <section class="section">
      <div class="container">
        <div class="story-layout reveal">
          <div class="story-text">
            <span class="eyebrow">Our Story</span>
            <h2 class="section-title">Founded in 2015 to fix<br>a broken system.</h2>
            <p class="story-p">
              Drip Capital was founded in 2015 by Pushkar Mukewar and Neil Kothari, two entrepreneurs
              who saw firsthand how traditional banks failed growing businesses. SMBs doing $5M–$500M
              in revenue were being turned away or stuck in 6-week approval processes for products
              that didn't fit their needs.
            </p>
            <p class="story-p">
              The founders built Drip Capital to solve this problem at scale — using technology and
              data to underwrite trade finance faster and more accurately than any bank could, while
              delivering capital in 24 hours rather than 6 weeks.
            </p>
            <p class="story-p">
              Today, Drip Capital has funded over $9B in trade for 11,000+ businesses across the US
              and India, backed by Sequoia Capital, Accel, Y Combinator, and IFC/World Bank.
            </p>
          </div>
          <div class="story-stats">
            <div v-for="stat in storyStats" :key="stat.value" class="story-stat">
              <div class="story-stat-value">{{ stat.value }}</div>
              <div class="story-stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 4. Timeline ───────────────────────────────────────────────── -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align:center;max-width:540px;margin:0 auto 56px;">
          <span class="eyebrow">Our Journey</span>
          <h2 class="section-title">A decade of relentless growth.</h2>
        </div>
        <div class="timeline">
          <div
            v-for="(milestone, i) in timeline"
            :key="milestone.year"
            class="timeline-item reveal"
            :class="`reveal-delay-${i % 4}`"
          >
            <div class="timeline-year">{{ milestone.year }}</div>
            <div class="timeline-connector">
              <div class="timeline-dot"></div>
              <div class="timeline-line"></div>
            </div>
            <div class="timeline-body">
              <div class="timeline-event">{{ milestone.event }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 5. Leadership ─────────────────────────────────────────────── -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal" style="max-width:540px;margin-bottom:48px;">
          <span class="eyebrow">Leadership</span>
          <h2 class="section-title">The team behind Drip Capital.</h2>
        </div>
        <div class="grid-3">
          <div
            v-for="(t, i) in team"
            :key="t.name"
            class="team-card reveal"
            :class="`reveal-delay-${i % 4}`"
          >
            <div class="team-photo-wrap">
              <img
                :src="t.photo"
                :alt="`${t.name} — ${t.role}`"
                class="team-photo"
                loading="lazy"
                @error="(e) => handlePhotoError(e, t)"
              />
              <div
                class="team-initials-fallback"
                :style="{ background: t.color }"
                :data-name="t.name"
              >
                {{ t.initials }}
              </div>
            </div>
            <div class="team-body">
              <h3 class="team-name">{{ t.name }}</h3>
              <div class="team-role">{{ t.role }}</div>
              <p class="team-bio">{{ t.bio }}</p>
              <a
                :href="t.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="team-linkedin"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 6. Values ─────────────────────────────────────────────────── -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align:center;max-width:560px;margin:0 auto 48px;">
          <span class="eyebrow">Our Values</span>
          <h2 class="section-title">What guides everything we do.</h2>
        </div>
        <div class="grid-3">
          <div
            v-for="(v, i) in values"
            :key="v.title"
            class="value-card reveal"
            :class="`reveal-delay-${i % 4}`"
          >
            <div class="value-icon">
              <AppIcon :name="v.icon" :size="22" color="var(--green)" />
            </div>
            <h3 class="value-title">{{ v.title }}</h3>
            <p class="value-desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 7. Investors ──────────────────────────────────────────────── -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal" style="text-align:center;max-width:560px;margin:0 auto 48px;">
          <span class="eyebrow">Backed By</span>
          <h2 class="section-title">World-class investors who believe in our mission.</h2>
        </div>
        <div class="investors-row reveal reveal-delay-1">
          <div v-for="inv in investors" :key="inv" class="investor-badge">
            {{ inv }}
          </div>
        </div>
      </div>
    </section>

    <!-- ── 8. Offices ────────────────────────────────────────────────── -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="max-width:540px;margin-bottom:48px;">
          <span class="eyebrow">Our Offices</span>
          <h2 class="section-title">Where we work.</h2>
        </div>
        <div class="grid-2">
          <div
            v-for="(o, i) in offices"
            :key="o.city"
            class="office-card reveal"
            :class="`reveal-delay-${i}`"
          >
            <div class="office-flag">{{ o.flag }}</div>
            <h3 class="office-city">{{ o.city }}</h3>
            <div class="office-badge-pill">{{ o.type }}</div>
            <p class="office-address">{{ o.address }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 9. Press ──────────────────────────────────────────────────── -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal" style="text-align:center;max-width:560px;margin:0 auto 48px;">
          <span class="eyebrow">In the Press</span>
          <h2 class="section-title">What they're saying about us.</h2>
        </div>
        <div class="grid-3">
          <div
            v-for="(item, i) in press"
            :key="item.outlet"
            class="press-card reveal"
            :class="`reveal-delay-${i}`"
          >
            <div class="press-quote-mark">&ldquo;</div>
            <p class="press-quote">{{ item.quote }}</p>
            <div class="press-footer">
              <span class="press-outlet">{{ item.outlet }}</span>
              <span class="press-year">{{ item.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 10. CTA ────────────────────────────────────────────────────── -->
    <section class="section">
      <div class="container">
        <div class="cta-simple reveal">
          <h2 class="cta-simple-title">Join the Drip Capital family.</h2>
          <p class="cta-simple-desc">
            Whether you're a business looking for capital, an investor, or a talented professional
            looking to join our team, we'd love to hear from you.
          </p>
          <div class="cta-simple-actions">
            <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Get in Touch &rarr;</NuxtLink>
            <NuxtLink to="/company/investors" class="btn btn-outline btn-lg">View Investors</NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'About Drip Capital | Working Capital for SMBs' })

// ── Mission pillars ────────────────────────────────────────────────────────────
const missionPillars = [
  { icon: 'zap',      label: 'Speed',  detail: '24-hour approvals vs 6-week bank timelines' },
  { icon: 'unlock',   label: 'Access', detail: 'No collateral, no personal guarantees' },
  { icon: 'chart',    label: 'Scale',  detail: 'Capital grows with your business' },
]

// ── Story stats ────────────────────────────────────────────────────────────────
const storyStats = [
  { value: '2015',   label: 'Founded in Palo Alto, CA' },
  { value: '$9B+',   label: 'Total capital deployed' },
  { value: '11,000+', label: 'Businesses funded' },
  { value: '30+',    label: 'Countries reached' },
]

// ── Timeline ───────────────────────────────────────────────────────────────────
const timeline = [
  { year: '2015', event: 'Founded in Palo Alto by Pushkar & Neil. First trade finance deal funded.' },
  { year: '2016', event: 'Y Combinator backed. First $10M in transactions.' },
  { year: '2018', event: 'Series A led by Accel. Launched US vendor financing product.' },
  { year: '2019', event: '$45M Series B led by Sequoia Capital. Surpassed $500M funded.' },
  { year: '2021', event: 'Crossed $1B in total financing. Expanded to seafood & agri-food industries.' },
  { year: '2023', event: '$2B+ annual run rate. 11,000+ active business customers.' },
  { year: '2024', event: '$9B+ cumulative financing. Launched Line of Credit product.' },
]

// ── Leadership ─────────────────────────────────────────────────────────────────
interface TeamMember {
  name: string
  role: string
  bio: string
  linkedin: string
  photo: string
  initials: string
  color: string
}

const team: TeamMember[] = [
  {
    name: 'Pushkar Mukewar',
    role: 'CEO and Founder',
    bio: 'Pushkar started Drip with the mission of making trade easy and accessible for small businesses globally. Before Drip, he spent several years in financial services across the US, Europe, the Middle East, and India — first as a Risk professional at Capital One, then as a Consultant with Oliver Wyman. Pushkar holds an MBA from The Wharton School at the University of Pennsylvania and an MS from the Georgia Institute of Technology.',
    linkedin: 'https://www.linkedin.com/in/pushkarmukewar/',
    photo: '/team/pushkar-mukewar.svg',
    initials: 'PM',
    color: '#0B1F3A',
  },
  {
    name: 'Karl Boog',
    role: 'Capital Markets and Global Partnerships',
    bio: 'Karl is responsible for Drip\'s Capital Markets strategy, including funding and managing strategic relationships with global banks and institutional investors. He also leads Drip\'s Global Partnerships business. Karl started his career at BlackRock in New York, focused on fixed income and derivatives. Prior to Drip, he was an executive in hedge funds and asset management. Karl holds a B.S. from The Wharton School at the University of Pennsylvania.',
    linkedin: 'https://www.linkedin.com/in/karlboog/',
    photo: '/team/karl-boog.svg',
    initials: 'KB',
    color: '#1B5FA0',
  },
  {
    name: 'Matt Heske',
    role: 'Channel Partnerships',
    bio: 'Matt is responsible for Drip Capital\'s US partnership initiatives, developing strategic alliances to expand market reach and enhance revenue opportunities. With a background in financial services and alternative lending, he has a decade of experience driving business development through key partnerships. Matt holds an M.B.A. from UNC Kenan-Flagler Business School and a B.A. from The College of the Holy Cross.',
    linkedin: 'https://www.linkedin.com/in/mattheske/',
    photo: '/team/matt-heske.png',
    initials: 'MH',
    color: '#00693A',
  },
  {
    name: 'Brad Shropshire',
    role: 'Collections & Recovery',
    bio: 'Brad leads Drip Capital\'s US Collections & Recovery operations, bringing extensive experience in credit risk management and portfolio recovery. He oversees end-to-end collection strategies, ensuring optimal recovery rates while maintaining strong client relationships. Brad\'s expertise spans financial services, asset-backed lending, and cross-border receivables management.',
    linkedin: 'https://www.linkedin.com/in/bradshropshire/',
    photo: '/team/brad-shropshire.jpg',
    initials: 'BS',
    color: '#B45309',
  },
]

// ── Values ─────────────────────────────────────────────────────────────────────
const values = [
  { icon: 'zap',      title: 'Speed as a Feature',   desc: "Every business decision has a time value. We obsess over reducing time-to-capital so our customers can seize opportunities before they pass." },
  { icon: 'partner',  title: 'Partnership Mindset',  desc: "We're not just lenders. We're partners in your growth. Your success is our success. We grow our facilities as our customers grow." },
  { icon: 'shield',   title: 'Data-Driven Trust',    desc: "We use technology and data to see what traditional banks miss: the full picture of a business's health and potential, not just a credit score." },
  { icon: 'dollar',   title: 'Customer Obsession',   desc: "Everything we build starts with the customer. Simpler applications, faster approvals, better service — all driven by listening to the businesses we serve." },
  { icon: 'map-pin',  title: 'Global Perspective',   desc: "Trade is global. Our products and team reflect that. We serve businesses across the US and India with a deep understanding of cross-border commerce." },
  { icon: 'unlock',   title: 'Radical Transparency', desc: "We believe in clear, honest communication: no hidden fees, no confusing terms. What you see is what you get with Drip Capital." },
]

// ── Investors ──────────────────────────────────────────────────────────────────
const investors = ['Sequoia Capital', 'Accel Partners', 'Y Combinator', 'IFC / World Bank']

// ── Offices ────────────────────────────────────────────────────────────────────
const offices = [
  { flag: '🇺🇸', city: 'Palo Alto, California', type: 'Global Headquarters', address: '228 Hamilton Ave, 3rd Floor\nPalo Alto, CA 94301\nUnited States' },
  { flag: '🇮🇳', city: 'Mumbai, India',          type: 'India Operations',    address: 'Unit 501, Empire Building\nChurchgate, Mumbai 400020\nIndia' },
]

// ── Press ──────────────────────────────────────────────────────────────────────
const press = [
  { outlet: 'Forbes',     year: '2023', quote: 'Drip Capital is reinventing trade finance for the SMB market.' },
  { outlet: 'TechCrunch', year: '2019', quote: 'Y Combinator-backed Drip Capital raises $45M to expand trade finance.' },
  { outlet: 'Bloomberg',  year: '2022', quote: 'The fintech startup making trade finance accessible to small importers.' },
]

// ── Photo error handler ────────────────────────────────────────────────────────
function handlePhotoError(e: Event, member: TeamMember) {
  const img = e.target as HTMLImageElement
  img.style.display = 'none'
  const wrap = img.closest('.team-photo-wrap')
  if (wrap) {
    const fallback = wrap.querySelector('.team-initials-fallback') as HTMLElement | null
    if (fallback) fallback.style.display = 'flex'
  }
}
</script>

<style scoped>
/* ── Hero ───────────────────────────────────────────────────────────────────── */
.hero-sub {
  font-size: 18px;
  color: var(--body);
  max-width: 560px;
  line-height: 1.7;
  margin-top: 20px;
}

/* ── Mission Strip ──────────────────────────────────────────────────────────── */
.mission-strip {
  background: var(--navy);
  padding: 40px 0;
}

.mission-pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.mission-pillar {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 28px 40px;
  border-right: 1px solid rgba(255, 255, 255, 0.10);
}

.mission-pillar:last-child {
  border-right: none;
}

.mission-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(0, 194, 124, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.mission-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mission-label {
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
  letter-spacing: -0.01em;
}

.mission-detail {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.60);
  line-height: 1.5;
}

/* ── Story ──────────────────────────────────────────────────────────────────── */
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

.story-stat-value {
  font-size: 30px;
  font-weight: 900;
  color: var(--navy);
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 8px;
}

.story-stat-label {
  font-size: 12px;
  color: var(--mid);
  line-height: 1.4;
}

/* ── Timeline ───────────────────────────────────────────────────────────────── */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}

.timeline-item {
  display: grid;
  grid-template-columns: 88px 32px 1fr;
  align-items: stretch;
  gap: 0;
}

.timeline-year {
  font-size: 15px;
  font-weight: 800;
  color: var(--green);
  text-align: right;
  padding: 20px 20px 20px 0;
  line-height: 1;
  align-self: center;
}

.timeline-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--green);
  border: 2px solid var(--white);
  outline: 2px solid var(--green);
  flex-shrink: 0;
  margin-top: 22px;
  z-index: 1;
}

.timeline-line {
  flex: 1;
  width: 2px;
  background: var(--border);
}

.timeline-item:last-child .timeline-line {
  display: none;
}

.timeline-body {
  padding: 16px 0 16px 20px;
  align-self: center;
}

.timeline-event {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
  max-width: 480px;
}

/* ── Leadership ─────────────────────────────────────────────────────────────── */
.team-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--white);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s, transform 0.2s;
}

.team-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-3px);
}

.team-photo-wrap {
  position: relative;
  height: 260px;
  background: var(--off);
  overflow: hidden;
}

.team-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.team-initials-fallback {
  position: absolute;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: 800;
  color: var(--white);
  letter-spacing: -0.02em;
}

.team-body {
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.team-name {
  font-size: 17px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 4px;
  line-height: 1.3;
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
  flex: 1;
  margin-bottom: 16px;
}

.team-linkedin {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 600;
  color: #0A66C2;
  text-decoration: none;
  padding: 7px 14px;
  border: 1px solid rgba(10, 102, 194, 0.25);
  border-radius: 6px;
  transition: background 0.15s, border-color 0.15s;
  align-self: flex-start;
}

.team-linkedin:hover {
  background: rgba(10, 102, 194, 0.06);
  border-color: #0A66C2;
}

/* ── Values ─────────────────────────────────────────────────────────────────── */
.value-card {
  padding: 28px;
  border: 1px solid var(--border);
  background: var(--white);
  border-radius: var(--radius);
  transition: box-shadow 0.2s, transform 0.2s;
}

.value-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.value-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(0, 194, 124, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.value-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 10px;
}

.value-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
}

/* ── Investors ──────────────────────────────────────────────────────────────── */
.investors-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.investor-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  border-radius: 100px;
  border: 2px solid var(--navy);
  background: var(--white);
  color: var(--navy);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
  transition: background 0.15s, color 0.15s;
}

.investor-badge:hover {
  background: var(--navy);
  color: var(--white);
}

/* ── Offices ────────────────────────────────────────────────────────────────── */
.office-card {
  padding: 36px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--white);
  transition: box-shadow 0.2s;
}

.office-card:hover {
  box-shadow: var(--shadow);
}

.office-flag {
  font-size: 36px;
  margin-bottom: 14px;
}

.office-city {
  font-size: 20px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 10px;
}

.office-badge-pill {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--green);
  background: rgba(0, 194, 124, 0.10);
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 18px;
}

.office-address {
  font-size: 14px;
  color: var(--body);
  line-height: 1.9;
  white-space: pre-line;
}

/* ── Press ──────────────────────────────────────────────────────────────────── */
.press-card {
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--white);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.press-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.press-quote-mark {
  font-size: 48px;
  font-family: Georgia, serif;
  color: var(--green);
  line-height: 0.8;
  margin-bottom: 4px;
}

.press-quote {
  font-size: 15px;
  color: var(--navy);
  line-height: 1.7;
  font-style: italic;
  font-weight: 500;
  flex: 1;
}

.press-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

.press-outlet {
  font-size: 13px;
  font-weight: 800;
  color: var(--navy);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.press-year {
  font-size: 12px;
  color: var(--mid);
  font-weight: 500;
}

/* ── CTA ────────────────────────────────────────────────────────────────────── */
.cta-simple {
  background: var(--navy);
  border-radius: 16px;
  padding: 64px 56px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-simple::before {
  content: '';
  position: absolute;
  top: -60%;
  right: -8%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 194, 124, 0.18) 0%, transparent 70%);
  pointer-events: none;
}

.cta-simple::after {
  content: '';
  position: absolute;
  bottom: -40%;
  left: -6%;
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(0, 194, 124, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.cta-simple-title {
  font-size: 34px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 14px;
  position: relative;
  z-index: 1;
}

.cta-simple-desc {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.65);
  max-width: 500px;
  margin: 0 auto 36px;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

.cta-simple-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

/* ── Responsive ─────────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .mission-pillars {
    grid-template-columns: 1fr;
  }

  .mission-pillar {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
    padding: 20px 24px;
  }

  .mission-pillar:last-child {
    border-bottom: none;
  }

  .story-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .timeline-item {
    grid-template-columns: 64px 24px 1fr;
  }

  .timeline-year {
    font-size: 13px;
    padding-right: 12px;
  }

  .cta-simple {
    padding: 40px 24px;
  }

  .cta-simple-title {
    font-size: 26px;
  }

  .investors-row {
    gap: 10px;
  }

  .investor-badge {
    padding: 12px 22px;
    font-size: 14px;
  }
}
</style>
