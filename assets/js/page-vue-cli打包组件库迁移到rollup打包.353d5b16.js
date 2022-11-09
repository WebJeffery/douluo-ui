(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{682:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-cli-打包组件库迁移到-rollup-打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-打包组件库迁移到-rollup-打包"}},[s._v("#")]),s._v(" vue-cli 打包组件库迁移到 rollup 打包")]),s._v(" "),a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("vue-cli 打包是基于 webpack 打包的，缺点是：一 打包时间长，二是打包的体积大，这对组件库来说不是很好，而 rollup 打包库更合适，它的缺点是打包一些静态资源比如 图片、图标需要安装很多插件支持，所以尽量避免在组件库中增加静态资源，可以设计组件扩展插槽或接口")]),s._v(" "),a("h3",{attrs:{id:"安装-rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-rollup"}},[s._v("#")]),s._v(" 安装 rollup")]),s._v(" "),a("p",[s._v("rollup 打包完整的 vue 项目需要用到大量的插件，做个分类")]),s._v(" "),a("p",[a("strong",[s._v("基本的工程化插件")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("rollup 打包库")])]),s._v(" "),a("li",[a("p",[s._v("rollup-plugin-alias 路径别名")])]),s._v(" "),a("li",[a("p",[s._v("rollup-plugin-babel babel插件 将es6+转为es5")])]),s._v(" "),a("li",[a("p",[s._v("rollup-plugin-node-resolve  帮助 rollup 识别外部模块")])]),s._v(" "),a("li",[a("p",[s._v("rollup-plugin-commonjs 将commonjs模块转为es模块")])]),s._v(" "),a("li",[a("p",[s._v("rollup-plugin-terser 压缩代码")])]),s._v(" "),a("li",[a("p",[s._v("rollup-plugin-postcss css 打包插件，plugins 属性支持 css 预编译器 sass、less")])]),s._v(" "),a("li",[a("p",[s._v("rollup-plugin-copy 直接复制静态文件")])]),s._v(" "),a("li",[a("p",[s._v("rollup-plugin-filesize")])]),s._v(" "),a("li",[a("p",[s._v("rollup-plugin-img")])]),s._v(" "),a("li",[a("p",[s._v("rollup-plugin-json")])]),s._v(" "),a("li",[a("p",[s._v("rollup-plugin-replace")])])]),s._v(" "),a("p",[s._v("其他依赖")]),s._v(" "),a("ul",[a("li",[s._v("cross-env：跨 Mac、Window、Linux 平台运行 node 命令")]),s._v(" "),a("li",[s._v("rimraf：删除目录文件")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("script: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rollup:lib"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=production rimraf ./lib && node ./build/rollup.build"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("运行 "),a("code",[s._v("npm run rollup:lib")]),s._v(", 将 "),a("code",[s._v("process.env.NODE_ENV")]),s._v(" 赋值 "),a("code",[s._v("production")]),s._v(" 生产环境标识打包，删除 "),a("code",[s._v("lib")]),s._v(" 目录，执行 "),a("code",[s._v("build/rollup.build.js")]),s._v(" 打包文件")]),s._v(" "),a("h3",{attrs:{id:"rollup-plugin-vue-打包-vue-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollup-plugin-vue-打包-vue-文件"}},[s._v("#")]),s._v(" rollup-plugin-vue 打包 vue 文件")]),s._v(" "),a("p",[a("code",[s._v("rollup-plugin-vue")]),s._v(" 用于处理 "),a("code",[s._v(".vue")]),s._v(" 文件。"),a("code",[s._v("vue2")]),s._v(" 和 "),a("code",[s._v("vue3")]),s._v(" 项目所用的 "),a("code",[s._v("rollup-plugin-vue")]),s._v(" 版本不一样，vue的编译器也不一样")]),s._v(" "),a("ul",[a("li",[s._v("vue2："),a("code",[s._v("rollup-plugin-vue^5.1.9")]),s._v(" + "),a("code",[s._v("vue-template-compiler")])]),s._v(" "),a("li",[s._v("vue3："),a("code",[s._v("rollup-plugin-vue^6.0.0")]),s._v(" + "),a("code",[s._v("@vue/compiler-sfc")])])]),s._v(" "),a("p",[s._v("Vue2 项目安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yan "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" rollup-plugin-vue@5.1.9 vue-template-compiler "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--D")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改 "),a("code",[s._v("rollup.config.js")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rollup-plugin-vue'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"rollup-命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollup-命令行"}},[s._v("#")]),s._v(" rollup 命令行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('-i, --input <filename>      要打包的文件（必须）\n-o, --file <output>         输出的文件 (如果没有这个参数，则直接输出到控制台)\n-f, --format <format>       输出的文件类型 (amd, cjs, esm, iife, umd)\n-e, --external <ids>        将模块ID的逗号分隔列表排除\n-g, --globals <pairs>       以`module ID:Global` 键值对的形式，用逗号分隔开\n                              任何定义在这里模块ID定义添加到外部依赖\n-n, --name <name>           生成UMD模块的名字\n-h, --help                  输出 help 信息\n-m, --sourcemap             生成 sourcemap (`-m inline` for inline map)\n--amd.id                    AMD模块的ID，默认是个匿名函数\n--amd.define                使用Function来代替`define`\n--no-strict                 在生成的包中省略`"use strict";`\n--no-conflict               对于UMD模块来说，给全局变量生成一个无冲突的方法\n--intro                     在打包好的文件的块的内部(wrapper内部)的最顶部插入一段内容\n--outro                     在打包好的文件的块的内部(wrapper内部)的最底部插入一段内容\n--banner                    在打包好的文件的块的外部(wrapper外部)的最顶部插入一段内容\n--footer                    在打包好的文件的块的外部(wrapper外部)的最底部插入一段内容\n--interop                   包含公共的模块（这个选项是默认添加的）\n--silent                    不要将警告打印到控制台\n-w, --watch                  监听源文件是否有改动，如果有改动，重新打包\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h3",{attrs:{id:"postcss-插件打包样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss-插件打包样式"}},[s._v("#")]),s._v(" PostCSS 插件打包样式")]),s._v(" "),a("p",[s._v("安装 "),a("code",[s._v("rollup-plugin-postcss")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev rollup-plugin-postcss\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改 "),a("code",[s._v("rollup.config.js")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("postcss")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("extensions")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.css'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("postcss")]),s._v(" 好处是它支持插件化，可以使用你需要的那些特性，去掉不想用的特性，介绍项目中用到的几个插件")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("postcss-simple-vars")]),s._v(" —— 这个插件允许你试用 "),a("code",[s._v("Sass")]),s._v(" 式的变量，比如说：可以声明"),a("code",[s._v("$myColor:#fff")]),s._v(" ，并在代码中像 "),a("code",[s._v("color:$myColor")]),s._v(" 这样使用")]),s._v(" "),a("li",[a("code",[s._v("postcss-css-variables")])]),s._v(" "),a("li",[a("code",[s._v("postcss-nested")]),s._v(" —— 这个插件允许使用嵌套的语法")]),s._v(" "),a("li",[a("code",[s._v("postcss-cssnext")]),s._v(" —— 这个插件可以让你使用更为现代甚至是面向未来的CSS语法")]),s._v(" "),a("li",[a("code",[s._v("cssnano")]),s._v(" —— 这个插件可以将输出的CSS压缩和简化")])]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("postcss")]),s._v(" 的配置对象中增加一个 "),a("code",[s._v("plugins")]),s._v(" 属性")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("postcss")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("simplevars")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nested")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cssnext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("warnForDuplicates")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cssnano")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("extensions")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.css'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[a("code",[s._v("cssnext()")]),s._v(" 传入 "),a("code",[s._v("{ warnForDuplicates:false }")]),s._v("，因为 "),a("code",[s._v("cssnext()")]),s._v(" 和 "),a("code",[s._v("cssnano()")]),s._v(" 都会使用到 "),a("code",[s._v("Autoprefixer")]),s._v("，这会触发一个警告。"),a("code",[s._v("Autoprefixer")]),s._v(" 会执行两次并且不会报出警告，放弃使用")])]),s._v(" "),a("p",[a("strong",[s._v("支持 scss 打包")])]),s._v(" "),a("p",[s._v("安装 "),a("code",[s._v("sass")]),s._v("，"),a("code",[s._v("node-sass")]),s._v(", "),a("code",[s._v("sass-loader")])]),s._v(" "),a("h3",{attrs:{id:"为rollup增加一个监听插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为rollup增加一个监听插件"}},[s._v("#")]),s._v(" 为Rollup增加一个监听插件")])])}),[],!1,null,null,null);a.default=e.exports}}]);