import { logs } from './index.js';
import logger from './logger/index.js';

describe('Utils Logs', () => {
  it('should log info messages', () => {
    const infoSpy = jest.spyOn(logger, 'info').mockImplementation(() => {});
    logs.info('Test message');
    expect(infoSpy).toHaveBeenCalledWith('Test message');
    infoSpy.mockRestore();
  });
});