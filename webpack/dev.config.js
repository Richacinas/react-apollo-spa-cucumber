// Webpack config for development
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const assetsPath = path.resolve(__dirname, '../static/dist');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const babelrc = fs.readFileSync('./.babelrc', 'utf8');
let babelrcObject = {};

try {
  babelrcObject = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

const babelrcObjectDevelopment = (babelrcObject.env && babelrcObject.env.development) || {};

// merge global and dev-only plugins
const combinedPlugins = (babelrcObject.plugins || []).concat(babelrcObjectDevelopment.plugins);

const babelLoaderQuery = Object.assign(
  {},
  babelrcObject,
  babelrcObjectDevelopment,
  { plugins: combinedPlugins }
);
delete babelLoaderQuery.env;

const webpackConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: { main: ['./src/index.js'] },
  output: {
    path: assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].chunk.js',
    publicPath: `http://${host}:${port}/`,
  },
  performance: { hints: false },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, '../src')],
        loader: 'babel-loader',
        options: babelLoaderQuery,
      },
      {
        test: /\.json$/,
        include: [path.resolve(__dirname, '../src')],
        loader: 'json-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: [path.resolve(__dirname, '../src')],
        loaders: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: 'postcss.config.js' },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'application/octet-stream',
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'image/svg+xml',
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        loader: 'url-loader',
        options: { limit: 10240 },
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.json', '.js', '.jsx'],
  },
  plugins: [
    // https://goo.gl/dTQYan
    // new webpack.LoaderOptionsPlugin({
    // }),

    new webpack.IgnorePlugin(/webpack-stats\.json$/),

    new webpack.DefinePlugin({
      __CLIENT__: true,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true, // <-------- DISABLE redux-devtools HERE
    }),

    new ReactLoadablePlugin({ filename: path.join(assetsPath, 'loadable-chunks.json') }),

    new HtmlWebpackPlugin({
      template: './src/helpers/index.html',
      filename: './index.html',
    }),
  ],
};

module.exports = webpackConfig;
