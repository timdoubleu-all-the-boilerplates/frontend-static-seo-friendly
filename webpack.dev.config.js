const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
      port: 8080
    },

  entry: {
    app: './src/js/app.js',
    index: './src/js/index.js',
    pageTwo: './src/js/page-two.js',
  },

  // html-loader configuration to allow requires within
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          interpolate: true
        }
      }],
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      title: 'Homepage',
      inject: true,
      chunks: ['app', 'index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/page-two.html',
      title: 'Page Two',
      inject: true,
      chunks: ['app', 'pageTwo'],
      filename: 'page-two.html'
    })
  ]
};