// 引入 @internal/page-components 解决组件内部注册报错
import pageComponents from '@internal/page-components'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DouluoUI from '../../src/index'
import '../../styles/src/index.scss'
import elIcons from '../../examples/assets/json/el-icon.json'
import dlIcons from '../../examples/assets/json/dl-icon.json'


export default async ({ Vue, options, router, siteData, isServer }) => {
  if (!isServer) {
    for (const [name, component] of Object.entries(pageComponents)) {
      Vue.component(name, component)
    }
    await DouluoUI.updateUITheme({
      primaryColor: '#FFAA00',
      primarySecondColor: '#231909',
      oldTheme: window.oldTheme || '#409EFF'
    })
    Vue.use(DouluoUI);
    Vue.use(ElementUI);
    Vue.prototype.$elIcons = elIcons
    Vue.prototype.$dlIcons = dlIcons
    window.oldTheme = '#FFAA00'
    window.primarySecond = '#231909'
    window.$updateTheme = DouluoUI.updateUITheme
    // Vue.prototype.$updateTheme = DouluoUI.updateTheme
  }
};
