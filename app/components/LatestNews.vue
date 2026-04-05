<template>
  <section class="news-section">
    <div class="container">

      <div class="news-header reveal">
        <div class="news-header-left">
          <span class="eyebrow">Latest from Drip Capital</span>
          <h2 class="news-title">News &amp; insights</h2>
        </div>
        <div class="news-header-right">
          <NuxtLink to="/resources/newsroom" class="news-see-all">
            See all news
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
        </div>
      </div>

      <div class="news-grid">

        <!-- Featured (wide) article -->
        <article class="news-card news-card-featured reveal">
          <div class="news-card-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
              alt="Drip Capital surpasses $9 billion"
              class="news-card-img"
              loading="lazy"
            />
            <span class="news-tag news-tag-press">Press Release</span>
          </div>
          <div class="news-card-body">
            <div class="news-card-meta">
              <span class="news-date">March 15, 2026</span>
            </div>
            <h3 class="news-card-title">Drip Capital Surpasses $9 Billion in Trade Finance Funded</h3>
            <p class="news-card-excerpt">Drip Capital has deployed over $9 billion to more than 10,000 US and international businesses, cementing its position as the leading tech-driven working capital platform for SMBs.</p>
            <NuxtLink to="/resources/newsroom" class="news-card-link">
              Read more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </div>
        </article>

        <!-- Secondary articles column -->
        <div class="news-secondary">

          <article class="news-card-small reveal reveal-delay-1" v-for="(item, i) in secondaryNews" :key="i">
            <div class="news-small-top">
              <span class="news-tag" :class="item.tagClass">{{ item.tag }}</span>
              <span class="news-date">{{ item.date }}</span>
            </div>
            <h3 class="news-small-title">{{ item.title }}</h3>
            <p class="news-small-excerpt">{{ item.excerpt }}</p>
            <NuxtLink :to="item.link" class="news-card-link">
              Read more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </article>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const secondaryNews = [
  {
    tag: 'Blog',
    tagClass: 'news-tag-blog',
    date: 'February 28, 2026',
    title: 'How US Importers Can Stop Waiting 90 Days to Get Paid',
    excerpt: 'Receivables financing is changing the game for importers stuck in long payment cycles. Here is how it works in practice.',
    link: '/resources/blog'
  },
  {
    tag: 'Guide',
    tagClass: 'news-tag-guide',
    date: 'January 20, 2026',
    title: 'Vendor Financing vs. Traditional Credit Lines: What Works for Growing Businesses',
    excerpt: 'A practical breakdown of both options so you can choose what fits your business right now, not five years from now.',
    link: '/resources/finance-guides'
  }
]
</script>

<style scoped>
.news-section {
  padding: 80px 0;
  background: var(--white);
  border-top: 1px solid var(--border);
}

/* Header */
.news-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 40px;
  gap: 24px;
}

.news-title {
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 300;
  color: var(--navy);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 8px 0 0;
}

.news-see-all {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: var(--green-d);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s;
  padding-bottom: 4px;
}

.news-see-all:hover {
  color: var(--navy);
}

/* Grid layout */
.news-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

/* Featured card */
.news-card-featured {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s, transform 0.2s;
}

.news-card-featured:hover {
  box-shadow: 0 8px 32px rgba(11,31,58,0.09);
  transform: translateY(-2px);
}

.news-card-img-wrap {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.news-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.news-card-featured:hover .news-card-img {
  transform: scale(1.03);
}

.news-card-body {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-card-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.news-card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.35;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}

.news-card-excerpt {
  font-size: 14px;
  color: var(--body);
  line-height: 1.65;
  flex: 1;
  margin-bottom: 18px;
}

/* Tags */
.news-tag {
  display: inline-block;
  padding: 3px 9px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.news-tag-press {
  background: rgba(11,31,58,0.08);
  color: var(--navy);
}

.news-tag-blog {
  background: rgba(0,194,124,0.1);
  color: var(--green-d);
}

.news-tag-guide {
  background: rgba(27,95,160,0.1);
  color: #1B5FA0;
}

/* Featured tag positioned on photo */
.news-card-img-wrap .news-tag {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(11,31,58,0.82);
  color: white;
  backdrop-filter: blur(4px);
}

/* Read more link */
.news-card-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-weight: 600;
  color: var(--green-d);
  text-decoration: none;
  transition: color 0.2s;
  margin-top: auto;
}

.news-card-link:hover {
  color: var(--navy);
}

/* Secondary articles */
.news-secondary {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.news-card-small {
  background: var(--off);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 22px 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.news-card-small:hover {
  box-shadow: 0 6px 24px rgba(11,31,58,0.08);
  transform: translateY(-1px);
}

.news-small-top {
  display: flex;
  align-items: center;
  gap: 10px;
}

.news-date {
  font-size: 11px;
  color: var(--mid);
  font-weight: 500;
}

.news-small-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.news-small-excerpt {
  font-size: 13px;
  color: var(--body);
  line-height: 1.6;
  flex: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .news-section {
    padding: 56px 0;
  }

  .news-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }

  .news-card-img-wrap {
    height: 180px;
  }
}
</style>
