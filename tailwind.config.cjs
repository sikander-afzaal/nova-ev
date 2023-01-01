const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      title: "3rem",
      "5xl": "3.052rem",
    },
    extend: {
      boxShadow: {
        work: "5px 5px 24px rgba(0, 0, 0, 0.05)",
        product: "10px 10px 208px rgba(0, 0, 0, 0.06)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "work-pattern": "url('/work-bg.png')",
        "question-pattern": "url('/question-bg.png')",
      },
      screens: {
        mid: "1400px",
      },
      maxWidth: {
        theme: "1400px",
      },
      colors: {
        darkGreen: "#03B664",
        brightYellow: "#FFC337",
        titleBlack: "#1E2736",
        text: "#999999",
      },
    },
  },
  plugins: [],
};
