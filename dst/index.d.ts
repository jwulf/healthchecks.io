/// <reference types="node" />
declare function healthcheck(url: string, schedule?: number): NodeJS.Timer | null;
export = healthcheck;
