const webpack = require('webpack');
const aliases = require('./aliases');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebappWebpackPlugin = require('webapp-webpack-plugin');

module.exports = env => {
  const devPlugins = [new webpack.HotModuleReplacementPlugin(), new BundleAnalyzerPlugin()];
  const prodPlugins = [
    new webpack.LoaderOptionsPlugin({
      context: aliases.src,
      minimize: true,
      debug: false
    }),
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ];
  return [...mandatoryplugins, ...(env.development ? devPlugins : prodPlugins)];
};
