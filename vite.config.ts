import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  server: {
    port: 3000,
  }
}))
