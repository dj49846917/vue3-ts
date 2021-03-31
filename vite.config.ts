import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  alias: {
    '@': resolve(__dirname, "src") //设置别名
  },
  base: './',
  server: {
    host: 'localhost',
    port: 8080,
    open: true,
  },
})
