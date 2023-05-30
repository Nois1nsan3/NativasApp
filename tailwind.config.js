/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        marvel: ['Marvel', 'sans-serif'],
        mplus: ["'M PLUS 1 Code'", 'sans-serif']
      }
    },
  }
}
