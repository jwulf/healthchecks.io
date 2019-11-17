# healthchecks.io

The legendary [healthchecks.io](https://healthchecks.io) npm module. 

**Literally the simplest way to monitor the availability of your JavaScript application - _for free!_**

Healthchecks.io is a free service that allows you to monitor the availability of your application. Receive notifications when your app goes down via email, Slack, Telegram message, or a number of other integrations.

This JavaScript modules allows you to ping a healthchecks.io endpoint on a schedule.

## To use

Install the package using `npm` or `yarn`:

```
# if you use npm

npm i -S healthchecks.io 
```
```
# if you use yarn

yarn add healthchecks.io 
```

Example usage:

```
import { healthcheck } from 'healthchecks.io'; // TypeScript
const healthcheck = require('healthcheck').healthcheck: // JavaScript

const url = 'https://hchk.io/f55d2579-8dc2-4149-83f4-263cabe334c0';

// Ping healthcheck endpoint every 15 minutes

const check = healthcheck(url, 15);

check.stop(); // can restart with check.start()
```



