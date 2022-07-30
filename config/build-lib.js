const { chainWebpackConfig } = require('./utils');

const fs = require('fs');
const path = require('path');
const folderPath = path.join('./', 'packages');

const files = fs.readdirSync(folderPath);

const components = { index: './src/index.js' };

for (const fileName of files) {
  components[fileName] = `./${folderPath}/${fileName}/index.js`;
}

module.exports = {
  outputDir: 'lib',
  productionSourceMap: false,

  configureWebpack: {
    entry: components,
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs2',
      libraryExport: 'default',
      library: 'douluo-ui'
    }
  },

  css: {
    sourceMap: true
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
