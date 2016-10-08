module.exports = {
  entry: './src',

  output: {
    path : './dist',
    filename: 'js/bundle.min.js'
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
      }
    ]
  },

  devServer: {
      inline: true,
      contentBase: './dist',
      port: 8080
   },
};
