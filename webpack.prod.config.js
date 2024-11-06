const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.js",

  devServer: {
    /* настройки сервера */
    static: "./dist",
    open: true /* при запуске сервера открываете вкладка страницы  */,
    hot: false,
    port: 8080
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: "src/index.pug" })
  ],
  module: {
    rules: [
      {
        /* TEST: пропускаем через загрузчики файлы с указанным расширением */
        test: /\.css$/,
        /* USE: загрузчики, преобразующие файлы в модули */
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { esModule: true } },
          "css-loader"
        ]
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: { pretty: true }
      }
    ]
  },
  output: {
    filename: "bundle.js"
  }
};
