// https://nuxt.com/docs/api/configuration/nuxt-config
import viteCompression from 'vite-plugin-compression';

export default defineNuxtConfig({
  ssr: false,
  css: [
    "~/assets/scss/main.scss"
  ],
  components: {
    dirs: [
      { path: '~/components', extensions: ['vue'], global: false },
    ],
  },
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
    build: {
      minify: 'esbuild',
      rollupOptions: {
        treeshake: true,
        output: {
          manualChunks: {
            vueuse: ['@vueuse/core', '@vueuse/components'],
          },
        },
      },
    },
    plugins: [
      viteCompression({
        algorithm: 'brotliCompress', // Enable Brotli compression
        ext: '.br', // Use .br file extension for Brotli
        threshold: 0, // Compress all files
      }),
    ],
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