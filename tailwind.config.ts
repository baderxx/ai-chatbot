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
      sans: ["Mier A", ...fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        "login-gradient":
          "conic-gradient(from 202.48deg at 81.78% 23.22%, #4629F2 0deg, #13C6FF 125.63deg, #B94DFB 215.62deg, #FF53EE 294.38deg, #F3B960 360deg)",
      },
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
