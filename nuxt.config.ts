// import eslintPlugin from "vite-plugin-eslint";

const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
  // ssr: false,
  runtimeConfig: {
    public: {
      baseUrl:
        process.env.NODE_ENV === "development" ? process.env.BASE_URL : "/",
      dataUrl:
        process.env.NODE_ENV === "development" ? process.env.DATA_URL : "",
      openaiUrl:
        process.env.NODE_ENV === "development"
          ? process.env.OPENAI_SERVICE_URL
          : "",
    },
    cookieName: process.env.COOKIE_NAME || "__session",
    cookieSecret: process.env.COOKIE_SECRET || "secret",
    cookieExpires: parseInt(
      process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_DAY.toString(),
      10
    ), // 1 day
    cookieRememberMeExpires: parseInt(
      process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(),
      10
    ), // 7 days
  },
  // vite: {
  //   plugins: [eslintPlugin()],
  // },
  // plugins: [require("flowbite/plugin")],
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt",
    [
      "@nuxt/devtools",
      {
        enabled: true,
      },
    ],
    [
      "nuxt-viewport",
      {
        /* Viewport options */
      },
    ],
    [
      "nuxt-swiper",
      {
        // Swiper options
      },
    ],
  ],
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  build: {
    transpile: ["primevue"],
  },
});
