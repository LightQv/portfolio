/** @type {import('tailwindcss').Config} */
const scrollbar = require("tailwind-scrollbar-hide");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["var(--main-font)"],
      },
      colors: {
        mustard: ["var(--medium-yellow)"],
        redly: ["var(--red)"],
      },
      boxShadow: {
        "3xl": "-1rem 0 2.5rem rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [scrollbar],
};
