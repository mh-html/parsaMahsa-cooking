/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-pic': 'url("../imgs/header.jpg")',
        'sec-pic': 'url("../imgs/foods-part4.jpg")',
        'sec-pic2': 'url("../imgs/foods-part6.jpg")',
        'sec-info': 'url("../imgs/infos.jpg")'
      },
      fontFamily: {
        'vazir': ['Vazir']
      }
    },
  },
  plugins: [],
}
