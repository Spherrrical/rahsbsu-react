/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
        center: true,
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'circularbold': ['CircularBold', 'sans-serif'],
        'circularmedium': ['CircularMedium', 'sans-serif'],
        'circularbook': ['CircularBook', 'sans-serif'],
        'circularblack': ['CircularBlack', 'sans-serif'],

      }
    },
  },
  plugins: [],
}

