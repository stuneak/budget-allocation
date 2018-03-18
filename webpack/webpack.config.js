const path = require('path');
const entry = require('./entry');
const aliases = require('./aliases');
const devServer = require('./devServer');
const plugins = require('./plugins');
const rules = require('./rules');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => ({
  entry: entry(env),
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../build/frontend'),
    publicPath: '',
    chunkFilename: '[name].js',
    filename: '[name].js'
  },
  module: {
    rules: [rules.js, rules.css(env), rules.images]
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          output: {
            comments: false
          },
          compress: {
            dead_code: true,
            drop_debugger: true,
            comparisons: true,
            unused: true,
            drop_console: true
          }
        }
      })
    ],
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -20,
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.json', '.js', '.jsx'],
    alias: aliases
  },
  mode: env.development ? 'development' : 'production',
  devServer: devServer,
  plugins: plugins(env)
});
