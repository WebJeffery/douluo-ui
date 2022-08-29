// 引入 @internal/page-components 解决组件内部注册报错
import pageComponents from '@internal/page-components'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { themeConfigFunc } from '../../src/utils/themePicker';
import DouluoUI from '../../src/index'
import '../../styles/src/index.scss'


export default async ({ Vue, options, router, siteData, isServer }) => {
  if (!isServer) {
    for (const [name, component] of Object.entries(pageComponents)) {
      Vue.component(name, component)
    }
    await DouluoUI.updateTheme({
      primary: '#FFAA00',
      primarySecond: '#231909'
    })
    Vue.use(DouluoUI);
    Vue.use(ElementUI);
  }
};
