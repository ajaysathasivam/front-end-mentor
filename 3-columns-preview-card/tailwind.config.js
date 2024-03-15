/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        darkcyan:' hsl(184, 100%, 22%)',
        vdarkcyan:'hsl(179, 100%, 13%)',
        borange:'hsl(31, 77%, 52%)',
        twhite:'hsla(0, 0%, 100%, 0.75)'
      },
      colors:{
        tgray:'hsl(0, 0%, 95%)',
        darkcyan:' hsl(184, 100%, 22%)',
        vdarkcyan:'hsl(179, 100%, 13%)',
        cborange:'hsl(31, 77%, 52%)'
      },
      height:{
        '97':'40rem',
        '30':'30rem',
        '35':'37rem'
      },
      
    },
  },
  plugins: [],
}
