import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

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
      environment: process.env.ENVIRONMENT || 'dev',
      version: process.env.VERSION || 'dev',
      APIHost: process.env.API_HOST || 'https://api.github.com',
      githubProfileURL: process.env.GITHUB_PROFILE_URL || 'https://github.com/felixleo22',
      githubRepoURL: process.env.GITHUB_REPO_URL || 'https://github.com/alarracheSoftware/nuxt3-starter',
    }
  },

  devtools: { enabled: false },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],

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