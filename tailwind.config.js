/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0px 8px 38px rgba(0, 0, 0, 0.09)",
      },
      colors: {
        "color-theme": "#E53E3E",
        "color-text-body": "#74787C",
        "color-heading": "#141414",
        "color-light-gray": "#F6F6F6",
      },
      backgroundColor: {
        "color-tranparent": "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
