/**
 * http://docs.travis-ci.com/user/ci-environment/
 */
var repo = process.env.TRAVIS_REPO_SLUG || 'AndersDJohnson/ng-click-select';
var branch = process.env.TRAVIS_BRANCH || 'testing';
var buildNumber = process.env.TRAVIS_BUILD_NUMBER || 0;

var sauceConfig = require('../conf/sauce');
var connectConfig = require('../conf/connect');

var specs = require('./specs');

var sauceName = 'Travis "' + repo + '"' + ' ' + buildNumber + ' (' + branch + ')';

exports.config = {
  specs: specs,
  baseUrl: connectConfig.url,
  sauceUser: sauceConfig.user,
  sauceKey: sauceConfig.key,
  sauceSeleniumAddress: sauceConfig.connect.seleniumAddress,
  /**
   * https://docs.saucelabs.com/reference/test-configuration/
   */
  capabilities: {
    browserName: 'chrome',
    build: buildNumber,
    tags: [repo, repo + ' (' + branch + ')', branch],
    name: sauceName,
    'tunnel-identifier': sauceConfig.connect.tunnelIdentifier
  }
};
