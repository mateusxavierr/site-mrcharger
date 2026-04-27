import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
// GitHub Pages: site fica em /nome-do-repo/ — o build precisa desse base.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/site-mrcharger/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
