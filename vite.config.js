// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server:{
    host: true,
    proxy: {
      '/api': 'http://localhost:5173/',
      ChangeOrigin: true,
    }
  }
})

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
// })