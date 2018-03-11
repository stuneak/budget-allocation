const ExtractTextPlugin = require('extract-text-webpack-plugin');
const aliases = require('./aliases');

const imageWebpackConfig = {
  mozjpeg: {
    progressive: true
  },
  gifsicle: {
    interlaced: false
  },
  optipng: {
    optimizationLevel: 4
  },
  pngquant: {
    quality: '75-90',
    speed: 3
  }
};

exports.js = {
  test: /\.jsx?$/,
  use: ['babel-loader', 'eslint-loader'],
  exclude: /node_modules/
};
exports.css = env => ({
  test: /\.css$/,
  use: env.production
    ? ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader']
    })
    : ['style-loader', 'css-loader'],
  include: /node_modules/
});
exports.images = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  include: aliases.images,
  loaders: [
    'file-loader?digest=hex&name=assets/images/img-[sha512:hash:base64:12].[ext]',
    {
      loader: 'image-webpack-loader',
      query: imageWebpackConfig
    }
  ]
};
