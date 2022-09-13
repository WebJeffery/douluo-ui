## 概述

[douluo-ui 组件库](https://github.com/JefferyXZF/douluo-ui) 是基于 element-ui 实现的，那么实现换肤分两步；一是 `element-ui` 的换肤方案；二是 `douluo-ui组件库` 的换肤方案


## element-ui 的换肤

### 方案一：在线生成

访问 [Element 在线主题生成工具](https://elementui.github.io/theme-chalk-preview/#/zh-CN)，选择自己所需的颜色，下载主题压缩包，解压到项目系统中，按如下方式引入系统

```js
import Vue from 'vue'
import Element from 'element-ui'
import '../theme/index.css'

Vue.use(Element)
```

- 优点：替换方便
- 缺点：只能替换一种主题样式

### 方案二：直接修改 SCSS 变量

Element 的 `theme-chalk` 使用 SCSS 编写，如果项目也使用了 SCSS，那么可以直接在项目中改变 Element 的样式变量。新建一个样式文件，例如 `element-variables.scss`，写入以下内容：

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


注意：覆盖字体路径变量是必需的，而且这种方案有个问题，调试会重复加载多份样式，听说上生产环境会少点，原因可能 定义了 `common.scss` 在多个组件 `scss` 前面引入

方案实现
- 优点：灵活，可以自定义替换主题和常用的颜色变量等
- 缺点：只能实现一种换肤

### 方案三：使用Element的命令行主题工具

由于 `element-ui` 的样式单独维护，官方将它抽象出来做成命令行工具使用，实现换肤分为5步

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

主题生成工具安装成功后，全局安装可以在命令行里通过 `et` 调用工具，如果安装在当前目录下，需要通过 `node_modules/.bin/et` 访问到命令。执行 `-i` 初始化变量文件。默认输出到 `element-variables.scss` ，当然你可以传参数指定文件输出目录。

```shell
et -i [可以自定义变量文件]

> ✔ Generator variables file
```

如果使用默认配置，执行后当前目录会有一个 `element-variables.scss` 文件。内部包含了主题所用到的所有变量，它们使用 SCSS 的格式定义。大致结构如下：

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

保存文件后，到命令行里执行et编译主题，如果你想启用 `watch` 模式，实时编译主题，增加 `-w` 参数；如果你在初始化时指定了自定义变量文件，则需要增加 `-c` 参数，并带上你的变量文件名

```shell
et

> ✔ build theme font
> ✔ build element theme
```

**5. 引入自定义主题**

默认情况下编译的主题目录是放在 `./theme` 下，你可以通过 `-o` 参数指定打包目录。像引入默认主题一样，在代码里直接引用`theme/index.css` 文件即可。

```js
import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)
```

element-theme 官方换肤方案[参考这里](https://element.eleme.io/#/zh-CN/component/custom-theme)

这种换肤方案缺点：只能使用一种主题，安装比较麻烦，容易踩坑安装失败，不推荐

### 自定义主题色【推荐】

由于项目会员等级有 4 种主题（未来可能会新增），上面的实现方案有局限性，如果实现的话要提前准备 4 种主题，这样做的结果会增加维护成本，而且拓展性不好，增加一种新的主题要重新生成一份新的样式，打包体积也会变大

参考 [vue-element-admin 更换主题](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/theme.html)，通过自定义换肤的方案实现，这种方式比较灵活，可以自定义任意一种主题颜色，无需准备多套主题，可以自由动态换肤；缺点是自定义不够，只支持基础颜色的切换。



#### 原理

element-ui 2.0 版本之后所有的样式都是基于 SCSS 编写的，所有的颜色都是基于几个基础颜色变量来设置的，所以就不难实现动态换肤了，只要找到那几个颜色变量修改它就可以了。

Element官方实现了一个demo：[在线主题生成工具](https://elementui.github.io/theme-chalk-preview/#/zh-CN)。作者在 [issue](https://github.com/ElemeFE/element/issues/3054) 中回复了他的方案：

1. 先把默认主题文件中涉及到颜色的 CSS 值替换成关键词：[源码](https://github.com/ElementUI/theme-preview/blob/master/src/app.vue#L250-L274)
2. 根据用户选择的主题色生成一系列对应的颜色值：[源码](https://github.com/ElementUI/theme-preview/blob/master/src/utils/formula.json)
3. 把关键词再换回刚刚生成的相应的颜色值：[源码](https://github.com/ElementUI/theme-preview/blob/master/src/utils/color.js)
4. 直接在页面上加 style 标签，把生成的样式填进去[源码](https://github.com/ElementUI/theme-preview/blob/master/src/app.vue#L198-L211)

根据以上方案，简单说明一下实现原理：

- 设计对外暴露拓展配置，包括 `element-ui` 的版本号 或 `element-ui` 样式链接 、新的主题颜色、旧的主题颜色、插入 dom 的位置等
- 根据新、旧主题颜色，转化为 16 进制的红、绿、蓝颜色值，生成 `10%, 20%, ……, 90%` 混合颜色，得到两个颜色数组, 例如 `themeCluster`， `originalCluster`
- 请求 `element-ui` 样式文件，保存到内存中，通过正则匹配，将 `themeCluster`， `originalCluster` 两个数组替换样式文件
- 最后将替换的新样式插入到 `dom` 上，覆盖 element-ui 原来的样式


#### 实现新功能

1. 创建 `update-element-theme.js` 文件，定义替换和加载样式方法

```js
// 样式资源包
let chalk = ''
// 默认主题
let defaultTheme = '#409EFF'

export const tintColor = (color, tint) => {
  color = color.replace('#', '')
  let red = parseInt(color.slice(0, 2), 16)
  let green = parseInt(color.slice(2, 4), 16)
  let blue = parseInt(color.slice(4, 6), 16)

  if (tint === 0) {
    // when primary color is in its rgb space
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

export const shadeColor = (color, shade) => {
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

const getThemeCluster = function (theme) {
  const clusters = [theme]
  for (let i = 0; i <= 9; i++) {
    clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
  }
  clusters.push(shadeColor(theme, 0.1))
  return clusters
}

const getCSSString = function (url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        chalk = xhr.responseText.replace(/@font-face{[^}]+}/, '')
        resolve()
      }
    }
    xhr.onerror = (err) => {
      console.error('样式下载失败', err)
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

export const updateElementTheme = async function (options = {}) {
  const {
    version = '2.15.8',
    oldTheme,
    primaryColor,
    appendDom,
    insertBefore,
    cssUrl,
    chalkStyle = 'chalk-style'
  } = options
  if (typeof primaryColor !== 'string') return

  const themeCluster = getThemeCluster(primaryColor.replace('#', ''))
  const originalCluster = getThemeCluster((oldTheme || defaultTheme).replace('#', ''))

  const chalkHandler = (id) => {
    const newStyle = updateStyle(chalk, originalCluster, themeCluster)
    // 覆盖原来的样式
    chalk = newStyle

    let styleTag = document.querySelector(id)
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.setAttribute('id', id)
      if (appendDom) {
        if (insertBefore) {
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

  if (!chalk) {
    const url = cssUrl || `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
    await getCSSString(url)
  }

  chalkHandler(chalkStyle)
  defaultTheme = primaryColor
}

```

2. 在入口文件引入组件，调用 `updateElementTheme` 方法


```js
import { updateElementTheme } from 'douluo-ui'
updateElementTheme({
  oldTheme,
  primaryColor
})
```

注意：为了避免页面出现闪烁（原因样式是异步加载，会先渲染 element 主题颜色，再渲染自定义颜色），可以在入口文件封装成方法，使用 `async/await` 初始化变量文件

```js

import DouluoUI from 'douluo-ui'

const initApp = async function () {

  await DouluoUI.updateElementTheme({
    oldTheme,
    primaryColor
  })
  new Vue({
    router,
    render: (h) => h(App)
  }).$mount('#app');
}

initApp()
```

3. 异常处理，如果 css 样式加载失败，会导致页面加载失败，打不开，需要捕获异常处理

```js
const initApp = async () => {
  try {
    await DouluoUI.updateElementTheme({
      oldTheme,
      primaryColor
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
```

因此，样式最好放在公司内部的 cdn 上，保证样式资源稳定安全，同时最好做一下降级处理方案兼容加载失败的情况


## 组件库的换肤

组件库参考 `element-plus` 使用 `SCSS` 变量和 `css 自定义属性`，所以实现换肤比较简单，参考 
[element-plus CSS 变量设置](https://element-plus.gitee.io/zh-CN/guide/theming.html#%E9%80%9A%E8%BF%87-css-%E5%8F%98%E9%87%8F%E8%AE%BE%E7%BD%AE)，使用 `document.documentElement.style.setProperty` 设置样式，覆盖 `root` 的样式



```js
export const updateUITheme = async function (options) {
  const {
    oldTheme = '#409EFF',
    primaryColor,
  } = options
  if (!primaryColor) return

  await updateElementTheme({
    oldTheme,
    primaryColor: primaryColor
  })

  const el = document.documentElement
  el.style.setProperty(`--${cssNamespace}-color-primary`, primaryColor)
  for (let i = 1; i <= 9; i++) {
    const color = tintColor(primaryColor, Number((0.1 * i).toFixed(2)))
    el.style.setProperty(`--${cssNamespace}-color-primary-light-${i}`, color)
  }
}
```


![](https://files.mdnice.com/user/26477/d68b4227-0f76-4c98-8828-c55a56c85c3c.png)

### 兼容 button 两种主题色

新的 UI 规范 `button` 的主要按钮由两种颜色组成，不是默认的白色，如下


![](https://files.mdnice.com/user/26477/92b0c972-d1f1-4947-abd0-5f0dbcd81b72.png)


为了实现这种交换，在 [button-variant](https://github.com/JefferyXZF/douluo-ui/blob/develop/styles/src/mixins/_button.scss#L366-L380) 对 `primary` 类型做判断，定义一份新的数据结构，根据 button 组件的 css 自定义属性实现换肤，文件定义在 [update-ui-theme.js](https://github.com/JefferyXZF/douluo-ui/blob/develop/src/utils/update-ui-theme.js)



![](https://files.mdnice.com/user/26477/13e620c4-5c8e-4fd8-b296-8dd02b54efbd.png)

