/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3',
        secondary: '#17a2b8',
        accent: '#ffc107',
      },
    },
  },
  plugins: [],
}