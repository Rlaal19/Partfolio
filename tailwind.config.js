/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#7469B6",
        primarycontent: "#E1AFD1",
        primarysubtitle: "#AD88C6",
        primarybase: "#E6A4B4",
        primarybg: "#FFF8E3",
      }
    },
  },
  plugins: [],
}

