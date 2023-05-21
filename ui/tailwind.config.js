/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-background": "#f8f9fa",
        "background": "#e9ecef",
        "dark-background": "#adb5bd",
      }
    },
  },
  plugins: [],
}

