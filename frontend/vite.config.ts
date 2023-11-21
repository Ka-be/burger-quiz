import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    // On utilise le polling pour que le hot reload fonctionne avec docker
    watch: {
      usePolling: true
    },
  }
})
