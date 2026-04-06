<template>
  <div class="apply-page">

    <!-- ========== HERO ========== -->
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Apply for Financing</span>
        <h1>Get working capital<br><em>in 48 hours.</em></h1>
        <p>No collateral, no hidden fees. Tell us about your business and get a credit decision fast.</p>
        <div class="hero-trust-row">
          <span class="hero-trust-item">No application fee</span>
          <span class="hero-trust-sep" aria-hidden="true">·</span>
          <span class="hero-trust-item">No collateral</span>
          <span class="hero-trust-sep" aria-hidden="true">·</span>
          <span class="hero-trust-item">Decision in 48 hours</span>
          <span class="hero-trust-sep" aria-hidden="true">·</span>
          <span class="hero-trust-item">$100K–$10M available</span>
        </div>
      </div>
    </section>

    <!-- ========== MAIN CONTENT ========== -->
    <section class="section apply-body">
      <div class="container">
        <div class="apply-layout">

          <!-- ===== FORM COLUMN ===== -->
          <div class="apply-form-col">

            <!-- Success State -->
            <div v-if="submitted" class="success-card">
              <div class="success-check" aria-hidden="true">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="28" r="28" fill="rgba(0,194,124,0.12)" />
                  <circle cx="28" cy="28" r="22" fill="var(--green)" />
                  <path d="M18 28.5L24.5 35L38 21" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h2 class="success-title">Application received!</h2>
              <p class="success-body">
                We'll review your application and reach out within 24 hours. Keep an eye on
                <strong>{{ formData.email }}</strong>. In the meantime, feel free to explore our financing products.
              </p>
              <NuxtLink to="/products/vendor-financing" class="btn btn-primary btn-lg">
                Explore Products →
              </NuxtLink>
            </div>

            <!-- Multi-Step Form -->
            <div v-else class="form-card">

              <!-- Step Indicator -->
              <div class="step-indicator" role="progressbar" :aria-valuenow="currentStep" aria-valuemin="1" aria-valuemax="3">
                <div
                  v-for="step in steps"
                  :key="step.num"
                  class="step-item"
                  :class="{
                    'step-active': currentStep === step.num,
                    'step-done': currentStep > step.num
                  }"
                >
                  <div class="step-dot">
                    <span v-if="currentStep > step.num" class="step-check" aria-hidden="true">✓</span>
                    <span v-else aria-hidden="true">{{ step.num }}</span>
                  </div>
                  <span class="step-label">{{ step.label }}</span>
                </div>
                <div class="step-track" aria-hidden="true">
                  <div class="step-fill" :style="{ width: stepFillWidth }"></div>
                </div>
              </div>

              <!-- STEP 1: Your Business -->
              <div v-if="currentStep === 1" class="step-panel">
                <h2 class="step-title">Your Business</h2>
                <p class="step-subtitle">Tell us about the company applying for financing.</p>

                <div class="form-grid">
                  <div class="form-group">
                    <label for="businessName">Business Legal Name <span class="req" aria-hidden="true">*</span></label>
                    <input
                      id="businessName"
                      type="text"
                      v-model="formData.businessName"
                      placeholder="Acme Trading LLC"
                      :class="{ 'input-error': errors.businessName }"
                    />
                    <span v-if="errors.businessName" class="field-error" role="alert">{{ errors.businessName }}</span>
                  </div>

                  <div class="form-group">
                    <label for="dbaName">DBA / Trading Name <span class="optional">(optional)</span></label>
                    <input
                      id="dbaName"
                      type="text"
                      v-model="formData.dbaName"
                      placeholder="Acme Imports"
                    />
                  </div>

                  <div class="form-group">
                    <label for="industry">Industry <span class="req" aria-hidden="true">*</span></label>
                    <select
                      id="industry"
                      v-model="formData.industry"
                      :class="{ 'input-error': errors.industry }"
                    >
                      <option value="">Select your industry</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="wholesale">Wholesale Distribution</option>
                      <option value="agrifood">Agri-Food</option>
                      <option value="seafood">Seafood</option>
                      <option value="consumer-goods">Consumer Goods</option>
                      <option value="other">Other</option>
                    </select>
                    <span v-if="errors.industry" class="field-error" role="alert">{{ errors.industry }}</span>
                  </div>

                  <div class="form-group">
                    <label for="yearsInBusiness">Years in Business <span class="req" aria-hidden="true">*</span></label>
                    <select
                      id="yearsInBusiness"
                      v-model="formData.yearsInBusiness"
                      :class="{ 'input-error': errors.yearsInBusiness }"
                    >
                      <option value="">Select years in operation</option>
                      <option value="less-than-1">Less than 1 year</option>
                      <option value="1-2">1–2 years</option>
                      <option value="3-5">3–5 years</option>
                      <option value="6-10">6–10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                    <span v-if="errors.yearsInBusiness" class="field-error" role="alert">{{ errors.yearsInBusiness }}</span>
                  </div>

                  <div class="form-group">
                    <label for="annualRevenue">Annual Revenue <span class="req" aria-hidden="true">*</span></label>
                    <select
                      id="annualRevenue"
                      v-model="formData.annualRevenue"
                      :class="{ 'input-error': errors.annualRevenue }"
                    >
                      <option value="">Select annual revenue range</option>
                      <option value="500k-1m">$500K–$1M</option>
                      <option value="1m-2m">$1M–$2M</option>
                      <option value="2m-5m">$2M–$5M</option>
                      <option value="5m-10m">$5M–$10M</option>
                      <option value="10m-25m">$10M–$25M</option>
                      <option value="25m-50m">$25M–$50M</option>
                      <option value="50m+">$50M+</option>
                    </select>
                    <span v-if="errors.annualRevenue" class="field-error" role="alert">{{ errors.annualRevenue }}</span>
                  </div>

                  <div class="form-group">
                    <label for="businessState">Business State <span class="req" aria-hidden="true">*</span></label>
                    <select
                      id="businessState"
                      v-model="formData.businessState"
                      :class="{ 'input-error': errors.businessState }"
                    >
                      <option value="">Select your state</option>
                      <option v-for="state in usStates" :key="state.abbr" :value="state.abbr">{{ state.name }}</option>
                    </select>
                    <span v-if="errors.businessState" class="field-error" role="alert">{{ errors.businessState }}</span>
                  </div>

                  <div class="form-group form-group-full">
                    <label for="businessType">Business Type <span class="req" aria-hidden="true">*</span></label>
                    <select
                      id="businessType"
                      v-model="formData.businessType"
                      :class="{ 'input-error': errors.businessType }"
                    >
                      <option value="">Select entity type</option>
                      <option value="llc">LLC</option>
                      <option value="s-corp">S-Corp</option>
                      <option value="c-corp">C-Corp</option>
                      <option value="sole-prop">Sole Proprietor</option>
                      <option value="partnership">Partnership</option>
                    </select>
                    <span v-if="errors.businessType" class="field-error" role="alert">{{ errors.businessType }}</span>
                  </div>
                </div>
              </div>

              <!-- STEP 2: Financing Needs -->
              <div v-else-if="currentStep === 2" class="step-panel">
                <h2 class="step-title">Financing Needs</h2>
                <p class="step-subtitle">Help us understand what type of capital you're looking for.</p>

                <div class="form-grid">
                  <!-- Product Radio Cards -->
                  <div class="form-group form-group-full">
                    <label class="group-label">Product Needed <span class="req" aria-hidden="true">*</span></label>
                    <div class="product-cards">
                      <label
                        v-for="product in products"
                        :key="product.value"
                        class="product-card"
                        :class="{ 'product-card-active': formData.productNeeded === product.value }"
                      >
                        <input
                          type="radio"
                          name="productNeeded"
                          :value="product.value"
                          v-model="formData.productNeeded"
                          class="sr-only"
                        />
                        <div class="product-card-icon" aria-hidden="true">{{ product.icon }}</div>
                        <div class="product-card-body">
                          <strong class="product-card-title">{{ product.label }}</strong>
                          <span class="product-card-desc">{{ product.desc }}</span>
                        </div>
                        <div class="product-card-check" aria-hidden="true">
                          <svg v-if="formData.productNeeded === product.value" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="9" fill="var(--green)"/>
                            <path d="M5 9.5L7.5 12L13 6.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <div v-else class="product-card-circle"></div>
                        </div>
                      </label>
                    </div>
                    <span v-if="errors.productNeeded" class="field-error" role="alert">{{ errors.productNeeded }}</span>
                  </div>

                  <div class="form-group">
                    <label for="amountNeeded">Amount Needed <span class="req" aria-hidden="true">*</span></label>
                    <select
                      id="amountNeeded"
                      v-model="formData.amountNeeded"
                      :class="{ 'input-error': errors.amountNeeded }"
                    >
                      <option value="">Select target amount</option>
                      <option value="100k-250k">$100K–$250K</option>
                      <option value="250k-500k">$250K–$500K</option>
                      <option value="500k-1m">$500K–$1M</option>
                      <option value="1m-2.5m">$1M–$2.5M</option>
                      <option value="2.5m-5m">$2.5M–$5M</option>
                      <option value="5m-10m">$5M–$10M</option>
                      <option value="10m+">$10M+</option>
                    </select>
                    <span v-if="errors.amountNeeded" class="field-error" role="alert">{{ errors.amountNeeded }}</span>
                  </div>

                  <div class="form-group">
                    <label for="primaryUse">Primary Use of Funds <span class="req" aria-hidden="true">*</span></label>
                    <select
                      id="primaryUse"
                      v-model="formData.primaryUse"
                      :class="{ 'input-error': errors.primaryUse }"
                    >
                      <option value="">Select primary use</option>
                      <option value="pay-suppliers">Pay suppliers/vendors</option>
                      <option value="bridge-receivables">Bridge receivables gap</option>
                      <option value="fund-inventory">Fund inventory purchase</option>
                      <option value="expansion">Business expansion</option>
                      <option value="operational">Cover operational expenses</option>
                      <option value="other">Other</option>
                    </select>
                    <span v-if="errors.primaryUse" class="field-error" role="alert">{{ errors.primaryUse }}</span>
                  </div>

                  <div class="form-group form-group-full">
                    <label for="hearAboutUs">How did you hear about us? <span class="req" aria-hidden="true">*</span></label>
                    <select
                      id="hearAboutUs"
                      v-model="formData.hearAboutUs"
                      :class="{ 'input-error': errors.hearAboutUs }"
                    >
                      <option value="">Select an option</option>
                      <option value="google">Google Search</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="referral">Referral</option>
                      <option value="event">Industry event</option>
                      <option value="other">Other</option>
                    </select>
                    <span v-if="errors.hearAboutUs" class="field-error" role="alert">{{ errors.hearAboutUs }}</span>
                  </div>

                  <div class="form-group form-group-full">
                    <label for="additionalContext">Additional Context <span class="optional">(optional)</span></label>
                    <textarea
                      id="additionalContext"
                      v-model="formData.additionalContext"
                      placeholder="Tell us anything else that would help us understand your financing needs"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- STEP 3: Contact Info -->
              <div v-else-if="currentStep === 3" class="step-panel">
                <h2 class="step-title">Contact Info</h2>
                <p class="step-subtitle">How should we reach you with your credit decision?</p>

                <div class="form-grid">
                  <div class="form-group">
                    <label for="firstName">First Name <span class="req" aria-hidden="true">*</span></label>
                    <input
                      id="firstName"
                      type="text"
                      v-model="formData.firstName"
                      placeholder="Jane"
                      :class="{ 'input-error': errors.firstName }"
                    />
                    <span v-if="errors.firstName" class="field-error" role="alert">{{ errors.firstName }}</span>
                  </div>

                  <div class="form-group">
                    <label for="lastName">Last Name <span class="req" aria-hidden="true">*</span></label>
                    <input
                      id="lastName"
                      type="text"
                      v-model="formData.lastName"
                      placeholder="Smith"
                      :class="{ 'input-error': errors.lastName }"
                    />
                    <span v-if="errors.lastName" class="field-error" role="alert">{{ errors.lastName }}</span>
                  </div>

                  <div class="form-group form-group-full">
                    <label for="jobTitle">Job Title <span class="req" aria-hidden="true">*</span></label>
                    <input
                      id="jobTitle"
                      type="text"
                      v-model="formData.jobTitle"
                      placeholder="CFO / Owner / Finance Manager"
                      :class="{ 'input-error': errors.jobTitle }"
                    />
                    <span v-if="errors.jobTitle" class="field-error" role="alert">{{ errors.jobTitle }}</span>
                  </div>

                  <div class="form-group">
                    <label for="email">Email Address <span class="req" aria-hidden="true">*</span></label>
                    <input
                      id="email"
                      type="email"
                      v-model="formData.email"
                      placeholder="jane@acmetrading.com"
                      :class="{ 'input-error': errors.email }"
                    />
                    <span v-if="errors.email" class="field-error" role="alert">{{ errors.email }}</span>
                  </div>

                  <div class="form-group">
                    <label for="phone">Phone Number <span class="req" aria-hidden="true">*</span></label>
                    <input
                      id="phone"
                      type="tel"
                      v-model="formData.phone"
                      placeholder="+1 (555) 000-0000"
                      :class="{ 'input-error': errors.phone }"
                    />
                    <span v-if="errors.phone" class="field-error" role="alert">{{ errors.phone }}</span>
                  </div>

                  <div class="form-group form-group-full">
                    <label class="group-label">Preferred Contact Method <span class="req" aria-hidden="true">*</span></label>
                    <div class="radio-row">
                      <label class="radio-option" :class="{ 'radio-option-active': formData.contactMethod === 'email' }">
                        <input type="radio" name="contactMethod" value="email" v-model="formData.contactMethod" class="sr-only" />
                        <span class="radio-dot" aria-hidden="true"></span>
                        Email
                      </label>
                      <label class="radio-option" :class="{ 'radio-option-active': formData.contactMethod === 'phone' }">
                        <input type="radio" name="contactMethod" value="phone" v-model="formData.contactMethod" class="sr-only" />
                        <span class="radio-dot" aria-hidden="true"></span>
                        Phone
                      </label>
                    </div>
                    <span v-if="errors.contactMethod" class="field-error" role="alert">{{ errors.contactMethod }}</span>
                  </div>

                  <div class="form-group form-group-full">
                    <label for="bestTime">Best Time to Reach You <span class="req" aria-hidden="true">*</span></label>
                    <select
                      id="bestTime"
                      v-model="formData.bestTime"
                      :class="{ 'input-error': errors.bestTime }"
                    >
                      <option value="">Select a time window</option>
                      <option value="morning">Morning (8am–12pm)</option>
                      <option value="afternoon">Afternoon (12pm–5pm)</option>
                      <option value="evening">Evening (5pm–8pm)</option>
                    </select>
                    <span v-if="errors.bestTime" class="field-error" role="alert">{{ errors.bestTime }}</span>
                  </div>

                  <div class="form-group form-group-full">
                    <label class="checkbox-label" :class="{ 'checkbox-label-error': errors.termsAgreed }">
                      <input
                        type="checkbox"
                        v-model="formData.termsAgreed"
                        class="checkbox-input"
                      />
                      <span class="checkbox-box" aria-hidden="true">
                        <svg v-if="formData.termsAgreed" width="12" height="10" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      <span class="checkbox-text">
                        I agree to Drip Capital's
                        <NuxtLink to="/company/terms" class="form-link">Terms of Service</NuxtLink>
                        and
                        <NuxtLink to="/company/privacy" class="form-link">Privacy Policy</NuxtLink>
                      </span>
                    </label>
                    <span v-if="errors.termsAgreed" class="field-error" role="alert">{{ errors.termsAgreed }}</span>
                  </div>
                </div>
              </div>

              <!-- Form Navigation -->
              <div class="form-nav">
                <button
                  v-if="currentStep > 1"
                  type="button"
                  class="btn btn-outline"
                  @click="prevStep"
                >
                  ← Back
                </button>
                <span v-else></span>

                <button
                  v-if="currentStep < 3"
                  type="button"
                  class="btn btn-primary btn-lg"
                  @click="nextStep"
                >
                  Continue →
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-primary btn-lg"
                  @click="submitForm"
                >
                  Submit Application →
                </button>
              </div>

            </div>
          </div>

          <!-- ===== SIDEBAR COLUMN ===== -->
          <aside class="apply-sidebar" aria-label="Application information">

            <!-- What Happens Next -->
            <div class="sidebar-card">
              <h3 class="sidebar-card-title">What Happens Next</h3>
              <ol class="next-steps">
                <li v-for="(step, i) in nextStepsItems" :key="i" class="next-step-item">
                  <span class="next-step-dot" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="rgba(0,194,124,0.15)"/>
                      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="var(--green)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div class="next-step-body">
                    <span class="next-step-action">{{ step.action }}</span>
                    <span class="next-step-time">{{ step.time }}</span>
                  </div>
                </li>
              </ol>
            </div>

            <!-- Trust Signals -->
            <div class="sidebar-card">
              <h3 class="sidebar-card-title">Why Businesses Choose Us</h3>
              <ul class="trust-list">
                <li class="trust-item">
                  <span class="trust-icon" aria-hidden="true">★</span>
                  <span><strong>4.7</strong> on Trustpilot</span>
                </li>
                <li class="trust-item">
                  <span class="trust-icon" aria-hidden="true">✓</span>
                  <span><strong>10,000+</strong> businesses funded</span>
                </li>
                <li class="trust-item">
                  <span class="trust-icon" aria-hidden="true">✓</span>
                  <span><strong>$9B+</strong> deployed</span>
                </li>
                <li class="trust-item">
                  <span class="trust-icon" aria-hidden="true">✓</span>
                  <span>No collateral required</span>
                </li>
                <li class="trust-item">
                  <span class="trust-icon" aria-hidden="true">✓</span>
                  <span>FDIC-insured banking partners</span>
                </li>
              </ul>
            </div>

            <!-- Eligibility -->
            <div class="sidebar-card sidebar-card-alt">
              <h3 class="sidebar-card-title">You May Qualify If:</h3>
              <ul class="eligibility-list">
                <li v-for="item in eligibilityItems" :key="item" class="eligibility-item">
                  <span class="elig-check" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="var(--green)"/>
                      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  {{ item }}
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </section>

    <!-- ========== FAQ SECTION ========== -->
    <section class="section section-bg faq-section">
      <div class="container">
        <div class="faq-header reveal">
          <span class="eyebrow">Common Questions</span>
          <h2 class="section-title">Answers before you apply.</h2>
        </div>
        <div class="faq-list" role="list">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="accordion-item reveal"
            :class="`reveal-delay-${i}`"
            role="listitem"
          >
            <button
              class="accordion-trigger"
              :aria-expanded="openFaq === i"
              :aria-controls="`faq-panel-${i}`"
              @click="toggleFaq(i)"
            >
              {{ faq.q }}
              <span class="accordion-icon" :class="{ open: openFaq === i }" aria-hidden="true">+</span>
            </button>
            <div
              :id="`faq-panel-${i}`"
              class="accordion-body"
              :class="{ 'accordion-body-open': openFaq === i }"
              role="region"
            >
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== BOTTOM CTA STRIP ========== -->
    <div class="cta-strip">
      <div class="container">
        <div class="cta-strip-inner">
          <span class="cta-strip-item">
            Have questions? Call us:
            <a href="tel:+16504370150" class="cta-strip-link">+1 (650) 437-0150</a>
          </span>
          <span class="cta-strip-sep" aria-hidden="true">|</span>
          <span class="cta-strip-item">
            Email:
            <a href="mailto:hello@dripcapital.com" class="cta-strip-link">hello@dripcapital.com</a>
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Apply for Financing | Drip Capital' })

// ─── Step state ────────────────────────────────────────────────────────────────
const currentStep = ref<1 | 2 | 3>(1)
const submitted = ref(false)
const openFaq = ref<number | null>(null)

const steps = [
  { num: 1, label: 'Your Business' },
  { num: 2, label: 'Financing Needs' },
  { num: 3, label: 'Contact Info' },
] as const

const stepFillWidth = computed(() => {
  if (currentStep.value === 1) return '0%'
  if (currentStep.value === 2) return '50%'
  return '100%'
})

// ─── Form data ─────────────────────────────────────────────────────────────────
const formData = reactive({
  // Step 1
  businessName: '',
  dbaName: '',
  industry: '',
  yearsInBusiness: '',
  annualRevenue: '',
  businessState: '',
  businessType: '',
  // Step 2
  productNeeded: '',
  amountNeeded: '',
  primaryUse: '',
  hearAboutUs: '',
  additionalContext: '',
  // Step 3
  firstName: '',
  lastName: '',
  jobTitle: '',
  email: '',
  phone: '',
  contactMethod: 'email',
  bestTime: '',
  termsAgreed: false,
})

// ─── Validation errors ─────────────────────────────────────────────────────────
const errors = reactive<Record<string, string>>({})

function clearErrors() {
  Object.keys(errors).forEach(k => delete errors[k])
}

function validateStep(step: number): boolean {
  clearErrors()
  let valid = true

  if (step === 1) {
    if (!formData.businessName.trim()) { errors.businessName = 'Business name is required.'; valid = false }
    if (!formData.industry) { errors.industry = 'Please select your industry.'; valid = false }
    if (!formData.yearsInBusiness) { errors.yearsInBusiness = 'Please select years in business.'; valid = false }
    if (!formData.annualRevenue) { errors.annualRevenue = 'Please select your annual revenue range.'; valid = false }
    if (!formData.businessState) { errors.businessState = 'Please select your state.'; valid = false }
    if (!formData.businessType) { errors.businessType = 'Please select your business type.'; valid = false }
  }

  if (step === 2) {
    if (!formData.productNeeded) { errors.productNeeded = 'Please select a product.'; valid = false }
    if (!formData.amountNeeded) { errors.amountNeeded = 'Please select an amount range.'; valid = false }
    if (!formData.primaryUse) { errors.primaryUse = 'Please select a primary use.'; valid = false }
    if (!formData.hearAboutUs) { errors.hearAboutUs = 'Please let us know how you found us.'; valid = false }
  }

  if (step === 3) {
    if (!formData.firstName.trim()) { errors.firstName = 'First name is required.'; valid = false }
    if (!formData.lastName.trim()) { errors.lastName = 'Last name is required.'; valid = false }
    if (!formData.jobTitle.trim()) { errors.jobTitle = 'Job title is required.'; valid = false }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'A valid email address is required.'; valid = false
    }
    if (!formData.phone.trim()) { errors.phone = 'Phone number is required.'; valid = false }
    if (!formData.contactMethod) { errors.contactMethod = 'Please select a contact method.'; valid = false }
    if (!formData.bestTime) { errors.bestTime = 'Please select a preferred time.'; valid = false }
    if (!formData.termsAgreed) { errors.termsAgreed = 'You must agree to the terms to proceed.'; valid = false }
  }

  return valid
}

function nextStep() {
  if (validateStep(currentStep.value)) {
    currentStep.value = (currentStep.value + 1) as 1 | 2 | 3
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function prevStep() {
  clearErrors()
  currentStep.value = (currentStep.value - 1) as 1 | 2 | 3
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function submitForm() {
  if (validateStep(3)) {
    submitted.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// ─── FAQ accordion ─────────────────────────────────────────────────────────────
function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index
}

// ─── Static data ───────────────────────────────────────────────────────────────
const products = [
  {
    value: 'vendor-financing',
    label: 'Vendor Financing',
    icon: '🏭',
    desc: 'Pay suppliers, extend your cash runway',
  },
  {
    value: 'receivables-financing',
    label: 'Receivables Financing',
    icon: '📄',
    desc: 'Turn invoices into same-day cash',
  },
  {
    value: 'line-of-credit',
    label: 'Line of Credit',
    icon: '💳',
    desc: 'Flexible draw-down for any business need',
  },
]

const nextStepsItems = [
  { action: 'Submit your application', time: '5 min' },
  { action: 'Our team reviews your details', time: '24 hrs' },
  { action: 'Credit decision issued', time: '48 hrs' },
  { action: 'Capital in your account', time: '2–5 days' },
]

const eligibilityItems = [
  'US-based business',
  '12+ months in operation',
  '$500K+ annual revenue',
  'B2B customers (not B2C retail)',
  'Clean banking history',
]

const faqs = [
  {
    q: 'Is there a fee to apply?',
    a: 'No fee. We review every application at no cost to you. There are no upfront charges, no application fees, and no obligation to proceed after receiving a credit decision.',
  },
  {
    q: 'What documents do you need?',
    a: 'For the initial review we typically need 3–6 months of bank statements, recent invoices or purchase orders, and basic business information. No tax returns are required for the initial stage.',
  },
  {
    q: 'Does applying affect my credit score?',
    a: 'The initial application review uses a soft pull only, which has no impact on your credit score. A hard inquiry is only made if you choose to proceed after receiving and accepting a credit offer.',
  },
  {
    q: 'How quickly can I access capital?',
    a: 'We issue a credit decision within 48 hours of receiving your complete application. Once you accept an offer, funds are typically available within 2–5 business days depending on your bank.',
  },
]

const usStates = [
  { abbr: 'AL', name: 'Alabama' }, { abbr: 'AK', name: 'Alaska' }, { abbr: 'AZ', name: 'Arizona' },
  { abbr: 'AR', name: 'Arkansas' }, { abbr: 'CA', name: 'California' }, { abbr: 'CO', name: 'Colorado' },
  { abbr: 'CT', name: 'Connecticut' }, { abbr: 'DE', name: 'Delaware' }, { abbr: 'FL', name: 'Florida' },
  { abbr: 'GA', name: 'Georgia' }, { abbr: 'HI', name: 'Hawaii' }, { abbr: 'ID', name: 'Idaho' },
  { abbr: 'IL', name: 'Illinois' }, { abbr: 'IN', name: 'Indiana' }, { abbr: 'IA', name: 'Iowa' },
  { abbr: 'KS', name: 'Kansas' }, { abbr: 'KY', name: 'Kentucky' }, { abbr: 'LA', name: 'Louisiana' },
  { abbr: 'ME', name: 'Maine' }, { abbr: 'MD', name: 'Maryland' }, { abbr: 'MA', name: 'Massachusetts' },
  { abbr: 'MI', name: 'Michigan' }, { abbr: 'MN', name: 'Minnesota' }, { abbr: 'MS', name: 'Mississippi' },
  { abbr: 'MO', name: 'Missouri' }, { abbr: 'MT', name: 'Montana' }, { abbr: 'NE', name: 'Nebraska' },
  { abbr: 'NV', name: 'Nevada' }, { abbr: 'NH', name: 'New Hampshire' }, { abbr: 'NJ', name: 'New Jersey' },
  { abbr: 'NM', name: 'New Mexico' }, { abbr: 'NY', name: 'New York' }, { abbr: 'NC', name: 'North Carolina' },
  { abbr: 'ND', name: 'North Dakota' }, { abbr: 'OH', name: 'Ohio' }, { abbr: 'OK', name: 'Oklahoma' },
  { abbr: 'OR', name: 'Oregon' }, { abbr: 'PA', name: 'Pennsylvania' }, { abbr: 'RI', name: 'Rhode Island' },
  { abbr: 'SC', name: 'South Carolina' }, { abbr: 'SD', name: 'South Dakota' }, { abbr: 'TN', name: 'Tennessee' },
  { abbr: 'TX', name: 'Texas' }, { abbr: 'UT', name: 'Utah' }, { abbr: 'VT', name: 'Vermont' },
  { abbr: 'VA', name: 'Virginia' }, { abbr: 'WA', name: 'Washington' }, { abbr: 'WV', name: 'West Virginia' },
  { abbr: 'WI', name: 'Wisconsin' }, { abbr: 'WY', name: 'Wyoming' },
]
</script>

<style scoped>
/* ─── Hero trust row ─────────────────────────────────────────────────────────── */
.hero-trust-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 16px;
  margin-top: 28px;
}

.hero-trust-item {
  font-size: 13px;
  font-weight: 500;
  color: var(--mid);
}

.hero-trust-sep {
  color: var(--border);
  font-size: 14px;
}

/* ─── Apply body layout ──────────────────────────────────────────────────────── */
.apply-body {
  background: var(--off);
}

.apply-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  align-items: start;
}

/* ─── Form card ──────────────────────────────────────────────────────────────── */
.form-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}

/* ─── Step indicator ─────────────────────────────────────────────────────────── */
.step-indicator {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 28px 32px 24px;
  border-bottom: 1px solid var(--border);
  background: var(--white);
}

.step-track {
  position: absolute;
  bottom: 24px;
  left: calc(32px + 12px);
  right: calc(32px + 12px);
  height: 2px;
  background: var(--border);
  z-index: 0;
}

.step-fill {
  height: 100%;
  background: var(--green);
  border-radius: 2px;
  transition: width 0.4s ease;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
  flex: 1;
}

.step-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid var(--border);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--mid);
  transition: all 0.3s ease;
}

.step-active .step-dot {
  border-color: var(--green);
  background: var(--green);
  color: var(--white);
  box-shadow: 0 0 0 4px rgba(0, 194, 124, 0.15);
}

.step-done .step-dot {
  border-color: var(--green);
  background: var(--green);
  color: var(--white);
}

.step-check {
  font-size: 12px;
}

.step-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--mid);
  letter-spacing: 0.03em;
  text-align: center;
  white-space: nowrap;
}

.step-active .step-label {
  color: var(--navy);
}

.step-done .step-label {
  color: var(--green-d);
}

/* ─── Step panel ─────────────────────────────────────────────────────────────── */
.step-panel {
  padding: 32px;
}

.step-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 6px;
}

.step-subtitle {
  font-size: 14px;
  color: var(--mid);
  margin-bottom: 28px;
}

/* ─── Form grid ──────────────────────────────────────────────────────────────── */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group-full {
  grid-column: 1 / -1;
}

.group-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--body);
  letter-spacing: 0.02em;
  margin-bottom: 10px;
}

.req {
  color: var(--green);
}

.optional {
  font-size: 11px;
  font-weight: 400;
  color: var(--mid);
  margin-left: 4px;
}

.input-error {
  border-color: #e53e3e !important;
  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1) !important;
}

.field-error {
  font-size: 12px;
  color: #e53e3e;
  margin-top: 2px;
}

/* ─── Product radio cards ────────────────────────────────────────────────────── */
.product-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 18px 16px;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  background: var(--white);
  position: relative;
}

.product-card:hover {
  border-color: var(--green);
  box-shadow: 0 4px 16px rgba(0, 194, 124, 0.1);
}

.product-card-active {
  border-color: var(--green);
  background: rgba(0, 194, 124, 0.04);
  box-shadow: 0 4px 16px rgba(0, 194, 124, 0.12);
}

.product-card-icon {
  font-size: 22px;
}

.product-card-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.product-card-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.3;
}

.product-card-desc {
  font-size: 12px;
  color: var(--mid);
  line-height: 1.4;
}

.product-card-check {
  position: absolute;
  top: 12px;
  right: 12px;
}

.product-card-circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--border);
}

/* ─── Radio row ──────────────────────────────────────────────────────────────── */
.radio-row {
  display: flex;
  gap: 12px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border: 2px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: var(--body);
  transition: border-color 0.2s, background 0.2s;
}

.radio-option:hover {
  border-color: var(--green);
}

.radio-option-active {
  border-color: var(--green);
  background: rgba(0, 194, 124, 0.06);
  color: var(--navy);
}

.radio-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid var(--border);
  flex-shrink: 0;
  transition: border-color 0.2s, background 0.2s;
}

.radio-option-active .radio-dot {
  border-color: var(--green);
  background: var(--green);
  box-shadow: inset 0 0 0 3px var(--white);
}

/* ─── Checkbox ───────────────────────────────────────────────────────────────── */
.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-box {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 2px solid var(--border);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s, background 0.2s;
  margin-top: 1px;
}

.checkbox-label:has(.checkbox-input:checked) .checkbox-box {
  border-color: var(--green);
  background: var(--green);
}

.checkbox-text {
  font-size: 13px;
  color: var(--body);
  line-height: 1.5;
}

.checkbox-label-error .checkbox-box {
  border-color: #e53e3e;
}

.form-link {
  color: var(--green);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.form-link:hover {
  color: var(--green-d);
}

/* ─── Form navigation ────────────────────────────────────────────────────────── */
.form-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px 28px;
  border-top: 1px solid var(--border);
  gap: 12px;
}

/* ─── Success card ───────────────────────────────────────────────────────────── */
.success-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 56px 48px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.success-check {
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--navy);
}

.success-body {
  font-size: 16px;
  color: var(--mid);
  line-height: 1.7;
  max-width: 440px;
}

/* ─── Sidebar ────────────────────────────────────────────────────────────────── */
.apply-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: calc(var(--nav-height, 64px) + var(--topbar-height, 36px) + 24px);
}

.sidebar-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
}

.sidebar-card-alt {
  background: rgba(0, 194, 124, 0.04);
  border-color: rgba(0, 194, 124, 0.2);
}

.sidebar-card-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--navy);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 16px;
}

/* What Happens Next */
.next-steps {
  display: flex;
  flex-direction: column;
  gap: 14px;
  list-style: none;
  counter-reset: steps;
}

.next-step-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.next-step-dot {
  flex-shrink: 0;
  margin-top: 1px;
}

.next-step-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.next-step-action {
  font-size: 13px;
  font-weight: 600;
  color: var(--navy);
}

.next-step-time {
  font-size: 12px;
  color: var(--mid);
}

/* Trust list */
.trust-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--body);
}

.trust-icon {
  width: 20px;
  text-align: center;
  color: var(--green);
  font-size: 14px;
  flex-shrink: 0;
}

/* Eligibility */
.eligibility-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
}

.eligibility-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--body);
  font-weight: 500;
}

.elig-check {
  flex-shrink: 0;
}

/* ─── FAQ Section ────────────────────────────────────────────────────────────── */
.faq-section {
  background: var(--off);
}

.faq-header {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 48px;
}

.faq-list {
  max-width: 760px;
  margin: 0 auto;
}

.accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.3s ease;
}

.accordion-body-open {
  max-height: 400px;
}

.accordion-body p {
  padding: 0 0 20px;
  font-size: 15px;
  color: var(--body);
  line-height: 1.7;
}

/* ─── Bottom CTA strip ───────────────────────────────────────────────────────── */
.cta-strip {
  background: var(--navy);
  padding: 20px 0;
}

.cta-strip-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.cta-strip-item {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

.cta-strip-link {
  color: var(--green);
  font-weight: 600;
  margin-left: 4px;
  transition: color 0.2s;
}

.cta-strip-link:hover {
  color: #4deba0;
}

.cta-strip-sep {
  color: rgba(255, 255, 255, 0.25);
  font-size: 18px;
}

/* ─── Utility ────────────────────────────────────────────────────────────────── */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ─── Responsive ─────────────────────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .apply-layout {
    grid-template-columns: 1fr 320px;
    gap: 28px;
  }

  .product-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 820px) {
  .apply-layout {
    grid-template-columns: 1fr;
  }

  .apply-sidebar {
    position: static;
    order: 2;
  }

  .apply-form-col {
    order: 1;
  }

  .step-indicator {
    padding: 20px 20px 20px;
  }

  .step-panel {
    padding: 24px 20px;
  }

  .form-nav {
    padding: 16px 20px 24px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-group-full {
    grid-column: 1;
  }

  .product-cards {
    grid-template-columns: 1fr;
  }

  .step-label {
    display: none;
  }
}

@media (max-width: 600px) {
  .hero-trust-row {
    gap: 8px 12px;
  }

  .hero-trust-sep {
    display: none;
  }

  .hero-trust-item {
    font-size: 12px;
  }

  .success-card {
    padding: 40px 24px;
  }

  .cta-strip-inner {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .cta-strip-sep {
    display: none;
  }

  .radio-row {
    flex-direction: column;
  }
}
</style>
