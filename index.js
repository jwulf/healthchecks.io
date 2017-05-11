const https = require('https');

module.exports = function healthcheck(url, schedule) {
	https.get(url);
	return setInterval(function check() {
		https.get(url);
	}, schedule * 60 * 1000);
}
