"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var https = require("https");
var Healthcheck = /** @class */ (function () {
    function Healthcheck(url, minutes) {
        this.url = url;
        this.minutes = minutes;
        var httpLib = url.indexOf("https://") === 0 ? https : http;
        var check = function (url) { return function () {
            try {
                httpLib.get(url);
            }
            catch (e) { }
        }; };
        this.heartbeat = check(url);
        this.start();
    }
    Healthcheck.prototype.start = function () {
        this.stop();
        this.heartbeat();
        this.timer = setInterval(this.heartbeat, this.minutes * 60 * 1000);
    };
    Healthcheck.prototype.stop = function () {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
    };
    return Healthcheck;
}());
exports.Healthcheck = Healthcheck;
