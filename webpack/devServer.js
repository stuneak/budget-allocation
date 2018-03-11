const aliases = require('./aliases');

module.exports = {
  contentBase: aliases.src,
  disableHostCheck: true,
  historyApiFallback: true,
  hot: true,
  inline: true,
  proxy: {
    '/api/**': { target: 'http://localhost:3001' }
  },
  port: 3000,
  host: '0.0.0.0'
};
