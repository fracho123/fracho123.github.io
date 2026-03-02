import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // For user/organization pages (fracho123.github.io), keep base at root
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
