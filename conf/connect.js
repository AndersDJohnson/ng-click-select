var host = 'localhost';
/**
 * For available ports:
 * https://docs.saucelabs.com/reference/sauce-connect/#can-i-access-applications-on-localhost-
 */
var port = 8080;
var url = 'http://' + host + ':' + port;

module.exports = {
  host: host,
  port: port,
  url: url
};
