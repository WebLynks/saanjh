/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Verdana", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        iris: "#CB89DB",
        sunset: "#FF955E",
        sapphire: "#1974F9",
        mango: "#FEB715",
      },
    },
  },
  safelist: [
    "bg-iris",
    "bg-sunset",
    "bg-sapphire",
    "bg-mango",
    "text-iris",
    "text-sunset",
    "text-sapphire",
    "text-mango",
    "shadow-iris",
    "shadow-sunset",
    "shadow-sapphire",
    "shadow-mango",
    "border-iris",
    "border-sunset",
    "border-sapphire",
    "border-mango",
  ],
  plugins: [require("@tailwindcss/typography")],
};