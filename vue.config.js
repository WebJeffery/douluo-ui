const devConfig = require('./config/build-dev');
const buildConfig = require('./config/build-lib');
const buildDocConfig = require('./config/build-doc');

// 环境打包对应配置
const buildTargetMaps = {
    development: devConfig,
    libary: buildConfig,
    doc: buildDocConfig
}

module.exports = buildTargetMaps[process.env.NODE_ENV] || buildTargetMaps.libary;
