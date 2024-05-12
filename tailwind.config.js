/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        "primary": "#0f172a",
        "secondary" : "#f87171",
        "tertiary" : "#38bdf8",

      }
    },
    screens: {
       lg: {max: '2023px'},
       
       sm: {max: '1000px'},
    },
  },
  plugins: [],
}