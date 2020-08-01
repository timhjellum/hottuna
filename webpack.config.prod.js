const HtmlWebPackPlugin = require("html-webpack-plugin")
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
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader"
      },
      {
        test: /\.less$/,
        use: "less-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html"
    })
  ]
}
