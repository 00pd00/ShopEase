/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens :{
      md:'768px',
      lg:'1024px',
      xl:'1280px'
    },
    extend: {},
  },
  plugins: [],
}