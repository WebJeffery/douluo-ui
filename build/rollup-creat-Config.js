const fs = require('fs')
const rollup = require('rollup') // rollup 打包库
const alias = require('rollup-plugin-alias') // 路径别名
const babel = require('rollup-plugin-babel') // babel插件 将es6+转为es5
const resolve = require('rollup-plugin-node-resolve') // 帮助 rollup 识别外部模块
const commonjs = require('rollup-plugin-commonjs') // 将commonjs模块转为es模块
const { terser } = require('rollup-plugin-terser') // 压缩代码
const cleanup = require('rollup-plugin-cleanup') // 删除注释
const vue = require('rollup-plugin-vue') // 编辑 vue 组件
const image = require('@rollup/plugin-image')
const replace = require('rollup-plugin-replace') // 帮助rollup识别一些特有的参数，如process.env.NODE_ENV
const json = require('rollup-plugin-json')
const filesize = require('rollup-plugin-filesize') // 显示打包出来的文件大小

const { getAssetsPath, env, fsExistsSync, chalkConsole } = require('./utils.js')
const rollupAlias = require('../config/alias.js')
const {
  banner,
  styleOutputPath,
  externalMap,
  rollupResolve
} = require('../config/rollup-config.js')

function createPlugins({ min } = {}) {
  const exclude = 'node_modules/**'
  const plugins = [
    alias({
      entries: rollupAlias,
      resolve: rollupResolve.extensions
    }),
    babel({
      presets: ["@vue/babel-preset-jsx"],
      runtimeHelpers: true,
      // 只编译我们的源代码
      exclude
    }),
    resolve({
      extensions: rollupResolve.extensions,
      exclude: exclude  // 排除node_modules
    }),
    commonjs(),
    vue({
      css: false,
      compileTemplate: true
    }),
    json(),
    filesize(),
    image({
      hash: false,
      output: getAssetsPath('/img'), // default the root
      extensions: /\.(png|jpg|jpeg|gif|svg)$/,
      limit: 8192, // default 8192(8k)
      exclude
    }),
    replace({
      exclude,
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
  ]
  if (min) {
    // To-Do cleanup 删除注释没起作用
    plugins.push(terser(), cleanup())
  }
  return plugins
}

/**
 * 打包
 * @param {*} config
 */
function build(builds) {
  let buildCount = 0

  const total = builds.length
  const next = async () => {
    chalkConsole.building(buildCount + 1, total)
    await buildEntry(builds[buildCount])
    buildCount++
    buildCount < total ? next() : chalkConsole.success()
  }
  next()
}
/**
 * 打包入口
 * @param {*} config
 */
async function buildEntry(config) {
  const { input, output, suffix , format, moduleName } = config

  const inputOptions = {
    input,
    external: Object.keys(externalMap),
    plugins: createPlugins(config)
  }
  const fullName = output + suffix
  const file = getAssetsPath(fullName)
  const outOptions = {
    file,
    format,
    name: moduleName,
    // exports: 'named',
    globals: externalMap
    // entryFileNames: file
  }
  const bundle = await rollup.rollup(inputOptions)
  let { output: outputData } = await bundle.generate(outOptions)

  await write({ output: outputData, fileName: output, format, fullName, file })
}
/**
 * 输入js文件
 * @param {*} param0
 */
async function write({ output, file, fileName } = {}) {
  for (const { isAsset, code, source } of output) {
    if (isAsset) {
      const filePath = getAssetsPath(`/${styleOutputPath}/${fileName}.css`)

      !fsExistsSync(filePath) && fs.writeFileSync(filePath, banner + source.toString())
    } else {
      fs.writeFileSync(file, banner + code)
    }
  }
}
module.exports = {
  build
}
