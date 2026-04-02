<template>
  <section class="tp-section">
    <div class="container">

      <!-- ── Header row ── -->
      <div class="tp-header reveal">
        <div class="tp-header-left">
          <span class="eyebrow">Customer Reviews</span>
          <h2 class="tp-headline">
            Don't just take<br>
            <strong>our word for it.</strong>
          </h2>
          <p class="tp-sub">
            Businesses across the US trust Drip Capital to keep their working capital moving.
          </p>
        </div>

        <div class="tp-badge">
          <!-- Trustpilot logo mark -->
          <div class="tp-logo-row">
            <svg class="tp-logo-icon" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L14.9 9.1H22.4L16.7 13.8L18.8 21L12 16.6L5.2 21L7.3 13.8L1.6 9.1H9.1L12 2Z" fill="#00B67A"/>
            </svg>
            <span class="tp-logo-text">Trustpilot</span>
          </div>

          <!-- Score -->
          <div class="tp-score-row">
            <span class="tp-score-num">4.7</span>
            <div class="tp-score-right">
              <!-- 5 green stars -->
              <div class="tp-stars">
                <span v-for="i in 5" :key="i" class="tp-star" :class="{ 'tp-star-half': i === 5 }">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path d="M12 2L14.9 9.1H22.4L16.7 13.8L18.8 21L12 16.6L5.2 21L7.3 13.8L1.6 9.1H9.1L12 2Z"
                      :fill="i <= 4 ? '#00B67A' : 'url(#half)'" />
                    <defs>
                      <linearGradient id="half" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="80%" stop-color="#00B67A"/>
                        <stop offset="80%" stop-color="#DDE5DD"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
              <span class="tp-label">Excellent</span>
            </div>
          </div>

          <a
            href="https://www.trustpilot.com/review/dripcapital.com"
            target="_blank"
            rel="noopener noreferrer"
            class="tp-link"
          >
            See all reviews on Trustpilot →
          </a>
        </div>
      </div>
    </div>

    <!-- ── Auto-scrolling cards (full-width, outside container) ── -->
    <div class="tp-carousel-wrap">
      <div class="tp-carousel-track">
        <div v-for="(review, i) in [...reviews, ...reviews]" :key="i" class="tp-card">
          <!-- Stars -->
          <div class="tp-card-stars">
            <svg v-for="s in 5" :key="s" width="14" height="14" viewBox="0 0 24 24">
              <path d="M12 2L14.9 9.1H22.4L16.7 13.8L18.8 21L12 16.6L5.2 21L7.3 13.8L1.6 9.1H9.1L12 2Z" fill="#00B67A"/>
            </svg>
          </div>
          <!-- Title + quote -->
          <p class="tp-card-title">{{ review.title }}</p>
          <p class="tp-card-quote">{{ review.quote }}</p>
          <!-- Person -->
          <div class="tp-card-person">
            <div class="tp-card-avatar" :style="{ background: review.color }">{{ review.initials }}</div>
            <div>
              <div class="tp-card-name">{{ review.name }}</div>
              <div class="tp-card-role">{{ review.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const reviews = [
  {
    title: 'Incredibly easy and smooth process',
    quote: 'Incredibly easy and smooth process — highly recommend. The team was responsive from day one and funding was faster than any bank I\'ve worked with.',
    name: 'Marcus Rodriguez',
    role: 'CEO, SunCoast Seafood Imports',
    initials: 'MR',
    color: '#0B1F3A'
  },
  {
    title: 'A real partner, not just a lender',
    quote: 'Unlike traditional banks, Drip understood our business. Approved in 48 hours, no collateral, and a credit line that actually grows with us.',
    name: 'Jennifer Park',
    role: 'CFO, Pacific Wholesale Distributors',
    initials: 'JP',
    color: '#00693A'
  },
  {
    title: 'Fast, transparent, no surprises',
    quote: 'No hidden fees, fast turnaround. We\'ve been a Drip Capital customer for 3 years and they\'ve been a true partner in our growth.',
    name: 'Amir Singh',
    role: 'Owner, Apex Manufacturing LLC',
    initials: 'AS',
    color: '#1B5FA0'
  },
  {
    title: 'Helped us scale when it mattered most',
    quote: 'We needed to fulfil a large order fast. Drip stepped in within 48 hours. We grew 40% that year — that wouldn\'t have happened without them.',
    name: 'Sarah Chen',
    role: 'Founder, Pacific Apparel Co.',
    initials: 'SC',
    color: '#7C3AED'
  },
  {
    title: 'Best financing experience I\'ve had',
    quote: 'Timing and supply consistency are everything in our industry. Drip let us secure bulk materials when prices were right — without locking up cash.',
    name: 'Maria Gonzalez',
    role: 'CEO, Fresh Coast Seafood',
    initials: 'MG',
    color: '#B45309'
  },
  {
    title: 'Simple, fast and professional',
    quote: 'The application took minutes. Decision came in under 48 hours. Our dedicated account manager has been outstanding — responsive and proactive.',
    name: 'David Kim',
    role: 'VP Finance, Coastal Consumer Goods',
    initials: 'DK',
    color: '#065F46'
  },
]
</script>

<style scoped>
/* ── Section ── */
.tp-section {
  padding: 88px 0 0;
  background: var(--off);
  overflow: hidden;
}

/* ── Header ── */
.tp-header {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: flex-end;
  margin-bottom: 52px;
}

.tp-headline {
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 300;
  color: var(--navy);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 10px 0 14px;
}

.tp-headline strong {
  font-weight: 900;
}

.tp-sub {
  font-size: 15px;
  color: var(--body);
  line-height: 1.65;
  max-width: 420px;
}

/* ── Trustpilot badge ── */
.tp-badge {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px 28px;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 2px 16px rgba(11,31,58,0.06);
}

.tp-logo-row {
  display: flex;
  align-items: center;
  gap: 7px;
}

.tp-logo-text {
  font-size: 14px;
  font-weight: 700;
  color: var(--black);
  letter-spacing: -0.02em;
}

.tp-score-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.tp-score-num {
  font-size: 42px;
  font-weight: 900;
  color: var(--navy);
  letter-spacing: -0.04em;
  line-height: 1;
}

.tp-score-right {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tp-stars {
  display: flex;
  align-items: center;
  gap: 2px;
}

.tp-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--body);
  letter-spacing: 0.02em;
}

.tp-link {
  font-size: 12px;
  font-weight: 600;
  color: var(--green-d);
  text-decoration: none;
  transition: color 0.15s;
}

.tp-link:hover {
  color: var(--navy);
}

/* ── Carousel ── */
.tp-carousel-wrap {
  width: 100%;
  overflow: hidden;
  padding: 8px 0 56px;
  /* Fade edges */
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

.tp-carousel-track {
  display: flex;
  gap: 20px;
  width: max-content;
  animation: tp-scroll 36s linear infinite;
}

.tp-carousel-track:hover {
  animation-play-state: paused;
}

@keyframes tp-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ── Review card ── */
.tp-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px 22px;
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.tp-card:hover {
  box-shadow: 0 8px 28px rgba(11,31,58,0.09);
  transform: translateY(-2px);
}

.tp-card-stars {
  display: flex;
  gap: 2px;
}

.tp-card-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.tp-card-quote {
  font-size: 13px;
  color: var(--body);
  line-height: 1.65;
  flex: 1;
}

.tp-card-person {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
}

.tp-card-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 800;
  color: var(--white);
  flex-shrink: 0;
}

.tp-card-name {
  font-size: 12px;
  font-weight: 700;
  color: var(--navy);
}

.tp-card-role {
  font-size: 11px;
  color: var(--mid);
  margin-top: 1px;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .tp-header {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .tp-badge {
    max-width: 100%;
  }

  .tp-card {
    width: 260px;
  }
}
</style>
