import webpack from 'webpack'
import merge from 'webpack-merge'
import common from './webpack.common.babel'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export default merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    port: 3333,
    historyApiFallback: true,
    contentBase: './dist'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ]
})
