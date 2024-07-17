'use strict'

import { toFlatObject } from './toFlatObject'

interface ErrorConfig {
  [key: string]: undefined | string | number | boolean | ErrorConfig
}

interface CustomProps {
  [key: string]: undefined | string | number | boolean | ErrorConfig
}

/**
 * Create an Error with the specified message, config, error code, request, and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {ErrorConfig} [config] The config.
 */
export class DevlanderError extends Error {
  code?: string
  config?: ErrorConfig

  constructor(message: string, code?: string, config?: ErrorConfig) {
    super(message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = new Error().stack
    }

    this.name = 'DevlanderError'
    if (code) this.code = code
    if (config) this.config = config

    Object.defineProperty(this, 'DevlanderError', { value: true })
  }

  static from(
    error: Error,
    code?: string,
    config?: ErrorConfig,

    customProps?: CustomProps,
  ): DevlanderError {
    const devlanderError = Object.create(
      DevlanderError.prototype,
    ) as DevlanderError

    toFlatObject(
      error,
      devlanderError as unknown as Record<string, unknown>,
      (obj) => obj !== (Error.prototype as unknown),
      (prop) => prop !== 'DevlanderError',
    )

    DevlanderError.call(devlanderError, error.message, code, config)

    devlanderError.cause = error
    devlanderError.name = error.name

    if (customProps) {
      Object.assign(devlanderError, customProps)
    }

    return devlanderError
  }
}
