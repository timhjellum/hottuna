const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")
module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./app/Main.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },

  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          publicPath: "./images/**"
        }
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {}
        }
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      },
      {
        test: /\.(less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: "index.html",
      inject: true,
      template: path.resolve(__dirname, "public", "index.html")
    }),
    new MiniCssExtractPlugin({ filename: "styles.[chunkhash].css" })
  ]
}
