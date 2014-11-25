
var user = process.env.SAUCE_USERNAME || 'AndersDJohnson';
/**
 * For Travis, the key will be encrypted:
 * http://docs.travis-ci.com/user/encryption-keys/
 */
var key = process.env.SAUCE_ACCESS_KEY;

if (! key) {
  throw new Error("Must provide SAUCE_ACCESS_KEY environment variable.");
}

var connect = {};
connect.port = '4445';
/**
 * For some reason, we must intentionally exclude the http protocol scheme from `seleniumAddress`:
 */
connect.seleniumAddress = 'localhost:' + connect.port + '/wd/hub';
connect.tunnelIdentifier = 'node connect since 11252014';

module.exports = {
  init: true,
  user: user,
  key: key,
  connect: connect
};
