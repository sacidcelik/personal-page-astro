const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      animationDelay: {
        1: "0s",
        2: "0.3s",
        3: "0.7s",
        4: "1s",
        5: "1.2s",
        6: "1.3s",
        7: "1.4s",
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        appear: "appear 0.5s ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
