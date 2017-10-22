import * as https from 'https';
import * as _debug from 'debug';
const debug = _debug('healthcheck');

export function healthcheck(url: string, schedule = 30) {
	if (!url) {
		console.log('No URL provided for healthcheck.io');
		return null;
	}
	if (!schedule || isNaN(parseInt(schedule.toString()))) {
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
	} catch(e) {
		return null;
	}
}