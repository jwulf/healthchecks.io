import * as _debug from "debug";
import { Healthcheck } from "./Healthcheck";

const debug = _debug("healthcheck");

export function healthcheck(url: string, minutes = 30) {
  if (!url) {
    console.log("No URL provided for healthcheck.io");
    return null;
  }

  if (!minutes || isNaN(parseInt(minutes.toString()))) {
    minutes = 30;
  }
  debug(`Set up healthchecks.io on ${url} every ${minutes} minutes.`);
  return new Healthcheck(url, minutes);
}
