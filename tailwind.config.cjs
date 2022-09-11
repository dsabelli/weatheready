/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff6584",
          secondary: "#F9A826",
          accent: "#00B0FF",
          neutral: "#1D283A",
          "base-100": "#0F1729",
          info: "#0CA6E9",
          success: "#2BD4BD",
          warning: "#F4C152",
          error: "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
