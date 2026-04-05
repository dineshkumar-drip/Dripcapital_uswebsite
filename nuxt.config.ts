// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Drip Capital | Working Capital for Growing Businesses',
      meta: [
        { name: 'description', content: 'Drip Capital provides fast, flexible working capital: vendor financing, receivables financing, and lines of credit for businesses doing $5M to $500M in annual revenue.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Drip Capital' },
        { property: 'og:title', content: 'Drip Capital | Working Capital for Growing Businesses' },
        { property: 'og:description', content: 'Fast, flexible working capital for US businesses. Vendor financing, receivables financing, and lines of credit. Apply in minutes, funded in 48 hours.' },
        { property: 'og:image', content: 'https://dripcapital.com/og-image.png' },
        { property: 'og:url', content: 'https://dripcapital.com' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@DripCapital' },
        { name: 'twitter:title', content: 'Drip Capital | Working Capital for Growing Businesses' },
        { name: 'twitter:description', content: 'Fast, flexible working capital for US businesses. Vendor financing, receivables financing, and lines of credit. Apply in minutes, funded in 48 hours.' },
        { name: 'twitter:image', content: 'https://dripcapital.com/og-image.png' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'canonical', href: 'https://dripcapital.com' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FinancialService',
            'name': 'Drip Capital',
            'url': 'https://dripcapital.com',
            'logo': 'https://dripcapital.com/logo.png',
            'description': 'Drip Capital provides working capital solutions including vendor financing, receivables financing, and lines of credit for small and medium-sized businesses.',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '228 Hamilton Ave, 3rd Floor',
              'addressLocality': 'Palo Alto',
              'addressRegion': 'CA',
              'postalCode': '94301',
              'addressCountry': 'US'
            },
            'telephone': '+16504370150',
            'email': 'hello@dripcapital.com',
            'sameAs': [
              'https://www.linkedin.com/company/dripcapital',
              'https://twitter.com/DripCapital'
            ],
            'areaServed': 'US',
            'serviceType': ['Vendor Financing', 'Receivables Financing', 'Line of Credit']
          })
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  vite: {
    server: {
      hmr: {
        port: 3334
      }
    }
  }
})
