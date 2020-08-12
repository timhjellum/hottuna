const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const path = require("path")
const fse = require("fs-extra")

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy images", function () {
      fse.copySync("./app/assets/images", "./dist/assets/images")
    })
  }
}

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./app/App.js",

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
      /*
	  {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          publicPath: "/public/images/"
        }
	  },
	  */
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            publicPath: "/public/images/"
          }
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
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      filename: "index.html",
      inject: true,
      template: path.resolve(__dirname, "public", "index.html")
    }),
    new MiniCssExtractPlugin({ filename: "styles.[chunkhash].css" }),
    new RunAfterCompile()
  ]
}
