
// https://github.com/antfu/unplugin-vue-components 组件按需引入插件
import Components from 'unplugin-vue-components/vite'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
// 兼容 IE
import legacy from '@vitejs/plugin-legacy'
// 分离打包
import { defineConfig, splitVendorChunkPlugin } from 'vite'
// 支持 Vue2
import Vue from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [
    Vue(),
    Components({
      resolvers: [ElementUiResolver()],
    }),
    legacy({
      targets: ['defaults', 'not ie < 9'],
    }),
    splitVendorChunkPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'element-ui': ['element-ui'],
        },
      },
    },
  }
})
