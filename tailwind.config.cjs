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
          primary: "#ff6584",

          secondary: "#a7ea54",

          accent: "#3ABFF8",

          neutral: "#191D24",

          "base-100": "#FFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
        dark: {
          primary: "#ff6584",

          secondary: "#D926A9",

          accent: "#3ABFF8",

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
