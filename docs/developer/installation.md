# 安装使用

此组件库基于 `element-ui` 二次开发。使用前请查看[更新日志](../changelog)

## 安装


:::: code-group

::: code-group-item npm

```bash
npm install douluo-ui -S
```

:::

::: code-group-item yarn

```bash
yarn add douluo-ui -S
```

:::

::: code-group-item pnpm

```bash
pnpm add douluo-ui
```

:::

::::

## 使用

```js
import ElementUI from 'element-ui';
import DouluoUI from 'douluo-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'douluo-ui/lib/css/index.css';

Vue.use(ElementUI);
Vue.use(DouluoUI);
```
