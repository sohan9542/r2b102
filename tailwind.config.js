module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pr: "#EAEF1B",
        font: "#f2415f",
        purp:"#f440e8"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}