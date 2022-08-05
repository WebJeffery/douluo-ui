# vue-cli 打包组件库迁移到 rollup 打包

### 前言

vue-cli 打包是基于 webpack 打包的，缺点是：一 打包时间长，二是打包的体积大，这对组件库来说不是很好，而 rollup 打包库更合适，它的缺点是打包一些静态资源比如 图片、图标需要安装很多插件支持，所以尽量避免在组件库中增加静态资源，可以设计组件扩展插槽或接口


### 安装 rollup

rollup 打包完整的 vue 项目需要用到大量的插件，做个分类

**基本的工程化插件**

- rollup 打包库
- rollup-plugin-alias 路径别名
- rollup-plugin-babel babel插件 将es6+转为es5
- rollup-plugin-node-resolve  帮助 rollup 识别外部模块
- rollup-plugin-commonjs 将commonjs模块转为es模块
- rollup-plugin-terser 压缩代码
- rollup-plugin-postcss css 打包插件，plugins 属性支持 css 预编译器 sass、less
- rollup-plugin-copy 直接复制静态文件


- rollup-plugin-filesize
- rollup-plugin-img
- rollup-plugin-json
- rollup-plugin-replace

其他依赖


- cross-env：跨 Mac、Window、Linux 平台运行 node 命令
- rimraf：删除目录文件

```shell
script: {
  ...
  "rollup:lib": "cross-env NODE_ENV=production rimraf ./lib && node ./build/rollup.build",
}
```

运行 `npm run rollup:lib`, 将 `process.env.NODE_ENV` 赋值 `production` 生产环境标识打包，删除 `lib` 目录，执行 `build/rollup.build.js` 打包文件

### rollup-plugin-vue 打包 vue 文件

`rollup-plugin-vue` 用于处理 `.vue` 文件。`vue2` 和 `vue3` 项目所用的 `rollup-plugin-vue` 版本不一样，vue的编译器也不一样

- vue2：`rollup-plugin-vue^5.1.9` + `vue-template-compiler`
- vue3：`rollup-plugin-vue^6.0.0` + `@vue/compiler-sfc`

Vue2 项目安装

```shell
yan add rollup-plugin-vue@5.1.9 vue-template-compiler --D
```

修改 `rollup.config.js` 

```js
import vue from 'rollup-plugin-vue'
export default {
  ...
  plugins:[
    vue()
  ]
}
```



#### rollup 命令行


```
-i, --input <filename>      要打包的文件（必须）
-o, --file <output>         输出的文件 (如果没有这个参数，则直接输出到控制台)
-f, --format <format>       输出的文件类型 (amd, cjs, esm, iife, umd)
-e, --external <ids>        将模块ID的逗号分隔列表排除
-g, --globals <pairs>       以`module ID:Global` 键值对的形式，用逗号分隔开
                              任何定义在这里模块ID定义添加到外部依赖
-n, --name <name>           生成UMD模块的名字
-h, --help                  输出 help 信息
-m, --sourcemap             生成 sourcemap (`-m inline` for inline map)
--amd.id                    AMD模块的ID，默认是个匿名函数
--amd.define                使用Function来代替`define`
--no-strict                 在生成的包中省略`"use strict";`
--no-conflict               对于UMD模块来说，给全局变量生成一个无冲突的方法
--intro                     在打包好的文件的块的内部(wrapper内部)的最顶部插入一段内容
--outro                     在打包好的文件的块的内部(wrapper内部)的最底部插入一段内容
--banner                    在打包好的文件的块的外部(wrapper外部)的最顶部插入一段内容
--footer                    在打包好的文件的块的外部(wrapper外部)的最底部插入一段内容
--interop                   包含公共的模块（这个选项是默认添加的）
--silent                    不要将警告打印到控制台
-w, --watch                  监听源文件是否有改动，如果有改动，重新打包
```

###  PostCSS 插件打包样式

安装 `rollup-plugin-postcss`

```shell
npm install --save-dev rollup-plugin-postcss
```

修改 `rollup.config.js`

```js
plugins: [
  postcss({
    extensions: [ '.css' ],
  })
]
```

`postcss` 好处是它支持插件化，可以使用你需要的那些特性，去掉不想用的特性，介绍项目中用到的几个插件

- `postcss-simple-vars` —— 这个插件允许你试用 `Sass` 式的变量，比如说：可以声明`$myColor:#fff` ，并在代码中像 `color:$myColor` 这样使用
- `postcss-css-variables`
- `postcss-nested` —— 这个插件允许使用嵌套的语法
- `postcss-cssnext` —— 这个插件可以让你使用更为现代甚至是面向未来的CSS语法
- `cssnano` —— 这个插件可以将输出的CSS压缩和简化

在 `postcss` 的配置对象中增加一个 `plugins` 属性

```js
plugins: [
  postcss({
    plugins: [
      simplevars(), 
      nested(), 
      cssnext({ warnForDuplicates: false }), 
      cssnano()
    ],
    extensions: [ '.css' ],
  })
]
```

::: tip
`cssnext()` 传入 `{ warnForDuplicates:false }`，因为 `cssnext()` 和 `cssnano()` 都会使用到 `Autoprefixer`，这会触发一个警告。`Autoprefixer` 会执行两次并且不会报出警告，放弃使用
:::

**支持 scss 打包**

安装 `sass`，`node-sass`, `sass-loader`



### 为Rollup增加一个监听插件

