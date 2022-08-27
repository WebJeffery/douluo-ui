// main.js
import Vue from 'vue'
import App from './src/App.vue'
import router from './src/router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 本地安装组件测试的包
// import DouluoUI from 'douluo-ui'
// import 'douluo-ui/lib/theme/index.css'

import DouluoUI from '../src/index'
import '../styles/src/index.scss'
// import '../../lib/theme/index.css'

Vue.use(ElementUI)
Vue.use(DouluoUI)

const creatApp = async () => {
  const themeConfig = DouluoUI.themeConfigFunc()
  await themeConfig.updateElementUITheme({ themeColor: '#FFAA00' })

    // document.documentElement 是全局变量时
  const btn = document.documentElement
  // const btn = el.querySelector('dl-button')
  btn.setAttribute('class', 'id-css')
  // const el = document.getElementById('xxx')

  // 获取 css 变量
  // getComputedStyle(el).getPropertyValue(`--dl-color-primary`)

  // 设置 css 变量
  btn.style.setProperty('--dl-color-primary', '#FFAA00')
  btn.style.setProperty('--dl-button-font-color-primary', '#FFAA00')
  btn.style.setProperty('--dl-button-bg-color-primary', '#231909')
  btn.style.setProperty('--dl-button-border-color-primary', '#231909')
  // el.style.setProperty('--dl-bg-color-primary', '#231909')
  // el.style.setProperty('--dl-border-color-primary', '#231909')
  // el.style.setProperty('--dl-font-color-primary', '#FFAA00')
  // el.style.cssText = '--dl-bg-color-primary: #231909; --dl-border-color-primary: #231909; --dl-font-color-primary: #FFAA00;'

    new Vue({
      el: '#app',
      router,
      render: (h) => h(App)
    }).$mount()
}

creatApp()
