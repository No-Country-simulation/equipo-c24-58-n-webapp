import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/equipo-c24-58-n-webapp/front/src/pages/main.jsx'
})
