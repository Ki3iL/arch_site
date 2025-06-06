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
        sofia: ['SofiaSansCondensed', 'sans-serif'],
        // sofia: ['SofiaSansExtraCondensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}