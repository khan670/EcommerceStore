/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0 0 5px 2px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        "color-theme": "#E53E3E",
        "color-text-body": "#74787C",
        "color-heading": "#141414",
      },
      backgroundColor: {
        "color-tranparent": "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
