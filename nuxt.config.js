export default {
  head: {
    title: 'Nuxt.js Tailwind and TypeScript Starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  css: [],
  plugins: [
    '~/plugins/sleep'
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],
  modules: [],

  build: {},

  serverMiddleware: [
    '~/api'
  ]
}
