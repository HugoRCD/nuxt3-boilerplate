export default defineNuxtConfig({
  app: {
    layoutTransition: {
      name: "fade",
      mode: "out-in",
    },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },

  routeRules: {
    "/": { isr: true, prerender: true },
  },

  css: ["~/assets/style/main.scss"],

  imports: {
    dirs: ["store"],
  },

  devtools: { enabled: true },

  runtimeConfig: {
    private: {
      resendApiKey: process.env.RESEND_API_KEY,
    },
  },

  modules: [
    "nuxt-headlessui",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxthq/ui",
    "nuxt-svgo",
    "@nuxt/image",
  ],

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    storageKey: 'nuxt-starter-color-mode',
  },

  i18n: {
    strategy: "no_prefix",
    detectBrowserLanguage: {
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'fr',
        iso: 'fr-FR'
      }
    ],
    baseUrl: 'https://nuxt-starter.com',
    vueI18n: "~/i18n.config.ts",
  },

  image: {
    format: ["webp"],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml"],
    },
  },

  svgo: {
    autoImportPath: "./assets/logo/",
  },

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
});
