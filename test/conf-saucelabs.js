/**
 * http://docs.travis-ci.com/user/ci-environment/
 */
var repo = process.env.TRAVIS_REPO_SLUG || 'AndersDJohnson/ng-click-select';
var branch = process.env.TRAVIS_BRANCH || 'testing';
var buildNumber = process.env.TRAVIS_BUILD_NUMBER || 0;
/**
 * http://docs.travis-ci.com/user/encryption-keys/
 */
var sauceUser = process.env.SAUCE_USERNAME || 'AndersDJohnson';
var sauceKey = process.env.SAUCE_ACCESS_KEY;

if (! sauceKey) {
  throw new Error("Must provide SAUCE_ACCESS_KEY environment variable.");
}

var baseUrl = 'https://rawgit.com/' + repo + '/' + branch + '/';
var specs = require('./specs');

var sauceName = 'Travis "' + repo + '"' + ' ' + buildNumber + ' (' + branch + ')';

exports.config = {
  specs: specs,
  baseUrl: baseUrl,
  sauceUser: sauceUser,
  sauceKey: sauceKey,
  /**
   * https://docs.saucelabs.com/reference/test-configuration/
   */
  capabilities: {
    browserName: 'chrome',
    build: buildNumber,
    tags: [repo, repo + ' (' + branch + ')', branch],
    name: sauceName
  }
};
