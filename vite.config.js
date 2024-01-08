import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        audio: resolve(__dirname, 'pages/audio/index.html'),
        electrics: resolve(__dirname, 'pages/electrics/index.html'),
        home_products: resolve(__dirname, 'pages/home_products/index.html'),
        id: resolve(__dirname, 'pages/id/index.html'),
        kitchen: resolve(__dirname, 'pages/kitchen/index.html'),
        pc: resolve(__dirname, 'pages/pc/index.html'),
        technic: resolve(__dirname, 'pages/technic/index.html'),
        tv: resolve(__dirname, 'pages/tv/index.html')
      },
    },
  },
})