/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chalk: "#b8b8b8",
        ice: "#a7aeb4",
        snow: "#dedede",
        orange: "#d98443",
        slate: "#576884",
        steel: {
          DEFAULT: "#29292d",
          low: "rgba(41, 41, 45, 0.5)",
        },
        midnight: {
          DEFAULT: "#24466e",
          low: "rgba(36, 70, 110, 0.5)",
        },
      },
      fontSize: {
        xs: "0.85rem",
        sm: "0.95rem",
        base: "1.25rem",
        lg: "1.5rem",
        xl: "1.75rem",
        "2xl": "1.85rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.4375rem",
        "6xl": "4rem",
        "7xl": "6.25rem",
      },
      fontFamily: {
        zodiak: ["Zodiak", "sans-serif"],
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "300px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        "marquee-start": "marquee-start 50s linear infinite",
      },
      keyframes: {
        "marquee-start": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".heading-lg": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "6rem",
          fontWeight: "normal",
          margin: "2rem",
          fontStyle: "italic",
          lineHeight: "auto",
        },
        ".heading-sm": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "4rem",
          fontWeight: "bold",
        },
        ".subheading-lg": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "2.5rem",
          fontWeight: "400",
        },
        ".subheading-sm": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "3rem",
          fontWeight: "bold",
          lineHeight: "110%",
        },
        ".body-lg": {
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          fontSize: "1.25rem",
          fontWeight: "400",
        },
        ".body-sm": {
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          fontSize: "1rem",
          fontWeight: "400",
        },
        ".word-lg": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "1.2rem",
          fontWeight: "400",
        },
        ".word-sm": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "1.6rem",
          fontWeight: "800",
        },
        ".footer-sm": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "0.8rem",
          fontWeight: "400",
        },
        ".footer-lg": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "2rem",
          fontWeight: "400",
        },
        ".copyright-sm": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "0.7rem",
          fontWeight: "400",
        },
        ".copyright-lg": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "1rem",
          fontWeight: "400",
        },
      });
    }),
  ],
};
