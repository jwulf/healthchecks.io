"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var https = require("https");
var _debug = require("debug");
var debug = _debug('healthcheck');
function healthcheck(url, schedule) {
    if (schedule === void 0) { schedule = 30; }
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
            }
            catch (e) { }
        }, schedule * 60 * 1000);
    }
    catch (e) {
        return null;
    }
}
exports.healthcheck = healthcheck;
