/** @type {import('tailwindcss').Config} */

import { transform } from "esbuild";

const plugin = require("tailwindcss/plugin");
const aspectRatio = require("@tailwindcss/aspect-ratio");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chalk: "#b8b8b8",
        ice: "#a7aeb4",
        snow: {
          DEFAULT: "#FAFAFA",
          low: "rgba(222, 222, 222, 0.8)",
        },
        orange: "#F48734",
        purple: "#7656CD",
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
      },
      screens: {
        sm: "300px",
        s: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        "marquee-start": "marquee-start 50s linear infinite",
        "slide-horizontal": "slide-horizontal 20s linear infinite",
        scroll: "scroll 20s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        "marquee-start": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-90%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "slide-horizontal": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
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
          lineHeight: "100%",
        },
        ".heading-sm": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "4rem",
          fontWeight: "bold",
          lineHeight: "60px",
        },
        ".subheading-lg": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "4rem",
          fontWeight: "600",
        },
        ".subheading-sm": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "2.5rem",
          fontWeight: "600",
          lineHeight: "120%",
        },
        ".subheading-alt-lg": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "2rem",
          fontWeight: "400",
          lineHeight: "110%",
        },
        ".subheading-alt-sm": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "1.5rem",
          fontWeight: "400",
          lineHeight: "140%",
        },
        ".excerpt-lg": {
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          fontSize: "1.6rem",
          fontWeight: "400",
          lineHeight: "120%",
        },
        ".excerpt-sm": {
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          fontSize: "1.4rem",
          fontWeight: "400",
          lineHeight: "150%",
        },
        ".body-lg": {
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          fontSize: "1.2rem",
          fontWeight: "400",
          lineHeight: "160%",
        },
        ".body-sm": {
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          fontSize: "1.1rem",
          fontWeight: "400",
          lineHeight: "160%",
        },
        ".body-alt-lg": {
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          fontSize: "1.2rem",
          fontWeight: "400",
        },
        ".body-alt-sm": {
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          fontSize: "0.9rem",
          fontWeight: "400",
        },
        ".word-lg": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "1rem",
          fontWeight: "400",
        },
        ".word-md": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "1rem",
          fontWeight: "400",
        },
        ".word-sm": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "1.8rem",
          fontWeight: "900",
        },
        ".footer-sm": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "0.8rem",
          fontWeight: "400",
        },
        ".footer-lg": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "1rem",
          fontWeight: "400",
        },
        ".copyright-sm": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "0.7rem",
          fontWeight: "400",
          lineHeight: "150%",
        },
        ".copyright-lg": {
          fontFamily: theme("fontFamily.zodiak"),
          fontSize: "0.8rem",
          fontWeight: "400",
        },
        ".photocred-sm": {
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          fontSize: "0.5rem",
          fontWeight: "400",
        },
        ".photocred-lg": {
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          fontSize: "0.6rem",
          fontWeight: "400",
        },
      });
    }),
    aspectRatio,
    require("tailwindcss-motion"),
    require("tailwindcss-intersect"),
  ],
};
