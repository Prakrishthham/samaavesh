import logger from './index.js';

describe('Logger', () => {
  it('should log info messages', () => {
    const infoSpy = jest.spyOn(logger, 'info').mockImplementation(() => {});
    logger.info('Test message');
    expect(infoSpy).toHaveBeenCalledWith('Test message');
    infoSpy.mockRestore();
  });
});