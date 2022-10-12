/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'teal-blue': '#F1F5F9',
        'van-blue': '#1E4584',
        'van-light-yellow': '#EAC490',
        'van-dark-yellow': '#DD9B2D',
      },
    },
  },
  plugins: [],
};
