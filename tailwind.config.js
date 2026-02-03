/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'cm': '935px',
      },
      fontFamily: {
        sofia: ['Sofia Sans Condensed', 'sans-serif'],
        // sofia: ['Sofia Sans Extra Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}