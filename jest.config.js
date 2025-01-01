export default {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/samaavesh/v1/uploads/index.js', // Replace with the path to the file you want to ignore
  ],
};