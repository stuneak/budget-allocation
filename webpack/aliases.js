const path = require('path');

module.exports = {
  entryPoint: path.join(__dirname, '../src/app/index.js'),
  src: path.join(__dirname, '../src'),
  favicon: path.join(__dirname, '../src/app/favicon.png'),
  common: path.join(__dirname, '../src/app/common'),
  api: path.join(__dirname, '../src/app/api'),
  HOC: path.join(__dirname, '../src/app/HOC'),
  pages: path.join(__dirname, '../src/app/pages'),
  images: path.join(__dirname, '../src/images'),
  utils: path.join(__dirname, '../src/utils')
};
