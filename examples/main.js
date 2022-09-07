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
  try {
    await DouluoUI.updateUITheme({
      primaryColor: '#FFAA00',
      primarySecondColor: '#231909'
    })

    new Vue({
      el: '#app',
      router,
      render: (h) => h(App)
    }).$mount()
  } catch (error) {
    new Vue({
      el: '#app',
      router,
      render: (h) => h(App)
    }).$mount()
    console.error('主题更新失败')
  }

}

creatApp()
