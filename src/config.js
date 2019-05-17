const environment = {
  development: {
    isProduction: false,
    assetsPath: `http://${process.env.HOST || 'localhost'}:${+process.env.PORT}/dist/`,
  },
  production: {
    isProduction: true,
    assetsPath: '/dist/',
  },
}[process.env.NODE_ENV || 'development'];

const config = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
};

Object.assign(config, environment);

module.exports = config;
