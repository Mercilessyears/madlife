import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/   https://mercilessyears.github.io/madlife/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'https://www.madlife.work/' : '/',
  build:{
  },
  server:{
    proxy:{
      '/api': {
        target: 'http://rcwonz1wg.hn-bkt.clouddn.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname,'src')
    }
  },
  css:{
    preprocessorOptions:{
      scss: {
        additionalData: `@import "@/assets/scss/global.scss";`
      },
    }
  },
  plugins: [vue()]
})
