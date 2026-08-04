// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@vueuse/motion/nuxt',
    '@nuxt/content',
    '@formkit/nuxt',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxtjs/robots'
  ],

  css: [
    '~/assets/css/main.css',
  ],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    dataValue: 'theme',
    storageKey: 'nuxt-color-mode'
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: '%s | Muhammad Idrees - Portfolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional portfolio of Muhammad Idrees showcasing projects, skills, and expertise in web development' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Muhammad Idrees Portfolio' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://muhammadidrees.com' }
      ]
    }
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      },
      preload: ['javascript', 'typescript', 'vue', 'html', 'css']
    }
  },

  site: {
    url: 'https://muhammadidrees.com',
    name: 'Muhammad Idrees | Portfolio',
    description: 'Professional portfolio showcasing my projects and skills in web development',
    defaultLocale: 'en'
  },

  nitro: {
    compressPublicAssets: true,
    minify: true
  },

  routeRules: {
    // Cache home page for better performance
    '/': { swr: 60 * 60 },
    // Cache blog content for 1 day
    '/blog/**': { swr: 60 * 60 * 24 },
    // Cache project pages for 1 day
    '/projects/**': { swr: 60 * 60 * 24 }
  },

  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  robots: {
    sitemap: '/sitemap.xml'
  }
})