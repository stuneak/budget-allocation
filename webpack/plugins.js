const webpack = require('webpack');
const aliases = require('./aliases');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = env => {
  const devPlugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ];
  const prodPlugins = [
    new webpack.LoaderOptionsPlugin({
      context: aliases.src,
      minimize: true,
      debug: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ];
  const mandatoryplugins = [
    new webpack.EnvironmentPlugin({
      NODE_ENV: env.production ? 'production' : 'development'
    }),
    new HtmlWebpackPlugin({ title: 'Budget allocation' }),
    new ExtractTextPlugin('styles.css')
  ];
  return [...mandatoryplugins, ...(env.development ? devPlugins : prodPlugins)];
};
