export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  // target: "static",

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Momats Fysio",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Momats Fysio"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap"
      }
    ],
    script: [
      {
        src:
          "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
      }
    ]
  },

  /*
   ** Global CSS
   */
  css: [
    "vue-essential-slices/src/styles/styles.scss",
    "styles/main.scss",
    "styles/custom.scss",
    "styles/tailwind.css"
  ],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/tailwindcss"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/prismic",
      {
        endpoint: "https://momatz-web.cdn.prismic.io/api/v2",
        apiOptions: {
          routes: [
            {
              type: "page",
              path: "/:uid"
            }
          ]
        }
      }
    ],
    ["nuxt-sm"]
  ],

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  }
};
