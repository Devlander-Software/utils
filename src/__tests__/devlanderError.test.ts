import { DevlanderError } from "../devlanderError";

describe('DevlanderError', () => {
  test('should create an error with message, code, and config', () => {
    const message = 'Something went wrong';
    const code = 'ECONNABORTED';
    const config = { url: 'http://example.com' };

    const error = new DevlanderError(message, code, config);

    expect(error).toBeInstanceOf(DevlanderError);
    expect(error.message).toBe(message);
    expect(error.code).toBe(code);
    expect(error.config).toBe(config);
    expect(error.name).toBe('DevlanderError');
    expect(error).toHaveProperty('stack');
  });

  test('should create an error without code and config', () => {
    const message = 'Something went wrong';

    const error = new DevlanderError(message);

    expect(error).toBeInstanceOf(DevlanderError);
    expect(error.message).toBe(message);
    expect(error.code).toBeUndefined();
    expect(error.config).toBeUndefined();
    expect(error.name).toBe('DevlanderError');
    expect(error).toHaveProperty('stack');
  });

  test('should create an error from an existing error', () => {
    const originalError = new Error('Original error');
    const code = 'ECONNABORTED';
    const config = { url: 'http://example.com' };
    const customProps = { custom: 'custom value' };

    const devlanderError = DevlanderError.from(originalError, code, config, customProps);

    expect(devlanderError).toBeInstanceOf(DevlanderError);
    expect(devlanderError.message).toBe(originalError.message);
    expect(devlanderError.code).toBe(code);
    expect(devlanderError.config).toBe(config);
    expect(devlanderError.name).toBe(originalError.name);
    expect(devlanderError).toHaveProperty('stack');
    expect(devlanderError.cause).toBe(originalError);
  });

  test('should create an error from an existing error without code, config, and customProps', () => {
    const originalError = new Error('Original error');

    const devlanderError = DevlanderError.from(originalError);

    expect(devlanderError).toBeInstanceOf(DevlanderError);
    expect(devlanderError.message).toBe(originalError.message);
    expect(devlanderError.code).toBeUndefined();
    expect(devlanderError.config).toBeUndefined();
    expect(devlanderError.name).toBe(originalError.name);
    expect(devlanderError).toHaveProperty('stack');
    expect(devlanderError.cause).toBe(originalError);
  });
});
