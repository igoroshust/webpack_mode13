const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  devtool: "inline-source-map" /* отслеживание источников ошибок */,

  devServer: {
    /* настройки сервера */
    static: "./dist",
    hot: true,
    open: true /* при запуске сервера открываете вкладка страницы  */,
    port: 3001
    //        stats: {
    //            /* лаконичные логи (сокрытие информации о дочерних элементах
    //             и установка максимального количества отображаемых модулей */
    //            children: false,
    //            maxModules:0
    //        }
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
