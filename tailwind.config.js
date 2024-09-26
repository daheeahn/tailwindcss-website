/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#23A6F0",
        "light-blue-color": "#8EC2F2",
        "dark-background-color": "#252B42",
        "light-text-color": "#FFFFFF",
        "second-text-color": "#737373",
        "third-text-color": "#23A6F0",
        "fourth-text-color": "#252B42",
      },
      boxShadow: {
        'box-shadow-custom': '0 0 5px 1px #23A6F0',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
