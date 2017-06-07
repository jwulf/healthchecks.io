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
	try {
		https.get(url);
		return setInterval(function check() {
			try {
				https.get(url);
			} catch(e) { }
		}, schedule * 60 * 1000);
	} catch(e) { }
}