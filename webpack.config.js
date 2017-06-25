const path = require('path');
const webpack = require('webpack');
const swig = require('swig');
const fs = require('fs-extra');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// fs.copy("./src/index.html", "./dist/index.html", function (err) {
//   if (err) return console.error(err)
// });
const isProd = process.env.NODE_ENV === 'production'
const indexTpl = swig.compileFile(`./src/index.swig`)
fs.writeFileSync(`./dist/index.html`, indexTpl({isProd}))

fs.copy("./src/static/favicon.ico", "./dist/favicon.ico", function (err) {
  if (err) return console.error(err)
});

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: ['./entry.jsx'],
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
    child_process: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(js|es|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] },
        }],
      },
      {
        test: /\.css$/,
        loader: isProd ? ExtractTextPlugin.extract('css-loader')
          : 'style-loader!css-loader',
      },
      {
        test: /\.(sass|scss)$/,
        loader:  isProd ? ExtractTextPlugin.extract('css-loader!sass-loader')
          : 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader?limit=65536'
      },
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
  resolve: {
    // allows extension-less require/import statements for files with these extensions
    extensions: ['.es', '.js', '.jsx']
  }
};
