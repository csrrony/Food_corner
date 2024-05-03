/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        first:"#EED23F",
        second:"#F26128",
        primary:"#0B6FFE"
      },
      animation:{
        spin:"spin 6s linear infinite"
      }
    },
  },
  plugins: [],
  darkMode:"class"
}

