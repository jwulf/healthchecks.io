import { EventEmitter } from "events";
import * as http from "http";
import * as https from "https";

export class Healthcheck extends EventEmitter {
  timer?: NodeJS.Timer;
  url: string;
  minutes: number;
  heartbeat: () => void;

  constructor(url: string, minutes: number) {
    super();
    this.url = url;
    this.minutes = minutes;
    const httpLib = url.indexOf("https://") === 0 ? https : http;
    const check = url => () => {
      try {
        httpLib.get(url);
      } catch (e) {
        this.emit('error', e)
      }
    };
    this.heartbeat = check(url);
    this.start();
  }

  start() {
    this.stop();
    this.heartbeat();
    this.timer = setInterval(this.heartbeat, this.minutes * 60 * 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }
}
