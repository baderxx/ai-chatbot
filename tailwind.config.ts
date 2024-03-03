import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["TT Commons", ...fontFamily.sans],
    },
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
      colors: {
        primary: "#e2e8f0",
        "primary-highlight": "#000",
      },
    },
  },
  plugins: [],
} satisfies Config;
