var path = require('path');

module.exports = {
  entry: './src',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path : './dist/assets',
    publicPath: '/assets/',
    filename: 'bundle.min.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',

        query: {
           presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
    ]
  },

  devServer: {
      inline: true,
      contentBase: './dist',
      port: 8080
   },
};
