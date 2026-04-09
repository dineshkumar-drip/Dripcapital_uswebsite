<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Contact</span>
        <h1>Let's talk about<br><em>your business</em></h1>
        <p>Whether you're ready to apply or just exploring your options, our team is here to help. Reach out and we'll respond within one business day.</p>
      </div>
    </section>

    <!-- Contact Layout -->
    <section class="section">
      <div class="container">
        <div class="contact-layout">
          <!-- Form -->
          <div class="reveal">
            <h2 class="contact-form-title">Send us a message</h2>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="c-first">First Name *</label>
                  <input id="c-first" type="text" v-model="form.firstName" placeholder="Jane" required />
                </div>
                <div class="form-group">
                  <label for="c-last">Last Name *</label>
                  <input id="c-last" type="text" v-model="form.lastName" placeholder="Smith" required />
                </div>
              </div>
              <div class="form-group">
                <label for="c-email">Business Email *</label>
                <input id="c-email" type="email" v-model="form.email" placeholder="jane@yourcompany.com" required />
              </div>
              <div class="form-group">
                <label for="c-phone">Phone</label>
                <input id="c-phone" type="tel" v-model="form.phone" placeholder="+1 (555) 000-0000" />
              </div>
              <div class="form-group">
                <label for="c-company">Company Name *</label>
                <input id="c-company" type="text" v-model="form.company" placeholder="Your Company LLC" required />
              </div>
              <div class="form-group">
                <label for="c-revenue">Annual Revenue</label>
                <select id="c-revenue" v-model="form.revenue">
                  <option value="">Select revenue range</option>
                  <option value="1m-5m">$1M – $5M</option>
                  <option value="5m-25m">$5M – $25M</option>
                  <option value="25m-100m">$25M – $100M</option>
                  <option value="100m-500m">$100M – $500M</option>
                  <option value="500m+">$500M+</option>
                </select>
              </div>
              <div class="form-group">
                <label for="c-product">Product Interest</label>
                <select id="c-product" v-model="form.product">
                  <option value="">What are you interested in?</option>
                  <option value="vendor-financing">Vendor Financing</option>
                  <option value="receivables-financing">Receivables Financing</option>
                  <option value="line-of-credit">Line of Credit</option>
                  <option value="all">All Products</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="c-message">Message *</label>
                <textarea id="c-message" v-model="form.message" placeholder="Tell us about your business and what you're looking for..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-full btn-lg" style="justify-content: center;">
                Send Message →
              </button>

              <div v-if="submitted" class="success-msg">
                Thank you! We've received your message and will be in touch within one business day.
              </div>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info-panel reveal reveal-delay-1">
            <div class="info-section">
              <h3 class="info-title">Get in Touch</h3>
              <div class="info-item">
                <div class="info-icon">
                  <AppIcon name="phone" :size="18" color="var(--green)" />
                </div>
                <div>
                  <div class="info-label">Phone</div>
                  <a href="tel:+16504370150" class="info-value">+1 (650) 437-0150</a>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <AppIcon name="mail" :size="18" color="var(--green)" />
                </div>
                <div>
                  <div class="info-label">Email</div>
                  <a href="mailto:hello@dripcapital.com" class="info-value">hello@dripcapital.com</a>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <AppIcon name="clock" :size="18" color="var(--green)" />
                </div>
                <div>
                  <div class="info-label">Hours</div>
                  <div class="info-value">Mon–Fri, 9AM–6PM PST</div>
                </div>
              </div>
            </div>

            <div class="info-section">
              <h3 class="info-title">Headquarters</h3>
              <div class="info-item">
                <div class="info-icon">
                  <AppIcon name="map-pin" :size="18" color="var(--green)" />
                </div>
                <div>
                  <div class="info-value" style="line-height: 1.8;">
                    228 Hamilton Ave, 3rd Floor<br>
                    Palo Alto, CA 94301<br>
                    United States
                  </div>
                </div>
              </div>
            </div>

            <div class="info-section">
              <h3 class="info-title">Quick Links</h3>
              <NuxtLink to="/products/vendor-financing" class="quick-link">Vendor Financing →</NuxtLink>
              <NuxtLink to="/products/receivable-financing" class="quick-link">Receivables Financing →</NuxtLink>
              <NuxtLink to="/products/line-of-credit" class="quick-link">Line of Credit →</NuxtLink>
              <NuxtLink to="/partner" class="quick-link">Partner Program →</NuxtLink>
            </div>

            <div class="response-promise">
              <div class="rp-icon">
                <AppIcon name="lightning" :size="20" color="var(--green)" />
              </div>
              <div>
                <div class="rp-title">Fast Response</div>
                <div class="rp-desc">We respond to all inquiries within one business day. For urgent matters, call us directly.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Contact Us | Drip Capital' })

const submitted = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  revenue: '',
  product: '',
  message: ''
})

function submitForm() {
  submitted.value = true
  Object.assign(form, {
    firstName: '', lastName: '', email: '', phone: '',
    company: '', revenue: '', product: '', message: ''
  })
  setTimeout(() => { submitted.value = false }, 6000)
}
</script>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 64px;
  align-items: start;
}

.contact-form-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 28px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.success-msg {
  padding: 16px 20px;
  background: rgba(0,194,124,0.1);
  border: 1px solid rgba(0,194,124,0.3);
  border-radius: 8px;
  font-size: 14px;
  color: var(--green-d);
  font-weight: 500;
}

.contact-info-panel {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.info-section {
  padding: 28px;
  background: var(--off);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mid);
  margin-bottom: 4px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.info-icon {
  font-size: 18px;
  width: 24px;
  flex-shrink: 0;
  margin-top: 1px;
}

.info-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--mid);
  margin-bottom: 2px;
}

.info-value {
  font-size: 14px;
  font-weight: 500;
  color: var(--navy);
  text-decoration: none;
  transition: color 0.2s;
}

a.info-value:hover { color: var(--green); }

.quick-link {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
  padding: 6px 0;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s;
}

.quick-link:last-child { border-bottom: none; }
.quick-link:hover { color: var(--green-d); }

.response-promise {
  padding: 20px;
  background: var(--navy);
  border-radius: var(--radius);
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.rp-icon { font-size: 24px; flex-shrink: 0; }
.rp-title { font-size: 14px; font-weight: 700; color: var(--white); margin-bottom: 4px; }
.rp-desc { font-size: 13px; color: rgba(255,255,255,0.64); line-height: 1.6; }

@media (max-width: 768px) {
  .contact-layout { grid-template-columns: 1fr; gap: 40px; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
