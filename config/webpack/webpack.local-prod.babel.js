import webpack from 'webpack'
import merge from 'webpack-merge'
import common from './webpack.common.babel'

export default merge(common, {
  mode: 'production',
  optimization: {
    minimize: false
  },

  plugins: []
})
