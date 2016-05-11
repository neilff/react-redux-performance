const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log('========================================================');
console.log('WEBPACK NODE_ENV :: ', JSON.stringify(process.env.NODE_ENV));
console.log('========================================================');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-hot-middleware/client');
  }

  return sources;
}

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production',
    __MOCK_API__: process.env.MOCK_API === 'true',
    __TEST_UTILS__: process.env.NODE_ENV !== 'production' || process.env.QA_ENV === 'true',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new ExtractTextPlugin('styles.css'),
];

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];

const prodPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
    },
  }),
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins);

module.exports = {
  devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : '',
  entry: {
    bundle: getEntrySources(['./src/index']),
  },
  output: {
    publicPath: '/dist/',
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      containers: 'src/containers',
      modules: 'src/modules',
      constants: 'constants',
      store: 'src/store',
      shared: 'src/shared',
    },
    extensions: ['', '.js', '.jsx'],
  },
  plugins: plugins,
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader',
          'postcss-loader',
          'cssnext-loader'
        )
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader',
          'sass-loader'
        )
      },
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader?prefix=img/&limit=5000',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
    ],
  },
};
