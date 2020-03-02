import webpack from 'webpack'
import path from 'path'

const settings = {
  path: path.resolve(__dirname, '../../src'),
  filename: 'bundle.js',
  entry: './app.js'
}

export default {
  entry: {
    main: ['@babel/polyfill', path.resolve(settings.path, settings.entry)]
  },
  context: settings.path,
  node: {
    fs: 'empty'
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              ['@babel/plugin-proposal-optional-chaining'],
              'add-module-exports'
            ]
          }
        }
      },
      { test: /\.json$/, loader: 'json-loader', type: 'javascript/auto' }
    ]
  }
}
