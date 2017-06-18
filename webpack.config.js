const path = require('path');
const webpack = require('webpack');
const fs = require('fs-extra');


fs.copy("./src/index.html", "./dist/index.html", function (err) {
  if (err) return console.error(err)
});

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
    contentBase: path.resolve(__dirname, './dist')
  },
  node: {
    fs: "empty",
    dns: "empty",
    dgram: "empty",
    readline: "empty",
    child_process: "empty",
    net: "empty",
    tls: "empty"
  },
  module: {
    rules: [
      {
        test: /\.(js|es)$/,
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
  },
  resolve: {
    // allows extension-less require/import statements for files with these extensions
    extensions: ['.es', '.js']
  }
};
