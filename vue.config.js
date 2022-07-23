const devConfig = require('./build/config.dev');
const prodConfig = require('./build/config.prod');

const isProd = process.env.NODE_ENV === 'production' ? true : false;

module.exports = isProd ? prodConfig : devConfig;
