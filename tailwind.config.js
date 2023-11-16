/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'desktop': '1020px'
    },
    fontFamily: {
      open: ['Open Sans'],
      poppins: ['Poppins']

    },
    extend: {
      colors: {
        primary: "#ff52bf",
        neutral: {
          100: "hsl(193, 100%, 96%)",
          200: "hsl(192, 100%, 9%)",
          300: "hsl(208, 11%, 55%)"
        } 
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

