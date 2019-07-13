import * as _debug from "debug";
import * as http from "http";
import * as https from "https";

const debug = _debug("healthcheck");

function healthcheck(url: string, schedule = 30) {
  const httpLib = url.indexOf("https://") === 0 ? https : http;
  const check = url => () => {
    try {
      httpLib.get(url);
    } catch (e) {}
  };

  if (!url) {
    console.log("No URL provided for healthcheck.io");
    return null;
  }
  if (!schedule || isNaN(parseInt(schedule.toString()))) {
    schedule = 30;
  }
  debug(`Set up healthchecks.io on ${url} every ${schedule} minutes.`);
  const heartbeat = check(url);
  heartbeat();
  return setInterval(heartbeat, schedule * 60 * 1000);
}

export = healthcheck;
