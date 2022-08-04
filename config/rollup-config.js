const version = require('../package.json').version

module.exports = {
  banner: `/*
  * douluo-ui v ${version}
  * Copyright © 2022-${new Date().getFullYear()} douluo-ui
  * Released under the MIT License.\n
  */`,
  // 打包样式目录
  styleOutputPath: 'theme',
  // 打包脚步目录
  outputPath: 'lib',
  // 清空console
  clearConsole: true,
  rollupResolve: {
    extensions: ['.js', '.vue', '.json']
  },
  // 打包忽略
  externalMap: {
    vue: 'Vue',
    lodash: 'lodash'
  }
}
