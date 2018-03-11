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
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
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
            unsafe_comps: true,
            properties: true,
            keep_fargs: false,
            pure_getters: true,
            collapse_vars: true,
            unsafe: true,
            warnings: false,
            screw_ie8: true,
            sequences: true,
            dead_code: true,
            drop_debugger: true,
            comparisons: true,
            conditionals: true,
            evaluate: true,
            booleans: true,
            loops: true,
            unused: true,
            hoist_funs: true,
            if_return: true,
            join_vars: true,
            cascade: true,
            drop_console: true
          }
        }
      })
    ]
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
