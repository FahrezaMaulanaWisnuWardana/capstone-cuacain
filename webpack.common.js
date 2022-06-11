const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader','css-loader'],
        },
        {
          test: /\.(png|jpeg|jpg|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/templates/index.html'),
        filename: 'index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/public/'),
            to: path.resolve(__dirname, 'dist/'),
          },
        ],
      }),
    ],
    devServer: {
      allowedHosts: 'all'
    },
  
  };
  