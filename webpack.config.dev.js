const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  entry: "./app/Main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all"
    }
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "app"),
    inline: true,
    hot: true,
    port: 3030,
    open: true,
    historyApiFallback: true
  },
  watch: true,
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
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader?url=false",
          {
            loader: "less-loader"
            //, options: { plugins: postCSSPlugins }
          }
        ]
      },
      {
        test: /\.(png|j?g|gif)?$/,
        use: "file-loader"
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            encoding: "base64"
          }
        }
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
