import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "http://localhost:5173/JavaScript/React/finalProject",
  server: {
    watch: {
      usePolling: true
    }
  }
})
