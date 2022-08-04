# vue-cli 打包vue-cli组件库迁移到 rollup 打包

### 前言

vue-cli 打包是基于 webpack，打包的缺点是：一 打包时间很长，第二是打包的体积很大，这对组件库来说不是很好，而 rollup 打包库更合适，而且 vite 也是基于 rollup 打包的

### 安装 rollup

rollup 打包完整的 vue 项目需要用到大量的插件，做个分类

**基本的工程化插件**

- rollup 打包库
- rollup-plugin-alias 路径别名
- rollup-plugin-babel babel插件 将es6+转为es5
- rollup-plugin-node-resolve  帮助 rollup 识别外部模块
- rollup-plugin-commonjs 将commonjs模块转为es模块
- rollup-plugin-terser 压缩代码
- rollup-plugin-vue vue2.x使用5.x版本 vue3使用6.x版本

- rollup-plugin-postcss
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
