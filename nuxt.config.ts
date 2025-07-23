// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
      baseURL: "/anime-komic/",
      buildAssetsDir: "assets",
    },
  
    nitro: {
      preset: "static",
      prerender: {
        ignore: ['/about',],
      },
    },
})