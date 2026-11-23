import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Default base works for Vercel and custom domains.
// For GitHub project pages, set VITE_BASE=/devflow-web/ (or your repo name) at build time.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
    sourcemap: false,
  },
})
