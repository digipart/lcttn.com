// https://nuxt.com/docs/api/configuration/nuxt-config
import routesI18N from './i18n/routesI18N';
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/fr': { prerender: true },
    '/en': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  // This explicitly tells Nuxt how to handle Tailwind v4 via PostCSS
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  // Enable Nuxt 4 features
  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/tuk5oqo.css'
        }
      ]
    }
  },

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    customRoutes: 'config',
    pages: routesI18N,
    // CRITICAL: Disable browser language detection
    detectBrowserLanguage: false,

    // Force French on root path
    differentDomains: false,
  },

})