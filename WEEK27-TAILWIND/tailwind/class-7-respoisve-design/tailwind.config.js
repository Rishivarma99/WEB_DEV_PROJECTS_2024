/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    screens: {
      'exm': { 'min': '1px', 'max': '540px' },


      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '668px',
      // => @media (min-width: 768px) { ... }

      'lg': '924px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1180px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

