/* eslint-disable import/no-extraneous-dependencies *//* eslint-disable linebreak-style */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js',
  },

  mode: 'production',

  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },

  module: {
    rules: [

      {
        test: /\.s[ac]ss$/i,
        use: [

          'style-loader',

          'css-loader',

          'sass-loader',
        ],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
            },
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],

  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],

};
