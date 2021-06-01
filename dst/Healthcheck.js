"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Healthcheck = void 0;
var events_1 = require("events");
var http = require("http");
var https = require("https");
var Healthcheck = /** @class */ (function (_super) {
    __extends(Healthcheck, _super);
    function Healthcheck(url, minutes) {
        var _this = _super.call(this) || this;
        _this.url = url;
        _this.minutes = minutes;
        var httpLib = url.indexOf("https://") === 0 ? https : http;
        var check = function (url) { return function () {
            try {
                httpLib.get(url);
            }
            catch (e) {
                _this.emit('error', e);
            }
        }; };
        _this.heartbeat = check(url);
        _this.start();
        return _this;
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
}(events_1.EventEmitter));
exports.Healthcheck = Healthcheck;
