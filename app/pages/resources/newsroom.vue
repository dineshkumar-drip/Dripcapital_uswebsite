<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Resources</span>
        <h1>Newsroom</h1>
        <p>Latest press releases, media coverage, and company announcements from Drip Capital.</p>
      </div>
    </section>

    <!-- Featured News -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="eyebrow">Latest News</span>
          <h2 class="section-title">Press &amp; Announcements</h2>
        </div>
        <div class="news-featured reveal">
          <div class="news-featured-content">
            <div class="news-date">March 15, 2026</div>
            <span class="news-category-tag">Press Release</span>
            <h2 class="news-featured-title">Drip Capital Surpasses $9 Billion in Trade Finance Funded</h2>
            <p class="news-featured-excerpt">Drip Capital, the leading technology-driven trade finance platform for SMBs, today announced it has surpassed $9 billion in total capital deployed to over 10,000 businesses across the United States and India.</p>
            <a href="#" class="btn btn-primary">Read Press Release →</a>
          </div>
          <div class="news-featured-meta">
            <div class="meta-item">
              <span class="meta-label">Founded</span>
              <span class="meta-value">2015</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Total Financed</span>
              <span class="meta-value">$9B+</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Businesses Served</span>
              <span class="meta-value">10,000+</span>
            </div>
          </div>
        </div>

        <div class="news-grid">
          <article class="news-card reveal" v-for="(article, i) in newsArticles" :key="i" :class="`reveal-delay-${i % 3}`">
            <div class="news-card-top">
              <span class="news-category-tag" :class="article.categoryClass">{{ article.category }}</span>
              <span class="news-date">{{ article.date }}</span>
            </div>
            <h3 class="news-title">{{ article.title }}</h3>
            <p class="news-excerpt">{{ article.excerpt }}</p>
            <a href="#" class="news-read-more">Read more →</a>
          </article>
        </div>
      </div>
    </section>

    <!-- Media Contact -->
    <section class="section section-bg">
      <div class="container">
        <div class="media-contact reveal">
          <div>
            <span class="eyebrow">Media Inquiries</span>
            <h2 class="section-title">Press contact</h2>
            <p class="section-subtitle">For press inquiries, interview requests, or media kit access, please reach out to our communications team.</p>
          </div>
          <div class="media-contact-info">
            <div class="mci-item">
              <span class="mci-label">Press Email</span>
              <a href="mailto:press@dripcapital.com" class="mci-value">press@dripcapital.com</a>
            </div>
            <div class="mci-item">
              <span class="mci-label">Phone</span>
              <a href="tel:+16504370150" class="mci-value">+1 (650) 437-0150</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Newsroom | Drip Capital' })

const newsArticles = [
  { category: 'Funding', categoryClass: 'tag-green', date: 'January 8, 2026', title: 'Drip Capital Closes $200M Credit Facility with TD Bank', excerpt: 'The new facility expands Drip Capital\'s lending capacity to serve more US mid-market businesses seeking working capital solutions.' },
  { category: 'Product', categoryClass: 'tag-blue', date: 'November 20, 2025', title: 'Drip Capital Launches Flex Line of Credit for US Businesses', excerpt: 'New revolving credit product gives businesses on-demand access to working capital for any business need, with no fixed repayment schedule.' },
  { category: 'Award', categoryClass: 'tag-gold', date: 'September 5, 2025', title: 'Drip Capital Named to Forbes Fintech 50', excerpt: 'Drip Capital recognized among the 50 most innovative fintech companies transforming financial services for small and mid-sized businesses.' },
  { category: 'Partnership', categoryClass: 'tag-purple', date: 'July 14, 2025', title: 'Drip Capital Partners with SMBC for Asia Trade Finance', excerpt: 'Strategic partnership with Sumitomo Mitsui Banking Corporation expands trade finance capabilities for US-Asia business corridors.' },
  { category: 'Press Release', categoryClass: '', date: 'April 22, 2025', title: 'Drip Capital Crosses $7B in Total Capital Deployed', excerpt: 'Milestone reached as demand for alternative working capital solutions continues to grow among US SMBs.' },
  { category: 'Media', categoryClass: 'tag-navy', date: 'February 3, 2025', title: 'TechCrunch: "Drip Capital is Transforming Trade Finance for SMBs"', excerpt: 'Feature story on how Drip Capital\'s technology-driven approach is giving growing businesses access to institutional-quality financing.' }
]
</script>

<style scoped>
.news-featured {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 48px;
  padding: 40px;
  background: var(--navy);
  border-radius: 16px;
  margin-bottom: 40px;
  align-items: center;
}

.news-date {
  font-size: 12px;
  color: var(--mid);
  font-weight: 500;
  margin-bottom: 8px;
}

.news-featured .news-date { color: rgba(255,255,255,0.48); }

.news-category-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--green);
  background: rgba(0,194,124,0.15);
  padding: 3px 10px;
  border-radius: 4px;
  margin-bottom: 16px;
}

.news-featured-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--white);
  line-height: 1.3;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.news-featured-excerpt {
  font-size: 15px;
  color: rgba(255,255,255,0.68);
  line-height: 1.7;
  margin-bottom: 24px;
}

.news-featured-meta {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  background: rgba(255,255,255,0.06);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
}

.meta-label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.36);
  margin-bottom: 4px;
}

.meta-value {
  font-size: 22px;
  font-weight: 900;
  color: var(--white);
  letter-spacing: -0.02em;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.news-card {
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: box-shadow 0.2s, transform 0.2s;
}

.news-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.news-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-green { color: var(--green-d); background: rgba(0,194,124,0.1); }
.tag-blue { color: #1E6BC8; background: rgba(30,107,200,0.1); }
.tag-gold { color: #C78A1E; background: rgba(199,138,30,0.1); }
.tag-purple { color: #7C4DDE; background: rgba(124,77,222,0.1); }
.tag-navy { color: var(--navy); background: var(--off2); }

.news-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.4;
  margin-bottom: 10px;
}

.news-excerpt {
  font-size: 13px;
  color: var(--body);
  line-height: 1.6;
  margin-bottom: 16px;
}

.news-read-more {
  font-size: 13px;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
}

.news-read-more:hover { color: var(--green-d); }

.media-contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  padding: 48px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
}

.media-contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mci-item { display: flex; flex-direction: column; gap: 4px; }
.mci-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--mid); }
.mci-value { font-size: 16px; font-weight: 600; color: var(--green); text-decoration: none; }
.mci-value:hover { color: var(--green-d); }

@media (max-width: 768px) {
  .news-featured { grid-template-columns: 1fr; }
  .news-grid { grid-template-columns: 1fr; }
  .media-contact { grid-template-columns: 1fr; gap: 32px; padding: 28px; }
}
</style>
