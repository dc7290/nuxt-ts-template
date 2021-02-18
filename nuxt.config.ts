import type { NuxtConfig } from '@nuxt/types'
import tailwindConfig from './tailwind.config'

const title = 'hoge'
const description = 'hogehogehogehogehogehogehogehoge'
const hostname = 'https://hoge.com'

const config: NuxtConfig = {
  target: 'static',

  head: {
    htmlAttrs: { lang: 'ja' },
    titleTemplate: `%s | ${title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      { hid: 'og:site_name', property: 'og:site_name', content: '' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: hostname },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      { hid: 'og:image', property: 'og:image', content: `${hostname}og.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver',
        body: true,
      },
    ],
  },

  loading: {
    color: '',
    height: '3px',
  },

  css: ['~/assets/scss/global/main.scss'],

  plugins: ['~/plugins/api', '~/plugins/$path'],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@aceforth/nuxt-optimized-images',
  ],
  tailwindcss: {
    config: tailwindConfig,
  },
  stylelint: {
    fix: true,
  },
  styleResources: {
    scss: ['~/assets/scss/vars/*.scss'],
  },
  optimizedImages: {
    inlineImageLimit: 2000,
  },

  modules: [
    '@nuxtjs/axios',
    [
      'nuxt-mq',
      {
        defaultBreakpoint: 'sm',
        breakpoints: {
          sm: 560,
          md: 960,
          lg: Infinity,
        },
      },
    ],
    'nuxt-webfontloader',
    ['vue-scrollto/nuxt', { duration: 700, easing: [0.25, 1, 0.5, 1] }],
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  axios: {
    baseURL: 'http://localhost:3000/',
  },
  webfontloader: {
    google: {
      families: ['Montserrat:700'],
    },
  },
  sitemap: {
    hostname,
  },

  build: {
    // analyze: true,
    extractCSS: true,
  },
  srcDir: 'src/',
  server: {
    port: 8000,
    host: '0.0.0.0',
  },
  router: {
    // base: '',
    trailingSlash: true,
  },
}

export default config
