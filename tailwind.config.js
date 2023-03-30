/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#FBCE02",
      grey: {
        10: "#E9E9E9",
        30: "#666666",
      },
    },
    extend: {},
  },
  plugins: [],
};
