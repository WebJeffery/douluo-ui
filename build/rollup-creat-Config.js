const rollup = require('rollup') // rollup 打包库
const alias = require('rollup-plugin-alias') // 路径别名
const babel = require('rollup-plugin-babel') // babel插件 将es6+转为es5
const resolve = require('rollup-plugin-node-resolve') // 帮助 rollup 识别外部模块
const commonjs = require('rollup-plugin-commonjs') // 将commonjs模块转为es模块
const { terser } = require('rollup-plugin-terser') // 压缩代码
const vue = require('rollup-plugin-vue') // 编辑 vue 组件
const image = require('rollup-plugin-img')
const replace = require('rollup-plugin-replace') // 帮助rollup识别一些特有的参数，如process.env.NODE_ENV
const json = require('rollup-plugin-json')
const postcss = require('rollup-plugin-postcss')
const filesize = require('rollup-plugin-filesize') // 显示打包出来的文件大小
const cssnano = require('cssnano')
const simplevars = require('postcss-simple-vars')
const nested = require('postcss-nested')
const cssnext = require('postcss-cssnext')
const fs = require('fs')
const sass = require('node-sass')

const { getAssetsPath, env, fsExistsSync, chalkConsole } = require('./utils')
const rollupAlias = require('../config/alias')
const {
  banner,
  styleOutputPath,
  externalMap,
  rollupResolve
} = require('../config/rollup-config')

function createPlugins({ min } = {}) {
  const exclude = 'node_modules/**'
  const plugins = [
    alias({
      entries: rollupAlias,
      resolve: rollupResolve.extensions
    }),
    babel({
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
      css: false
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
    postcss({
      plugins: [simplevars(), nested(), cssnext({ warnForDuplicates: false }), cssnano()],
      inject: false,
      // sourceMap: true,
      extract: true, // 输出路径
      minimize: false, // 未压缩，生产环境开启压缩
      extensions: ['.css', '.scss'],
      // 在打包过程中需要配合 node-sass 使用
      process: function(context) {
        return new Promise((resolve, reject) => {
          sass.render({
            file: context
          }, function(err, result) {
            if (!err) {
              resolve(result)
            } else {
              reject(err)
            }
          })
        })
      }
    }),
    replace({
      exclude,
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
  ]
  if (min) {
    plugins.push(terser())
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
  const { output, suffix, input, format, moduleName } = config

  const inputOptions = {
    input,
    external: Object.keys(externalMap),
    plugins: createPlugins(config)
  }
  const fullName = output + suffix
  const file = getAssetsPath(fullName)
  const outOptions = {
    // dir: getAssetsPath(),
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
      const filePath = file
      let codeSource = code.replace(/\s?const\s/g, ' var ')
      fs.writeFileSync(filePath, banner + codeSource)
    }
  }
}
module.exports = {
  build
}
