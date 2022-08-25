import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
  darkMode: "class",
  attributify: true,
  safelist: "p-3 p-4 p-5",
  extract: {
    include: ["src/**/*.{html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
  theme: {
    extend: {
      colors: {
        teal: {
          100: "#096",
        },
      },
    },
  },
  plugins: [formsPlugin, require("flowbite/plugin")],
});
