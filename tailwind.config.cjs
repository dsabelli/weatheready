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
          primary: "#8950b2",

          secondary: "#24538c",

          accent: "#170568",

          neutral: "#1E1622",

          "base-100": "#E3E6E8",

          info: "#8AC1E5",

          success: "#13A472",

          warning: "#A1810C",

          error: "#F37F72",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
