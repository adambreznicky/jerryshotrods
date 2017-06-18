const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: ['./app.es'],
  },
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src')
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.es$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ],
  }
};
