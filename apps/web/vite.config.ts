/// <reference types="vite-ssg" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'tupach-time': path.resolve(__dirname, '../../packages/tupach-time/src/index.ts'),
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
})
