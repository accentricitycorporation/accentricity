import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL || '/accentricity',
  server:{
    host: true,
    proxy: {
      '/api': 'http://localhost:5173/',
      ChangeOrigin: true,
    }
  }
})
