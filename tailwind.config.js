/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f8a70",
        soft: "#f6f8f7",
      },
    },
  },
  plugins: [],
};

