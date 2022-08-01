# 自定义主题

Element 默认提供一套主题，`CSS` 命名采用 `BEM` 的风格，方便使用者覆盖样式。

## 指定主题色

更换组件库的默认主题色，此方式只是修改了一下组件的色彩样式，我们只要引入指定的样式文件即可（参考[Element 自定义主题](https://element.eleme.io/#/zh-CN/component/custom-theme)），如：

```csss {3,}
import ElementUI from 'element-ui'
// 默认样式改为指定样式
import 'element-ui/lib/theme-chalk/index.css'
```

定制化的样式文件有以下几种办法生成：

### 方案一：在线生成

访问 [Element 在线主题生成工具](https://elementui.github.io/theme-chalk-preview/#/zh-CN)，选择自己所需的颜色，下载主题压缩包，解压到系统中，按如下方式引入系统

```js
import Vue from 'vue'
import Element from 'element-ui'
import '../theme/index.css'

Vue.use(Element)
```
### 方案二：直接修改 SCSS 变量

Element 的 `theme-chalk` 使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 Element 的样式变量。新建一个样式文件，例如 element-variables.scss，写入以下内容：

```css
/* 改变主题色变量 */
$--color-primary: teal;

/* 改变 icon 字体路径变量，必需 */
$--font-path: '~element-gui/lib/theme-chalk/fonts';

@import "~element-gui/packages/theme-chalk/src/index";
```

之后，在项目的入口文件 `src/main.js` 中，直接引入以上样式文件即可（无需引入 Element 编译好的 CSS 文件，因为已经 import 了）：

```js
import Vue from 'vue'
import Element from 'element-ui'
import './element-variables.scss'

Vue.use(Element)
```

常用默认颜色变量：

```css
$--color-primary: #1890FF;
$--color-success: #57B21C;
$--color-warning: #FC9306;
$--color-danger: #E82F2F;
$--color-info: #999999;

$--color-text-primary: #333333;
$--color-text-empty: #333333;
$--color-text-disabled: #666666;
$--color-text-readonly: #666666;
$--color-text-placeholder: #999999;

$--border-color-base: #D2D2D2;
$--border-color-light: #999999;

$--icon-color: #666666;

$--background-color-base: #EFEFEF;
$--background-color-dark: #E5E5E5;
```

::: warning
覆盖字体路径变量是必需的，而且这种方案有个问题，调试会重复加载多份样式，听说上生产环境会少点，原因可能 定义了 `common.scss` 在多个组件 `scss` 前面引入
:::

### 方案三：使用Element的命令行主题工具

**1. 安装工具**

a) 首先安装[主题生成工具](https://github.com/ElementUI/element-theme)，可以全局安装或者安装在当前项目下，推荐安装在项目里，方便别人 clone 项目时能直接安装依赖并启动，这里以全局安装做演示。

```shell
npm i element-theme -g
```

b) 安装白垩主题，可以从 npm 安装或者从 GitHub 拉取最新代码。

```shell
# 从 npm
npm i element-theme-chalk -D

# 从 GitHub
npm i https://github.com/ElementUI/theme-chalk -D

```

**2. 初始化变量文件**

主题生成工具安装成功后，如果全局安装可以在命令行里通过 `et` 调用工具，如果安装在当前目录下，需要通过 `node_modules/.bin/et` 访问到命令。执行 `-i` 初始化变量文件。默认输出到 `element-variables.scss` ，当然你可以传参数指定文件输出目录。

```shell
et -i [可以自定义变量文件]

> ✔ Generator variables file
```

如果使用默认配置，执行后当前目录会有一个 element-variables.scss 文件。内部包含了主题所用到的所有变量，它们使用 SCSS 的格式定义。大致结构如下：

```scss
$--color-primary: #409EFF !default;
$--color-primary-light-1: mix($--color-white, $--color-primary, 10%) !default; /* 53a8ff */
$--color-primary-light-2: mix($--color-white, $--color-primary, 20%) !default; /* 66b1ff */
$--color-primary-light-3: mix($--color-white, $--color-primary, 30%) !default; /* 79bbff */
$--color-primary-light-4: mix($--color-white, $--color-primary, 40%) !default; /* 8cc5ff */
$--color-primary-light-5: mix($--color-white, $--color-primary, 50%) !default; /* a0cfff */
$--color-primary-light-6: mix($--color-white, $--color-primary, 60%) !default; /* b3d8ff */
$--color-primary-light-7: mix($--color-white, $--color-primary, 70%) !default; /* c6e2ff */
$--color-primary-light-8: mix($--color-white, $--color-primary, 80%) !default; /* d9ecff */
$--color-primary-light-9: mix($--color-white, $--color-primary, 90%) !default; /* ecf5ff */

$--color-success: #67c23a !default;
$--color-warning: #e6a23c !default;
$--color-danger: #f56c6c !default;
$--color-info: #909399 !default;

...
```

**3. 修改变量**

直接编辑element-variables.scss文件，例如修改主题色为红色。

```scss
$--color-primary: red;
```

**4. 编译主题**

保存文件后，到命令行里执行et编译主题，如果你想启用watch模式，实时编译主题，增加-w参数；如果你在初始化时指定了自定义变量文件，则需要增加-c参数，并带上你的变量文件名

```shell
et

> ✔ build theme font
> ✔ build element theme
```

**5. 引入自定义主题**

默认情况下编译的主题目录是放在 `./theme` 下，你可以通过-o参数指定打包目录。像引入默认主题一样，在代码里直接引用`theme/index.css` 文件即可。

```js
import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)
```

element-theme 官方换肤方案[参考这里](https://element.eleme.io/#/zh-CN/component/custom-theme)

## 自定义主题色

### 简述

这种方式比较灵活，用户可以自定义任意一种主题颜色。 本项目就是采用这种方式。 这种方式的优点是我们无需准备多套主题，用户可以自由动态换肤；缺点是自定义不够，只支持基础颜色的切换。

::: tip
参考 [vue-element-admin 更换主题](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/theme.html)
:::

### 原理

element-ui 2.0 版本之后所有的样式都是基于 SCSS 编写的，所有的颜色都是基于几个基础颜色变量来设置的，所以就不难实现动态换肤了，只要找到那几个颜色变量修改它就可以了。

Element官方实现了一个demo：[在线主题生成工具](https://elementui.github.io/theme-chalk-preview/#/zh-CN)。作者在 [issue](https://github.com/ElemeFE/element/issues/3054) 中回复了他的方案：

1. 先把默认主题文件中涉及到颜色的 CSS 值替换成关键词：[源码](https://github.com/ElementUI/theme-preview/blob/master/src/app.vue#L250-L274)
2. 根据用户选择的主题色生成一系列对应的颜色值：[源码](https://github.com/ElementUI/theme-preview/blob/master/src/utils/formula.json)
3. 把关键词再换回刚刚生成的相应的颜色值：[源码](https://github.com/ElementUI/theme-preview/blob/master/src/utils/color.js)
4. 直接在页面上加 style 标签，把生成的样式填进去[源码](https://github.com/ElementUI/theme-preview/blob/master/src/app.vue#L198-L211)

根据以上方案，简单说明一下我们的原理：

首先我们需要通过**扩展配置**传入 `element-ui` 的版本号，根据该版本号去请求相应的样式。拿到样式之后将样色，通过正则匹配和替换，将颜色变量替换成你需要的，之后动态添加 style 标签来覆盖原有的 css 样式。

::: tip
这里需要获取 element-ui 的版本号，从而锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。
:::

### 实现新功能

1. 创建 `themePicker.js` 文件，定义替换和加载样式方法

```js
// 样式资源包
let chalk = ''

const getThemeCluster = function (theme) {
  const tintColor = (color, tint) => {
    let red = parseInt(color.slice(0, 2), 16)
    let green = parseInt(color.slice(2, 4), 16)
    let blue = parseInt(color.slice(4, 6), 16)

    if (tint === 0) { // when primary color is in its rgb space
      return [red, green, blue].join(',')
    } else {
      red += Math.round(tint * (255 - red))
      green += Math.round(tint * (255 - green))
      blue += Math.round(tint * (255 - blue))

      red = red.toString(16)
      green = green.toString(16)
      blue = blue.toString(16)

      return `#${red}${green}${blue}`
    }
  }

  const shadeColor = (color, shade) => {
    let red = parseInt(color.slice(0, 2), 16)
    let green = parseInt(color.slice(2, 4), 16)
    let blue = parseInt(color.slice(4, 6), 16)

    red = Math.round((1 - shade) * red)
    green = Math.round((1 - shade) * green)
    blue = Math.round((1 - shade) * blue)

    red = red.toString(16)
    green = green.toString(16)
    blue = blue.toString(16)

    return `#${red}${green}${blue}`
  }

  const clusters = [theme]
  for (let i = 0; i <= 9; i++) {
    clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
  }
  clusters.push(shadeColor(theme, 0.1))
  return clusters
}

const getCSSString = function (url) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        chalk = xhr.responseText.replace(/@font-face{[^}]+}/, '')
        resolve()
      }
    }
    xhr.open('GET', url)
    xhr.send()
  })
}

const updateStyle = function (style, oldCluster, newCluster) {
  let newStyle = style
  oldCluster.forEach((color, index) => {
    newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
  })
  return newStyle
}

function getThemeConfigFunc (defaultTheme = '#409EFF') {
  return {
    defaultTheme,
    theme: '',
    updateElementUITheme: async function (options = {}) {
      const {
        version = '2.15.8',
        themeColor,
        appendDom,
        insertAfter,
        chalkStyle = 'chalk-style'
      } = options
      if (typeof themeColor !== 'string') return

      const oldVal = chalk ? this.theme : this.defaultTheme
      const themeCluster = getThemeCluster(themeColor.replace('#', ''))
      const originalCluster = getThemeCluster(oldVal.replace('#', ''))

      const getHandler = (id) => {
        return () => {
          const originalCluster = getThemeCluster(this.defaultTheme.replace('#', ''))
          const newStyle = updateStyle(chalk, originalCluster, themeCluster)

          let styleTag = document.querySelector(id)
          if (!styleTag) {
            styleTag = document.createElement('style')
            styleTag.setAttribute('id', id)
            if (appendDom) {
              if (insertAfter) {
                appendDom.parentNode.insertBefore(styleTag, appendDom.nextSibling)
              } else {
                appendDom.appendChild(styleTag)
              }
            } else {
              document.head.appendChild(styleTag)
            }
          }
          styleTag.innerText = newStyle
        }
      }

      if (!chalk) {
        const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
        await getCSSString(url)
      }

      const chalkHandler = getHandler(chalkStyle)

      chalkHandler()

      this.theme = themeColor

      const styles = [].slice.call(document.querySelectorAll('style'))
        .filter(style => {
          const text = style.innerText
          return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
        })
      styles.forEach(style => {
        const { innerText } = style
        if (typeof innerText !== 'string') return
        style.innerText = updateStyle(innerText, originalCluster, themeCluster)
      })
    }
  }
}

export {
  getThemeConfigFunc
}
```

2. 在入口文件引入组件，调用暴露 `getThemeConfigFunc` 方法，创建一个主题配置，然后传入主题颜色再调用 `updateElementUITheme` 方法更新主题


```js
import DouluoUI from 'douluo-ui'
const themeConfig = DouluoUI.getThemeConfigFunc()
themeConfig.updateElementUITheme({ themeColor: '#632cd5' })
```

::: warning 注意
为了避免页面出现闪烁（原因样式是异步加载，会先渲染 element 主题颜色，再渲染自定义颜色），可以在入口文件封装成方法，使用 `async/await` 初始化变量文件
:::

```js

import DouluoUI from 'douluo-ui'

const initApp = async function () {

  const themeConfig = DouluoUI.getThemeConfigFunc()
  await themeConfig.updateElementUITheme({ themeColor: '#632cd5' })
  new Vue({
    router,
    render: (h) => h(App)
  }).$mount('#app');
}

initApp()
```
