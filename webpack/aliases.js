const path = require('path');

module.exports = {
  entryPoint: path.join(__dirname, '../src/app/index.js'),
  src: path.join(__dirname, '../src'),
  pages: path.join(__dirname, '../src/app/pages'),
  images: path.join(__dirname, '../src/images'),
  styles: path.join(__dirname, '../src/styles')
};
