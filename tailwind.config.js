/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futuraMedium: ['futura medium bt', 'sans-serif'],
        MontserratRegular:['Montserrat-Regular', 'sans-serif'],
        inter:['inter','sans-serif'],
        futuraLight: ['Futura Light BT', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      },
    },
  },
  plugins: [],
}
   