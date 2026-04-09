<template>
  <div class="home">
    <!-- ========== HERO ========== -->
    <section class="hero">
      <div class="hero-glow-left"></div>
      <div class="hero-glow-right"></div>
      <div class="container">
        <div class="hero-inner">
          <div class="hero-left">
            <span class="eyebrow">America's Trusted B2B Working Capital Lender</span>
            <h1 class="hero-h1">
              Capital that helps your<br>
              <em>business grow faster.</em>
            </h1>
            <div class="hero-typewriter-wrap">
              <span class="hero-tw-prefix">✦</span>
              <span class="hero-tw-text">{{ typewriterDisplay }}<span class="hero-tw-cursor" :class="{ blink: cursorBlink }">|</span></span>
            </div>
            <p class="hero-subtitle">
              No collateral, no delays — capital that moves as fast as your ambition. Our customers grow 130–190% in annual revenue after funding.
            </p>
            <div class="hero-cta-row">
              <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Apply Now →</NuxtLink>
              <a href="tel:+16504370150" class="btn btn-secondary btn-lg">Call +1 (650) 437-0150</a>
            </div>
            <p class="hero-no-fee">No application fee · No collateral · Decision in 24 hours</p>
          </div>

          <div class="hero-right">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>


    <!-- ========== USPs + TRUST SIGNALS ========== -->
    <section class="stats-bar section-bg">
      <div class="container">
        <div class="stats-grid">
          <div class="stats-item reveal">
            <div class="stats-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div class="stats-value">24 Hours</div>
            <div class="stats-desc">Credit decision turnaround</div>
          </div>
          <div class="stats-item reveal reveal-delay-1">
            <div class="stats-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            </div>
            <div class="stats-value">Up to $3M</div>
            <div class="stats-desc">Credit facility per business</div>
          </div>
          <div class="stats-item reveal reveal-delay-2">
            <div class="stats-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            </div>
            <div class="stats-value">Pay Any Vendor</div>
            <div class="stats-desc">Globally, in any currency</div>
          </div>
          <div class="stats-item reveal reveal-delay-3">
            <div class="stats-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <div class="stats-value">11,000+</div>
            <div class="stats-desc">Businesses funded</div>
          </div>
        </div>
        <!-- Trust signal banner -->
        <div class="trust-banner reveal">
          <div class="trust-item">
            <span class="trust-number">$9B+</span>
            <span class="trust-label">in trade transactions financed</span>
          </div>
          <div class="trust-divider"></div>
          <div class="trust-item">
            <span class="trust-number">11,000+</span>
            <span class="trust-label">SMBs served across the US</span>
          </div>
          <div class="trust-divider"></div>
          <div class="trust-item">
            <span class="trust-number">130–190%</span>
            <span class="trust-label">avg. annual revenue growth</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== BACKERS ========== -->
    <section class="backers-strip">
      <div class="container">
        <div class="backers-header">
          <span class="backers-label-text">Backed by the best</span>
        </div>
        <div class="backers-logos">
          <div class="backer-logo-item">
            <img src="/logo-barclays.png" alt="Barclays" class="backer-logo" />
          </div>
          <div class="backer-logo-item">
            <img src="/logo-ifc.svg" alt="IFC - International Finance Corporation" class="backer-logo" />
          </div>
          <div class="backer-logo-item">
            <img src="/logo-east-west.png" alt="East West Bank" class="backer-logo" />
          </div>
          <div class="backer-logo-item">
            <img src="/logo-td-bank.svg" alt="TD Bank" class="backer-logo" />
          </div>
          <div class="backer-logo-item">
            <img src="/logo-smbc.svg" alt="SMBC" class="backer-logo" />
          </div>
        </div>
      </div>
    </section>

    <!-- ========== PRODUCTS ========== -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align:center; max-width:600px; margin:0 auto 48px;">
          <span class="eyebrow">Our Products</span>
          <h2 class="section-title">Three ways to unlock<br>the capital you need.</h2>
        </div>

        <div class="products-equal-grid">
          <!-- Vendor Financing -->
          <div class="product-eq-card reveal">
            <div class="product-eq-top">
              <span class="product-eq-num">01</span>
              <div class="product-eq-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
            </div>
            <h3 class="product-eq-title">Vendor Financing</h3>
            <p class="product-eq-tagline">Pay vendors upfront. Repay us later.</p>
            <p class="product-eq-desc">We pay your vendors today so you preserve cash and keep orders moving. You repay on flexible terms, up to 90 days.</p>
            <ul class="product-eq-list">
              <li>No collateral required</li>
              <li>24-hour credit decision</li>
              <li>Up to 90-day repayment terms</li>
              <li>Dedicated account manager</li>
            </ul>
            <NuxtLink to="/products/vendor-financing" class="product-eq-cta">Learn More →</NuxtLink>
          </div>

          <!-- Receivables Financing -->
          <div class="product-eq-card product-eq-card--featured reveal reveal-delay-1">
            <div class="product-eq-top">
              <span class="product-eq-num">02</span>
              <div class="product-eq-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"/>
                  <line x1="2" y1="10" x2="22" y2="10"/>
                </svg>
              </div>
            </div>
            <h3 class="product-eq-title">Receivables Financing</h3>
            <p class="product-eq-tagline">Get paid today. Not in 60 days.</p>
            <p class="product-eq-desc">Stop waiting 60–90 days for customer payments. Convert your outstanding invoices into same-day cash and reduce DSO instantly.</p>
            <ul class="product-eq-list">
              <li>Funded in 24–48 hours</li>
              <li>Improve days sales outstanding</li>
              <li>Non-dilutive financing</li>
              <li>No fixed repayment schedule</li>
            </ul>
            <NuxtLink to="/products/receivable-financing" class="product-eq-cta">Learn More →</NuxtLink>
          </div>

          <!-- Line of Credit -->
          <div class="product-eq-card reveal reveal-delay-2">
            <div class="product-eq-top">
              <span class="product-eq-num">03</span>
              <div class="product-eq-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="23 4 23 10 17 10"/>
                  <polyline points="1 20 1 14 7 14"/>
                  <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
                </svg>
              </div>
            </div>
            <h3 class="product-eq-title">Line of Credit</h3>
            <p class="product-eq-tagline">Flexible capital, on demand.</p>
            <p class="product-eq-desc">A revolving credit facility for any business need. Draw what you need, repay, and draw again. Capital that moves with you.</p>
            <ul class="product-eq-list">
              <li>On-demand access to capital</li>
              <li>Only pay for what you draw</li>
              <li>Grows with your business</li>
              <li>No bank deposit requirement</li>
            </ul>
            <NuxtLink to="/products/line-of-credit" class="product-eq-cta">Learn More →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== HOW IT WORKS ========== -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 600px; margin: 0 auto 48px;">
          <span class="eyebrow">The Process</span>
          <h2 class="section-title">How Drip Capital works</h2>
          <p class="section-subtitle" style="margin: 0 auto;">
            From application to funding in as little as 24 hours.
          </p>
        </div>
        <div class="grid-3">
          <div class="hiw-card reveal">
            <div class="feature-icon">
              <AppIcon name="clipboard" :size="22" color="var(--green)" />
            </div>
            <h3 class="hiw-title">Apply &amp; Connect</h3>
            <p class="hiw-desc">
              Complete a brief online application. We'll review your trade data and business activity to assess your business, not just your credit score.
            </p>
          </div>
          <div class="hiw-card reveal reveal-delay-1">
            <div class="feature-icon">
              <AppIcon name="lightning" :size="22" color="var(--green)" />
            </div>
            <h3 class="hiw-title">Underwriting &amp; Funding</h3>
            <p class="hiw-desc">
              Our proprietary underwriting model gives you a decision in 24 hours. Once approved, funds reach your account or your vendor fast.
            </p>
          </div>
          <div class="hiw-card reveal reveal-delay-2">
            <div class="feature-icon">
              <AppIcon name="partner" :size="22" color="var(--green)" />
            </div>
            <h3 class="hiw-title">A Partner, Not Just a Lender</h3>
            <p class="hiw-desc">
              Your dedicated account manager is with you every step of the way. As your business grows, your credit facility grows with you.
            </p>
          </div>
        </div>
        <div class="hiw-cta reveal">
          <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Contact Our Team →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- ========== USE CASES ========== -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Use Cases</span>
          <h2 class="section-title">Real problems.<br>Real solutions.</h2>
        </div>
        <div class="grid-3">
          <div class="usecase-card reveal">
            <div class="usecase-icon">
              <AppIcon name="refresh" :size="22" color="var(--green)" />
            </div>
            <h3 class="usecase-title">Bridge the Vendor-Customer Gap</h3>
            <p class="usecase-desc">
              You buy from vendors today but don't get paid by customers for 60–90 days. Vendor Financing bridges that gap so you never have to pause orders.
            </p>
            <NuxtLink to="/products/vendor-financing" class="usecase-link">Vendor Financing →</NuxtLink>
          </div>
          <div class="usecase-card reveal reveal-delay-1">
            <div class="usecase-icon">
              <AppIcon name="trending" :size="22" color="var(--green)" />
            </div>
            <h3 class="usecase-title">Fulfill a Large Order Without Draining Reserves</h3>
            <p class="usecase-desc">
              Land a big contract but don't have the inventory capital? Access the working capital you need to fulfill the order and grow.
            </p>
            <NuxtLink to="/products/receivable-financing" class="usecase-link">Receivables Financing →</NuxtLink>
          </div>
          <div class="usecase-card reveal reveal-delay-2">
            <div class="usecase-icon">
              <AppIcon name="check-circle" :size="22" color="var(--green)" />
            </div>
            <h3 class="usecase-title">Pay Vendors on Time, Every Time</h3>
            <p class="usecase-desc">
              Maintain your vendor relationships and negotiate better terms. Drip ensures you always pay on time, building trust and loyalty.
            </p>
            <NuxtLink to="/products/line-of-credit" class="usecase-link">Line of Credit →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== CASE STUDIES ========== -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Customer Stories</span>
          <h2 class="section-title">Businesses that scaled<br>with Drip Capital.</h2>
        </div>
        <div class="grid-2">
          <div class="case-card reveal">
            <div class="case-card-img">
              <img
                src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&q=80"
                alt="Seafood distribution industry"
                loading="lazy"
              />
              <div class="case-tag">Seafood Distribution</div>
            </div>
            <div class="case-card-body">
              <h3 class="case-title">Pacific Seafood Co. scaled import volume by 80%</h3>
              <p class="case-desc">
                A leading seafood importer used Drip Capital's Vendor Financing to extend vendor payment terms, freeing up $3M+ in working capital and enabling rapid expansion.
              </p>
              <div class="case-metrics">
                <div class="case-metric">
                  <span class="case-metric-value">$3M+</span>
                  <span class="case-metric-label">Capital Unlocked</span>
                </div>
                <div class="case-metric">
                  <span class="case-metric-value">80%+</span>
                  <span class="case-metric-label">Volume Growth</span>
                </div>
              </div>
              <NuxtLink to="/resources/use-cases" class="btn btn-outline btn-sm mt-24">Read Case Study →</NuxtLink>
            </div>
          </div>

          <div class="case-card reveal reveal-delay-1">
            <div class="case-card-img">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                alt="Consumer goods retail industry"
                loading="lazy"
              />
              <div class="case-tag">Consumer Goods</div>
            </div>
            <div class="case-card-body">
              <h3 class="case-title">Apparel brand doubled revenue in 18 months</h3>
              <p class="case-desc">
                A mid-sized apparel brand leveraged Drip Capital's Receivables Financing to stop waiting on net-60 invoices, accelerating cash flow and doubling production capacity.
              </p>
              <div class="case-metrics">
                <div class="case-metric">
                  <span class="case-metric-value">$1M+</span>
                  <span class="case-metric-label">Invoices Accelerated</span>
                </div>
                <div class="case-metric">
                  <span class="case-metric-value">2×</span>
                  <span class="case-metric-label">Revenue Growth</span>
                </div>
              </div>
              <NuxtLink to="/resources/use-cases" class="btn btn-outline btn-sm mt-24">Read Case Study →</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== FUNDING CALCULATOR ========== -->
    <FundingCalculator />

    <!-- ========== TESTIMONIALS (Trustpilot) ========== -->
    <TrustpilotSection />

    <!-- ========== FAQ ========== -->
    <section class="section section-bg">
      <div class="container">
        <div class="faq-layout">
          <div class="faq-left reveal">
            <span class="eyebrow">FAQ</span>
            <h2 class="section-title">Common questions about working capital financing.</h2>
            <p class="section-subtitle">Can't find what you're looking for?</p>
            <NuxtLink to="/company/contact" class="btn btn-primary mt-24">Talk to Our Team →</NuxtLink>
          </div>

          <div class="faq-right">
            <div
              v-for="(item, index) in faqItems"
              :key="index"
              class="accordion-item reveal"
              :class="`reveal-delay-${index}`"
            >
              <button class="accordion-trigger" @click="toggleFaq(index)">
                {{ item.question }}
                <span class="accordion-icon" :class="{ open: openFaq === index }">+</span>
              </button>
              <div class="accordion-body" :class="{ open: openFaq === index }">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== LATEST NEWS ========== -->
    <LatestNews />

    <!-- ========== CTA BANNER ========== -->
    <section class="section">
      <div class="container">
        <div class="cta-banner reveal">
          <div class="cta-banner-content">
            <span class="eyebrow" style="color: var(--green);">Get Started Today</span>
            <h2 class="cta-title">Ready to power your business?</h2>
            <p class="cta-desc">
              Join 11,000+ businesses that trust Drip Capital for their working capital needs. Fast approval, no collateral, flexible terms.
            </p>
          </div>
          <div class="cta-actions">
            <NuxtLink to="/company/contact" class="btn btn-primary btn-lg">Contact Us →</NuxtLink>
            <a href="tel:+16504370150" class="btn btn-outline-white btn-lg">
              Call +1 (650) 437-0150
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Drip Capital: Working Capital for Growing Businesses' })

const heroEmail = ref('')
const openFaq = ref<number | null>(null)
const particleCanvas = ref<HTMLCanvasElement | null>(null)


// Typewriter USP cycling
const uspPhrases = [
  'No collateral. No personal guarantees.',
  'Approved in 24 hours. Funded in days.',
  'When your bank says no, we say yes.',
  'Funding from $100K to $10M.',
  '11,000+ businesses funded and growing.'
]
const typewriterDisplay = ref('')
const cursorBlink = ref(false)
const isTyping = ref(false)

let twTimeout: ReturnType<typeof setTimeout> | null = null

function typePhrase(phraseIndex: number) {
  const phrase = uspPhrases[phraseIndex]
  let charIndex = 0
  isTyping.value = true
  cursorBlink.value = false
  typewriterDisplay.value = ''

  function typeChar() {
    if (charIndex < phrase.length) {
      typewriterDisplay.value += phrase[charIndex]
      charIndex++
      twTimeout = setTimeout(typeChar, 38)
    } else {
      isTyping.value = false
      cursorBlink.value = true
      // Pause, then delete
      twTimeout = setTimeout(() => deletePhrase(phraseIndex), 2400)
    }
  }
  typeChar()
}

function deletePhrase(phraseIndex: number) {
  cursorBlink.value = false
  isTyping.value = true
  function deleteChar() {
    if (typewriterDisplay.value.length > 0) {
      typewriterDisplay.value = typewriterDisplay.value.slice(0, -1)
      twTimeout = setTimeout(deleteChar, 22)
    } else {
      isTyping.value = false
      const nextIndex = (phraseIndex + 1) % uspPhrases.length
      twTimeout = setTimeout(() => typePhrase(nextIndex), 400)
    }
  }
  deleteChar()
}

const faqItems = [
  {
    question: 'What types of businesses qualify for Drip Capital?',
    answer: 'We specialize in working capital solutions for growing businesses, including importers, exporters, manufacturers, wholesalers, and distributors. We look at your business performance and trade history, not just your credit score.'
  },
  {
    question: 'How long does the approval process take?',
    answer: 'Most businesses receive a credit decision within 24 hours of completing the application.'
  },
  {
    question: 'Do I need to provide collateral?',
    answer: 'No. Drip Capital does not require hard asset collateral like real estate or equipment. Our underwriting is based on your business\'s trade performance, receivables quality, and financial health.'
  },
  {
    question: 'What is the difference between Vendor Financing, Receivables Financing, and Line of Credit?',
    answer: 'Vendor Financing: we pay your vendors and you repay us on extended terms (up to 90 days). Receivables Financing lets us accelerate payment on your outstanding invoices. Line of Credit is a revolving facility you can draw from at any time for any business purpose.'
  },
  {
    question: 'How much can I borrow?',
    answer: 'Credit facilities typically range from $100,000 to $10,000,000+, depending on your business size, revenue, and trade activity. Your facility grows as your business grows. We regularly review and increase limits for active customers.'
  }
]

function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index
}

// Particle animation
function initParticles(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const resizeCanvas = () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }

  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  const particleCount = 60
  type Particle = {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
  }

  const particles: Particle[] = Array.from({ length: particleCount }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    size: Math.random() * 2.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.1
  }))

  let animId: number

  function draw() {
    ctx!.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0) p.x = canvas.width
      if (p.x > canvas.width) p.x = 0
      if (p.y < 0) p.y = canvas.height
      if (p.y > canvas.height) p.y = 0

      ctx!.beginPath()
      ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx!.fillStyle = `rgba(0, 194, 124, ${p.opacity})`
      ctx!.fill()
    })

    animId = requestAnimationFrame(draw)
  }

  draw()

  onUnmounted(() => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', resizeCanvas)
  })
}

onMounted(() => {
  if (particleCanvas.value) {
    initParticles(particleCanvas.value)
  }
  twTimeout = setTimeout(() => typePhrase(0), 800)
})

onUnmounted(() => {
  if (twTimeout) clearTimeout(twTimeout)
})
</script>

<style scoped>
/* ===== HERO ===== */
.hero {
  background: var(--white);
  border-bottom: 1px solid var(--border);
  min-height: calc(100vh - var(--topbar-height) - var(--nav-height));
  display: flex;
  align-items: center;
  position: relative;
  overflow: clip;
  padding: 80px 0 72px;
}

.hero-right {
  overflow: visible;
}

.hero-glow-left {
  position: absolute;
  top: -10%;
  left: -20%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(0,194,124,0.07) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
}

.hero-glow-right {
  position: absolute;
  top: -20%;
  right: -15%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(11,31,58,0.04) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
}

.hero-growth-callout {
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(0,194,124,0.1);
  border: 1px solid rgba(0,194,124,0.28);
  border-radius: 14px;
  padding: 14px 20px;
  margin-bottom: 28px;
}

.hero-growth-number {
  font-size: 32px;
  font-weight: 900;
  color: #00C27C;
  letter-spacing: -0.04em;
  line-height: 1;
  white-space: nowrap;
}

.hero-growth-desc {
  font-size: 12px;
  color: var(--mid);
  line-height: 1.5;
  font-weight: 500;
}

.hero > .container {
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.hero-h1 {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 300;
  color: var(--navy);
  line-height: 1.12;
  letter-spacing: -0.03em;
  margin: 16px 0 20px;
}

.hero-h1 em {
  font-style: italic;
  color: var(--green);
  font-weight: 400;
}

.hero-subtitle {
  font-size: 17px;
  color: var(--body);
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 32px;
}

/* Hero stat mini boxes (left side, replaces pills) */
/* CTA row replaces email form */
.hero-cta-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 32px;
}

.hero-no-fee {
  font-size: 12px;
  color: var(--mid);
  margin-top: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
}


/* ===== STATS BAR ===== */
.stats-bar {
  padding: 40px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.stats-item {
  background: var(--off);
  padding: 28px 24px;
  transition: background 0.2s;
}

.stats-item:hover {
  background: var(--white);
}

.stats-icon {
  margin-bottom: 12px;
}

.stats-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mid);
  margin-bottom: 8px;
}

.stats-value {
  font-size: 26px;
  font-weight: 800;
  color: var(--navy);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 6px;
}

.stats-desc {
  font-size: 13px;
  color: var(--mid);
  line-height: 1.4;
}

/* Trust signal banner */
.trust-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 32px;
  padding: 24px 32px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.trust-item {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.trust-number {
  font-size: 24px;
  font-weight: 800;
  color: var(--green);
  letter-spacing: -0.02em;
}

.trust-label {
  font-size: 13px;
  color: var(--mid);
  font-weight: 500;
}

.trust-divider {
  width: 1px;
  height: 32px;
  background: var(--border);
}

/* ===== BACKERS ===== */
.backers-strip {
  padding: 40px 0;
  border-bottom: 1px solid var(--border);
}

.backers-header {
  text-align: center;
  margin-bottom: 32px;
}

.backers-label-text {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--mid);
}

.backers-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
}

.backer-logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.backer-logo {
  height: 32px;
  width: auto;
  max-width: 160px;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.6);
  transition: filter 0.2s;
}

.backer-logo:hover {
  filter: grayscale(0%) opacity(1);
}

@media (max-width: 640px) {
  .backers-logos {
    gap: 28px;
  }
  .backer-logo {
    height: 22px;
  }
}

/* ===== PRODUCTS ===== */
.section-header {
  margin-bottom: 48px;
}

.product-featured {
  background: var(--navy);
  border-radius: 16px;
  padding: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 24px;
}

.product-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0,194,124,0.2);
  color: var(--green);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 16px;
}

.product-featured-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 8px;
}

.product-featured-tagline {
  font-size: 18px;
  color: var(--green);
  font-style: italic;
  margin-bottom: 16px;
}

.product-featured-desc {
  font-size: 15px;
  color: rgba(255,255,255,0.68);
  line-height: 1.7;
  margin-bottom: 24px;
}

.product-featured-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.product-feature-tag {
  font-size: 12px;
  font-weight: 600;
  color: var(--green);
  background: rgba(0,194,124,0.12);
  border: 1px solid rgba(0,194,124,0.24);
  padding: 4px 12px;
  border-radius: 100px;
}

.product-steps {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.product-step {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 24px;
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
  margin-bottom: 4px;
}

.product-step-connector {
  width: 2px;
  height: 12px;
  background: rgba(0,194,124,0.3);
  margin-left: 19px;
}

.product-step-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 4px;
}

.product-step-desc {
  font-size: 13px;
  color: rgba(255,255,255,0.52);
}

.products-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.product-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 36px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.product-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-3px);
}

.product-card-header {
  margin-bottom: 16px;
}

.product-badge-small {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--off2);
  color: var(--mid);
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 12px;
}

.product-card-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 4px;
}

.product-card-sub {
  font-size: 13px;
  color: var(--mid);
  font-weight: 500;
}

.product-card-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
  margin-bottom: 20px;
}

.product-card-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-card-features li {
  font-size: 14px;
  color: var(--body);
  padding-left: 20px;
  position: relative;
}

.product-card-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--green);
  font-weight: 700;
}

/* ===== HOW IT WORKS ===== */
.hiw-card {
  padding: 32px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  transition: box-shadow 0.2s, transform 0.2s;
}

.hiw-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-3px);
}

.hiw-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 12px;
}

.hiw-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
}

.hiw-cta {
  text-align: center;
  margin-top: 48px;
}

/* ===== USE CASES ===== */
.usecase-card {
  padding: 32px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: box-shadow 0.2s, transform 0.2s;
}

.usecase-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-3px);
}

.usecase-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.usecase-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 12px;
  line-height: 1.3;
}

.usecase-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
  margin-bottom: 20px;
}

.usecase-link {
  font-size: 13px;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
  transition: color 0.2s;
}

.usecase-link:hover {
  color: var(--green-d);
}

/* ===== CASE STUDIES ===== */
.case-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
}

.case-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-3px);
}

.case-card-img {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.case-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.case-card:hover .case-card-img img {
  transform: scale(1.04);
}

.case-tag {
  position: absolute;
  top: 16px;
  left: 16px;
  background: var(--green);
  color: var(--white);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 4px;
}

.case-card-body {
  padding: 28px;
}

.case-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 12px;
  line-height: 1.3;
}

.case-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
  margin-bottom: 20px;
}

.case-metrics {
  display: flex;
  gap: 24px;
}

.case-metric-value {
  display: block;
  font-size: 24px;
  font-weight: 800;
  color: var(--green);
  letter-spacing: -0.03em;
}

.case-metric-label {
  font-size: 12px;
  color: var(--mid);
}

/* ===== TESTIMONIALS ===== */
.testimonial-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
}

.testimonial-quote {
  font-size: 14px;
  color: var(--body);
  line-height: 1.8;
  margin: 12px 0 20px;
  font-style: italic;
}

.testimonial-person {
  display: flex;
  align-items: center;
  gap: 12px;
}

.testimonial-avatar {
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

.testimonial-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--navy);
}

.testimonial-role {
  font-size: 12px;
  color: var(--mid);
}

/* ===== COMPARISON ===== */
.comparison-wrapper {
  overflow: visible;
}

.comparison-scroll {
  overflow-x: auto;
  border-radius: var(--radius);
}

/* ===== FAQ ===== */
.faq-layout {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 64px;
  align-items: start;
}

/* ===== CTA BANNER ===== */
.cta-banner {
  background: var(--navy);
  border-radius: 20px;
  padding: 64px 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  position: relative;
  overflow: hidden;
}

.cta-banner::before {
  content: '';
  position: absolute;
  top: -60%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0,194,124,0.15) 0%, transparent 70%);
  pointer-events: none;
}

.cta-title {
  font-size: 36px;
  font-weight: 700;
  color: var(--white);
  margin: 8px 0 12px;
  letter-spacing: -0.02em;
}

.cta-desc {
  font-size: 16px;
  color: rgba(255,255,255,0.64);
  max-width: 480px;
  line-height: 1.7;
}

.cta-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  flex-direction: column;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-right {
    max-width: 520px;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 56px 0 48px;
  }

  .hero-h1 {
    font-size: 34px;
  }

  .hero-industries-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-cta-row {
    flex-direction: column;
    gap: 10px;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1px;
  }

  .product-featured {
    grid-template-columns: 1fr;
    padding: 32px 24px;
    gap: 32px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .faq-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .cta-banner {
    flex-direction: column;
    padding: 40px 28px;
    gap: 32px;
  }

  .cta-title {
    font-size: 26px;
  }

  .cta-actions {
    width: 100%;
  }

  .cta-actions .btn {
    justify-content: center;
  }
}

.hero-typewriter-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0 20px;
  min-height: 28px;
}

.hero-tw-prefix {
  color: var(--green);
  font-size: 16px;
  flex-shrink: 0;
}

.hero-tw-text {
  font-size: 16px;
  font-weight: 500;
  color: var(--body);
  letter-spacing: -0.01em;
}

.hero-tw-cursor {
  display: inline-block;
  color: var(--green);
  font-weight: 300;
  margin-left: 1px;
  opacity: 1;
}

.hero-tw-cursor.blink {
  animation: cursor-blink 0.8s step-end infinite;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.pill-outline {
  border: 1px solid rgba(0,194,124,0.4);
  color: rgba(255,255,255,0.7);
  background: transparent;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
}

/* Equal Products Grid */
.products-equal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.product-eq-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
}

.product-eq-card:hover {
  box-shadow: 0 12px 40px rgba(11,31,58,0.1);
  transform: translateY(-3px);
  border-color: rgba(0,194,124,0.3);
}

.product-eq-card--featured {
  border-color: var(--green);
  box-shadow: 0 4px 24px rgba(0,194,124,0.12);
}

.product-eq-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.product-eq-num {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--mid);
}

.product-eq-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(0,194,124,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-eq-title {
  font-size: 20px;
  font-weight: 800;
  color: var(--navy);
  letter-spacing: -0.03em;
  margin-bottom: 6px;
}

.product-eq-tagline {
  font-size: 13px;
  font-weight: 600;
  color: var(--green-d);
  margin-bottom: 12px;
  font-style: italic;
}

.product-eq-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.65;
  margin-bottom: 20px;
}

.product-eq-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.product-eq-list li {
  font-size: 13px;
  color: var(--body);
  padding-left: 18px;
  position: relative;
}

.product-eq-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 7px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
}

.product-eq-cta {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--navy);
  text-decoration: none;
  transition: color 0.2s, gap 0.2s;
  gap: 4px;
  margin-top: auto;
}

.product-eq-cta:hover {
  color: var(--green-d);
}

@media (max-width: 900px) {
  .products-equal-grid {
    grid-template-columns: 1fr;
  }
}
</style>
