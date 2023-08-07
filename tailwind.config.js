/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  gridTemplateColumns:{
    fluid:"repeat(auto-fit,minmax(15rem,1fr))",
  }
}

