const path = require('path');
module.exports = {
  target: 'web',
  entry: './main.js',
  output: {
    path: path.join(process.cwd(), './dist'),
    filename: '[name].js',
  },
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
};
