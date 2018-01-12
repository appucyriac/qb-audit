const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
      filename: './build/bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    // Emit source maps so we can debug our code in the browser
    devtool: 'source-map',
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        } ,{
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            use: 'css-loader',
          })}

        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },
      plugins: [
        new HtmlPlugin({
          template: 'index.html'
        }),
        new ExtractTextPlugin('style.bundle.css'),
      ]
    };