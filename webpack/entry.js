const aliases = require('./aliases');

module.exports = env => {
  const entry = ['babel-polyfill'];
  if (env.development) {
    entry.push(
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server'
    );
  }
  entry.push(aliases.entryPoint);
  return entry;
};
