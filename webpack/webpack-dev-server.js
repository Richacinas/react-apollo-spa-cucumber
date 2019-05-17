const config = require('../src/config');
const webpackConfig = require('./dev.config');

const host = config.host || 'localhost';
const port = Number(config.port) || 3000;
const serverOptions = {
  quiet: false,
  noInfo: false,
  hot: true,
  inline: true,
  lazy: false,
  host,
  port,
  headers: { 'Access-Control-Allow-Origin': '*' },
};

const fullWebpackConfig = {
  ...webpackConfig,
  devServer: { ...serverOptions },
};

module.exports = fullWebpackConfig;
