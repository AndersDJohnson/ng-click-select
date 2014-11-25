/**
 * http://docs.travis-ci.com/user/ci-environment/
 */
var repo = process.env.TRAVIS_REPO_SLUG;
var branch = process.env.TRAVIS_BRANCH;
/**
 * http://docs.travis-ci.com/user/encryption-keys/
 */
var sauceKey = process.env.SAUCELABS_ACCESS_TOKEN;

var specs = require('./specs');

exports.config = {
  specs: specs,
  baseUrl: 'https://rawgit.com/' + repo + '/' + branch,
  sauceUser: 'adjohnson916',
  sauceKey: sauceKey
};
