import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import cesium from 'vite-plugin-cesium'; // 引入插件
import PluginImportToCDN from 'vite-plugin-cdn-import';
import { visualizer } from "rollup-plugin-visualizer";
const path = require('path')

// https://vitejs.dev/config/   https://mercilessyears.github.io/madlife/
export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? 'https://www.madlife.work/' : '/',
  base: './',
  build:{
  },
  server:{
    proxy:{
      '/backend': {
        target: 'http://rcwonz1wg.hn-bkt.clouddn.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend/, '')
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
  plugins: [
    vue(),
    cesium(),
    PluginImportToCDN({
      modules:[
        {
          name:'vue',
          var:'Vue',
          path:'https://cdn.bootcdn.net/ajax/libs/vue/3.2.25/vue.global.js'
        },
        {
          name:'vue-demi',
          var:'VueDemi',
          path:'https://cdn.bootcdn.net/ajax/libs/vue-demi/0.13.11/index.iife.min.js'
        },
        {
          name:'axios',
          var:'axios',
          path:'https://cdn.bootcdn.net/ajax/libs/axios/0.27.2/axios.js'
        },
        {
          name:'pinia',
          var:'Pinia',
          path:'https://cdn.jsdelivr.net/npm/pinia@2.0.14/dist/pinia.iife.min.js'
        },
        {
          name:'vue-tsc',
          var:'VueTs',
          path:'https://cdn.jsdelivr.net/npm/vue-tsc@1.0.24/out/index.min.js'
        },
        {
          name:'datav-vue3',
          var:'DataV',
          path:'https://web-project-1301218253.cos.ap-chengdu.myqcloud.com/libs/datav-vue3.es.min.js'
        },
        {
          name:'three',
          var:'THREE',
          path:'https://cdn.bootcdn.net/ajax/libs/three.js/0.140.2/three.js'
        },
        {
          name:'GLTFLoader',
          var:'GLTFLoader',
          path:'https://web-project-1301218253.cos.ap-chengdu.myqcloud.com/libs/GLTFLoader.js'
        },
        {
          name:'OrbitControls',
          var:'OrbitControls',
          path:'https://web-project-1301218253.cos.ap-chengdu.myqcloud.com/libs/OrbitControls.js'
        },
        {
          name:'cesium',
          var:'Cesium',
          path:'https://web-project-1301218253.cos.ap-chengdu.myqcloud.com/libs/cesium.min.js',
          css:'https://cdn.jsdelivr.net/npm/cesium@1.102.0/Build/Cesium/Widgets/widgets.min.css'
        },
        {
          name:'naive',
          var:'naive',
          path:'https://web-project-1301218253.cos.ap-chengdu.myqcloud.com/libs/naive-ui2.index.min.js',
        },
        {
          name:'vue-router',
          var:'VueRouter',
          path:'https://cdn.bootcdn.net/ajax/libs/vue-router/4.0.2/vue-router.global.min.js'
        }
      ]
    }),
    viteCompression(),
    visualizer({
      filename: 'report.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ]
})
