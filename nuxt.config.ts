// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  experimental: {

    inlineSSRStyles: false
  },

  build: {
    transpile: [
      'tslib',

    ],
  },
  modules: ["@nuxt/ui", '@nuxt/content', '@nuxtjs/apollo', "@nuxt/image", 'nuxt-icon'],


  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: 'nord',
      //preload: ['ts', 'js', 'css', 'java', 'json', 'bash', 'vue']
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://mainportfolio.hasura.app/v1/graphql',
      }
    },
  },
  image: {
    format: ['avif', 'webp'],
    quality: 80,
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/doifglnsi/image/upload'
    }
  },
  app: {

    head: {
      meta: [
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        },
        {
          rel: 'stylesheet',
          href: '/assets/theme-c.css'
        }

      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
})