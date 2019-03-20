/**
 * Webpack Development Config
 */

let baseConfig = require('./webpack.base.config.js');

module.exports = Object.assign(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3001,
    inline: true,
    hot: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
});
