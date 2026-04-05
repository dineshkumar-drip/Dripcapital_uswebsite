<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Resources</span>
        <h1>Blog</h1>
        <p>Insights, analysis, and stories about trade finance, working capital, and what it takes to grow a successful business.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Category Filter -->
        <div class="category-filter reveal">
          <button
            v-for="cat in categories"
            :key="cat"
            class="filter-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Featured Post -->
        <div class="blog-featured reveal" v-if="featuredPost">
          <div class="blog-featured-img">
            <img :src="featuredPost.img" :alt="featuredPost.title" />
          </div>
          <div class="blog-featured-content">
            <span class="blog-category-tag">{{ featuredPost.category }}</span>
            <h2 class="blog-featured-title">{{ featuredPost.title }}</h2>
            <p class="blog-featured-excerpt">{{ featuredPost.excerpt }}</p>
            <div class="blog-meta">
              <span class="blog-author">By {{ featuredPost.author }}</span>
              <span class="blog-dot">·</span>
              <span class="blog-date">{{ featuredPost.date }}</span>
              <span class="blog-dot">·</span>
              <span class="blog-read">{{ featuredPost.readTime }} read</span>
            </div>
            <a href="#" class="btn btn-primary mt-24">Read Article →</a>
          </div>
        </div>

        <!-- Blog Grid -->
        <div class="blog-grid">
          <article class="blog-card reveal" v-for="(post, i) in filteredPosts" :key="i" :class="`reveal-delay-${i % 3}`">
            <div class="blog-card-img">
              <img :src="post.img" :alt="post.title" loading="lazy" />
            </div>
            <div class="blog-card-body">
              <span class="blog-category-tag blog-category-tag-sm">{{ post.category }}</span>
              <h3 class="blog-card-title">{{ post.title }}</h3>
              <p class="blog-card-excerpt">{{ post.excerpt }}</p>
              <div class="blog-meta">
                <span class="blog-date">{{ post.date }}</span>
                <span class="blog-dot">·</span>
                <span class="blog-read">{{ post.readTime }} read</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Blog | Drip Capital' })

const activeCategory = ref('All')

const categories = ['All', 'Working Capital', 'Trade Finance', 'Business Growth', 'Industry Insights']

const featuredPost = {
  img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
  category: 'Business Growth',
  title: 'How Mid-Market Businesses Can Use Working Capital to Outperform the Competition',
  excerpt: 'In today\'s competitive landscape, businesses that can move faster: paying suppliers sooner, fulfilling larger orders, and stocking up ahead of demand. Businesses that do this consistently outperform those that can\'t. Working capital is the engine that powers that speed.',
  author: 'Drip Capital Team',
  date: 'March 20, 2026',
  readTime: '8 min'
}

const allPosts = [
  { img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80', category: 'Working Capital', title: '5 Signs Your Business Has a Working Capital Problem', excerpt: 'Recognizing the early warning signs of a cash flow problem can help you address it before it threatens operations.', date: 'March 10, 2026', readTime: '5 min' },
  { img: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80', category: 'Industry Insights', title: 'Seafood Import Finance: A Deep Dive', excerpt: 'The unique challenges facing seafood importers and how modern trade finance tools are reshaping the industry.', date: 'February 28, 2026', readTime: '7 min' },
  { img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80', category: 'Trade Finance', title: 'Invoice Factoring vs. Receivables Financing: What\'s the Difference?', excerpt: 'These two products sound similar but work very differently. Here\'s what you need to know before choosing.', date: 'February 14, 2026', readTime: '6 min' },
  { img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80', category: 'Industry Insights', title: 'Agricultural Finance in 2026: Trends and Outlook', excerpt: 'How agri-food businesses are navigating rising input costs, supply chain volatility, and changing buyer dynamics.', date: 'January 30, 2026', readTime: '9 min' },
  { img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80', category: 'Business Growth', title: 'How to Negotiate Better Supplier Payment Terms', excerpt: 'Practical strategies to extend your DPO and preserve cash, without damaging your supplier relationships.', date: 'January 18, 2026', readTime: '6 min' },
  { img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80', category: 'Working Capital', title: 'The Cash Conversion Cycle: Your Most Important Financial Metric', excerpt: 'Understanding your CCC and how to optimize it can transform your business\'s capital efficiency and growth potential.', date: 'January 5, 2026', readTime: '10 min' }
]

const filteredPosts = computed(() => {
  if (activeCategory.value === 'All') return allPosts
  return allPosts.filter(p => p.category === activeCategory.value)
})
</script>

<style scoped>
.category-filter {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.filter-btn {
  padding: 8px 16px;
  border: 1.5px solid var(--border);
  border-radius: 100px;
  background: var(--white);
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: var(--body);
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: var(--green);
  color: var(--green);
}

.filter-btn.active {
  background: var(--navy);
  border-color: var(--navy);
  color: var(--white);
}

.blog-featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 40px;
  align-items: center;
}

.blog-featured-img {
  height: 400px;
  overflow: hidden;
}

.blog-featured-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-featured-content {
  padding: 40px;
}

.blog-category-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--green-d);
  background: rgba(0,194,124,0.1);
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 16px;
}

.blog-category-tag-sm {
  font-size: 10px;
  margin-bottom: 8px;
}

.blog-featured-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.3;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.blog-featured-excerpt {
  font-size: 15px;
  color: var(--body);
  line-height: 1.7;
  margin-bottom: 16px;
}

.blog-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.blog-author, .blog-date, .blog-read {
  font-size: 12px;
  color: var(--mid);
}

.blog-dot { color: var(--border); }

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.blog-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
}

.blog-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.blog-card-img {
  height: 180px;
  overflow: hidden;
}

.blog-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.blog-card:hover .blog-card-img img {
  transform: scale(1.05);
}

.blog-card-body {
  padding: 20px;
}

.blog-card-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.4;
  margin-bottom: 8px;
}

.blog-card-excerpt {
  font-size: 13px;
  color: var(--body);
  line-height: 1.6;
  margin-bottom: 12px;
}

@media (max-width: 768px) {
  .blog-featured { grid-template-columns: 1fr; }
  .blog-featured-img { height: 220px; }
  .blog-featured-content { padding: 24px; }
  .blog-grid { grid-template-columns: 1fr; }
}
</style>
