/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#302E30',
        'gray': '#E5E7EB',
        'red': '#E51111',
      }
    },
  },
  plugins: [],
}

