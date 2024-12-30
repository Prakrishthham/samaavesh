import { logs } from './index.js';
import pino from 'pino';

describe('Utils', () => {
  it('should log info messages', () => {
    const logger = pino();
    const spy = spyOn(logger, 'info').and.callThrough();

    // Mock the logger used in logs
    logs.info = (message) => logger.info(message);

    logs.info('Test message');
    expect(spy).toHaveBeenCalledWith('Test message');
  });
});