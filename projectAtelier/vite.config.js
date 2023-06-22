
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    coverage: {
      provider: 'v8'
    },
    setupFiles: './tests/setup.js',
  },
})
