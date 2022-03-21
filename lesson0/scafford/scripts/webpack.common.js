const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, '../test'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: 'all',
          test: /common\.css$/,
          name: 'common',
          enforce: true,
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              silent: true,
              transpileOnly: true,
              compilerOptions: {
                module: 'es6',
                target: 'es6'
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.less$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:5]'
              }
            }
          },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: ['url-loader'],
      }, 
      // {
      //   test: /\.html$/,
      //   use: ['html-loader']
      // },
      {
        test: /\.(xml|txt|html|cjs|theme)$/i,
        use: [
          {loader: 'raw-loader'}
        ]
      }]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   chunks: ['common', 'index'],
    //   filename: 'index.html',
    //   template: 'test/index.html'
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css"
    }),
  ],
}