/// <reference types="node" />
export type GlobalPayload = typeof globalThis | typeof self | typeof window | typeof global;
export declare const isGlobalDefined: GlobalPayload;
