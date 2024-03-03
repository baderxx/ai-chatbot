import i18nConfig from "./config/i18n";

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: process.env.NODE_ENV !== "production" && true },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: { config: "./tailwind.config.ts" },
      autoprefixer: {},
      ...(process.env.NODE_ENVIRONMENT === "production" ? { cssnano: {} } : {}),
    },
  },
  modules: [
    [
      "@nuxtjs/i18n",
      {
        ...i18nConfig,
        vueI18n: "./i18n.config.ts",
        baseUrl: process.env.SITE_URL,
      },
    ],
  ],
  routeRules: {
    // #TODO: add proper type here
    ...(["/"].map((routeItem) => ({
      [routeItem]: { prerender: true },
    })) as any),
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
});
