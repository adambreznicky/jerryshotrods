const path = require('path');
const webpack = require('webpack');
const swig = require('swig');
const fs = require('fs-extra');

// fs.copy("./src/index.html", "./dist/index.html", function (err) {
//   if (err) return console.error(err)
// });
const isProd = process.env.NODE_ENV === 'production'
const indexTpl = swig.compileFile(`./src/index.swig`)
fs.writeFileSync(`./dist/index.html`, indexTpl({isProd}))

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
    fs: "empty"
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
    extensions: ['.es', '.js', '.jsx']
  }
};
