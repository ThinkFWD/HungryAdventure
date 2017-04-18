const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/src/client.js',

  output: {
    path: path.resolve(`${__dirname}/build`),
    filename: 'bundle.js',
    publicPath: 'build/',
    pathinfo: true,
  },

  devtool: 'source-map',

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['stage-2'],
          plugins: ['transform-decorators-legacy'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
