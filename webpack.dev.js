const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");


module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // dev-server'in acacagi klasör.
    },
    port: 9000,
    watchFiles: ["src/*.html", "src/*.scss"], // Degisiklikleri takip edecegi noktalar.
    hot: true, // anlik güncelleyeyim mi?
  },
  output: {
    filename: "./js/[name].js", // olusturulacak bundle dosyasinin ismi.
    path: path.resolve(__dirname, "dist"), // olusturulacak bundle dosyasi hangi klasörün icerisinde olacak.
    clean: false,
  },

  module: {
    rules: [
      
      {
        test: /\.s(a|c)ss$/, // sonu css ile biten dosyalari yakalar.
        use: [
          "style-loader", // 3.step: parse edilen css kodlarini DOM a yükler.
          "css-loader", // 2.step: cevrilen css kodlarini  alip parse eder.
          "sass-loader", //1. ste: sass stillerini alip css cevirir.
        ],
      },
    ],
  },
});

