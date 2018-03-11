const path = require('path');

module.exports = {
  entryPoint: path.join(__dirname, '../src/app/index.js'),
  src: path.join(__dirname, '../src'),
  api: path.join(__dirname, '../src/app/api'),
  pages: path.join(__dirname, '../src/app/pages'),
  images: path.join(__dirname, '../src/images'),
  styles: path.join(__dirname, '../src/styles')
};
