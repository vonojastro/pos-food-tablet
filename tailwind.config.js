// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Gotham-Book", ...defaultTheme.fontFamily.sans],
      "sans-medium": ["Gotham-Medium"],
      "sans-bold": ["Gotham-Bold"],
    },
    extend: {
      theme: {
        fontFamily: {
          sans: ["Gotham-Book", ...defaultTheme.fontFamily.sans],
          "sans-medium": ["Gotham-Medium"],
          "sans-bold": ["Gotham-Bold"],
        },
      },
    },
  },
  plugins: [],
};
