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
}
