import request from 'supertest';
import app from './index.js';

describe('Express App', () => {
  it('should respond with 200 on GET /api/v1', async () => {
    const response = await request(app).get('/api/v1');
    expect(response.status).toBe(200);
    expect(response.text).toBe('GET request to the homepage');
  });

  it('should respond with 200 on POST /api/v1', async () => {
    const response = await request(app).post('/api/v1').send({ key: 'value' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ key: 'value' });
  });
});