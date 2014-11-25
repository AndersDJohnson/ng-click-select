module.exports = function (grunt) {

  var sauceConfig = require('./conf/sauce');
  var connectConfig = require('./conf/connect');
  var seleniumConfig = require('./conf/selenium');

  grunt.initConfig({
    connect: {
      options: {
        hostname: connectConfig.host,
        port: connectConfig.port
      },
      main: {},
      saucelabs: {},
      alive: {
        options: {
          keepalive: true
        }
      }
    },
    protractor_webdriver: {
      options: {
        port: seleniumConfig.port,
        keepAlive: true // this lets protractor manage the driver
        // command: 'webdriver-manager start --standalone',
      },
      main: {}
    },
    protractor: {
      options: {
      },
      main: {
        options: {
          configFile: './test/conf.js'
        }
      },
      saucelabs: {
        options: {
          configFile: './test/conf-saucelabs.js',
          keepAlive: false // may want to keepAlive on failure to disconnect from Sauce Connect
        }
      },
    },
    sauce_connect: {
      main: {
        options: {
          username: sauceConfig.user,
          accessKey: sauceConfig.key,
          tunnelIdentifier: sauceConfig.connect.tunnelIdentifier,
          port: sauceConfig.connect.port,
          verbose: false
        }
      }
    },
    'sauce-connect-close': {}
  });

  grunt.registerTask('test-e2e', [
    'connect:main',
    'protractor_webdriver:main',
    'protractor:main'
  ]);

  grunt.registerTask('test-e2e-saucelabs', [
    'sauce_connect:main',
    'connect:saucelabs',
    'protractor:saucelabs',
    'sauce-connect-close'
  ]);

  grunt.registerTask('travis', [
    'test-e2e-saucelabs'
  ]);

  require('load-grunt-tasks')(grunt);

};
