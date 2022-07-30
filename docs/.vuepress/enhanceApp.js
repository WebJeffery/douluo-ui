// 引入 @internal/page-components 解决组件内部注册报错
import pageComponents from '@internal/page-components'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { getThemeConfigFunc } from '../../src/utils/themePicker';
import DouluoUI from '../../src/index'


export default async ({ Vue, options, router, siteData, isServer }) => {
  if (!isServer) {
    for (const [name, component] of Object.entries(pageComponents)) {
      Vue.component(name, component)
    }
    const themeConfig = getThemeConfigFunc()
    await themeConfig.updateElementUITheme({ themeColor: '#632cd5' })
    Vue.use(DouluoUI);
    Vue.use(ElementUI);
    // 直接导入 window is not defined  原因就是编译的时候需要 node.js 服务端渲染。所以要改成异步导入
    // await import('../../lib').then(testComp => {
    // });
  }
};
