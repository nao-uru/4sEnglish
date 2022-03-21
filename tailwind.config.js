// const colors = require('tailwindcss/colors');

module.exports = {
  mode:"jit",
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
    './dist/**/*.{js,jsx,ts,tsx,vue,html}',
    './dist/*.html',
  ],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
    './dist/**/*.{js,jsx,ts,tsx,vue,html}',
    "./src/**/*.{html,js}",
  ],
  theme:{
    colors: {
      cBlue:'#41B2BE',
      cPink:'#EE9695',
      cBlack:'#131313',
      cBeige:'#FBF1E6',
      cOrange:'#ED7632',
      cWhite:'#ffffff',
    },
    screens: {
      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},
    }
  }
}
