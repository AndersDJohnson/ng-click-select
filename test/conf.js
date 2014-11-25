
var specs = require('./specs');

var seleniumConfig = require('../conf/selenium');
var connectConfig = require('../conf/connect');

exports.config = {
  specs: specs,
  baseUrl: connectConfig.url,
  seleniumAddress: seleniumConfig.seleniumAddress
};
