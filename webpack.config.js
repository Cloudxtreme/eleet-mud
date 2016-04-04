var webpack = require('webpack');

const webpackExtension = '.webpack';

module.exports = {
  entry: {
    app: './app/src/appRouter.js',
    vendor: ['react', 'jquery', 'underscore', 'flux']
  },
  output: {
    path: './public',
    filename: 'app' + webpackExtension + '.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    port: 7777,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [/*'eslint'*/]
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor' + webpackExtension + '.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  constants: {
    webpackExtension: webpackExtension
  }
};
