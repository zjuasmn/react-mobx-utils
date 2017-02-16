const webpack = require('webpack');

module.exports = {
  output: {
    library: 'reactUtilities',
    libraryTarget: 'umd'
  },
  
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  externals: {
    react: 'React',
  }
};