require('dotenv').config();
const { LIFF_CHANNEL_ID, LIFF_ID } = process.env;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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
    script: [{ src: 'https://static.line-scdn.net/liff/edge/2/sdk.js' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [],

  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],

  env: {
    LIFF_CHANNEL_ID,
    LIFF_ID,
  },

  axios: {},

  build: {},
};
