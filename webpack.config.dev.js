const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  mode: "development",
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
  devtool: "inline-source-map",
  devServer: {
    port: 3030,
    contentBase: path.join(__dirname, "app"),
    hot: true,
    historyApiFallback: true
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
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
      filename: "index.html",
      inject: true,
      template: path.resolve(__dirname, "public", "index.html")
    })
  ]
}
