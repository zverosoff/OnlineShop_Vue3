// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  ssr: true,
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    apiSecret: process.env.HASURA_SECRET
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
