const path = require('path');
const components = require('../components.json');

const resolve = dir => path.join(__dirname, '../', dir);

// 获取每个组件的绝对路径
const getComponentEntries = () => {
  const entryKeys = Object.keys(components);

  entryKeys.forEach(key => {
    components[key] = resolve(components[key]);
  });

  return components;
};

// { button: '/Users/xxx/packages/button/index.js' }
const componentEntries = getComponentEntries();

module.exports = {
  outputDir: resolve('lib'),
  configureWebpack: {
    entry: componentEntries,
    output: {
      //  文件名称
      filename: '[name].js',
      //  构建依赖类型
      libraryTarget: 'umd',
      //  库中被导出的项
      libraryExport: 'default',
      //  引用时的依赖名
      library: 'douluo-ui'
    }
  },
  css: {
    extract: {
      filename: 'theme/[name].css' //在lib文件夹中建立 theme 文件夹中，生成对应的css文件。
    }
  },
  /**
   * 删除splitChunks，因为每个组件是独立打包，不需要抽离每个组件的公共js出来。
   * 删除copy，不要复制public文件夹内容到lib文件夹中。
   * 删除html，只打包组件，不生成html页面。
   * 删除preload以及prefetch，因为不生成html页面，所以这两个也没用。
   * 删除hmr，删除热更新。
   * 删除自动加上的入口App。
   */
  chainWebpack: config => {
    config.optimization.delete('splitChunks');
    config.plugins.delete('copy');
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.plugins.delete('hmr');
    config.entryPoints.delete('app');
  }
};
