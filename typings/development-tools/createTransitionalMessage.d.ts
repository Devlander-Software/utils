interface TransitionalOptions {
    option: string;
    description: string;
}
export declare function createTransitionalMessage(version: string, name: string, messageTemplate?: string): (options: TransitionalOptions) => string;
export {};
