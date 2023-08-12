export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Portafolio de Pedro Vega'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }]
    }
  },
  modules: [
    // '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  colorMode: {
    classSuffix: ''
  },
  experimental: {
    typedPages: true,
    payloadExtraction: false
  }
})
