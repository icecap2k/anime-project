module.exports = {
  presets: ['@babel/react', ['@babel/preset-env', { modules: 'commonjs' }]],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'add-module-exports',
    ['@babel/plugin-proposal-optional-chaining']
  ],
  env: {
    production: {
      plugins: ['transform-remove-console']
    }
  }
}
