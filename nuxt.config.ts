// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/scss/main.scss"
  ],

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          silenceDeprecations: ["mixed-decls", "import", "global-builtin"],
        },
      },
    },
  },

  nitro: {
    compressPublicAssets: true, // enables gzip and brotli compression
  },

  modules: [
    "humblescroll-nuxt",
    "@nuxt/content",
    "@nuxtjs/device",
    "@nuxtjs/html-validator",
    "@vueuse/nuxt",
    "@pinia/nuxt",
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: "pl",
      },
    },
  },
  htmlValidator: {
    usePrettier: true,
  },
  humbleScroll: {
    repeat: true,
    mirror: true,
  },
});