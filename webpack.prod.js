const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "./js/[name].[contenthash].js", // olusturulacak bundle dosyasinin ismi.
    path: path.resolve(__dirname, "dist"), // olusturulacak bundle dosyasi hangi klasörün icerisinde olacak.
    clean: true,
    assetModuleFilename: "img/[hash][ext]",
  },

  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/, // sonu css ile biten dosyalari yakalar.
        use: [
          MiniCssExtractPlugin.loader, // 3.step: parse edilen css kodlarini alta plugin ayarlarinda belirtilen dosyalara ayiracak.
          "css-loader", // 2.step: cevrilen css kodlarini  alip parse eder.
          "sass-loader", //1. ste: sass stillerini alip css cevirir.
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,// bu klasörleri ayri tut.
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // babel in cevirme islemi icin hangi preset'i kullanacagini belirliyoruz preset-env classic js i es5 cevirmek icin kullanilir.
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].[contenthash].css",
    }),
  ],
});

