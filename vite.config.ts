import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
        allowedHosts: [
            'yrs-philip-bills-interval.trycloudflare.com',
            "wildlife-samples-including-skiing.trycloudflare.com"
        ]
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                screen: resolve(__dirname, 'screen.html'),
                controller: resolve(__dirname, 'controller.html')
            }
        }
    }
})
