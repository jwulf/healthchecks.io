/// <reference types="node" />
import { EventEmitter } from "events";
export declare class Healthcheck extends EventEmitter {
    timer?: NodeJS.Timer;
    url: string;
    minutes: number;
    heartbeat: () => void;
    constructor(url: string, minutes: number);
    start(): void;
    stop(): void;
}
