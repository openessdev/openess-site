const theme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["index.html", "src/**/*.tsx"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#4483c1",
        openess: {
          default: "#D7CEDE",
        },
      },
      fontFamily: {
        display: ["Archivo", ...theme.fontFamily.sans],
        manrope: ["Manrope", ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
