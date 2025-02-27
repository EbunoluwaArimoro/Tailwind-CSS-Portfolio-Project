/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./dist/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#00ABE4",
        secondary: "#EDF4FC", 
        tertiary: "#FBFDFE",
        background: "#E3EEF9",
        headerFont: "#1C3458",
        textFont: "#949EAE",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sourceSansPro: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
