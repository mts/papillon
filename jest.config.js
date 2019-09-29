module.exports = {
  testMatch: ['**/?(*.)test.js?(x)'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
    '!**/.storybook/**',
    '!**/.storybook-static/**',
    '!**/coverage/**',
    '!**/node_modules/**',
    'packages/**/*.{js,jsx}',
    '!packages/**/index.js',
    '!packages/**/*.test.js',
    '!packages/**/*.story.js',
    '!packages/**/*.render*.js',
    '!packages/**/build/**',
    '!packages/**/explorer/**',
    '!packages/**/node_modules/**',
    '!packages/**/webpack*',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx'],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 96,
      functions: 96,
      lines: 98,
    },
  },
}
