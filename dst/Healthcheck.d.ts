/// <reference types="node" />
export declare class Healthcheck {
    timer?: NodeJS.Timer;
    url: string;
    minutes: number;
    heartbeat: () => void;
    constructor(url: string, minutes: number);
    start(): void;
    stop(): void;
}
