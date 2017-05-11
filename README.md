# healthchecks.io
Ping a [healthchecks.io](healthchecks.io) endpoint on a schedule.

Example usage:

```
const healthcheck = require('healthcheck.io');

// Ping healthcheck endpoint every 15 minutes
healthcheck('https://hchk.io/f55d2579-8dc2-4149-83f4-263cabe334c0', 15);
```



