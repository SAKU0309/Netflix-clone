import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.PNG', '**/*.webp'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"], // Separate React into its own chunk
          vendor: ["lodash", "axios"], // Split other dependencies
        },
      },
    },
  },
})


