module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      main: {
        options: {
          port: 6502
        }
      }
    },
    protractor_webdriver: {
      options: {
        keepAlive: true // this lets protractor manage the driver
        // command: 'webdriver-manager start --standalone',
      },
      main: {}
    },
    protractor: {
      options: {
      },
      main: {
        configFile: './test/conf.js'
      },
      saucelabs: {
        configFile: './test/conf-saucelabs.js'
      },
    }
  });

  grunt.registerTask('test-e2e', [
    'connect:main',
    'protractor_webdriver:main',
    'protractor:main'
  ]);

  grunt.registerTask('test-e2e-saucelabs', [
    'protractor:saucelabs'
  ]);

  grunt.registerTask('travis', [
    'test-e2e-saucelabs'
  ]);

  require('load-grunt-tasks')(grunt);

};
