---
sidebarDepth: 2
---

此组件库基于 `element-ui` 二次开发。单纯学习使用。

:tada: 支持按需引入。

:100: 兼容 IE 12+ 。:fire::fire::fire:

## 安装

::: warning
没有上传 npm 小伙伴们不要尝试下载。
:::

```bash
npm install test-component -S
```

```bash
yarn add test-component -S
```

## 使用

```js
import testComp from 'test-component';
import 'test-component/lib/theme/index.css';

Vue.use(testComp);
```

### 按需引入

借助 `babel-plugin-componet` 我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 `babel-plugin-component`：

```bash
npm install babel-plugin-component -D
```

在 `.babel.config.js` 中新增

```js
plugins: [
  [
    'component',
    {
      libraryName: 'test-component',
      styleLibrary: {
        name: 'theme',
        base: false
      }
    }
  ]
];
```

## UMD 使用

目前没有实现混合打包，暂不支持直接引入，clone 项目后自行打 lib 包

```js
"build:lib": "vue-cli-service build --target lib --dest lib --name test-comp-base packages/index.js"
```