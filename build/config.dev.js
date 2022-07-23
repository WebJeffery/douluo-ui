const path = require('path');

module.exports = {
  configureWebpack: {
    entry: path.join(__dirname, '../examples/main.js')
  }
};
