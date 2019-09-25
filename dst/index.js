"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _debug = require("debug");
var http = require("http");
var https = require("https");
var debug = _debug("healthcheck");
function healthcheck(url, minutes) {
    if (minutes === void 0) { minutes = 30; }
    if (!url) {
        console.log("No URL provided for healthcheck.io");
        return null;
    }
    var httpLib = url.indexOf("https://") === 0 ? https : http;
    var check = function (url) { return function () {
        try {
            httpLib.get(url);
        }
        catch (e) { }
    }; };
    if (!minutes || isNaN(parseInt(minutes.toString()))) {
        minutes = 30;
    }
    debug("Set up healthchecks.io on " + url + " every " + minutes + " minutes.");
    var heartbeat = check(url);
    heartbeat();
    return setInterval(heartbeat, minutes * 60 * 1000);
}
exports.healthcheck = healthcheck;
