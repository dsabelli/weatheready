/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ffb6af",

          secondary: "#a7ea54",

          accent: "#c1035c",

          neutral: "#191D24",

          "base-100": "#FFF",

          info: "#4FC1E3",

          success: "#1D8B6E",

          warning: "#8F6C0A",

          error: "#EF7B6B",
        },
        dark: {
          primary: "#6419E6",

          secondary: "#D926A9",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
