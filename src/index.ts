import * as _debug from "debug";
import * as http from "http";
import * as https from "https";

const debug = _debug("healthcheck");

export function healthcheck(url: string, minutes = 30) {
  if (!url) {
    console.log("No URL provided for healthcheck.io");
    return null;
  }
  const httpLib = url.indexOf("https://") === 0 ? https : http;
  const check = url => () => {
    try {
      httpLib.get(url);
    } catch (e) {}
  };

  if (!minutes || isNaN(parseInt(minutes.toString()))) {
    minutes = 30;
  }
  debug(`Set up healthchecks.io on ${url} every ${minutes} minutes.`);
  const heartbeat = check(url);
  heartbeat();
  return setInterval(heartbeat, minutes * 60 * 1000);
}
