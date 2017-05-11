var https = require('https');
var debug = require('debug')('healthcheck');

module.exports = function healthcheck(url, schedule) {
	if (!schedule || isNaN(parseInt(schedule))) {
		schedule = 30;
	}
	var time = schedule * 60 * 1000;
	debug('Set up healthchecks.io on ' + url + ' every ' + time + ' minutes.'; 
	https.get(url);
	return setInterval(function check() {
		https.get(url);
	}, schedule * 60 * 1000);
}
