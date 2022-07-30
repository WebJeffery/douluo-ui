const path = require('path')
const webpack = require('webpack');
const version = process.env.VERSION || require('../package.json').version;
const { chainWebpackConfig } = require('./utils');
const components = require('../compoments.json')

const banner =
  ' douluo-ui.js v' +
  version +
  '\n' +
  ' (c) 2022-' +
  new Date().getFullYear() +
  ' Jeffery\n' +
  ' Released under the MIT License.\n';
const externals = {
  'vue': {
    root: 'Vue',
    commonjs2: 'vue',
    commonjs: 'vue',
    amd: 'vue'
  },
  'element-ui': {
    root: 'ELEMENT',
    commonjs2: 'element-ui',
    commonjs: 'element-ui',
    amd: 'element-ui'
  }
};

module.exports = {
  outputDir: 'lib',
  productionSourceMap: false,

  configureWebpack: {
    entry: components,
    output: {
      filename: '[name].js',
      chunkFilename: '[id].js',
      libraryTarget: 'umd',
      libraryExport: 'default',
      library: 'DouluoUI',
      umdNamedDefine: true,
      globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    externals: externals,
    plugins: [
      new webpack.BannerPlugin(banner)
    ],
  },

  css: {
    sourceMap: false
  },

  chainWebpack: (config) => {
    // 删除splitChunks，因为每个组件是独立打包，不需要抽离每个组件的公共js出来。
    // 删除copy，不要复制public文件夹内容到lib文件夹中。
    // 删除html，只打包组件，不生成html页面。
    // 删除preload以及prefetch，因为不生成html页面，所以这两个也没用。
    // 删除hmr，删除热更新。
    // 删除自动加上的入口App。
    config.optimization.delete('splitChunks');
    config.plugins.delete('copy');
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.plugins.delete('hmr');
    config.entryPoints.delete('app');

    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => options);

    config.plugin('extract-css').tap((args) => [
      {
        filename: `css/[name].css`,
        chunkFilename: `css/[name].css`
      }
    ]);

    chainWebpackConfig(config);
  }
};
