var https = require('https');
var debug = require('debug')('healthcheck');

module.exports = function healthcheck(url, schedule) {
	if (!url) {
		console.log('No URL provided for healthcheck.io');
		return;
	}
	if (!schedule || isNaN(parseInt(schedule))) {
		schedule = 30;
	}
	debug('Set up healthchecks.io on ' + url + ' every ' + schedule + ' minutes.'); 
	https.get(url);
	return setInterval(function check() {
		https.get(url);
	}, schedule * 60 * 1000);
}
