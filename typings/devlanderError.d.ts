interface ErrorConfig {
    [key: string]: undefined | string | number | boolean | ErrorConfig;
}
interface CustomProps {
    [key: string]: undefined | string | number | boolean | ErrorConfig;
}
/**
 * Create an Error with the specified message, config, error code, request, and response.
 *
 * @param {string} message - The error message.
 * @param {string} [code] - The error code (for example, 'ECONNABORTED').
 * @param {ErrorConfig} [config] - The config.
 */
export declare class DevlanderError extends Error {
    code?: string;
    config?: ErrorConfig;
    constructor(message: string, code?: string, config?: ErrorConfig);
    /**
     * Creates a `DevlanderError` instance from an existing error, with optional custom properties.
     *
     * @param {Error} error - The original error object.
     * @param {string} [code] - The error code (for example, 'ECONNABORTED').
     * @param {ErrorConfig} [config] - The config.
     * @param {CustomProps} [customProps] - Additional custom properties to assign to the error.
     * @returns {DevlanderError} - The new `DevlanderError` instance.
     */
    static from(error: Error, code?: string, config?: ErrorConfig, customProps?: CustomProps): DevlanderError;
}
export {};
