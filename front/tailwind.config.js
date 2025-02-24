/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
      // Incluye todos los archivos relevantes
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
};
