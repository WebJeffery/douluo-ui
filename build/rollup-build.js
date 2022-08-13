const fs = require('fs')
const components = require('../compoments.json')
const { styleOutputPath } = require('../config/rollup-config')
const { build } = require('./rollup-creat-Config')
const { resolve, getAssetsPath } = require('./utils')
// 创建 lib 目录
fs.mkdirSync(resolve())
// 创建 lib/theme 目录
fs.mkdirSync(getAssetsPath(styleOutputPath))
// 输出文件格式
const formatTypeList = [
  // { format: 'umd', min: false, suffix: '.umd.js' },
  // { format: 'umd', min: true, suffix: '.umd.min.js' },
  { format: 'cjs', min: false, suffix: '.common.js' },
  { format: 'cjs', min: true, suffix: '.common.min.js' },
  { format: 'es', min: false, suffix: '.es.js' },
  { format: 'es', min: true, suffix: '.es.min.js' }
]

let pkg = []
formatTypeList.forEach(({ format, min, suffix } = {}) => {
  Object.keys(components).forEach((moduleName) => {
    const input = components[moduleName]
    pkg.push({ min, format, suffix, moduleName, input, output: moduleName })
  })
})

build(pkg)
