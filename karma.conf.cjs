const webpackConfig = require('./src/webpack.test.config.cjs');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/setupTests.js',
      'src/**/*.test.js',
      'src/**/*.test.jsx'
    ],
    preprocessors: {
      'src/**/*.test.js': ['webpack'],
      'src/**/*.test.jsx': ['webpack'],
      'src/setupTests.js': ['webpack']
    },
    webpack: webpackConfig,
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
      check: {
        global: {
          statements: 80,
          branches: 0,
          functions: 0,
          lines: 80
        }
      }
    },
    browsers: ['ChromeHeadless'],
    singleRun: true,
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-coverage'
    ]
  });
};
