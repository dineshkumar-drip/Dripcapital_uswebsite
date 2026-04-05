<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand">
            <NuxtLink to="/" class="footer-logo-link" aria-label="Drip Capital">
              <img src="/logo.png" alt="Drip Capital" class="footer-logo-img" />
            </NuxtLink>
            <p class="footer-tagline">Working Capital for Growing Businesses</p>
            <p class="footer-desc">
              We help businesses with $5M–$500M in annual revenue access fast, flexible capital. No collateral required.
            </p>

            <!-- Email CTA -->
            <div class="footer-email-form">
              <div class="input-row">
                <input type="email" placeholder="your@email.com" v-model="emailInput" />
                <button class="btn btn-primary btn-sm" @click="handleEmail">Let's talk</button>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="footer-contact">
              <div class="contact-item">
                <span class="contact-icon">📞</span>
                <a href="tel:+16504370150">+1 (650) 437-0150</a>
              </div>
              <div class="contact-item">
                <span class="contact-icon">✉</span>
                <a href="mailto:hello@dripcapital.com">hello@dripcapital.com</a>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                <span>228 Hamilton Ave, 3rd Floor, Palo Alto, CA 94301</span>
              </div>
            </div>
          </div>

          <!-- Products Column -->
          <div class="footer-col">
            <h4 class="footer-col-title">Products</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/products/vendor-financing">Vendor Financing</NuxtLink></li>
              <li><NuxtLink to="/products/receivable-financing">Receivables Financing</NuxtLink></li>
              <li><NuxtLink to="/products/line-of-credit">Line of Credit</NuxtLink></li>
            </ul>
            <h4 class="footer-col-title" style="margin-top: 28px;">Industry</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/industry/manufacturing">Manufacturing</NuxtLink></li>
              <li><NuxtLink to="/industry/wholesale">Wholesale</NuxtLink></li>
              <li><NuxtLink to="/industry/agri-food">Agri-Products</NuxtLink></li>
              <li><NuxtLink to="/industry/consumer-goods">Consumer Goods</NuxtLink></li>
              <li><NuxtLink to="/industry/seafood">Seafood</NuxtLink></li>
            </ul>
          </div>

          <!-- Company Column -->
          <div class="footer-col">
            <h4 class="footer-col-title">Company</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/company/about">About Us</NuxtLink></li>
              <li><NuxtLink to="/company/investors">Our Investors</NuxtLink></li>
              <li><NuxtLink to="/resources/use-cases">Case Studies</NuxtLink></li>
              <li><NuxtLink to="/partner">Partner Program</NuxtLink></li>
              <li><NuxtLink to="/company/contact">Contact Us</NuxtLink></li>
            </ul>
          </div>

          <!-- Resources Column -->
          <div class="footer-col">
            <h4 class="footer-col-title">Resources</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/resources/finance-guides">Finance Guides</NuxtLink></li>
              <li><NuxtLink to="/resources/newsroom">Newsroom</NuxtLink></li>
              <li><NuxtLink to="/resources/blog">Blog</NuxtLink></li>
              <li><NuxtLink to="/resources/use-cases">Use Cases</NuxtLink></li>
              <li><NuxtLink to="/">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="/">Terms of Service</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-inner">
          <p class="footer-copy">
            &copy; {{ currentYear }} Drip Capital Inc. All rights reserved.
          </p>
          <div class="footer-backers">
            <span class="backers-label">Backed by:</span>
            <span class="backer">Accel</span>
            <span class="backer-dot">·</span>
            <span class="backer">Barclays</span>
            <span class="backer-dot">·</span>
            <span class="backer">East West Bank</span>
            <span class="backer-dot">·</span>
            <span class="backer">IFC · World Bank</span>
            <span class="backer-dot">·</span>
            <span class="backer">Sequoia</span>
            <span class="backer-dot">·</span>
            <span class="backer">Y Combinator</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const emailInput = ref('')

const currentYear = computed(() => new Date().getFullYear())

function handleEmail() {
  if (emailInput.value) {
    navigateTo('/company/contact')
  }
}
</script>

<style scoped>
.footer {
  background: var(--navy);
  color: rgba(255, 255, 255, 0.72);
}

.footer-main {
  padding: 72px 0 48px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1.2fr 1fr 1fr;
  gap: 48px;
}

/* Brand */
.footer-logo-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 12px;
}

.footer-logo-img {
  height: 28px;
  width: auto;
  filter: brightness(0) invert(1);
}

.footer-tagline {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 12px;
}

.footer-desc {
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.56);
  max-width: 320px;
  margin-bottom: 24px;
}

.footer-email-form {
  margin-bottom: 28px;
}

.footer-email-form .input-row input {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.16);
  color: var(--white);
}

.footer-email-form .input-row input::placeholder {
  color: rgba(255, 255, 255, 0.36);
}

.footer-email-form .input-row input:focus {
  border-color: var(--green);
  background: rgba(255, 255, 255, 0.12);
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  line-height: 1.5;
}

.contact-icon {
  font-size: 14px;
  margin-top: 1px;
  flex-shrink: 0;
}

.contact-item a {
  color: rgba(255, 255, 255, 0.64);
  text-decoration: none;
  transition: color 0.2s;
}

.contact-item a:hover {
  color: var(--green);
}

.contact-item span {
  color: rgba(255, 255, 255, 0.48);
}

/* Columns */
.footer-col-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--white);
  margin-bottom: 16px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
}

.footer-links a {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.56);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--green);
}

/* Bottom Bar */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 0;
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-copy {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.40);
}

.footer-backers {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}

.backers-label {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.36);
  letter-spacing: 0.04em;
  margin-right: 4px;
}

.backer {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.48);
}

.backer-dot {
  color: rgba(255, 255, 255, 0.24);
  font-size: 12px;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer-main {
    padding: 48px 0 32px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-brand {
    grid-column: auto;
  }

  .footer-bottom-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-backers {
    gap: 4px;
  }
}
</style>
