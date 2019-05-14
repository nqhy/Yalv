const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
      server: './src/server/server-dev.js',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js'
    },
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }]
    },
    plugins: [
    ],
    watch: true,
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 300,
    }
  }
