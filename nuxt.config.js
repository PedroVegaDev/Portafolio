export default {
  target: 'static',

  head: {
    titleTemplate: '%s - Pedro Vega',
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
      }
    ]
  },

  css: ['~/assets/scss/variables.scss'],

  plugins: [],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/fontawesome'],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faTimes'],
      brands: [
        'faDev',
        'faGithub',
        'faTwitter',
        'faLinkedin',
        'faFacebook',
        'faInstagram'
      ]
    }
  },

  modules: ['@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/style-resources'],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  pwa: {
    manifest: {
      lang: 'es'
    }
  },

  content: {},

  build: {}
}
