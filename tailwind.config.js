/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        poppins: [ "Poppins", "serif"],
      },
      colors: {
        primary: "#fac8e6",
        secondary: "#ff66c4",
        primaryDark: "#fac8e6",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      }
    },
  },
  plugins: [],
}


