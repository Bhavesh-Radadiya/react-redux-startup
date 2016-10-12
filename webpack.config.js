module.exports = {
  entry: './src',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

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
