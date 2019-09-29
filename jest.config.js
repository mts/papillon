module.exports = {
  testMatch: ['**/?(*.)test.js?(x)'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  collectCoverageFrom: [
    '!**/.storybook/**',
    '!**/.storybook-static/**',
    '!**/coverage/**',
    '!**/node_modules/**',
    'packages/**/*.{js,jsx}',
    '!packages/**/index.js',
    '!packages/**/*.test.js',
    '!packages/**/*.story.js',
    '!packages/**/*.render.js',
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
      statements: 80,
      branches: 54,
      functions: 88,
      lines: 80,
    },
  },
}
