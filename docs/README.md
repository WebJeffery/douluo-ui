---
home: true
heroImage: '/logo.svg'
# heroImage: 'https://cn.vuejs.org/images/logo.svg'
heroText: Douluo UI
tagline: '基于 Element UI 封装的 Douluo UI 组件库'
actions:
  - text: 开始 💡
    link: /guide/
    type: primary

  - text: 组件文档 🛠
    link: /packages/element/layout/

features:
  - title: 更易用
    details: 开箱即用，案例丰富
  - title: 更高效
    details: 傻瓜写法，超高性能
  - title: 更专业
    details: 完备，灵活，优雅
footer: MIT Licensed | Copyright © 2022-present
---

## 🛠 安装

:::: code-group

::: code-group-item npm

```bash
npm add element-ui -S
npm add douluo-ui -S
```

:::

::: code-group-item yarn

```bash
yarn add element-ui
yarn add douluo-ui
```

:::

::::

## 🚀 使用

```js
import ElementUI from 'element-ui';
import DouluoUI from 'douluo-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'douluo-ui/lib/css/index.css';

Vue.use(ElementUI);
Vue.use(DouluoUI);
```


::: tip

`douluo-ui` 是基于 Element-UI 二次封装的组件库，使用前需要先安装 element-ui 组件库，提供了自定义换肤、自定义组件前缀、丰富的业务组件等功能
