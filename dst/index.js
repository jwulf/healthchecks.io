"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _debug = require("debug");
var Healthcheck_1 = require("./Healthcheck");
var debug = _debug("healthcheck");
function healthcheck(url, minutes) {
    if (minutes === void 0) { minutes = 30; }
    if (!url) {
        console.log("No URL provided for healthcheck.io");
        return null;
    }
    if (!minutes || isNaN(parseInt(minutes.toString()))) {
        minutes = 30;
    }
    debug("Set up healthchecks.io on " + url + " every " + minutes + " minutes.");
    return new Healthcheck_1.Healthcheck(url, minutes);
}
exports.healthcheck = healthcheck;
