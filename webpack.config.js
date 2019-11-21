var path = require('path');

// Simple rule: one entry point per HTML page.

// SPA: one entry point,
// entry: './src/index.js',

// MPA: multiple entry points.
// entry: {
//   home: './home.js',
//   about: './about.js',
//   contact: './contact.js'
// }

// publicPath was slighty confusing but explained here:
// https://webpack.js.org/configuration/output/#outputpublicpath

module.exports = {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
    publicPath: '/js/',
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  }
};