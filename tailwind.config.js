/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}",],
  theme: {
    extend: {
      backgroundImage: { 'home-pic': "url('Components/Home/homepic.jpg')", },
      backdropBlur: { '4.5': '4.5px', },
      screens: { 'custom':'1123px', },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
        },
      });
    },
  ],
}

