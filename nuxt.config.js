import global from './utils/global'
import getSiteMeta from './utils/getSiteMeta'
import getRoutes from './utils/getRoutes'

export default {
  target: 'static',

  head: {
    title: global.siteTitle || 'Rio',
    meta: [
      ...getSiteMeta(),
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || ''
      },
      { property: 'og:site_name', content: global.siteName || '' },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || ''
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: global.siteName || '' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: global.favicon || '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      }
    ]
  },

  css: [
    '~assets/styles/main.scss'
  ],

  plugins: [
    '~/plugins/directives'
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],

  modules: [
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://kmacoders.github.io',
    routes () {
      return getRoutes()
    }
  },
  styleResources: {
    scss: ['~assets/styles/utils/_utils-dir.scss']
  },

  axios: {},

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  content: {
    markdown: {
      prism: {
        theme: 'prismjs/themes/prism-tomorrow.css'
      }
    }
  },

  build: {
  },
  publicRuntimeConfig: {
    baseUrl: global.siteUrl
  },

  /**
   *  body content of a Markdown file before it is transformed into AST JSON,
   *  you can use it at this point but it is not returned by the API.
   */
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.contentBeforeJson = document.text
      }
    }
  }
}
