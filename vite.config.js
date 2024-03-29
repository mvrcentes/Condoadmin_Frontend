import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    enviroment: "jsdom",
    globals: true,
  },
  server: {
    host: true,
    strictPort: true,
    port: 4200,
  },
})
