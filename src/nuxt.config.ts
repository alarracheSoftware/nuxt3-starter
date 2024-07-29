// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'nuxt3-starter',
      charset: 'utf-8',
      meta: [],
      link: [],
    },
  },

  runtimeConfig: {
    public: {
      environment: process.env.NODE_ENV || 'development',
      version: process.env.VERSION || 'development',
      APIHost: process.env.API_HOST || 'https://api.github.com',
      githubProfileURL: process.env.GITHUB_PROFILE_URL || 'https://github.com/felixleo22',
      githubRepoURL: process.env.GITHUB_REPO_URL || 'https://github.com/alarracheSoftware/nuxt3-starter',
    }
  },

  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],

  build: {
    transpile: ['vuetify'],
  },

  i18n: {
    vueI18n: './config/i18n.js'
  },

  pinia: {
    storesDirs: ['./store/**'],
  },

  plugins: [
    '~/plugins/vuetify',
    '~/plugins/fetch',
  ],

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  compatibilityDate: '2024-07-15',
})