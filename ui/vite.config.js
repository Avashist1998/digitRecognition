import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://avashist1998.github.io/digitRecognition/",
  plugins: [react()],
  server: {
    port: 3000,
  }
})
