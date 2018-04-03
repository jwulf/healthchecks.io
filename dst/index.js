"use strict";
var _debug = require("debug");
var https = require("https");
var debug = _debug('healthcheck');
function healthcheck(url, schedule) {
    if (schedule === void 0) { schedule = 30; }
    var check = function (url) { return function () { try {
        https.get(url);
    }
    catch (e) { } }; };
    if (!url) {
        console.log('No URL provided for healthcheck.io');
        return null;
    }
    if (!schedule || isNaN(parseInt(schedule.toString()))) {
        schedule = 30;
    }
    debug("Set up healthchecks.io on " + url + " every " + schedule + " minutes.");
    var heartbeat = check(url);
    heartbeat();
    return setInterval(heartbeat, schedule * 60 * 1000);
}
module.exports = healthcheck;
