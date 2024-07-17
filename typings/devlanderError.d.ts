interface ErrorConfig {
    [key: string]: undefined | string | number | boolean | ErrorConfig;
}
interface CustomProps {
    [key: string]: undefined | string | number | boolean | ErrorConfig;
}
/**
 * Create an Error with the specified message, config, error code, request, and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {ErrorConfig} [config] The config.
 */
export declare class DevlanderError extends Error {
    code?: string;
    config?: ErrorConfig;
    constructor(message: string, code?: string, config?: ErrorConfig);
    static from(error: Error, code?: string, config?: ErrorConfig, customProps?: CustomProps): DevlanderError;
}
export {};
