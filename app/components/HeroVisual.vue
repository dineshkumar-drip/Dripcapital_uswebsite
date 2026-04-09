<template>
  <div class="hero-visual">
    <!-- Decorative green gradient blobs -->
    <div class="hv-blob hv-blob-top"></div>
    <div class="hv-blob hv-blob-bottom"></div>

    <!-- Decorative + crosses -->
    <div class="hv-crosses hv-crosses-left">
      <span v-for="i in 20" :key="'l'+i" class="hv-cross">+</span>
    </div>
    <div class="hv-crosses hv-crosses-right">
      <span v-for="i in 16" :key="'r'+i" class="hv-cross">+</span>
    </div>

    <!-- Person circle -->
    <div class="hv-circle-wrap">
      <div class="hv-circle">
        <img src="/hero-person.jpg" alt="Business professional" class="hv-person" />
      </div>
    </div>

    <!-- Floating card: Credit Limit (top-right) -->
    <div class="hv-card hv-card-credit">
      <div class="hv-card-credit-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </div>
      <div class="hv-card-credit-body">
        <span class="hv-card-credit-label">Credit limit increased</span>
        <span class="hv-card-credit-amount">$350,000</span>
      </div>
      <div class="hv-card-credit-badge">
        <span>from</span>
        <strong>Drip Capital</strong>
      </div>
    </div>

    <!-- Floating card: Invoices (bottom-left) -->
    <div class="hv-card hv-card-invoices">
      <div class="hv-card-invoices-title">Your Invoices</div>
      <div class="hv-invoice-row" v-for="inv in invoices" :key="inv.id">
        <span class="hv-invoice-name">{{ inv.name }}</span>
        <span class="hv-invoice-amount">U${{ inv.amount }}</span>
        <span class="hv-invoice-btn">GET FUNDED</span>
      </div>
    </div>

    <!-- Floating card: Approval (bottom-right) -->
    <div class="hv-card hv-card-approved">
      <div class="hv-card-approved-check">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <div class="hv-card-approved-title">Your credit<br>request was<br>approved!</div>
      <div class="hv-card-approved-desc">Your credit line of<br>$230,000 is available in<br>your account.</div>
      <div class="hv-card-approved-btn">Accept offer</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const invoices = [
  { id: 1, name: 'Invoice 1', amount: '140,000' },
  { id: 2, name: 'Invoice 2', amount: '210,000' },
  { id: 3, name: 'Invoice 3', amount: '190,000' },
  { id: 4, name: 'Invoice 4', amount: '70,000' },
]
</script>

<style scoped>
.hero-visual {
  position: relative;
  width: 100%;
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
}

/* ===== Gradient blobs ===== */
.hv-blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.hv-blob-top {
  width: 340px;
  height: 340px;
  top: -40px;
  left: 10%;
  background: radial-gradient(circle, rgba(0,194,124,0.12) 0%, transparent 70%);
}

.hv-blob-bottom {
  width: 280px;
  height: 280px;
  bottom: -20px;
  right: 5%;
  background: radial-gradient(circle, rgba(0,194,124,0.10) 0%, transparent 70%);
}

/* ===== Decorative crosses ===== */
.hv-crosses {
  position: absolute;
  display: grid;
  gap: 20px;
  z-index: 1;
  pointer-events: none;
}

.hv-crosses-left {
  grid-template-columns: repeat(4, 1fr);
  left: -10px;
  top: 30%;
  transform: translateY(-50%);
}

.hv-crosses-right {
  grid-template-columns: repeat(4, 1fr);
  right: -10px;
  bottom: 10%;
}

.hv-cross {
  font-size: 13px;
  font-weight: 400;
  color: rgba(0,194,124,0.35);
  line-height: 1;
  user-select: none;
}

/* ===== Person circle ===== */
.hv-circle-wrap {
  position: relative;
  z-index: 2;
}

.hv-circle-wrap::before {
  content: '';
  position: absolute;
  top: -30px;
  left: -30px;
  right: -30px;
  bottom: -30px;
  border-radius: 50%;
  background: #f0f3f1;
  z-index: -1;
}

.hv-circle {
  position: relative;
  z-index: 2;
  width: 370px;
  height: 370px;
  border-radius: 50%;
  background: #EEF2EF;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.04);
}

.hv-person {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

/* ===== Floating cards base ===== */
.hv-card {
  position: absolute;
  z-index: 3;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06);
  animation: hv-float 3s ease-in-out infinite alternate;
}

@keyframes hv-float {
  0%   { transform: translateY(0px); }
  100% { transform: translateY(-8px); }
}

/* ===== Credit limit card (top-right) ===== */
.hv-card-credit {
  top: -20px;
  right: -15px;
  background: linear-gradient(135deg, #e8faf1 0%, #d4f5e5 100%);
  padding: 18px 22px;
  min-width: 200px;
  animation-delay: 0s;
}

.hv-card-credit-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--green, #00C27C);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.hv-card-credit-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #1a3a2a;
  margin-bottom: 2px;
}

.hv-card-credit-amount {
  display: block;
  font-size: 28px;
  font-weight: 800;
  color: var(--green, #00C27C);
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.hv-card-credit-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  padding: 6px 14px;
  background: #fff;
  border-radius: 100px;
  font-size: 12px;
  color: #555;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}

.hv-card-credit-badge strong {
  color: #0B1F3A;
  font-weight: 700;
}

/* ===== Invoices card (bottom-left) ===== */
.hv-card-invoices {
  bottom: 20px;
  left: -50px;
  background: #0B1F3A;
  padding: 20px 22px;
  min-width: 280px;
  animation-delay: 0.5s;
}

.hv-card-invoices-title {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 14px;
}

.hv-invoice-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 0;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.hv-invoice-row:first-of-type {
  border-top: none;
}

.hv-invoice-name {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,0.65);
  min-width: 68px;
}

.hv-invoice-amount {
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  flex: 1;
}

.hv-invoice-btn {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--green, #00C27C);
  background: rgba(0,194,124,0.15);
  border: 1px solid rgba(0,194,124,0.3);
  border-radius: 5px;
  padding: 4px 10px;
  white-space: nowrap;
}

/* ===== Approved card (bottom-right) ===== */
.hv-card-approved {
  bottom: 80px;
  right: -25px;
  background: linear-gradient(145deg, #e8faf1 0%, #ddf5e8 100%);
  padding: 20px 22px;
  min-width: 180px;
  text-align: center;
  animation-delay: 1s;
}

.hv-card-approved-check {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--green, #00C27C);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
}

.hv-card-approved-title {
  font-size: 16px;
  font-weight: 800;
  color: #c0392b;
  line-height: 1.25;
  margin-bottom: 8px;
}

.hv-card-approved-desc {
  font-size: 11px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 14px;
}

.hv-card-approved-btn {
  display: inline-block;
  padding: 8px 20px;
  background: var(--green, #00C27C);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .hero-visual {
    min-height: 440px;
  }

  .hv-circle {
    width: 300px;
    height: 300px;
  }

  .hv-card-credit {
    right: 0;
    top: 10px;
  }

  .hv-card-invoices {
    left: -15px;
    bottom: 20px;
    min-width: 240px;
  }

  .hv-card-approved {
    right: -10px;
    bottom: 40px;
  }
}

@media (max-width: 768px) {
  .hero-visual {
    min-height: 380px;
  }

  .hv-circle {
    width: 240px;
    height: 240px;
  }

  .hv-card-credit {
    top: -10px;
    right: -5px;
    padding: 14px 16px;
    min-width: 170px;
  }

  .hv-card-credit-amount {
    font-size: 22px;
  }

  .hv-card-invoices {
    left: -10px;
    bottom: 10px;
    min-width: 220px;
    padding: 14px 16px;
  }

  .hv-card-approved {
    display: none;
  }

  .hv-crosses {
    display: none;
  }
}
</style>
