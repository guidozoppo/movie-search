const defaultTheme = require('tailwindcss/defaultTheme');
const color = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
    colors: {
      "special-grey": '#F5F0F0',
      "red": color.red, 
      "gray": color.gray, 
      "white": color.white, 
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['hover']
    }
  },
  plugins: [],
}
