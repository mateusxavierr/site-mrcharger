import react from '@vitejs/plugin-react'
import path from 'path'
import { copyFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// GitHub Pages: https://usuario.github.io/nome-do-repo/
const GH_PAGES_BASE = '/site-mrcharger/'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? GH_PAGES_BASE : '/',
  plugins: [
    react(),
    {
      name: 'gh-pages-spa-fallback',
      closeBundle() {
        if (command !== 'build') return
        const distIndex = path.resolve(__dirname, 'dist/index.html')
        const dist404 = path.resolve(__dirname, 'dist/404.html')
        copyFileSync(distIndex, dist404)
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
