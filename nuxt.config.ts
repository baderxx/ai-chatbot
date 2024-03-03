// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== "production" && true },
  css: [
    "@/assets/css/main.css"
  ],
})
