const webpack = require('webpack');
const aliases = require('./aliases');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebappWebpackPlugin = require('webapp-webpack-plugin');

module.exports = env => {
  const devPlugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
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
    new WebappWebpackPlugin({
      logo: aliases.favicon,
      prefix: 'assets-[hash]/',
      inject: true
    }),
    new HtmlWebpackPlugin({
      title: 'Budget allocation',
      minify: {
        removeComments: true,
        sortAttributes: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        conservativeCollapse: true
      }
    }),
    new ExtractTextPlugin('styles.css')
  ];
  return [...mandatoryplugins, ...(env.development ? devPlugins : prodPlugins)];
};
