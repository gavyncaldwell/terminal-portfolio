import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
