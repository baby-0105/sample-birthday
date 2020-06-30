const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.ejs',
    }),
    new HtmlWebpackPlugin({
      filename: './about.html',
      template: './src/about/index.ejs',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: 'ejs-compiled-loader',
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
}