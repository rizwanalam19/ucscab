export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Welcome to UCS Cab",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // MDB
      {
        href: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.1/mdb.min.css",
        rel: "stylesheet",
      },
      // font awesome
      {
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css",
        rel: "stylesheet",
      },

      // font
      {
        href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap",
        rel: "stylesheet",
      },

      // vue tiny slider
      {
        href: "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css",
        rel: "stylesheet",
      },
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.1/mdb.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "~/assets/main.js",
        type: "text/javascript",
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vue-tiny-slider.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/image"],

  // image preset
  image: {
    presets: {
      cover: {
        modifiers: {
          format: "webp",
          loading: "lazy",
        },
      },
    },
  },

  // 404 fallback
  generate: { fallback: "404.html" },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/sitemap", "@nuxtjs/axios"],

  // sitemap
  sitemap: {
    hostname: "https://ucscab.com/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
