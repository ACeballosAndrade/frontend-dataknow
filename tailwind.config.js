/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        'primary': {
          100: '#EEE9FF',
          200: '#D0BCFF',
          300: '#381E72'
         },
      }
    },
  },
  plugins: [],
}

