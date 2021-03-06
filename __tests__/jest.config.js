const { resolve } = require('path');

const rootDir = resolve(__dirname, '..');
const rootConfig = require(`${rootDir}/jest.config.js`);

module.exports = {
  ...rootConfig,
  coverageDirectory: 'coverage/functional',
  rootDir,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        pageTitle: 'Weather API',
        publicPath: './html-report',
        filename: 'functional.html',
        expand: true,
      },
    ],
  ],
  displayName: 'e2e-tests',
  setupFilesAfterEnv: ["<rootDir>/__tests__/jest-setup.ts"],
  testMatch: ["<rootDir>/__tests__/**/*.spec.ts"]
};
