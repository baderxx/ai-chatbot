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
        "text-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.9) 16.23%, rgba(255, 255, 255, 0.28) 103.92%)",
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
