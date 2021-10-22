export default {
  head: {
    title: 'ミズオンライン問診票',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api/module'],

  generate: {
    interval: 2000,
  },

  watchers: {
    webpack: {
      poll: true,
    },
  },

  modules: ['@nuxtjs/axios'],

  axios: {},

  build: {},
};
