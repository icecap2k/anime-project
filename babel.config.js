module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            debug: false,
            useBuiltIns: 'entry',
          },
        ],
        '@babel/preset-flow',
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        [
          '@babel/plugin-transform-runtime',
          {
            regenerator: true,
          },
        ],
      ],
    },
    production: {
      presets: [
        ['@babel/preset-env', { modules: false, useBuiltIns: 'entry' }],
        '@babel/preset-flow',
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        [
          '@babel/plugin-transform-runtime',
          {
            regenerator: true,
          },
        ],
      ],
    },
    development: {
      presets: [
        ['@babel/preset-env', { modules: false, useBuiltIns: 'entry' }],
        '@babel/preset-flow',
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        [
          '@babel/plugin-transform-runtime',
          {
            regenerator: true,
          },
        ],
      ],
    },
  },
}
