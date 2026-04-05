<template>
  <div>
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Partner Program</span>
        <h1>Partner with<br><em>Drip Capital</em></h1>
        <p>Help your clients access the working capital they need while earning referral income. Join our partner network of banks, brokers, associations, and advisors.</p>
      </div>
    </section>

    <!-- Partner Types -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">Who We Partner With</span>
          <h2 class="section-title">The right partner program<br>for your business.</h2>
        </div>
        <div class="grid-2">
          <div class="partner-type-card reveal" v-for="(pt, i) in partnerTypes" :key="i" :class="`reveal-delay-${i}`">
            <div class="pt-icon">
              <AppIcon :name="pt.icon" :size="28" color="var(--green)" />
            </div>
            <h3 class="pt-title">{{ pt.title }}</h3>
            <p class="pt-desc">{{ pt.desc }}</p>
            <ul class="pt-benefits">
              <li v-for="b in pt.benefits" :key="b">{{ b }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Partner -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
          <span class="eyebrow">Why Partner with Drip Capital</span>
          <h2 class="section-title">Benefits of joining<br>our partner network.</h2>
        </div>
        <div class="grid-3">
          <div class="benefit-card reveal" v-for="(b, i) in benefits" :key="i" :class="`reveal-delay-${i}`">
            <div class="feature-icon">
              <AppIcon :name="b.icon" :size="22" color="var(--green)" />
            </div>
            <h3 class="benefit-title">{{ b.title }}</h3>
            <p class="benefit-desc">{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner Application Form -->
    <section class="section">
      <div class="container">
        <div class="form-layout">
          <div class="form-left reveal">
            <span class="eyebrow">Apply to Partner</span>
            <h2 class="section-title">Join our<br>partner network.</h2>
            <p class="section-subtitle">
              Fill out the form and our partnerships team will be in touch within 2 business days to discuss the best program for you.
            </p>
            <div class="contact-info">
              <div class="ci-item">
                <span class="ci-icon">
                  <AppIcon name="mail" :size="16" color="var(--green)" />
                </span>
                <a href="mailto:partners@dripcapital.com">partners@dripcapital.com</a>
              </div>
              <div class="ci-item">
                <span class="ci-icon">
                  <AppIcon name="phone" :size="16" color="var(--green)" />
                </span>
                <a href="tel:+16504370150">+1 (650) 437-0150</a>
              </div>
            </div>
          </div>

          <div class="form-right reveal reveal-delay-1">
            <form class="partner-form" @submit.prevent="submitPartnerForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="p-name">Full Name *</label>
                  <input id="p-name" type="text" v-model="form.name" placeholder="Jane Smith" required />
                </div>
                <div class="form-group">
                  <label for="p-company">Company *</label>
                  <input id="p-company" type="text" v-model="form.company" placeholder="ABC Financial" required />
                </div>
              </div>
              <div class="form-group">
                <label for="p-email">Business Email *</label>
                <input id="p-email" type="email" v-model="form.email" placeholder="jane@abcfinancial.com" required />
              </div>
              <div class="form-group">
                <label for="p-type">Partner Type *</label>
                <select id="p-type" v-model="form.type" required>
                  <option value="">Select partner type</option>
                  <option value="bank">Bank / Credit Union</option>
                  <option value="broker">Finance Broker / Advisor</option>
                  <option value="association">Trade Association</option>
                  <option value="accountant">CPA / Accountant</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="p-message">Tell us about your clients</label>
                <textarea id="p-message" v-model="form.message" placeholder="Describe the types of businesses you work with and how we might collaborate..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-full btn-lg" style="justify-content: center;">
                Submit Application →
              </button>
              <p class="form-note">Our partnerships team will respond within 2 business days.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Partner Program | Drip Capital' })

const form = reactive({
  name: '',
  company: '',
  email: '',
  type: '',
  message: ''
})

const partnerTypes = [
  {
    icon: 'building',
    title: 'Banks & Credit Unions',
    desc: 'Expand your SMB lending capabilities by referring clients who need working capital products you don\'t currently offer.',
    benefits: ['Earn referral fees on funded clients', 'Complementary — not competitive', 'White-label options available', 'Dedicated bank partnership team']
  },
  {
    icon: 'building',
    title: 'Finance Brokers & Advisors',
    desc: 'Offer your clients a best-in-class working capital option and earn competitive referral commissions on funded transactions.',
    benefits: ['Industry-leading referral commissions', 'Fast approvals for your clients', 'Real-time deal tracking portal', 'Marketing support provided']
  },
  {
    icon: 'partner',
    title: 'Trade Associations',
    desc: 'Provide your members with access to exclusive working capital terms through a Drip Capital association partnership.',
    benefits: ['Member benefit announcement support', 'Preferred pricing for your members', 'Educational webinars & content', 'Co-branded materials available']
  },
  {
    icon: 'chart',
    title: 'CPAs & Accountants',
    desc: 'Help your business clients optimize cash flow by referring them to Drip Capital working capital solutions.',
    benefits: ['Earn referral income', 'Help clients improve cash flow', 'Simple referral process', 'Client relationship maintained']
  }
]

const benefits = [
  { icon: 'dollar', title: 'Competitive Referral Commissions', desc: 'Earn industry-leading referral fees for every client you refer who gets funded. Transparent, on-time payments — always.' },
  { icon: 'lightning', title: 'Fast Approvals for Your Clients', desc: 'Drip Capital\'s 48-hour approval process means your clients get funded fast, reinforcing your value as a trusted advisor.' },
  { icon: 'shield', title: 'Partner Portal Access', desc: 'Track referrals, monitor deal status, and access marketing materials through our dedicated partner portal.' },
  { icon: 'users', title: 'Training & Support', desc: 'We provide training on our products, dedicated partnership managers, and co-marketing resources to help you succeed.' },
  { icon: 'trending', title: 'Growing Product Suite', desc: 'With Vendor Financing, Receivables Financing, and Line of Credit, there\'s a Drip Capital product for nearly every working capital need your clients may have.' },
  { icon: 'star', title: 'Trusted Brand', desc: 'Partner with a brand backed by Sequoia, Accel, Y Combinator, and world-class financial institutions. Trusted by 10,000+ businesses.' }
]

function submitPartnerForm() {
  alert('Thank you for your interest in partnering with Drip Capital! Our team will be in touch within 2 business days.')
  Object.assign(form, { name: '', company: '', email: '', type: '', message: '' })
}
</script>

<style scoped>
.partner-type-card {
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: box-shadow 0.2s, transform 0.2s;
}

.partner-type-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.pt-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.pt-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 12px;
}

.pt-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
  margin-bottom: 20px;
}

.pt-benefits {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pt-benefits li {
  font-size: 13px;
  color: var(--body);
  padding-left: 20px;
  position: relative;
}

.pt-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--green);
  font-weight: 700;
}

.benefit-card {
  padding: 28px;
  border: 1px solid var(--border);
  background: var(--white);
  border-radius: var(--radius);
}

.benefit-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 10px;
}

.benefit-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
}

.form-layout {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 64px;
  align-items: start;
}

.contact-info {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ci-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--body);
}

.ci-icon { font-size: 16px; }

.ci-item a {
  color: var(--green);
  text-decoration: none;
}

.ci-item a:hover { color: var(--green-d); }

.partner-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background: var(--off);
  border: 1px solid var(--border);
  border-radius: 16px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-note {
  font-size: 12px;
  color: var(--mid);
  text-align: center;
}

@media (max-width: 768px) {
  .form-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .partner-form {
    padding: 24px;
  }
}
</style>
