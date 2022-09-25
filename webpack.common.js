const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  }, // webpack giris noktasi. Projeyi paketlemeye burdan baslar.
  module: {
    rules: [
      {
        test: /\.html$/i, // bununla htmldeki verilerin yüklenmesini sagladik
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // html gelecek dosya tipleri
        type: "asset/resource", //yüklenecegi klasörün ismi.
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
    }),
  ],
};

