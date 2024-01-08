import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        Audio: resolve(__dirname, 'pages/audio/index.html'),
        electrics: resolve(__dirname, 'pages/electrics/index.html'),
        footer: resolve(__dirname, 'pages/footer/index.html'),
        goods: resolve(__dirname, 'pages/goods/index.html'),
        header: resolve(__dirname, 'pages/header/index.html'),
        home_products: resolve(__dirname, 'pages/home_products/index.html'),
        id: resolve(__dirname, 'pages/id/index.html'),
        kitchen: resolve(__dirname, 'pages/kitchen/index.html'),
        pc: resolve(__dirname, 'pages/pc/index.html'),
        sort: resolve(__dirname, 'pages/sort/index.html'),
        technic: resolve(__dirname, 'pages/technic/index.html'),
        tv: resolve(__dirname, 'pages/tv/index.html'),
      },
    },
  },
})