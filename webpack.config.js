const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const WebpackMd5Hash = require("webpack-md5-hash");

module.exports = {
  entry: {
    main: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[chunkhash].js",
    pathinfo: false
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          name: "vendor",
          enforce: true
        },
        default: {
          minChunks: 2,
          priority: -20, 
          reuseExistingChunk: true
        }
      }
    }
  },
  devServer: {
    overlay: true //Shows a full-screen overlay in the browser when there are compiler errors or warnings
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'url-loader?limit=100000'
        }
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: false
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(s?)css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(["build/*.*"], {}), //remove build folder(s) before building
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css" //extracts CSS into separate files
    }),
    new HtmlWebpackPlugin({ 
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: true
      }
    }),
    new WebpackMd5Hash(), //replace a standard webpack chunkhash with md5
    new CopyWebpackPlugin([ 
      { from: 'src/assets', to: 'assets' }
    ]),
  ]
};

