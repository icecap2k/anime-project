/**
 * Jest configuration file
 */

module.exports = {
  verbose: true,
  automock: false,
  setupFiles: ['<rootDir>/config/shim.js', '<rootDir>/config/setupTest.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/@interiorvista/(?!planner2d)'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[tj]s?(x)'],
  //   testPathIgnorePatterns: ['/node_modules/'],
  globals: {
    collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**', '!**/cypress/**']
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  }
}
