/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        outfit:[ "Outfit", 'sans-serif']
      },
      margin:{
        '1/2':'11%'
      }

    },
  },
  plugins: [],
}

