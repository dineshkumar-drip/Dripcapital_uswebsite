<template>
  <div class="home">
    <!-- ========== HERO ========== -->
    <section class="hero">
      <canvas ref="particleCanvas" class="hero-canvas"></canvas>
      <div class="hero-bg-grid"></div>
      <div class="hero-glow"></div>
      <div class="container">
        <div class="hero-inner">
          <div class="hero-left">
            <span class="eyebrow">Working Capital for Growing Businesses</span>
            <h1 class="hero-h1">
              Fast, flexible capital<br>
              to <em>grow your business</em>
            </h1>
            <p class="hero-subtitle">
              Drip Capital helps businesses doing $5M–$500M in annual revenue access the working capital they need — without traditional banking hurdles.
            </p>
            <div class="hero-form">
              <div class="input-row">
                <input type="email" placeholder="Enter your business email" v-model="heroEmail" />
                <NuxtLink to="/company/contact" class="btn btn-primary">Let's Talk</NuxtLink>
              </div>
            </div>
            <div class="hero-pills">
              <span class="pill pill-green">Float</span>
              <span class="hero-pill-sep">·</span>
              <span class="pill pill-green">Advance</span>
              <span class="hero-pill-sep">·</span>
              <span class="pill pill-green">Flex</span>
            </div>
          </div>

          <div class="hero-right">
            <div class="hero-card">
              <div class="hero-card-header">
                <span class="hero-card-eyebrow">Drip Capital by the Numbers</span>
              </div>
              <div class="hero-stats-grid">
                <div class="hero-stat">
                  <div class="hero-stat-value">
                    $<AnimatedCounter :target="9" suffix="B+" />
                  </div>
                  <div class="hero-stat-label">Total Financed</div>
                </div>
                <div class="hero-stat">
                  <div class="hero-stat-value">
                    <AnimatedCounter :target="10000" suffix="+" />
                  </div>
                  <div class="hero-stat-label">Businesses Funded</div>
                </div>
                <div class="hero-stat">
                  <div class="hero-stat-value">
                    <AnimatedCounter :target="10" suffix="+" />
                  </div>
                  <div class="hero-stat-label">Years of Experience</div>
                </div>
                <div class="hero-stat">
                  <div class="hero-stat-value">
                    <AnimatedCounter :target="30" suffix="+" />
                  </div>
                  <div class="hero-stat-label">Countries Served</div>
                </div>
              </div>
              <div class="hero-card-backers">
                <span class="hero-card-backer-label">Backed by</span>
                <div class="hero-backer-list">
                  <span>Sequoia</span>
                  <span>Accel</span>
                  <span>Y Combinator</span>
                  <span>IFC</span>
                  <span>Barclays</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== STATS BAR ========== -->
    <section class="stats-bar section-bg">
      <div class="container">
        <div class="stats-grid">
          <div class="stats-item reveal">
            <div class="stats-label">Credit Decision</div>
            <div class="stats-value">48 Hours</div>
            <div class="stats-desc">From application to approval</div>
          </div>
          <div class="stats-item reveal reveal-delay-1">
            <div class="stats-label">Float — Supplier Financing</div>
            <div class="stats-value">Up to 120 Days</div>
            <div class="stats-desc">Extended repayment — preserve cash</div>
          </div>
          <div class="stats-item reveal reveal-delay-2">
            <div class="stats-label">Advance — Receivables</div>
            <div class="stats-value">24–48 Hours</div>
            <div class="stats-desc">Get paid on invoices fast</div>
          </div>
          <div class="stats-item reveal reveal-delay-3">
            <div class="stats-label">Flex — Line of Credit</div>
            <div class="stats-value">On Demand</div>
            <div class="stats-desc">Draw what you need, when you need it</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== BACKERS MARQUEE ========== -->
    <section class="backers-strip">
      <div class="container">
        <div class="backers-header">
          <span class="backers-label-text">Backed by world-class investors</span>
        </div>
      </div>
      <div class="marquee-wrapper">
        <div class="marquee-track">
          <span class="marquee-item"><span class="marquee-dot"></span>Accel</span>
          <span class="marquee-item"><span class="marquee-dot"></span>Barclays</span>
          <span class="marquee-item"><span class="marquee-dot"></span>East West Bank</span>
          <span class="marquee-item"><span class="marquee-dot"></span>IFC · World Bank</span>
          <span class="marquee-item"><span class="marquee-dot"></span>Sequoia Capital</span>
          <span class="marquee-item"><span class="marquee-dot"></span>SMBC</span>
          <span class="marquee-item"><span class="marquee-dot"></span>TD Bank</span>
          <span class="marquee-item"><span class="marquee-dot"></span>Wing VC</span>
          <span class="marquee-item"><span class="marquee-dot"></span>Y Combinator</span>
          <!-- Duplicate for infinite scroll -->
          <span class="marquee-item"><span class="marquee-dot"></span>Accel</span>
          <span class="marquee-item"><span class="marquee-dot"></span>Barclays</span>
          <span class="marquee-item"><span class="marquee-dot"></span>East West Bank</span>
          <span class="marquee-item"><span class="marquee-dot"></span>IFC · World Bank</span>
          <span class="marquee-item"><span class="marquee-dot"></span>Sequoia Capital</span>
          <span class="marquee-item"><span class="marquee-dot"></span>SMBC</span>
          <span class="marquee-item"><span class="marquee-dot"></span>TD Bank</span>
          <span class="marquee-item"><span class="marquee-dot"></span>Wing VC</span>
          <span class="marquee-item"><span class="marquee-dot"></span>Y Combinator</span>
        </div>
      </div>
    </section>

    <!-- ========== PRODUCTS ========== -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Our Products</span>
          <h2 class="section-title">Three ways to unlock<br>the capital you need.</h2>
        </div>

        <!-- Featured Product: Float -->
        <div class="product-featured reveal">
          <div class="product-featured-left">
            <span class="product-badge">01</span>
            <h3 class="product-featured-title">Float — Supplier Financing</h3>
            <p class="product-featured-tagline">Pay suppliers upfront. Repay us later.</p>
            <p class="product-featured-desc">
              We pay your suppliers today so you can preserve cash and keep orders moving. You repay on flexible terms — up to 120 days.
            </p>
            <div class="product-featured-features">
              <div class="product-feature-tag">No collateral required</div>
              <div class="product-feature-tag">48-hour approval</div>
              <div class="product-feature-tag">Up to 120-day terms</div>
            </div>
            <NuxtLink to="/products/vendor-financing" class="btn btn-outline-white mt-32">
              Learn More →
            </NuxtLink>
          </div>
          <div class="product-featured-right">
            <div class="product-steps">
              <div class="product-step">
                <div class="step-number">1</div>
                <div>
                  <div class="product-step-title">Apply & Get Approved</div>
                  <div class="product-step-desc">Simple application, decision in 48 hours</div>
                </div>
              </div>
              <div class="product-step-connector"></div>
              <div class="product-step">
                <div class="step-number">2</div>
                <div>
                  <div class="product-step-title">We Pay Your Supplier</div>
                  <div class="product-step-desc">Drip Capital pays your supplier directly</div>
                </div>
              </div>
              <div class="product-step-connector"></div>
              <div class="product-step">
                <div class="step-number">3</div>
                <div>
                  <div class="product-step-title">You Repay Us</div>
                  <div class="product-step-desc">Repay on 30–120 day terms that work for you</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Grid: Advance + Flex -->
        <div class="products-grid reveal">
          <div class="product-card">
            <div class="product-card-header">
              <span class="product-badge-small">02</span>
              <h3 class="product-card-title">Advance</h3>
              <span class="product-card-sub">Receivables Financing</span>
            </div>
            <p class="product-card-desc">
              Stop waiting 60–90 days for customer payments. Convert your outstanding invoices into same-day cash.
            </p>
            <ul class="product-card-features">
              <li>Funded in 24–48 hours</li>
              <li>Improve days sales outstanding</li>
              <li>Non-dilutive financing</li>
              <li>No fixed repayment schedule</li>
            </ul>
            <NuxtLink to="/products/receivable-financing" class="btn btn-secondary mt-24">
              Learn About Advance →
            </NuxtLink>
          </div>

          <div class="product-card">
            <div class="product-card-header">
              <span class="product-badge-small">03</span>
              <h3 class="product-card-title">Flex</h3>
              <span class="product-card-sub">Line of Credit</span>
            </div>
            <p class="product-card-desc">
              A revolving credit facility for any business need. Draw what you need, repay, and draw again — with no fixed schedule.
            </p>
            <ul class="product-card-features">
              <li>On-demand access to capital</li>
              <li>Only pay for what you draw</li>
              <li>Grows with your business</li>
              <li>Dedicated account manager</li>
            </ul>
            <NuxtLink to="/products/line-of-credit" class="btn btn-secondary mt-24">
              Learn About Flex →
            </NuxtLink>
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
            From application to funding in as little as 48 hours.
          </p>
        </div>
        <div class="grid-3">
          <div class="hiw-card reveal">
            <div class="feature-icon">📋</div>
            <h3 class="hiw-title">Apply &amp; Connect</h3>
            <p class="hiw-desc">
              Complete a brief online application. We'll connect to your accounting or ERP system to assess your business — not just your credit score.
            </p>
          </div>
          <div class="hiw-card reveal reveal-delay-1">
            <div class="feature-icon">⚡</div>
            <h3 class="hiw-title">Underwriting &amp; Funding</h3>
            <p class="hiw-desc">
              Our proprietary underwriting model gives you a decision in 48 hours. Once approved, funds reach your account or your supplier fast.
            </p>
          </div>
          <div class="hiw-card reveal reveal-delay-2">
            <div class="feature-icon">🤝</div>
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
            <div class="usecase-icon">🔄</div>
            <h3 class="usecase-title">Bridge the Supplier-Customer Gap</h3>
            <p class="usecase-desc">
              You buy from suppliers today but don't get paid by customers for 60–90 days. Float bridges that gap so you never have to pause orders.
            </p>
            <NuxtLink to="/products/vendor-financing" class="usecase-link">Float — Vendor Financing →</NuxtLink>
          </div>
          <div class="usecase-card reveal reveal-delay-1">
            <div class="usecase-icon">📈</div>
            <h3 class="usecase-title">Fulfill a Large Order Without Draining Reserves</h3>
            <p class="usecase-desc">
              Land a big contract but don't have the inventory capital? Access the working capital you need to fulfill the order and grow.
            </p>
            <NuxtLink to="/products/receivable-financing" class="usecase-link">Advance — Receivables →</NuxtLink>
          </div>
          <div class="usecase-card reveal reveal-delay-2">
            <div class="usecase-icon">✅</div>
            <h3 class="usecase-title">Pay Suppliers on Time — Every Time</h3>
            <p class="usecase-desc">
              Maintain your supplier relationships and negotiate better terms. Drip ensures you always pay on time, building trust and loyalty.
            </p>
            <NuxtLink to="/products/line-of-credit" class="usecase-link">Flex — Line of Credit →</NuxtLink>
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
                src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80"
                alt="Seafood distributor case study"
                loading="lazy"
              />
              <div class="case-tag">Seafood Distribution</div>
            </div>
            <div class="case-card-body">
              <h3 class="case-title">Pacific Seafood Co. scaled import volume by 80%</h3>
              <p class="case-desc">
                A leading seafood importer used Drip Capital's Float product to extend supplier payment terms, freeing up $3M+ in working capital and enabling rapid expansion.
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
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Apparel company case study"
                loading="lazy"
              />
              <div class="case-tag">Consumer Goods</div>
            </div>
            <div class="case-card-body">
              <h3 class="case-title">Apparel brand doubled revenue in 18 months</h3>
              <p class="case-desc">
                A mid-sized apparel brand leveraged Drip Capital's Advance product to stop waiting on net-60 invoices, accelerating cash flow and doubling production capacity.
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

    <!-- ========== TESTIMONIALS ========== -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">What Our Customers Say</span>
          <h2 class="section-title">Real results from real businesses.</h2>
        </div>
        <div class="grid-3">
          <div class="testimonial-card reveal">
            <div class="stars">★★★★★</div>
            <p class="testimonial-quote">
              "Drip Capital gave us the flexibility to take on larger orders without worrying about cash flow. We grew 40% last year — that wouldn't have been possible without their support."
            </p>
            <div class="testimonial-person">
              <div class="testimonial-avatar">MR</div>
              <div>
                <div class="testimonial-name">Marcus Rodriguez</div>
                <div class="testimonial-role">CEO, SunCoast Seafood Imports</div>
              </div>
            </div>
          </div>

          <div class="testimonial-card reveal reveal-delay-1">
            <div class="stars">★★★★★</div>
            <p class="testimonial-quote">
              "Unlike traditional banks, Drip understood our business. They approved us in 48 hours and gave us a line of credit that actually scales with our growth."
            </p>
            <div class="testimonial-person">
              <div class="testimonial-avatar">JP</div>
              <div>
                <div class="testimonial-name">Jennifer Park</div>
                <div class="testimonial-role">CFO, Pacific Wholesale Distributors</div>
              </div>
            </div>
          </div>

          <div class="testimonial-card reveal reveal-delay-2">
            <div class="stars">★★★★★</div>
            <p class="testimonial-quote">
              "The application was easy, the team was responsive, and the funding was fast. We've been a Drip Capital customer for 3 years and they've been a true partner in our growth."
            </p>
            <div class="testimonial-person">
              <div class="testimonial-avatar">AS</div>
              <div>
                <div class="testimonial-name">Amir Singh</div>
                <div class="testimonial-role">Owner, Apex Manufacturing LLC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== COMPARISON TABLE ========== -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 600px; margin: 0 auto 48px;">
          <span class="eyebrow">Why Drip Capital</span>
          <h2 class="section-title">How we compare to the alternatives.</h2>
          <p class="section-subtitle" style="margin: 0 auto;">Built specifically for growing businesses — not one-size-fits-all lending.</p>
        </div>
        <div class="comparison-wrapper reveal">
          <div class="comparison-scroll">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th style="width: 30%;">Feature</th>
                  <th class="col-drip">Drip Capital</th>
                  <th>Traditional Bank</th>
                  <th>MCA / Alt Lender</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Credit Decision</td>
                  <td class="col-drip"><span class="check-yes">48 Hours</span></td>
                  <td><span class="check-no">4–8 Weeks</span></td>
                  <td><span class="check-mid">1–3 Days</span></td>
                </tr>
                <tr>
                  <td>Collateral Required</td>
                  <td class="col-drip"><span class="check-yes">None</span></td>
                  <td><span class="check-no">Yes — Assets</span></td>
                  <td><span class="check-mid">Sometimes</span></td>
                </tr>
                <tr>
                  <td>Underwriting Basis</td>
                  <td class="col-drip"><span class="check-yes">Business performance</span></td>
                  <td><span class="check-no">Credit score + assets</span></td>
                  <td><span class="check-mid">Revenue-based</span></td>
                </tr>
                <tr>
                  <td>Time to Close</td>
                  <td class="col-drip"><span class="check-yes">48–72 hours</span></td>
                  <td><span class="check-no">30–60 days</span></td>
                  <td><span class="check-mid">2–5 days</span></td>
                </tr>
                <tr>
                  <td>Restrictive Covenants</td>
                  <td class="col-drip"><span class="check-yes">None</span></td>
                  <td><span class="check-no">Many</span></td>
                  <td><span class="check-mid">Few</span></td>
                </tr>
                <tr>
                  <td>Repayment Terms</td>
                  <td class="col-drip"><span class="check-yes">Flexible</span></td>
                  <td><span class="check-no">Fixed</span></td>
                  <td><span class="check-no">Daily/weekly</span></td>
                </tr>
                <tr>
                  <td>Facility Access</td>
                  <td class="col-drip"><span class="check-yes">Grows with you</span></td>
                  <td><span class="check-mid">Annual review</span></td>
                  <td><span class="check-no">Transaction-based</span></td>
                </tr>
                <tr>
                  <td>Bank Deposit Required</td>
                  <td class="col-drip"><span class="check-yes">No</span></td>
                  <td><span class="check-no">Yes</span></td>
                  <td><span class="check-yes">No</span></td>
                </tr>
                <tr>
                  <td>Dedicated Account Manager</td>
                  <td class="col-drip"><span class="check-yes">Yes</span></td>
                  <td><span class="check-mid">Sometimes</span></td>
                  <td><span class="check-no">Rarely</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

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

    <!-- ========== CTA BANNER ========== -->
    <section class="section">
      <div class="container">
        <div class="cta-banner reveal">
          <div class="cta-banner-content">
            <span class="eyebrow" style="color: var(--green);">Get Started Today</span>
            <h2 class="cta-title">Ready to power your business?</h2>
            <p class="cta-desc">
              Join 10,000+ businesses that trust Drip Capital for their working capital needs. Fast approval, no collateral, flexible terms.
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
useHead({ title: 'Drip Capital — Working Capital for Growing Businesses' })

const heroEmail = ref('')
const openFaq = ref<number | null>(null)
const particleCanvas = ref<HTMLCanvasElement | null>(null)

const faqItems = [
  {
    question: 'What types of businesses qualify for Drip Capital?',
    answer: 'Drip Capital works with businesses generating $5M–$500M in annual revenue. We specialize in trade finance for importers, exporters, manufacturers, wholesalers, and distributors. We look at your business performance and trade history — not just your credit score.'
  },
  {
    question: 'How long does the approval process take?',
    answer: 'Most businesses receive a credit decision within 48 hours of completing the application. Once approved, funds can be deployed within the same business day for receivables financing, or directly to your suppliers within 24–48 hours.'
  },
  {
    question: 'Do I need to provide collateral?',
    answer: 'No. Drip Capital does not require hard asset collateral like real estate or equipment. Our underwriting is based on your business\'s trade performance, receivables quality, and financial health.'
  },
  {
    question: 'What is the difference between Float, Advance, and Flex?',
    answer: 'Float is our supplier financing product — we pay your suppliers and you repay us on extended terms (up to 120 days). Advance is receivables financing — we accelerate payment on your outstanding invoices. Flex is a revolving line of credit you can draw from at any time for any business purpose.'
  },
  {
    question: 'How much can I borrow?',
    answer: 'Credit facilities typically range from $100,000 to $10,000,000+, depending on your business size, revenue, and trade activity. Your facility grows as your business grows — we regularly review and increase limits for active customers.'
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
})
</script>

<style scoped>
/* ===== HERO ===== */
.hero {
  background: var(--navy);
  min-height: calc(100vh - var(--topbar-height) - var(--nav-height));
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 80px 0 72px;
}

.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      rgba(255,255,255,0.03) 0px,
      rgba(255,255,255,0.03) 1px,
      transparent 1px,
      transparent 60px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(255,255,255,0.03) 0px,
      rgba(255,255,255,0.03) 1px,
      transparent 1px,
      transparent 60px
    );
  pointer-events: none;
  z-index: 0;
}

.hero-glow {
  position: absolute;
  top: -30%;
  right: -10%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(0,194,124,0.14) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
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
  color: var(--white);
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
  color: rgba(255,255,255,0.68);
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 32px;
}

.hero-form .input-row {
  max-width: 460px;
}

.hero-form .input-row input {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.16);
  color: var(--white);
}

.hero-form .input-row input::placeholder {
  color: rgba(255,255,255,0.36);
}

.hero-form .input-row input:focus {
  border-color: var(--green);
  background: rgba(255,255,255,0.12);
}

.hero-pills {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.hero-pill-sep {
  color: rgba(255,255,255,0.3);
  font-size: 18px;
}

/* Hero Card */
.hero-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(12px);
}

.hero-card-header {
  margin-bottom: 28px;
}

.hero-card-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--green);
}

.hero-stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 28px;
}

.hero-stat-value {
  font-size: 32px;
  font-weight: 800;
  color: var(--white);
  line-height: 1;
  letter-spacing: -0.03em;
}

.hero-stat-label {
  font-size: 12px;
  color: rgba(255,255,255,0.52);
  margin-top: 4px;
}

.hero-card-backers {
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.hero-card-backer-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.36);
  display: block;
  margin-bottom: 10px;
}

.hero-backer-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.hero-backer-list span {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.52);
  background: rgba(255,255,255,0.06);
  padding: 4px 10px;
  border-radius: 4px;
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

/* ===== BACKERS ===== */
.backers-strip {
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

.backers-header {
  text-align: center;
  margin-bottom: 20px;
}

.backers-label-text {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--mid);
}

.marquee-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--green);
  margin-right: 4px;
  flex-shrink: 0;
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

  .hero-stats-grid {
    grid-template-columns: 1fr 1fr;
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
</style>
